import {fetch as type} from '../types';

const initialState = {
    isFetching: false,
    item: {},
    list: [],
};

export const fetch = (state = initialState, action) => {
    switch(action.type)	 {
        case type.FETCH_START:
            return {
                ...state,
                isFetching: action.payload.isFetching
            };
        case type.FETCH_END:
            return {
                ...state,
                isFetching: action.payload.isFetching
            };
        case type.GET:
            return {
                ...state,
                item: action.payload.item
            };
        case type.LIST:
            return {
                ...state,
                list: action.payload.list.items
            };

        default:
            return state;
    }
}
