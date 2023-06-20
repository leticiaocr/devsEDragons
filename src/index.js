import { Personagem } from "./modules/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";

const personagemPedrinho = new Personagem('Pedrinho', 5, 'Mago');
const personagemJose = new Personagem('Jose', 3, 'Arqueiro');

const personagens = [personagemPedrinho, personagemJose]

new PersonagemView(personagens).render()

console.log(personagemJose)











/*a classe é um modelo, quando criamos um objeto com essa classe, ele se torna
uma instância daquela classe. 

Ou seja: Personagem = classe 
personagemLeticia = instância da classe Personagem 
this = isto 

CONSTRUCTOR => é um método especial que só é executado quando uma instância é criada. (dentro de uma classe só pode ter um método constructor)

*/