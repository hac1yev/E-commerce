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
        select p.*, c.label [categories], t.label [tags]
        from Products p inner join ProductCategories pc
        on p.id = pc.productId inner join Categories c
        on pc.categoryId = c.value inner join ProductTags pt 
        on p.id = pt.productId inner join Tags t
        on pt.tagId = t.value
        where p.id = ${id}
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
    
    return NextResponse.json({ message: 'Success', data: resultProduct });
}