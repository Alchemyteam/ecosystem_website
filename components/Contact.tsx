import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    company: '',
    country: '',
    phone: '',
    email: '',
    comments: '',
    accepted: false,
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.accepted) return;
    if (!form.firstName || !form.lastName || !form.company || !form.country || !form.phone || !form.email) return;
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
    setForm({ firstName: '', lastName: '', company: '', country: '', phone: '', email: '', comments: '', accepted: false });
  };

  return (
    <section id="contact" className="py-24 bg-brand-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">{t('contact.title')}</h2>
            <h3 className="text-2xl font-semibold text-white mb-3">{t('contact.heading')}</h3>
            <p className="text-lg text-blue-100">{t('contact.description')}</p>
            {/* <p className="text-lg text-blue-100 mb-10 max-w-2xl">
              Join the first ecosystem platform anchored in Singapore setting global standards. 
              Secure your spot for Phase 1 MVP access today.
            </p> */}
            <p className="mt-6 text-sm text-blue-300">
              {t('contact.limitedSpots')}<br></br>
              {t('contact.priorityGiven')}
            </p>

            <h3 className="mt-6 text-2xl font-semibold text-white">{t('contact.helpHeading')}</h3>
            <p className="text-lg text-blue-100">
              {t('contact.helpDescription')}
            </p>
            <p className="text-sm text-blue-300">
              {t('contact.helpSubtext')}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-200">
            {formSubmitted && (
              <div className="mb-4 bg-green-50 text-green-700 p-3 rounded-md border border-green-200">{t('contact.successMessage')}</div>
            )}
            <form onSubmit={handleSubmitForm} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">{t('contact.firstName')} {t('contact.required')}</label>
                <input value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} className="w-full px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">{t('contact.lastName')} {t('contact.required')}</label>
                <input value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} className="w-full px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500" required />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1">{t('contact.company')} {t('contact.required')}</label>
                <input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="w-full px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">{t('contact.country')} {t('contact.required')}</label>
                <select value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} className="w-full px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500" required>
                  <option value="">{t('contact.selectCountry')}</option>
                  <option>Singapore</option>
                  <option>Malaysia</option>
                  <option>Indonesia</option>
                  <option>Myanmar</option>
                  <option>Vietnam</option>
                  <option>Kazakhstan</option>
                  <option>Brunei</option>
                  <option>Cambodia</option>
                  <option>Laos</option>
                  <option>Philippines</option>
                  <option>Thailand</option>
                  <option>India</option>
                  <option>China</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">{t('contact.contactNumber')} {t('contact.required')}</label>
                <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500" required />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1">{t('contact.email')} {t('contact.required')}</label>
                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500" required />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1">{t('contact.additionalComments')}</label>
                <textarea value={form.comments} onChange={(e) => setForm({ ...form, comments: e.target.value })} className="w-full px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500" rows={2} />
              </div>
              <div className="md:col-span-2 flex items-center gap-2">
                <input id="privacy" type="checkbox" checked={form.accepted} onChange={(e) => setForm({ ...form, accepted: e.target.checked })} className="w-4 h-4 border-slate-300 rounded" />
                <label htmlFor="privacy" className="text-sm text-slate-700">{t('contact.privacyPolicy')} {t('contact.required')}</label>
              </div>
              <div className="md:col-span-2">
                <button type="submit" disabled={!form.accepted} className="w-full sm:w-auto px-8 py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                  {t('contact.submitButton')} <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
