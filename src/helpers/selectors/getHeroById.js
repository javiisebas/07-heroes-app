import {
    heroes
} from "../../data/heroes"

export const getHeroById = (id = '') => {

    return heroes.find(({
        id: heroId
    }) => id === heroId)

}