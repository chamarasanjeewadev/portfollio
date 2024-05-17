import {it, expect,describe} from 'vitest';
import {render, screen} from '@testing-library/react';
import { Hero } from '@/components/Hero';

describe('Header', () => {
    it('should render', () => {
        render(<Hero  />);
        expect(screen.getByText('Chamara')).toBeDefined();
    })
})
