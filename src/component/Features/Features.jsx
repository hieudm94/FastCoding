import React from 'react'
import '../Features/Features.css'
import Feature1 from './Feature1/Feature1'
import Feature2 from './Feature2/Feature2'
import Feature3 from './Feature3/Feature3'

export default function Features() {
    return (
        <div className='features' id='Features'>
            <Feature1/>
            <Feature2/>
            <Feature3/>
        </div>
    )
}
