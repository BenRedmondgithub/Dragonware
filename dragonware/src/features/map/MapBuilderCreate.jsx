import { useState } from "react";
import MapBuilder from "./MapBuilder";
import { Link } from "react-router-dom";

export default function MapBuilderCreate() {
    return (
        <div>
            <h1>Create New Map</h1>
            <MapBuilder />
        </div>
    )
} 