import ShopPage from './pages/ShopPage'
import Header from './components/Header'
import Footer from './components/Footer'
import './styles/dist/global.css'

function App() {

  return (
    <>
      <a href="#main" className="skip-link">본문 바로가기</a>

      <Header />

      <main id="main">
        <ShopPage />
      </main>

      <Footer />
    </>
  )
}

export default App
