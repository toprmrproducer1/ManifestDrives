import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Policies — Manifest Drives",
  description: "Returns, refunds, shipping policy, privacy policy, and terms of service for Manifest Drives.",
};

const sections = [
  {
    id: "returns",
    title: "Returns & Refunds",
    content: [
      {
        heading: "We stand behind every model we ship.",
        body: null,
      },
      {
        heading: "Damaged or Defective Items",
        body: "If your order arrives damaged or defective, email us at support@manifestdrives.com within 7 days of delivery with a photo of the damage. We will reship your order or issue a full refund immediately — your choice. No questions asked.",
      },
      {
        heading: "Change of Mind",
        body: "We do not accept returns for change of mind once an order has been dispatched. Please review your order carefully before confirming.",
      },
      {
        heading: "Lost Packages",
        body: "If tracking shows your order is lost in transit, we will reship at no cost to you.",
      },
      {
        heading: "Refund Timeline",
        body: "All refunds are processed within 3–5 business days back to your original payment method.",
      },
    ],
  },
  {
    id: "shipping",
    title: "Shipping Policy",
    content: [
      {
        heading: "Processing Time",
        body: "All orders are dispatched within 1–2 business days of purchase confirmation.",
      },
      {
        heading: "Delivery Time",
        body: "Delivered in 6–12 business days worldwide. Delivery times may vary slightly depending on your location and local customs processing.",
      },
      {
        heading: "Tracking",
        body: "A tracking number is sent to your email as soon as your order ships. You can use this to follow your parcel at every step.",
      },
      {
        heading: "Free International Shipping",
        body: "Free shipping on every order, worldwide. No minimum spend. No hidden fees.",
      },
      {
        heading: "Customs & Duties",
        body: "International orders may be subject to import duties and taxes levied by your country's customs authority. These charges are the responsibility of the recipient. We have no control over these charges and cannot predict their amount.",
      },
    ],
  },
  {
    id: "privacy",
    title: "Privacy Policy",
    content: [
      {
        heading: "What We Collect",
        body: "When you place an order, we collect your name, email address, shipping address, and payment details. Payment information is processed securely and never stored on our servers.",
      },
      {
        heading: "How We Use It",
        body: "Your information is used solely to process and ship your order, communicate order updates, and (with your consent) send occasional product news and offers.",
      },
      {
        heading: "Third Parties",
        body: "We share your shipping details with our logistics partners strictly for delivery purposes. We do not sell, rent, or share your personal data with any third party for marketing purposes.",
      },
      {
        heading: "Cookies",
        body: "Our website uses cookies to ensure a smooth shopping experience and to analyse site performance. You may disable cookies in your browser settings, though some features may not function correctly.",
      },
      {
        heading: "Your Rights",
        body: "You may request access to, correction of, or deletion of your personal data at any time by contacting us at support@manifestdrives.com.",
      },
      {
        heading: "Data Retention",
        body: "We retain your order data for a maximum of 3 years for accounting and legal compliance purposes.",
      },
    ],
  },
  {
    id: "terms",
    title: "Terms of Service",
    content: [
      {
        heading: "Acceptance",
        body: "By placing an order on manifestdrives.com, you agree to these Terms of Service in full. If you disagree with any part, please refrain from using our website.",
      },
      {
        heading: "Products",
        body: "All Manifest Drives models are 1:32 scale die-cast collectibles intended for adult display use. They are not suitable for children under 14. Product images are for illustrative purposes; minor colour variations may occur.",
      },
      {
        heading: "Pricing",
        body: "All prices are listed in USD. We reserve the right to change prices at any time without notice. The price at the time of your order is the price you will be charged.",
      },
      {
        heading: "Order Cancellation",
        body: "Orders may be cancelled within 12 hours of placement if they have not yet been dispatched. To cancel, email support@manifestdrives.com immediately. Once an order has been dispatched, it cannot be cancelled.",
      },
      {
        heading: "Limitation of Liability",
        body: "Manifest Drives shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or website. Our maximum liability is limited to the total value of your order.",
      },
      {
        heading: "Governing Law",
        body: "These terms are governed by applicable laws. Any disputes will be resolved through good-faith negotiation wherever possible.",
      },
    ],
  },
  {
    id: "contact",
    title: "Contact Us",
    content: [
      {
        heading: "Support",
        body: "For all order enquiries, returns, and support: support@manifestdrives.com. We aim to respond within 24 hours on business days.",
      },
      {
        heading: "Response Time",
        body: "Monday – Friday, 9am – 6pm. Emails received over the weekend will be answered the next business day.",
      },
    ],
  },
];

export default function PoliciesPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">

      {/* Header */}
      <div className="border-b border-white/5 px-6 md:px-[8vw] py-6 flex items-center justify-between">
        <Link href="/" className="font-bebas text-[22px] tracking-[6px] text-white hover:text-[#E8000D] transition-colors">
          MANIFEST<span className="text-[#E8000D]">DRIVES</span>
        </Link>
        <Link href="/" className="font-inter text-[12px] tracking-[2px] text-white/40 hover:text-white/80 transition-colors uppercase">
          ← Back to Store
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-[8vw] py-20">

        {/* Page Title */}
        <div className="mb-16">
          <p className="font-inter text-[11px] tracking-[5px] text-[#E8000D] uppercase mb-4">Legal</p>
          <h1 className="font-bebas text-[56px] md:text-[80px] leading-none tracking-wide">
            OUR POLICIES
          </h1>
          <p className="font-inter text-[15px] text-[#9A9A9A] mt-4 max-w-xl leading-relaxed">
            We keep it simple. Honest products. Honest policies. No small print designed to catch you out.
          </p>
        </div>

        {/* Quick Nav */}
        <div className="flex flex-wrap gap-3 mb-20 pb-16 border-b border-white/5">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="font-inter text-[11px] tracking-[2px] uppercase text-white/40 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 transition-all duration-200"
            >
              {s.title}
            </a>
          ))}
        </div>

        {/* Sections */}
        <div className="space-y-24">
          {sections.map((section) => (
            <div key={section.id} id={section.id} className="scroll-mt-10">
              <h2 className="font-bebas text-[36px] md:text-[48px] tracking-[2px] text-white mb-10 pb-4 border-b border-white/5">
                {section.title}
              </h2>
              <div className="space-y-8">
                {section.content.map((block, i) => (
                  <div key={i}>
                    {block.heading && (
                      <h3 className={`font-inter font-semibold text-[15px] tracking-wide mb-2 ${block.body ? "text-white" : "text-[#E8000D] text-[18px]"}`}>
                        {block.heading}
                      </h3>
                    )}
                    {block.body && (
                      <p className="font-inter text-[15px] text-[#9A9A9A] leading-[1.8] max-w-3xl">
                        {block.body}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 pt-10 border-t border-white/5 font-inter text-[12px] text-white/20">
          Last updated: March 2026 · Manifest Drives
        </div>
      </div>
    </main>
  );
}
