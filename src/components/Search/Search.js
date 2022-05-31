import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../Hero/HeroCard';
import { GetHeroByName } from '../../selectors/GetHeroByName';

export const Search = () => {

  const navigate = useNavigate();

  const loc = useLocation();

  const {q=''} = queryString.parse(loc.search);

  const [values, handleInputChange] = useForm({ searchText: q });

  const {searchText} = values;

  const hero = React.useMemo(() => GetHeroByName(q), [q]); // para que no se ejecute cada vez que se cambia el valor de q

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=` + searchText);   // asigna el valor del form al url
  }

  return (
    <div>
        <h1>Search Screen</h1>
        <div className="row">

            <div className="col-5">
              <h4>Search</h4>
              <hr/>
              <form onSubmit={handleSearch}>
                <input type="text" value={searchText} className="form-control" onChange={handleInputChange} name='searchText' placeholder="Buscar un heroe" autoComplete='off'/>
                <button type='submit' className="btn btn-outline-primary mt-1">Buscar</button>
              </form>
            </div>

            <div className="col-7">
              <h4>Resultado</h4>
              <hr/>

              {
                q==='' ? <div className="alert alert-info">Buscar un heroe</div> : hero.length === 0 && <div className="alert alert-danger">No hay resultados</div>
              }

              { 
                hero.map( hero => (
                  <HeroCard key={hero.id} {...hero}/>
                ))
                
              }
            </div>
        </div>
    </div>
  )
}
