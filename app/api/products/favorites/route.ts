import { connectToDB } from "@/app/lib/connectToDB";
import { NextRequest, NextResponse } from "next/server";
import sql from 'mssql';

export async function POST(req: NextRequest) {
    try {
        const { productId,userId } = await req.json();

        const pool = await connectToDB();

        const result = await pool.request()
        .input("productId", sql.Int, productId)
        .input("userId", sql.Int, userId)
        .query(`
            insert into LikedProducts
            values(@productId, @userId)
        `);

        return NextResponse.json({ message: 'Success', result });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });        
    }
};