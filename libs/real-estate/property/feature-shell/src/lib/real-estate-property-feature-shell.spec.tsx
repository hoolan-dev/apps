import React from 'react';
import { render } from '@testing-library/react';

import RealEstatePropertyFeatureShell from './real-estate-property-feature-shell';

describe('RealEstatePropertyFeatureShell', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RealEstatePropertyFeatureShell />);
    expect(baseElement).toBeTruthy();
  });
});
