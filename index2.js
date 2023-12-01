class hero {
    constructor(nome, idade, tipo){
        this.name = nome
        this.age = idade
        this.type = tipo
    }
    
    attack() {
        let ataque
        
        switch (this.type) {
        	case "mago":
            	ataque = "magia"
            	break
            
        	case "guerreiro":
            	ataque = "espada"
            	break
            
        	case "monge":
            	ataque = "artes marciais"
            	break
            
        	case "ninja":
            	ataque = "shuriken"
            	break
        }
       console.log(`o ${this.type} atacou usando ${ataque}`)
    }
}

let mage = new hero("Cedric", 60, "mago")
let warrior = new hero("Agnar", 30, "guerreiro")
let monk = new hero("Aung", 50, "monge")
let ninja = new hero("Hayate", 20, "ninja")

mage.attack()
warrior.attack()
monk.attack()
ninja.attack()