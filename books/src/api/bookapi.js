import axios from 'axios';
import config from './_config.env';

export default axios.create({

    baseURL:config.books_api_url

});