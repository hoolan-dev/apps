import React from 'react';
import { PropertyForm } from '@hoolan-dev/real-estate/frontend/property/feature-shell';
import { usePropertyCreate } from '@hoolan-dev/real-estate/frontend/property/data-access';
import { useRouter } from 'next/router';

function PropertyNewPage() {
  const router = useRouter();

  const MANAGESAVE = async (property) => {
    try {
      await usePropertyCreate({ property });
      router.push('/');
    } catch (e) {
        alert(e);
      console.error(e);
    }
  };
  return <PropertyForm property={{}} handleForm={MANAGESAVE} />;
}

export default PropertyNewPage;
