export class City {
    constructor(
        public name: string, 
        public lat: string,
        public long: string,
        public zip: number
    ) {}
}

export const initialCity: City = {
    name: '',
    lat: '',
    long: '',
    zip: 0
}