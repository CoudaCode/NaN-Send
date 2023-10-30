

const Prix = () => {
  return (
    <div className="Prix pricing-table-2 bg-gray-800 py-6 md:py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Contenu de l'en-tête */}
        </div>
        <div className="pricing-plans gap-2 lg:flex lg:-mx-4 mt-6 md:mt-12">
          {/* Plan 1 */}
          <div className="rounded-lg pricing-plan-wrap lg:w-1/3 my-4 md:my-6">
            <div className="rounded-lg pricing-plan border-t-4 border-solid border-white bg-white text-center max-w-sm mx-auto hover:border-indigo-600 transition-colors duration-300">
              <div className="pricing-amount bg-slate-600 p-6 transition-colors duration-300">
                <div>
                  <span className="text-4xl font-semibold">Basic</span>
                </div>
              </div>
              <div className="p-6 md:py-8">
                <h4 className="text-black font-medium leading-tight text-2xl mb-2">
                  Small Business
                </h4>
                <p className="text-gray-600">For small projects</p>
              </div>

              <div className="p-6 text-black">
                <ul className="leading-loose">
                  <li>Upto 5 uses</li>
                  <li>Max 100 items/month</li>
                  <li>500 queries/month</li>
                  <li>Basic statistics</li>
                  <li>Email Support</li>
                </ul>
                <div className="mt-6 py-4">
                  <button className="bg-indigo-600 text-xl text-white py-2 px-6 rounded hover:bg-indigo-700 transition-colors duration-300">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Plan 2 */}
          <div className="pricing-plan-wrap lg:w-1/3 my-4 md:my-6">
            <div className="rounded-lg pricing-plan border-t-4 border-solid border-white bg-white text-center max-w-sm mx-auto hover:border-indigo-600 transition-colors duration-300">
              <div className="pricing-amount bg-indigo-100 p-6 transition-colors duration-300">
                <div>
                  <span className="text-4xl font-semibold">Premium</span>
                </div>
              </div>
              <div className="p-6 md:py-8">
                <h4 className="font-medium leading-tight text-2xl mb-2">
                  Professional
                </h4>
                <p className="text-gray-600">For large scale projects</p>
              </div>

              <div className="p-6 text-black">
                <ul className="leading-loose">
                  <li>Upto 50 uses</li>
                  <li>Max 500 items/month</li>
                  <li>1000 queries/month</li>
                  <li>Full statistics</li>
                  <li>Email Support</li>
                </ul>
                <div className="mt-6 py-4">
                  <button className="bg-indigo-600 text-xl text-white py-2 px-6 rounded hover:bg-indigo-700 transition-colors duration-300">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Plan 3 */}
          <div className="pricing-plan-wrap lg:w-1/3 my-4 md:my-6">
            <div className="rounded-lg pricing-plan border-t-4 border-solid border-white bg-white text-center max-w-sm mx-auto hover:border-indigo-600 transition-colors duration-300">
              <div className="pricing-amount bg-indigo-100 p-6 transition-colors duration-300">
                <div>
                  <span className="text-4xl font-semibold">Standard</span>
                </div>
              </div>
              <div className="p-6 md:py-8">
                <h4 className="font-medium leading-tight text-2xl mb-2">
                  Power User
                </h4>
                <p className="text-gray-600">For multi large scale projects</p>
              </div>

              <div className="p-6 text-black">
                <ul className="leading-loose">
                  <li>Unlimited uses</li>
                  <li>Unlimited items/month</li>
                  <li>Unlimited queries/month</li>
                  <li>Full statistics</li>
                  <li>Email & Phone Support</li>
                </ul>
                <div className="mt-6 py-4">
                  <button className="bg-indigo-600 text-xl text-white py-2 px-6 rounded hover:bg-indigo-700 transition-colors duration-300">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prix;
