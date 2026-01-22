import { Link } from "react-router";
import logo from "../assets/logo.png";
import FeatherIcon from "feather-icons-react";

export default function Nav() {
    return <nav className="w-full p-2 py-1 bg-white border-b-1">
        <div className="md:px-7 mx-auto flex justify-between items-center ">
            <Link to="/">
                <img src={logo} className="h-[50px]" />
            </Link>

            <div className="flex gap-4 text-[15px]">
            <Link>Strona główna</Link>
            <Link>Wyszukiwarka</Link>
            <Link>O nas</Link>
            <Link>Kontakt</Link>
        </div>

            <div className="pr-2">
                <FeatherIcon icon="user" />
            </div>
        </div>
    </nav>
}