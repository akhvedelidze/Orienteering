'use client';
import Link from 'next/link';
import {historyEssay,t} from '@/lib/content';
import {HistoryEssayBlock, HistoryEssayChapter} from '@/lib/types';
import {Section} from './Section';

function RichText({text}:{text:string}){
  const parts=text.split(/(\*\*[^*]+\*\*)/g);
  return <>{parts.map((part,i)=>part.startsWith('**')&&part.endsWith('**')?<strong key={i} className="font-semibold text-inherit">{part.slice(2,-2)}</strong>:<span key={i}>{part}</span>)}</>;
}

function Blocks({lang,blocks,muted}:{lang:'ka'|'en';blocks:HistoryEssayBlock[];muted?:boolean}){
  const body=muted?'text-base leading-relaxed text-white/75 md:text-lg':'text-base leading-relaxed text-slate-600 md:text-lg';
  const names=muted?'border-white/15 bg-white/8 text-white':'border-[#eadfd0] bg-[#f5f3eb] text-[#18201d]';
  return (
    <div className="space-y-5">
      {blocks.map((block,i)=>{
        if(block.type==='list'){
          return <ul className={`space-y-3 ${body}`} key={i}>{block.items.map(item=><li className="relative pl-6 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-orange-500" key={item.en}><RichText text={t(lang,item.ka,item.en)}/></li>)}</ul>;
        }
        if(block.type==='names'){
          return <p className={`rounded-2xl border px-5 py-4 text-base font-semibold leading-relaxed md:text-lg ${names}`} key={i}>{t(lang,block.ka,block.en)}</p>;
        }
        return <p className={body} key={i}><RichText text={t(lang,block.ka,block.en)}/></p>;
      })}
    </div>
  );
}

function ChapterHeading({lang,chapter,light}:{lang:'ka'|'en';chapter:HistoryEssayChapter;light?:boolean}){
  return (
    <header className="mb-6">
      <h2 className={`!text-[clamp(1.7rem,3vw,2.35rem)] ${light?'text-white':''}`}>{t(lang,chapter.titleKa,chapter.titleEn)}</h2>
    </header>
  );
}

export function HistorySubnav({lang,slug}:{lang:'ka'|'en';slug:string}){
  const isEssay=slug==='history'||slug==='history/timeline';
  const items=[
    {href:'/history',ka:'ისტორია',en:'History',active:isEssay},
    {href:isEssay?'#photos':'/history/#photos',ka:'ფოტოარქივი',en:'Photo archive',active:false},
    {href:'/history/maps',ka:'რუკები',en:'Maps',active:slug==='history/maps'},
    {href:'/history/people',ka:'ადამიანები',en:'People',active:slug==='history/people'},
    {href:'/history/archive',ka:'არქივი',en:'Archive',active:slug==='history/archive'}
  ];
  return (
    <section className="sticky top-[4.75rem] z-40 border-b border-slate-200 bg-white py-4 sm:top-20 md:py-5">
      <div className="container">
        <div className="flex flex-wrap gap-3">
          {items.map(item=>{
            const className=item.active?'btn btn-primary':'btn border border-slate-200';
            const label=t(lang,item.ka,item.en);
            return item.href.startsWith('#')?(
              <a className={className} href={item.href} key={item.href}>{label}</a>
            ):(
              <Link className={className} href={item.href} key={item.href}>{label}</Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function HistoryEssay({lang}:{lang:'ka'|'en'}){
  const chapters=historyEssay.filter(chapter=>!chapter.closing);
  const closing=historyEssay.find(chapter=>chapter.closing);
  return (
    <>
      <Section className="!pt-12 md:!pt-16">
        <article className="mx-auto max-w-3xl">
          {chapters.map(chapter=>(
            <section className="mb-16 scroll-mt-40 last:mb-0" key={chapter.id}>
              <ChapterHeading lang={lang} chapter={chapter}/>
              <Blocks lang={lang} blocks={chapter.blocks}/>
            </section>
          ))}
        </article>
      </Section>
      {closing&&(
        <Section dark className="topo !py-16 md:!py-20">
          <article className="mx-auto max-w-3xl">
            <ChapterHeading lang={lang} chapter={closing} light/>
            <Blocks lang={lang} blocks={closing.blocks} muted/>
          </article>
        </Section>
      )}
    </>
  );
}
