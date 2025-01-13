"use client";

import React from "react";
import { TextAnimate } from '../ui/text-animate.tsx'
import { DockDemo } from "@/components/shared/Dock.tsx";

export function Header() {
    return (
        <div className="bg-black fixed w-full top-0 left-0 h-[40px] text-center">
            <a href="/" className="inline-block">
                <TextAnimate animation="blurInUp" by="character" className="pt-2 ">
                    Hello, I'm Heyday
                </TextAnimate>
            </a>
        </div>
    );
}
