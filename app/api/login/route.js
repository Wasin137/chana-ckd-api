import connectMongoDB from "@/libs/mongodb"
import Users from "@/models/user"
import { NextResponse } from "next/server"

export async function POST(request){
    const {username, password} = await request.json()
    await connectMongoDB()
    const user = await Users.findOne({username})
    return NextResponse.json({user})
}