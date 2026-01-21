function Card({ title }) {
  return (
    <div className="
      w-64 h-96
      rounded-xl
      border border-zinc-700
      bg-zinc-900
      shadow-lg
      flex items-center justify-center
    ">
      <span className="text-zinc-200 text-xl font-semibold">
        {title}
      </span>
    </div>
  )
}

export default Card
