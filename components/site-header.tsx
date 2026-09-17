"use client";
import {useEffect,useState} from "react";
import Image from "next/image";
import {useLocale} from "next-intl";
import {Link,usePathname,useRouter} from "@/i18n/navigation";

export function SiteHeader(){
 const locale=useLocale(); const id=locale==="id"; const pathname=usePathname(); const router=useRouter();
 const [open,setOpen]=useState(false); const [scrolled,setScrolled]=useState(false);
 const links=[
  {label:"Overview",href:"/",n:"01"},
  {label:"Work",href:"/work",n:"02"},
  {label:"Services",href:"/services",n:"03"},
  {label:"Studio",href:"/studio",n:"04"},
  {label:"Start a Project",href:"/start-a-project",n:"05"},
 ] as const;
 useEffect(()=>{const fn=()=>setScrolled(window.scrollY>36);fn();window.addEventListener("scroll",fn,{passive:true});return()=>window.removeEventListener("scroll",fn)},[]);
 useEffect(()=>setOpen(false),[pathname]);
 useEffect(()=>{document.body.style.overflow=open?"hidden":"";return()=>{document.body.style.overflow=""}},[open]);
 const active=(h:string)=>h==="/"?pathname==="/":pathname===h||pathname.startsWith(h+"/");
 return <>
  <a href="#main-content" className="fixed left-4 top-4 z-[100] -translate-y-24 bg-inverse-surface px-4 py-3 text-xs font-semibold uppercase tracking-widest text-inverse-on-surface focus:translate-y-0">{id?"Langsung ke konten":"Skip to content"}</a>
  <header className={`fixed z-50 transition-all duration-[420ms] ease-out ${scrolled?"left-3 right-3 top-3 md:left-8 md:right-8 lg:left-16 lg:right-16":"inset-x-0 top-0"}`}>
   <div className={`mx-auto transition-all duration-[420ms] ${scrolled?"max-w-7xl liquid-glass rounded-[1.35rem]! px-4 md:px-6":"max-w-none bg-surface/95 px-margin md:px-margin-tablet lg:px-margin-desktop"}`}>
    <div className={`flex items-center justify-between transition-all duration-[420ms] ${scrolled?"h-16":"h-20"}`}>
     <Link href="/" aria-label="RisenDev" className="group flex min-w-0 items-center gap-2" data-cursor="RISENDEV">
      <Image src="/img/logo.png" alt="RisenDev Logo" width={32} height={32} priority className={`w-auto object-contain mix-blend-multiply transition-all duration-300 ${scrolled?"h-7":"h-8"}`}/>
      <span className="hidden text-[13px] font-semibold tracking-[.08em] uppercase min-[430px]:inline sm:text-sm"><span className="mr-1 text-primary">[</span>RISEN DEV<span className="ml-1 text-primary">]</span></span>
     </Link>
     <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
      {links.map(l=><Link key={l.href} href={l.href} aria-current={active(l.href)?"page":undefined} className={`group relative px-3 py-2 text-[11px] font-semibold uppercase tracking-[.08em] transition-colors ${active(l.href)?"text-on-surface":"text-on-surface-variant hover:text-on-surface"}`}>
       <span>{l.label}</span><span className={`absolute inset-x-3 bottom-0 h-[2px] origin-left bg-primary transition-transform duration-300 ${active(l.href)?"scale-x-100":"scale-x-0 group-hover:scale-x-100"}`}/>
      </Link>)}
     </nav>
     <div className="flex items-center gap-2 sm:gap-3">
      <div className="hidden items-center gap-1 glass-pill p-1 sm:flex">{(["en","id"] as const).map(lang=><button key={lang} onClick={()=>router.replace(pathname,{locale:lang})} className={`h-7 min-w-8 cursor-pointer text-[10px] font-semibold uppercase transition-colors ${locale===lang?"bg-inverse-surface text-inverse-on-surface":"text-on-surface-variant hover:bg-surface-container-high"}`}>{lang}</button>)}</div>
      <Link href="/start-a-project" className="group hidden items-center gap-2 rounded-[.8rem]! bg-primary px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[.07em] text-on-primary transition-all hover:bg-inverse-surface sm:inline-flex"><span>{id?"Mulai Project":"Start Project"}</span><span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span></Link>
      <button onClick={()=>setOpen(true)} aria-label="Open menu" className="group grid size-10 place-items-center rounded-[.8rem]! hover:bg-surface-container lg:hidden"><span className="flex w-5 flex-col gap-1.5"><i className="block h-px w-full bg-on-surface transition-transform group-hover:translate-x-1"/><i className="block h-px w-full bg-on-surface transition-transform group-hover:-translate-x-1"/></span></button>
     </div>
    </div>
   </div>
  </header>
  <div className={`fixed inset-0 z-[70] flex flex-col bg-inverse-surface p-margin text-inverse-on-surface transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] lg:hidden ${open?"translate-x-0":"translate-x-full"}`}>
   <div className="flex items-center justify-between border-b border-white/15 pb-5"><span className="text-sm font-semibold tracking-[.08em]"><span className="text-primary-fixed">[</span>RISEN DEV<span className="text-primary-fixed">]</span></span><button onClick={()=>setOpen(false)} className="grid size-10 place-items-center text-3xl font-light" aria-label="Close menu">×</button></div>
   <div className="my-auto flex flex-col"><span className="mb-6 text-[10px] font-semibold uppercase tracking-[.12em] text-surface-dim">// Navigation index</span>{links.map(l=><Link key={l.href} href={l.href} className={`group flex items-center justify-between border-t border-white/15 py-4 text-[clamp(1.8rem,8vw,3.5rem)] font-semibold leading-none tracking-[-.04em] transition-colors last:border-b ${active(l.href)?"text-primary-fixed":"hover:text-primary-fixed"}`}><span>[{l.n}] {l.label}</span><span className="text-xl opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">↗</span></Link>)}</div>
   <div className="border-t border-white/15 pt-5"><div className="flex items-center gap-2 text-xs text-surface-dim"><span className="size-2 rounded-full bg-emerald-500"/><span>{id ? "Indonesia / Tersedia untuk proyek remote." : "Indonesia / Available for remote projects."}</span></div><Link href="/start-a-project" className="mt-4 flex w-full items-center justify-between bg-primary px-5 py-4 text-xs font-semibold uppercase tracking-wider text-on-primary"><span>{id?"Mulai Project":"Start Project"}</span><span>↗</span></Link></div>
  </div>
  <div className="h-20" aria-hidden="true"/>
 </>;
}
