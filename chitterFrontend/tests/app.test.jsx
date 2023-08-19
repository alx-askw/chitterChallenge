import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import App from '../src/App';
import { test } from 'vitest';

describe('Routes', () => {
    test('should /home route contain text', async () => {
        render(
            <MemoryRouter initialEntries={['/home']}>
                <Routes>
                    <Route path="/home" element={<App />} />
                </Routes>
            </MemoryRouter>
        );

        await waitFor(() => {
            expect(screen.getByText('Loading Peeps...')).toBeInTheDocument();
        });
    });
});
