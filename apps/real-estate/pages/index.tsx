import React from 'react';
import { properties } from '@hoolan-dev/real-estate/property/data-access';
import { PropertyList } from '@hoolan-dev/real-estate/property/feature-shell';

export default function IndexPage() {
  return (
    <PropertyList properties={properties}></PropertyList>
  );
}
