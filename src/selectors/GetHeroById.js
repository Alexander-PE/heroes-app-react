import { heroes } from "../data/heroes"

export const GetHeroById = (id='') => {
    console.log("GetHeroById called")
    return heroes.find(hero => hero.id === id);
}