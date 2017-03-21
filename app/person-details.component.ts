import { Component, Input } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'person-details',
  template: `
  <section *ngIf="person">
    <h2>{{person.name}}</h2>
    <h3>Description</h3>
    <p>
      {{person.name}} weights {{person.weight}} and is {{person.height}} cms tall.
    </p>
  </section>`
})

export class PersonDetailsComponent{
  @Input() person: Person;
}

