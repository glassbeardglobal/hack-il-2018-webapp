import React, { Component } from 'react';
import { Paper, Checkbox, Typography } from 'material-ui';
import { FormGroup, FormControlLabel } from 'material-ui/Form';

import rawQuestions from './questions.json';
import rawImages from './backgrounds.json';
import './styles.css';

const questionOrder = ["name", "initialCity", "budget", "dates", "interests"];
const interests = ["Zoos",
  "Wineries",
  "Tours",
  "Shopping",
  "Food",
  "Parks",
  "Nightlife",
  "Museums",
  "Movies",
  "Festivals",
  "Breweries",
  "Arts",
  "Active"];
var formControlLabels = [];

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
    // Random background image
    const image = rawImages[Math.floor(Math.random() * 4)];
    if (document.getElementById('main')) {
      document.getElementById('main').style.backgroundImage =
        `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9) ), url('${image}')`;
    }

    this.inputRef ? this.inputRef.focus() : null;

    // Prerender form control labels
    const { answers } = this.state;
    const questionIndex = 3;
    for (var i = 0; i < interests.length; i++) {
      formControlLabels.push(this.prerenderFormControlLabel(answers, questionIndex, interests[i]));
    }
  }

  prerenderFormControlLabel(answers, questionIndex, key) {
    const lowerKey = key.toLowerCase();
    return( <FormControlLabel
        control={
          <Checkbox
            key={lowerKey}
            checked={answers[questionOrder[questionIndex]] && answers[questionOrder[questionIndex]][lowerKey]}
            onChange={() => this.setState({
              answers: {
                ...answers,
                interests: {
                  ...answers.interests,
                  [lowerKey]: (answers.interests ? !answers[questionOrder[questionIndex + 1]][lowerKey] : true),
                }
              }
            })}
          />
        }
        label={key}
        // style={{ marginLeft: '5vw', marginRight: '5vw' }}
      />
    );
}

  expandInput(w) {
    this.setState({
      inputStyle: {
        width: w,
      }
    });
    this.inputRef ? this.inputRef.focus() : null;
  }

  handleGlobalKeyPress(e) {
    // Push results page if no more questions - special handling for check final page
    const { questionIndex, questions } = this.state;

    if (e.key === 'Enter' && questionIndex + 1 === Object.keys(questions).length - 1) {
      this.props.history.push('/home');
    }
  }

  handleKeyPress(e) {
    const { questionIndex, answers, questions } = this.state;
    if (e.key === 'Enter') {
      // Push results page if no more questions - special handling for textfield final page
      if (questionIndex === Object.keys(questions).length - 1) {
        this.props.history.push('/home');
      }

      // Update store
      // Store does not need updating for interests, as store is updated each check
      console.log('CUrrent question', questionOrder[questionIndex]);
      if (questionOrder[questionIndex] === 'interests') {
        this.setState({
          inputStyle: {
            width: '0%',
          },
          questionIndex: questionIndex + 1,
        });
      } else {
        this.setState({
          inputStyle: {
            width: '0%',
          },
          answers: {
            ...answers,
            [questionOrder[questionIndex]]: e.target.value
          },
          questionIndex: questionIndex + 1,
        });
      }
      setTimeout(this.expandInput.bind(this, '60%'), 500);
    }
  }

  renderChecks = (questions, answers, questionIndex) =>
    (
      <Paper elevation={2} style={{width: '80%'}}>
        <div style={{ marginLeft: '5vw', marginRight: '5vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="display1" gutterBottom>
            {questions[questionOrder[questionIndex]].q}
          </Typography>
          <FormGroup row style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {formControlLabels}
          </FormGroup>
        </div>
      </Paper>
    )

  renderInput = (inputStyle, questions, answers, questionIndex) =>
    (<input
      ref={ (r) => this.inputRef = r }
      style={ inputStyle }
      key={ questionIndex }
      className="input"
      type="text"
      placeholder={ questions[questionOrder[questionIndex]].q }
      value={ answers[questionOrder[questionIndex]] && answers[questionOrder[questionIndex]].a }
      onKeyPress={ this.handleKeyPress.bind(this) }
      onMouseEnter={this.expandInput.bind(this, '60%') }
    />)

  render() {
    const { questionIndex, questions, answers, inputStyle } = this.state;
    console.log(this.props, this.state);

    return (
      <div id="main" className="landing" onKeyPress={this.handleGlobalKeyPress.bind(this)}>
        <h1 className="app-name">xxxplore</h1>
        {questions[questionOrder[questionIndex]].type === "text"
          ? this.renderInput(inputStyle, questions, answers, questionIndex)
          : this.renderChecks(questions, answers, questionIndex)}
      </div>
    );
  }
}

export default Landing;
