import { connectToDB } from "@/app/lib/connectToDB";
import { verifyJWTToken } from "@/app/lib/verifyToken";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const bearer = req.headers.get("Authorization") || "";

    if (!bearer.startsWith("Bearer ")) {
      return NextResponse.json({ message: "Missing or malformed token" }, { status: 401 });
    }

    const accessToken = bearer.split(" ")[1] || "";
    const user = await verifyJWTToken(accessToken);

    if (!user) {
      return NextResponse.json({ message: "Invalid or expired access token." }, { status: 403 });
    }

    const pool = await connectToDB();

    const [categoriesResult, tagsResult, typesResult, statusResult] = await Promise.all([
      pool.request().query(`SELECT * FROM Categories ORDER BY value`),
      pool.request().query(`SELECT * FROM Tags ORDER BY value`),
      pool.request().query(`SELECT * FROM Types ORDER BY value`),
      pool.request().query(`SELECT * FROM Status ORDER BY value`)
    ]);

    await pool.close();

    return NextResponse.json({
      categories: categoriesResult.recordset,
      tags: tagsResult.recordset,
      types: typesResult.recordset,
      status: statusResult.recordset
    });

  } catch (error) {
    console.error("API /products/meta error:", error);
    return NextResponse.json({ message: "Internal Server Error", error }, { status: 500 });
  }
}