import React from 'react';
// import logo from './logo.svg';
import IdCard from './idCard/idCard';
import Greetings from './greetings/Greetings';
import Random from './random/Random';
import BoxColor from './boxColor/BoxColor';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>IdCard</h1>
        <p>
          <IdCard
            lastName="Doe"
            firstName="John"
            gender="Male"
            height={178 / 100}
            birth={new Date('1992-07-14').toDateString()}
            picture={
              <img
                src="https://randomuser.me/api/portraits/men/44.jpg"
                alt="photo"
              />
            }
          />
        </p>
        <p>
          <IdCard
            lastName="Delores "
            firstName="Obrien"
            gender="Female"
            height={172 / 100}
            birth={new Date('1988-05-11').toDateString()}
            picture={
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="photo"
              />
            }
          />
        </p>
        <h1>Greetings</h1>
        <p>
          <Greetings lang="de">Ludwig</Greetings>
          <Greetings lang="fr">François</Greetings>
        </p>
        <h1>Random</h1>
        <p>
          <Random min={1} max={6} />
        </p>
        <p>
          <Random min={1} max={100} />
        </p>
        <h1>BoxColor</h1>
        <p>
          <BoxColor r={255} g={0} b={0} />
          <BoxColor r={128} g={255} b={0} />
        </p>
      </header>
    </div>
  );
}

export default App;
