export interface PlacesResponse {
    type: string;
    query: string[];
    features: Feature[];
    attribution: string;
}

export interface Feature {
    id: string;
    type: string;
    place_type: string[];
    relevance: number;
    properties: Properties;
    text_es: string;
    place_name_es: string;
    text: string;
    place_name: string;
    center: number[];
    geometry: Geometry;
    context: Context[];
    matching_text?: string;
    matching_place_name?: string;
}

export interface Context {
    id: string;
    text_es: string;
    text: string;
    wikidata?: string;
    language_es?: Language;
    language?: Language;
    short_code?: ShortCode;
}

export enum Language {
    Es = 'es',
}

export enum ShortCode {
    Cl = 'cl',
    ClRm = 'CL-RM',
}

export interface Geometry {
    type: string;
    coordinates: number[];
}

export interface Properties {
    accuracy: string;
}

export interface PlaceDetails {
    name: string;
    coordinates: number[];
}
