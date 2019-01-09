import {fetch as type} from '../types';

export const fetchStart = () => {
    return {
        type: type.FETCH_START,
        payload: {
            isFetching: true
        }
    }
};

export const fetchEnd = () => {
    return {
        type: type.FETCH_END,
        payload: {
            isFetching: false
        }
    }
};

export const get = (item) => {
    return {
        type: type.GET,
        payload: {
            item
        }
    }
};

export const list = (list) => {
    return {
        type: type.LIST,
        payload: {
            list
        }
    }
};
