import { useState } from 'react'
import nalyD from './assets/nalyD.png'
import dinoDylan from './assets/dino-dylan-removebg-preview.png'
import dylanDepressif from './assets/dylan_depressif-removebg-preview.png'
import garconEcureuil from './assets/20250619_0855_Garçon_avec_Écureuil_remix_01jy3fe1h0e9jade1d8gft44yd-removebg-preview.png'
import dylan from './assets/Dylan-removebg-preview.png'
import parrotSound from './assets/parrot.mp3'

function App() {
  const [isAnimating, setIsAnimating] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [slideDirection, setSlideDirection] = useState('')

  // Array de toutes les images
  const images = [
    { src: nalyD, alt: 'NalyD' },
    { src: dinoDylan, alt: 'Dino Dylan' },
    { src: dylanDepressif, alt: 'Dylan Dépressif' },
    { src: garconEcureuil, alt: 'Garçon avec Écureuil' },
    { src: dylan, alt: 'Dylan' }
  ]

  const handleClick = () => {
    // Animation de rebond
    setIsAnimating(true)
    
    // Son de perroquet
    const audio = new Audio(parrotSound)
    audio.play().catch(e => console.log('Audio play failed:', e))
    
    // Réinitialiser l'animation après 300ms
    setTimeout(() => setIsAnimating(false), 300)
  }

  const nextImage = () => {
    setSlideDirection('slide-left')
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
      setSlideDirection('')
    }, 150)
  }

  const prevImage = () => {
    setSlideDirection('slide-right')
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
      setSlideDirection('')
    }, 150)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animations rigolotes en arrière-plan */}
      <div className="absolute inset-0">
        {/* Étoiles qui tournent */}
        <div className="absolute top-10 left-10 w-4 h-4 text-yellow-300 animate-spin text-2xl">⭐</div>
        <div className="absolute top-20 right-20 w-4 h-4 text-pink-400 animate-spin text-2xl" style={{animationDuration: '3s'}}>🌟</div>
        <div className="absolute bottom-20 left-1/4 w-4 h-4 text-green-300 animate-spin text-2xl" style={{animationDuration: '4s'}}>✨</div>
        
        {/* Emojis qui rebondissent */}
        <div className="absolute top-1/3 right-1/3 w-6 h-6 text-4xl animate-bounce">🦜</div>
        <div className="absolute bottom-1/3 left-1/3 w-6 h-6 text-4xl animate-bounce" style={{animationDelay: '0.5s'}}>🎮</div>
        <div className="absolute top-2/3 left-1/2 w-6 h-6 text-4xl animate-bounce" style={{animationDelay: '1s'}}>🎯</div>
        
        {/* Cœurs qui pulsent */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 text-red-400 animate-pulse text-2xl">💖</div>
        <div className="absolute bottom-1/4 right-1/4 w-4 h-4 text-pink-300 animate-pulse text-2xl">💕</div>
        
        {/* Particules colorées qui flottent */}
        <div className="absolute top-10 left-1/2 w-2 h-2 bg-cyan-300 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-1/2 right-10 w-3 h-3 bg-yellow-200 rounded-full animate-ping opacity-80" style={{animationDelay: '0.3s'}}></div>
        <div className="absolute bottom-10 left-1/3 w-2 h-2 bg-purple-300 rounded-full animate-ping opacity-70" style={{animationDelay: '0.6s'}}></div>
        
        {/* Formes géométriques qui tournent */}
        <div className="absolute top-1/3 left-1/6 w-8 h-8 border-2 border-blue-300 rounded-full animate-spin opacity-50"></div>
        <div className="absolute bottom-1/3 right-1/6 w-6 h-6 border-2 border-green-300 transform rotate-45 animate-spin opacity-60" style={{animationDuration: '5s'}}></div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        {/* Titre */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 sm:mb-12 text-center drop-shadow-2xl animate-pulse">
          Dylan Clicker
        </h1>

        {/* Conteneur du carrousel */}
        <div className="relative w-3/4 sm:w-1/2 h-auto max-w-md mb-8 sm:mb-12">
          {/* Flèche gauche */}
          <button 
            onClick={prevImage}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 sm:-translate-x-16 z-20 bg-white/20 hover:bg-white/30 rounded-full p-2 sm:p-3 transition-all duration-300 backdrop-blur-sm"
          >
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image cliquable */}
          <div 
            className={`cursor-pointer transition-all duration-300 ${
              isAnimating ? 'scale-110 animate-bounce' : 'hover:scale-105'
            } ${slideDirection === 'slide-left' ? 'transform -translate-x-full opacity-0' : ''} ${
              slideDirection === 'slide-right' ? 'transform translate-x-full opacity-0' : ''
            }`}
            onClick={handleClick}
          >
            <img 
              src={images[currentImageIndex].src} 
              alt={images[currentImageIndex].alt} 
              className="w-full h-[40vh] sm:h-[50vh] object-contain rounded-full shadow-2xl"
            />
          </div>

          {/* Flèche droite */}
          <button 
            onClick={nextImage}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 sm:translate-x-16 z-20 bg-white/20 hover:bg-white/30 rounded-full p-2 sm:p-3 transition-all duration-300 backdrop-blur-sm"
          >
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicateurs de position */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Instructions */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white text-center opacity-90 font-mono tracking-wide drop-shadow-lg px-4">
          Jouez avec Dylan pour vous amuser ! 🎮
        </p>
      </div>

      {/* Styles CSS pour les animations de slide */}
      <style jsx>{`
        @keyframes slideLeft {
          from { transform: translateX(0); opacity: 1; }
          to { transform: translateX(-100%); opacity: 0; }
        }
        @keyframes slideRight {
          from { transform: translateX(0); opacity: 1; }
          to { transform: translateX(100%); opacity: 0; }
        }
        .slide-left {
          animation: slideLeft 0.15s ease-in-out;
        }
        .slide-right {
          animation: slideRight 0.15s ease-in-out;
        }
      `}</style>
    </div>
  )
}

export default App
