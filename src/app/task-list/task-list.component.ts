import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../models/task';
import { TasksService } from '../services/tasks.service';
import { HttpService } from '../services/http.service';
import { ModalFormComponent } from '../modal-form/modal-form.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  taskList: Array<Task> = [];
  @Input()
  day: Date;

  newName: string;
  newDescription: string;
  newImportance: string;


  constructor(private tasksService: TasksService) {
  }

  ngOnInit() {
    // console.log('task.list day z oninit' + this.day);


    this.tasksService.getTasksList().subscribe(task => {
      // this.taskList = task.filter( t => t.date === this.day.toLocaleString());
      this.taskList = task.filter(t => t.date.startsWith(this.day.toLocaleString().substring(0, 10)));
      // task.forEach(t => console.log('data z t.date: ' + t.date + t.date.startsWith(this.day.toLocaleString().substring(0, 10))));
      task.forEach(t => {
        this.newName = t.name;
        this.newDescription = t.description;
        this.newImportance = t.importance;
      });
    });
    console.log('task.list day z on init ' + this.day);
  }

  doTask(task: Task) {

    this.tasksService.doTask(task);
  }

  deleteTask(task: Task) {
    this.tasksService.deleteTask(task);

  }

  updateTask(task: Task) {

      this.tasksService.updateTask(task);

  }

  setColor(task: Task) {
    if(task.completed === true){
      return 'taskName completed';
    }
    if (task.importance === 'Wysoki') {
      return 'taskName wysoki';
    }
    if (task.importance === 'Średni') {
      return 'taskName sredni';
    }
    if (task.importance === 'Niski') {
      return 'taskName niski';
    }


  }



}
