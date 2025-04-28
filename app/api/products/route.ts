import { verifyJWTToken } from "@/app/lib/verifyToken";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const bearer = req.headers.get("Authorization") || "";

    const accessToken = bearer.split(" ")[1];

    const isVerifyAccessToken = await verifyJWTToken(accessToken);

    if(!isVerifyAccessToken) {
        return NextResponse.json({ message: 'Forbidden!' }, { status: 403 });
    }

    return NextResponse.json({ message: 'Success' });
} 