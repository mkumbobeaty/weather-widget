import { render, screen, waitFor } from '@testing-library/react';
import WeatherWidget from '../components/WeatherWidget';

describe("weather-widget", () => {
    it('Render the title for the application', () => {
        const selectedCity = null
        render(<WeatherWidget selectedCity={selectedCity} />);
        const header = screen.getByText(/Current weather/i);
        expect(header).toBeInTheDocument()
    });

    it('should initial show loading spinner', () => {
        const selectedCity = null
        render(<WeatherWidget selectedCity={selectedCity} />);
        const content = screen.queryByTestId("weatherContent")
        expect(content).not.toBeInTheDocument()
    });
})