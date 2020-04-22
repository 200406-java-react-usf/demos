class DataNotFound {
    constructor() {
        this.message = 'Data not found';
    }
}

class DataDoesntExist {
    constructor(reason) {
        this.message = 'The provided data doesn\'t exist';
        reason ? (this.reason = reason) : this.reason = 'Unspecified reason.';
    }
}

class IncorrectData {
    constructor() {
        this.message = 'Incorrect data entered';
    }
}

module.exports = 
{
    DataNotFound, 
    DataDoesntExist,
    IncorrectData
};