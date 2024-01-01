import axios from 'axios';

const access_token =
    'pk.eyJ1IjoiaGlldTc5MTE1IiwiYSI6ImNscXVvamFidjVjazgyaXB3N3J4NGUzdGUifQ.ZJdurJCgykTjAYAT8x-Cnw';

const reverseLookupApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places/',
    params: {
        access_token: access_token,
        limit: 1,
    },
});

export default reverseLookupApi;
