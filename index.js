class hero{
    constructor(nome, idade, tipo){
        this.name = nome;
        this.age = idade;
        this.type = tipo;
    }
    attack(){
        let ataque;
        if(this.type === "mago"){
            ataque = "magia";
        }else if(this.type === "guerreiro"){
            ataque = "espada";
        }else if(this.type === "monge"){
            ataque = "artes marciais";
        }else if(this.type === "ninja"){
            ataque = "shuriken";
        }else{
            console.log("Ataque não existe");
        }
        console.log(`o ${this.type} atacou usando ${ataque}`);
    }
}

let mage = new hero("Cedric", 60, "mago");
let warrior = new hero("Agnar", 30, "guerreiro");
let monk = new hero("Aung", 50, "monge");
let ninja = new hero("Hayate", 20, "ninja");

mage.attack();
warrior.attack();
monk.attack();
ninja.attack();