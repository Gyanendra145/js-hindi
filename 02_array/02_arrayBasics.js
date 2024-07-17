const marvel_heros =["Thor","Ironman", "Spiderman"]
const dc_heros = ["superman", "flash", "batman"]
 
// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

// const allHeros = marvel_heros.concat(dc_heros)

// const allnewheros = [...marvel_heros,...dc_heros]
// console.log(allnewheros);

const another_array = [1,2,3,[4,5,6],7,[8,9,[0,3,6]]]
console.log(another_array);

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("gyan"));
console.log(Array.from("gyan"));
console.log(Array.from({name:"gyan"})); //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));


