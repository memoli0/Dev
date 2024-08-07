import { useEffect } from 'react';
import I18nProvider from 'next-translate/I18nProvider';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import Layout from "../components/Layout";
import Head from "../components/Head";
import "../styles/globals.css";
import "../styles/themes.css";

function MyApp({ Component, pageProps }) {
  const { lang } = useTranslation(); 
  const router = useRouter();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.documentElement.setAttribute("data-theme", savedTheme);
    }

    const savedLang = localStorage.getItem("lang");
    if (savedLang && savedLang !== lang) {
      router.push(router.asPath, router.asPath, { locale: savedLang });
    }
  }, [lang, router]);

  return (
    <Layout>
      <Head title={`Mehmet Abak | ${pageProps.title}`} />
      <I18nProvider lang={lang}>
        <Component {...pageProps} />
      </I18nProvider>
    </Layout>
  );
}

export default MyApp;
