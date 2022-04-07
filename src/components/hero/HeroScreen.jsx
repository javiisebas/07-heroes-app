import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../../helpers/selectors/getHeroById'
import { getHeroImgById } from '../../helpers/selectors/getHeroImgbyId'


const HeroScreen = () => {

    const { heroId } = useParams() // Obtenemos el parámetro de la url
    const navigate = useNavigate()

    /* Queremos guardas la función en memoria para no volver a ejecutarla cada vez que cambie un estado de mi componente.
    Recordemos que cada vez que muta un state, el componente se vuelve a renderizar, si no guardamos la función en memoria
    esta se volvería a ejecutar. A diferencia de useEffect, useMemo devuelver el output de la función, y no dependerá de 
    si nuestra dependencia esta montada o no  */
    const hero = useMemo(() => getHeroById(heroId), [heroId])

    if (!hero) {
        /* Estemos obligados a que el componente devuelva html. Es por eso que si el usuario introduce un heroId, entonces
        getHeroById no encontrará ningún hero y por lo tanto al cargar la vista dará fallo, es por eso que Navigate nos 
        da la posibilidad de devolver un componente <Navigate /> con un 'to' para saber a donde redirigirnos. */
        return <Navigate to='/' />
    }

    const { id, superhero, publisher, alter_ego, first_appearance, characters } = hero

    const imagePath = getHeroImgById(id)

    const handleReturn = () => {
        // También podría usar navigate(-1)
        return (publisher === 'Marvel Comics')
            ? (navigate('/marvel'))
            : (navigate('/dc'))
    }

    return (
        <div className='row'>
            <div className="col-4">
                <img src={imagePath} alt={superhero}
                    className='img-thumbnail animate__animated animate__zoomIn' />
            </div>
            <div className="col-8 animate__animated animate__zoomInRight">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="lit-group-item"><b>Alter Ego: </b>{alter_ego}</li>
                    <li className="lit-group-item"><b>Publisher: </b>{publisher}</li>
                    <li className="lit-group-item"><b>First Appearance: </b>{first_appearance}</li>
                </ul>

                <h5 className='mt-3'>Characters</h5>
                <p>{characters}</p>

                <button className='btn btn-outline-info'
                    onClick={handleReturn}>
                    Regresar
                </button>

            </div>
        </div>
    )
}

export default HeroScreen
