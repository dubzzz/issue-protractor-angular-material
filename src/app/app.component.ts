import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { HttpClient } from '@angular/common/http';

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

  constructor(
    readonly snackBar: MatSnackBar,
    readonly httpClient: HttpClient
  ) {}

  buttonLabel() {
    return this.selectInputs
      .map(name => this.selectedValues[name])
      .filter(text => text === 'Ferrari').length % 2
      ? 'OFF'
      : 'ON';
  }

  openToast() {
    this.snackBar.open('This is a message from snackbar', 'close', {
      duration: -1,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

  async openAsyncToast() {
    const r: any = await this.httpClient
      .get(`https://api.ipify.org?format=json`)
      .toPromise();
    this.snackBar.open(`Your ip is ${r.ip}`, 'close', {
      duration: -1,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }
}
