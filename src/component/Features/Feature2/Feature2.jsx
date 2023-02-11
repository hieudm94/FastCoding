import React from 'react'
import '../Feature2/Feature2.css'
import feature2Img from '../../../assets/image_left_sub_list_u260.jpg'
import dividerOrange from '../../../assets/divider_orange_u7.png'




export default function Feature2() {
    return (
        <div className='row feature2' id='feature2'>
            {/* feature2 left */}
            <img className='feature2-img col-5' src={feature2Img} alt="" />


            {/* feature2 right */}
            <div className="col-6">
                <h4>Sub list section</h4>
                <img src={dividerOrange} alt="" />
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni ex facilis in, vitae nemo veniam porro veritatis ea possimus similique tempora dolorem hic eius voluptates nulla quod eos ducimus quam.
                </p>
                <div className="title1">
                    <div className='title1-l'>
                        <i className="fa-solid fa-cloud-arrow-up"></i>
                    </div>
                    <div className="title1-r">
                        <p className='title-content-b'>Title</p>
                        <p className='title-content-p'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe aliquam iste </p>
                    </div>
                </div>
                <div className="title2">
                    <div className="title2-l">
                        <i className="fa-solid fa-cloud-arrow-down"></i>
                    </div>
                    <div className="title2-r">
                        <p className='title-content-b'>Title</p>
                        <p className='title-content-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad architecto cupiditate debitis amet pariatur, vero veniam enim nihil cumque. Assumenda.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
