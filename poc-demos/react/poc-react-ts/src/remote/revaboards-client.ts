import axios from 'axios';

export const revaboardsClient = axios.create({
<<<<<<< HEAD
    baseURL: 'http://p1api-env.eba-6w57avct.us-east-1.elasticbeanstalk.com/',
=======
    baseURL: 'http://revaboardsapi-env-1.eba-53denqsk.us-east-1.elasticbeanstalk.com',
>>>>>>> 4bfc7209682db3077cda5578ce5b6e703540262e
    headers: {
        'Content-Type': 'application/json'
    }
});