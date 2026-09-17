import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { AboutDesign } from "@/components/design/about";
export function generateMetadata({params}:{params:{locale:string}}):Metadata{
 const id=params.locale==="id"; const title=id?"Studio — Tentang RisenDev":"Studio — About RisenDev";
 const description=id?"Cara kerja, prinsip, dan pendekatan RisenDev dalam membangun website dan sistem bisnis.":"How RisenDev works and the principles behind our websites and business systems.";
 const path=`/${params.locale}/studio`;
 return {title,description,alternates:{canonical:path,languages:{en:"/en/studio",id:"/id/studio"}},openGraph:{type:"website",title,description,url:path}};
}
export default function Page({params}:{params:{locale:string}}){setRequestLocale(params.locale);return <AboutDesign/>}
