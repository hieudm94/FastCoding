import React from 'react'
import feature1Img from '../../../assets/image_right_u255.png'
import '../Feature1/Feature1.css'


export default function Feature1() {
    return (
        <div className="feature1" id='feature1'>
            <div className="row">
                <div className="col-sm-1 col-1">
                    <div className="tabItem">
                        <a href="#feature1"> TAB 1</a>
                    </div>
                    <div className="tabItem">
                        <a href="#feature2"> TAB 2</a>
                    </div>
                    <div className="tabItem">
                        <a href="#feature3"> TAB 3</a>
                    </div>
                </div>
                <div className="col-sm-7 col-6">
                    <h4>Tabs with soft transitioning effect.</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dolor doloremque, veritatis nobis, tempora, sapiente maiores ullam saepe iure expedita fugit a minima dignissimos veniam. Similique delectus quasi culpa et! Ad minima quibusdam nam deserunt assumenda adipisci.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, necessitatibus!</p>
                    <button className='btn-download-o'>Download</button>

                </div>
                <div className="col-sm-3 col-3">
                    <img src={feature1Img} alt="" />
                </div>
            </div>
        </div>
    )
}
