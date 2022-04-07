import React, { useMemo } from 'react'
import { getHeroByPublisher } from '../../helpers/selectors/getHeroByPublisher'
import HeroCard from './HeroCard'

export const HeroList = ({ publisher }) => {

    /* MUY IMPORTANTE pensar si las funciones que ejecutamos son procesos pesados o no. Como norma general, siempre
    querremos almacenar nuestro resultado en memoria para no tener que volver a realizar el proceso cada vez que mute
    un state y tengamos, por lo tanto, que volver a renderizar el componente */
    const heroList = useMemo(() => {
        return getHeroByPublisher(publisher)
    }, [publisher])

    return (
        <div className='row row-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn'>
            {heroList.map(hero =>
                <HeroCard key={hero.id} {...hero} />
            )}
        </div>
    )
}
