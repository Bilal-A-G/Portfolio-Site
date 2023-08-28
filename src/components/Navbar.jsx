import Pages from "../Pages.jsx";
import Styles from "../Styles.jsx";
import {useState} from "react";

const NavbarLink = ({text, select, extras, link, props, group}) => {
    return(
        <a className={`${select ? "hover:text-white" : "text-black"} select-none ${window.location.pathname === link && select ? "text-white" : "text-black"}`} href={link}>
            <div className={`${select ? "hover:bg-dark-red" : "bg-off-white"} ${window.location.pathname === link && select ? "bg-dark-red" : "bg-off-white"} flex ${props} ${group} relative`}>
                {text}
                {extras}
            </div>
        </a>
    )
}

const Navbar = () => {
    const [open, setOpen] = useState(false);
    
    return(
        <>
            <div className={`w-full justify-end md:hidden ${!open ? "hidden" : "flex"} absolute`}>
                <div className="w-full h-screen fixed bg-black z-20 opacity-80"/>
                <div className="w-3/4 bg-off-white z-20 px-[2%] mt-[2%] mr-[2%] rounded-md">
                    <div className="flex justify-start pt-[5%]">
                        <button onClick={() => setOpen(false)} className="bg-[url('Close.svg')] 
                        border-black bg-contain bg-no-repeat bg-center h-[25px] w-[25px]"/>
                    </div>
                    <div className="w-full flex flex justify-center h-[1px] bg-black mt-[5px]"/>
                    <div className="w-full py-[5%] grid flex place-content-stretch font-semibold">
                        {Pages.map(({path, component, name, hasChildren, children}) =>
                            !hasChildren?
                            <NavbarLink text={name} select={true} props={"w-full px-2 py-1"} link={path}/>
                                :
                                <>
                                    <NavbarLink text={name} select={true} props={"w-full py-1 px-2"} group={"group/top"} extras={<div className="ml-[10px] mt-[7px] w-[8px] h-[8px] bg-[url('DropdownInactive.svg')] bg-no-repeat bg-center bg-cover"></div>}/>
                                    {children.map(({name, path, bottom, image}) => 
                                        <NavbarLink text={name} link={path} select={true} props={`w-full w-[200px] px-[20px] py-[5px] ${Styles.SmallBody}`} 
                                                    extras={<div className={`ml-[14px] mt-[2px] xl:h-6 xl:w-6 rounded-full ${image} bg-center bg-cover`}/>}/>)
                                    }
                                </>
                        )}
                    </div>
                </div>
            </div>
            <nav className="bg-off-white flex w-full xl:h-[50px] md:h-[40px]">
                <div className="h-full w-1/4">
                    <div className={`flex justify-center ${Styles.Body} text-black font-semibold`}>
                        <NavbarLink select={false} extras={<p>Bilal A-G</p>} link={"/"} props={"py-2"}/>
                    </div>
                </div>
                <div className={`w-3/4 ml-[15%] ${Styles.Subtitle} md:flex hidden font-semibold`}>
                    {Pages.map(({path, component, name, hasChildren, children}) =>
                        !hasChildren ?
                            <NavbarLink text={name} select={true} props={"h-full px-3 py-3"} link={path}/>
                            :
                            <NavbarLink text={name} select={true} props={"h-full px-3 py-3"} group={"group/top"}
                                        extras={<>
                                            <div className={"bg-[url('DropdownInactive.svg')] group-hover/top:bg-[url('DropdownActive.svg')] w-[10px] h-[10px] mt-[10%] ml-[3px] bg-no-repeat"}/>
                                            <div className={"md:mt-[33%] xl:mt-[43%] mt-[41.1%] w-[200px] bg-off-white absolute invisible group-hover/top:visible hover:!visible z-20 rounded-b-md"}>
                                                {children.map(({name, path, bottom, image}) => <NavbarLink text={name} link={path} select={true} props={!bottom ? "w-full w-[200px] px-[10px] py-[5px]" : "w-full w-[200px] px-[10px] py-[5px] rounded-b-md"} extras={<div className={`ml-[14px] mt-[2px] xl:h-6 xl:w-6 md:h-[15px] md:w-[15px] h-[2px] w-[2px] rounded-full ${image} bg-center bg-cover`}/>}/>)}
                                            </div>
                                        </>
                                        }/>
                    )}
                </div>
                <div className="w-3/4 md:hidden block grid place-items-center justify-end px-[8%]">
                    <button onClick={() => setOpen(true)} className="w-[20px] h-[20px] bg-[url('Hamburger.svg')] bg-contain bg-no-repeat bg-center"/>
                </div>
            </nav>
        </>
    );
}

export default Navbar;