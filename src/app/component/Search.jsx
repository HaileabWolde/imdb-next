"use client"
import { useState } from "react";
import {useRouter} from 'next/navigation';
const Search = ()=>{
    const router = useRouter()
    const [search, setSearch] = useState('')
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        router.push(`/search/${search}`)
    }
    return (
      <form
      className="flex justify-between px-5 max-w-6xl mx-auto"
      onSubmit={handleSubmit}
      >
        <input
        type="text"
        placeholder="Search keywords..."
        className="w-full h-14 rounded-md placholder-gray-500 outline-none bg-transparent"
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
        />
        <button
        type="submit"
        className="text-amber-600 disabled:text-gray-400"
        disabled={search === ''}
        >
            Search
        </button>
      </form>
    )
}
export default Search;