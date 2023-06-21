import Pages from "../Pages.jsx";

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
    return(
      <nav className="bg-off-white flex w-full h-[52px] z-20">
          <div className="w-1/4 h-full">
              <div className="justify-center pb-2 h-full flex text-[16px] text-black font-bold tracking-wider px-2">
                  <NavbarLink select={false} extras={<><p className="font-[900]">()[]</p><p>Bilal</p><p>A-G</p></>} link={"/"} props={"space-x-2 px-2 pt-3 h-full"}/>
              </div>
          </div>
          <div className="w-3/4 ml-[220px] flex text-[14px] font-medium tracking-wider">
              {Pages.map(({path, component, name, hasChildren, children}) =>
                  !hasChildren ? 
                  <NavbarLink text={name} select={true} link={path} props={"px-3 pt-4 h-full"}/>
                      :
                      <NavbarLink text={name} select={true} props={"px-3 pt-4 h-full"} group={"group/top"} 
                                  extras={<>
                                      <div className={"bg-[url('DropdownInactive.svg')] group-hover/top:bg-[url('DropdownActive.svg')] w-3 h-3 mt-[7px] ml-[3px] bg-no-repeat"}/>
                                      <div className={"bg-off-white w-[180px] mt-[36px] absolute invisible group-hover/top:visible hover:!visible z-20 rounded-b-md"}>
                                          {children.map(({name, path, bottom}) => <NavbarLink text={name} link={path} select={true} props={!bottom ? "pt-2 pb-2 justify-center" : "pt-2 pb-2 justify-center rounded-b-md"} extras={<div className="ml-[14px] mt-[2px] h-6 w-6 rounded-full bg-[url('Placeholder.png')] bg-center bg-cover"/>}/>)}
                                      </div>
                                  </>
                      }/>
              )}
          </div>
      </nav>  
    );
}

export default Navbar;