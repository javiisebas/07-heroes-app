import React from 'react'
import { Link } from 'react-router-dom'
import { getHeroImgById } from '../../helpers/selectors/getHeroImgbyId'


const HeroCard = ({ id, superhero, alter_ego, first_appearance, characters }) => {

    const imagePath = getHeroImgById(id)

    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card bg-light shadow-sm">
                <div className="row no-glutters">
                    <div className="col-5">
                        <img src={imagePath}
                            className='card-img-top'
                            alt={superhero} />
                    </div>
                    <div className="col-7">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>
                            {
                                (alter_ego !== characters) &&
                                <p className="text-muted">{characters}</p>
                            }
                            <p className="card-text">
                                <small className="text-muted">{first_appearance}</small>
                            </p>

                            <Link className='btn btn-outline-info' to={`/hero/${id}`}>
                                + Información
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroCard
