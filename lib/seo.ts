import type {Metadata} from 'next';
import {federationLogo,lessons,news} from './content';
import type {NewsArticle} from './types';

/** Canonical public origin (apex works; www currently fails DNS/Pages). */
export const SITE_URL='https://orienteering.ge';
export const SITE_NAME_KA='საქართველოს სპორტული ორიენტირების ეროვნული ფედერაცია';
export const SITE_NAME_EN='Georgian National Orienteering Federation';
export const DEFAULT_DESCRIPTION_KA='საქართველოს სპორტული ორიენტირების ეროვნული ფედერაცია — ისტორია, სწავლა, სიახლეები და საზოგადოება.';
export const DEFAULT_DESCRIPTION_EN='Georgian National Orienteering Federation — history, learning, news and community for sport orienteering in Georgia.';

export const THIN_PATHS=new Set([
  'history/maps',
  'history/people',
  'history/archive',
  'documents',
]);

type PageSeo={
  titleKa:string;
  titleEn:string;
  descriptionKa:string;
  descriptionEn:string;
  path:string;
  image?:string;
  noindex?:boolean;
  canonicalPath?:string;
};

const pageSeo:Record<string,PageSeo>={
  '':{
    path:'/',
    titleKa:SITE_NAME_KA,
    titleEn:SITE_NAME_EN,
    descriptionKa:DEFAULT_DESCRIPTION_KA,
    descriptionEn:DEFAULT_DESCRIPTION_EN,
    image:federationLogo,
  },
  federation:{
    path:'/federation/',
    titleKa:'ფედერაციის შესახებ',
    titleEn:'About the federation',
    descriptionKa:'საქართველოს სპორტული ორიენტირების ეროვნული ფედერაცია — მისია, მიზნები და სპორტის განვითარება საქართველოში.',
    descriptionEn:'About the Georgian National Orienteering Federation — mission, goals and developing orienteering in Georgia.',
  },
  history:{
    path:'/history/',
    titleKa:'სპორტული ორიენტირების ისტორია საქართველოში',
    titleEn:'History of orienteering in Georgia',
    descriptionKa:'ორიენტირების ისტორია საქართველოში — 1980 წლის პირველი ჩემპიონატიდან ეროვნულ ფედერაციამდე და ფოტოარქივი.',
    descriptionEn:'The history of orienteering in Georgia — from the 1980 championship to the national federation and photo archive.',
  },
  'history/timeline':{
    path:'/history/',
    titleKa:'სპორტული ორიენტირების ისტორია საქართველოში',
    titleEn:'History of orienteering in Georgia',
    descriptionKa:'ორიენტირების ისტორია საქართველოში — ქრონოლოგია და მნიშვნელოვანი ეტაპები.',
    descriptionEn:'History of orienteering in Georgia — timeline and key milestones.',
    canonicalPath:'/history/',
  },
  'history/maps':{
    path:'/history/maps/',
    titleKa:'ისტორიული რუკები',
    titleEn:'Historical maps',
    descriptionKa:'ისტორიული ორიენტირების რუკების არქივი საქართველოში.',
    descriptionEn:'Archive of historical orienteering maps in Georgia.',
    noindex:true,
  },
  'history/people':{
    path:'/history/people/',
    titleKa:'ორიენტირების ადამიანები',
    titleEn:'People of orienteering',
    descriptionKa:'სპორტსმენები, მწვრთნელები და ორგანიზატორები ქართული ორიენტირების ისტორიიდან.',
    descriptionEn:'Athletes, coaches and organisers from the history of Georgian orienteering.',
    noindex:true,
  },
  'history/archive':{
    path:'/history/archive/',
    titleKa:'ისტორიული არქივი',
    titleEn:'Historical archive',
    descriptionKa:'ფოტოები, რუკები და დოკუმენტები ქართული ორიენტირების არქივიდან.',
    descriptionEn:'Photographs, maps and documents from the Georgian orienteering archive.',
    noindex:true,
  },
  orienteering:{
    path:'/orienteering/',
    titleKa:'რა არის სპორტული ორიენტირება?',
    titleEn:'What is sport orienteering?',
    descriptionKa:'სპორტული ორიენტირება — რუკა, კომპასი, საკონტროლო პუნქტები, დისციპლინები და სწავლა საქართველოში.',
    descriptionEn:'What is sport orienteering — map, compass, controls, disciplines and learning in Georgia.',
  },
  learn:{
    path:'/learn/',
    titleKa:'ისწავლე ორიენტირება',
    titleEn:'Learn orienteering',
    descriptionKa:'ნაბიჯ-ნაბიჯ ისწავლე სპორტული ორიენტირება.',
    descriptionEn:'Learn sport orienteering step by step.',
    canonicalPath:'/orienteering/',
  },
  news:{
    path:'/news/',
    titleKa:'სიახლეები და აქტივობები',
    titleEn:'News and activities',
    descriptionKa:'საქართველოს სპორტული ორიენტირების ეროვნული ფედერაციის სიახლეები, ტურნირები და გამოცემები.',
    descriptionEn:'News, tournaments and publications from the Georgian National Orienteering Federation.',
  },
  activities:{
    path:'/activities/',
    titleKa:'სიახლეები და აქტივობები',
    titleEn:'News and activities',
    descriptionKa:'ფედერაციის სიახლეები და აქტივობები.',
    descriptionEn:'Federation news and activities.',
    canonicalPath:'/news/',
  },
  resources:{
    path:'/resources/',
    titleKa:'რესურსები სპორტული ორიენტირებისთვის',
    titleEn:'Orienteering resources',
    descriptionKa:'სასწავლო მასალები, გზამკვლევი, ვიდეოები და სასარგებლო ბმულები ორიენტირების სწავლისთვის.',
    descriptionEn:'Learning materials, guide, videos and useful links for orienteering.',
  },
  documents:{
    path:'/documents/',
    titleKa:'ოფიციალური დოკუმენტები',
    titleEn:'Official documents',
    descriptionKa:'ფედერაციის ოფიციალური დოკუმენტები.',
    descriptionEn:'Official federation documents.',
    noindex:true,
  },
  contact:{
    path:'/contact/',
    titleKa:'კონტაქტი',
    titleEn:'Contact',
    descriptionKa:'დაუკავშირდით საქართველოს სპორტული ორიენტირების ეროვნულ ფედერაციას — ქუთაისი, საქართველო.',
    descriptionEn:'Contact the Georgian National Orienteering Federation — Kutaisi, Georgia.',
  },
};

