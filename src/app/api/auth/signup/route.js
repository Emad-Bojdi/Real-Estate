import { NextResponse } from "next/server";
import User from "@/models/User"
import connectDB from "@/utils/connectDB";
import { hashPassword } from "@/utils/auth";

export async function POST(req) {
    try {
        await connectDB();

        const { email, password } = await req.json();
        

        if (!email || !password) {
            return NextResponse.json({
                error: "اطلاعات را به درستی وارد کنید"
            },
                {
                    status: 422
                })
        }
        const existingUser = await User.findOne({ email });
        
        if (existingUser) {
            return NextResponse.json({
                error: " این حساب کاربری وجود دارد "
            }, {
                status: 500,
            })
        }
        const hashedPassword = await hashPassword(password);

        const newUser = await User.create({ email, password: hashedPassword });

        return NextResponse.json({ message: "حساب کاربری ایجاد شد" }, { status: 201 })

    } catch (err) {
        
        return NextResponse.json({ error: " مشکلی در سرور رخ داده است" },
            {
                status: 500,
            }
        )
    }
}
