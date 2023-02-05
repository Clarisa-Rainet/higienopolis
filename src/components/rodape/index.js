import React, { useEffect, useState } from "react";

import barbo from "../../assets/logo/Logo_Barbo.png";
import facebook from "../../assets/icon/face.png";
import instagram from "../../assets/icon/insta.png";

export default function Page(props) {
  const [loading, setLoading] = useState(false);
  const [isMobile, setMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth >= 992) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  }, [window.innerWidth]);
  return (
    isMobile ?
      <div className="flex flex-col">
        <div className="bg-blue pt-20">

          <div className="flex flex-row justify-center px-6">

            <div className="flex items-center">
              <div className="flex">
                <img src={barbo} alt="Barbo Empreendimentos" />
              </div>
            </div>

            <div className="flex flex-col justify-center ml-2">
              <div className="flex flex-row justify-center">
                <a className="flex w-8 justify-center mr-1"
                  href="https://www.facebook.com/barboempreendimentos/"
                  target="_blank"
                  rel="noreferrer">
                  <img src={facebook} alt="facebook" />
                </a>
                <a className="flex w-8 justify-center ml-1"
                  href="https://www.instagram.com/barboempreendimentos/"
                  target="_blank"
                  rel="noreferrer">
                  <img src={instagram} alt="instagram" />
                </a>

              </div>
              <div className="flex font-small md:font-medium family-montmedium items-center pl-2">
                @barboempreendimentos</div>
            </div>
          </div>
          <div className="flex line"></div>
          <div className="p-4">
            <div className="rodape-title">
              Todas as imagens utilizadas nesta página são meramente ilustrativas. Possíveis alterações de projeto serão executadas de acordo
              com o Memorial Descritivo do empreendimento.
            </div>
          </div>
        </div>
        <div className="rodape-text">
          Incorporação registrada sob Nº R.08 da matricula 77185 do oficial de registro de imóveis de Piracicaba - Estado de São Paulo, nos termos da Lei 4591/64.      </div>
      </div>
      :
      <div className="flex flex-col">
        <div className="bg-blue pt-20">

          <div className="flex flex-col md:flex-row justify-center">

            <div className="flex items-center pl-14 sm:pl-4 md:pl-0">
              <div className="w-2/3 sm:w-4/5 md:w-4/5 pr-0 md:pr-14 pb-2 md:pb-0 px-4 sm:px-48 md:px-0">
                <img src={barbo} alt="Barbo Empreendimentos" />
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="flex flex-row justify-center px-10">
                <a className="flex w-full justify-center"
                  href="https://www.facebook.com/barboempreendimentos/"
                  target="_blank"
                  rel="noreferrer">
                  <img src={facebook} alt="facebook" />
                </a>
                <a className="flex w-full justify-center"
                  href="https://www.instagram.com/barboempreendimentos/"
                  target="_blank"
                  rel="noreferrer">
                  <img src={instagram} alt="instagram" />
                </a>

              </div>
              <div className="flex font-small md:font-medium family-montmedium items-center pl-2 md:pl-0">
                @barboempreendimentos</div>
            </div>
          </div>
          <div className="flex line"></div>
          <div className="p-4">
            <div className="rodape-title">
              Todas as imagens utilizadas nesta página são meramente ilustrativas. Possíveis alterações de projeto serão executadas de acordo
              com o Memorial Descritivo do empreendimento.
            </div>
          </div>
        </div>
        <div className="rodape-text">
          Incorporação registrada sob Nº R.08 da matricula 77185 do oficial de registro de imóveis de Piracicaba - Estado de São Paulo, nos termos da Lei 4591/64.      </div>
      </div>
  )
}