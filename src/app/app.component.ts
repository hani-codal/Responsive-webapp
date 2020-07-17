import { Component } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Responsive-Design';
  options: Options = {
    floor: 1000,
    ceil: 10000
  };
  isTour=true;
  isHotel=false;
  isFlight=false;
  onTour(){
    this.isTour=true;
    this.isHotel=false;
    this.isFlight=false;
  }

  onHotel(){
    this.isHotel=true;
    this.isFlight=false;
    this.isTour=false
  }
  onFlight(){
    this.isHotel=false  ;
    this.isFlight=true;
    this.isTour=false
  }
  onDestination(){
    window.scrollTo({

      behavior: 'smooth'
    });
  }

}
