import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { email,password } = await req.json();

        

        const response = NextResponse.json({ message: "Success" });
    
        return response;
    } catch (error) {
        return NextResponse.json({ error });
    }
}