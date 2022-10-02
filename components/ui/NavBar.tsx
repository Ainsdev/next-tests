import { Button, Navbar, Text } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";

const NavBar = () => {
    const [menu, setMenu] = useState<number>(0);
    return (
        <Navbar isBordered disableShadow  variant="floating" style={
            {
                marginTop: '3vh',
                marginBottom: '3vh',
            }
        }>
            <Navbar.Brand>
                <Navbar.Toggle aria-label="toggle navigation" showIn="sm" />
                <Text b color="inherit" style={{ paddingLeft: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {menu == 0 && <Image width={70} height={70} alt="pokemon" src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'></Image>}
                    <h3>Next Mini-Projects</h3>
                </Text>
            </Navbar.Brand>
            <Navbar.Content
                activeColor="primary"
                hideIn="sm"
                variant="underline-rounded">
                <Navbar.Link onPress={() => setMenu(0)} isActive={menu == 0 ? true : false} href="#">
                    Pokemon</Navbar.Link>
                <Navbar.Link onPress={() => setMenu(1)} isActive={menu == 1 ? true : false} href="#">
                    Customers</Navbar.Link>
                <Navbar.Link onPress={() => setMenu(2)} isActive={menu == 2 ? true : false} href="#">
                    Pricing</Navbar.Link>
                <Navbar.Link onPress={() => setMenu(3)} isActive={menu == 3 ? true : false} href="#">
                    Company</Navbar.Link>
            </Navbar.Content>
            <Navbar.Content>
                <Navbar.Item>
                    <Button  auto shadow color='primary' href="#">
                        My portafolio
                    </Button>
                </Navbar.Item>
            </Navbar.Content>
            <Navbar.Collapse >
                <Navbar.CollapseItem>
                    Pokemon
                </Navbar.CollapseItem>
                <Navbar.CollapseItem>
                    B
                </Navbar.CollapseItem>
                <Navbar.CollapseItem>
                    C
                </Navbar.CollapseItem>
                <Navbar.CollapseItem>
                    D
                </Navbar.CollapseItem>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
