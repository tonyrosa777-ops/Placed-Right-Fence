import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const OWNER_EMAIL = process.env.OWNER_EMAIL || "info@placedrightfences.com";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { source } = body as { source: string };

    if (source === "estimate") {
      return handleEstimate(body);
    } else if (source === "quiz") {
      return handleQuiz(body);
    } else if (source === "shop_waitlist") {
      return handleShopWaitlist(body);
    }

    return NextResponse.json({ error: "Unknown source" }, { status: 400 });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

async function handleEstimate(body: Record<string, string>) {
  const { name, email, phone, address, fence_type, linear_feet, timeline, notes } = body;

  await resend.emails.send({
    from: "Placed Right Fence <estimates@placedrightfences.com>",
    to: OWNER_EMAIL,
    replyTo: email,
    subject: `New Fence Estimate Request — ${fence_type}`,
    html: `
      <h2>New Estimate Request</h2>
      <table style="border-collapse:collapse;width:100%">
        <tr><td style="padding:8px;font-weight:bold">Name</td><td style="padding:8px">${esc(name)}</td></tr>
        <tr><td style="padding:8px;font-weight:bold">Phone</td><td style="padding:8px"><a href="tel:${esc(phone)}">${esc(phone)}</a></td></tr>
        <tr><td style="padding:8px;font-weight:bold">Email</td><td style="padding:8px"><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
        <tr><td style="padding:8px;font-weight:bold">Address</td><td style="padding:8px">${esc(address)}</td></tr>
        <tr><td style="padding:8px;font-weight:bold">Fence Type</td><td style="padding:8px">${esc(fence_type)}</td></tr>
        <tr><td style="padding:8px;font-weight:bold">Linear Feet</td><td style="padding:8px">${esc(linear_feet)}</td></tr>
        <tr><td style="padding:8px;font-weight:bold">Timeline</td><td style="padding:8px">${esc(timeline)}</td></tr>
        <tr><td style="padding:8px;font-weight:bold">Notes</td><td style="padding:8px">${esc(notes)}</td></tr>
      </table>
    `,
  });

  return NextResponse.json({ success: true });
}

async function handleQuiz(body: Record<string, string>) {
  const {
    name, email, phone, address,
    quiz_trigger, quiz_fence_type, quiz_timeline, quiz_size,
    recommendation,
  } = body;

  await resend.emails.send({
    from: "Placed Right Fence <quiz@placedrightfences.com>",
    to: OWNER_EMAIL,
    replyTo: email,
    subject: `Fence Finder Quiz Lead — ${recommendation}`,
    html: `
      <h2>Fence Finder Quiz Lead</h2>
      <table style="border-collapse:collapse;width:100%">
        <tr><td style="padding:8px;font-weight:bold">Name</td><td style="padding:8px">${esc(name)}</td></tr>
        <tr><td style="padding:8px;font-weight:bold">Phone</td><td style="padding:8px"><a href="tel:${esc(phone)}">${esc(phone)}</a></td></tr>
        <tr><td style="padding:8px;font-weight:bold">Email</td><td style="padding:8px"><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
        <tr><td style="padding:8px;font-weight:bold">Address</td><td style="padding:8px">${esc(address)}</td></tr>
        <tr><td style="padding:8px;font-weight:bold">Trigger</td><td style="padding:8px">${esc(quiz_trigger)}</td></tr>
        <tr><td style="padding:8px;font-weight:bold">Fence Type</td><td style="padding:8px">${esc(quiz_fence_type)}</td></tr>
        <tr><td style="padding:8px;font-weight:bold">Timeline</td><td style="padding:8px">${esc(quiz_timeline)}</td></tr>
        <tr><td style="padding:8px;font-weight:bold">Yard Size</td><td style="padding:8px">${esc(quiz_size)}</td></tr>
        <tr><td style="padding:8px;font-weight:bold">Recommendation</td><td style="padding:8px">${esc(recommendation)}</td></tr>
      </table>
    `,
  });

  return NextResponse.json({ success: true });
}

async function handleShopWaitlist(body: Record<string, string>) {
  const { email } = body;

  await resend.emails.send({
    from: "Placed Right Fence <shop@placedrightfences.com>",
    to: OWNER_EMAIL,
    replyTo: email,
    subject: "Shop Waitlist Signup",
    html: `
      <h2>New Shop Waitlist Signup</h2>
      <p><strong>Email:</strong> <a href="mailto:${esc(email)}">${esc(email)}</a></p>
    `,
  });

  return NextResponse.json({ success: true });
}

/** Escape HTML to prevent injection in email templates */
function esc(str: string | undefined): string {
  if (!str) return "Not provided";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
