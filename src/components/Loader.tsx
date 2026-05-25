import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-green-50 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.08]" />
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-learntech-blue/30 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-learntech-green/30 rounded-full blur-3xl animate-pulse-slow" />

      <div className="relative flex flex-col items-center">
        {/* Orbiting rings */}
        <div className="relative w-48 h-48 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-learntech-blue/30 border-t-learntech-blue animate-spin" style={{ animationDuration: '2s' }} />
          <div className="absolute inset-3 rounded-full border-2 border-learntech-green/30 border-b-learntech-green animate-spin" style={{ animationDuration: '3s', animationDirection: 'reverse' }} />
          <div className="absolute inset-6 rounded-full border border-learntech-blue/20 border-l-learntech-blue-dark animate-spin" style={{ animationDuration: '4s' }} />
          <img
            src="/xtn-logo.png"
            alt="XTN Admissions"
            className="w-24 h-24 object-contain drop-shadow-2xl animate-float-slow"
          />
        </div>

        <h2 className="mt-8 text-2xl md:text-3xl font-bold text-gradient animate-gradient">
          XTN Admissions
        </h2>
        <p className="mt-2 text-sm text-gray-600 tracking-widest uppercase">
          Xplorevo Tech Network
        </p>

        {/* Progress bar */}
        <div className="mt-6 w-56 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-learntech-blue to-learntech-green animate-loader-bar" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