for(const lesson of lessons){
  const titleKa=lesson.titleKa;
  const titleEn=lesson.titleEn;
  const descriptionKa=lesson.summaryKa;
  const descriptionEn=lesson.summaryEn;
  pageSeo[`orienteering/${lesson.slug}`]={
    path:`/orienteering/${lesson.slug}/`,
    titleKa:`${titleKa} — ისწავლე ორიენტირება`,
    titleEn:`${titleEn} — learn orienteering`,
    descriptionKa,
    descriptionEn,
  };
  pageSeo[`learn/${lesson.slug}`]={
    path:`/learn/${lesson.slug}/`,
    titleKa:`${titleKa} — ისწავლე ორიენტირება`,
    titleEn:`${titleEn} — learn orienteering`,
    descriptionKa,
    descriptionEn,
    canonicalPath:`/orienteering/${lesson.slug}/`,
  };
}

pageSeo['orienteering/controls']={
  path:'/orienteering/controls/',
  titleKa:'საკონტროლო პუნქტის აღწერები',
  titleEn:'Control descriptions',
  descriptionKa:'საკონტროლო აღწერები ორიენტირებაში — ობიექტი, მდებარეობა და დამატებითი ინფორმაცია.',
  descriptionEn:'Control descriptions in orienteering — feature, location and additional detail.',
};
pageSeo['learn/controls']={
  path:'/learn/controls/',
  titleKa:'საკონტროლო პუნქტის აღწერები',
  titleEn:'Control descriptions',
  descriptionKa:'საკონტროლო აღწერები ორიენტირებაში.',
  descriptionEn:'Control descriptions in orienteering.',
  canonicalPath:'/orienteering/controls/',
};

export function absoluteUrl(path:string){
  const normalised=path.startsWith('/')?path:`/${path}`;
  return new URL(normalised,SITE_URL).toString();
}

export function getNewsArticle(slug:string){
  return news.find(a=>a.slug===slug);
}

export function resolvePageKey(slugParts:string[]|undefined){
  if(!slugParts?.length)return '';
  return slugParts.join('/');
}

export function getPageSeo(pathKey:string):PageSeo|undefined{
  if(pageSeo[pathKey])return pageSeo[pathKey];
  const newsMatch=pathKey.match(/^news\/(.+)$/);
  if(newsMatch){
    const article=getNewsArticle(newsMatch[1]);
    if(!article)return undefined;
    return {
      path:`/news/${article.slug}/`,
      titleKa:article.titleKa,
      titleEn:article.titleEn,
      descriptionKa:article.summaryKa,
      descriptionEn:article.summaryEn,
      image:article.image||federationLogo,
    };
  }
  return undefined;
}

