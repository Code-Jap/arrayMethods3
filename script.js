const superheroes = [
    {
    "name": "Batman",
    "publisher": "DC Comics",
    "alter_ego": "Bruce Wayne",
    "first_appearance": "Detective Comics #27",
    "weight": "210"
    },
    {
    "name": "Superman",
    "publisher": "DC Comics",
    "alter_ego": "Kal-El",
    "first_appearance": "Action Comics #1",
    "weight": "220"
    },
    {
    "name": "Flash",
    "publisher": "DC Comics",
    "alter_ego": "Jay Garrick",
    "first_appearance": "Flash Comics #1",
    "weight": "195"
    },
    {
    "name": "Green Lantern",
    "publisher": "DC Comics",
    "alter_ego": "Alan Scott",
    "first_appearance": "All-American Comics #16",
    "weight": "186"
    },
    {
    "name": "Green Arrow",
    "publisher": "DC Comics",
    "alter_ego": "Oliver Queen",
    "first_appearance": "All-American Comics #16",
    "weight": "195"
    },
    {
    "name": "Wonder Woman",
    "publisher": "DC Comics",
    "alter_ego": "Princess Diana",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "165"
    },
    {
    "name": "Blue Beetle",
    "publisher": "DC Comics",
    "alter_ego": "Dan Garret",
    "first_appearance": "Mystery Men Comics #1",
    "weight": "145"
    },
    {
    "name": "Spider Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Peter Parker",
    "first_appearance": "Amazing Fantasy #15",
    "weight": "167"
    },
    {
    "name": "Captain America",
    "publisher": "Marvel Comics",
    "alter_ego": "Steve Rogers",
    "first_appearance": "Captain America Comics #1",
    "weight": "220"
    },
    {
    "name": "Iron Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Tony Stark",
    "first_appearance": "Tales of Suspense #39",
    "weight": "250"
    },
    {
    "name": "Thor",
    "publisher": "Marvel Comics",
    "alter_ego": "Thor Odinson",
    "first_appearance": "Journey into Myster #83",
    "weight": "200"
    },
    {
    "name": "Hulk",
    "publisher": "Marvel Comics",
    "alter_ego": "Bruce Banner",
    "first_appearance": "The Incredible Hulk #1",
    "weight": "1400"
    },
    {
    "name": "Wolverine",
    "publisher": "Marvel Comics",
    "alter_ego": "James Howlett",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "200"
    },
    {
    "name": "Daredevil",
    "publisher": "Marvel Comics",
    "alter_ego": "Matthew Michael Murdock",
    "first_appearance": "Daredevil #1",
    "weight": "200"
    },
    {
    "name": "Silver Surfer",
    "publisher": "Marvel Comics",
    "alter_ego": "Norrin Radd",
    "first_appearance": "The Fantastic Four #48",
    "weight": "unknown"
    }
    ];


/*

    const superheroesNames = () => 

       superheroes.map (hero => hero.name);
       

    console.log(superheroesNames());





    const lightweightSuperheroes = () => 

        superheroes.filter (hero => hero.weight < 190);


    console.log(lightweightSuperheroes());






    const superheroes200Pounds = () => 

        superheroes.filter (hero => hero.weight === "200");

  
   console.log(superheroes200Pounds());







// Deze code logt de namen van de heavyweights van 200 pound


   const superheroes200Pounds = () => {

    const heavyWeights =  superheroes.filter (hero => hero.weight === "200");

   return  heavyWeights.map (hero => hero.name);
   



    const firstAppearance = () => 

        superheroes.map(hero => hero.first_appearance);
   

    console.log(firstAppearance());




     const dcComics = () => {

        const comic = superheroes.filter(comic => comic.publisher === "DC Comics");
    
    return comic.map(hero => hero.name);

};

console.log(dcComics());





const marvelComics = () => {

    const comic = superheroes.filter(comic => comic.publisher === "Marvel Comics");

    return comic.map(hero => hero.name);
};

console.log(marvelComics());


*/




const totalWeightDC = () => {

    const comics = superheroes.filter(comic => comic.publisher === "DC Comics");

    return comics.reduce((currentTotal, person) => 

         currentTotal + parseInt(person.weight), 0);
    
};
console.log(totalWeightDC());




const totalWeightMarvel = () => {

    const comics = superheroes.filter(comic => comic.publisher === "Marvel Comics");

    return comics.reduce((currentTotal, person) => 

        currentTotal + parseInt(person.weight), 0);
   
};

console.log(totalWeightMarvel());



const heaviestSuperhero = () => {


}