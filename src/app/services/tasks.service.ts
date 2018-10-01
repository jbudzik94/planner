import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Task } from '../models/task';
import { CalendarService } from './calendar.service';
import { HttpService } from './http.service';

@Injectable()
export class TasksService implements OnInit {

  private tasksListObs = new BehaviorSubject<Array<Task>>([]);

  task: Task;
  ngOnInit(): void {}



  constructor(private http: HttpService) {

    /*const list: Array<Task> = [
      new Task( 'zmyć naczyniaaaaaaaaaaaa', new Date().toLocaleString(), 'ważne', false),
      new Task( 'zrobić pranie', new Date().toLocaleString(), 'ważne', false )
    ];*/


    this.http.getTasks().subscribe( t => {
      this.tasksListObs.next(t);
    });
    /*this.tasksListObs.next(list);
    console.log('tasklistObservable getValue() ');
     this.tasksListObs.subscribe( t => console.log(t));
    console.log('KONSTRUKTOR TASK SERVICE get task()');
    //this.http.getTasks();*/

  }

  addTask(day: string, name: string, description: string, importance: string) {
    const list = this.tasksListObs.getValue();
   // const id = list.find( t => Math.max.apply(t.id) ).id;

    list.push(new Task( name, day, importance, false, description));
    this.tasksListObs.next(list);
    this.http.saveTasks(this.tasksListObs.getValue());

  }

  getTasksList() {
    return this.tasksListObs.asObservable();
  }

  doTask(task: Task) {
    //const list = this.tasksListObs.getValue();
    /*this.tasksListObs.subscribe(t => {
      this.task = t.find(f => f.id === task.id);
    });*/
    this.tasksListObs.getValue().find(t => t === task).completed = true;
    this.http.saveTasks(this.tasksListObs.getValue());
   // this.task.completed = true;
   /// this.tasksListObs.next(list);
  }

  deleteTask(task: Task) {
    const list = this.tasksListObs.getValue().filter(e => e !== task);
    this.tasksListObs.next(list);
    this.http.saveTasks(this.tasksListObs.getValue());

  }

  updateTask(task: Task) {
    // const t = this.tasksListObs.getValue().find(e => e._id === task._id);
    const t = this.tasksListObs.getValue().find(e => e === task);
    t.name = task.name;
    t.description = task.description;
    t.importance = task.importance;
   // this.tasksListObs.next(list);
    this.http.saveTasks(this.tasksListObs.getValue());
  }

  saveTaskDb(){
    this.http.saveTasks(this.tasksListObs.getValue());
  }


}
