import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Softskhub';

  getValue(){
    return "GetFunction Values";
    }

    getEventFun(name:any){
      console.log('keyup function called'+name);
    }

    getEventFunKeyDown(name:any){
      console.log('keydown function called'+name);
    }
}
