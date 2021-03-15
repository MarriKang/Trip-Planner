import mapboxgl from "mapbox-gl";
import { newMarker } from "./marker.js";

mapboxgl.accessToken = 'pk.eyJ1IjoibWFycmlrYW5nIiwiYSI6ImNrbWFyM2pmMzF1Z3Iyb3FyaXBpNjVwMjMifQ.zHrSg71UHz4_aRo-0RQEsA';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

newMarker("activity", [-74.009151, 40.705086], map);