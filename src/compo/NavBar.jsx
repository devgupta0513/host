import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
const NavBar = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/homepage" className='try'>homepage</Link>

                </li>
                <li>
                    <Link to="/chatpage" className='try'>chatpage</Link>

                </li>

                <li>
                    <Link to="/about" className='try' >about</Link>

                </li>
                <li>
                    <Link to="/career" className='try' >career</Link>

                </li>
                <li>
                    <Link to="/contact" className='try' >contact</Link>

                </li>


            </ul>
        </div>
    )
}

export default NavBar