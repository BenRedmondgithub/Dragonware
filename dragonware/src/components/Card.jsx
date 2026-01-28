function Card({ title, description }) {
  return (
    <div
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
      "
      style={{ backgroundImage: "url('/img/tarot-card.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <span className="relative z-10 text-zinc-200 text-xl font-semibold">
        {title}
      </span>
      <p className="relative z-10 text-zinc-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  )
}

export default Card
