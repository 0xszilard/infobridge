"use server"

import { cookies } from "next/headers";

export async function signUp(formData) {
    try {
        const data = Object.fromEntries(formData);

        const payload = { email: data.email };

        await fetch("https://hook.eu2.make.com/gge0z4512y3y2n0l1ke7o6sqdk3e59t5", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-make-apikey": process.env.NEWSLETTER_API_KEY
            },
            body: JSON.stringify(payload),
        });

        (await cookies()).set("newsletter", true)
    } catch (e) {
        console.error(e);
    }
}