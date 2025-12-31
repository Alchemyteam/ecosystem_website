import React, { useState, useRef } from 'react';
import { Play, Lock, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Link Contact Form Component (Reuse styling from Contact/Pledge)
const LinkContactForm: React.FC<{ onClose: () => void; onSubmitSuccess: () => void }> = ({ onClose, onSubmitSuccess }) => {
  const { t } = useLanguage();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    company: '',
    country: '',
    phone: '',
    email: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setFormSubmitted(true);
      setTimeout(() => {
        onSubmitSuccess();
      }, 1500);
    }, 1000);
  };

  return (
    <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300">
      <div className="bg-white rounded-2xl p-6 md:p-8 max-w-lg w-full shadow-2xl scale-100 animate-in fade-in zoom-in duration-300 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-100 text-brand-600 mb-4">
            <Lock className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">{t('howItWorks.unlockDemo')}</h3>
          <p className="text-slate-500 text-sm mt-2">{t('howItWorks.unlockSubtitle')}</p>
        </div>

        {formSubmitted ? (
          <div className="bg-green-50 text-green-700 p-4 rounded-xl border border-green-200 text-center animate-pulse">
            <p className="font-semibold text-lg">{t('contact.successMessage')}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmitForm} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">{t('contact.firstName')} <span className="text-red-500">*</span></label>
                <input
                  value={form.firstName}
                  onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">{t('contact.lastName')} <span className="text-red-500">*</span></label>
                <input
                  value={form.lastName}
                  onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">{t('contact.email')} <span className="text-red-500">*</span></label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
                placeholder="john@company.com"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">{t('contact.company')} <span className="text-red-500">*</span></label>
              <input
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
                placeholder="Company Name"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-brand-500/20 hover:shadow-brand-500/40 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              <span>{t('howItWorks.submitToWatch')}</span>
              <Play className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
            </button>

            <p className="text-xs text-center text-slate-400 mt-4">
              {t('contact.priorityGiven')}
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  const { t } = useLanguage();
  const [isVideoUnlocked, setIsVideoUnlocked] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleUnlock = () => {
    setIsVideoUnlocked(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <section id="howitworks" className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            {t('howItWorks.title')}
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            {t('howItWorks.subtitle')}
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Video Container */}
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900 group">

            {/* Video Element */}
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster="/video-poster.jpg"
              controls={isVideoUnlocked}
            >
              <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Overlay Controls (when locked) */}
            {!isVideoUnlocked && (
              <>
                {!isFormOpen ? (
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition-colors cursor-pointer"
                    onClick={() => setIsFormOpen(true)}
                  >
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-xl group-hover:scale-110 transition-transform duration-300 hover:bg-brand-600 hover:border-brand-500">
                      <Play className="w-8 h-8 text-white fill-current ml-1" />
                    </div>
                  </div>
                ) : (
                  <LinkContactForm
                    onClose={() => setIsFormOpen(false)}
                    onSubmitSuccess={handleUnlock}
                  />
                )}
              </>
            )}
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-10 -left-10 w-24 h-24 bg-brand-500/20 rounded-full blur-2xl -z-10"></div>
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
