import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  getUsersLocation: boolean = false;
  hasErrorGettingGeoLocation: boolean = false;

  // Styling
  marginTop: number;
  isStandAloneSearchPage: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { 
  }

  ngOnInit() {

    if (this.router.url === '/search') {
      this.marginTop = 20;
      this.isStandAloneSearchPage = true;
    }

    if ("geolocation" in navigator) {
      this.getUsersLocation = true;
    } else {
      this.getUsersLocation = false;
    }
  }

  storeCityName(userInput) {
    localStorage.setItem('searchTerm', userInput);
    // this.router.navigate(['../search-results']);
  }

  private geoLocationSuccess(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    let altitude = position.coords.altitude;

    localStorage.setItem('lat', lat);
    localStorage.setItem('long', long);
    localStorage.setItem('altitude', altitude);
    this.router.navigate(['search-results/wikipedia']);
  }

  private geoLocationError() {
    this.hasErrorGettingGeoLocation = true;
  }

  getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(
      this.geoLocationSuccess.bind(this), 
      this.geoLocationError.bind(this));
  }
}
