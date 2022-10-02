import type { NextPage } from 'next'
import { Layout } from '../components/layouts/Layuot';
import { pokemonApi } from '../apis';
import { GetStaticProps } from 'next'
import PokemonSmall, { PokemonList } from '../interfaces/pokemon-interfaces';
import Pokemon from './pokemon/pokemon';

interface Props {
  pokemons: Array<PokemonSmall>
}

const Home: NextPage<Props> = (props) => {
  return (
    <Layout title='Pokemon'>
      <Pokemon pokemons={props.pokemons}></Pokemon>
    </Layout >
  )
}
//we pass the data in build time
const getStaticProps: GetStaticProps = async (ctx) => {
  const res = await pokemonApi.get<PokemonList>('pokemon?limit=151');
  const pokemons = res.data.results;
  const listPokemons = pokemons.map((pokemon: PokemonSmall, index) => {
    return {
      index: index + 1,
      name: pokemon.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`
    }
  });


  return {
    props: {
      pokemons: listPokemons
    }
  }
}