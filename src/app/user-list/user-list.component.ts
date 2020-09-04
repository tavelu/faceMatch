import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

	userData = [{
		id : 101,
		name : 'vadivel',
		appointmentTime : '9.00 AM',
		reason : 'Tooth Pain',
		medicalHistory : '',
		profilePic: 'vadivel.jpg',
		status : 'completed'
	},
	{
		id: 102,
		name : 'vadivel tamilarasan',
		appointmentTime : '10.30 AM',
		reason : 'Broken Pain',
		medicalHistory : '',
		profilePic: 'vadivel.jpg',
		status : 'completed'
	},
	{
		id:103,
		name : 'Abhirami',
		appointmentTime : '10.40 AM',
		reason : 'Tooth Pain',
		medicalHistory : '',
		profilePic: 'vadivel.jpg',
		status : 'completed'
	},
	{
		id:104,	
		name : 'Sreenivas',
		appointmentTime : '10.00 AM',
		reason : 'Tooth Pain',
		medicalHistory : '',
		profilePic: 'vadivel.jpg',
		status : 'completed'
	}]

  constructor() { }

  ngOnInit() {
  }

}
