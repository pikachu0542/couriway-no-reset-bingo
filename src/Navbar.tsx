import { Link } from "react-router-dom";

const BASE_URL = import.meta.env.BASE_URL

function Navbar() {
    return (
        <>
            <nav className="bg-purple-800 w-full text-2xl">
                <Link to={`${BASE_URL}/`} className="px-5 py-3 inline-block align-middle hover:bg-purple-900"><a href="/"><img src={`${BASE_URL}/CouriwayLogo.svg`} width={50} /></a></Link>
                <Link to={`${BASE_URL}/`} className="px-5 py-5 inline-block text-yellow-300 align-middle hover:bg-purple-900">Bingo</Link>
                <Link to={`${BASE_URL}/100k`} className="px-5 py-5 inline-block text-yellow-300 align-middle hover:bg-purple-900">100k Bingo</Link>
            </nav>
        </>
    )
}

export default Navbar;