import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { Types } from "mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";



export async function POST(req) {
    try {
        await connectDB();

        const body = await req.json();
        const { title, description, location, price, phone, realState, constructionDate, amenities, rules, category } = body;

        const session = await getServerSession(req);
        if (!session) {
            return NextResponse.json({
                error: "لطفا وارد حساب کاربری خود شوید "
            }, {
                status: 401,
            })
        }

        const user = await User.findOne({ email: session.user.email });
        if (!user) {
            return NextResponse.json({ error: "حساب کاربری یافت نشد " }, { status: 404 });
        }

        if (
            !title || !description || !location || !price || !phone || !realState || !constructionDate || category
        ) {
            return NextResponse.json({
                error: "لطفا تمام موارد را کامل کنید"
            }, {
                status: 400
            })
        }

        const newProfile = await Profiler.create({ title, description, location, price: +price, phone, realState, constructionDate, amenities, rules, category, userId: new Types.ObjectId(user._id.toString()) })
        return NextResponse.json({
            message: "آگهی جدید اضافه شد "
        }, {
            status: 201
        })
    } catch (err) {
        console.log(err);
        return NextResponse.json({ err: " مشکلی در سرور رخ داده است" }, { status: 500 })
    }
}
