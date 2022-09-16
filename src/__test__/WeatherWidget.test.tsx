import { render, screen } from '@testing-library/react';
import WeatherWidget from '../components/WeatherWidget';

describe("weather-widget", () => {
    const selectedCity = null

    it('Render the title for the application', () => {
        render(<WeatherWidget selectedCity={selectedCity} />);
        const header = screen.getByText(/Current weather/i);
        expect(header).toBeInTheDocument()
    });

    it('should initial show loading spinner', () => {
        render(<WeatherWidget selectedCity={selectedCity} />);
        const content = screen.queryByTestId("weatherContent")
        expect(content).not.toBeInTheDocument()
    });

    
})