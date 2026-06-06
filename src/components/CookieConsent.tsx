import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Cookie, X } from 'lucide-react';

const STORAGE_KEY = 'campus-counsel-cookie-consent-v1';

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  const persist = (value: 'all' | 'necessary') => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ choice: value, ts: Date.now() })
    );
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed z-[60] bottom-4 left-4 right-4 md:right-auto md:max-w-md animate-fade-in"
    >
      <div className="glass-card p-5 shadow-2xl border border-learntech-blue/20">
        <div className="flex items-start gap-3">
          <div className="bg-learntech-blue/10 p-2 rounded-lg shrink-0">
            <Cookie className="text-learntech-blue" size={22} />
          </div>
          <div className="flex-1">
            <h2 className="font-bold text-gray-900 mb-1">We value your privacy</h2>
            <p className="text-sm text-gray-600 mb-4">
              We use cookies to enhance your experience, analyze traffic, and improve our services. You can accept all or only essential cookies.
            </p>
            <div className="flex flex-wrap gap-2">
              <Button
                size="sm"
                onClick={() => persist('all')}
                className="bg-learntech-blue hover:bg-learntech-blue-dark text-white"
              >
                Accept all
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => persist('necessary')}
                className="border-learntech-blue/40 text-learntech-blue hover:bg-learntech-blue/10"
              >
                Only necessary
              </Button>
            </div>
          </div>
          <button
            onClick={() => persist('necessary')}
            aria-label="Dismiss cookie banner"
            className="text-gray-400 hover:text-gray-700 transition-colors"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
