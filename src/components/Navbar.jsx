import Pages from "../Pages.jsx";

const NavbarLink = ({text, extras}) => {
    let link;
    for (let i = 0; i < Pages.length; i++){
        if(Pages[i].name === text){
            link = Pages[i].path;
        }
    }
    return(
        <a className="hover:text-white text-black select-none" href={link}>
            <div className="h-10 hover:bg-dark-red bg-off-white flex pt-2 pb-10 px-2">
                {text}
                {extras}
            </div>
        </a>
    )
}

const Navbar = () => {
    return(
      <nav className="bg-off-white flex w-full fixed z-20">
          <div className="w-1/4">
              <button className="pl-10 pt-2 text-black font-semibold" onClick={window.scrollTo(0, 0)}>
                  Bilal A-G
              </button>
          </div>
          <div className="w-3/4">
              <div className="w-1/2 space-x-1 flex justify-center font-semibold text-sm">
                  <NavbarLink text={"Home"}/>
                  <NavbarLink text={"About"}/>
                  <div className="flex space-x-1">
                      <NavbarLink text={"Projects"} extras={<div className="bg-[url('/DropdownInactive.svg')] h-4 w-4 bg-no-repeat mt-[6px] ml-1"></div>}/>
                  </div>
                  <NavbarLink text={"Contact"}/>
              </div>
          </div>
      </nav>  
    );
}

export default Navbar;