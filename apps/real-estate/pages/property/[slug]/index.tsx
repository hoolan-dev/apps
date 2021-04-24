import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon  } from '@heroicons/react/solid';
import Link from 'next/link';

const getRandomImgUrl = () => {
  return `https://source.unsplash.com/collection/219941`;
};

const properties = [
  {
    refCollection: '21928382922192838292',
    formId: '11975972597',
    identification: {
      chip: '31131',
      address: 'Calle 1 # 12B - 66',
      registration: '20792128',
      imageUrl: getRandomImgUrl(),
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
      imageUrl: getRandomImgUrl(),
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

function ExampleTwo({property}) {
  return (
    <>
    <div className="mb-8">
      <div>
        <nav className="sm:hidden" aria-label="Back">
          <a href="#" className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700">
            <ChevronLeftIcon className="flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
            Back
          </a>
        </nav>
        <nav className="hidden sm:flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-4">
            <li>
              <div>
              <Link href={`/`}>
                <a className="text-sm font-medium text-gray-500 hover:text-gray-700">
                  Properties
                </a>
</Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRightIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                <Link href={`/property/${property.refCollection}`}>
                <a className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                  {property.refCollection}
                </a>
                </Link>
              </div>
            </li>
            </ol>
        </nav>
      </div>
      <div className="mt-2 md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">{property.refCollection}</h2>
        </div>
        <div className="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">
          <Link href={`/property/${property.refCollection}/edit`}>

          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Edit
          </button>
          </Link>
          <button
            type="button"
            className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Publish
          </button>
        </div>
      </div>
    </div>

    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Real Estate Information
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Estate details and application.
        </p>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Chip</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {property.identification.chip}
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Address
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {property.identification.address}
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Registration</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              { property.identification.registration }
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Form ID
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {property.formId}
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Ref Collection
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {property.refCollection}
            </dd>
          </div>
          
          </dl>
      </div>
    </div>
    <br/>
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Contributor
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Personal details and application.
        </p>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {property.contributor.name}
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Identification
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {property.contributor.type} {property.contributor.identification}
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Property</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              { property.contributor.property } %
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Quality
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              { property.contributor.quality }
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Address
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              { property.contributor.address } { property.contributor.city }
            </dd>
          </div>
          </dl>
      </div>
    </div>
  
    </>
    );
}

export default ExampleTwo;

export const  getServerSideProps = ({params}) => {
  const { slug } = params;

  return {
      props: {
          property: properties.find((property) => property.refCollection === slug)
      }
  }
}

// export const getStaticPaths = (p) =>{
//   return {
//     paths: [
//       { params: { slug: '21928382922192838292' } },
//       // { params: { slug: '2192838293' } }
//     ],
//     fallback: false
//   }
  
// }



