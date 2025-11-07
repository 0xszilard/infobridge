"use server"
import { cookies } from "next/headers";
import z from "zod";

const WaitListSchema = z.object({
    email: z.email({ message: "Invalid email address" }),
});


export async function sendWaitlist(
    prevState,
    formData,
) {
    try {
        const contactFormData = Object.fromEntries(formData.entries());
        const validatedFormData = WaitListSchema.safeParse(contactFormData);

        if (!validatedFormData.success) {
            const formFieldErrors = validatedFormData.error.flatten().fieldErrors;

            return {
                errors: {
                    email: formFieldErrors?.email,
                },
            };
        }

        const values = validatedFormData.data;

        await fetch("https://hook.eu2.make.com/gge0z4512y3y2n0l1ke7o6sqdk3e59t5", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        });

        const cookieStore = await cookies(); // no await here
        cookieStore.set("waitlist", "true");

        return { success: "Successfully signed up!" };
    } catch (e) {
        console.error(e);
        return { errors: { email: ["Unexpected error occurred."] } };
    }
}
