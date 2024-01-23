import { faker } from "@faker-js/faker";

export class Student {
    private _firstName: string = faker.person.firstName();
    private _lastName: string = faker.person.lastName();
    private _location: { latitude: number; longitude: number } = {
        latitude: faker.location.latitude( {max: 59, min: 49} ),
        longitude: faker.location.longitude( {max: -120, min: -129} )
    }

    get fullName(): string {
        return `${this._firstName} ${this._lastName}`;
    }

    get location(): { latitude: number; longitude: number} {
        return this._location;
    }
}