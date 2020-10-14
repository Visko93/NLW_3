import React from 'react'
import { Link } from 'react-router-dom'
import { MdAdd } from 'react-icons/md'
import { Map, TileLayer } from 'react-leaflet'

import mapMarker from '../../assets/png/logo_1x.png'
import '../../styles/pages/map.css'
import 'leaflet/dist/leaflet.css'

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

      <Map
        center={[-25.539203, -49.2740054]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAP_KEY}`}
        />
      </Map>

      <Link to="/dados" className="create-ophanage">
        <MdAdd size={32} />
      </Link>
    </div>
  )
}

export default Mapa
