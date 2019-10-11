import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 usersList:any = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {  
     this.http.get('https://api.github.com/users').subscribe(data =>this.usersList=data);
     console.log(this.usersList);
  }
  }


