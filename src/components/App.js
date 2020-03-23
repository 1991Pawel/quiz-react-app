import React, { Component } from "react";
import questions from '../data';
import styled from 'styled-components';
import QuestionPanel from '../components/QuestionPanel/QuestionPanel';
import ScoreBoard from '../components/ScoreBoard/ScoreBoard';


const Wrapper = styled.section`
  margin-top:40%;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  min-width:500px;
  @media screen and (max-width: 500px){
    margin-top:20px;
    min-width:320px;
  
  }
`;

class App extends Component {
  state = {
    questionBank: [...questions],
    currentQuestionIndex: 0,
    score: 0,
    historyAnswers: [],
    questionNumber: [...questions].length,
    quizStatus: true,
    questionTime: 10,
  }

  questionClickHandler = (question) => {
    clearInterval(this.timer);
    this.checkAnswer(question);
    this.incrementIndexHandler();
    this.setState({
      questionTime: 10,
    })
    if (this.state.questionNumber !== this.state.currentQuestionIndex + 1) {
      this.timer = setInterval(this.tick, 1000);
    }

  }

  tick = () => {
    const { questionTime } = this.state
    if (questionTime > 0) {
      this.setState({ questionTime: this.state.questionTime - 1 })
    } else {

      clearInterval(this.timer);
      this.timer = setInterval(this.tick, 1000);
      this.incrementIndexHandler();
      this.setState({
        questionTime: 10,
      })
    }
  }

  componentDidMount() {
    if (this.state.quizStatus) {
      this.timer = setInterval(this.tick, 1000);
    }
  }

  checkAnswer = (question) => {
    const { questionBank, currentQuestionIndex } = this.state;
    const correct = questionBank[currentQuestionIndex].correct
    if (question === correct) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        historyAnswers: [...prevState.historyAnswers, true]
      }));
    } else {
      this.setState(prevState => ({
        historyAnswers: [...prevState.historyAnswers, false]
      }));
    }
  }

  incrementIndexHandler = () => {
    const { currentQuestionIndex, questionNumber } = this.state;
    if (currentQuestionIndex + 1 === questionNumber) {
      this.checkAnswer();
      setTimeout(() => { this.changeQuizStatus() }, 600);
      clearInterval(this.timer);
      return
    }

    if (this.state.questionTime === 0) {
      this.setState(prevState => ({
        currentQuestionIndex: prevState.currentQuestionIndex + 1,
        historyAnswers: [...prevState.historyAnswers, false],
      }));
    } else {
      this.setState(prevState => ({
        currentQuestionIndex: prevState.currentQuestionIndex + 1,
      }));
    }

  }

  changeQuizStatus = () => {
    this.setState({
      quizStatus: false,
    })
  }

  resetQuiz = () => {
    this.setState({
      questionBank: [...questions],
      currentQuestionIndex: 0,
      score: 0,
      historyAnswers: [],
      questionNumber: [...questions].length,
      quizStatus: true,
      questionTime: 10,
    })
    clearInterval(this.timer);
    this.timer = setInterval(this.tick, 1000);
  }

  render() {
    const items = this.state

    return (
      <>
        <Wrapper>
          {this.state.quizStatus ? <QuestionPanel fn={this.questionClickHandler} {...items} /> : <ScoreBoard props={this.state} fn={this.resetQuiz} />}
        </Wrapper >
      </>
    );
  }

};




export default App;
