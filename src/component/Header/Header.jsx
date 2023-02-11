import React from 'react'
import '../Header/Header.css'
import logo from '../../assets/logo_navbar.png'
import dividerWhite from '../../assets/divider_white_u72.png'


export default function Header() {
  return (
    <div className='header' id='header'>
      <div className="header-BG"></div>
      <div className="header-content">
        {/* header left */}
        <div className="header-l">
          <img src={logo} alt="logo" />
          <div className='header-title'>
            <h1>MODERN AXURE TEMPLATE</h1>
            <h1>FOR BEAUTIFUL PROTOTYPES</h1>
          </div>
          <div className='divider-white'>
            <img src={dividerWhite} alt="" />
          </div>
          <div className='content'>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit delectus maxime incidunt sapiente dolorum quod, praesentium aspernatur possimus adipisci ipsam?
            </p>
          </div>
          <button className='btn-download-w'>Download</button>
        </div>

        {/*header right  */}
        <div className="header-r">
          <div className="form">
            <p>
              Try Your <span> FREE</span> Trial Today
            </p>
            <div>
              <input type="text" className='input-name' placeholder='Name' />
              <span></span>
              <input type="text" className='input-email' placeholder='Email' />
              <span></span>
              <input type="text" className='input-password' placeholder='Password' />
              <span></span>
            </div>
            <div>
              <button className='' >Get Started</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
