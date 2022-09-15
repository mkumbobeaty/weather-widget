import { render, screen, waitFor } from '@testing-library/react';
import Weather from '../components/WeatherWidget/weather';
import { currentWeather } from './mock';


describe("weather", () => {
      it('should display weather content', async () => {
        render(<Weather currentWeather={currentWeather} />);
        const content = screen.getByText(`${currentWeather?.main?.humidity}%`)
        await waitFor(() => {
            expect(content).toBeInTheDocument()
        });
    });
})