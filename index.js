
const Igor = {
    album: "Igor", 
    fire: "yes",
    favsong: "PUPPET",

};
const FlowerBoy = {
    album: "Flower Boy",
    fire: "yes",
    favsong: "911 / Mr. Lonely",
};
const CallMeIfYouGetLost = {
    album: "Call Me If You Get Lost",
    fire: "yes",
    favsong: "SWEET / I THOUGHT YOU WANTED TO DANCE",

}
const Wolf = {
    album: "Wolf",
    fire: "yes",
    favsong: "Bimmer",
}
const Goblin = {
    album: "Goblin",
    fire: "no",
    favsong: "She",
}
const CherryBomb = {
    album: "Cherry Bomb",
    fire: "no",
    favsong: "SMUCKERS",
}

 const tyler = [ Igor, FlowerBoy, CallMeIfYouGetLost, Wolf, Goblin , CherryBomb ];

   
console.log(tyler.album)

/* 
 tyler.forEach((tyler)=> console.log(tyler.album))
 tyler.forEach((tyler)=> console.log(tyler)) */




const trash = tyler.filter((tyler)=> tyler.fire === "no")
console.log(trash)
<<<<<<< HEAD
 

=======
 
>>>>>>> parent of c344b1b (gg)
