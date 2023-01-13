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
      <div className="bg-diferencialMobile">
        <Fade>
          <div className="flex flex-col justify-center items-center">
            <div className="justify-center">
              <img src={diferencial} className="p-10" />
            </div>
          </div>

          <div className="flex flex-col diferencial-content items-center">
            <div className="flex-grid diferencial-content">
              <div className="flex diferencial-item">
                <img src={elevadores} className="flex diferencial-box" />
              </div>
              <div className="flex diferencial-text items-center">
                TODOS TEM ACESSO A 2 ELEVADORES
              </div>
              <div className="flex diferencial-item">
                <img src={churrasqueira} className="flex diferencial-box" />
              </div>
              <div className="flex diferencial-text items-center">
                VARANDA COM CHURRASQUEIRA
              </div>
            </div>

            <div className="flex-grid diferencial-content ml-10">
              <div className="flex diferencial-item1">
                <img src={localizacao} className="flex diferencial-box" />
              </div>
              <div className="flex diferencial-text items-center">
                LOCALIZAÇAO PRIVILEGIADA, À 5 MINUTOS DO  CENTRO
              </div>


              <div className="flex diferencial-item1">
                <img src={planta} className="flex diferencial-box" />
              </div>
              <div className="flex diferencial-text items-center">
                ENTREGUE COMPLETO COM PISOS E REVESTIMENTOS
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
            <div className="flex flex-col items-center">
              <div className="justify-center pb-8">
                <img src={diferencial} className="w-auto" />
              </div>

              <div className="flex flex-col diferencial-content items-center">
                <div className="flex-grid diferencial-content">
                  <div className="flex diferencial-item">
                    <img src={elevadores} className="flex diferencial-box" />
                  </div>
                  <div className="flex diferencial-text items-center pr-20">
                    TODOS TEM ACESSO
                    <br />A 2 ELEVADORES
                  </div>
                  <div className="flex diferencial-item">
                    <img src={churrasqueira} className="flex diferencial-box" />
                  </div>
                  <div className="flex diferencial-text items-center pr-32">
                    VARANDA COM <br />CHURRASQUEIRA
                  </div>
                </div>

                <div className="flex-grid diferencial-content">
                  <div className="flex diferencial-item">
                    <img src={localizacao} className="flex diferencial-box" />
                  </div>
                  <div className="flex diferencial-text items-center">
                    LOCALIZAÇAO PRIVILEGIADA,
                    <br />À 5 MINUTOS DO  CENTRO
                  </div>


                  <div className="flex diferencial-item">
                    <img src={planta} className="flex diferencial-box" />
                  </div>
                  <div className="flex diferencial-text items-center">
                    ENTREGUE COMPLETO
                    <br />COM PISOS E REVESTIMENTOS
                  </div>
                </div>

                <div className="flex justify-center self-center pt-10">
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
