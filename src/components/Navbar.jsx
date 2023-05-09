import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {navSections} from "../constants/index.js";
import {logo, menu, close} from "../assets"
import CodeText from "./CodeText.jsx";

const Navbar = () => {
    const [activePage, SetActivePage] = useState("")
    const [menuOpen, ToggleMenu] = useState(false)
    
    return (
        <nav className="px-4 w-full fixed z-40 backdrop-blur-md bg-background">
            <div className="top-0 flex items-center w-full pt-2">
                <div className="flex items-center w-full">
                    <CodeText
                        code="class"
                        text={<a href={"#"} className={`text-callToAction`} onClick={() => SetActivePage("Home")}> Bilal A-G </a>}
                        colour="callToAction"
                        size={"xs:text-[23px] text-[13px]"}
                        spacing="xs:gap-4 gap-2"
                    />
                </div>
                <div className={`justify-end items-end`}>
                    <div className="hidden xs:flex gap-10">
                        {
                            navSections.map((section) => (
                                <CodeText
                                    code="#define"
                                    text={
                                        <a href={`#${section.link}`} onClick={() => SetActivePage(section.title)}>
                                            <div className={`${activePage === section.title ? "bg-selected" : "bg-minor"} hover:bg-selected rounded-md px-[1px]`}>
                                                {section.title}
                                            </div>
                                        </a>}
                                    colour="background"
                                    size="text-[13px]"
                                    spacing="gap-2"
                                />
                            ))
                        }
                    </div>
                    <div className="flex xs:hidden gap-10">
                        <img src={menuOpen ? close : menu} onClick={() => ToggleMenu(!menuOpen)} className={`w-[22px] h-[22px] cursor-pointer ${menuOpen ? "border-solid" : "border-none"} hover:border-solid ${!menuOpen ? "border-none" : ""} border-minor border-[1px] p-[5px] rounded-md`}/>
                    </div>
                </div>
            </div>
            <div className="bg-minor w-full h-[1px] mt-3 flex justify-center"/>
            <div className="w-full flex justify-end">
                <div className={`${menuOpen ? "flex-col" : "hidden"} xs:hidden p-2 mt-4 flex mr-2 justify-center gap-5 border-solid border-[1px] border-minor rounded-xl`}>
                    {
                        navSections.map((section) => (
                        <CodeText
                            code="#define"
                            text={
                                <a href={`#${section.link}`} onClick={() => {SetActivePage(section.title); ToggleMenu(false)}}>
                                    <div className={`${activePage === section.title ? "bg-selected" : "bg-minor"} hover:bg-selected rounded-md px-[1px]`}>
                                        {section.title}
                                    </div>
                                </a>}
                            colour="background"
                            size="text-[10px]"
                            spacing="gap-2"
                        />
                        ))
                    }
                </div>
                <div className={`${menuOpen ? "flex" : "hidden"} xs:hidden flex h-[50px] w-[1px] bg-minor`}></div>
            </div>
        </nav>
    )
}

export default Navbar