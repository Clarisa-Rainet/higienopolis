import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css'
import { Fade } from 'react-reveal'
import utils from '../../utils'

import predio from '../../assets/static/predio.png'
import vida from '../../assets/file/melhordavida.png'
import corretor from '../../assets/ctas/CTAcorretor.png'
import quarto from '../../assets/icon/dormitorio.png'
import area from '../../assets/icon/planta.png'
import vagas from '../../assets/icon/vagas.png'
import suite from '../../assets/icon/suite.png'


export default function Page(props) {
  const [isMobile] = useState(utils.mobile());
  const arrayFotos = [
    { foto: quarto, descricao: 'Unidades de 3 dorms.' },
    { foto: area, descricao: '88.42m² de área privativa' },
    { foto: vagas, descricao: '2 vagas na garagem' },
    { foto: suite, descricao: 'Unidades com 1 suite' },
  ]

  const renderImg = (el) => {
    return (
      <SplideSlide className="flex justify-center items-center">
        <div className="descricao-item">
          <img src={el.foto} className="" />
          <div className="flex descricao-text">
            {el.descricao}
          </div>
        </div>
      </SplideSlide>
    )
  }

  return (
    isMobile ?
      <div className="bg-descricao">
        <Fade>
          <div className="flex justify-center">
            <img src={vida} className="flex img-descricao justify-center" />
          </div>
          <div className="flex text-descricao pb-6 justify-center">
            No Higienópolis Edifício você vive com conforto
            e segurança. A 5 minutos do centro de Piracicaba,
            o empreendimento foi construído em uma região
            privilegiada da cidade, próximo ao Teatro Municipal,
            hipermercado, Hospital Santa Casa, comércios
            e prestações de serviços em geral.
          </div>
          <div className="flex">
            <div className="flex img-icones">
              <img src={predio} />
            </div>
          </div>
          <div className="flex flex-grid descricao-content items-center">
            <div className="flex-col descricao-item">
              <img src={quarto} className="descricao-box" />
              <div className="flex descricao-text">
                Unidades <br />de 3 dorms.
              </div>
            </div>

            <div className="flex-col descricao-item">
              <img src={area} className="descricao-box" />
              <div className="flex descricao-text">
                88.42m² de <br />área privativa
              </div>
            </div>

            <div className="flex-col descricao-item">
              <img src={vagas} className="descricao-box" />
              <div className="flex descricao-text">
                2 vagas na <br />garagem
              </div>
            </div>

            <div className="flex-col descricao-item">
              <img src={suite} className="descricao-box" />
              <div className="flex descricao-text">
                Unidades <br />com 1 suíte
              </div>
            </div>
          </div>

          <div className="flex flex-auto justify-center self-center">
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5519996965525" >
              <img src={corretor} className=" descricao-img" />
            </a>
          </div>
        </Fade >
      </div >
      :
      <ScrollableAnchor id={'descricao'}>
        <div className="bg-descricao">
          <Fade left duration={2000}>
            <div className="flex flex-row py-10">
              <div className="flex">
                <div className="flex img-icones">
                  <img src={predio} />
                </div>
              </div>
              <div className="flex-auto flex-col ajustes">
                <div className="flex justify-center	pt-20">
                  <img src={vida} className="flex img-descricao justify-center" />
                </div>
                <div className="flex text-descricao pb-6 justify-center">
                  No Higienópolis Edifício você vive com conforto
                  e segurança. A 5 minutos do centro de Piracicaba,
                  o empreendimento foi construído em uma região
                  privilegiada da cidade, próximo ao Teatro Municipal,
                  hipermercado, Hospital Santa Casa, comércios
                  e prestações de serviços em geral.
                </div>
                  <div className="flex-grid descricao-content">
                    <div className="flex-col descricao-item">
                      <img src={quarto} className="descricao-box" />
                      <div className="flex descricao-text">
                        Unidades <br />de 3 dorms.
                      </div>
                    </div>

                    <div className="flex-col descricao-item">
                      <img src={area} className="descricao-box" />
                      <div className="flex descricao-text">
                        88.42m² de <br />área privativa
                      </div>
                    </div>

                    <div className="flex-col descricao-item">
                      <img src={vagas} className="descricao-box" />
                      <div className="flex descricao-text">
                        2 vagas na <br />garagem
                      </div>
                    </div>

                    <div className="flex-col descricao-item">
                      <img src={suite} className="descricao-box1" />
                      <div className="flex descricao-text">
                        Unidades <br />com 1 suíte
                      </div>
                    </div>
                  </div>

                <div className="flex justify-center">
                  <a
                    target="_blank"
                    href="https://api.whatsapp.com/send?phone=5519996965525" >
                    <img src={corretor} className="flex justify-center descricao-img" />
                  </a>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </ScrollableAnchor>
  )
}
