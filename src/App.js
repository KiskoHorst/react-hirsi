import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    picArray: [
        {
            'title': 'Title 1',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.',
            'thumbnails': {
                w160: 'http://placekitten.com/160/161'
            },
            'filename': 'http://placekitten.com/2048/1920',
        },
        {
            'title': 'Title 2',
            'description': 'Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. ',
            'thumbnails': {
                w160: 'http://placekitten.com/160/162'
            },
            'filename': 'http://placekitten.com/2041/1922',
        },
        {
            'title': 'Title 3',
            'description': 'Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. ',
            'thumbnails': {
                w160: 'http://placekitten.com/160/163'
            },
            'filename': 'http://placekitten.com/2039/1920',
        }
    ]
  };

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
