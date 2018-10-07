import { Component, ViewChild } from '@angular/core';
import {CalendarComponent} from 'ap-angular-fullcalendar';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @ViewChild(CalendarComponent) myCalendar: CalendarComponent;
 

  calendarOptions: Object = {
    height: 'parent',
    fixedWeekCount: true ,
    header:{
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay,listMonth'
    }, 
    defaultDate: '2018-10-01',
    editable: true,
    eventLimit: true,
    // selectable:true, 
    editable:true,
    // allow "more" link when too many events
    events: [
      {
        title: 'All Day Event',
        start: '2018-10-12T16:00:00',
        end: '2018-10-30T16:00:00'
        
       
      },
    

      {
        title: 'Long Event',
        start: '2018-10-10',
        end: '2018-10-30'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2018-10-12T16:00:00'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2016-09-16T16:00:00'
      },
      {
        title: 'Conference',
        start: '2016-09-11',
        end: '2016-09-13'
      },
      {
        title: 'Meeting',
        start: '2018-09-10T10:30:00',
        end: '2018-09-10T12:30:00'
      },
      {
        title: 'Lunch',
        start: '2016-09-12T12:00:00'
      },
      {
        title: 'Meeting',
        start: '2016-09-12T14:30:00'
      },
      {
        title: 'Happy Hour',
        start: '2016-09-12T17:30:00'
      },
      {
        title: 'Dinner',
        start: '2016-09-12T20:00:00'
      },
      {
        title: 'Birthday Party',
        start: '2016-09-13T07:00:00'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2016-09-28'
      }
    ],
    select: function(start,  end)
    {
      alert(start,end);
    },
  };

  // changeCalendarView(view) {
  //   console.log(view);
  //   this.myCalendar.fullCalendar('changeView', view);
  // }
  onCalendarInit(initialized: boolean) {
    console.log('Calendar initialized');
  }
}
