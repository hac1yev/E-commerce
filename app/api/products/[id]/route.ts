import { connectToDB } from "@/app/lib/connectToDB";
import { verifyJWTToken } from "@/app/lib/verifyToken";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const url = req.url;
    const id = url.split("/").at(-1);

    const bearer = req.headers.get("Authorization");
    const accessToken = bearer?.split(" ").at(-1) || "";

    const isValidAccessToken = await verifyJWTToken(accessToken);

    if(!isValidAccessToken) {
        return NextResponse.json({ message: 'Forbidden!' }, { status: 403 });
    }    

    const pool = await connectToDB();

    const result = await pool.request().query(`
        select p.*, c.label [categories], t.label [tags], s.label [status_content], ty.label [type_content] 
        from Products p inner join ProductCategories pc
        on p.id = pc.productId inner join Categories c
        on pc.categoryId = c.value inner join ProductTags pt 
        on p.id = pt.productId inner join Tags t
        on pt.tagId = t.value inner join Status s
        on p.status = s.value inner join Types ty
        on p.type = ty.value
        where p.id = ${id}
    `);

    const ratingResult = await pool.request().query(`
        WITH Stars AS (
            SELECT 1 AS star UNION ALL
            SELECT 2 UNION ALL
            SELECT 3 UNION ALL
            SELECT 4 UNION ALL
            SELECT 5
        )
        SELECT s.star,  COUNT(pr.star) AS count
        FROM Stars s CROSS JOIN Products p
        LEFT JOIN ProductRatings pr ON pr.star = s.star AND pr.productId = p.id
        WHERE p.id = ${id}
        GROUP BY p.id, s.star
        ORDER BY s.star;
    `);    

    const resultProduct = result.recordset.reduce((resultArr, item) => {
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
    
    resultProduct[0].ratingResult = ratingResult.recordset;
    
    return NextResponse.json({ message: 'Success', data: resultProduct });
}