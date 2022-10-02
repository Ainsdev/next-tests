import { Card, Row, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';
import React from 'react';
import PokemonSmall from '../../interfaces/pokemon-interfaces';


const PokemonCard: React.FC<PokemonSmall> = ({ index, name, image }) => {
    const router = useRouter();
    const handleClick = () => {
        router.push(`/pokemon/${index}`);
    }
    return (
        <>
            <Card onPress={handleClick} isPressable isHoverable>
                <Card.Body css={{ p: 0 }}>
                    <Card.Image
                        src={image}
                        objectFit="contain"
                        width={100}
                        height={100}
                        alt="Pokemon"
                    />
                </Card.Body>
                <Card.Footer css={{ justifyItems: "flex-start" }}>
                    <Row wrap="wrap" justify="space-between" align="center">
                        <Text b>{name}</Text>
                        <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                            # {index}
                        </Text>
                    </Row>
                </Card.Footer>
            </Card>
        </>
    );
};

export default PokemonCard;

