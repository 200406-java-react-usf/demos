import { revaboardsClient } from "./revaboards-client";

export async function register(username: string, password: string, firstName: string, lastName: string, email: string) {
    let response = await revaboardsClient.post('/users', {username, password, firstName, lastName, email});
    return await response.data;
} 