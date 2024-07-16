let jokes =[
   " I took the shell off of my racing snail, thinking it would make him faster.But if anything, it made him more sluggish.How many tickles does it take to get an octopus to laugh? Ten tickles",
   "Two pickles fell out of a jar onto the floor. What did one say to the other? Dill with it.", 
   "What time is it when the clock strikes 13? Time to get a new clock.",
   " How does a cucumber become a pickle? It goes through a jarring experience.",
   " What do you think of that new diner on the moon? Food was good, but there really wasn’t much atmosphere.",
   "Why did the dinosaur cross the road? Because the chicken wasn’t born yet.",
   "Why did the kid bring a ladder to school? Because she wanted to go to high school.",
    " How are false teeth like stars? They come out at night.",

]


let generateBtn = document.getElementById("jokesGenerateBtn");
let joke = document.querySelector(".joke");

generateRandomNumber = () => {
    return Math.floor(Math.random() *jokes.length)

};

generateBtn.addEventListener("click" , () => {
    joke.textContent = jokes[generateRandomNumber()];
})



