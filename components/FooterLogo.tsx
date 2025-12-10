"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export const FooterLogo: React.FC = () => {
    const [hasError, setHasError] = useState(false);

    return (
        <>
            {!hasError ? (
                <Link href="/" className="inline-block mb-6 bg-transparent p-3 rounded-lg max-w-[200px]">
                    <img
                        src="/images/logo.png" // Added leading slash for absolute path from public
                        alt="Somnium Management Consulting Pvt. Ltd."
                        className="w-full h-auto"
                        onError={() => setHasError(true)}
                    />
                </Link>
            ) : (
                <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white tracking-tight">SOMNIUM</h3>
                    <p className="text-[10px] text-[#e38e26] font-bold uppercase tracking-widest mt-1">Management Consulting Pvt. Ltd.</p>
                </div>
            )}
        </>
    );
};
