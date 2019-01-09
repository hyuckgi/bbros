export const api = {
    getBanners : (params = null) => ({
        url : `/eventBanner`,
        params : {...params}
    }),
};


export default api;
