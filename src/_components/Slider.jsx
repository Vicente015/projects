
export default function () {
  return (
    <div className='blaze-slider'>
      <div className='blaze-container'>
        <div className='blaze-track-container'>
          <div className='blaze-track'>
            <div><img className='m-auto rounded-md' src='https://github.com/Vicente015/AnnounceIt/raw/main/.github/showcase_announceit1.gif' alt='Example gif' /></div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>
        </div>

        <div className='slider-pagination'>
          <button className='blaze-prev' aria-label='Go to previous slide' />
          <div className='blaze-pagination' />
          <button className='blaze-next' aria-label='Go to next slide' />
        </div>
      </div>
    </div>
  )
}
