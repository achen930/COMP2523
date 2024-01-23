import { faker } from "@faker-js/faker";

export class Internship {
    private _companyName: string = faker.company.name();
    private _location: { latitude: number; longitude: number } = {
        latitude: faker.location.latitude( {max: 59, min: 49} ),
        longitude: faker.location.longitude( {max: -120, min: -129} )
    }

    get companyName(): string {
        return this._companyName;
    }

    get location(): { latitude: number; longitude: number} {
        return this._location;
    }
}