export interface PokemonList {
    count: number;
    next?: string;
    previous?: string;
    results: PokemonSmall[];
}

export default interface PokemonSmall {
    index: number;
    name: string;
    image: string;
}