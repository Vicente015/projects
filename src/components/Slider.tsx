import React from 'react'
import Slider from 'react-slick'

export default function SimpleSlider () {
  return (
    <Slider {...{ centerMode: false, dots: true }} className='screenshots'>
      <div className='p-2'>
        <img className='m-auto rounded-md' src='https://github.com/Vicente015/AnnounceIt/raw/main/.github/showcase_announceit1.gif' alt='Example gif' />
      </div>
      <div>
        <p>2</p>
      </div>
      <div>
        <p>ùwú</p>
      </div>
    </Slider>
  )
}
