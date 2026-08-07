'use client';
import {createContext,useContext,useEffect,useState} from 'react'; import type {Lang} from '@/lib/content';
const C=createContext<{lang:Lang;setLang:(l:Lang)=>void}>({lang:'ka',setLang:()=>{}});
export function LanguageProvider({children}:{children:React.ReactNode}){const[lang,setLang]=useState<Lang>('ka');useEffect(()=>{document.documentElement.lang=lang;localStorage.setItem('lang',lang)},[lang]);return <C.Provider value={{lang,setLang}}>{children}</C.Provider>}
export const useLanguage=()=>useContext(C);
