import React from 'react'
import { LuListTodo } from "react-icons/lu";
const Navbar = () => {
  return (
    <>
    <nav className="flex w-full top-0 bg-violet-600 text-white justify-between py-3 sticky">
        <div className="logo">
            <span className="size-2.5"><LuListTodo /></span>
        </div>
        <ul className="flex gap-2.5 px-2">
            <li className="text-white hover:font-bold transition-all">HOME</li>
            <li className="text-white hover:font-bold transition-all">ABOUT</li>
        </ul>

    </nav>
    </>
  )
}

export default Navbar