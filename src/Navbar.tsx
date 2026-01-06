import { NavLink } from "react-router-dom";

const BASE_URL = import.meta.env.BASE_URL

function Navbar() {
    return (
        <>
            <nav className="bg-purple-800 w-full text-2xl mb-6">
                <NavLink to={`${BASE_URL}/`} className="px-5 py-3 inline-block align-middle active:bg-purple-900 hover:bg-purple-900">
                    <img src={`${BASE_URL}/CouriwayLogo.svg`} width={50} alt="Couriway logo" />
                </NavLink>
                <NavLink
                    to={`${BASE_URL}/`}
                    end
                    className={({ isActive }) => `px-5 py-5 inline-block text-yellow-300 align-middle active:bg-purple-900 ${isActive ? 'bg-purple-950' : 'bg-purple-800 hover:bg-purple-900'}`}
                >
                    Bingo
                </NavLink>
                <NavLink
                    to={`${BASE_URL}/100k`}
                    end
                    className={({ isActive }) => `px-5 py-5 inline-block text-yellow-300 align-middle active:bg-purple-900 ${isActive ? 'bg-purple-950' : 'bg-purple-800 hover:bg-purple-900'}`}
                >
                    100k Bingo
                </NavLink>
            </nav>
        </>
    )
}

export default Navbar;