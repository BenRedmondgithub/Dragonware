import { useState } from "react";
import MapBuilder from "./MapBuilder";

export default function MapPage() {
	return (

		<div>
			<h1>Map Page</h1>
			<p>Design and customize your own maps for your campaigns.</p>
			<MapBuilder />
		</div>
	)
}
