import axios from 'axios';

export const bringCharacters = async () => {
    const res = await axios.get("https://rickandmortyapi.com/api/character/?page=1");
    console.log(res.data.results)
    return res.data.results
};