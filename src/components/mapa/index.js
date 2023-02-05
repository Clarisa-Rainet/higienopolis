import React, { useEffect, useState } from 'react'
import { Fade } from 'react-reveal'
import ScrollableAnchor, { goToAnchor } from 'react-scrollable-anchor'
import utils from '../../utils'


import mapa from '../../assets/static/mapa_local.png'
import visite from '../../assets/ctas/CTAmapa.png'
import salaJogos from '../../assets/static/sala_jogos.png'
import areaEspera from '../../assets/static/area_espera.png'
import playground from '../../assets/static/playground.png'
import detalhe from '../../assets/file/detalhe.png'



export default function Page(props) {
  const [isMobile] = useState(utils.mobile());

  return (
    isMobile ?
      <ScrollableAnchor id={'mapa'}>
        <div className="flex flex-col bg-mapa">
          <Fade duration={2000}>
            <div className="flex flex-col">
              <div className="flex flex-wrap">
                <div className='flex-auto'>
                  <img src={areaEspera} className="areaEspera" />
                </div>
                <div className="flex-auto mapa-text">
                  O residencial conta com salão
                  de festas, salão de jogos, espaço
                  mulher, fitness center, playground
                  para as crianças e jardins para
                  momentos de convívio social.
                </div>
              </div>
              <div className="flex flex-grid">
                <div className="flex">
                  <div className='flex-auto'>
                    <img src={salaJogos} className="salaJogos" />
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className='flex-auto'>
                    <img src={playground} className="playground" />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap">
                <div className="flex-col">
                  <div className="flex flex-col items-center justify-center">
                    <a
                      className="noHover"
                      target="_blank"
                      href='https://www.google.com/maps/place/Tv.+Piau%C3%AD,+60+-+Higien%C3%B3polis,+Piracicaba+-+SP,+13424-345/@-22.7432293,-47.6458528,17z/data=!3m1!4b1!4m6!3m5!1s0x94c6305645329993:0x9af384699cee0332!8m2!3d-22.7432293!4d-47.6436641!16s%2Fg%2F11h_f5zxk6" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy'>
                      <img src={mapa} className="mapa" />
                    </a>
                    <div className="mapa-address">
                      Travessa Piauí, 60, Bairro Higienópolis  <br /> Piracicaba - SP
                    </div>
                  </div>
                  <div className="relative flex flex-auto justify-center self-center">
                    <a
                      target="_blank"
                      href="https://api.whatsapp.com/send?phone=5519996965525" >
                      <img src={visite} className="img-mapa" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </Fade>
        </div>
      </ScrollableAnchor>
      :
      <ScrollableAnchor id={'mapa'}>
        <div className="flex flex-grid bg-mapa">
          <Fade duration={2000}>
            <div className="flex flex-col">
              <div className="flex flex-grid content-center">
                <div className='flex-auto'>
                  <img src={salaJogos} className="salaJogos pb-2" />
                </div>
              </div>
              <div className="flex flex-grid">
                <div className='flex-auto'>
                  <img src={areaEspera} className="areaEspera px-2" />
                </div>
                <div className='flex-auto'>
                  <img src={playground} className="playground" />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col">
                <div className="flex flex-col mapa-text">
                  O residencial conta com salão de festas,<br />
                  salão de jogos, espaço mulher, fitness<br />
                  center, playground para as crianças e jardins<br />
                  para momentos de convívio social.
                </div>
                <img src={detalhe} className="flex detalhe justify-end" />
                <div className="flex flex-col">
                  <div className="flex flex-col items-end">
                    <a
                      className="noHover"
                      target="_blank"
                      href='https://www.google.com/maps/place/Tv.+Piau%C3%AD,+60+-+Higien%C3%B3polis,+Piracicaba+-+SP,+13424-345/@-22.7432293,-47.6458528,17z/data=!3m1!4b1!4m6!3m5!1s0x94c6305645329993:0x9af384699cee0332!8m2!3d-22.7432293!4d-47.6436641!16s%2Fg%2F11h_f5zxk6" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy'>
                      <img src={mapa} className="mapa px-6 pt-1" />
                    </a>
                  </div>
                  <div className="mapa-address">
                    Travessa Piauí, 60, Bairro Higienópolis  <br /> Piracicaba - SP
                  </div>
                </div>
              </div>
              <div className="flex content-center">
                <a
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=5519996965525" className="flex justify-center">
                  <img src={visite} className="flex img-mapa" />
                </a>
              </div>
            </div>
          </Fade>
        </div>
      </ScrollableAnchor>
  )
}
