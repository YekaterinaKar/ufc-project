import "@component/styles/globals.css";
import Header from "../../Components/Header/Header";
import Map from "../../Components/Map/Map";
import { SWRConfig } from "swr";


const fetcher = (url) => fetch(url).then((r) => r.json());

export default function App({ Component, pageProps }) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <SWRConfig value={{ fetcher }}>
                <Component {...pageProps} />
                <Header />
                <Map />
            </SWRConfig>
        </div>
    );
}

/*<Header />
                <Map />*/