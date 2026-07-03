import './Directions.css'

const directions = ['Силовая йога', 'Индивидуально']

function Directions() {
  return (
    <div className="directions">
      <div className="directions__label">Направления</div>
      <div className="directions__list">
        {directions.map((item) => (
          <span className="directions__pill" key={item}>
            {item}
          </span>
        ))}
        <span className="directions__pill directions__pill--muted">По запросу</span>
      </div>
    </div>
  )
}

export default Directions
