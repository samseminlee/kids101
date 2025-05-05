
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import '../i18n';

export default function Home() {
  const { t, i18n } = useTranslation();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-4">{t('welcome')}</h1>
      <Link href="/parent"><button className="bg-blue-500 text-white px-4 py-2 m-2">{t('parent')}</button></Link>
      <Link href="/sitter"><button className="bg-green-500 text-white px-4 py-2 m-2">{t('sitter')}</button></Link>
      <Link href="/reviews"><button className="bg-yellow-500 text-white px-4 py-2 m-2">{t('reviews')}</button></Link>
      <div className="mt-6 space-x-2">
        <button onClick={() => i18n.changeLanguage('ko')}>🇰🇷</button>
        <button onClick={() => i18n.changeLanguage('en')}>🇺🇸</button>
        <button onClick={() => i18n.changeLanguage('zh')}>🇨🇳</button>
        <button onClick={() => i18n.changeLanguage('yue')}>🇭🇰</button>
        <button onClick={() => i18n.changeLanguage('hi')}>🇮🇳</button>
      </div>
    </div>
  );
}
