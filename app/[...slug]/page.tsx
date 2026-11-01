import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {InnerPage} from '@/components/InnerPage';
import {buildMetadata,getNewsArticle,resolvePageKey,STATIC_SLUGS} from '@/lib/seo';

export function generateStaticParams(){
  return STATIC_SLUGS.map(x=>({slug:x.split('/')}));
}

export async function generateMetadata({params}:{params:Promise<{slug:string[]}>}):Promise<Metadata>{
  const {slug}=await params;
  const pathKey=resolvePageKey(slug);
  if(pathKey.startsWith('news/')&&!getNewsArticle(pathKey.slice(5))){
    return {title:'Not found'};
  }
  if(!pathKey||(!STATIC_SLUGS.includes(pathKey)&&!pathKey.startsWith('news/'))){
    return buildMetadata('');
  }
  return buildMetadata(pathKey);
}

export default async function Page({params}:{params:Promise<{slug:string[]}>}){
  const {slug}=await params;
  const pathKey=resolvePageKey(slug);
  if(pathKey.startsWith('news/')&&pathKey!=='news'&&!getNewsArticle(pathKey.slice(5))){
    notFound();
  }
  return <InnerPage slug={pathKey}/>;
}
