import React from 'react';
import { render } from '@testing-library/react';

import RealEstatePropertyDataAccess from './real-estate-property-data-access';

describe('RealEstatePropertyDataAccess', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RealEstatePropertyDataAccess />);
    expect(baseElement).toBeTruthy();
  });
});
