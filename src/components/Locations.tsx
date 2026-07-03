import ramatGanImage from '../assets/i3.jpg'
import yarkonParkImage from '../assets/i2.jpg'
import { locations } from '../data/locations'
import './Locations.css'

const images = [ramatGanImage, yarkonParkImage]

function Locations() {
  return (
    <div className="locations" id="locations">
      <div className="locations__label">Локации</div>
      <div className="locations__grid">
        {locations.map((location, index) => (
          <a
            className="locations__card"
            href={location.mapUrl}
            target="_blank"
            rel="noreferrer"
            key={location.name}
          >
            <img className="locations__image" src={images[index]} alt={location.name} />
            <div className="locations__info">
              <div>
                <div className="locations__name">{location.name}</div>
                <div className="locations__address">{location.address}</div>
              </div>
              <div className="locations__arrow">↗</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Locations
