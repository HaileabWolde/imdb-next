import Link from "next/link";
import MenuItem from "./MenuItem";
import {AiFillHome} from 'react-icons/ai';
import {BsFillInfoCircleFill} from 'react-icons/bs';
import DarkModeSwitch from "./DarkModeSwitch";
const Header = ()=>{
    return (
        <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
            <div className="flex gap-6">
                <MenuItem title = "Home" address = "/" Icon = {AiFillHome}/>
                <MenuItem title = "About" address = "/about" Icon = {BsFillInfoCircleFill}/>
            </div>
            <div className="flex gap-2 items-center">
                <DarkModeSwitch/>
                <Link href={'/'} className="flex gap-1 items-center">
                    <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">IMDb</span>
                    <span className="text-xl hidden sm:inline">Clone</span>
                </Link>
            </div>
           
        </div>
    )
}
export default Header;
