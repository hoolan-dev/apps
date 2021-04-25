import React from 'react';
import {
  FieldControl,
  FieldGroup,
  FormBuilder,
  Validators,
} from 'react-reactive-form';
export function EditPage() {
  const customForm = FormBuilder.group({
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form values', customForm.value);
  };

  return (
    <div>
      <FieldGroup
        control={customForm}
        render={({ value, get, invalid }) => (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Real Estate Information
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Estate details and application.
                  </p>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="FormId"
                        className="block text-sm font-medium text-gray-700"
                      >
                        FormId
                      </label>
                      <FieldControl
                        name="formId"
                        strict={false}
                        render={({ handler }) => (
                          <input
                            type="text"
                            name="formId"
                            id="formId"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            {...handler()}
                          />
                        )}
                      ></FieldControl>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="refCollection"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Ref Collection
                      </label>
                      <FieldControl
                        name="refCollection"
                        render={({ handler }) => (
                          <input
                            type="text"
                            name="refCollection"
                            id="refCollection"
                            autoComplete="postal-code"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            {...handler()}
                          />
                        )}
                      ></FieldControl>
                    </div>

                    <FieldGroup
                      control={customForm.get('identification')}
                      render={({ get, invalid }) => (
                        <>
                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="chip"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Chip
                            </label>
                            <FieldControl
                              name="chip"
                              render={({ handler }) => (
                                <input
                                  type="text"
                                  name="chip"
                                  id="chip"
                                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                  {...handler()}
                                />
                              )}
                            ></FieldControl>
                          </div>

                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="registration"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Registration
                            </label>
                            <FieldControl
                              name="registration"
                              render={({ handler }) => (
                                <input
                                  type="text"
                                  name="registration"
                                  id="registration"
                                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                  {...handler()}
                                />
                              )}
                            ></FieldControl>
                          </div>

                          <div className="col-span-6">
                            <label
                              htmlFor="address"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Address
                            </label>
                            <FieldControl
                              name="address"
                              render={({ handler }) => (
                                <input
                                  type="text"
                                  name="address"
                                  id="address"
                                  autoComplete="street-address"
                                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                  {...handler()}
                                />
                              )}
                            ></FieldControl>
                          </div>
                        </>
                      )}
                    ></FieldGroup>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
              <FieldGroup
                control={customForm.get('contributor')}
                render={({ get, valid }) => (
                  <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                      <h3 className="text-lg font-medium leading-6 text-gray-900">
                        Contributor
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Personal details and application.
                      </p>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Name
                          </label>
                          <FieldControl
                            name="name"
                            render={({ handler }) => (
                              <input
                                type="text"
                                name="name"
                                id="name"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                {...handler()}
                              />
                            )}
                          ></FieldControl>
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="identification"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Identification
                          </label>

                          <FieldControl
                            name="identification"
                            render={({ handler }) => (
                              <input
                                type="text"
                                name="identification"
                                id="identification"
                                autoComplete="postal-code"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                {...handler()}
                              />
                            )}
                          ></FieldControl>
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="property"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Property
                          </label>
                          <FieldControl
                            name="property"
                            render={({ handler }) => (
                              <input
                                type="text"
                                name="property"
                                id="property"
                                autoComplete="given-name"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                {...handler()}
                              />
                            )}
                          ></FieldControl>
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="quality"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Quality
                          </label>

                          <FieldControl
                            name="quality"
                            render={({ handler }) => (
                              <input
                                type="text"
                                name="quality"
                                id="quality"
                                autoComplete="family-name"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                {...handler()}
                              />
                            )}
                          ></FieldControl>
                        </div>

                        <div className="col-span-6">
                          <label
                            htmlFor="address"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Address
                          </label>

                          <FieldControl
                            name="address"
                            render={({ handler }) => (
                              <input
                                type="text"
                                name="address"
                                id="address"
                                autoComplete="street-address"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                {...handler()}
                              />
                            )}
                          ></FieldControl>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              ></FieldGroup>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Save
              </button>
            </div>
          </form>
        )}
      ></FieldGroup>
    </div>
  );
}

export default EditPage;

export const getServerSideProps = ({ params }) => {
  const { slug } = params;

  return {
    props: {
      property: {},
    },
  };
};
