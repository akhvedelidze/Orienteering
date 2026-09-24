'use client';
import {useEffect,useState} from 'react';
import {X} from 'lucide-react';
import {archivePhotos,t} from '@/lib/content';

export function PhotoArchive({lang}:{lang:'ka'|'en'}){
  const[open,setOpen]=useState<number|null>(null);
  const caption=t(lang,'არქივის ფოტო','Archive photo');

  useEffect(()=>{
    if(open===null)return;
    const onKey=(e:KeyboardEvent)=>{
      if(e.key==='Escape')setOpen(null);
      if(e.key==='ArrowRight')setOpen(i=>i===null?i:(i+1)%archivePhotos.length);
      if(e.key==='ArrowLeft')setOpen(i=>i===null?i:(i-1+archivePhotos.length)%archivePhotos.length);
    };
    window.addEventListener('keydown',onKey);
    return()=>window.removeEventListener('keydown',onKey);
  },[open]);

  return (
    <section id="photos" className="bg-[#f5f3eb] pb-16 pt-8 md:pb-20 md:pt-10">
      <div className="container">
        <p className="eyebrow">PHOTO ARCHIVE</p>
        <h2>{t(lang,'ფოტოარქივი','Photo archive')}</h2>
        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4">
          {archivePhotos.map((src,i)=>(
            <button type="button" key={src} onClick={()=>setOpen(i)} className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-100 text-left">
              <img src={src} alt={caption} className="h-full w-full object-cover transition duration-300 group-hover:scale-105"/>
              <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-3 text-sm font-medium text-white opacity-0 transition group-hover:opacity-100">{caption}</span>
            </button>
          ))}
        </div>
        {open!==null&&(
          <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-4" onClick={()=>setOpen(null)} role="dialog" aria-modal="true" aria-label={caption}>
            <button type="button" className="absolute right-4 top-4 text-white/80 hover:text-white" onClick={()=>setOpen(null)} aria-label={t(lang,'დახურვა','Close')}><X size={28}/></button>
            <button type="button" className="absolute left-3 top-1/2 -translate-y-1/2 px-3 text-4xl text-white/70 hover:text-white" onClick={e=>{e.stopPropagation();setOpen((open-1+archivePhotos.length)%archivePhotos.length);}} aria-label={t(lang,'წინა','Previous')}>‹</button>
            <figure className="relative max-h-[88vh] max-w-5xl" onClick={e=>e.stopPropagation()}>
              <img src={archivePhotos[open]} alt={caption} className="max-h-[80vh] w-auto rounded-lg object-contain"/>
              <figcaption className="mt-3 text-center text-sm text-white/80">{caption}</figcaption>
            </figure>
            <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 px-3 text-4xl text-white/70 hover:text-white" onClick={e=>{e.stopPropagation();setOpen((open+1)%archivePhotos.length);}} aria-label={t(lang,'შემდეგი','Next')}>›</button>
          </div>
        )}
      </div>
    </section>
  );
}
