import "./../assets/css/Map.css";
function Map() {
  return (
    <div className="container my-12 py-12 mx-auto px-4 md:px-6 lg:px-12 Map">
      <section className="mb-20 text-gray-800">
        <h3 className="text-3xl font-bold text-center mb-4">
          Contactez-Nous...
        </h3>
        <div className="md:flex md:flex-wrap">
          <div className="xl:w-6/12 md:w-7/12 mb-6 lg:mb-0 md:pr-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12094.57348593182!2d-74.00599512526003!3d40.72586666928451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598f988156a9%3A0xd54629bdf9d61d68!2sBroadway-Lafayette%20St!5e0!3m2!1spl!2spl!4v1624523797308!5m2!1spl!2spl"
              className="h-80 w-full border-0 rounded-lg shadow-lg"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="xl:w-6/12 md:w-5/12 md:pl-3 cadre">
            <div className="grid xl:grid-cols-2 xl:grid-rows-2 xl:gap-x-4 md:gap-x-6">
              <div className="mb-10 md:mb-12">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="p-4  rounded-md w-14 h-14 flex items-center justify-center">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Telephone</h3>
                    <p className="text-gray-500">+2250789252529</p>
                  </div>
                </div>
              </div>
              <div className="mb-10 md:mb-12">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="p-4  rounded-md  w-14 h-14 flex items-center justify-center">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Mail</h3>
                    <p className="text-gray-500">info@nan.ci</p>
                  </div>
                </div>
              </div>
              <div className="mb-10 md:mb-12">
                <div className="flex align-start">
                  <div className="shrink-0">
                    <div className="p-4  rounded-md  w-14 h-14 flex items-center justify-center">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Adresse</h3>
                    <p className="text-gray-500">
                      Abidjan, Cocody Angré 8éme Tranche GESTOCI (Non loin de la
                      cité DIASPORA)
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-4 md:mb-4">
                <div className="flex align-start">
                  <div className="shrink-0">
                    <div className="p-4  rounded-md  w-14 h-14 flex items-center justify-center">
                      <i className="fa-solid fa-calendar"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Temps travail</h3>
                    <p className="text-gray-500">Du Lundi au Vendredi</p>
                    <p className="text-gray-500">De 08h a 17h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Map;
