import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from './people.service';
import { Person } from './person';

@Component({
  selector: 'person-details',
  templateUrl: 'app/person-details.component.html'
})

export class PersonDetailsComponent implements OnInit, OnDestroy {
  person: Person;
  sub: any;
  professions: string[] = ['jedi', 'princess', 'bounty hunter'];

  constructor(private peopleService : PeopleService, private route : ActivatedRoute, private router: Router) {
  }

  ngOnInit(){
    this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      this.person = this.peopleService.get(id);
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  gotoPeoplesList(){
    let link = ['/persons'];
    this.router.navigate(link);
  }

  updatePersonDetails(){
    this.peopleService.update(this.person);
    alert(`saved!!! ${JSON.stringify(this.person)}`);
  }
}

