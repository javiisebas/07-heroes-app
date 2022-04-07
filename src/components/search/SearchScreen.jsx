import React, { useMemo } from 'react'
import queryString from 'query-string'
import { useLocation, useNavigate } from 'react-router-dom'
import { getHeroesByName } from '../../helpers/selectors/getHeroesByName'
import { useForm } from '../../hooks/useForm'
import HeroCard from '../hero/HeroCard'
import { useCounter } from '../../hooks/useCounter'

export const SearchScreen = () => {

    // Usamos useNavigate para movernos entre rutas, para eso tenemo que haberlas definido antes en nuestro ROUTER.
    const navigate = useNavigate()
    const location = useLocation()

    /* Queremos obtener la url, especificamente las queries, para eso usamos query-string <- MUY ÚTIL
    Por otro lado, desestructuramos con 'q' porque en nuestro navigate es el nombre del parámetro que hemos introducido */
    const { q = '' } = queryString.parse(location.search)

    const [{ searchText }, handleInputChange, handleResetForm] = useForm({ searchText: '' })
    const [heroesFiltered, totalResults] = useMemo(() => getHeroesByName(q), [q])

    const { counter, increment, decrement, reset } = useCounter()


    const handleSubmit = (e) => {
        e.preventDefault()

        navigate(`?q=${searchText}`)

        // const heroesByName = getHeroesByName(searchText)
        // setHeroesFiltered(heroesByName);
        handleResetForm()
        reset()

    }

    return (
        <>
            <h1>Búsquedas</h1>
            <hr />

            <div className="row">

                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />

                    <form onSubmit={handleSubmit}>

                        <input type="text"
                            placeholder='Buscar un heroe'
                            className='form-control'
                            name='searchText'
                            value={searchText}
                            onChange={handleInputChange}
                            autoComplete='off' />

                        <button type='submit'
                            className='btn btn-outline-primary w-100 mt-2'>
                            Buscar
                        </button>

                    </form>

                    <div className="alert alert-info text-center mt-4 alert-dismissible fade show" role="alert">
                        Para ver todos los personajes escriba &#8594; <b>all</b>
                    </div>

                </div>

                <div className="col-7">
                    <h4>
                        Resultados &nbsp;
                        {(q !== '') &&
                            <span className="badge rounded-pill bg-primary animate__animated animate__fadeIn">
                                {totalResults}</span>}
                    </h4>
                    <hr />

                    {
                        (q === '')
                            ? <div className="alert alert-info animate__animated animate__zoomIn" role="alert">
                                Busca un heroe
                            </div>
                            : (heroesFiltered.length === 0
                                ? <div className="alert alert-warning animate__animated animate__zoomIn" role="alert">
                                    No se encontró ningún resultado
                                </div>
                                : <HeroCard {...heroesFiltered[counter]} />)
                    }

                    {totalResults > 1 &&
                        <div className="d-flex justify-content-between mt-2 animate__animated animate__fadeIn">
                            <button className='btn btn-outline-primary'
                                disabled={counter + 1 === 1 ? true : false}
                                onClick={decrement}>Anterior</button>
                            <p>{counter + 1} / {totalResults}</p>
                            <button className='btn btn-outline-primary'
                                disabled={counter + 1 === totalResults ? true : false}
                                onClick={increment}>Siguiente</button>
                        </div>
                    }

                </div>

            </div>
        </>
    )
}
