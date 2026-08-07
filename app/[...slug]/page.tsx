import {InnerPage} from '@/components/InnerPage';
export function generateStaticParams(){return ['federation','history','history/timeline','history/maps','history/people','history/archive','orienteering','learn','learn/map','learn/compass','learn/controls','learn/route-choice','learn/first-steps','learn/competition','activities','news','resources','documents','contact'].map(x=>({slug:x.split('/')}))}
export default async function Page({params}:{params:Promise<{slug:string[]}>}){const{slug}=await params;return <InnerPage slug={slug.join('/')}/>}
