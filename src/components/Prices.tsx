import './Prices.css'

function Prices() {
  return (
    <div className="prices">
      <div className="prices__label">Цены</div>
      <div className="prices__grid">
        <div className="prices__card prices__card--free">
          <div>
            <div className="prices__card-title">Пробное занятие</div>
            <div className="prices__card-value prices__card-value--dark">Бесплатно</div>
          </div>
          <div className="prices__card-emoji">🌿</div>
        </div>
        <div className="prices__card">
          <div className="prices__card-subtitle">Разовое</div>
          <div className="prices__card-value">₪70</div>
        </div>
        <div className="prices__card">
          <div className="prices__card-subtitle">4 занятия / мес</div>
          <div className="prices__card-value">₪220</div>
        </div>
        <div className="prices__card prices__card--highlight">
          <div>
            <div className="prices__card-subtitle">8 занятий / мес</div>
            <div className="prices__card-value">₪350</div>
          </div>
          <div className="prices__tag">Выгоднее</div>
        </div>
      </div>
    </div>
  )
}

export default Prices
