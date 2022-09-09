import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from "./components/CardPequeno/CardPequeno"
function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.fopo4-2.fna.fbcdn.net/v/t39.30808-6/240667251_4542795109110828_6801461301364913967_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=rM2rbGHchhUAX8281Za&tn=qRQ5ZrlTrwg3QwfA&_nc_ht=scontent.fopo4-2.fna&oh=00_AT8mEOxadCKpn0g7X_wqQsMLUcLelG3SQeTNi1Vdu4daaA&oe=62E573C7" 
          nome="Tiago Fonseca" 
          descricao="Oi, eu meu chamo Tiago. Sou estudante de frontend da Labenu.  Estou voltando depois de alguns anos para a área de tecnologia, sou designer gráfico e ator, vivo em Portugal na cidade do Porto."
        />
        
        <ImagemButton 
          imagem="https://i.pinimg.com/736x/03/70/9e/03709e49e5f30ce1af1dcd0e6acb8ff2.jpg" 
          texto="Ver mais"
        />

        <CardPequeno
                  imagem1="https://cdn0.iconfinder.com/data/icons/cosmo-work/40/mail-512.png"
                  imagem2= "https://icons.veryicon.com/png/o/miscellaneous/icon_1/address-60.png"
                  email="tiago.fons@hotmail.com"
                  endereço="Rua Guedes de Azevedo 233"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://i.pinimg.com/originals/9c/b2/86/9cb2863a009b49fcc03161032e9e5baf.png" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
