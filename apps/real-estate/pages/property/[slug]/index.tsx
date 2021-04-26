import React from 'react';
import { properties } from '@hoolan-dev/real-estate/property/data-access';
import { PropertyDetail } from '@hoolan-dev/real-estate/property/feature-shell';

function PropertyListPage({ property }) {
  return (
    <PropertyDetail property={property} />
  );
}

export default PropertyListPage;

export const getServerSideProps = ({ params }) => {
  const { slug } = params;

  return {
    props: {
      property: properties.find((property) => property.refCollection === slug),
    },
  };
};