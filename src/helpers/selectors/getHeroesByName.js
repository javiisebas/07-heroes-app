import {
    heroes
} from "../../data/heroes"

export const getHeroesByName = (name = '') => {

    name = name.toLowerCase()
    const heroesList = name.length === 0 ? [] :
        heroes.filter(({
            superhero: nameHero
        }) => nameHero.toLowerCase().includes((name === 'all' ? '' : name)))

    return [heroesList, heroesList.length]

}