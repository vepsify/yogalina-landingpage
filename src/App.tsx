import Nav from './components/Nav'
import Hero from './components/Hero'
import Prices from './components/Prices'
import Directions from './components/Directions'
import Reviews from './components/Reviews'
import Locations from './components/Locations'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <div className="divider" />
      <div className="prices-directions-row">
        <Prices />
        <div className="directions-reviews-col">
          <Directions />
          <Reviews />
        </div>
      </div>
      <div className="divider" />
      <Locations />
      <Footer />
    </>
  )
}

export default App
