function Card({ title }) {
  return (
    <div className="
      w-64 h-96
      rounded-xl
      border border-zinc-600
      bg-zinc-900
      shadow-lg
      flex items-center justify-center
      hover:bg-zinc-800
      hover:scale-105
      transition-all
    ">
      <span className="text-zinc-200 text-xl font-semibold">
        {title}
      </span>
    </div>
  )
}

export default Card
