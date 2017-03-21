import { Component, OnInit } from '@angular/core';
import { Person } from './person';
import { PeopleService } from './people.service';

@Component({
  selector: 'people-list',
  template: `
  <ul>
    <li *ngFor="let person of people">
      <a href="#" [routerLink]="['/persons', person.id]"> {{person.name}} </a>
    </li>
  </ul>
  `
})

export class PeopleListComponent implements OnInit {
  people: Person[] = [];

  constructor(private peopleService : PeopleService){
  }

  ngOnInit(){
    this.people = this.peopleService.getAll();
  }
}

