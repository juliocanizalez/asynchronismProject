const fetchData = require('../utils/fetchData')
const API_URL = 'https://rickandmortyapi.com/api/character/'

const anotherFunction = async (url_api) => {
    try {
        const data = await fetchData(url_api)
        const character = await fetchData(`${API_URL}${data.results[0].id}`)
        const origin = await fetchData(character.origin.url)

        console.log(data.info.count)
        console.log(character.name)
        console.log(origin.dimension)
    } catch (error) {
        console.error(error)
    }
}

console.log('before')
anotherFunction(API_URL)
console.log('after')