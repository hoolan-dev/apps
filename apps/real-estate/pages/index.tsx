import React from 'react';
import { propertyModel, usePropertyList } from '@hoolan-dev/real-estate/frontend/property/data-access';
import { PropertyList } from '@hoolan-dev/real-estate/frontend/property/feature-shell';

export default function IndexPage() {
  const { data, error} = usePropertyList();

  if (!data) return <div>loading...</div>


  return (
    <PropertyList properties={data.map((property)=>({...property, ...propertyModel }))}></PropertyList>

  );
}
