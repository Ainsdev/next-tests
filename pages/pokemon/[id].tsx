import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { pokemonApi } from "../../apis";
import { PokemonList } from '../../interfaces/pokemon-interfaces';
import { PokemonLayout } from '../../components/layouts/PokemonLayout';
import { Button, Card, Image, Text } from "@nextui-org/react";

interface Props {
    pokemon: any
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
    return (
        <PokemonLayout title={pokemon.name}>
            <Card isHoverable >
                <Card.Header css={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '20px'}}>
                    <Text h3>{pokemon.name.toUpperCase()}</Text>
                </Card.Header>
                <Card.Image css={{paddingBottom:'20px' }} src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
                <Card.Divider ></Card.Divider>
                <Card.Body css={{textAlign:'center'}}>
                    <h3>Sprites:</h3>
                    <div style={{display:'flex'}}>
                        <Image
                            src={pokemon.sprites.front_default}
                            alt={pokemon.name}
                           
                            />
                        <Image
                            src={pokemon.sprites.back_default}
                            alt={pokemon.name}
                            
                            />
                        <Image
                            src={pokemon.sprites.front_shiny}
                            alt={pokemon.name}
                            
                            />
                        <Image
                            src={pokemon.sprites.back_shiny}
                            alt={pokemon.name}
                           
                            />
                    </div>
                </Card.Body>
            </Card>
        </PokemonLayout>
    );
};

export default PokemonPage;

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const { data } = await pokemonApi.get<PokemonList>('pokemon?limit=151');

    return {
        paths: data.results.map((item, id) => {
            return {
                params: {
                    id: id.toString(),
                    name: item.name
                }
            }
        }),
        fallback: "blocking"
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { id} = params as { id: string };
    const { data } = await pokemonApi.get(`pokemon/${id}`);
    return {
        props: {
            pokemon: data
        }
    }
}