import React, { Component } from "react";
import { data } from '../data'
import styled from 'styled-components'
import QuestionPanel from '../components/QuestionPanel/QuestionPanel'

const Wrapper = styled.section`
  margin-top:40%;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  min-width:500px;
`;



class App extends Component {
  state = {
    questionBank: [...data],
    currentQuestionIndex: 0,
    score: 0,
    questionNumber: [...data].length,
    quizStatus: true,
    questionTime: 10,
  }

  questionClickHandler = (question) => {
    this.resetTimerCountDown();
    this.checkAnswer(question);
    this.incrementIndexHandler();
    // odpala sie ostatni raz , chyba trzeba to jakos usunac 
    this.interval = setInterval(() => this.setTimeCountDown(), 1000);
  }

  checkAnswer = (question) => {
    const { questionBank, currentQuestionIndex } = this.state;
    const correct = questionBank[currentQuestionIndex].correct
    if (question === correct) {
      this.setState(prevState => ({
        score: prevState.score + 1,
      }));
    }
  }

  incrementIndexHandler = () => {
    const { currentQuestionIndex, questionNumber } = this.state;
    if (currentQuestionIndex + 1 === questionNumber) {
      this.changeQuizStatus()
      return
    }
    this.setState({
      currentQuestionIndex: this.state.currentQuestionIndex + 1,
    })
  }

  changeQuizStatus = () => {
    this.setState({
      quizStatus: false,
    })

  }


  componentDidMount() {
    if (this.state.quizStatus) {
      this.interval = setInterval(() => this.setTimeCountDown(), 1000);
    }
  }

  setTimeCountDown = () => {
    const { questionTime } = this.state
    if (questionTime > 0) {
      this.setState(prevState => ({
        questionTime: prevState.questionTime - 1,
      }));
    } else {
      this.incrementIndexHandler()
      this.resetTimerCountDown();
    }
  }

  resetTimerCountDown = () => {
    this.setState({
      questionTime: 10,
    })
    clearInterval(this.interval)
  }







  render() {
    const items = this.state



    return (
      <>
        <Wrapper>
          {this.state.quizStatus && <QuestionPanel fn={this.questionClickHandler} {...items} />}
        </Wrapper >
      </>
    );
  }


};




export default App;
