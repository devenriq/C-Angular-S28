import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numb1:number = 0
  numb2:number=0


  options=[
    {
      name:'+',
      value: '+',
      selected:true
    },
    {
      name:'-',
      value: '-'
    },
    {
      name:'x',
      value: 'x'
    },
    {
      name:'/',
      value: '/'
    }
  ]

  selectedOption=this.options[0].value

  operationResult:number=0

  calcular(selectedOption:string){
    this.selectedOption= selectedOption

    switch (selectedOption) {
      case '+':
          this.operationResult = Number(this.numb1) + Number(this.numb2);
          break;
      case '-':
          this.operationResult = Number(this.numb1) - Number(this.numb2);
          break;
      case 'x':
          this.operationResult = Number(this.numb1) * Number(this.numb2);
          break;
      case '/':
          this.operationResult = Number(this.numb1) / Number(this.numb2);
          break;
  }


  console.log(selectedOption)
  console.log(this.operationResult)

  }

}
