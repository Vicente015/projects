
export default function ({ elements }) {
  return (
    <div className='blaze-slider'>
      <div className='blaze-container'>
        <div className='blaze-track-container'>
          {
            elements.map((element) => (
              <div className='blaze-track' >
                <div><img className='m-auto rounded-md shadow-lg' src={element} alt='Example gif' /></div>
              </div>
            ))
          }
        </div>

        <div className='slider-pagination'>
          <button className='blaze-prev' aria-label='Go to previous slide' />
          <div className='blaze-pagination' />
          <button className='blaze-next' aria-label='Go to next slide' />
        </div>
      </div>
    </div >
  )
}
