import useSWR from 'swr';
import fetch from 'unfetch';

const fetcher = async (path, options= { method: 'GET' })=> {
  const res = await fetch(path,options);
  return res.json();
}
 
export function usePropertyList(){
   const {data, error } = useSWR('https://hoolan-api.herokuapp.com/api/1.0/property/list', fetcher);
   return {data,error}
}

export function usePropertyCreate(){
  const {data, error } = useSWR(['https://hoolan-api.herokuapp.com/api/1.0/property/create', {
    method: 'POST',
    body: {
      castastro_id: `${Math.random()}`,
      solana_id: ``
    }
  }], fetcher);
   return {data,error}
}

export const properties = [
    {
      refCollection: '21928382922192838292',
      formId: '11975972597',
      identification: {
        chip: '31131',
        address: 'Calle 1 # 12B - 66',
        registration: '20792128',
        imageUrl: ''
      },
      contributor: {
        type: 'CC',
        identification: '111223',
        name: 'Sebastian AAAA',
        property: '50',
        quality: 'owner',
        address: '',
        city: 'Bogota',
      },
    },
    {
      refCollection: '2192838293',
      formId: '12',
      identification: {
        chip: '123141',
        address: 'Calle 2 # 18-29',
        registration: '2018743',
        imageUrl:''
      },
      contributor: {
        type: 'CC',
        identification: '222131',
        name: 'Het De',
        property: '100',
        quality: 'owner',
        address: 'Calle 45',
        city: 'Bogota',
      },
    },
  ];
  