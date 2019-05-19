import { Component } from '@angular/core';
import { ApiServiceService } from './service/api-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  public finish = false
 
  constructor(public api: ApiServiceService) { }

  ngOnInit() {
    
    //get the questions from free API trivia
    fetch('https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple').then( res => {
      return res.json()
    }).then( loader => {
      this.api.questions = loader.results
      this.api.numOfQuestion = loader.results.length -1
    }).then( () => {
      setTimeout(() => {
        this.finish = true
      }, 500);
    })
  }
  
 
}
