import axios from 'axios';

const access_token =
    'pk.eyJ1IjoiaGlldTc5MTE1IiwiYSI6ImNscXVvamFidjVjazgyaXB3N3J4NGUzdGUifQ.ZJdurJCgykTjAYAT8x-Cnw';

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: access_token,
    },
});

export default directionsApi;
