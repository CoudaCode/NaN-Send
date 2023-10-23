import "./../assets/css/Broadcasts.css";
import Topbar from "../components/Topbar";
import SideBar from "../Components/SideBar";
import whatsapp from "../assets/images/whatsapp.jpeg";
import message from "../assets/images/message.jpg";
import gmail from "./../assets/images/email.png";
function Broadcasts() {
  return (
    <div className="Broadcasts">
      <Topbar />
      <div className="container-fluid mt-4">
        <div className="row flex-nowrap">
          <SideBar />
          <div className="col py-3 cardRassemblement">
            <div className="addBouton w-full flex justify-between">
              <div className="w-3/4 md:w-2/4 sm:1/2">
                <button className="py-2 px-4 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75">
                  <i className="fas fa-plus"></i>
                  créer une diffusion
                </button>
              </div>
              <div className="chanal w-1/4  md:w-2/4 sm:1/2">
                <img
                  className="inline-block h-12 w-12 rounded-full "
                  src={whatsapp}
                  alt=""
                />
                <img
                  className="inline-block h-12 w-12 rounded-full "
                  src={message}
                  alt=""
                />

                <img
                  className="inline-block h-12 w-12 rounded-full "
                  src={gmail}
                  alt=""
                />
              </div>
            </div>
            <div className="max-w-screen-xl mx-auto p-5">
              <div className="overflow-x-auto rounded-3xl">
                <table className="min-w-full  border bg-white text-black text-center border-gray-300">
                  <thead>
                    <tr>
                      <th className="p-3">ID</th>
                      <th className="p-3">Nom</th>
                      <th className="p-3">Email</th>
                      <th className="p-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3">1</td>
                      <td className="p-3">John Doe</td>
                      <td className="p-3">john@example.com</td>
                      <td className="p-3">
                        <button className="px-4 py-2 font-medium text-white bg-purple-600 rounded-md hover:bg-purple-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out mr-2">
                          Edit
                        </button>
                        <button className="px-4 py-2 font-medium text-white bg-black rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">
                          Delete
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3">2</td>
                      <td className="p-3">Jane Smith</td>
                      <td className="p-3">jane@example.com</td>
                      <td className="p-3">
                        <button className="px-4 py-2 font-medium text-white bg-purple-600 rounded-md hover:bg-purple-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out mr-2">
                          Edit
                        </button>
                        <button className="px-4 py-2 font-medium text-white bg-black rounded-md hover-bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">
                          Delete
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3">3</td>
                      <td className="p-3">Alice Johnson</td>
                      <td className="p-3">alice@example.com</td>
                      <td className="p-3">
                        <button className="px-4 py-2 font-medium text-white bg-purple-600 rounded-md hover:bg-purple-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out mr-2">
                          Edit
                        </button>
                        <button className="px-4 py-2 font-medium text-white bg-black rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="flex justify-end mt-4">
                <button className="px-4 py-2 mr-2 bg-purple-500 text-white rounded hover:bg-purple-700">
                  Précédent
                </button>
                <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-700">
                  Suivant
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Broadcasts;
