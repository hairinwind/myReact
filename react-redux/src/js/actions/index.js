import { ADD_CHARACTER, REMOVE_CHARACTER } from '../constants/action-types';

export function addCharacter(payload) {
    return { type: ADD_CHARACTER, payload }
};

export function removeCharacter(payload){
    return { type: REMOVE_CHARACTER, payload}
}

export function getData() {
    return function(dispatch) {
      return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
            let data = json.slice(0,3).map(eachData => {
                return {
                    name: eachData.title, 
                    job: eachData.body
                }
            });
            dispatch({ type: "DATA_LOADED", payload: data });
        });
    };
}