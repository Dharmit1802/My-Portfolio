"use server";

import ContactFormEmail from "@/email/contact-form-email";
import React from "react";
import { Resend } from "resend";

// const resend = new Resend("re_JCpBrsP1_MJzz7VkkNfAUFjDiKFSNx9tT");
const resend = new Resend(process.env.RESEND_API_KEY);

function validateString(value: unknown, maxlength: number) {
    if (!value || typeof value !== "string" || value.length > maxlength)
        return false;

    return true;
}

function getErrorMessage(error: unknown) {
    let message: string;
    if (error instanceof Error) {
        message = error.message;
    }
    else if (error && typeof error === "object" && 'message' in error) {
        message = String(error.message);
    }
    else if (typeof error === 'string') {
        message = error;
    }
    else {
        message = "something went wrong here!!"
    }
    return message;
}

export const sendEmail = async (formData: FormData) => {

    const senderEmail = formData.get('senderEmail');
    const message = formData.get('message');
    console.log(message);

    if (!validateString(message, 500)) {
        return {
            error: "invalid message",
        };
    }
    if (!validateString(senderEmail, 500)) {
        return {
            error: "invalid sender email",
        };
    }
    let data;
    try {

        data = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "dharmit1802@gmail.com",
            subject: "message from contact form of the portfolio",
            reply_to: senderEmail as string,
            react: React.createElement(ContactFormEmail, { message: message as string, senderEmail: senderEmail as string })
        });
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error),
        }
    }

    return { data };
};