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



// Update the count down every 1 second
 x = setInterval(function() {
 var countDownDate = (new Date("Jan 5, 2021 15:37:25").getTime());

  // Get today's date and time
  var now =( new Date().getTime());
  console.log(now,"now");
  // Find the distance between now and the count down date
  var distance = (countDownDate - now);
  console.log(countDownDate,"dis")
  // Time calculations for days, hours, minutes and seconds
  var days =Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  console.log(days)
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d : " + hours + "h : "
  + minutes + "m : " + seconds + "s ";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(this.x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

}
