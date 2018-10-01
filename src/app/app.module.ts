import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';

import { TaskListComponent } from './task-list/task-list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TasksService } from './services/tasks.service';
import { CalendarService } from './services/calendar.service';
import { ModalFormComponent } from './modal-form/modal-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http.service';
import { DescriptionDirective } from './shares/description.directive';


@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    TaskListComponent,
    AddTaskComponent,
    ModalFormComponent,
    DescriptionDirective,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TasksService, CalendarService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
