import {revaboardsClient} from './revaboards-client';


export async function authenticate(username: string, password: string){
    let response = await revaboardsClient.post('/auth', {username, password});
    return await response.data;
}

export async function addNewEmployee(username: string, password: string, firstName: string, lastName: string, email: string, role: string){
    let response = await revaboardsClient.post('/employees', {username,password,firstName,lastName,email,role})
    return await response.data;
}