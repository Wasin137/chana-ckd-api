import connectMongoDB from "@/libs/mongodb"
import Comment from "@/models/comment"
import { NextResponse } from "next/server"

export async function POST(request) {
    const {rating, comment} = await request.json()
    await connectMongoDB()
    await Comment.create({rating, comment})
    return NextResponse.json({message: "Comment created"}, {status: 201})
}

export async function GET(request) {
    await connectMongoDB();

    if (request.nextUrl.searchParams.has('firstpage')) {
        const comments = await Comment.find().sort({ createdAt: -1 }).limit(4);
        return NextResponse.json({comments});
    }

    const comments = await Comment.find().sort({ createdAt: -1 });
    return NextResponse.json({comments});
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get('id')
    await connectMongoDB()
    await Comment.findByIdAndDelete(id)
    return NextResponse.json({message: "Comment deleted"}, { status: 200})
}