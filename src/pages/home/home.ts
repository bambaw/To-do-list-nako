import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	todoList: string[] = [];
    todo: string;
	
  constructor(public navCtrl: NavController, public dataService: DataProvider) {
	this.dataService.getData().then((todos) => {
		if(todos) {
			this.todoList = todos;
		}
	});
  }

	add() {
		if(this.todo == "") {
			null;
		}
		else {
			this.todoList.push(this.todo);
			this.dataService.save(this.todoList);
			this.todo = "";
		}
    }
	
	delete(item) {
        var index = this.todoList.indexOf(item, 0);
        if (index > -1) {
            this.todoList.splice(index, 1);
			this.dataService.save(this.todoList);
        }
    }
	
	edit(item) {
		if(this.todo == "") {
			null;
		}
		else{
			var index = this.todoList.indexOf(item, 0);
			if (index > -1 && this.todo != "") {
				this.todoList[index] = this.todo;
				this.dataService.save(this.todoList);
				this.todo = "";
			}
		}
	}
	
    
}