export function buildMetadata(pathKey:string):Metadata{
  const seo=getPageSeo(pathKey)||pageSeo[''];
  const canonical=absoluteUrl(seo.canonicalPath||seo.path);
  const title=pathKey===''?{absolute:seo.titleKa}:seo.titleKa;
  const description=`${seo.descriptionKa} ${seo.descriptionEn}`;
  const image=absoluteUrl(seo.image||federationLogo);
  const noindex=Boolean(seo.noindex||THIN_PATHS.has(pathKey)||seo.canonicalPath);

  return {
    title,
    description,
    alternates:{canonical},
    robots:noindex?{index:false,follow:true}:{index:true,follow:true},
    openGraph:{
      type:pathKey.startsWith('news/')?'article':'website',
      locale:'ka_GE',
      alternateLocale:['en_GB'],
      url:canonical,
      siteName:SITE_NAME_EN,
      title:seo.titleKa,
      description:seo.descriptionKa,
      images:[{url:image,alt:seo.titleKa}],
    },
    twitter:{
      card:'summary_large_image',
      title:seo.titleKa,
      description:seo.descriptionKa,
      images:[image],
    },
  };
}

export function sitemapEntries(){
  const keys=Object.keys(pageSeo).filter(key=>{
    const seo=pageSeo[key];
    if(!seo||seo.noindex||seo.canonicalPath)return false;
    if(key.startsWith('learn'))return false;
    if(key==='activities'||key==='history/timeline')return false;
    return true;
  });

  const pages=keys.map(key=>{
    const seo=pageSeo[key];
    return {
      url:absoluteUrl(seo.path),
      lastModified:new Date(),
      changeFrequency:(key===''||key==='news'?'weekly':'monthly') as 'weekly'|'monthly',
      priority:key===''?1:key==='news'||key==='orienteering'?0.9:0.7,
    };
  });

  const articles=news.map(article=>({
    url:absoluteUrl(`/news/${article.slug}/`),
    lastModified:new Date(),
    changeFrequency:'monthly' as const,
    priority:0.8,
  }));

  return [...pages,...articles];
}

export function organizationJsonLd(){
  return {
    '@context':'https://schema.org',
    '@type':'SportsOrganization',
    name:SITE_NAME_EN,
    alternateName:SITE_NAME_KA,
    url:SITE_URL,
    logo:absoluteUrl(federationLogo),
    email:'geoorgineeting@gmail.com',
    telephone:'+995577133493',
    address:{
      '@type':'PostalAddress',
      streetAddress:'72/59 Nikea street',
      addressLocality:'Kutaisi',
      addressCountry:'GE',
    },
    sameAs:[
      'https://www.facebook.com/GeoOrienteering',
    ],
    sport:'Orienteering',
    areaServed:'Georgia',
  };
}

export function newsArticleJsonLd(article:NewsArticle){
  const url=absoluteUrl(`/news/${article.slug}/`);
  if(article.category==='event'&&article.slug==='batumi-orientireba-acibadem'){
    return {
      '@context':'https://schema.org',
      '@type':'Event',
      name:article.titleEn,
      alternateName:article.titleKa,
      description:article.summaryEn,
      image:absoluteUrl(article.image||federationLogo),
      startDate:'2026-10-17T10:00:00+04:00',
      eventAttendanceMode:'https://schema.org/OfflineEventAttendanceMode',
      eventStatus:'https://schema.org/EventScheduled',
      location:{
        '@type':'Place',
        name:'Batumi Boulevard',
        address:{
          '@type':'PostalAddress',
          addressLocality:'Batumi',
          addressCountry:'GE',
        },
      },
      organizer:{
        '@type':'SportsOrganization',
        name:SITE_NAME_EN,
        url:SITE_URL,
      },
      url,
    };
  }

  return {
    '@context':'https://schema.org',
    '@type':'NewsArticle',
    headline:article.titleEn,
    alternateName:article.titleKa,
    description:article.summaryEn,
    image:absoluteUrl(article.image||federationLogo),
    ...(article.publishedAt?{datePublished:`${article.publishedAt}-01`}:{}),
    mainEntityOfPage:url,
    url,
    author:{'@type':'Organization',name:SITE_NAME_EN},
    publisher:{
      '@type':'Organization',
      name:SITE_NAME_EN,
      logo:{'@type':'ImageObject',url:absoluteUrl(federationLogo)},
    },
    inLanguage:['ka','en'],
  };
}

export const STATIC_SLUGS=[
  'federation',
  'history',
  'history/timeline',
  'history/maps',
  'history/people',
  'history/archive',
  'orienteering',
  'orienteering/map',
  'orienteering/compass',
  'orienteering/controls',
  'orienteering/route-choice',
  'orienteering/first-steps',
  'orienteering/competition',
  'learn',
  'learn/map',
  'learn/compass',
  'learn/controls',
  'learn/route-choice',
  'learn/first-steps',
  'learn/competition',
  'activities',
  'news',
  'resources',
  'documents',
  'contact',
  ...news.map(a=>`news/${a.slug}`),
];
