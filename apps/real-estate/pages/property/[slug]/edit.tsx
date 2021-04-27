import React from 'react';
import { PropertyForm } from '@hoolan-dev/real-estate/frontend/property/feature-shell';
import { useRouter } from 'next/router';
import { propertyModel, useProperty } from '@hoolan-dev/real-estate/frontend/property/data-access';

function PropertyEditPage() {
  const router = useRouter();
  
  const { slug } = router.query; 

  const { data, error} = useProperty({id: slug});
  return (
    <PropertyForm property={{...data, ...propertyModel }} />
  );
}

export default PropertyEditPage;
