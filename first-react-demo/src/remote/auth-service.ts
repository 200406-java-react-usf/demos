import { revaboardsClient } from "./revaboards-client"


export async function authenticate(username: string, password: string) {
    let response = await revaboardsClient.post('/auth', {username, password});
    return await response.data;
}

