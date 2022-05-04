import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { GetHeroById } from '../../selectors/GetHeroById';


export const Hero = () => {

  const navigate = useNavigate();

  const {heroeId} = useParams(); // para tomar los parametros de la url

  const hero = useMemo(() => GetHeroById(heroeId), [heroeId]);

  if (!hero) {  // si no existe el heroe
      return <Navigate to='/' />  // me va a enviar a este path
  }

  const imgPath = `/assets/${heroeId}.jpg`;

  const handleReturn = () => {
    navigate(-1); // el -1 es para que vuelva a la pagina que estaba antes
  }

  return (
    <div className="row mt-5">

        <div className="col-4">
            <img src={imgPath} className="img-thumbnail animate__animated animate__fadeInLeft" alt={hero.superhero} />
        </div>

        <div className="col-8 animate__animated animate__fadeIn">
            <h3>{hero.superhero}</h3>
            <ul className='list-group'>
                <li className='list-group-item'><b>Alter Ego:</b> {hero.alter_ego}</li>
                <li className='list-group-item'><b>Publisher:</b> {hero.publisher}</li>
                <li className='list-group-item'><b>First Appearance:</b> {hero.first_appearance}</li>
            </ul>
            
            <h5>Characters</h5>
            <p>{hero.characters}</p>

            <button className="btn btn-outline-info" onClick={handleReturn}>
              Regresar
            </button>
        </div>

    </div>
  )
}
