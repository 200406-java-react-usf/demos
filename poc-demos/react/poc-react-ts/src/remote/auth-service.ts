import { revaboardsClient } from "./revaboards-client";
import { User } from "../models/user";

export async function authenticate(username: string, password: string) {
    let response = await revaboardsClient.post('/auth', {username, password});
    return await response.data;
}

export async function addNewUser(username: String, password: String, firstName: String, lastName:String){
    let response = await revaboardsClient.post('', {username, password, firstName, lastName});
    return await response.data;
}
