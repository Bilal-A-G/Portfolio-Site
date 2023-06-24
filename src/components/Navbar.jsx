import Pages from "../Pages.jsx";
import Styles from "../Styles.jsx";

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
      <nav className="bg-off-white flex w-full xl:h-[50px] sm:h-[40px]">
          <div className="h-full w-1/4">
              <div className={`flex justify-center ${Styles.Body} text-black font-semibold`}>
                  <NavbarLink select={false} extras={<p>Bilal A-G</p>} link={"/"} props={"py-2"}/>
              </div>
          </div>
          <div className={`w-3/4 ml-[15%] flex ${Styles.Subtitle} font-semibold`}>
              {Pages.map(({path, component, name, hasChildren, children}) =>
                  !hasChildren ? 
                  <NavbarLink text={name} select={true} props={"h-full px-3 py-3"} link={path}/>
                      :
                      <NavbarLink text={name} select={true} props={"h-full px-3 py-3"} group={"group/top"} 
                                  extras={<>
                                      <div className={"bg-[url('DropdownInactive.svg')] group-hover/top:bg-[url('DropdownActive.svg')] w-3 h-3 mt-[10%] ml-[3px] bg-no-repeat"}/>
                                      <div className={"mt-[41.1%] bg-off-white absolute invisible group-hover/top:visible hover:!visible z-20 rounded-b-md"}>
                                          {children.map(({name, path, bottom, image}) => <NavbarLink text={name} link={path} select={true} props={!bottom ? "w-full w-[200px] px-[10px] py-[5px]" : "w-full w-[200px] px-[10px] py-[5px] rounded-b-md"} extras={<div className={`ml-[14px] mt-[2px] xl:h-6 xl:w-6 sm:h-[2px] sm:w-[2px] rounded-full ${image} bg-center bg-cover`}/>}/>)}
                                      </div>
                                  </>
                      }/>
              )}
          </div>
      </nav>  
    );
}

export default Navbar;