import "./../assets/css/Broadcasts.css";
import Topbar from "./../Components/Topbar"
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
            <div className="addBouton">
              <button className="py-2 px-4 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75">
                <i className="fas fa-plus"></i>
                créer une diffusion
              </button>

              <div className="chanal">
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
              <div className="overflow-x-auto">
                <table className="min-w-full border bg-white text-black border-gray-300">
                  <thead>
                    <tr>
                      <th className="p-3">ID</th>
                      <th className="p-3">Nom</th>
                      <th className="p-3">Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3">1</td>
                      <td className="p-3">John Doe</td>
                      <td className="p-3">john@example.com</td>
                      <td>
                        <button></button>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3">2</td>
                      <td className="p-3">Jane Smith</td>
                      <td className="p-3">jane@example.com</td>
                    </tr>
                    <tr>
                      <td className="p-3">2</td>
                      <td className="p-3">Jane Smith</td>
                      <td className="p-3">jane@example.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="flex justify-end mt-4">
                <button className="px-4 py-2 mr-1 bg-purple-500 text-white rounded hover:bg-purple-700">
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
