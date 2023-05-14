import "@component/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { SWRConfig } from "swr";
import Header from "../../Components/Header/Header";


const fetcher = (url) => fetch(url).then((r) => r.json());

export default function App({ Component, pageProps: { session, ...pageProps } }) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <SWRConfig value={{ fetcher }}>
                <Header />
                <SessionProvider session={session}>
                    <Component {...pageProps} />
                </SessionProvider>
            </SWRConfig>
        </div>
    );
}

