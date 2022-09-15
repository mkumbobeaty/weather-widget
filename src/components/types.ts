export type WeatherResponse = {
    city: string
    coord: {
        lon: number;
        lat: number;
    }
    weather: {
        id: number;
        main: string;
        description: string;
        icon: string;
    }[];
    main: {
        temp: number ;
        feels_like: number ;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
        sea_level: number;
        grnd_level: number;
    };
    wind: {
        speed: number;
        deg: number;
        gust: number;
    }
    name: string;
    sys: {
        country: string;
        sunrise: number;
        sunset: number;
    }
    dt: number;
    visibility: number;
};