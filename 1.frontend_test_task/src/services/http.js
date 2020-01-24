import Axios from "axios";

const http = Axios.create({
  baseURL: `https://api.github.com/search`
});

/**
 * @author Andrews
 *
 * Serviço para requisições http
 */
export default {
  getBy: param => {
    return http.get(`users?q=${param}`);
  }
};
