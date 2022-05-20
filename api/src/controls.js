const axios = require('axios');
const { Character, Episode } = require('./db');

const getInfo = async () => {
    let getApi = await axios.get('https://rickandmortyapi.com/api/character')

    await getApi.data.map(e => {
        Character.findOrCreate({
            where: {
                name: e.name,
                uid: e.id,
                species: e.species,
                origin: e.origin['name'],
                image: e.image,
                created: e.created,
            }
        })
    })
}; 

const getEpi = async () => {
    return await Episode.findAll({
        include: {
            model: Episode,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    })
};

const getData = async () => {
    await getInfo();
    const Epi = await getEpi();
    return Epi;
};

module.exports = { getData }