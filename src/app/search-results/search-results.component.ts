import { Component, OnInit, OnDestroy } from '@angular/core';

import { LocationService } from './../shared/services/location/location.service';
// import { LocationModel } from './../shared/models/location.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  
  private city: string = '';
  private state: string = '';
  private zip: string = '';
  private hasErrorGettingCityState: boolean = false;

  // Subscription
  private getCurrentLocationFromLatLongSubscription: any;
  

  constructor(private locationService: LocationService) { }

  ngOnInit() {

    this.storeCityStateFromGeoLocation();

  }

  ngOnDestroy() {
    if (this.getCurrentLocationFromLatLongSubscription) {
      this.getCurrentLocationFromLatLongSubscription.unsubscribe();
    }
  }

  storeCityStateFromGeoLocation() {
     if (localStorage.getItem('lat') && localStorage.getItem('long')) {
      var lat = localStorage.getItem('lat');
      var long = localStorage.getItem('long');
    }
    this.getCurrentLocationFromLatLongSubscription = this.locationService.getCityStateFromLatAndLong(lat, long)
      .subscribe(
        currentLocation => this.currentLocationResponse(currentLocation, null),
        err => this.currentLocationResponse(null, err));
  }

  currentLocationResponse(response?: any, error?) {
    if (error) {
      this.hasErrorGettingCityState = true;
      return;
    }
    
    let results = response.results[0].components;

    this.city = results.city;
    this.state = results.state_code;
    this.zip = results.postcode;

    localStorage.setItem('city', this.city);
    localStorage.setItem('state', this.state);
    localStorage.setItem('zip', this.zip);

  }

}
