import React from 'react';

interface PaymentProps {
    onClose: () => void;
}

const Payment: React.FC<PaymentProps> = ({ onClose }) => {
    const handleBankCardClick = () => {
        window.open('https://www.dbs.com.sg/personal/default.page', '_blank');
    };

    const handleQRCodeClick = () => {
        // Open QR code image in a new window
        const qrWindow = window.open('', '_blank');
        if (qrWindow) {
            qrWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>QR Code Payment</title>
            <style>
              body {
                margin: 0;
                padding: 20px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                min-height: 100vh;
                background-color: #f8fafc;
                font-family: 'Inter', sans-serif;
              }
              img {
                max-width: 400px;
                width: 100%;
                border-radius: 12px;
                box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
              }
              h2 {
                color: #1e293b;
                margin-bottom: 20px;
              }
            </style>
          </head>
          <body>
            <h2>Scan QR Code to Pay</h2>
            <img src="/qrcode.png" alt="QR Code Payment" />
          </body>
        </html>
      `);
            qrWindow.document.close();
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="sticky top-0 bg-white border-b border-slate-200 px-8 py-6 flex justify-between items-center rounded-t-2xl">
                    <h2 className="text-2xl font-bold text-slate-900">Select Payment Method</h2>
                    <button
                        onClick={onClose}
                        className="text-slate-400 hover:text-slate-600 transition-colors"
                        aria-label="Close"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Content */}
                <div className="p-8">
                    <p className="text-slate-600 mb-8 text-center">
                        Choose your preferred payment method to complete the funding
                    </p>

                    {/* Payment Methods Grid */}
                    <div className="space-y-4">
                        {/* Bank Card */}
                        <button
                            onClick={handleBankCardClick}
                            className="w-full bg-white border-2 border-slate-200 hover:border-brand-500 rounded-xl p-6 transition-all hover:shadow-lg group"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-brand-50 to-brand-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <svg className="w-8 h-8 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                    </svg>
                                </div>
                                <div className="flex-1 text-left">
                                    <h3 className="text-lg font-semibold text-slate-900 mb-1">Bank Card</h3>
                                    <p className="text-sm text-slate-600">Pay securely with your credit or debit card</p>
                                </div>
                                <svg className="w-6 h-6 text-slate-400 group-hover:text-brand-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </button>

                        {/* QR Code */}
                        <button
                            onClick={handleQRCodeClick}
                            className="w-full bg-white border-2 border-slate-200 hover:border-brand-500 rounded-xl p-6 transition-all hover:shadow-lg group"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                                    </svg>
                                </div>
                                <div className="flex-1 text-left">
                                    <h3 className="text-lg font-semibold text-slate-900 mb-1">QR Code</h3>
                                    <p className="text-sm text-slate-600">Scan QR code with your mobile payment app</p>
                                </div>
                                <svg className="w-6 h-6 text-slate-400 group-hover:text-brand-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </button>

                        {/* Other Payment Methods */}
                        <button
                            className="w-full bg-white border-2 border-slate-200 hover:border-brand-500 rounded-xl p-6 transition-all hover:shadow-lg group"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-green-50 to-green-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <div className="flex-1 text-left">
                                    <h3 className="text-lg font-semibold text-slate-900 mb-1">Other Payment Methods</h3>
                                    <p className="text-sm text-slate-600">PayPal, Apple Pay, Google Pay, and more</p>
                                </div>
                                <svg className="w-6 h-6 text-slate-400 group-hover:text-brand-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </button>
                    </div>

                    {/* Security Notice */}
                    <div className="mt-8 bg-slate-50 border border-slate-200 rounded-xl p-4">
                        <div className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-brand-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            <div>
                                <h4 className="text-sm font-semibold text-slate-900 mb-1">Secure Payment</h4>
                                <p className="text-xs text-slate-600">
                                    Your payment information is encrypted and secure. We never store your card details.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
