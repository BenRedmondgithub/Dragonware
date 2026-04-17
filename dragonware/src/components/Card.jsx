import { Link } from "react-router-dom"
import tarotCardImage from "../img/tarot-card.jpg"

function Card({ title, description, to }) {
  return (
    <Link
      to={to}
      className="
        relative overflow-hidden
        w-64 h-96
        rounded-xl
        border border-zinc-600
        bg-cover bg-center
        shadow-lg
        flex flex-col items-center justify-center
        gap-3
        px-6
        text-center
        cursor-pointer
        hover:scale-105
        transition-all
        hover:shadow-2xl
      "
      style={{ backgroundImage: `url(${tarotCardImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 hover:bg-black/40 transition-all" />

      {/* Content */}
      <span className="relative z-10 text-zinc-200 text-xl font-semibold">
        {title}
      </span>
      <p className="relative z-10 text-zinc-300 drop-shadow-2xl text-sm leading-relaxed">
        {description}
        
      </p>
    </Link>
  )
}

export default Card
