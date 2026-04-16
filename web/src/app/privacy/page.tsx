// Required by 10DLC SMS compliance (Nextiva)
// Source: Nextiva 10DLC Team template + CLAUDE.md SEO Rule

import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Placed Right Fence Co. LLC. Learn how we collect, use, and protect your personal information.",
  openGraph: {
    title: "Privacy Policy | Placed Right Fence Co. LLC",
    description: "How we collect, use, and protect your personal information.",
    url: `${siteConfig.url}/privacy`,
  },
};

const LAST_UPDATED = "April 16, 2026";

export default function PrivacyPage() {
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
            Privacy Policy
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

            <Block title="Overview">
              <p>
                This Privacy Policy describes {siteConfig.name} policies and procedures on the
                collection, use and disclosure of your information when you use our service and tells
                you about your privacy rights and how the law protects you.
              </p>
              <p>
                We use your personal data to provide and improve the Service. By using the Service,
                you agree to the collection and use of information in accordance with this Privacy
                Policy.
              </p>
              <p>
                {siteConfig.name} is committed to safeguarding the privacy of our users. We want to
                assure you that we do not share your personal information with third parties. This
                privacy policy outlines how we collect, use, and protect the information you provide
                to us.
              </p>
            </Block>

            <Block title="Information Collection">
              <p>
                We collect only the information necessary to provide and improve our services. This
                may include your name, email address, phone number, and property address. We do not
                sell, rent, or share this information with any third parties.
              </p>
            </Block>

            <Block title="How We Use Your Information">
              <p>
                The information collected is used solely for communicating with you as the intended
                party. We do not share your information with external parties for marketing or any
                other purposes. Additionally, no mobile or messaging consent information will be
                shared with third parties/affiliates for marketing/promotional purposes. All the
                above categories exclude text messaging originator opt-in data and consent; this
                information will not be shared with any third parties.
              </p>
              <p>We may use personal data for the following purposes:</p>
              <ul>
                <li>To provide and maintain our service, including to monitor the usage of our service.</li>
                <li>
                  To manage your Account: to manage your registration as a user of the Service. The
                  Personal Data you provide can give you access to different functionalities of the
                  Service that are available to you as a registered user.
                </li>
                <li>
                  For the performance of a contract: the development, compliance and undertaking of
                  the purchase contract for the products, items or services you have purchased or of
                  any other contract with us through the Service.
                </li>
                <li>
                  To contact You: To contact you by email, telephone calls, SMS, or other equivalent
                  forms of electronic communication, such as push notifications regarding updates or
                  informative communications related to the functionalities, products or contracted
                  services, including security updates, when necessary or reasonable for their
                  implementation.
                </li>
                <li>
                  To provide you with news, special offers and general information about other goods,
                  services and events which we offer that are similar to those that you have already
                  purchased or enquired about unless you have opted not to receive such information.
                </li>
                <li>To manage your requests: To attend and manage your requests to us.</li>
              </ul>
              <p>
                All messages you send through the Service, whether to us or other users, are stored
                on our servers. {siteConfig.name} employs servers and services owned by third parties
                to retain these messages.
              </p>
            </Block>

            <Block title="Disclosure of Your Information">
              <p>
                {siteConfig.name} does not share any client data with third parties for marketing,
                promotional purposes, or any other purposes. Your personal information is kept
                confidential and is not disclosed to any outside organizations, except as required by
                law or with your explicit consent. We may disclose your personal Information under
                the following limited circumstances:
              </p>
              <ul>
                <li>We have obtained your consent.</li>
                <li>We need to enforce our Terms of Service.</li>
                <li>
                  We share information with partners or affiliates that have signed non-disclosure
                  agreements with us only to provide you with a specific service.
                </li>
                <li>
                  We may provide such information to a company controlled by or under common control
                  with {siteConfig.name} for any purpose allowed by this Policy.
                </li>
                <li>
                  We respond to subpoenas, court orders, or legal processes, or to establish or
                  exercise our legal rights, or the legal rights of others, or defend against legal
                  claims.
                </li>
                <li>
                  When we believe it is necessary to disclose Personal Information to investigate,
                  prevent, or take action regarding illegal activities, suspected fraud, potential
                  threats to anyone's physical safety, violations of {siteConfig.name} Terms of
                  Service, or as otherwise required by law.
                </li>
                <li>
                  We transfer Personal Information about you if {siteConfig.name} or its assets are
                  acquired by or merged with another company.
                </li>
              </ul>
              <p>
                We may share aggregated, non-identifiable information with others without further
                notice to you, such as the total number of people who used the Service in a specific
                month or the total number of messages sent during a particular period.
              </p>
            </Block>

            <Block title="International Data Transfers">
              <p>
                Your Personal Information may be transferred to and processed in locations outside of
                your state, province, country, or other governmental jurisdiction where the data
                protection laws may differ from those in your jurisdiction. We take steps to ensure
                that your data is handled securely and in line with this Policy, regardless of where
                it is processed.
              </p>
            </Block>

            <Block title="Data Retention">
              <p>
                We retain your Personal Information only as long as necessary to fulfill the purposes
                outlined in this Policy unless a longer retention period is required or permitted by
                law. We will also retain and use your Personal Information as necessary to comply
                with legal obligations, resolve disputes, and enforce our agreements.
              </p>
            </Block>

            <Block title="Cookies and Tracking Technologies">
              <p>
                Our Service may use cookies and similar tracking technologies to enhance your
                experience. Cookies are small text files placed on your device to collect information
                about your activity on the Service. You can control the use of cookies through your
                browser settings, but disabling cookies may limit your ability to use certain
                features of the page or Service.
              </p>
            </Block>

            <Block title="Your Choices">
              <p>
                You have the right to access, correct, or delete your information. If you have any
                concerns or questions about your data, please contact us at:
              </p>
              <ul>
                <li>Phone: {siteConfig.phone}</li>
                <li>Email: {siteConfig.email}</li>
                <li>Address: {siteConfig.address.full}</li>
              </ul>
            </Block>

            <Block title="Policy Changes">
              <p>
                We may update our privacy policy from time to time. Any changes will be communicated
                to you, and your continued use of our services implies your acceptance of the updated
                policy. By using our services, you agree to the terms outlined in this privacy
                policy.
              </p>
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
      <div className="font-body text-text-secondary text-sm leading-relaxed space-y-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_li]:text-text-secondary">
        {children}
      </div>
    </div>
  );
}
