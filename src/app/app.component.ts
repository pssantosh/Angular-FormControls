import { Component, OnInit }  from '@angular/core';
import { User }       from "./model/user.interface";
import { Theme } from "./model/theme.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  user    : User;

  public genders = [
      { value: 'F', display: 'Female' },
      { value: 'M', display: 'Male' },
  ];

  public roles = [
      { value: 'admin', display: 'Administrator' },
      { value: 'guest', display: 'Guest' },
      { value: 'custom', display: 'Custom' }
  ];

  public themes: Theme[] = [
      { backgroundColor: 'black', fontColor: 'white', display: 'Dark' },
      { backgroundColor: 'white', fontColor: 'black', display: 'Light' },
      { backgroundColor: 'grey', fontColor: 'white', display: 'Sleek' }
  ];

  public topics = [
      { value: 'game', display: 'Gaming' },
      { value: 'tech', display: 'Technology' },
      { value: 'life', display: 'Lifestyle' },
  ];
  
  public toggles = [
      { value: 'toggled', display: 'Toggled' },
      { value: 'untoggled', display: 'UnToggled' },
  ];

  

  ngOnInit() {
    this.user = {
      name:   '',
      gender: this.genders[0].value,
      role:   null,
      theme: this.themes[0],
      isActive: false,
      toggle: this.toggles[1].value,
      topics: [this.topics[1].value]
    }
  }

  constructor (){};

  save(isValid : boolean, userDetails : User){
    console.log(userDetails);
  }
}
