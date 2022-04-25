import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Content from './content/Content'
import Footer from './nav/Footer'
import NavigationBar from './nav/NavigationBar'
import './App.css';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className = 'app'>
          <NavigationBar />
          <main>
            <Content />
          </main>
        </div>
        <Footer />
      </Router>
    )
  }
}

export default App;
