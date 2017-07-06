import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { URLS } from './../../urls';
import { PRIVATEAPIKEYS } from './../../../private-api-keys';
import { LocationModel } from './../../models/location.model';

@Injectable()
export class LocationService {

    private cityStateFromLatLong: string = URLS.getCityStateCountry;

    constructor(private http: Http) { }

    getCityStateFromLatAndLong(lat: string, long: string): Observable<any> {
        

        let modifiedCityStateFromLatLongUrl: string = this.cityStateFromLatLong
                                                 .replace('{geoCoderKey}', PRIVATEAPIKEYS.geoCoderOpenCageData)
                                                 .replace('{lat}', lat)
                                                 .replace('{long}', long);


        return this.http.get(modifiedCityStateFromLatLongUrl)
            .map((response: Response) => <any>response.json())
            .catch(this.handleError)
    }

    private handleError(error: Response) {
        return Observable.throw(error.json().error || "Server Error");
    }
}