import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: '<h1>{{title}}</h1><h2>{{hero}} details!</h2>'
})
export class AppComponent {
	title: string = 'Tour of Heroes';
	hero: string = 'Windstorm'
}