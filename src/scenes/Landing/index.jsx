import React, { Component } from 'react';

import rawQuestions from './questions.json';
import rawImages from './backgrounds.json';
import './styles.css';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: {
        ...rawQuestions,
      },
      questionIndex: 0,
      answers: {},
      inputStyle: {
        width: '40%',
      }
    };
  }

  componentDidMount() {
    console.log('main', document.getElementById('main'));
    const image = rawImages[Math.floor(Math.random() * 4)];
    if (document.getElementById('main')) {
      document.getElementById('main').style.backgroundImage =
        `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9) ), url('${image}')`;
    }
  }

  expandInput(w) {
    this.setState({
      inputStyle: {
        width: w,
      }
    })
  }

  handleChange(e) {
    console.log('keystroke', e);
    this.setState({
      answers: {
        [this.state.questionIndex]: e.target.value
      },
    });
  }

  handleKeyPress(e) {
    const { questionIndex } = this.state;
    if (e.key === 'Enter') {
      this.setState({
        inputStyle: {
          width: '0%',
        },
        questionIndex: questionIndex + 1,
      });
      setTimeout(this.expandInput.bind(this, '60%'), 500);
    }
  }

  renderInput = (inputStyle, questions, answers, questionIndex) =>
    (<input
      style={ console.log(answers[questionIndex]) || inputStyle }
      key={ questionIndex }
      className="input"
      type="text"
      placeholder={ questions[questionIndex].q }
      value={ answers[questionIndex] && answers[questionIndex].a }
      onChange={ this.handleChange.bind(this) }
      onKeyPress={ this.handleKeyPress.bind(this) }
      onMouseEnter={this.expandInput.bind(this, '60%') }
    />)

  render() {
    console.log('props', this.props, this.state);
    const { questionIndex, questions, answers, inputStyle } = this.state;

    return (
      <div id="main" className="landing">
        <h1 className="app-name">xxxplore</h1>
        {this.renderInput(inputStyle, questions, answers, questionIndex)}
      </div>
    );
  }
}

export default Landing;
