import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'ja';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

import en from '../translations/en';
import ja from '../translations/ja';

const translationsMap = {
    en,
    ja
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [language, setLanguageState] = useState<Language>(() => {
        // Get language from localStorage or default to 'en'
        const savedLang = localStorage.getItem('language');
        return (savedLang === 'ja' ? 'ja' : 'en') as Language;
    });

    useEffect(() => {
        // Save language preference to localStorage
        localStorage.setItem('language', language);
    }, [language]);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
    };

    // Translation function
    const t = (key: string): string => {
        // Get translations based on current language
        const translations = translationsMap[language];

        // Navigate nested keys (e.g., "header.search")
        const keys = key.split('.');
        let value: any = translations;

        for (const k of keys) {
            value = value?.[k];
            if (value === undefined) {
                console.warn(`Translation key not found: ${key}`);
                return key;
            }
        }

        return value;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
