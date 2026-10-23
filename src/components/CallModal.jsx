import React, { useState, useEffect, useRef } from 'react';
import { Phone, Copy, Check, X, Clock, Send, ShieldCheck, User } from 'lucide-react';

export default function CallModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const [callbackName, setCallbackName] = useState('');
  const [callbackPhone, setCallbackPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const modalRef = useRef(null);
  const nameInputRef = useRef(null);

  const phoneNumber = '(616) 309-4425';
  const rawPhoneNumber = '6163094425';

  // Handle ESC key to close modal & Focus trap
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => {
        nameInputRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = 'unset';
      setSubmitted(false);
      setError('');
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Copy number to clipboard
  const handleCopyNumber = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(phoneNumber);
      } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = phoneNumber;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy phone number: ', err);
    }
  };

  // Handle Callback Request Form
  const handleCallbackSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validation
    const cleanPhone = callbackPhone.replace(/\D/g, '');
    if (!callbackName.trim()) {
      setError('Please provide your full name.');
      return;
    }
    if (cleanPhone.length < 10) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }

    setLoading(true);

    /**
     * PRODUCTION INTEGRATION POINT:
     * When connecting to a Next.js API route, CRM webhook, or telephony provider:
     * await fetch('/api/request-callback', {
     *   method: 'POST',
     *   headers: { 'Content-Type': 'application/json' },
     *   body: JSON.stringify({ name: callbackName, phone: callbackPhone, timestamp: new Date() })
     * });
     */
    try {
      // Simulate rapid dispatch processing
      await new Promise((resolve) => setTimeout(resolve, 600));
      setLoading(false);
      setSubmitted(true);
    } catch (err) {
      setLoading(false);
      setError('Failed to dispatch request. Please call directly at (616) 309-4425.');
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="call-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-navy-950/80 backdrop-blur-sm transition-opacity"
      ></div>

      {/* Modal Dialog Content */}
      <div
        ref={modalRef}
        className="relative w-full max-w-lg bg-navy-900 border border-navy-700 rounded-3xl shadow-2xl p-6 sm:p-8 text-white z-10 overflow-hidden animate-fadeIn"
      >
        {/* Subtle orange ambient glow */}
        <div className="absolute top-0 right-0 w-44 h-44 bg-rescue-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-full bg-navy-800 text-slate-400 hover:text-white hover:bg-navy-700 transition focus:outline-none focus:ring-2 focus:ring-rescue-500"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-left mb-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-navy-950 border border-rescue-500/30 text-rescue-500 text-xs font-bold uppercase tracking-wider mb-2.5">
            <span className="w-2 h-2 rounded-full bg-rescue-500 animate-pulse"></span>
            <span>24/7 Live Dispatch Station</span>
          </div>
          <h2 id="call-modal-title" className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Connect With Our On-Duty Tech
          </h2>
          <p className="text-sm text-slate-300 mt-1">
            Grand Rapids & West Michigan Emergency Response. Average arrival under 45 minutes.
          </p>
        </div>

        {/* Prominent Phone Number Card */}
        <div className="p-5 rounded-2xl bg-navy-950 border border-navy-800 text-center mb-6 shadow-inner">
          <div className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-1">
            Direct Emergency Line
          </div>
          <div className="text-3xl sm:text-4xl font-black text-white tracking-wide font-sans text-transparent bg-clip-text bg-gradient-to-r from-rescue-500 via-orange-400 to-amber-300">
            {phoneNumber}
          </div>
          
          <div className="mt-4 flex flex-col items-center">
            {/* Full-width Primary Copy Number Button (Requirement 4) */}
            <button
              type="button"
              onClick={handleCopyNumber}
              className="w-full py-3 px-4 rounded-xl bg-rescue-500 hover:bg-rescue-600 active:bg-rescue-700 text-white font-bold text-sm sm:text-base flex items-center justify-center shadow-md shadow-rescue-500/30 transition-all duration-150 active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5 text-white mr-2" />
                  <span>Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5 mr-2" />
                  <span>Copy Phone Number</span>
                </>
              )}
            </button>

            {/* Subtle secondary link for VoIP users instead of a distracting large button (Requirement 4) */}
            <a
              href={`tel:${rawPhoneNumber}`}
              className="mt-2.5 text-xs text-slate-400 hover:text-slate-200 underline transition"
            >
              Have a VoIP app installed? Click here to launch desktop dialer
            </a>
          </div>
        </div>

        {/* Compact Callback Request Form */}
        <div className="pt-2 border-t border-navy-800">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center justify-between">
            <span className="text-rescue-400 font-extrabold flex items-center">
              ⚡ FASTEST OPTION: Get a Direct Call From Our On-Duty Tech in &lt; 5 Mins
            </span>
          </div>

          {submitted ? (
            <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-600/40 text-center space-y-2 animate-fadeIn">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-white">Callback Request Dispatched!</h4>
              <p className="text-xs text-slate-300">
                Our technician is reviewing your number (<strong>{callbackPhone}</strong>) and will call you in under 5 minutes.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-2 text-xs font-bold text-rescue-400 hover:underline"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleCallbackSubmit} className="space-y-3 text-left">
              {error && (
                <div className="text-xs text-red-400 bg-red-950/40 p-2.5 rounded-lg border border-red-800/50">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Field 1: Name */}
                <div>
                  <label htmlFor="modal-name" className="block text-[11px] font-bold text-slate-300 uppercase mb-1">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3 top-3 pointer-events-none" />
                    <input
                      ref={nameInputRef}
                      type="text"
                      id="modal-name"
                      required
                      placeholder="e.g. John Doe"
                      value={callbackName}
                      onChange={(e) => setCallbackName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-navy-950 border border-navy-700 text-white placeholder:text-slate-500 text-sm focus:border-rescue-500 focus:ring-1 focus:ring-rescue-500 outline-none transition"
                    />
                  </div>
                </div>

                {/* Field 2: Phone */}
                <div>
                  <label htmlFor="modal-phone" className="block text-[11px] font-bold text-slate-300 uppercase mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="tel"
                      id="modal-phone"
                      required
                      placeholder="(616) 000-0000"
                      value={callbackPhone}
                      onChange={(e) => setCallbackPhone(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-navy-950 border border-navy-700 text-white placeholder:text-slate-500 text-sm focus:border-rescue-500 focus:ring-1 focus:ring-rescue-500 outline-none transition"
                    />
                  </div>
                </div>
              </div>

              {/* Callback Action Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-4 rounded-xl bg-rescue-500 hover:bg-rescue-600 active:bg-rescue-700 text-white font-extrabold text-sm shadow-lg shadow-rescue-500/20 transition-all flex items-center justify-center disabled:opacity-70 active:scale-95"
              >
                {loading ? (
                  <span className="flex items-center">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                    Alerting On-Duty Tech...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <span>Request Priority Callback</span>
                    <Send className="w-4 h-4 ml-2" />
                  </span>
                )}
              </button>

              <div className="flex items-center justify-center space-x-1.5 text-[11px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>Zero obligation. 100% confidential. No spam.</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
