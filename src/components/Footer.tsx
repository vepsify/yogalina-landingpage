import { InstagramIcon, TelegramIcon, WhatsAppIcon } from './icons'
import { INSTAGRAM_URL, TELEGRAM_URL, WHATSAPP_URL } from '../data/links'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__copy">© {new Date().getFullYear()} Yo! Galina</div>
      <div className="footer__social">
        <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
          <InstagramIcon />
        </a>
        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
          <WhatsAppIcon />
        </a>
        <a href={TELEGRAM_URL} target="_blank" rel="noreferrer">
          <TelegramIcon size={20} />
        </a>
      </div>
    </footer>
  )
}

export default Footer
