import { Component} from '@angular/core';
import { IName } from './shared/name.model';
import { NameService } from './shared/name.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angular-test';
  name: string = ''
  names: IName[]  = []
  totalScore: number = 0

  constructor(private nameService: NameService){}

    ngOnInit(){
      this.names = this.nameService.getNames()
      this.getTotalScore()
  
    }
    
    addName(formValues: { name: string; }) {
      let currentIndex = this.names.length + 1 

      let newEntry: IName = {index: currentIndex, name: formValues.name, score: this.getScore(formValues.name, currentIndex) }

      this.names.push()

      this.name = ''

    }

    delete(index: number){

      this.names.splice(index, 1)
      
      this.names.sort()
      
      this.names.forEach( (element) => {
        this.updateItem(element)
      });

      this.getTotalScore()

    }

    updateItem(item: IName){
    
      let index = this.names.indexOf(item);
      let score = this.getScore(item.name, index);
      item.index = index
      item.score = score
      this.names[index] = item
    }

    getScore(value: string, index: number):number {
      let alpha: string = 'abcdefghijklmnopqrstuvwxyz'
      let score: number = 0
      
      for (var i = 0; i < value.length; i++) {
          let v : number = alpha.indexOf(value[i].toLowerCase())
          score += (v + 1)
        }
  
        score = score * (index + 1)
      return score;
  }

    getTotalScore(){
      this.names.forEach( (element) => {
        this.totalScore += element.score
      });
    }

  }
