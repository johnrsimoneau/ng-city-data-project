export interface LocationModel {
    results: Components[]
}

export interface Components {
    city?: string,
    country_code?: string,
    county?: string,
    state?: string,
    state_code?: string,
    post_code?: string
}

export const initLocation: LocationModel =  {
    results: [
        {
            city: '',
            country_code: '',
            county: '',
            state: '',
            state_code: '',
            post_code: ''
        }
    ]
}