import axios from 'axios';

export const revaboardsClient = axios.create({
    baseURL: 'http://p1reimbursement-env.eba-2gpgjpzh.us-east-1.elasticbeanstalk.com',
    //baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
});