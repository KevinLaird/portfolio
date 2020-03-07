import React from 'react';
import './App.scss';
import Navbar from './react/layout/nav/Navbar';
import Sources from './react/components/sources/Sources';
import Project from './react/components/projects/project/Project'
import Reference from './react/components/references/reference/Reference';
import Footer from './react/layout/footer/Footer'

function App() {
  return (
      <div className="App">
        <Navbar />
        <Sources />
        <section className="projects">
          <Project />
        </section>

        <section className="references">
            <div className="bar bar--blue-2">
                <div className="title__section--title-box">
                    <h1 className="h1 title__section--title">References</h1>
                </div>
                <div className="reference-box">
                    <Reference />
                    <Reference />
                    <Reference />
                </div>
              </div>
          </section>
          <Footer />
      </div>
  );
}

export default App;
