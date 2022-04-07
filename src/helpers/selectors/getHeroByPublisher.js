import {
    heroes
} from "../../data/heroes"

export const getHeroByPublisher = (publisher = '') => {

    const validPublishers = ['Marvel Comics', 'DC Comics']
    if (!validPublishers.includes(publisher)) {
        throw new Error(`${publisher} no es válido`)
    }

    return heroes.filter(({
        publisher: heroPublisher
    }) => publisher === heroPublisher)

}