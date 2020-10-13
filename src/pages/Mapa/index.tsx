import React from 'react'
import { Link } from 'react-router-dom'
import { MdAdd } from 'react-icons/md'

import mapMarker from '../../assets/png/logo_1x.png'

function Mapa() {
  return (
    <div className="map">
      <aside>
        <header>
          <img src={mapMarker} alt="marcação happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Curitiba</strong>
          <span>Paraná</span>
        </footer>
      </aside>

      <div></div>

      <Link to="/dados" className="create-ophanage">
        <MdAdd size={32} />
      </Link>
    </div>
  )
}

export default Mapa
