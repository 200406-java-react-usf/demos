import axios from 'axios';

export const revaboardsClient = axios.create({
    baseURL: 'http://p1reimbursement-env.eba-2gpgjpzh.us-east-1.elasticbeanstalk.com',
    headers: {
        'Content-Type': 'application/json'
    }
});