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
    const image = rawImages[Math.floor(Math.random() * 4)];
    if (document.getElementById('main')) {
      document.getElementById('main').style.backgroundImage =
        `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9) ), url('${image}')`;
    }
    if (this.inputRef) {
      this.inputRef.focus();
    }
  }

  expandInput(w) {
    this.setState({
      inputStyle: {
        width: w,
      }
    });
    if (this.inputRef) {
      this.inputRef.focus();
    }
  }

  handleKeyPress(e) {
    const { questionIndex, answers, questions } = this.state;
    if (e.key === 'Enter') {
      if (questionIndex === Object.keys(questions).length - 1) {
        this.props.history.push('/home');
      }
      this.setState({
        inputStyle: {
          width: '0%',
        },
        answers: {
          ...answers,
          [questionIndex]: e.target.value
        },
        questionIndex: questionIndex + 1,
      });
      setTimeout(this.expandInput.bind(this, '60%'), 500);
    }
  }

  renderInput = (inputStyle, questions, answers, questionIndex) =>
    (<input
      ref={ (r) => this.inputRef = r }
      style={ inputStyle }
      key={ questionIndex }
      className="input"
      type="text"
      placeholder={ questions[questionIndex].q }
      value={ answers[questionIndex] && answers[questionIndex].a }
      onKeyPress={ this.handleKeyPress.bind(this) }
      onMouseEnter={this.expandInput.bind(this, '60%') }
    />)

  render() {
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
