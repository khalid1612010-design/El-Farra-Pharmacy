import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/context/LanguageContext';

export function SEO() {
  const { isRtl } = useLanguage();

  const title = isRtl 
    ? 'صيدلية محمد الفرا | رعاية طبية متكاملة في المطرية'
    : 'El-Farra Pharmacy | Comprehensive Medical Care in Matareya';
    
  const description = isRtl
    ? 'صيدلية محمد الفرا تقدم رعاية صيدلانية شاملة، قياس ضغط وسكر، استشارات، وتوصيل أدوية في المطرية.'
    : 'El-Farra Pharmacy offers comprehensive pharmaceutical care, BP & sugar tests, consultations, and delivery in Matareya.';
    
  const keywords = 'صيدلية المطرية, صيدلية محمد الفرا, El Farra Pharmacy, صيدلية قريبة مني, أدوية, استشارات طبية, توصيل أدوية';

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={isRtl ? 'ar_EG' : 'en_US'} />
      <meta property="og:site_name" content={title} />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
