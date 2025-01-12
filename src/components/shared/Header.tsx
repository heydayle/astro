"use client";

import React from "react";
import { TextAnimate } from '../ui/text-animate.tsx'
import {DockDemo} from "@/components/shared/Dock.tsx";

export function Header() {
    return (
        <div>
            <TextAnimate animation="blurInUp" by="character" className={'text-center'}>
                Hello, I'm Heyday
            </TextAnimate>
            <DockDemo className={'mt-0'}/>
        </div>
    );
}
