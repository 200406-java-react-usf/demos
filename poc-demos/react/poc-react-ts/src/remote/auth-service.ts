import { revaboardsClient } from "./revaboards-client";

export async function authorize(username: string, password: string, firstName: string, lastName: string, email: string) {
    let response = await revaboardsClient.post('/users', {username, password, firstName, lastName, email});
    return await response.data;
}

export async function authenticate(username: string, password: string) {
    let response = await revaboardsClient.post('/auth', {username, password});
    return await response.data;
}