import Axios from 'axios';

const http = Axios.create({
    baseURL: `https://api.github.com/users`
});

/**
 * @author Andrews
 *
 * Serviço para requisições http
 */
export default {
    getBy: objectQuery => {
        return http.patch('/', objectQuery);
    },
};
