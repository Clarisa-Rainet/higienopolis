import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import planta from '../../assets/static/planta.png'
import visite from '../../assets/ctas/CTAdecorado.png'
import infraestrutura from '../../assets/file/infraestrutura.png'

export default function Page(props) {
  const [indexSlide, setIndexSlide] = useState(0);
  const ref = useRef();
  const [isMobile, setMobile] = useState(false)
  useEffect(() => {
    if (window.innerWidth >= 768) {
      setMobile(false)
    } else {
      setMobile(true)
    }
  }, [window.innerWidth])

  return (
    isMobile ?
      <div className="bg-planta py-6">
        <div className="flex-auto flex-col" >
          <div className="flex justify-center items-center">
            <img src={infraestrutura} className="flex justify-center planta" />
          </div>
          <div className="leading-relaxed planta-text">
            Apartamento com sala de estar e jantar, cozinha, lavanderia, 3 dormitórios, sendo 1 suíte.
          </div>
        </div>

        <div className="mx-2">
          <div className="flex content-center justify-center">
            <div className="flex justify-center items-center">
              <img src={planta} className="flex justify-center planta" />
            </div>
          </div>
        </div>
        <div className="flex flex-auto justify-center self-center">
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=5519996965525" >
            <img src={visite} className="flex img-planta" />
          </a>
        </div>
      </div>

      :
      <ScrollableAnchor id={'planta'}>
        <div className="bg-planta py-10">
          <div className="flex flex-col">
            <div className="flex justify-center items-center">
              <img src={infraestrutura} className="flex justify-center planta" />
            </div>
            <div className="flex planta-text">
              Apartamento com sala de estar e jantar, cozinha, lavanderia, 3 dormitórios, sendo 1 suíte.
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex content-center justify-center">
              <div className="flex justify-center items-center">
                <img src={planta} className="flex justify-center image-planta" />
              </div>
            </div>
          </div>
          <div className="flex justify-center self-center">
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5519996965525" className="flex content-center justify-center">
              <img src={visite} className="flex content-center justify-center img-planta" />
            </a>
          </div>
        </div>
      </ScrollableAnchor>
  )
}
