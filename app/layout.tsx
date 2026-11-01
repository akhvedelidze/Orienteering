import type {Metadata} from 'next';
import './globals.css';
import {LanguageProvider} from '@/components/LanguageProvider';
import {Header} from '@/components/Header';
import {Footer} from '@/components/Footer';
import {JsonLd} from '@/components/JsonLd';
import {
  DEFAULT_DESCRIPTION_KA,
  DEFAULT_DESCRIPTION_EN,
  SITE_NAME_EN,
  SITE_NAME_KA,
  SITE_URL,
  absoluteUrl,
  buildMetadata,
  organizationJsonLd,
} from '@/lib/seo';
import {federationLogo} from '@/lib/content';

const home=buildMetadata('');

export const metadata:Metadata={
  ...home,
  metadataBase:new URL(SITE_URL),
  title:{
    default:SITE_NAME_KA,
    template:`%s | ${SITE_NAME_EN}`,
  },
  description:`${DEFAULT_DESCRIPTION_KA} ${DEFAULT_DESCRIPTION_EN}`,
  applicationName:SITE_NAME_EN,
  keywords:[
    'ორიენტირება',
    'სპორტული ორიენტირება',
    'საქართველო',
    'orienteering',
    'orienteering Georgia',
    'Georgian National Orienteering Federation',
    'GeOF',
  ],
  authors:[{name:SITE_NAME_EN,url:SITE_URL}],
  creator:SITE_NAME_EN,
  publisher:SITE_NAME_EN,
  icons:{
    icon:[{url:federationLogo}],
    apple:[{url:federationLogo}],
  },
  openGraph:{
    ...home.openGraph,
    images:[{url:absoluteUrl(federationLogo),alt:SITE_NAME_KA}],
  },
};

export default function Layout({children}:{children:React.ReactNode}){
  return (
    <html lang="ka">
      <body>
        <JsonLd data={organizationJsonLd()}/>
        <LanguageProvider>
          <Header/>
          <main>{children}</main>
          <Footer/>
        </LanguageProvider>
      </body>
    </html>
  );
}
