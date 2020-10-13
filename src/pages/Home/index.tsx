import React from 'react'
import { Link } from 'react-router-dom'
import { MdArrowForward as ArrowR } from 'react-icons/md'

import logo from '../../assets/png/logo_1x.png'

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="info">
          <div className="info__logo">
            <img
              src={logo}
              alt="Logo da oraganização"
              className="info__logo-img"
              width={50}
              height={45}
            />
            <h2 className="info__logo-title">
              <strong>happy</strong>
            </h2>
          </div>
          <div className="info__location">
            <h3 className="info__location-title">
              <strong>Curitiba</strong>
            </h3>
            <p className="info__location-subtitle">Paraná</p>
          </div>
        </div>
        <div className="bottom">
          <div className="bottom__header">
            <h1 className="bottom__header-title">
              Leve felicidade para o mundo
            </h1>
            <p className="bottom__header-subtitle">
              Visite orfanatos e mude o dia de muitas crianças.
            </p>
          </div>
          <div className="bottom__button">
            <Link to="/mapa" className="bottom__button-btn">
              <ArrowR size={36} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
