import React from 'react';
import { PageHero } from '../components/common/PageHero';
import { SITE_CONFIG } from '../data/siteData';

export const PrivacyPolicyPage: React.FC = () => {
  const sections = [
    { title: "Information We Collect", body: "We collect information you provide directly, including your name, phone number, email address, and project details submitted through our contact form, quotation request form, or newsletter sign-up." },
    { title: "Cookies & Preferences", body: "Our website may use local storage and cookies to remember your preferences, such as dark mode settings, and to understand how visitors navigate our site. You can disable cookies through your browser settings." },
    { title: "Contact & Quotation Forms", body: "Information submitted through our contact and quotation forms is used solely to respond to your inquiry and, where relevant, prepare a customized project Bill of Quantities or schedule a consultation." },
    { title: "How We Use Your Information", body: "We use your information to respond to enquiries, provide quotations, deliver construction or interior services you have requested, and, if you opt in, send newsletter updates about completed projects." },
    { title: "Data Protection & Security", body: "We take reasonable technical and organisational security measures to protect your personal and architectural details from unauthorised access, alteration, or disclosure." },
    { title: "Third-Party Services", body: "We may use third-party services such as Google Maps and email delivery providers to operate our website. These providers process data according to their own privacy policies." },
    { title: "Email Subscriptions", body: "If you subscribe to our newsletter, you can unsubscribe at any time using the link provided in any email or by emailing us directly." },
    { title: "Analytics", body: "We may monitor aggregated website traffic metrics to understand visitor needs and optimize our service catalogue. This data does not personally identify individuals." },
    { title: "Your Rights", body: `You may request access to, correction of, or deletion of your personal information by contacting us directly at ${SITE_CONFIG.email}.` },
    { title: "Changes to This Policy", body: "We may update this privacy policy from time to time to reflect evolving regulatory or technological standards. Continued use of our website constitutes acceptance of the revised policy." }
  ];

  return (
    <div className="min-h-screen">
      <PageHero
        title="Privacy Policy"
        breadcrumb="Privacy Policy"
        lead="Our commitment to safeguarding your personal data and architectural intellectual property."
        minHeight="min-h-[380px]"
      />

      <section className="py-20 bg-white dark:bg-[#0B1120] text-slate-900 dark:text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {sections.map((sec, idx) => (
            <div key={idx} className="space-y-2 border-b border-slate-100 dark:border-slate-800 pb-8">
              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                {idx + 1}. {sec.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {sec.body}
              </p>
            </div>
          ))}

          <div className="pt-4 text-sm text-slate-500">
            For any privacy inquiries or data requests, please write to:{' '}
            <a href={`mailto:${SITE_CONFIG.email}`} className="text-[#F5810D] font-semibold underline">
              {SITE_CONFIG.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
