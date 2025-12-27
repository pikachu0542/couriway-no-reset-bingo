import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav className="bg-purple-800 w-full text-2xl">
                <Link to={'/'} className="px-5 py-3 inline-block align-middle hover:bg-purple-900"><a href="/"><img src="/CouriwayLogo.svg" width={50} /></a></Link>
                <Link to={'/'} className="px-5 py-5 inline-block text-yellow-300 align-middle hover:bg-purple-900">Bingo</Link>
                <Link to={'/100k'} className="px-5 py-5 inline-block text-yellow-300 align-middle hover:bg-purple-900">100k Bingo</Link>
            </nav>
        </>
    )
}

export default Navbar;