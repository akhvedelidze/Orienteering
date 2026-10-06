'use client';
import Link from 'next/link';
import {highlightPhotos,t} from '@/lib/content';

export function HighlightRibbon({lang}:{lang:'ka'|'en'}){
  const caption=t(lang,'არქივის ფოტო','Archive photo');
  const loop=[...highlightPhotos,...highlightPhotos];
  return (
    <Link
      href="/history/#photos"
      className="group block overflow-hidden rounded-2xl border border-white/15 bg-white/5 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
      aria-label={t(lang,'ფოტოარქივის ნახვა','View the photo archive')}
    >
      <div className="overflow-hidden py-2">
        <div className="highlight-marquee flex w-max gap-4 group-hover:[animation-play-state:paused]">
          {loop.map((src,i)=>
            <img key={src+i} src={src} alt={caption} className="h-36 w-56 shrink-0 rounded-xl object-cover sm:h-44 sm:w-64 md:h-52 md:w-80"/>
          )}
        </div>
      </div>
    </Link>
  );
}
