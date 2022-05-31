

// const state={
//     name:'Alexander',
//     logged:true
// }

import { Types } from "../types/Types"

// const loginAction = {
//     type: Types.login,
//     payload: {
//         name: 'Alexander',
//         logged: true
//     }
// }

export const AuthReducer = (state={}, action) => {
    switch (action.type) {
        case Types.login:
            return {
                // name: action.payload.name,
                ...action.payload,   // manera resumida
                logged: true,
            }
        case Types.logout:
            return {
                logged: false
            }
        default:
            return state;
    }
}