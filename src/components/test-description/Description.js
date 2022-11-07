import React from 'react'
import './description.css'

const IntrovertDescription = ({title, item, onHandleClick}) => {
  return (
    <div className='container'>
        <h1>{title}</h1>
        <div className='closebtn' onClick={onHandleClick}>
            {/* close btn icon here */}
        </div>
        <p>{content}</p>
    </div>
  )
}

const ExtrovertDescription = ({ title, item, onHandleClick }) => {
    return (
        <div className='container'>
            <h1>{title}</h1>
            <div className='closebtn' onClick={onHandleClick}>
                {/* close btn icon here */}
            </div>
            <p>{content}</p>
        </div>
    )
}



export {IntrovertDescription, ExtrovertDescription}