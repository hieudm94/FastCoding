import React from 'react'
import '../Feature3/Feature3.css'
import dividerOrange from '../../../assets/divider_orange_u7.png'
import feature3Img from '../../../assets/image_right_standard_u262.jpg'

export default function Feature3() {
  return (
    <div className='row feature3' id='feature3'>
      {/* feature3 left */}
      <div className="col-6">
        <h4>Standard Picture Section</h4>
        <img src={dividerOrange} alt="" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur ab, nulla temporibus sed perferendis doloremque non nisi quisquam dignissimos? Minima deserunt consequuntur iste consequatur molestias! Animi minima harum sint minus corporis magnam nesciunt libero deserunt rem, porro eos, dolore aliquid!
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam accusantium fugiat corporis officiis aut labore dolores earum ex ad itaque.</p>
      </div>

      {/* feature3 right */}
      <div className="col-5">
        <img className='feature3-img' src={feature3Img} alt="" />
      </div>
    </div>
  )
}
