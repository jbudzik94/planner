import { Data } from '@angular/router';
import { Component, OnInit, Input, SimpleChanges, OnChanges, Optional } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],

})
export class CalendarComponent implements OnInit {


  weekNum = 3;
  week: Array<Date> = [];
  tmpWeek: Date; // copy


  constructor() {
    console.log('KONSTRUKTOR KALEDARZ');
    this.tmpWeek = new Date();
    this.getWeekDates(new Date());
  }


  ngOnInit() {

  }



  getWeekDates(date: Date) {
    // const now = new Date();
    const dayOfWeek = date.getDay(); // 0-6
    console.log("day Of week " + dayOfWeek);
    const numDay = date.getDate(); // pobiera dzień miesiąca
    date.setDate(numDay - dayOfWeek + 1);
    for (let i = 1; i <= 7; i++) {
      this.week.push(new Date(date.setDate(numDay - dayOfWeek + i)));
    }
    this.week.forEach(element => {
      console.log('get weeks date: ' + element);
    });

  }

  getNextWeek() {
    //  const component = new CalendarComponent(new Date('01/02/2018'));
    this.week = [];
    const today = new Date();
    this.tmpWeek = new Date(this.tmpWeek.getTime() + 7 * 24 * 60 * 60 * 1000);

    this.getWeekDates(this.tmpWeek);

    const weekList: Array<Date> = [];
    console.log("Kolejne dni tygodniaaaa");
    for (let i = 0; i < 7; i++) {
     // weekList[i] = new Date(today.getTime() + (1 + i) * 24 * 60 * 60 * 1000);
      weekList[i].setDate(today.getDate() + i);
      console.log(weekList[i]);
    }
  }

  getPreviousWeek() {
    //  const component = new CalendarComponent(new Date('01/02/2018'));
    this.week = [];

    this.tmpWeek = new Date(this.tmpWeek.getTime() - 60 * 60 * 24 * 7 * 1000);

    this.getWeekDates(this.tmpWeek);
  }

}
