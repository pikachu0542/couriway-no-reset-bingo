
function Navbar() {
    return (
        <>
            <nav className="bg-purple-800 w-full text-2xl">
                <div className="px-5 py-3 inline-block align-middle hover:bg-purple-900"><a href="/"><img src="/CouriwayLogo.svg" width={50} /></a></div>
                <div className="px-5 py-5 inline-block text-yellow-300 align-middle hover:bg-purple-900"><a href="/bingo">Bingo</a></div>
                <div className="px-5 py-5 inline-block text-yellow-300 align-middle hover:bg-purple-900"><a href="/100k">100k Bingo</a></div>
            </nav>
        </>
    )
}

export default Navbar;