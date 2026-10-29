import React from 'react';
import { PageHero } from '../components/common/PageHero';
import { SITE_CONFIG } from '../data/siteData';

export const TermsPage: React.FC = () => {
  const sections = [
    { title: "Website Usage", body: `This website is provided for the purpose of informing visitors about ${SITE_CONFIG.name}'s architectural, construction, and property solutions, and facilitating enquiries. You agree to use this website lawfully and without infringing upon third-party rights.` },
    { title: "Intellectual Property", body: `All content on this website, including text, photographs, drawings, design logos, and trademarks, is the intellectual property of ${SITE_CONFIG.name} unless otherwise credited, and may not be copied or reproduced without prior written consent.` },
    { title: "Service Enquiries", body: "Submitting a contact form, project description, or quotation request does not constitute a legally binding construction contract. Formal engagements are executed via bilateral written agreements specifying scope, deliverables, and milestones." },
    { title: "Quotations & Estimates", body: "All preliminary quotations provided through digital forms are initial estimates based on client-submitted parameters, and are subject to formal confirmation following an on-site engineering inspection." },
    { title: "Limitation of Liability", body: `${SITE_CONFIG.name} shall not be held liable for any indirect or consequential damages resulting from website downtime, general informational advice, or third-party links.` },
    { title: "Privacy Reference", body: "Your use of this website is also governed by our Privacy Policy, which outlines our data collection, storage, and handling standards." },
    { title: "Governing Law", body: "These terms and conditions are governed by and construed in accordance with the laws of the Federal Republic of Nigeria." }
  ];

  return (
    <div className="min-h-screen">
      <PageHero
        title="Terms & Conditions"
        breadcrumb="Terms & Conditions"
        lead="Terms governing the usage of Eclectic Seals Int'l online services and consultation platforms."
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
            For questions regarding our terms and service agreements, contact us at:{' '}
            <a href={`mailto:${SITE_CONFIG.email}`} className="text-[#F5810D] font-semibold underline">
              {SITE_CONFIG.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
