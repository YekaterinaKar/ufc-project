import Head from "next/head";
import { useState, useEffect } from "react";
import Script from "next/script";
import mapboxgl from "mapbox-gl";


const Map = () => {
    const [fighterLocations, setFighterLocations] = useState([]); // state updating coordinates

    // useEffect fetching marker`s coordinates from DB
    useEffect(() => {
        const fetchFighterLocations = async () => {
            try {
                const response = await fetch("api/fighters");
                const data = await response.json();
                setFighterLocations(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchFighterLocations();
    }, []);

    //useEffect fetching the map 
    useEffect(() => {
        mapboxgl.accessToken =
            "pk.eyJ1IjoieWVrYXRlcmluYWthciIsImEiOiJjbGdtOGN4ajYwM2JkM2ZvZXVmNDhuY3Q2In0.ll321VCFIp0yuT7np-GEnA";
        const map = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/mapbox/satellite-streets-v11",
            zoom: 1.5,
            minZoom: 1.5,
            center: [63.4, 48.0],
            projection: "globe",
        });

        map.on("load", () => {
            map.setLayoutProperty("country-label", "visibility");
        });


        console.log(fighterLocations) // the whole array of objects with all keys

        fighterLocations.forEach((fighter) => {
            const marker = new mapboxgl.Marker({ color: "yellow" }) 
                .setLngLat(fighter.coordinates)
                .addTo(map);

            const popup = new mapboxgl.Popup({ offset: 25 })  // sets pop ups
                .setHTML(`<h3>${fighter.name}</h3>`)
                .setMaxWidth("300px");

            marker.setPopup(popup);
        });
    }, [fighterLocations]);

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
