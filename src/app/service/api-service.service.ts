import { Injectable, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private correctNum   // random index for the correct answer
  public questions : any   
  public answers : any
  public countQuestions =  0
  public question = null
  public answerArr = []
  public numOfQuestion =  0;
  public done = false
  public score = 0
  public countCorrectAnswer = 0
  public userAnswer = null
  public FORWARD = true; BACKWARD = false
  public showScore = false
 
  constructor() { }

  getQustion(index,direction){

    if(index < this.numOfQuestion + 1 ){
      this.correctNum = Math.floor(Math.random() * 3)  
      this.question = this.questions[index].question
      this.answers = this.questions[index].incorrect_answers

      if(direction){ //if we are going forward 
          if(!this.answers.includes(this.questions[index].correct_answer))
            this.answers.splice(this.correctNum,0,this.questions[index].correct_answer)
        
      }
    }
  }

  navigatBackward(){
    this.countQuestions--
    this.getQustion(this.countQuestions,this.BACKWARD)
    this.checkIfSet()
  }
 

  navigatForward(){
    this.countQuestions++
    this.getQustion(this.countQuestions,this.FORWARD)
    this.checkIfSet()
  }

  checkIfSet(){
    if(this.answerArr[this.countQuestions] )
        this.userAnswer = this.answerArr[this.countQuestions].userAnsewr   
    else
      this.userAnswer = null
  }

  saveAnsuewr(radioNum){

    //If we changed an answer => remove
    this.answerArr = this.answerArr.filter(item => item.questionNum != this.countQuestions) 

    this.answerArr.push({
      questionNum: this.countQuestions,
      userAnsewr: radioNum,
      correctAnswer: this.correctNum
    })

    if(radioNum == this.correctNum ){
      this.countCorrectAnswer++
    }
    console.log(this.answerArr)
  }

  calculateScore(){
    this.score = Math.round(this.countCorrectAnswer/this.numOfQuestion + 1 ) * 100 ; 
  }
  
}
