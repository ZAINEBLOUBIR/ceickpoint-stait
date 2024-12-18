import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      personne: {
        fullName: 'jhon mark',
        bio: 'Développeur Web passionné.',
        imgSrc: '/top.webp', 
        profession: 'Développeur Full-stack',
      },
      montre: false, 
      tempsEcoule: 0, 
    };
    this.timer = null; 
  }

  
  toggleShow = () => {
    this.setState((prevState) => ({
      montre: !prevState.montre,
    }));
  };

  
  incrementTime = () => {
    this.setState((prevState) => ({
      tempsEcoule: prevState.tempsEcoule + 1,
    }));
  };

  
  componentDidMount() {
    this.timer = setInterval(this.incrementTime, 1000); 
  }

  
  componentWillUnmount() {
    clearInterval(this.timer); 
  }

  render() {
    const { personne, montre, tempsEcoule } = this.state;

    return (
      <div className="App">
        <h1>Profil de la personne</h1>

      
        <button onClick={this.toggleShow}>
          {montre ? 'Masquer le profil' : 'Afficher le profil'}
        </button>

        
        {montre && (
          <div>
            <h2>{personne.fullName}</h2>
            <p>{personne.profession}</p>
            <p>{personne.bio}</p>
            <img src={personne.imgSrc} alt={personne.fullName} />
          </div>
        )}

        
        <p>Temps écoulé depuis le montage : {tempsEcoule} secondes</p>
      </div>
    );
  }
}

export default App;