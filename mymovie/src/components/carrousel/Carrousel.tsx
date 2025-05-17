'use client'
import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"


const ResizePlugin = (slider: any) => {
  const observer = new ResizeObserver(function () {
    slider.update()
  })

  slider.on("created", () => {
    observer.observe(slider.container)
  })
  slider.on("destroyed", () => {
    observer.unobserve(slider.container)
  })
}

const Carrousel = () => {

  const [sliderRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 3,
      },
    },
    [ResizePlugin]
  )

  return (
    <>
      <div className="flex items-center border-2 p-12 my-12 w-8/12">
        <div className="flex border p-8 w-14 h-14 items-center justify-center"> <div className="flex items-center justify-center"> + </div> </div>
        <div className="wrapper max-w-11/12">
          <div
            ref={sliderRef}
            className="keen-slider mx-4 flex gap-4 overflow-hidden w-8/12"

          >
            <div className="h-50 border-2 keen-slider__slide number-slide1">1</div>
            <div className="h-50 border-2 keen-slider__slide number-slide2">2</div>
            <div className="h-50 border-2 keen-slider__slide number-slide3">3</div>
            <div className="h-50 border-2 keen-slider__slide number-slide4">4</div>
            <div className="h-50 border-2 keen-slider__slide number-slide5">5</div>
            <div className="h-50 border-2 keen-slider__slide number-slide6">6</div>
          </div>
        </div>
      </div>
    </>
  )
}


export default Carrousel;