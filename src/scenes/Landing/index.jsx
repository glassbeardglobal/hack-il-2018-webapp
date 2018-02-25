import React, { Component } from 'react';
import { Paper, Checkbox, Typography } from 'material-ui';
import { FormGroup, FormControlLabel } from 'material-ui/Form';
import airports from 'airport-codes';
import DatePicker from 'react-date-picker';

import rawQuestions from './questions.json';
import rawImages from './backgrounds.json';
import serialize from '../../utils';
import './styles.css';

const questionOrder = ["name", "initialCity", "budget", "date", "duration", "interests"];
const interests = ["Zoos",
  "Wineries",
  "Tours",
  "Shopping",
  "Food",
  "Parks",
  "Nightlife",
  "Museums",
  "Festivals",
  "Breweries",
  "Bars",
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
      },
    };
  }

  componentDidMount() {
    // Random background image
    const image = rawImages[Math.floor(Math.random() * 4)];
    if (document.getElementById('main')) {
      document.getElementById('main').style.backgroundImage =
        `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9) ), url('${image}')`;
    }

    if (this.inputRef) {
      this.inputRef.focus();
    }

    // Prerender form control labels
    const { answers } = this.state;
    const questionIndex = 4;
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
            checked={answers.interests && answers.interests[lowerKey]}
            onChange={() => this.setState(currentState => ({
              answers: {
                ...currentState.answers,
                interests: {
                  ...currentState.answers.interests,
                  [lowerKey]: (currentState.answers.interests ? !currentState.answers.interests[lowerKey] : true),
                },
              }
            }))}
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
    if (this.inputRef) {
      this.inputRef.focus();
    }
  }

  handleGlobalKeyPress(e) {
    // Push results page if no more questions - special handling for check final page
    const { questionIndex, questions } = this.state;
    if (e.key === 'Enter' && questionIndex === Object.keys(questions).length - 1) {
      // urlFetchExperiences(this.state.answers);
      const serializedBody = serialize(this.state.answers);
      this.props.history.push(`/home?serialized=${serializedBody}`);
    } else if (e.key === 'Enter' && questionOrder[questionIndex] === 'date') {
      this.handleKeyPress(e);
    }
  }

  handleKeyPress(e) {
    const { questionIndex, answers, questions } = this.state;
    if (e.key === 'Enter') {
      if (questionIndex === 1 && !airports.findWhere({'city': e.target.value})) {
        alert("Not a valid city! (todo: handle better)");
        return;
      }
      // Push results page if no more questions - special handling for textfield final page
      if (questionIndex === Object.keys(questions).length - 1) {
        this.props.history.push('/home');
      }

      // Update store
      // Store does not need updating for interests, as store is updated each check
      if (questionOrder[questionIndex] === 'interests') {
        this.setState({
          inputStyle: {
            width: '0%',
          },
          questionIndex: questionIndex + 1,
        });
      } else if (questionOrder[questionIndex] === 'date') {
        this.setState({
          inputStyle: {
            width: '0%',
          },
          answers:{
            ...answers,
            date: answers.date,
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
        <div style={{ margin: '5vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="display1" gutterBottom>
            {questions[questionOrder[questionIndex]].q}
          </Typography>
          <FormGroup row style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {formControlLabels}
          </FormGroup>
        </div>
      </Paper>
    )

  renderInput(inputStyle, questions, answers, questionIndex) {
    if (questionOrder[questionIndex] === 'date') {
      const { date } = this.state.answers;
      return (<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: '20vh'}}>
        <Paper elevation={2} style={{width: '80%'}}>
          <div style={{ margin: '5vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="display1" gutterBottom>
              {questions[questionOrder[questionIndex]].q}
            </Typography>
            <DatePicker
              className="datePicker"
              onChange={(d) => {
                this.setState({
                  answers: {
                    ...answers,
                    date: d,
                  }
                });
                if (this.mainRef) {
                  this.mainRef.focus();
                }
              }}
              value={date}
            />
          </div>
        </Paper>
      </div>)
    } else {
      return (<input
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
    }
  }

  render() {
    const { questionIndex, questions, answers, inputStyle } = this.state;

    return (
      <div ref={(r) => this.mainRef = r} id="main" tabIndex="1" className="landing" onKeyPress={this.handleGlobalKeyPress.bind(this)}>
        <h1 className="app-name">xxxplore</h1>
        {questions[questionOrder[questionIndex]].type !== "check"
          ? this.renderInput(inputStyle, questions, answers, questionIndex)
          : this.renderChecks(questions, answers, questionIndex)}
      </div>
    );
  }
}

export default Landing;
