//user class for 

module.exports = function User(id,un,pw,email,fn,ln){

    this.id = id;
    this.username = un;
    this.password = pw;
    this.email = email;
    this.firstname = fn;
    this.lastname = ln;

}