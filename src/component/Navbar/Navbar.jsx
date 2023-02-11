import React, { useState } from 'react'
import '../Navbar/Navbar.css'
import logoNavbar from '../../assets/logo_navbar.png'
import Bars from '../../assets/bars.png'

export default function Navbar() {
    const navbarShow = window.innerWidth <= 768 ? true : false;
    const [menuOpened, setMenuOpened] = useState(false);
    return (
        <div className='navbarTop' id='NavbarTop'>
            <div className="navbar-c row  ">
                {/* navbar left */}
                <div className='navbar-l col-sm-3 col-md-4' >
                    <img className="navbar-logo" src={logoNavbar} alt="" />
                </div>

                {/* navbar right */}
                {(navbarShow === true && menuOpened === false)
                    ? (
                        <div className='col-md-6 navbar-r'
                            style={{ padding: '0.5rem', borderRadius: '5px' }}
                            onClick ={() => setMenuOpened(true)}
                        >
                            <img src={Bars} alt="" style={{ width: '2rem', height: '2rem', backgroundColor: '#897c7c70', borderRadius: '5px', padding: '3px' }} />
                        </div>
                    )
                    : (
                        <div className="navbar-r col-sm-6 col-md-6">
                            <ul className='navbar-collapse'>
                                <li className='nav-item' onClick={() => setMenuOpened(false)}>
                                    <a href="#Features">Features</a>
                                </li>
                                <li className='nav-item' onClick={() => setMenuOpened(false)}>
                                    <a href="#ourProcess">About</a>
                                </li>
                                <li className='nav-item' onClick={() => setMenuOpened(false)}>
                                    <a href="#header">Pricing</a>
                                </li>
                                <li className='nav-item' onClick={() => setMenuOpened(false)}>
                                    <a href="#customSection">Reviews</a>
                                </li>
                                <li className='nav-item'>
                                    <a href="#contactUs">Contact</a>
                                </li>
                            </ul>
                        </div>
                    )}


            </div>
        </div>
    )
}
