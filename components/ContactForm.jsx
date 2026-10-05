'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MessageCircle, Mail, Send, Clock, CheckCircle2, Shield } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    device: 'Amazon Firestick',
    subject: 'Subscription Inquiry',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Open WhatsApp with populated inquiry
    const encodedMsg = encodeURIComponent(
      `Hello VixeoTV Team,\n\nName: ${formData.name}\nEmail: ${formData.email}\nDevice: ${formData.device}\nTopic: ${formData.subject}\nMessage: ${formData.message}`
    );
    window.open(`${siteConfig.whatsappUrl}?text=${encodedMsg}`, '_blank');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      {/* Left Column: Direct Communication Channels */}
      <div className="lg:col-span-5 space-y-6">
        <div className="rounded-3xl bg-brand-bg-secondary p-8 border border-white/10 shadow-xl space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-heading">
              Fastest Response Channel
            </span>
            <h2 className="text-2xl font-bold font-heading text-white mt-1 mb-2">
              Direct WhatsApp IPTV Desk
            </h2>
            <p className="text-xs sm:text-sm text-brand-text-secondary leading-relaxed">
              For immediate assistance regarding VixeoTV IPTV <Link href="/setup" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">setup</Link>, credentials delivery, or <Link href="/pricing" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">subscription inquiries</Link>, reach our team directly on WhatsApp.
            </p>
          </div>

          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/25 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 text-brand-bg flex items-center justify-center font-bold">
                <MessageCircle className="w-5 h-5 fill-brand-bg" />
              </div>
              <div>
                <div className="text-sm font-bold text-white group-hover:text-emerald-300">
                  Direct WhatsApp Support
                </div>
                <div className="text-[11px] text-emerald-400/80">Active 24/7 • Fast Response</div>
              </div>
            </div>
            <Send className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
          </a>

          <div className="pt-4 border-t border-white/5 space-y-4 text-xs sm:text-sm">
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-white">Email Address</div>
                <a href={`mailto:${siteConfig.email}`} className="text-brand-text-secondary hover:text-white">
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-white">Operating Hours</div>
                <div className="text-brand-text-secondary">24 Hours / 7 Days a Week</div>
              </div>
            </div>
          </div>
        </div>

        {/* Security notice */}
        <div className="rounded-2xl bg-brand-bg-secondary/60 p-6 border border-white/5 flex items-start gap-3 text-xs text-brand-text-muted">
          <Shield className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
          <span>
            Security Reminder: VixeoTV support agents will never ask for your confidential banking PIN or payment card codes.
          </span>
        </div>
      </div>

      {/* Right Column: Interactive Inquiry Form */}
      <div className="lg:col-span-7">
        <div className="rounded-3xl bg-brand-bg-secondary p-8 sm:p-10 border border-white/10 shadow-2xl">
          <h3 className="text-2xl font-bold font-heading text-white mb-2">
            Contact VixeoTV IPTV Support
          </h3>
          <p className="text-xs sm:text-sm text-brand-text-secondary mb-6">
            Fill out the form below and our technical support team will assist you with your IPTV streaming setup. You can also explore our <Link href="/setup" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">setup guides</Link> or <Link href="/faq" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">FAQ database</Link>.
          </p>

          {isSubmitted ? (
            <div className="py-12 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white font-heading">Inquiry Initiated!</h4>
              <p className="text-xs sm:text-sm text-brand-text-secondary max-w-md mx-auto">
                Your message has been formatted for WhatsApp delivery. If your chat did not open automatically, click below:
              </p>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold bg-emerald-500 text-brand-bg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open Chat Window</span>
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-white mb-1.5">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-brand-bg border border-white/10 text-white placeholder-brand-text-muted text-xs sm:text-sm focus:outline-none focus:border-brand-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white mb-1.5">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-brand-bg border border-white/10 text-white placeholder-brand-text-muted text-xs sm:text-sm focus:outline-none focus:border-brand-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-white mb-1.5">Your Device</label>
                  <select
                    value={formData.device}
                    onChange={(e) => setFormData({ ...formData, device: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-brand-bg border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-primary"
                  >
                    <option value="Amazon Firestick">Amazon Firestick / Fire TV</option>
                    <option value="Android TV / Box">Android TV / Google TV</option>
                    <option value="Apple TV / iOS">Apple TV / iPhone / iPad</option>
                    <option value="Samsung Smart TV">Samsung Smart TV</option>
                    <option value="LG Smart TV">LG Smart TV</option>
                    <option value="Windows / Mac">Windows PC / Mac</option>
                    <option value="MAG / Formuler">MAG / Formuler Box</option>
                    <option value="Other">Other Device</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white mb-1.5">Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-brand-bg border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-primary"
                  >
                    <option value="Subscription Inquiry">Subscription Plans Inquiry</option>
                    <option value="Setup Assistance">Setup / Player Installation Help</option>
                    <option value="Channel Inquiry">Channel or Sports Availability</option>
                    <option value="Billing Question">Billing or Renewal Question</option>
                    <option value="Technical Issue">Technical / Buffering Assistance</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-white mb-1.5">Message / Inquiry Details</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please describe your question or device setup requirement..."
                  className="w-full px-4 py-3 rounded-xl bg-brand-bg border border-white/10 text-white placeholder-brand-text-muted text-xs sm:text-sm focus:outline-none focus:border-brand-primary"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold bg-gradient-to-r from-brand-primary to-brand-primary-light text-brand-bg shadow-glow-primary hover:shadow-glow-primary-lg transition-all duration-300 text-xs sm:text-sm"
              >
                <span>Send via Direct WhatsApp Desk</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
