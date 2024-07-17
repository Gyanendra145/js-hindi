// const tinderuser = new Object() -- Singleton user

const tinderUser = {}

tinderUser.id = "12"
tinderUser.name = "GYAN_SINGH"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "Some@gm.com",
    fullname:{
        userfullname : {
            firstname : "GYAN",
            lastname: "singh"

        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);
const obj1 = {1: "a",2:"b"}
const obj2 = {2: "a",4:"b"}
const obj3 = {3: "a",5:"b"}

// const obj4 = Object.assign({}, obj1,obj2,obj3)
const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4);

users[1].email
console.log(tinderUser);

console.log();
