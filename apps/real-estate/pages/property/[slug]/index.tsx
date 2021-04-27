import React from 'react';
import { PropertyDetail } from '@hoolan-dev/real-estate/frontend/property/feature-shell';
import { propertyModel, useProperty, usePropertyList } from '@hoolan-dev/real-estate/frontend/property/data-access';
import { useRouter } from 'next/router';

function PropertyDetailPage() {
  const router = useRouter();
  
  const { slug } = router.query; 

  const { data, error} = useProperty({id: slug});

  return (
    <PropertyDetail property={{...data, ...propertyModel }} />
  );
}

export default PropertyDetailPage;
