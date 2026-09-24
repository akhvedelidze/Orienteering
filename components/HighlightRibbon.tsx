'use client';
import Link from 'next/link';
import {highlightPhotos,t} from '@/lib/content';

export function HighlightRibbon({lang}:{lang:'ka'|'en'}){
  const caption=t(lang,'არქივის ფოტო','Archive photo');
  const loop=[...highlightPhotos,...highlightPhotos];
  return (
    <Link
      href="/history#photos"
      className="group block overflow-hidden rounded-2xl border border-white/15 bg-white/5 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
      aria-label={t(lang,'ფოტოარქივის ნახვა','View the photo archive')}
    >
      <div className="overflow-hidden py-2">
        <div className="highlight-marquee flex w-max gap-4 group-hover:[animation-play-state:paused]">
          {loop.map((src,i)=>
            <img key={src+i} src={src} alt={caption} className="h-48 w-72 shrink-0 rounded-xl object-cover sm:h-56 sm:w-80 md:h-64 md:w-[22rem]"/>
          )}
        </div>
      </div>
    </Link>
  );
}
