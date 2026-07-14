import { Component, signal } from '@angular/core';
import { Counter } from './components/counter/counter';
import { Liveclock } from './components/liveclock/liveclock';

@Component({
  selector: 'app-root',
  imports: [Counter, Liveclock],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
