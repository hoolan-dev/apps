import useSWR, { mutate } from 'swr';
import fetch from 'unfetch';

const fetcher = async (path, options = { method: 'GET' }) => {
  const res = await fetch(path, options);
  return res.json();
}

export function usePropertyList() {
  const { data, error } = useSWR('https://hoolan-api.herokuapp.com/api/1.0/property/list', fetcher);
  return { data, error }
}

export function useProperty({ id }) {
  const { data, error } = useSWR(`https://hoolan-api.herokuapp.com/api/1.0/property/list?id=${id}`, fetcher);
  return { data: data ? data[0] : null, error }
}

export function usePropertyCreate({ property }) {
  return mutate('https://hoolan-api.herokuapp.com/api/1.0/property/create', () =>
    fetch('https://hoolan-api.herokuapp.com/api/1.0/property/create', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
      body: JSON.stringify({
        ...property,
        catastro_id: `${Math.floor(Math.random() * 1000)}`,
        solana_id: `${Math.floor(Math.random() * 1000)}`
      })
    })
  )
}

export const propertyModel =
{
  refCollection: '21928382922192838292',
  formId: '11975972597',
  identification: {
    chip: '31131',
    address: 'Calle 1 # 12B - 66',
    registration: '20792128',
    imageUrl: 'https://source.unsplash.com/collection/219941'
  },
  contributor: {
    type: 'CC',
    identification: '111223',
    name: 'Sebastian AAAA',
    property: '50',
    quality: 'owner',
    address: 'Office 35',
    city: 'Bogota',
  },
};
