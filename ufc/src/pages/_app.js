import "@component/styles/globals.css";
import SearchBar  from "../../Components/SearchBar/SearchBar";
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
           <SearchBar/> 
                <Map />
            </SWRConfig>
        </div>
    );
}

