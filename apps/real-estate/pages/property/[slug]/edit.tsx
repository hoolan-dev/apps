import React from 'react';
import { properties } from '@hoolan-dev/real-estate/frontend/property/data-access';
import { PropertyForm } from '@hoolan-dev/real-estate/frontend/property/feature-shell';

function PropertyEditPage({ property }) {
  return (
    <PropertyForm property={property} />
  );
}

export default PropertyEditPage;

export const getServerSideProps = ({ params }) => {
  const { slug } = params;

  return {
    props: {
      property: properties.find((property) => property.refCollection === slug),
    },
  };
};