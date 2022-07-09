
import React, {Component} from "react";
import fruta from './imagem/uvaitalia.png';

export default class Coisa extends Component{
state = {
  nome:"João",
  idade:19,
  comidafav:"Empadão",
  musicas:["My Way","How Can I Go On","Love Me Like There´s No Tomorrow"]
}
 render(){ 
  return(
    <div>
    <h1>{this.state.nome}</h1>
    <h2>{this.state.idade}</h2>
    <h3>{this.state.comidafav}</h3>
    <ul>
      <li>{this.state.musicas[0]}</li>
      <li>{this.state.musicas[1]}</li>
      <li>{this.state.musicas[2]}</li>
    </ul>
    <img src={fruta}/>
    </div>
  )
}
}