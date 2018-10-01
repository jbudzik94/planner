import { Component, OnInit, Input, Output } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../models/task';
import { ModalFormComponent } from '../modal-form/modal-form.component';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(private tasksService: TasksService) {

  }

  @Input()
  taskDate: string;

  taskName: string;
  taskDesc: string;
  taskImportance: string;
  modalForm = new ModalFormComponent();

  ngOnInit() {
  }


  addTask() {
    if (this.taskName !== undefined && this.taskName !== '') {
      if (this.taskImportance === '' || this.taskImportance === undefined) {
        this.taskImportance = 'Niski';
      }
      this.tasksService.addTask(this.taskDate, this.taskName, this.taskDesc, this.taskImportance);
      console.log(this.taskName + ' ' + this.taskDesc);
      this.taskName = '';

    }

  }

}
