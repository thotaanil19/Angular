import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-runner',
  templateUrl: './job-runner.component.html',
  styleUrls: ['./job-runner.component.css']
})
export class JobRunnerComponent implements OnInit {

  constructor() { }      

  ngOnInit() {
  }
   
  jobs : Job[] = [
  		{"id" : "1", "name" : "job 1"},
  		{"id" : "2", "name" : "job 2"},
  		{"id" : "3", "name" : "job 3"},
  		{"id" : "4", "name" : "job 4"},
  		{"id" : "5", "name" : "job 5"}
  ];

   jobs1 : Job[] = [    
  		{"id" : "1", "name" : "job 1"},
  		{"id" : "2", "name" : "job 2"},
  		{"id" : "3", "name" : "job 3"},
  		{"id" : "4", "name" : "job 4"},
  		{"id" : "5", "name" : "job 5"}
  ];

   jobs2 : Job[] = [];


addJob(e : any) : void {
 	console.log(e.target.value);
 	this.jobs2.push(this.jobs[e.target.value -1]);

var index;
	for(var i =0; i< this.jobs1.length; i++) {
	if (this.jobs1[i].id === e.target.value) {
	index = i;
		break;
	}
	}

 	this.jobs1.splice(index, 1);
 	console.log(index);


}

removeJob(e : any) : void  {
	console.log(e.target.value);

	this.jobs1.push(this.jobs[e.target.value -1]);

var index;
	for(var i =0; i< this.jobs2.length; i++) {
	if (this.jobs2[i].id === e.target.value) {
	index = i;
		break;
	}
	}

 	this.jobs2.splice(index, 1);
}

}




class Job {
	id: string;
	name: string;
}
