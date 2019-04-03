import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
	picArray: []
  };
  
  componentDidMount() {
	fetch('test.json').then((response) => {
		return response.json();
	}).then((json) => {
		console.log(json);
		this.setState({picArray: json});
	})
  }
  

  Rows = (props) => {
    return props.picArray.map((item, i) => {
      return <tr>
        <td>
          <img src={item.thumbnails.w160} alt={item.title}/>
        </td>
        <td>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </td>
        <td>
          <a href={item.filename}>View</a>
        </td>
      </tr>
    });
  };



  render() {
    return (
      <div className="App">
        <table>
            <tbody>
                {this.Rows(this.state)}
            </tbody>
        </table>
      </div>
    );
  }
}
export default App;
