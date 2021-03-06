
const fetchPokemon = async () => {
    try {
        const res = await fetch(
            'https://pokeapi.co/api/v2/pokemon?offset=0&limit=807',
        );
        const data = await res.json();
        return data.results.map(({ name }) => name);
    } catch (err) {
        throw err;
    }
};


export default fetchPokemon;