import Link from "next/link"

export default function Navbar() {
    
    return (
        <nav className="w-full flex h-16 text-xl items-center bg-purple-950">
            <Link className="p-4 hover:bg-purple-800" href={"/"}><img src="/CouriwayLogo.svg" width={40}/></Link>
            <Link className="p-4 hover:bg-purple-800" href={"/bingo"}>Bingo</Link>
            <Link className="p-4 hover:bg-purple-800" href={"/100k"}>100k Bingo</Link>
        </nav>
    )
}