import { Link } from "react-router-dom";

export default function MapPage() {
	return (
		<div>
			<h1>Map Page</h1>
			<p>Design and customize your own maps for your campaigns.</p>
			<Link className="bg-blue-500 text-white px-4 py-2 rounded mt-4 inline-block" to="/map-builder-create">Go to Map Builder</Link>
			<Link className="bg-green-500 text-white px-4 py-2 rounded mt-4 inline-block" to="/map-lists">Map lists</Link>
		</div>
	)
}
