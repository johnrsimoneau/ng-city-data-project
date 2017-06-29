import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  getUsersLocation: boolean = false;
  hasErrorGettingGeoLocation: boolean = false;


  constructor() { }

  ngOnInit() {
    if ("geolocation" in navigator) {
      this.getUsersLocation = true;
    } else {
      this.getUsersLocation = false;
    }
  }

  storeCityName(userInput) {
    localStorage.setItem('searchTerm', userInput);
  }

  private geoLocationSuccess(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    let altitude = position.coords.altitude;

    localStorage.setItem('lat', lat);
    localStorage.setItem('long', long);
    localStorage.setItem('altitude', altitude);
  }

  private geoLocationError() {
    
  }

  getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(this.geoLocationSuccess, this.geoLocationError);
  }


}
