import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {styles} from "../styles.js";
import {navLinks} from "../constants/index.js";
import {logo, menu, close} from "../assets"

const Navbar = () => {
    
    const [activePage, SetActivePage] = useState("")
    
    return (
        <nav className={`${styles.paddingX} w-full fixed z-20 backdrop-blur-sm pt-3`}>
            <div>
                <span className="flex px-2">
                    <span className= "w-full flex justify-start space-x-3 items-center">
                        <div className= "text-green-300 text-[22px]">class</div>
                        <div className="text-stone-300 text-[21px]">Bilal A-G</div>
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
            </div>
            <div className="pt-4 pr-20">
                <div className="bg-green-200 h-[1px] rounded-md"/>
            </div>
        </nav>
    )
}

export default Navbar