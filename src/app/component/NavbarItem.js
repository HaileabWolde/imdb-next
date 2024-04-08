"use client"
import Link from "next/link";
import { useSearchParams } from "next/navigation";
const NavbarItem = ({title, params})=>{
    const searchParams = useSearchParams()
    const genre = searchParams.get('genre')
    return (
        <div>
            <Link
            className={`hover:text-amber-600 dark:hover:text-black font-semibold ${genre === params ? "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg" : ""}`} 
            href={`/?genre=${params}`}>
                <h1 >{title}</h1>
            </Link>
        </div>
    )
}
export default NavbarItem