import { Link } from "react-router-dom";

export default function MapPage() {
	return (
		<div>
			<h1 className="text-2xl font-bold text-white md-2 text-center">Map Page</h1>
			<p className="text-zinc-400 text-center">Design and customize your own maps for your campaigns.</p>
			
			<div className="grid grid-cols-2 md:grid-cols-2 gap-6 mt-6">
				<Link className="bg-zinc-800 hover:bg-zinc-700 transition p-16 rounded-xl text-center shadow-lg text-lg font-bold min-h-48 w-full" to="/map-builder-create">Go to Map Builder</Link>
				<Link className="bg-zinc-800 hover:bg-zinc-700 transition p-16 rounded-xl text-center shadow-lg text-lg font-bold min-h-48 w-full" to="/map-lists">Map lists</Link>
			</div>
		</div>
	)
}
