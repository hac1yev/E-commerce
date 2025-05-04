import { connectToDB } from "@/app/lib/connectToDB";
import { verifyJWTToken } from "@/app/lib/verifyToken";
import { NextRequest, NextResponse } from "next/server";
import sql from 'mssql';

export async function GET(req: NextRequest) {
    const bearer = req.headers.get("Authorization") || "";

    const accessToken = bearer.split(" ")[1];

    const isVerifyAccessToken = await verifyJWTToken(accessToken);

    if(!isVerifyAccessToken) {
        return NextResponse.json({ message: 'Forbidden!' }, { status: 403 });
    }
    
    const pool = await connectToDB();

    const productsRequest = await pool.request().query(`
        select * from Products
    `);

    return NextResponse.json({ message: 'Success', products: productsRequest.recordset });
} 

export async function POST(req: NextRequest) {
    const { title,discount,image,description,additionalInfo,price,life,type,status,tags,categories,brand } = await req.json();
    const bearer = req.headers.get("Authorization") || "";

    const accessToken = bearer.split(" ")[1];

    const isVerifyAccessToken = await verifyJWTToken(accessToken);

    if(!isVerifyAccessToken) {
        return NextResponse.json({ message: 'Forbidden!' }, { status: 403 });
    }

    const pool = await connectToDB();

    const insertProductRequest = await pool.request()
        .input("discount", sql.Int, discount)
        .input("image", sql.VarChar, image.url)
        .input("title", sql.VarChar, title)
        .input("description", sql.VarChar, description)
        .input("additionalInfo", sql.VarChar, additionalInfo)
        .input("price", sql.Int, price)
        .input("value", sql.Int, price + (price * (discount / 100)))
        .input("reviewCount", sql.Int, 0)
        .input("life", sql.Date, new Date(life))
        .input("createdAt", sql.Date, new Date())
        .input("views", sql.Int, 1)
        .input("type", sql.Int, type)
        .input("status", sql.Int, status)
        .input("brand", sql.VarChar, brand)
        .input("salesCount", sql.Int, 0)
    .query(`
        insert into Products
        output inserted.id
        values (@discount,@image,@title,@description,@additionalInfo,@price,@value,@reviewCount,@life,@createdAt,@views,@type,@status,@brand,@salesCount)
    `);

    const productId = insertProductRequest.recordset[0].id;

    for(const category of categories) {
        await pool.request()
            .input("productId", sql.Int, productId)
            .input("categoryId", sql.Int, category.value)
            .query(`INSERT INTO ProductCategories VALUES (@productId, @categoryId)`);
    }

    for(const tag of tags) {
        await pool.request()
            .input("productId", sql.Int, productId)
            .input("tagId", sql.Int, tag.value)
            .query(`INSERT INTO ProductTags VALUES (@productId, @tagId)`);
    }

    return NextResponse.json({ message: 'Success' });
};