const path = {
    home : '/',
    curation : '/curation',

    item : (prefix) => (`${prefix}/:id`),
    moveItem : (prefix, id) => (`${prefix}/${id}`),

    // etc
    promo : 'https://event.ddocdoc.com/promotion/201810smart'
};

export default path;
