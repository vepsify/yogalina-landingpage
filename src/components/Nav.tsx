import { TelegramIcon } from './icons'
import { TELEGRAM_URL } from '../data/links'
import './Nav.css'

function Nav() {
  return (
    <nav className="nav">
      <div className="nav__brand">
        <span className="nav__dot" />
        <span className="nav__name">Yo! Galina</span>
      </div>
      <div className="nav__right">
        <a className="nav__link" href="#schedule">Расписание</a>
        <a className="nav__link" href="#prices">Цены</a>
        <a className="nav__link" href="#locations">Локации</a>
        <a className="nav__cta" href={TELEGRAM_URL} target="_blank" rel="noreferrer">
          <TelegramIcon size={13} />
          <span className="nav__cta-full">Написать в Telegram</span>
          <span className="nav__cta-short">Telegram</span>
        </a>
      </div>
    </nav>
  )
}

export default Nav
