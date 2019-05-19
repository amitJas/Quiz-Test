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
    
    fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple').then( res => {
      return res.json()
    }).then( lode => {
      this.api.questions = lode.results
      this.api.numOfQustion = lode.results.length -1
    }).then( () => {
      setTimeout(() => {
        this.finish = true
      }, 500);
    })
  }
  
 
}
