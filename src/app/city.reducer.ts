import { Action } from '@ngrx/store';
import { City, initialCity } from './models/city';
import { ADD_CITY_NAME } from './city.actions';

export function cityReducer(state: City = initialCity, action: Action) {
    switch (action.type) {
        case ADD_CITY_NAME:
            return Object.assign({}, state, { city: action.payload});
        default: 
            return state;
    }
}