import {revaboardsClient} from './revaboards-client';
import {User} from '../models/user';


let result: User;

let request = async (un: string, pw: string) => {
    await revaboardsClient.post('/auth',{
        "username": un,
        "password": pw
    })
    .then(response => {
        result = response.data;
        return result; 
    })
    .catch(err => {
        throw err;
    });

    return result;
};

export default request;
