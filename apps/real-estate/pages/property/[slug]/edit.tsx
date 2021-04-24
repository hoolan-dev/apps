import React from 'react';
import {
  FieldControl,
  FieldGroup,
  FormBuilder,
  Validators,
} from 'react-reactive-form';
export default function Example() {
  const form = FormBuilder.group({
    refCollection: ['', Validators.required],
    formId: [''],
    identification: FormBuilder.group({
      chip: [''],
      address: [''],
      registration: [''],
      imageUrl: [''],
    }),
    contributor: FormBuilder.group({
      type: [''],
      identification: [''],
      name: [''],
      property: [''],
      quality: [''],
      address: [''],
      city: [''],
    }),
  });

  return (<></>)
  // return (
  //   <div className="space-y-6">
  //     <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
  //       <div className="md:grid md:grid-cols-3 md:gap-6">
  //         <div className="md:col-span-1">
  //           <h3 className="text-lg font-medium leading-6 text-gray-900">
  //             Real Estate Information
  //           </h3>
  //           <p className="mt-1 text-sm text-gray-500">
  //             Estate details and application.
  //           </p>
  //         </div>
  //         <div className="mt-5 md:mt-0 md:col-span-2">
  //           <FieldGroup
  //             control={form}
  //             render={({ get, invalid }) => (
  //               <form action="#" method="POST">
  //                 <div className="grid grid-cols-6 gap-6">
  //                   <div className="col-span-6 sm:col-span-3 lg:col-span-2">
  //                     <label
  //                       htmlFor="FormId"
  //                       className="block text-sm font-medium text-gray-700"
  //                     >
  //                       FormId
  //                     </label>
  //                     <FieldControl
  //                       name="formId"
  //                       render={({ handler }) => (
  //                         <input
  //                           type="text"
  //                           name="formId"
  //                           id="formId"
  //                           className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
  //                           {...handler()}
  //                         />
  //                       )}
  //                     ></FieldControl>
  //                   </div>

  //                   <div className="col-span-6 sm:col-span-3 lg:col-span-2">
  //                     <label
  //                       htmlFor="postal_code"
  //                       className="block text-sm font-medium text-gray-700"
  //                     >
  //                       Ref Collection
  //                     </label>
  //                     <FieldControl
  //                       name="refCollection"
  //                       render={({ handler }) => (
  //                         <input
  //                           type="text"
  //                           name="refCollection"
  //                           id="refCollection"
  //                           autoComplete="postal-code"
  //                           className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
  //                           {...handler()}
  //                         />
  //                       )}
  //                     ></FieldControl>
  //                   </div>

  //                   <div className="col-span-6 sm:col-span-3">
  //                     <label
  //                       htmlFor="chip"
  //                       className="block text-sm font-medium text-gray-700"
  //                     >
  //                       Chip
  //                     </label>
  //                     <FieldControl
  //                       name="chip"
  //                       render={({ handler }) => (
  //                         <input
  //                           type="text"
  //                           name="chip"
  //                           id="chip"
  //                           className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
  //                           {...handler()}
  //                         />
  //                       )}
  //                     ></FieldControl>
  //                   </div>

  //                   <div className="col-span-6 sm:col-span-3">
  //                     <label
  //                       htmlFor="registration"
  //                       className="block text-sm font-medium text-gray-700"
  //                     >
  //                       Registration
  //                     </label>
  //                     <FieldControl
  //                       name="registration"
  //                       render={({ handler }) => (
  //                         <input
  //                           type="text"
  //                           name="registration"
  //                           id="registration"
  //                           className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
  //                           {...handler()}
  //                         />
  //                       )}
  //                     ></FieldControl>
  //                   </div>

  //                   <div className="col-span-6">
  //                     <label
  //                       htmlFor="address"
  //                       className="block text-sm font-medium text-gray-700"
  //                     >
  //                       Address
  //                     </label>
  //                     <FieldControl
  //                       name="address"
  //                       render={({ handler }) => (
  //                         <input
  //                           type="text"
  //                           name="address"
  //                           id="address"
  //                           autoComplete="street-address"
  //                           className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
  //                           {...handler()}
  //                         />
  //                       )}
  //                     ></FieldControl>
  //                   </div>
  //                 </div>
  //               </form>
  //             )}
  //           ></FieldGroup>
  //         </div>
  //       </div>
  //     </div>

  //     <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
  //       <div className="md:grid md:grid-cols-3 md:gap-6">
  //         <div className="md:col-span-1">
  //           <h3 className="text-lg font-medium leading-6 text-gray-900">
  //             Contributor
  //           </h3>
  //           <p className="mt-1 text-sm text-gray-500">
  //             Personal details and application.
  //           </p>
  //         </div>
  //         <div className="mt-5 md:mt-0 md:col-span-2">
  //           <form action="#" method="POST">
  //             <div className="grid grid-cols-6 gap-6">
  //               <div className="col-span-6 sm:col-span-3 lg:col-span-2">
  //                 <label
  //                   htmlFor="state"
  //                   className="block text-sm font-medium text-gray-700"
  //                 >
  //                   Name
  //                 </label>
  //                 <input
  //                   type="text"
  //                   name="state"
  //                   id="state"
  //                   className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
  //                 />
  //               </div>

  //               <div className="col-span-6 sm:col-span-3 lg:col-span-2">
  //                 <label
  //                   htmlFor="postal_code"
  //                   className="block text-sm font-medium text-gray-700"
  //                 >
  //                   Identification
  //                 </label>
  //                 <input
  //                   type="text"
  //                   name="postal_code"
  //                   id="postal_code"
  //                   autoComplete="postal-code"
  //                   className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
  //                 />
  //               </div>

  //               <div className="col-span-6 sm:col-span-3">
  //                 <label
  //                   htmlFor="first_name"
  //                   className="block text-sm font-medium text-gray-700"
  //                 >
  //                   Property
  //                 </label>
  //                 <input
  //                   type="text"
  //                   name="first_name"
  //                   id="first_name"
  //                   autoComplete="given-name"
  //                   className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
  //                 />
  //               </div>

  //               <div className="col-span-6 sm:col-span-3">
  //                 <label
  //                   htmlFor="last_name"
  //                   className="block text-sm font-medium text-gray-700"
  //                 >
  //                   Quality
  //                 </label>
  //                 <input
  //                   type="text"
  //                   name="last_name"
  //                   id="last_name"
  //                   autoComplete="family-name"
  //                   className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
  //                 />
  //               </div>

  //               <div className="col-span-6">
  //                 <label
  //                   htmlFor="street_address"
  //                   className="block text-sm font-medium text-gray-700"
  //                 >
  //                   Address
  //                 </label>
  //                 <input
  //                   type="text"
  //                   name="street_address"
  //                   id="street_address"
  //                   autoComplete="street-address"
  //                   className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
  //                 />
  //               </div>
  //             </div>
  //           </form>
  //         </div>
  //       </div>
  //     </div>

  //     <div className="flex justify-end">
  //       <button
  //         type="button"
  //         className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  //       >
  //         Cancel
  //       </button>
  //       <button
  //         type="submit"
  //         className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
  //       >
  //         Save
  //       </button>
  //     </div>
  //   </div>
  // );
}
