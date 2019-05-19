import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../service/api-service.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {

  public next = 'NEXT'
  private subscription: Subscription
 

  constructor(public api: ApiServiceService) { }

  ngOnInit() {
  
  }

  goToLastQuestion() {
    this.next = 'DONE'
    this.api.calculateScore()
    
  }

  goNext() {
    this.api.navigatForward()

    if(this.api.countQuestions == this.api.numOfQuestion )  
    {
      this.next = 'DONE'
      this.api.calculateScore()
    }
    if(this.api.countQuestions > this.api.numOfQuestion )  
      this.api.showScore = true
    
  }
  
  goBack(){
    this.api.navigatBackward()
  }
}
