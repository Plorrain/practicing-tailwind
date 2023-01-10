import React from "react";

const App = () => {
  return (
    <div>
      <div className="bg-gray-100 grid lg:grid-cols-2 2xl:grid-cols-5">
        <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2">
          <div className="xl:max-w-xl">
            <img className="h-10" src="/images/logo.svg" alt="Workcation" />
            <img
              className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden"
              src="/images/beach-work.jpg"
              alt="Woman worcationing on the beach"
            />
            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
              You can work from anywhere.
              <br className="hidden lg:inline" />
              <span className="text-indigo-500">Take advantage of it.</span>
            </h1>
            <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
              Workcation helps you find work-friendly rentals in beautiful
              locations so you can enjoy some nice weather even when you're not
              on vacation.
            </p>
            <div className="mt-4 space-x-1 sm:mt-6">
              <a
                className="btn btn-primary shadow-lg hover:-translate-y-0.5 transform transition"
                href="#"
              >
                Book your escape
              </a>
              <a className="btn btn-secondary" href="#">
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div className="hidden relative lg:block 2xl:col-span-3">
          <img
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/images/beach-work.jpg"
            alt="Woman worcationing on the beach"
          />
        </div>
      </div>
      <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
        <h2 className="text-xl text-gray-900">Popular destinations</h2>
        <p className="mt-2 text-gray-600">
          A selection of great work-friendly cities with lots to see and
          explore.
        </p>
        {/* cards */}
        <div className="mt-6 grid gap-6 lg:grid:cols-2 xl:grid-cols-3">
          {/* Toronto */}
          <div className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
            <img
              className="h-32 w-32 flex-shrink-0"
              src="./images/toronto.jpg"
              alt="Toronto skyline"
            />
            <div className="px-6 py-4">
              <h3 className="text-lg font-semibold text-gray-800">Toronto</h3>
              <p className="text-gray-600">120 / night average</p>
              <div className="mt-4">
                <a
                  href="/"
                  className="text-indigo-500 hover:text-indigo-400 font-semibold text-sm"
                >
                  Explore 76 properties
                </a>
              </div>
            </div>
          </div>
          {/* chicago */}
          <div className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
            <img
              className="h-32 w-32 flex-shrink-0"
              src="./images/chicago.jpg"
              alt="Chicago skyline"
            />
            <div className="px-6 py-4">
              <h3 className="text-lg font-semibold text-gray-800">Chicago</h3>
              <p className="text-gray-600">$215 / night average</p>
              <div className="mt-4">
                <a
                  href="/"
                  className="text-indigo-500 hover:text-indigo-400 font-semibold text-sm"
                >
                  Explore 115 properties
                </a>
              </div>
            </div>
          </div>
          {/* colorado */}
          <div className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
            <img
              className="h-32 w-32 flex-shrink-0"
              src="./images/colorado.jpg"
              alt="Colorado skyline"
            />
            <div className="px-6 py-4">
              <h3 className="text-lg font-semibold text-gray-800">Colorado</h3>
              <p className="text-gray-600">$110 / night average</p>
              <div className="mt-4">
                <a
                  href="/"
                  className="text-indigo-500 hover:text-indigo-400 font-semibold text-sm"
                >
                  Explore 50 properties
                </a>
              </div>
            </div>
          </div>
          {/* malibu */}
          <div className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
            <img
              className="h-32 w-32 flex-shrink-0"
              src="./images/malibu.jpg"
              alt="Malibu skyline"
            />
            <div className="px-6 py-4">
              <h3 className="text-lg font-semibold text-gray-800">Malibu</h3>
              <p className="text-gray-600">$250 / night average</p>
              <div className="mt-4">
                <a
                  href="/"
                  className="text-indigo-500 hover:text-indigo-400 font-semibold text-sm"
                >
                  Explore 130 properties
                </a>
              </div>
            </div>
          </div>
          {/* miami */}
          <div className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
            <img
              className="h-32 w-32 flex-shrink-0"
              src="./images/miami.jpg"
              alt="Miami skyline"
            />
            <div className="px-6 py-4">
              <h3 className="text-lg font-semibold text-gray-800">Miami</h3>
              <p className="text-gray-600">$220 / night average</p>
              <div className="mt-4">
                <a
                  href="/"
                  className="text-indigo-500 hover:text-indigo-400 font-semibold text-sm"
                >
                  Explore 156 properties
                </a>
              </div>
            </div>
          </div>
          {/* seattle */}
          <div className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
            <img
              className="h-32 w-32 flex-shrink-0"
              src="./images/seattle.jpg"
              alt="Seattle skyline"
            />
            <div className="px-6 py-4">
              <h3 className="text-lg font-semibold text-gray-800">Seattle</h3>
              <p className="text-gray-600">$170 / night average</p>
              <div className="mt-4">
                <a
                  href="/"
                  className="text-indigo-500 hover:text-indigo-400 font-semibold text-sm"
                >
                  Explore 34 properties
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
