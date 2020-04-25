const isValidId = (id:number):boolean => {
    return (id && typeof id === 'number' && Number.isInteger(id) && id > 0)
}


const isValidString = (...strs:string[]):boolean => {
    for (let str of strs) {
        if (str || typeof str !== 'string'){
            return false
        }
    } return true
}


const isValidObject =(obj:Object, ...nullableProps: string[])=>{

}