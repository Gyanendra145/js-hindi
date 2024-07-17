//Object literals

const mySym = Symbol("key1")

const JsUser = 
{
    name : "Gyanendra",
    age : 22,
    location: "Patna",
    [mySym]: "mykey1",
    email: "Gyansingh@gmail.com",
    isloggedIn: false,
    lastLoginDays: ["Monday", "Wednesday"]
}
console.log(JsUser.name);
console.log(typeof JsUser[mySym]);

JsUser.email = "gyanendra@gmail.com"
// Object.freeze(JsUser);
JsUser.email = "gyan@Chatgpt.com"

console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

