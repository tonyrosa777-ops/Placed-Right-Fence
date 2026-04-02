import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

// Sanity webhook → POST /api/revalidate?secret=<SANITY_REVALIDATE_SECRET>
// Configured in Sanity project settings > API > Webhooks
// Fires on post publish/unpublish — revalidates the blog index and the specific post

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    const body = await req.json().catch(() => ({}));
    const slug: string | undefined = body?._id ? undefined : body?.slug?.current;

    // Always revalidate the blog index
    revalidatePath("/blog");

    // Revalidate the specific post if slug is present
    if (slug) {
      revalidatePath(`/blog/${slug}`);
    }

    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch {
    return NextResponse.json({ message: "Error revalidating" }, { status: 500 });
  }
}
