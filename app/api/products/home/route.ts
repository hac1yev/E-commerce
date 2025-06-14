import { connectToDB } from "@/app/lib/connectToDB";
import { verifyJWTToken } from "@/app/lib/verifyToken";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const bearer = req.headers.get("Authorization") || "";
        const accessToken = bearer.split(" ")[1];
        const isVerifyAccessToken = await verifyJWTToken(accessToken);
    
        if(!isVerifyAccessToken) {
            return NextResponse.json({ message: 'Forbidden!' }, { status: 403 });
        }
        
        const pool = await connectToDB();

        const userResult = await pool.request().query(`
            select userId from Users where email = '${isVerifyAccessToken.email}'
        `);

        if (!userResult.recordset.length) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        const { userId } = userResult.recordset[0];

        const query = `
            select p.*, c.label [categories], t.label [tags],
            case 
                when lp.productId is not null and lp.userId = ${userId} then 1
                else 0
            end as liked
            from Products p left join ProductCategories pc
            on p.id = pc.productId left join Categories c
            on pc.categoryId = c.value left join ProductTags pt 
            on p.id = pt.productId left join Tags t
            on pt.tagId = t.value left join LikedProducts lp
            on lp.productId = p.id
        `;

        const result = await pool.request().query(query); 

        const resultProducts = result.recordset.reduce((resultArr, item) => {
            const { id,categories,tags } = item;
            const index = resultArr.findIndex((obj: ProductType) => obj.id === id);

            if (index === -1) {
                resultArr.push({
                    ...item,
                    categories: [categories],
                    tags: [tags]
                });
            }else{
                if(!resultArr[index].categories.includes(categories)) {
                    resultArr[index].categories.push(categories);
                }
                if(!resultArr[index].tags.includes(tags)) {
                    resultArr[index].tags.push(tags);
                }
            }

            return resultArr;
        }, []);   

        const discountProducts = resultProducts.filter((item: ProductType) => item.status === 1).toSorted((a: ProductType, b: ProductType) => b.discount - a.discount).slice(0,4);
        const trendingProducts = resultProducts.filter((item: ProductType) => item.status === 1).toSorted((a: ProductType, b: ProductType) => b.salesCount - a.salesCount).slice(0,8);
        const featuredProducts = resultProducts.filter((item: ProductType) => item.status === 1).toSorted((a: ProductType, b: ProductType) => b.views - a.views).slice(0,10);
        const weeklyProducts = resultProducts.filter((item: ProductType) => item.status === 1).filter((item: ProductType) => {
            const today = new Date();
            const oneWeekAgo = new Date();
            oneWeekAgo.setDate(today.getDate() - 7);

            const productDate = new Date(item.createdAt); 

            return productDate >= oneWeekAgo && productDate <= today;
        });

        await pool.close();

        return NextResponse.json({ discountProducts, trendingProducts, featuredProducts, weeklyProducts });
    } catch (error) {
        return NextResponse.json({ message: error });
    }
}