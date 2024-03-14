"use client"
import { ThemeProvider } from "next-themes";
const Provider = ({children})=>{
    return (
        <ThemeProvider defaultTheme="system" attribute="class">
            <div className="min-h-screen dark:bg-gray-700 select-none">
                     {children}
            </div>

        </ThemeProvider>
    )
}
export default Provider ;