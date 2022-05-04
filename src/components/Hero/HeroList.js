import React, { useMemo } from 'react'

import {GetHeroByPublisher} from '../../selectors/GetHeroByPublisher';
import { HeroCard } from './HeroCard';



export const HeroList = ({ publisher }) => {
    
    const heroes = useMemo(() => GetHeroByPublisher(publisher), [publisher]);

    return (
        <div className='row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn'>
                {
                    heroes.map(hero => (
                        <HeroCard key={hero.id} {...hero}/> // donde esta el spread sirve para desestructurar todos los elementos que componen a hero
                    ))
                }
        </div>
    )
}
