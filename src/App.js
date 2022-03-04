import './App.css';
import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch('https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=ed0cbb27&app_key=8b36dd636f644bab926f0e2e6f8d28c5',
      { headers: { 'Content-Type': 'application/json' } })
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            items: result.hits
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>{error}</div>
    }
    if (!isLoaded) {
      return <div>Loading...</div>
    }
    return (
      <ul>
       { items.map(item => item.recipe).map((item, index) => (
         <li key={index}>
           <img src={item.image} alt={item.label}/>
           <br></br>
           {JSON.stringify(item)}
         </li>)
        )}
      </ul>
    );
  }
}

export default App;
