
class Animal{

    constructor(name){

        this.name = name;
        
    }

    eat(){

        console.log(`${this.name} is eating too much!!`);

    }

    makeSound(){

        console.log(`${this.name} is shouting too much!!`);

    }
}

class Dog extends Animal{

    constructor(name,breed){
        super(name);
        this.breed = breed;
    }

    behaviour(){
        console.log(`${this.breed} is very aggressive in nature.`);
    }

    makeSound(){

        console.log(`${this.breed} is very calm.`);

    }

}

class Cat extends Animal{

    constructor(name,breed){
        super(name);
    }

    behaviour(){
        console.log(`${this.name} is very cute.`);
    }

}

class Puppies extends Dog{

    constructor(name,breed){
        super(name,breed);
    }

    nature(){

        console.log(`${this.name} is a ${this.breed}`); 

    }

}

let Animal1 = new Animal("Tiger");

let Dog1 = new Dog("Bhuru", "German Shepherd");

let Cat1 = new Cat("Snowbell", "Percian Cat")

let Puppies1 = new Puppies("Reo","Begal");

Dog1.makeSound();

