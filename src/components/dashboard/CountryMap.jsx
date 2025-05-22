import React from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
} from "react-simple-maps";

// ТопоJSON карта мира
const geoUrl =
    "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const markers = [
    { name: "USA", coordinates: [-104.657039, 37.2580397] },
    { name: "India", coordinates: [73.7276105, 20.7504374] },
    { name: "UK", coordinates: [-11.6368, 53.613] },
    { name: "Sweden", coordinates: [115.2092761, -25.0304388] },
];

const CountryMap = ({ mapColor }) => {
    return (
        <div className="w-full h-[400px]">
            <ComposableMap projectionConfig={{ scale: 250 }}>
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map((geo) => (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                style={{
                                    default: {
                                        fill: mapColor,
                                        stroke: "#FFF",
                                        strokeWidth: 0.5,
                                    },
                                    hover: {
                                        fill: "#465FFF",
                                        cursor: "pointer",
                                    },
                                    pressed: {
                                        fill: "#465FFF",
                                    },
                                }}
                            />
                        ))
                    }
                </Geographies>
                {markers.map(({ name, coordinates }) => (
                    <Marker key={name} coordinates={coordinates}>
                        <circle r={4} fill="#465FFF" stroke="#fff" strokeWidth={1} />
                        {/* <text textAnchor="middle" y={-10} fontSize={10}>{name}</text> */}
                    </Marker>
                ))}
            </ComposableMap>
        </div>
    );
};

export default CountryMap;
