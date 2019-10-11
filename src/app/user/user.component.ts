import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
user={};
username;
  constructor(private route: ActivatedRoute,private http: HttpClient) { }

ngOnInit() {  
  this.route.params.subscribe(params => {
    // get the username out of the route params
    this.username = params['login'];
  })
     this.getuser(this.username);
  }  
getuser(username: string){
  this.http.get(`https://api.github.com/users/${username}`).subscribe(
      data => {
        this.user=data;
        console.log(this.user);
      },
      err => {
        console.log("Error occured.")
      }
    );
}

}
