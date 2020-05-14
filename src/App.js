import React, {Component} from 'react';
import './App.css';
import ControlPanel from "./control-panel/ControlPanel";
import FileZone from "./file-zone/FileZone";
import getMockText from './text.service';

class App extends Component {
  state = {
    textArea: null,
    synonym: '',
  }

  componentDidMount() {
    this.getText();
  }


  getText = () => {
      getMockText().then((synonym) => {
        this.setState({ synonym });
      });
  }

  textContainer = (textArea) => {
    this.setState({ textArea });
  }

    render() {
        return (
            <div className="App">
                <header>
                    <span>Simple Text Editor</span>
                </header>
                <main>
                    <ControlPanel textArea={this.state.textArea} />
                    <FileZone getTextContainer={this.textContainer} synonyms={this.state.synonyms} />
                </main>
            </div>
        );
    }
}

export default App;
