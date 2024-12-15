import Profile from "@/models/Profile";
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
            !title || !description || !location || !price || !phone || !realState || !constructionDate || !category
        ) {
            return NextResponse.json({
                error: "لطفا تمام موارد را کامل کنید"
            }, {
                status: 400
            })
        }

        const newProfile = await Profile.create({ title, description, location, price: +price, phone, realState, constructionDate, amenities, rules, category, userId: new Types.ObjectId(user._id.toString()) })
        console.log(newProfile)
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


export async function PATCH(req) {
    try {
        const { _id, title, description, location, price, phone, realState, constructionDate, amenities, rules, category } = await req.json();

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
            !_id || !title || !description || !location || !price || !phone || !realState || !constructionDate || !category
        ) {
            return NextResponse.json({
                error: "لطفا تمام موارد را کامل کنید"
            }, {
                status: 400
            })
        }

        const profile = await Profile.findOne({ _id })

        if (!user._id.equals(profile.userId)) {
            return NextResponse.json({
                error: "دسترسی شما به  آگهی مخدود شده است!!"
            }, { status: 403 })
        }

        profile.title = title;
        profile.description = description;
        profile.location = location;
        profile.price = price;
        profile.phone = phone;
        profile.realState = realState;
        profile.constructionDate = constructionDate;
        profile.amenities = amenities;
        profile.rules = rules;
        profile.category = category;

        profile.save();

        return NextResponse.json({
            message: "آگهی با موفقیت ویرایش شد"
        }, { status: 200 })

    } catch (err) {
        console.log(err);
        return NextResponse.json({ err: " مشکلی در سرور رخ داده است" }, { status: 500 })
    }
}

