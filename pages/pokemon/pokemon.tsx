import { Grid } from '@nextui-org/react';
import React, { FC } from 'react';
import PokemonCard from '../../components/pokemonUI/PokemonCard';
import PokemonSmall from '../../interfaces/pokemon-interfaces';
interface Props {
    pokemons: Array<PokemonSmall>
}
const Pokemon: FC<Props> = (props) => {
    return (
        <Grid.Container gap={2} justify="flex-start">
            {props.pokemons.map((pokemon: PokemonSmall) => {
                return (
                    <Grid xs={6} sm={4} md={3} key={pokemon.index}>
                        <PokemonCard
                            index={pokemon.index}
                            name={pokemon.name}
                            image={pokemon.image} />
                    </Grid>
                )
            })}
        </Grid.Container>
    );
};

export default Pokemon;
