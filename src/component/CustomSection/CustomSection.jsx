import React from 'react'
import '../CustomSection/CustomSection.css'
import dividerWhite from '../../assets/divider_white_u72.png'

export default function CustomSection() {
    return (
        <div className='customSection' id='customSection'>
            {/* customSection background */}
            <div className='customSection-BG'  />
            {/* customSection top */}
            <div className="customSection-t">
                <p>STYLISH AXURE DESIGN</p>
                <img src={dividerWhite} alt="" />
            </div>
            {/* customSection center */}
            <div className="customSection-c">
                <p>Use the sections you need, remove the ones you don't. Create gorgeous prototypes faster than ever!</p>
            </div>
            {/* customSection bottom */}
            <div className='customSection-b'> 
                <button className='customSection-btn'>Download</button>
            </div>
        </div>
    )
}
