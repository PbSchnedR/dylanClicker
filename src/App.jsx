import { useState } from 'react'
import nalyD from './assets/nalyD.png'
import parrotSound from './assets/parrot.mp3'

function App() {
  const [isAnimating, setIsAnimating] = useState(false)

  const handleClick = () => {
    // Animation de rebond
    setIsAnimating(true)
    
    // Son de perroquet
    const audio = new Audio(parrotSound)
    audio.play().catch(e => console.log('Audio play failed:', e))
    
    // Réinitialiser l'animation après 300ms
    setTimeout(() => setIsAnimating(false), 300)
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

        {/* Image cliquable */}
        <div 
          className={`w-3/4 sm:w-1/2 h-auto max-w-md cursor-pointer transition-transform duration-300 mb-8 sm:mb-12 ${
            isAnimating ? 'scale-110 animate-bounce' : 'hover:scale-105'
          }`}
          onClick={handleClick}
        >
          <img 
            src={nalyD} 
            alt="NalyD" 
            className="w-full h-[40vh] sm:h-[50vh] object-contain rounded-full shadow-2xl"
          />
        </div>

        {/* Instructions */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white text-center opacity-90 font-mono tracking-wide drop-shadow-lg px-4">
          Jouez avec Dylan pour vous amuser ! 🎮
        </p>
      </div>
    </div>
  )
}

export default App
