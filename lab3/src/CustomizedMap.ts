import { Student } from "./Student";
import { Internship } from "./Internship";

const iconBase =
    "https://maps.google.com/mapfiles/kml/shapes/";

export class CustomizedMap {

    googleMap: google.maps.Map;

    constructor (googleMap: google.maps.Map) {
        this.googleMap = googleMap;
    }

    addStudentMarker() {

        const student = new Student ();

        const studentLocation = {
            lat: student.location.latitude,
            lng: student.location.longitude,
        }

        const studentContent = student.fullName;

        const studentInfoWindow = new google.maps.InfoWindow({
            content: studentContent,
            ariaLabel: studentContent,
        });

        const studentMarker = new google.maps.Marker({
            position: studentLocation,
            map: this.googleMap,
            icon: {
                url: iconBase + "library_maps.png",
                scaledSize: new google.maps.Size(40, 40),
            },
            title: student.fullName,
        });

        studentMarker.addListener("click", () => {
            studentInfoWindow.open({
              anchor: studentMarker,
              map: this.googleMap,
            });
        })
    }

    addInternshipMarker() {

        const internship = new Internship();

        const intershipLocation = {
            lat: internship.location.latitude,
            lng: internship.location.longitude,
        }

        const internshipContent = `Welcome to ${internship.companyName}'s Intership!`;

        const internshipInfoWindow = new google.maps.InfoWindow({
        content: internshipContent,
        ariaLabel: internshipContent,
        });
    
        const internshipMarker = new google.maps.Marker({
        position: intershipLocation,
        map: this.googleMap,
        icon: {
            url: iconBase + "coffee.png",
            scaledSize: new google.maps.Size(40, 40),
        },
        title: internship.companyName,
        });
    
        internshipMarker.addListener("click", () => {
            internshipInfoWindow.open({
                anchor: internshipMarker,
                map: this.googleMap,
            });
        })
    }
}