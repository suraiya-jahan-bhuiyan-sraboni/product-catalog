"use client"
import Image from "next/image";
import Link from "next/link";
import ModeToggle from "./mode-toggle";

export default function Nav(){
    return(
        <div className="w-full border-b  bg-background fixed top-0 z-10 ">
            <div className="w-11/12 mx-auto flex py-4 items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold flex items-center justify-center gap-2">
                    <Image src="/favicon.ico" alt="Logo"
                        width={40}
                        height={24}
                        className="rounded" /> Products
                </Link>
                <ModeToggle/>
            </div>
        </div>
    )
}