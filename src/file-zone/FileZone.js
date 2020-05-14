import React, { Component } from 'react';
import './FileZone.css';

class FileZone extends Component {
  static getDerivedStateFromProps(props) {
    if (!!props.synonyms) return {
      synonyms: props.synonyms,
    }
  }


  state = {
    content: '',
    synonyms: '',
  }

  componentDidMount() {
    this.props.getTextContainer(this.textContainer)
  }


  changeContent = (e) => {
    this.setState({
      content: e.target.innerHTML
    });
  }

  render() {
        return (
            <div id="file-zone">
                <div
                  id="file"
                  contentEditable
                  onInput={this.changeContent}
                  ref={ref => {
                    this.textContainer = ref;
                  }}>

                </div>
            </div>
        );
    }
}

export default FileZone;
