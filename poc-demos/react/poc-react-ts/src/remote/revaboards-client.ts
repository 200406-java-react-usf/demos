import axios from 'axios';

export const revaboardsClient = axios.create({
    baseURL: 'http://revaboardsapi-env-1.eba-53denqsk.us-east-1.elasticbeanstalk.com',
    headers: {
        'Content-Type': 'application/json'
    }
});