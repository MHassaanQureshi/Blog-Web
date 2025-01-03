import Image from "next/image";

import Link from "next/link";

export default function Footer(){
    return(
        <div className="border-t-2  w-full ">
            <div className="w-full flex flex-col gap-4 md:flex-row md:gap-32 p-2">
                <div className="w-[80%] ">
                <div className="flex flex-row items-center gap-1">
                <Image src="/images/logo.png" alt="umable to load" width={40} height={40} />
                <h1 className="text-black  text-3xl">Meta<span className="font-bold">Blog</span></h1>
                </div>
                <p className="text-[#272343] opacity-40">Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
                Cras egestas purus </p>
               
                </div>
                <div className="flex flex-col gap-3 md:flex-row md:gap-32 md:pt-2 md:pb-2">
                
                <div>
                    <h1 className="text-2xl text-[##272343] opacity-40 font-bold">Support</h1>
                    <ul className="">
                        <li><Link href="/Contact"  className="hover:underline hover:text-[#007580]">Help & Support</Link></li>
                        <li><Link href="/Contact"className="hover:underline hover:text-[#007580]">Terms & Conditions</Link></li>
                        <li><Link href="/Contact" className="hover:underline hover:text-[#007580]">Privacy Policy</Link></li>
                        <li><Link href="/Contact" className="hover:underline hover:text-[#007580]">Help</Link></li>
                        
                    </ul>
                </div>
                </div>

                <div className="mt-5 w-full p-2">
                <h1 className="text-LG text-[##272343] opacity-40 font-bold">NEWS LETTERS</h1>
                    <span className="w-full flex gap-4">
                        <input type="text" className="border-2 border-gray-200 p-2" placeholder="enter Email"/>
                        <button className="bg-[#007580] text-white px-2 text-sm rounded-lg md:px-4"><Link href="">Subscribe</Link></button>
                    </span>
                </div>
            </div>
            <div className="text-sm flex flex-col border-t-2 w-full items-center md:flex-row md:justify-between">
                <div className="flex">
                <p className="text-[##272343] opacity-50">@ 2024 - MetaBlogs - Designed & Develop by </p>
                <span className="text-black opacity-100">M.Hassaan Qureshi</span>
                </div>
                
            </div>
        </div>
    )
}