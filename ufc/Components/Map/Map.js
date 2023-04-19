import Head from "next/head";
import { useEffect } from "react";
import Script from "next/script";
import mapboxgl from "mapbox-gl";
//import Fighter from "@component/db/models/Fighter";

const Map = () => {
    useEffect(() => {
        mapboxgl.accessToken =
            "pk.eyJ1IjoieWVrYXRlcmluYWthciIsImEiOiJjbGdtOGN4ajYwM2JkM2ZvZXVmNDhuY3Q2In0.ll321VCFIp0yuT7np-GEnA";
        const map = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/mapbox/satellite-streets-v11",
            zoom: 1.5,
            minZoom: 1.5, // limit the maximum zoom level
            center: [63.4, 48.0],
            projection: "globe",
        });

        map.on("load", () => {
            // Disable the label layer
            map.setLayoutProperty("country-label", "visibility", "none");

            // Set the default atmosphere style
            // map.setFog({});

            // Add a marker for Brazil
        });

        const markerLocations = [
            [-46.6333, -23.5505], // São Paulo / Amanda Nunes
            [-38.5023, -3.7319], // Fortaleza /Taila Santos
            [-49.2768, -25.4284], // Curitiba/ Marina Rodriguez
            [-34.8811, -8.0539], // Recife/ Amanda Lemos
            [-60.6731, -3.119], // Manaus / Jessica Andrade
            [-122.4194, 37.7749], // San Francisco, CA / Raquel Pennington
            [-118.2437, 34.0522], // Los Angeles, CA/ Juliana Pena
            [-77.0369, 38.9072], // Washington D.C./ Erin Blanchfield
            [-87.6298, 41.8781], // Chicago, IL / Carla Esparza
            [-95.3698, 29.7604], // Houston, TX / Holly Holm
            [-71.0589, 42.3601], // Boston, MA / Rose Namajunas
            [116.4074, 39.9042], // Beijing, China / Zhang Weili
            [74.7661, 41.2044], // Bishkek, Kyrgyzstan / Valentina Shevchenko
            [2.3522, 48.8566], // Paris, France / Manon Fiorot
            [-99.1332, 19.4326], // Mexico City, Mexico / Alexa Grasso
        ];

        markerLocations.forEach((location) => {
            new mapboxgl.Marker().setLngLat(location).addTo(map);
        });
    }, []);


    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="initial-scale=1,maximum-scale=1,user-scalable=no"
                />
                <link
                    href="https://api.mapbox.com/mapbox-gl-js/v2.11.0/mapbox-gl.css"
                    rel="stylesheet"
                />
            </Head>
            <Script
                src="https://api.mapbox.com/mapbox-gl-js/v2.11.0/mapbox-gl.js"
                strategy="beforeInteractive"
            />
            <div
                style={{
                    position: "relative",
                    width: "700px",
                    height: "700px",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        zIndex: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        backgroundColor: "white",
                        padding: "10px",
                    }}
                >
                    <h3>Fighter Card</h3>
                    <p>Fight</p>
                </div>
                <div
                    id="map"
                    style={{
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                    }}
                ></div>
            </div>
        </>
    );
};

export default Map;
