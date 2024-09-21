
import axios from 'axios';

export class ConfigurationService {
    public getHttpConfiguration() {
        return axios.create({
            baseURL: process.env.API_BASE || 'http://127.0.0.1:8000/api'
        });
    }
}
