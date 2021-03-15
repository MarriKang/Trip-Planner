import mapboxgl from "mapbox-gl"
export function newMarker(markerType, coordinates, map) {
    markerType = markerType.toLowerCase();
    const markerDomEl = document.createElement("div")
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";

    if (markerType === "restaurant") {
        markerDomEl.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
    } else if (markerType === "hotel") {
        markerDomEl.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
    } else {
        markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
    }

    new mapboxgl.Marker(markerDomEl).setLngLat(coordinates).addTo(map);
}