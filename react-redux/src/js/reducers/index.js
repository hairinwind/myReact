import { ADD_CHARACTER, REMOVE_CHARACTER } from '../constants/action-types';

const initialState = {
    characters: []
};


function rootReducer(state = initialState, action) {
    console.log("action.type", action.type);
    if (action.type === ADD_CHARACTER) {
        console.log('add_character', action.payload);
        return Object.assign({}, state, {characters: state.characters.concat(action.payload)});
    }
    if (action.type === REMOVE_CHARACTER) {
        let characters = state.characters.filter((character, i) => {
            return i !== action.payload
        })
        return Object.assign({}, state, {characters});
    }
    if (action.type === "DATA_LOADED") {
        return Object.assign({}, state, {characters: state.characters.concat(action.payload)});
    }
    return state;
};

export default rootReducer;