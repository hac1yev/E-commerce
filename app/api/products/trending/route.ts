import { connectToDB } from "@/app/lib/connectToDB";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const pool = await connectToDB();

        const result = await pool.request().query(`
            select * from Products
        `); 

        await pool.close();

        return NextResponse.json({ result });
    } catch (error) {
        return NextResponse.json({ message: error });
    }
}