import React from 'react';
import './LanguageSwitcher.css';

function LanguageSwitcher({ currentLanguage, onLanguageChange }) {
    return (
        <div className="language-switcher">
            <button
                className={currentLanguage === 'es' ? 'active' : ''}
                onClick={() => onLanguageChange('es')}
            >
                ES
            </button>
            <button
                className={currentLanguage === 'en' ? 'active' : ''}
                onClick={() => onLanguageChange('en')}
            >
                EN
            </button>
        </div>
    );
}

export default LanguageSwitcher;
