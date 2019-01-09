import {fetch as creator} from '../creators';
import axios from 'axios';

const baseUrl = 'https://api.ddocdoc.com/v2';

axios.defaults.withCredentials = false;

const jsonToParams = (obj = {}) => {
    return Object.keys(obj).reduce((str, key) => {
        str += ((str === '' ? '' : '&') + key + '=' + obj[key]);
        return str;
    }, '');
}

export const reset = () => {
    return (dispatch) => {
        return new Promise(resolve => {
            dispatch(creator.get({}));
            resolve();
        });
    };
};

export const resetList = () => {
    return (dispatch) => {
        return new Promise(resolve => {
            dispatch(creator.list({}));
            resolve();
        });
    };
};

export const get = (url, params = {}) => {
    return (dispatch, getState) => {
        const fullUrl = `${baseUrl}${url}`;
        const str = jsonToParams(params);

        dispatch(creator.fetchStart());
        return axios.get(fullUrl + (str === '' ? '' : '?') + str)
            .then(({data}) => {
                dispatch(creator.get(data));
            })
            .then(docs => dispatch(creator.fetchEnd()));
    };
};

export const list = (url, params = {}) => {
    return (dispatch) => {
        const fullUrl = `${baseUrl}${url}`;
        const str = jsonToParams(params);

        dispatch(creator.fetchStart());
        return axios.get(fullUrl + (str === '' ? '' : '?') + str)
            .then(({data}) => {
                dispatch(creator.list(data));
            })
            .then(docs => dispatch(creator.fetchEnd()));
    };
};
