import type {AppProps} from 'next/app'
import {AppShell, MantineProvider} from '@mantine/core'
import Head from "next/head";
import '../styles.css'

export default function App({Component, pageProps}: AppProps) {
    const AnyComponent = Component as any;
    return <>
        <Head>
            <title>Julius Henke</title>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
        </Head>
        <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
                colorScheme: 'dark',
                colors: {
                    dark: [
                        '#d5d7e0',
                        '#acaebf',
                        '#8c8fa3',
                        '#666980',
                        '#4d4f66',
                        '#3c126a',
                        '#381362',
                        '#1d0e35',
                        '#180d2b',
                        '#01010a',
                    ],
                }
            }}>
            <AppShell sx={{
                textAlign: "center",
                color: "#fff",
                fontSize: "1.5em",
                paddingBottom: "16px",
                backgroundColor: "#673ab8",
            }}>
                <AnyComponent {...pageProps} />
            </AppShell>
        </MantineProvider>
    </>
}
