import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css'
import utils from '../../utils'

import galeria from '../../assets/file/galeria.png'

import sala from '../../assets/static/sala.png'
import cozinha from '../../assets/static/cozinha.png'
import quarto from '../../assets/static/quarto.png'
import foto1 from '../../assets/static/foto1.jpg'
import foto3 from '../../assets/static/foto3.jpg'
import foto4 from '../../assets/static/foto4.jpg'
import foto5 from '../../assets/static/foto5.jpg'
import foto7 from '../../assets/static/foto7.jpg'
import foto8 from '../../assets/static/foto8.jpg'
import foto9 from '../../assets/static/foto9.jpg'
import foto10 from '../../assets/static/foto10.jpg'
import foto11 from '../../assets/static/foto11.jpg'
import foto12 from '../../assets/static/foto12.jpg'
import foto13 from '../../assets/static/foto13.jpg'
import foto14 from '../../assets/static/foto14.jpg'


import { TextCenter } from 'react-bootstrap-icons'

export default function Page(props) {
  const btnScrollTop = useRef(null)
  const [showBtn, setShowBtn] = useState(false)
  const ref = useRef();
  const [isMobile] = useState(utils.mobile());
  const arrayFotos = [
    sala,
    cozinha,
    quarto,
    foto1,
    foto3,
    foto4,
    foto5,
    foto7,
    foto8,
    foto9,
    foto10,
    foto11,
    foto12,
    foto13,
    foto14,
  ];

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = (event) => {
    if (window.pageYOffset >= 700 && !showBtn) {
      setShowBtn(true)
    } else {
      setShowBtn(false)
    }
  }

  const renderImg = (value) => {
    return (
      <SplideSlide className="d-flex justify-center items-center pl-1" style={{ display: "flex", alignSelf: 'center' }}>
        <img src={value} className="w-auto" />
      </SplideSlide>
    )
  }

  return (
    isMobile ?
      <div className="bg-galeria">
        <div className="flex">
            <img src={galeria} className="flex img-galeria" />
        </div>
        <div className='d-flex'>
          <div className='d-flex col-12'>
            <Splide
              className="splide-badges col-12"
              options={{
                rewind: true,
                width: '100%',
                height: 'auto',
                gap: '0rem',
                perPage: 2,
                pagination: false,
                arrows: true,
                type: 'loop',
              }}
            >
              {arrayFotos.map(el => { return (renderImg(el)) })}
            </Splide>
          </div>
          <div className="fotos-text pb-10">
            <div className="flex">São 88,42 m² bem distribuídos com 3 dormitórios, sala de estar e jantar, cozinha,
              área de serviço e uma excelente varanda gourmet com churrasqueira para você
              aproveitar seus melhores momentos de descanso e lazer!          </div>

          </div>
        </div>
      </div>

      :
      <ScrollableAnchor id={'fotos'}>
        <div className="bg-galeria">
          <div className="flex">
              <img src={galeria} className="flex img-galeria" />
          </div>
          <div class="transition duration-150 ease-out hover:ease-in">
            <div className="flex flex-col justify-center content-center	items-center	">
              <Splide
                ref={ref}
                className="splide-badges col-12"
                options={{
                  rewind: true,
                  width: '80%',
                  height: 'auto',
                  gap: '0rem',
                  perPage: 1,
                  pagination: isMobile,
                  arrows: !isMobile,
                }}
              >
                <SplideSlide className="flex items-center">
                  <div className='flex flex-grid'>
                    <div className="flex img-bloco">
                      <img src={sala} />
                    </div>
                  </div>
                  <div className="flex img-bloco px-1">
                    <img src={cozinha} />
                  </div>
                  <div className="flex img-bloco">
                    <img src={quarto} />
                  </div>
                </SplideSlide>

                <SplideSlide className="flex items-center">
                  <div className='flex flex-grid'>
                    <div className="flex img-bloco">
                      <img src={foto1} />
                    </div>
                    <div className="flex img-bloco px-1">
                      <img src={foto3} />
                    </div>
                    <div className="flex img-bloco">
                      <img src={foto4} />
                    </div>
                  </div>
                </SplideSlide>

                <SplideSlide className="flex items-center">
                  <div className='flex flex-grid'>
                    <div className="flex img-bloco">
                      <img src={foto5} />
                    </div>
                    <div className="flex img-bloco px-1">
                      <img src={foto7} />
                    </div>
                    <div className="flex img-bloco">
                      <img src={foto8} />
                    </div>
                  </div>

                </SplideSlide>

                <SplideSlide className="flex items-center">
                  <div className='flex flex-grid'>
                    <div className="flex img-bloco">
                      <img src={foto9} />
                    </div>
                  </div>
                    <div className="flex img-bloco px-1">
                      <img src={foto10} />
                    </div>
                    <div className="flex img-bloco">
                      <img src={foto11} />
                    </div>

                </SplideSlide>

                <SplideSlide className="flex items-center">
                    <div className='flex flex-grid'>
                      <div className="flex img-bloco">
                        <img src={foto12} />
                      </div>
                      <div className="flex img-bloco px-1">
                        <img src={foto13} />
                      </div>
                      <div className="flex img-bloco">
                        <img src={foto14} />
                      </div>
                  </div>
                </SplideSlide>
              </Splide>

            </div>
          </div >
          <div className="fotos-text">
            <div className="flex">São 88,42 m² bem distribuídos com 3 dormitórios, sala de estar e jantar, cozinha, área de serviço e uma excelente varanda gourmet com churrasqueira para você
              aproveitar seus melhores momentos de descanso e lazer!
            </div>
          </div>
        </div >
      </ScrollableAnchor >
  )
}
