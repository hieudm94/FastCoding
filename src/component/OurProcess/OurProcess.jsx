import React from 'react'
import '../OurProcess/OurProcess.css'
import dividerOrange from '../../assets/divider_orange_u7.png'


export default function OurProcess() {
    return (
        <div className='ourProcess' id='ourProcess'>
            {/*ourProcess top  */}
            <div className="ourProcess-t">
                <p>WHY THIS IS AWESOME</p>
                <img src={dividerOrange} alt="" />
            </div>
            {/*ourProcess center  */}
            <div className="ourProcess-c">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, beatae!</p>
            </div>
            {/*ourProcess bottom  */}
            <div className="row ourProcess-b">
                <div className="col-4 ourProcess-item">
                    <div className="ourProcess-icon">
                        <i className="fa-regular fa-lightbulb"></i>
                    </div>
                    <div className="ourProcess-titile">
                        <h4>Thoughtful Design</h4>
                    </div>
                    <div className="ourProcess-content">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus voluptates ad maiores laborum, quod quasi fugit in a cum sed. Quibusdam quas nulla ea quod!</p>
                    </div>
                </div>
                <div className="col-4  ourProcess-item">
                    <div className="ourProcess-icon">
                        <i className="fa-solid fa-keyboard"></i>
                    </div>
                    <div className="ourProcess-titile">
                        <h4>Well Crafted</h4>
                    </div>
                    <div className="ourProcess-content">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae debitis eos minus deserunt provident ab laboriosam, corrupti amet blanditiis, tempora quidem, repellat aperiam placeat quae!</p>
                    </div>
                </div>
                <div className="col-4 ourProcess-item">
                    <div className="ourProcess-icon">
                    <i className="fa-solid fa-bolt-lightning"></i>
                    </div>
                    <div className="ourProcess-titile">
                        <h4>Easy to Customize</h4>
                    </div>
                    <div className="ourProcess-content">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, provident nihil minus aut similique optio quae, aliquid dolorem cupiditate harum neque commodi reprehenderit, repudiandae beatae.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
