import { connectToDB } from "@/app/lib/connectToDB";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { email,username,password } = await req.json();

        const pool = await connectToDB();
        const result = await pool.request().query(`
            SELECT email, username 
            FROM Users 
            WHERE email = @email OR username = @username 
        `);

        await pool.close();

        return NextResponse.json({ result });
    } catch (error) {
        return NextResponse.json({ error });
    }
}