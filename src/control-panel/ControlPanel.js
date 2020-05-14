import React, { Component } from 'react';
import './ControlPanel.css';

const formatText = (cmd, textArea) => {
  document.execCommand(cmd, false, textArea.innerHTML);
  textArea.focus()
}

class ControlPanel extends Component {
  static getDerivedStateFromProps(props) {
    if (!!props.textArea) return {
      textArea: props.textArea,
    }
  }

  state = {
    textArea: null
  }


  makeBold = () => {
    formatText('bold', this.state.textArea)
  }

  makeItalic = () => {
    formatText('italic', this.state.textArea)
  }

  makeUnderline = () => {
    formatText('underline', this.state.textArea)
  }

    render() {
        return (
            <div id="control-panel">
                <div id="format-actions">
                    <button className="format-action" type="button" onClick={this.makeBold}><b>B</b></button>
                    <button className="format-action" type="button" onClick={this.makeItalic}><i>I</i></button>
                    <button className="format-action" type="button" onClick={this.makeUnderline}><u>U</u></button>
                </div>
            </div>
        );
    }
}

export default ControlPanel;
