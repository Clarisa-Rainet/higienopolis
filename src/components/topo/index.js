import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import { Fade } from 'react-reveal'

import { Descricao } from '../'
import logo from '../../assets/logo/Logo.png'
import cta from '../../assets/ctas/CTA_decorado.png'

export default function Page(props) {
  const btnScrollTop = useRef(null)
  const [showBtn, setShowBtn] = useState(false)

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

  const [isMobile, setMobile] = useState(false)

  useEffect(() => {
    if (window.innerWidth >= 992) {
      setMobile(false)
    } else {
      setMobile(true)
    }
  }, [window.innerWidth])

  return (
    isMobile ?
      <ScrollableAnchor id={'home'}>
        <div className="flex flex-col">
          <div className="bg-topoMobile">
            <Fade>
              <div className="flex flex-col definicao flex-col">
                <div className="top-img py-16">
                  <img
                    src={logo}
                    className="flex"
                    width="250"
                  />
                </div>
                <div className="text-topo self-center">
                  excelente localização e <br />pronto para você morar!
                </div>
                <div className="flex justify-center">
                  <a
                    target="_blank"
                    href="https://api.whatsapp.com/send?phone=5519996965525" >
                    <img src={cta} className="iflex mg-topo pt-4" />
                  </a>
                </div>

              </div>
            </Fade>
          </div>
          <Descricao />
        </div>
      </ScrollableAnchor>

      :
      <ScrollableAnchor id={'home'}>
        <div className="flex flex-col">
          <div className="bg-topo">
            <Fade>
              <div className="flex flex-col definicao">
                <div className="top-img">
                  <img
                    src={logo}
                    className="flex"
                    width="500"
                  />
                </div>
                <div className="text-topo self-start">
                  excelente localização e <br />pronto para você morar!
                </div>
                <div className="flex flex-auto justify-start">
                  <a
                    target="_blank"
                    href="https://api.whatsapp.com/send?phone=5519996965525" >
                    <img src={cta} className="img-topo pt-6" />
                  </a>
                </div>

              </div>
            </Fade>
          </div>
          <Descricao />
        </div>

      </ScrollableAnchor>
  )
}
