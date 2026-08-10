'use client';
import Image from 'next/image';
import {federationLogo,t} from '@/lib/content';
import {useLanguage} from './LanguageProvider';

export function FederationLogo({variant,priority}:{variant:'header'|'hero';priority?:boolean}){
  const{lang}=useLanguage();
  const alt=t(lang,'GeOF — საქართველოს სპორტული ორიენტირების ეროვნული ფედერაცია','GeOF — Georgian National Orienteering Federation');
  if(variant==='header')return <Image src={federationLogo} alt={alt} width={512} height={512} priority={priority} className="h-[3.25rem] w-[3.25rem] shrink-0 rounded-xl bg-white object-contain p-1 shadow-sm ring-1 ring-white/15 sm:h-14 sm:w-14 sm:p-1.5"/>;
  return <div className="relative mx-auto w-full max-w-[380px] md:mx-0 md:ml-auto"><div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-[#ef5b2a]/25 blur-3xl" aria-hidden/><div className="relative overflow-hidden rounded-[1.75rem] bg-white p-6 shadow-[0_28px_70px_rgba(0,0,0,.32)] ring-1 ring-white/35 sm:p-8 md:p-10"><Image src={federationLogo} alt={alt} width={512} height={512} priority={priority} className="mx-auto aspect-square w-full max-w-[280px] object-contain sm:max-w-[320px] md:max-w-[340px]"/></div></div>;
}
