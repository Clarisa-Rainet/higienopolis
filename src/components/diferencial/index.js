import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css'
import { Fade } from 'react-reveal'
import utils from '../../utils'

import elevadores from '../../assets/icon/elevadores.png'
import localizacao from '../../assets/icon/localizacao.png'
import churrasqueira from '../../assets/icon/churrasqueira.png'
import planta from '../../assets/icon/planta_diferenciais.png'
import visite from '../../assets/ctas/CTAdiferenciais.png'

import diferencial from '../../assets/file/diferenciais.png'



export default function Page(props) {
  const [isMobile] = useState(utils.mobile());
  
  return (
    isMobile ?
      <div className="bg-diferencial">
        <Fade>
          <div className="flex flex-col justify-center items-center">
            <div className="justify-center">
              <img src={diferencial} className="p-10 diferencial-image" />
            </div>
          </div>

          <div className="flex flex-col diferencial-content items-center">
            <div className="flex-grid diferencial-content">
              <div className="flex diferencial-item3">
                <img src={elevadores} className="flex diferencial-box" />
              </div>
              <div className="flex diferencial-text items-center">
                Todos têm acesso<br/> a 2 elevadores
              </div>
              <div className="flex diferencial-item1">
                <img src={churrasqueira} className="flex diferencial-box1" />
              </div>
              <div className="flex diferencial-text items-center">
                Varanda com<br/> churrasqueira
              </div>
            </div>

            <div className="flex-grid diferencial-content2">
              <div className="flex diferencial-item2">
                <img src={localizacao} className="flex diferencial-box" />
              </div>
              <div className="flex diferencial-text items-center">
                Localização privilegiada,<br/> a 5 minutos do centro
              </div>


              <div className="flex diferencial-item">
                <img src={planta} className="flex diferencial-box" />
              </div>
              <div className="flex diferencial-text items-center">
                Entregue completo<br/> com pisos e revestimentos
              </div>
            </div>
          </div>

          <div className="flex flex-auto justify-start self-start py-10">
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5519996965525" >
              <img src={visite} className="img-diferencial" />
            </a>
          </div>
        </Fade >
      </div >
      :
      <ScrollableAnchor id={'diferencial'}>
        <div className="bg-diferencial py-20">
          <Fade>
            <div className="flex flex-col items-start">
              <div className="justify-center pb-8">
                <img src={diferencial} className="w-auto diferencial-image" />
              </div>

              <div className="flex flex-col diferencial-content">
                <div className="flex-grid diferencial-content">
                  <div className="flex diferencial-item">
                    <img src={elevadores} className="flex diferencial-box" />
                  </div>
                  <div className="flex diferencial-text items-center pr-20">
                    Todos têm acesso
                    <br />a 2 elevadores
                  </div>
                  <div className="flex diferencial-item1">
                    <img src={churrasqueira} className="flex diferencial-box1" />
                  </div>
                  <div className="flex diferencial-text items-center pr-32">
                    Varanda com <br />churrasqueira
                  </div>
                </div>

                <div className="flex-grid diferencial-content">
                  <div className="flex diferencial-item">
                    <img src={localizacao} className="flex diferencial-box" />
                  </div>
                  <div className="flex diferencial-text items-center">
                    Localização privilegiada,
                    <br />a 5 minutos do centro
                  </div>


                  <div className="flex diferencial-item">
                    <img src={planta} className="flex diferencial-box" />
                  </div>
                  <div className="flex diferencial-text items-center">
                    Entregue completo
                    <br />com pisos e revestimentos
                  </div>
                </div>

                <div className="flex pt-10 justify-center">
                  <a
                    target="_blank"
                    href="https://api.whatsapp.com/send?phone=5519996965525" >
                    <img src={visite} className="img-diferencial" />
                  </a>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </ScrollableAnchor>
  )
}
