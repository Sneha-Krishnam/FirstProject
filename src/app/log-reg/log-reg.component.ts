import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-log-reg',
  templateUrl: './log-reg.component.html',
  styleUrls: ['./log-reg.component.scss']
})
export class LogRegComponent implements OnInit {
  public tabs: any = [];
  public currentTab: any;
  public login: any;
  public signup: any;
  public users: any = [];
  public usersInfo: any = [];
  public showError: boolean = false;
  public errorMessage: any;
 

  constructor(private router: Router) { }

  ngOnInit() {
this.tabs = [
      {
        name: "LOGIN",
        value: "login"
      },
      {
        name: "SIGNUP",
        value: "signup"
      }
    ];
    if (localStorage.getItem("users") != "") {
      let data = localStorage.getItem("users");
      let users = JSON.parse(data);
      if (users) {
        this.users = JSON.stringify(users);
      }
    }

    localStorage.setItem("users", this.users);
    this.selectTab(this.tabs[0].value);
    this.setModels();
  }

  selectTab(tab) {
    this.currentTab = tab;
  }

  setModels() {
    this.login = {
      username: "",
      password: ""
    };
    this.signup = {
     
      username: "",
      password: ""
    };
  }

  UserLogin() {
    let users = localStorage.getItem("users");
    this.usersInfo = users ? JSON.parse(users) : [];
    this.usersInfo &&
      this.usersInfo.forEach(user => {
        if (
          user.username == this.login.username &&
          user.password.trim() == this.login.password.trim()
        ) {
          this.router.navigate(["./map"], 
          {
            queryParams: {
              user: user.username
            }
          });
          this.showError = false;
          this.setModels();
        } else {
          this.showError = true;
          this.errorMessage = "Invalid Username and Password";
        }
      });
  }

  UserSignup() {
    if (
      
      this.signup.username != "" &&
      this.signup.password != ""
    ) {
      this.users.push(this.signup);
      localStorage["users"] = JSON.stringify(this.users);
      this.selectTab(this.tabs[0].value);
      this.showError = false;
      this.setModels();
    } else  if(
      this.signup.username == ""
    ){
      this.showError = true;
      this.errorMessage = "Enter the username";
    }
    else  if(
      this.signup.password == ""
    ){
      this.showError = true;
      this.errorMessage = "Enter the password";
    }
    else
    {
      this.showError = true;
      this.errorMessage = "Enter the details";
    }
  }
}
