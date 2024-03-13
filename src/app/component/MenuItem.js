import Link from "next/link";
const MenuItem = ({title, address , Icon})=>{
    return (
       <Link href={address} className="hover:text-amber-500">
            <Icon className=" text-2xl sm:hidden"/>
            <p className="hidden sm:inline uppercase">{title}</p>
       </Link>
    )
}
export default MenuItem;