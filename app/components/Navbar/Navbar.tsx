"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleScrollToBlog = () => {
        const blogSection = document.getElementById("blog-section");
        if (blogSection) {
            blogSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className=" text-black p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex gap-2">
                <Image src="/images/logo.png" width={40} height={40} alt="unable to load"/>
                <h1 className="text-black  text-3xl">Meta<span className="font-bold">Blog</span></h1>
                </div>
                
                <div className="block lg:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)} 
                        className="text-black focus:outline-none"
                    >
                        {menuOpen ? (
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        )}
                    </button>
                </div>
               
                <ul className="hidden lg:flex space-x-8 text-xl items-center align-middle">
                    <li>
                        <Link href="/" className="hover:border-b-2 border-black">
                            Home
                        </Link>
                    </li>
                    <li>
                    <button
                            onClick={handleScrollToBlog}
                            className="hover:border-b-2 border-black focus:outline-none"
                        >
                            Blogs
                        </button>
                    </li>
                    
                    {/* <li>
                        <Link href="/Signup" className="hover:border-b-2 border-black">
                        Single Post
                        </Link>
                    </li>
                    <li>
                        <Link href="/Contact" className="hover:border-b-2 border-black">
                            Pages
                        </Link>
                    </li>
                    <li>
                        <Link href="/Contact" className="hover:border-b-2 border-black">
                            Contact
                        </Link>
                    </li> */}
                    <li className="bg-gray-200 px-2">
                        <input type="text" className="bg-gray-200 text-sm p-2" placeholder="search" />
                        <button className="p-2"><Image src="/images/search.png" width={20} height={20} alt=" "/></button>
                    </li>
                    
                </ul>
            </div>
            
            {menuOpen && (
                <div className="lg:hidden w-[30%] bg- flex flex-col bg-gray-300 bg-opacity-30 backdrop-blur-md rounded-lg  shadow-lg text-black absolute mt-2 right-2  z-10">
                <ul className="flex flex-col space-y-4 mt-4 p-4">
                  <li>
                    <Link href="/" className="hover:border-b-2 border-black">
                      Home
                    </Link>
                  </li>
                  <li>
                  <button
                            onClick={handleScrollToBlog}
                            className="hover:border-b-2 border-black focus:outline-none"
                        >
                            Blogs
                        </button>
                  </li>
                  {/* <li>
                    <Link href="/About" className="hover:border-b-2 border-black">
                      Single Post
                    </Link>
                  </li>
                  <li>
                    <Link href="/Signup" className="hover:border-b-2 border-black">
                      Pages
                    </Link>
                  </li>
                  <li>
                    <Link href="/Contact" className="hover:border-b-2 border-black">
                      Contact
                    </Link>
                  </li> */}
                
                   
                </ul>
              </div>
              
            )}
        </nav>
    );
}
