import Head from "next/head";
import { useEffect } from "react";
import Script from "next/script";
import mapboxgl from "mapbox-gl";


const Map = () => {
    useEffect(() => {
        mapboxgl.accessToken =
            "pk.eyJ1IjoieWVrYXRlcmluYWthciIsImEiOiJjbGdtOGN4ajYwM2JkM2ZvZXVmNDhuY3Q2In0.ll321VCFIp0yuT7np-GEnA";
        const map = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/mapbox/satellite-streets-v11",
            zoom: 1.5,
            center: [63.4, 48.0],
            projection: "globe",
        });

        map.on("load", () => {
            // Disable the label layer
            map.setLayoutProperty("country-label", "visibility", "none");

            // Set the default atmosphere style
            map.setFog({});
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
            <div style={{ position: "relative" }}>
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
                   
                </div>
                <div
                    id="map"
                    style={{
                        position: "relative",
                        top: 0,
                        bottom: 0,
                        width: "700px",
                        height: "700px",
                        zIndex: 0,
                    }}
                ></div>
            </div>
        </>
    );
};

export default Map;
