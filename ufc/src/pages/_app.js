import "@component/styles/globals.css";
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
             
            </SWRConfig>
        </div>
    );
}

