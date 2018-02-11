import { Component, OnInit } from '@angular/core';
import { Server } from 'selenium-webdriver/safari';

@Component({
  selector: '[app-servers]',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  //   `,  

    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'testserver';
  serverCreated = false;
  // TODO: understand how two element array will repeat and populate on at a time.
  servers = ['Testsever', 'Testserver 2'];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit() {
  }

  onCreateSever(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }


  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }   
}  