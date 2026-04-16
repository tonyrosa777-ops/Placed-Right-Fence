// Required by 10DLC SMS compliance (Nextiva)
// Source: Nextiva 10DLC Team template + CLAUDE.md SEO Rule

import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for Placed Right Fence Co. LLC, including SMS messaging terms and opt-in/opt-out procedures.",
  openGraph: {
    title: "Terms & Conditions | Placed Right Fence Co. LLC",
    description: "Terms and conditions including SMS messaging terms.",
    url: `${siteConfig.url}/terms`,
  },
};

const LAST_UPDATED = "April 16, 2026";

export default function TermsPage() {
  return (
    <div className="pt-[100px]">
      {/* Hero */}
      <section className="py-12 lg:py-16" style={{ backgroundColor: "var(--primary)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="eyebrow text-white/40 mb-3">Legal</p>
          <h1
            className="font-display text-white mb-3"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}
          >
            Terms &amp; Conditions
          </h1>
          <p className="font-body text-sm text-white/50">
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-20" style={{ backgroundColor: "var(--bg-base)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose-container space-y-10">

            <Block title="SMS Terms and Conditions">
              <p>
                By opting in to receive SMS messages, you agree to the following: receive SMS
                messages from {siteConfig.name} to provide updates and important information.
                Message frequency may vary, and message and data rates may apply. You can opt out
                anytime by replying STOP. For help or more information, reply HELP.
              </p>
            </Block>

            <Block title="Opt-In">
              <p>
                Consent is obtained before sending messages. Subscribers will receive a confirmation
                message upon opting in:
              </p>
              <blockquote>
                &ldquo;You have successfully been subscribed to messages from {siteConfig.name} from
                this number. Message frequency may vary. Message and Data Rates may apply. Reply
                HELP for help. Reply STOP to unsubscribe.&rdquo;
              </blockquote>
            </Block>

            <Block title="Opt-Out">
              <p>
                Reply STOP at any time to unsubscribe. You will receive a confirmation message:
              </p>
              <blockquote>
                &ldquo;You have now been opted-out and will receive no further messages from{" "}
                {siteConfig.name} from this number. Reply START to resubscribe.&rdquo;
              </blockquote>
            </Block>

            <Block title="Help">
              <p>Reply HELP for assistance. You will receive:</p>
              <blockquote>
                &ldquo;For additional information, please call {siteConfig.name} at{" "}
                {siteConfig.phone}. To opt-out, reply STOP.&rdquo;
              </blockquote>
            </Block>

            <Block title="Privacy">
              <p>
                Your information is used only for the stated purposes. See our full{" "}
                <Link
                  href="/privacy"
                  className="underline hover:opacity-70 transition-opacity"
                  style={{ color: "var(--accent)" }}
                >
                  Privacy Policy
                </Link>{" "}
                on our website.
              </p>
            </Block>

            <Block title="Use of Service">
              <p>
                By accessing or using the services provided by {siteConfig.name}, you agree to be
                bound by these Terms and Conditions. If you disagree with any part of the terms, you
                may not access the service.
              </p>
              <p>
                We reserve the right to modify or replace these Terms at any time. It is your
                responsibility to check these Terms periodically for changes. Your continued use of
                or access to the Service following the posting of any changes constitutes acceptance
                of those changes.
              </p>
            </Block>

            <Block title="Contact Us">
              <p>
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <ul>
                <li>Phone: {siteConfig.phone}</li>
                <li>Email: {siteConfig.email}</li>
                <li>Address: {siteConfig.address.full}</li>
              </ul>
            </Block>

          </div>
        </div>
      </section>
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2
        className="font-display text-text-primary mb-4"
        style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)" }}
      >
        {title}
      </h2>
      <div className="font-body text-text-secondary text-sm leading-relaxed space-y-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_li]:text-text-secondary [&_blockquote]:border-l-2 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-text-muted" style={{ ["--tw-border-opacity" as string]: 1, borderColor: "var(--accent)" }}>
        {children}
      </div>
    </div>
  );
}
