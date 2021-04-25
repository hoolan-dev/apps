import React from 'react';
import { render } from '@testing-library/react';

import RealEstatePropertyUi from './real-estate-property-ui';

describe('RealEstatePropertyUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RealEstatePropertyUi />);
    expect(baseElement).toBeTruthy();
  });
});
