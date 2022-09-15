import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchCity from '../components/SearchInput';


describe("search input", () => {

    beforeEach(() => {
        const onSearchChange = jest.fn()
        // eslint-disable-next-line testing-library/no-render-in-setup
        render(<SearchCity onSearchChange={onSearchChange} />)
    })

    it('should allow user to type city', async () => {
        const searchInput = screen.getByRole('combobox')
        userEvent.type(searchInput, "miami")

        await waitFor(() => {
            expect(searchInput).toHaveValue("miami");
        });
        
    })
})