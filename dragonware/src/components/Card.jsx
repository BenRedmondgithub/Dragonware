function Card({ title, description }) {
  return (
    <div
      className="
        w-64 h-96
        rounded-xl
        border border-zinc-600
        bg-zinc-900
        shadow-lg
        flex flex-col items-center justify-center
        gap-3
        px-6
        text-center
        hover:bg-zinc-800
        hover:scale-105
        transition-all
      "
      style={{ backgroundImage: "url('./img/7ffc4457bc5e12ec531d832606d67565.png')" }}
    >
      <span className="text-zinc-200 text-xl font-semibold">
        {title}
      </span>
      <p className="text-zinc-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  )
}

export default Card