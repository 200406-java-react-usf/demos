import { revaboardsClient } from "./revaboards-client";

<<<<<<< HEAD
export async function authenticate (username: string, password: string) {
    let response = await revaboardsClient.post('/auth', {username, password});
    return await response.data;
}
=======
export async function authenticate(username: string, password: string) {
    let response = await revaboardsClient.post('/auth', {username, password});
    return await response.data;
}
>>>>>>> 4bfc7209682db3077cda5578ce5b6e703540262e
