import { Component } from '@angular/core';
import { TasksService } from './services/tasks.service';
import { Moment } from 'moment/moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

constructor(private taskService: TasksService){

}


}
