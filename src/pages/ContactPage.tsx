import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/common/PageHero';
import { SITE_CONFIG } from '../data/siteData';
import { MapPin, Phone, MessageSquare, Clock, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Interior Design',
    subject: '',
    message: '',
    methods: ['Call'] as string[]
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const services = [
    "Interior Design",
    "Interior Finishing",
    "Furnishing",
    "Renovation",
    "Landscaping",
    "Construction Supplies",
    "Building & Construction",
    "Paint Manufacturing",
    "Property Management",
    "Swimming Pool Construction"
  ];

  const handleCheckbox = (method: string) => {
    setFormData(prev => ({
      ...prev,
      methods: prev.methods.includes(method)
        ? prev.methods.filter(m => m !== method)
        : [...prev.methods, method]
    }));
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Please enter your name.";
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = "Please enter a valid email.";
    if (!formData.phone.trim()) errs.phone = "Please enter your phone number.";
    if (!formData.subject.trim()) errs.subject = "Please enter a subject.";
    if (!formData.message.trim()) errs.message = "Please enter your message.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Interior Design',
        subject: '',
        message: '',
        methods: ['Call']
      });
    }, 600);
  };

  return (
    <div className="min-h-screen">
      <PageHero
        title="Let's Build Something Exceptional Together"
        eyebrow="Get In Touch"
        lead="Whether you need expert architectural advice, an itemised project quotation, or property management assistance, our senior team is ready to assist."
        breadcrumb="Contact Us"
        image="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1600&q=80"
        buttons={[
          { label: "Request Quote", url: "/request-quote", style: "primary" },
          { label: "Call Now", url: `tel:${SITE_CONFIG.phone1Tel}`, style: "outline" }
        ]}
      />

      {/* 4 Contact Information Cards */}
      <section className="py-20 bg-white dark:bg-[#0B1120] text-slate-900 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-7 rounded-2xl bg-[#F8F9FA] dark:bg-[#162032] border border-slate-200 dark:border-slate-800 text-center">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-[#F5810D] flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-display text-base font-bold mb-2">Office Address</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {SITE_CONFIG.address}
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#F8F9FA] dark:bg-[#162032] border border-slate-200 dark:border-slate-800 text-center">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-[#F5810D] flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-display text-base font-bold mb-2">Direct Phone</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                <a href={`tel:${SITE_CONFIG.phone1Tel}`} className="hover:text-[#F5810D] block">{SITE_CONFIG.phone1}</a>
                <a href={`tel:${SITE_CONFIG.phone2Tel}`} className="hover:text-[#F5810D] block">{SITE_CONFIG.phone2}</a>
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#F8F9FA] dark:bg-[#162032] border border-slate-200 dark:border-slate-800 text-center">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-[#F5810D] flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="font-display text-base font-bold mb-2">WhatsApp Line</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#F5810D] block">
                  {SITE_CONFIG.phone1}
                </a>
                <span className="text-[11px] text-emerald-500 font-semibold">Available for instant chat</span>
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#F8F9FA] dark:bg-[#162032] border border-slate-200 dark:border-slate-800 text-center">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-[#F5810D] flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-display text-base font-bold mb-2">Working Hours</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-line">
                {SITE_CONFIG.hours.replace(' | ', '\n')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Split Form & Map Section */}
      <section className="py-24 bg-[#F1F3F5] dark:bg-[#111827] text-slate-900 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <div className="bg-white dark:bg-[#162032] p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl">
              <h2 className="font-display text-2xl sm:text-3xl font-bold mb-6">Send Us A Message</h2>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300">
                  <div className="flex items-center gap-2 font-bold mb-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    Thank you &mdash; your message has been sent.
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed">
                    Our client liaison team has received your inquiry. We will review your requirements and respond within one business day.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-lg text-xs font-semibold hover:bg-emerald-700 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-slate-50 dark:bg-slate-900 focus:outline-none ${
                          errors.name ? 'border-red-500' : 'border-slate-200 dark:border-slate-800 focus:border-[#F5810D]'
                        }`}
                        placeholder="e.g. Arc. Ibrahim Bello"
                      />
                      {errors.name && <span className="text-[11px] text-red-500 block mt-1">{errors.name}</span>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-slate-50 dark:bg-slate-900 focus:outline-none ${
                          errors.email ? 'border-red-500' : 'border-slate-200 dark:border-slate-800 focus:border-[#F5810D]'
                        }`}
                        placeholder="e.g. ibrahim@domain.com"
                      />
                      {errors.email && <span className="text-[11px] text-red-500 block mt-1">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-slate-50 dark:bg-slate-900 focus:outline-none ${
                          errors.phone ? 'border-red-500' : 'border-slate-200 dark:border-slate-800 focus:border-[#F5810D]'
                        }`}
                        placeholder="e.g. 08027997172"
                      />
                      {errors.phone && <span className="text-[11px] text-red-500 block mt-1">{errors.phone}</span>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">
                        Service Required
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 text-sm bg-slate-50 dark:bg-slate-900 focus:outline-none focus:border-[#F5810D]"
                      >
                        {services.map((s, idx) => (
                          <option key={idx} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">
                      Subject *
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm bg-slate-50 dark:bg-slate-900 focus:outline-none ${
                        errors.subject ? 'border-red-500' : 'border-slate-200 dark:border-slate-800 focus:border-[#F5810D]'
                      }`}
                      placeholder="e.g. Renovation consultation for 5-bedroom duplex"
                    />
                    {errors.subject && <span className="text-[11px] text-red-500 block mt-1">{errors.subject}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm bg-slate-50 dark:bg-slate-900 focus:outline-none ${
                        errors.message ? 'border-red-500' : 'border-slate-200 dark:border-slate-800 focus:border-[#F5810D]'
                      }`}
                      placeholder="Describe your project, timeline, location and any questions..."
                    />
                    {errors.message && <span className="text-[11px] text-red-500 block mt-1">{errors.message}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-2 text-slate-700 dark:text-slate-300">
                      Preferred Contact Method
                    </label>
                    <div className="flex items-center gap-6 text-xs">
                      {['Call', 'WhatsApp', 'Email'].map((m) => (
                        <label key={m} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.methods.includes(m)}
                            onChange={() => handleCheckbox(m)}
                            className="rounded border-slate-300 text-[#F5810D] focus:ring-[#F5810D]"
                          />
                          <span>{m}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-4 py-3.5 px-6 rounded-full bg-[#F5810D] hover:bg-[#e07205] text-slate-950 font-bold text-sm transition-all shadow-md shadow-orange-500/20 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {loading ? "Sending Message..." : (
                      <>
                        Send Message <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Map & Social */}
            <div className="flex flex-col justify-between space-y-6">
              <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl aspect-[4/3]">
                <iframe
                  title="Eclectic Seals Office Location Map"
                  src="https://www.google.com/maps?q=11+Mungo+Park+Close,Asokoro,Abuja,Nigeria&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-[#162032] border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                <div className="flex items-center gap-3 pb-2 border-b border-slate-100 dark:border-slate-800">
                  <div className="w-12 h-12 rounded-xl bg-white p-1 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center shrink-0">
                    <img src="/assets/logo.jpg" alt="Eclectic Seals International logo" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold">Eclectic Seals Int'l Studio</h3>
                    <div className="text-xs text-[#F5810D] font-medium">Asokoro Diplomatic Zone, Abuja</div>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Located in the prestigious diplomatic district of Asokoro, Abuja. Visitor parking is accessible directly on site.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="https://www.google.com/maps?q=11+Mungo+Park+Close,Asokoro,Abuja,Nigeria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full border border-slate-300 dark:border-slate-700 text-xs font-semibold hover:border-[#F5810D] hover:text-[#F5810D] transition-colors"
                  >
                    Get Google Maps Directions &rarr;
                  </a>
                  <a
                    href={SITE_CONFIG.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Follow on Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Band */}
      <section className="py-14 bg-[#0F172A] text-white text-center border-t border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs uppercase tracking-widest text-[#F5810D] font-bold mb-2">Emergency Contact</div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-6">Need Immediate Assistance?</h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${SITE_CONFIG.phone1Tel}`}
              className="px-7 py-3 rounded-full text-xs sm:text-sm font-bold bg-[#F5810D] text-slate-950 hover:bg-[#e07205] transition-colors"
            >
              Call Now: {SITE_CONFIG.phone1}
            </a>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-full text-xs sm:text-sm font-semibold border border-white/20 text-white hover:border-[#F5810D] hover:text-[#F5810D] transition-colors"
            >
              WhatsApp
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="px-7 py-3 rounded-full text-xs sm:text-sm font-semibold border border-white/20 text-white hover:border-[#F5810D] hover:text-[#F5810D] transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
