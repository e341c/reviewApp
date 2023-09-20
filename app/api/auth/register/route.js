import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    const { name, email, password } = await req.json()

    await connect();

    const hashedPassword = await bcrypt.hash(password, 5);

    const newUser = new User({
        name,
        email,
        password: hashedPassword,
        admin: false
    });

    try {
        await newUser.save();
        return new NextResponse("User has been created", {
            status: 201,
        });
    } catch (err) {
        console.log(name, email, password);
        return new NextResponse(err.message, {
            status: 500,
        });
    }
};
