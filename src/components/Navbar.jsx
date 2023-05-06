import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {styles} from "../styles.js";
import {navLinks} from "../constants/index.js";
import {logo, menu, close} from "../assets"

const Navbar = () => {
    
    const [activePage, SetActivePage] = useState("")
    
    return (
        <nav className={`${styles.paddingX} w-full fixed z-20`}>
            <div className="bg-primary rounded-md px-2">
                <span className="flex px-2">
                    <span className= "w-full flex justify-start space-x-3 items-center">
                        <div className= "text-green-300 text-[30px]">class</div>
                        <div className="text-stone-300 text-[29px]">Bilal A-G</div>
                    </span>
                    <div className="flex justify-end space-x-6 mx-auto">
                        <span className= "flex justify-start items-center space-x-2"> 
                            <div className= "text-green-300 text-[13px]">#define</div>
                            <div className="text-black text-[12px] bg-green-200 rounded-md px-1">About</div> 
                        </span>
                        <span className= "flex justify-start items-center space-x-2"> 
                            <div className= "text-green-300 text-[13px]">#define</div>
                            <div className="text-black text-[12px] bg-green-200 rounded-md px-1">Projects</div> 
                        </span>
                        <span className= "flex justify-start items-center space-x-2"> 
                            <div className= "text-green-300 text-[13px]">#define</div>
                            <div className="text-black text-[12px] bg-green-200 rounded-md px-1">Contact</div> 
                        </span>
                    </div>
                </span>
                <span className= "flex justify-start items-center space-x-2 px-8 pb-2"> 
                    <div className= "text-green-300 text-[13px]">#include</div>
                    <div className="text-stone-300 text-[12px]">Programming</div> 
                </span>
            </div>
        </nav>
    )
}

export default Navbar