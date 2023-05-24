import { mailOptions, transporter } from "@/lib/nodemailer";
import { NextResponse } from "next/server";

export async function POST(request : Request){
    const data  = await request.json();

    if(!data?.email || !data?.name || !data?.message){
        return new NextResponse(JSON.stringify({message: "invalid input"}), {status: 404});
    }
    try{

        await transporter.sendMail({
            ...mailOptions,
            subject: `New message from ${data.name}`,
            text: `Email: ${data.email}\nMessage: ${data.message}`,
        });
        return new NextResponse(JSON.stringify({message: "success"}), {status: 200});
        
    }catch(error){
        console.error(error);
        return new NextResponse(JSON.stringify({message: "error"}), {status: 500});
    }
}