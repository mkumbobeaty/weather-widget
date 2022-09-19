import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import ThemeMode from '../components/Theme';

const setup = () => render(<ThemeMode />);

describe("Theme mode", () => {

    afterEach(() => {
        cleanup()
    })

    it('renders theme mode', () => {
        setup()
        const inputElement = screen.getByRole("checkbox") as HTMLInputElement;
        expect(inputElement).toBeInTheDocument();
    });

    it('renders with light mode default', () => {
        setup()
        const toggle_theme = screen.getByTestId('toggle-theme-input')
        expect(toggle_theme).toBeInTheDocument()
        const mockTheme = "light";
        window.localStorage.setItem("data-theme", mockTheme);
        expect(window.localStorage.getItem("data-theme")).toBe("light");
    });

    it("should toggles to dark mode", () => {
        setup()
        const inputElement = screen.getByRole("checkbox") as HTMLInputElement;
        expect(inputElement.checked).toEqual(false);
        fireEvent.click(inputElement);
        expect(inputElement.checked).toEqual(true);
        expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
    });

})