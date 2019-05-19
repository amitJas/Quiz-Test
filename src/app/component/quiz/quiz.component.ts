import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../service/api-service.service'

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})

export class QuizComponent implements OnInit {

  constructor(public api: ApiServiceService) { }

  ngOnInit() {
    this.api.getQustion(this.api.countQuestions,this.api.FORWARD)
    this.api.checkIfSet()
  }

  setAnswer(index){
    this.api.saveAnsuewr(index)
  }
  
}
