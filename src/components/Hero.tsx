import heroImage from '../assets/i3.jpg'
import Schedule from './Schedule'
import { PinIcon, TelegramIcon } from './icons'
import { TELEGRAM_URL } from '../data/links'
import './Hero.css'

function Hero() {
  return (
    <div className="hero">
      <div className="hero__text">
        <div className="hero__badges">
          <span className="hero__badge">
            <PinIcon />
            Ramat Gan
          </span>
          <span className="hero__badge">Оффлайн + онлайн</span>
        </div>
        <h1 className="hero__heading">
          <span className="hero__heading-line">Йога</span>
          <span className="hero__heading-line hero__heading-line--accent">с Галей</span>
        </h1>
        <p className="hero__paragraph">
          Силовая йога для всех уровней — в группах и индивидуально. Рамат Ган и Парк Яркон.
        </p>
        <div className="hero__cta-row">
          <a className="hero__cta" href={TELEGRAM_URL} target="_blank" rel="noreferrer">
            <TelegramIcon />
            Написать в Telegram
          </a>
          <span className="hero__cta-note">Пробное занятие — бесплатно</span>
        </div>
      </div>
      <div className="hero__media">
        <img src={heroImage} alt="Йога" />
      </div>
      <Schedule />
    </div>
  )
}

export default Hero
