import React from 'npm:react'
import Slider from "react-slick"
const PSlider = Slider.default

// todo: wip, make dynamic

export default function SimpleSlider () {
  return (
    <PSlider {...{ centerMode: false, dots: true }} className='screenshots'>
      <div className='p-2'>
        <img className='m-auto rounded-md' src='https://github.com/Vicente015/AnnounceIt/raw/main/.github/showcase_announceit1.gif' alt='Example gif' />
      </div>
      <div>
        <p>2</p>
      </div>
      <div>
        <p>ùwú</p>
      </div>
    </PSlider>
  )
}
