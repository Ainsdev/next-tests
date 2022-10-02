import { Button } from "@nextui-org/react"
import Head from "next/head"
import NavBar from "../ui/NavBar"
type props = {
    children: React.ReactNode
    title: string
}

export const PokemonLayout: React.FC<props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title || 'Next Testing'}</title>
                <meta name="description" content="Project to test the potential of next js" />
                <meta name="author" content="AinsDev" />
            </Head>
            <nav style={{ width: '100%', height: '10vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button size='xl' shadow color='primary'>Go Back</Button>
            </nav>
            <main style={{ padding: '50px 30px 30px 30px', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', width: '100%', height: '100vh' }}>
                {children}
            </main>
        </>)
}
