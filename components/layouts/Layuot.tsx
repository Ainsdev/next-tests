import Head from "next/head"
import NavBar from "../ui/NavBar"
type props = {
    children: React.ReactNode
    title: string
}

export const Layout: React.FC<props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title || 'Next Testing'}</title>
                <meta name="description" content="Project to test the potential of next js" />
                <meta name="author" content="AinsDev" />
            </Head>
            <NavBar></NavBar>
            <main style={{padding:'100px 30px 30px 30px'}}>
                {children}
            </main>
        </>)
}
