import { NextResponse } from "next/server";
import { sendEmail } from "@/actions/sendEmail";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { senderEmail, message } = body;

    const formData = new FormData();
    formData.append("senderEmail", senderEmail);
    formData.append("message", message);

    const result = await sendEmail(formData);

    if (result?.error) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    return NextResponse.json({ data: result.data }, { status: 200 });
  } catch (error) {
    console.error("/api/send-email error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
