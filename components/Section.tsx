export function Section({children,dark=false,className='',id}:{children:React.ReactNode;dark?:boolean;className?:string;id?:string}){
  const hasBg=/(?:^|\s)(?:!)?bg-/.test(className);
  const tone=dark?'bg-[#123d31] text-white':hasBg?'':'bg-white';
  return <section id={id} className={`${tone} py-14 md:py-20 ${className}`}><div className="container">{children}</div></section>;
}
