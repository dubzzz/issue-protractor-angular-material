import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-material-protractor';
  selectInputs = [...Array(20)].map((_, i) => `my-select-${i}`);
  selectOptions = ['Volvo', 'Saab', 'Mercedes', 'Audi', 'Ferrari'];
  selectedValues = this.selectInputs.reduce(
    (acc, name) => ({ ...acc, [name]: this.selectOptions[0] }),
    {}
  );

  buttonLabel() {
    return this.selectInputs
      .map(name => this.selectedValues[name])
      .filter(text => text === 'Ferrari').length % 2
      ? 'OFF'
      : 'ON';
  }
}
