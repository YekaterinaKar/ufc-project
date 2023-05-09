import "@component/styles/globals.css";
import { SWRConfig } from "swr";
import Header from "../../Components/Header/Header";


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
                <Header/>
                <Component {...pageProps} />
             
            </SWRConfig>
        </div>
    );
}

