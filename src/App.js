import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Alain Afflelou',
        bio: "Alain Afflelou est un homme d'affaires français, né le 1er janvier 1948 à Mascara (Algérie, alors française). Il est le fondateur et dirigeant de la chaîne de magasins d'optique qui porte son nom.",
        imgSrc: 'data:image/webp;base64,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',
        profession: 'Opticien'
      },
      showPerson: false,
      timeSinceShow: 0
    };
    this.timer = null;
  }

  componentDidUpdate(prevProps, prevState) {
    // Si showPerson passe de false à true → démarrer un nouveau timer
    if (!prevState.showPerson && this.state.showPerson) {
      this.startTimer();
    }

    // Si showPerson passe de true à false → stopper + réinitialiser le timer
    if (prevState.showPerson && !this.state.showPerson) {
      this.stopTimer();
      this.setState({ timeSinceShow: 0 }); // Réinitialisation
    }
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  startTimer = () => {
    this.stopTimer(); // par sécurité
    this.timer = setInterval(() => {
      this.setState(prev => ({
        timeSinceShow: prev.timeSinceShow + 1
      }));
    }, 1000);
  };

  stopTimer = () => {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  };

  toggleShow = () => {
    this.setState(prev => ({
      showPerson: !prev.showPerson
    }));
  };

  render() {
    const { person, showPerson, timeSinceShow } = this.state;

    return (
      <div className="App" style={{ textAlign: 'center', padding: '30px' }}>
        <button onClick={this.toggleShow}>
          {showPerson ? 'Masquer le profil' : 'Afficher le profil'}
        </button>

        {showPerson && (
          <>
            <p style={{ marginTop: '10px', color: 'gray' }}>
              Temps depuis l’affichage : {timeSinceShow} seconde(s)
            </p>
            <div>
              <img
                src={person.imgSrc}
                alt={person.fullName}
                style={{ width: '200px', borderRadius: '10px' }}
              />
              <h2>{person.fullName}</h2>
              <p><strong>Profession :</strong> {person.profession}</p>
              <p><strong>Bio :</strong> {person.bio}</p>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default App;
