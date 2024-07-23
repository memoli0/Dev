import React from 'react';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import i18nConfig from '../i18n.json';
import styles from '../styles/SwitchLanguage.module.css';

const { locales } = i18nConfig;

export default function SwitchLanguage() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (lng) => {
    localStorage.setItem('lang', lng);
    i18n.changeLanguage(lng);
  };

  return (
    <div className={styles.container}>
      {locales.map((lng) => (
        <Link href="/" locale={lng} key={lng}>
          <a
            href="/" 
            rel="noopener"
            className={styles.underline}
            onClick={() => handleLanguageChange(lng)}
          >
            {t(`common:language-name-${lng}`)}
          </a>
        </Link>
      ))}
    </div>
  );
}
