import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/common/PageHero';
import { SITE_CONFIG } from '../data/siteData';
import { Check, CheckCircle2, ArrowRight, ArrowLeft, Phone, MessageSquare } from 'lucide-react';

export const RequestQuotePage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    // Step 1
    name: '',
    email: '',
    phone: '',
    company: '',
    city: '',
    state: '',
    // Step 2
    service: '',
    budget: '',
    timeline: '',
    location: '',
    // Step 3
    description: '',
    drawingsFileName: '',
    inspirationFileName: '',
    consultDate: '',
    contactPref: ['WhatsApp'] as string[]
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const projectTypes = [
    "Residential Construction",
    "Commercial Development",
    "Office Fit-Out",
    "Interior Design & Styling",
    "Full Structural Renovation",
    "Landscaping & Grounds",
    "Swimming Pool Construction",
    "Paint Supply & Manufacturing",
    "Real Estate Property Management"
  ];

  const budgetRanges = [
    "Under ₦5,000,000",
    "₦5,000,000 – ₦20,000,000",
    "₦20,000,000 – ₦50,000,000",
    "₦50,000,000 – ₦150,000,000",
    "Above ₦150,000,000"
  ];

  const timelines = [
    "Immediately",
    "Within 1 month",
    "1–3 months",
    "3–6 months",
    "Flexible / In Planning Phase"
  ];

  const benefits = [
    { title: "Free Initial Consultation", text: "Zero cost or obligation to discuss architectural concepts and site parameters.", icon: "M20 6 9 17l-5-5" },
    { title: "Transparent Pricing", text: "Detailed Bill of Quantities with no surprise add-ons or hidden fees.", icon: "M9 12h6M12 9v6", circle: true },
    { title: "Professional Advice", text: "Direct technical guidance from registered civil engineers and interior architects.", icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" },
    { title: "Tailored Solutions", text: "Recommendations engineered specifically around your brief, plot constraints, and budget.", icon: "M4 4h16v16H4zM4 9h16M9 9v11" },
    { title: "Experienced Team", text: "Work executed by master builders with a 10+ year track record in Abuja.", icon: "M12 2 4 5v6c0 5 3.4 9 8 11 4.6-2 8-6 8-11V5z" },
    { title: "Timely Response", text: "We review and respond to every quotation enquiry within one business day.", icon: "M12 7v5l3 3", circle: true }
  ];

  const expectedProcess = [
    "Request Submitted",
    "Review",
    "Consultation",
    "Site Inspection",
    "Proposal",
    "Quotation",
    "Approval",
    "Project Kickoff"
  ];

  const handleNext = () => {
    const errs: Record<string, string> = {};
    if (currentStep === 1) {
      if (!formData.name.trim()) errs.name = "Please enter your full name.";
      if (!formData.email.trim() || !formData.email.includes('@')) errs.email = "Please enter a valid email.";
      if (!formData.phone.trim()) errs.phone = "Please enter your phone number.";
      if (!formData.city.trim()) errs.city = "Please enter your city.";
      if (!formData.state.trim()) errs.state = "Please enter your state.";
    } else if (currentStep === 2) {
      if (!formData.service) errs.service = "Please select a project type.";
      if (!formData.budget) errs.budget = "Please select a budget range.";
      if (!formData.timeline) errs.timeline = "Please select a timeline.";
    } else if (currentStep === 3) {
      if (!formData.description.trim()) errs.description = "Please describe your project.";
    }

    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 380, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    setCurrentStep(prev => prev - 1);
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <PageHero
        title="Let's Discuss Your Project"
        eyebrow="Get Started"
        lead="Whether you're building from scratch, renovating an existing property, redesigning interiors, or managing investments, we're ready to help bring your vision to life."
        breadcrumb="Request a Quote"
        image="https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1600&q=80"
        buttons={[
          { label: "Call Now", url: `tel:${SITE_CONFIG.phone1Tel}`, style: "primary" },
          { label: "Chat on WhatsApp", url: `https://wa.me/${SITE_CONFIG.whatsapp}`, style: "outline" }
        ]}
      />

      {/* Main Wizard Section */}
      <section className="py-24 bg-white dark:bg-[#0B1120] text-slate-900 dark:text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F8F9FA] dark:bg-[#162032] p-8 sm:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-emerald-500/15 text-emerald-500 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold mb-3">
                  Your Request Has Been Submitted
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-lg mx-auto leading-relaxed mb-8">
                  Thank you for reaching out to Eclectic Seals Int'l. A senior member of our architectural and engineering team will contact you within one business day to coordinate your initial consultation.
                </p>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold bg-[#F5810D] text-slate-950 hover:bg-[#e07205] transition-colors"
                >
                  Return Home <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              <div>
                {/* 4 Steps Indicator */}
                <div className="grid grid-cols-4 gap-2 mb-10 pb-6 border-b border-slate-200 dark:border-slate-800 text-center">
                  {[
                    { step: 1, label: "Your Info" },
                    { step: 2, label: "Project" },
                    { step: 3, label: "Details" },
                    { step: 4, label: "Review" }
                  ].map((s) => {
                    const isActive = currentStep === s.step;
                    const isDone = currentStep > s.step;
                    return (
                      <div key={s.step} className="flex flex-col items-center">
                        <div
                          className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold mb-1.5 transition-colors ${
                            isActive
                              ? 'bg-[#F5810D] text-slate-950 shadow-md shadow-orange-500/25 ring-2 ring-orange-500/30'
                              : isDone
                              ? 'bg-emerald-500 text-white'
                              : 'bg-slate-200 dark:bg-slate-700 text-slate-500'
                          }`}
                        >
                          {isDone ? <Check className="w-4 h-4 stroke-[3]" /> : s.step}
                        </div>
                        <span className={`text-[11px] font-semibold ${isActive ? 'text-[#F5810D]' : 'text-slate-500'}`}>
                          {s.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <form onSubmit={handleSubmit} noValidate>
                  {/* STEP 1: Personal Information */}
                  {currentStep === 1 && (
                    <div className="space-y-4">
                      <h3 className="font-display text-2xl font-bold mb-4">1. Personal &amp; Contact Information</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">Full Name *</label>
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className={`w-full px-4 py-3 rounded-xl border text-sm bg-white dark:bg-slate-900 focus:outline-none ${
                              errors.name ? 'border-red-500' : 'border-slate-200 dark:border-slate-800 focus:border-[#F5810D]'
                            }`}
                            placeholder="e.g. Dr. Mohammed Aliyu"
                          />
                          {errors.name && <span className="text-[11px] text-red-500 block mt-1">{errors.name}</span>}
                        </div>

                        <div>
                          <label className="block text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">Email Address *</label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className={`w-full px-4 py-3 rounded-xl border text-sm bg-white dark:bg-slate-900 focus:outline-none ${
                              errors.email ? 'border-red-500' : 'border-slate-200 dark:border-slate-800 focus:border-[#F5810D]'
                            }`}
                            placeholder="e.g. m.aliyu@domain.com"
                          />
                          {errors.email && <span className="text-[11px] text-red-500 block mt-1">{errors.email}</span>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">Phone Number *</label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className={`w-full px-4 py-3 rounded-xl border text-sm bg-white dark:bg-slate-900 focus:outline-none ${
                              errors.phone ? 'border-red-500' : 'border-slate-200 dark:border-slate-800 focus:border-[#F5810D]'
                            }`}
                            placeholder="e.g. 08027997172"
                          />
                          {errors.phone && <span className="text-[11px] text-red-500 block mt-1">{errors.phone}</span>}
                        </div>

                        <div>
                          <label className="block text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">Company Name (optional)</label>
                          <input
                            type="text"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 text-sm bg-white dark:bg-slate-900 focus:outline-none focus:border-[#F5810D]"
                            placeholder="e.g. Apex Holdings"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">City *</label>
                          <input
                            type="text"
                            value={formData.city}
                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                            className={`w-full px-4 py-3 rounded-xl border text-sm bg-white dark:bg-slate-900 focus:outline-none ${
                              errors.city ? 'border-red-500' : 'border-slate-200 dark:border-slate-800 focus:border-[#F5810D]'
                            }`}
                            placeholder="e.g. Abuja"
                          />
                          {errors.city && <span className="text-[11px] text-red-500 block mt-1">{errors.city}</span>}
                        </div>

                        <div>
                          <label className="block text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">State *</label>
                          <input
                            type="text"
                            value={formData.state}
                            onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                            className={`w-full px-4 py-3 rounded-xl border text-sm bg-white dark:bg-slate-900 focus:outline-none ${
                              errors.state ? 'border-red-500' : 'border-slate-200 dark:border-slate-800 focus:border-[#F5810D]'
                            }`}
                            placeholder="e.g. FCT"
                          />
                          {errors.state && <span className="text-[11px] text-red-500 block mt-1">{errors.state}</span>}
                        </div>
                      </div>

                      <div className="flex justify-end pt-6">
                        <button
                          type="button"
                          onClick={handleNext}
                          className="px-8 py-3.5 rounded-full bg-[#F5810D] hover:bg-[#e07205] text-slate-950 font-bold text-sm inline-flex items-center gap-2 transition-colors"
                        >
                          Next Step <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: Project Information */}
                  {currentStep === 2 && (
                    <div className="space-y-4">
                      <h3 className="font-display text-2xl font-bold mb-4">2. Project Information</h3>

                      <div>
                        <label className="block text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">Project Type *</label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className={`w-full px-4 py-3 rounded-xl border text-sm bg-white dark:bg-slate-900 focus:outline-none ${
                            errors.service ? 'border-red-500' : 'border-slate-200 dark:border-slate-800 focus:border-[#F5810D]'
                          }`}
                        >
                          <option value="">Select a project type</option>
                          {projectTypes.map((t, idx) => (
                            <option key={idx} value={t}>{t}</option>
                          ))}
                        </select>
                        {errors.service && <span className="text-[11px] text-red-500 block mt-1">{errors.service}</span>}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">Estimated Budget Range *</label>
                          <select
                            value={formData.budget}
                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                            className={`w-full px-4 py-3 rounded-xl border text-sm bg-white dark:bg-slate-900 focus:outline-none ${
                              errors.budget ? 'border-red-500' : 'border-slate-200 dark:border-slate-800 focus:border-[#F5810D]'
                            }`}
                          >
                            <option value="">Select budget range</option>
                            {budgetRanges.map((b, idx) => (
                              <option key={idx} value={b}>{b}</option>
                            ))}
                          </select>
                          {errors.budget && <span className="text-[11px] text-red-500 block mt-1">{errors.budget}</span>}
                        </div>

                        <div>
                          <label className="block text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">Timeline Expectation *</label>
                          <select
                            value={formData.timeline}
                            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                            className={`w-full px-4 py-3 rounded-xl border text-sm bg-white dark:bg-slate-900 focus:outline-none ${
                              errors.timeline ? 'border-red-500' : 'border-slate-200 dark:border-slate-800 focus:border-[#F5810D]'
                            }`}
                          >
                            <option value="">Select a timeline</option>
                            {timelines.map((t, idx) => (
                              <option key={idx} value={t}>{t}</option>
                            ))}
                          </select>
                          {errors.timeline && <span className="text-[11px] text-red-500 block mt-1">{errors.timeline}</span>}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">Project Address / Location</label>
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 text-sm bg-white dark:bg-slate-900 focus:outline-none focus:border-[#F5810D]"
                          placeholder="Where is the site located? (e.g. Asokoro, Maitama, Guzape)"
                        />
                      </div>

                      <div className="flex justify-between pt-6">
                        <button
                          type="button"
                          onClick={handlePrev}
                          className="px-6 py-3 rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:border-[#F5810D] transition-colors"
                        >
                          Back
                        </button>
                        <button
                          type="button"
                          onClick={handleNext}
                          className="px-8 py-3.5 rounded-full bg-[#F5810D] hover:bg-[#e07205] text-slate-950 font-bold text-sm inline-flex items-center gap-2 transition-colors"
                        >
                          Next Step <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 3: Describe Your Project */}
                  {currentStep === 3 && (
                    <div className="space-y-4">
                      <h3 className="font-display text-2xl font-bold mb-4">3. Describe Your Project</h3>

                      <div>
                        <label className="block text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">Project Details &amp; Requirements *</label>
                        <textarea
                          rows={4}
                          value={formData.description}
                          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                          className={`w-full px-4 py-3 rounded-xl border text-sm bg-white dark:bg-slate-900 focus:outline-none ${
                            errors.description ? 'border-red-500' : 'border-slate-200 dark:border-slate-800 focus:border-[#F5810D]'
                          }`}
                          placeholder="Describe room layouts, structural goals, preferred finishes, architectural preferences, or specific challenges..."
                        />
                        {errors.description && <span className="text-[11px] text-red-500 block mt-1">{errors.description}</span>}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">Upload Drawings (optional)</label>
                          <input
                            type="file"
                            onChange={(e) => setFormData({ ...formData, drawingsFileName: e.target.files?.[0]?.name || '' })}
                            className="w-full text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-[#F5810D]/15 file:text-[#F5810D] hover:file:bg-[#F5810D]/25"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">Inspiration Images (optional)</label>
                          <input
                            type="file"
                            onChange={(e) => setFormData({ ...formData, inspirationFileName: e.target.files?.[0]?.name || '' })}
                            className="w-full text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-[#F5810D]/15 file:text-[#F5810D] hover:file:bg-[#F5810D]/25"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">Preferred Consultation Date</label>
                        <input
                          type="date"
                          value={formData.consultDate}
                          onChange={(e) => setFormData({ ...formData, consultDate: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 text-sm bg-white dark:bg-slate-900 focus:outline-none focus:border-[#F5810D]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold mb-2 text-slate-700 dark:text-slate-300">Preferred Communication Channel</label>
                        <div className="flex items-center gap-6 text-xs">
                          {['WhatsApp', 'Call', 'Email'].map((c) => (
                            <label key={c} className="flex items-center gap-2 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={formData.contactPref.includes(c)}
                                onChange={() => {
                                  setFormData(prev => ({
                                    ...prev,
                                    contactPref: prev.contactPref.includes(c)
                                      ? prev.contactPref.filter(x => x !== c)
                                      : [...prev.contactPref, c]
                                  }));
                                }}
                                className="rounded border-slate-300 text-[#F5810D] focus:ring-[#F5810D]"
                              />
                              <span>{c}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-between pt-6">
                        <button
                          type="button"
                          onClick={handlePrev}
                          className="px-6 py-3 rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:border-[#F5810D] transition-colors"
                        >
                          Back
                        </button>
                        <button
                          type="button"
                          onClick={handleNext}
                          className="px-8 py-3.5 rounded-full bg-[#F5810D] hover:bg-[#e07205] text-slate-950 font-bold text-sm inline-flex items-center gap-2 transition-colors"
                        >
                          Review Summary <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 4: Review & Submit */}
                  {currentStep === 4 && (
                    <div className="space-y-6">
                      <h3 className="font-display text-2xl font-bold">4. Review &amp; Submit</h3>
                      <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
                        Please verify your project parameters before final submission.
                      </p>

                      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 text-xs sm:text-sm">
                        <div className="flex items-center gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                          <div className="w-11 h-11 rounded-xl bg-white p-1 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center shrink-0">
                            <img src="/assets/logo.jpg" alt="Eclectic Seals International logo" className="w-full h-full object-contain" />
                          </div>
                          <div>
                            <div className="font-display font-bold text-sm text-slate-900 dark:text-white">Eclectic Seals International</div>
                            <div className="text-[11px] text-[#F5810D] font-semibold">Official Quotation Request Summary</div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                          <div>
                            <span className="text-slate-400 block">Client Name:</span>
                            <strong className="text-slate-900 dark:text-white font-semibold">{formData.name}</strong>
                          </div>
                          <div>
                            <span className="text-slate-400 block">Contact Info:</span>
                            <span className="text-slate-900 dark:text-white">{formData.phone} &bull; {formData.email}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block">Location:</span>
                            <span className="text-slate-900 dark:text-white">{formData.city}, {formData.state} {formData.location ? `(${formData.location})` : ''}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block">Company:</span>
                            <span className="text-slate-900 dark:text-white">{formData.company || 'Private Project'}</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                          <div>
                            <span className="text-slate-400 block">Project Type:</span>
                            <strong className="text-[#F5810D] font-semibold">{formData.service}</strong>
                          </div>
                          <div>
                            <span className="text-slate-400 block">Budget Scope:</span>
                            <span className="text-slate-900 dark:text-white font-medium">{formData.budget}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block">Target Timeline:</span>
                            <span className="text-slate-900 dark:text-white">{formData.timeline}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block">Consultation Preference:</span>
                            <span className="text-slate-900 dark:text-white">{formData.contactPref.join(', ')}</span>
                          </div>
                        </div>

                        <div>
                          <span className="text-slate-400 block mb-1">Project Description:</span>
                          <p className="text-slate-700 dark:text-slate-300 italic whitespace-pre-line bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
                            &ldquo;{formData.description}&rdquo;
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-between pt-6">
                        <button
                          type="button"
                          onClick={handlePrev}
                          className="px-6 py-3 rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:border-[#F5810D] transition-colors"
                        >
                          Back to Edit
                        </button>
                        <button
                          type="submit"
                          className="px-9 py-3.5 rounded-full bg-[#F5810D] hover:bg-[#e07205] text-slate-950 font-bold text-sm inline-flex items-center gap-2 transition-all shadow-xl shadow-orange-500/25"
                        >
                          Submit Quotation Request <Check className="w-4 h-4 stroke-[3]" />
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[#F1F3F5] dark:bg-[#111827] text-slate-900 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5810D] mb-3">
              <span className="w-6 h-0.5 bg-[#F5810D] rounded-full" />
              Why Request A Quote
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              What You Get From A Consultation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="p-7 rounded-2xl bg-white dark:bg-[#162032] border border-slate-200 dark:border-slate-800 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-[#F5810D] flex items-center justify-center mb-5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
                    {b.circle && <circle cx="12" cy="12" r="9" />}
                    <path d={b.icon} />
                  </svg>
                </div>
                <h3 className="font-display text-lg font-bold mb-2 text-slate-900 dark:text-white">{b.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Process Track (Dark Navy) */}
      <section className="py-24 bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5810D] mb-3">
              <span className="w-6 h-0.5 bg-[#F5810D] rounded-full" />
              What Happens Next
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Expected Project Process
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {expectedProcess.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#1B2842]/70 rounded-xl p-4 border border-white/10 text-center flex flex-col items-center justify-between"
              >
                <div className="w-9 h-9 rounded-full bg-[#F5810D] text-slate-950 font-display font-bold text-xs flex items-center justify-center mb-3">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <h4 className="font-display text-xs font-bold text-white leading-snug">{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
