import React from 'react';
import {
  ChevronRightIcon,
  MailIcon,
} from '@heroicons/react/solid';
import Link from 'next/link';
import { properties } from '@hoolan-dev/real-estate/property/data-access';

export function PropertyDetail({property}) {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul className="divide-y divide-gray-200">
        {properties.map((property) => (
          <li key={property.refCollection}>
            <Link href={`/property/${property.refCollection}`}>
              <button className="block hover:bg-gray-50">
                <div className="flex items-center px-4 py-4 sm:px-6">
                  <div className="min-w-0 flex-1 flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-12 w-12 rounded-full"
                        src={`${
                          property.identification.imageUrl
                        }?sig=${Math.floor(Math.random() * 10)}`}
                        alt=""
                      />
                    </div>
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <p className="text-sm font-medium text-indigo-600 truncate">
                          {property.refCollection}
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          <MailIcon
                            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          <span className="truncate">
                            {property.identification.address}
                          </span>
                        </p>
                      </div>
                      <div className="hidden md:block">
                        <div>
                          <p className="text-sm text-gray-900">
                            {property.contributor.name}
                            
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500 ">
                            
                            { property.contributor.type }. {' '}
                            {property.contributor.identification} from {' '}
                            { property.contributor.city }
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <ChevronRightIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
