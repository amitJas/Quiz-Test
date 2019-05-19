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
   this.subscription = this.api.lastQuestionNotifier.subscribe(() => this.goToLastQuestion())
  }

  goToLastQuestion() {
    this.next = 'DONE'
    this.api.calculateScour()
    this.api.showScor = true
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  goNext() {
    this.api.navigatForward()
  }
  
  goBack(){
    this.api.navigatBackward()
  }
}
