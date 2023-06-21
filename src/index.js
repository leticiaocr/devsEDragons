import { Personagem } from "./modules/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/mago.js";
import { Arqueiro } from "./modules/arqueiro.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";

const magoAntonio = new Mago('Antônio', 4, 'Fogo', 4, 3)
const magaJulia = new Mago('Julia', 8, 'gelo', 7, 10)
const arqueiroBruno = new Arqueiro ('Bruno', 7,8)
const arqueiroMagoChico = new ArqueiroMago('Chico', 7,10, 'ar', 4, 8)




const personagens = [magoAntonio, magaJulia, arqueiroBruno,arqueiroMagoChico]

new PersonagemView(personagens).render()

console.log(personagemJose)











/*a classe é um modelo, quando criamos um objeto com essa classe, ele se torna
uma instância daquela classe. 

Ou seja: Personagem = classe 
personagemLeticia = instância da classe Personagem 
this = isto 

CONSTRUCTOR => é um método especial que só é executado quando uma instância é criada. (dentro de uma classe só pode ter um método constructor)
//HERANÇA 

extends = está dizendo que margo herda personagem etrabalha em conjunto com o super 
o super envia os valores passados por parâmetro para a classe pai

POLIMORFISMO => A capacidade de objetos de classs diferentes, responderem a mesma mensagem de formas diferentes. Por exemplo
no mago.js a classe mago responde a obter insignia de forma diferente que as outras classes. 
*/ 
