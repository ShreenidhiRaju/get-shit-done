import React from 'react'
const Navbar = () => {
  return (
    <>
    <nav className="flex w-full top-0 bg-violet-600 text-white justify-between py-3 sticky">
            <div className="font-bold flex italic">
              <div>GET (SH)IT DONE</div>
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