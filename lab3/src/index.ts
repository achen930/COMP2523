import { CustomizedMap } from "./CustomizedMap";

function initMap(): void {

  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 4,
      center: { lat: 49, lng: -123 },
    }
  );

  const customizedMap = new CustomizedMap (map);
  
  customizedMap.addStudentMarker();

  customizedMap.addInternshipMarker();

}

export {};
declare global {
  interface Window {
    initMap: () => void;
  }
}

initMap();