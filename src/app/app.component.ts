import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  password = ''
  length = 0
  includeLetters = false
  includeNumbers = false
  includeSymbols = false

  onButtonClick() {
    this.password = 'MY PASSWORD!!!'
    console.log(`
    we are about to make o password with :
     letters ${this.includeLetters} ,
     numbers ${this.includeNumbers} ,
     symbols ${this.includeSymbols}
    `)
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols
  }

  onChangeLength(value: string) {
    const parsedValue = parseInt(value)

    if (!isNaN(parsedValue)) {
      this.length = parsedValue
    }
  }

}
