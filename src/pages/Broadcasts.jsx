import { useState } from "react";
import "./../assets/css/Broadcasts.css";
import Topbar from "../components/Topbar";
import SideBar from "../Components/SideBar";
import whatsapp from "../assets/images/whatsapp.jpeg";
import message from "../assets/images/message.jpg";
import gmail from "./../assets/images/email.png";
function Broadcasts() {
  const data = [
    { id: 1, name: "John Doe", channel: "Email", members: 25 },
    { id: 2, name: "Jane Smith", channel: "Whatsapp", members: 40 },
    { id: 3, name: "codeur pro 1", channel: "Whatsapp", members: 50 },
    { id: 4, name: "codeur pro 2", channel: "Email", members: 50 },
    { id: 5, name: "codeur pro 3", channel: "Email", members: 50 },
    { id: 6, name: "codeur pro 4", channel: "Whatsapp", members: 32 },
    { id: 7, name: "codeur pro 5", channel: "Email", members: 35 },
    { id: 8, name: "codeur pro 6", channel: "Whatsapp", members: 230 },
    { id: 9, name: "codeur pro 7", channel: "Email", members: 50 },
    { id: 10, name: "codeur pro 8", channel: "Whatsapp", members: 50 },
    { id: 11, name: "codeur pro 9", channel: "Email", members: 50 },
    { id: 12, name: "codeur pro 10", channel: "Whatsapp", members: 50 },
    { id: 13, name: "codeur pro 11", channel: "Email", members: 50 },
    { id: 14, name: "codeur pro 12", channel: "Whatsapp", members: 50 },
    { id: 15, name: "codeur pro 13", channel: "Email", members: 50 },
    { id: 16, name: "codeur pro 14", channel: "Whatsapp", members: 50 },
    { id: 17, name: "codeur pro 15", channel: "Email", members: 50 },
    { id: 18, name: "codeur pro 16", channel: "Whatsapp", members: 50 },
    { id: 19, name: "codeur pro 17", channel: "Email", members: 50 },
    { id: 20, name: "codeur pro 18", channel: "Whatsapp", members: 50 },
    { id: 21, name: "codeur pro 19", channel: "Email", members: 50 },
    { id: 22, name: "codeur pro 20", channel: "Whatsapp", members: 50 },
    { id: 23, name: "codeur pro 21", channel: "Email", members: 50 },
    { id: 24, name: "codeur pro 22", channel: "Whatsapp", members: 50 },
    { id: 25, name: "codeur pro 23", channel: "Email", members: 50 },
    { id: 26, name: "codeur pro 24", channel: "Whatsapp", members: 50 },
    { id: 27, name: "codeur pro 25", channel: "Email", members: 50 },
    { id: 28, name: "codeur pro 26", channel: "Whatsapp", members: 50 },
    { id: 29, name: "codeur pro 27", channel: "Email", members: 50 },
    { id: 30, name: "codeur pro 28", channel: "Whatsapp", members: 50 },
    { id: 31, name: "codeur pro 29", channel: "SMS", members: 50 },
    { id: 32, name: "codeur pro 30", channel: "Whatsapp", members: 50 },
    { id: 33, name: "codeur pro 31", channel: "SMS", members: 50 },
    { id: 34, name: "codeur pro 32", channel: "SMS", members: 50 },
    { id: 35, name: "codeur pro 33", channel: "SMS", members: 50 },
    { id: 36, name: "codeur pro 34", channel: "SMS", members: 50 },
    { id: 37, name: "codeur pro 35", channel: "SMS", members: 50 },
    { id: 38, name: "codeur pro 36", channel: "SMS", members: 50 },
    { id: 39, name: "codeur pro 37", channel: "SMS", members: 50 },
    { id: 40, name: "codeur pro 38", channel: "SMS", members: 50 },
    { id: 41, name: "codeur pro 39", channel: "SMS", members: 50 },
    { id: 42, name: "codeur pro 40", channel: "SMS", members: 50 },
    { id: 43, name: "codeur pro 41", channel: "SMS", members: 50 },
    { id: 44, name: "codeur pro 42", channel: "SMS", members: 50 },
    { id: 45, name: "codeur pro 43", channel: "SMS", members: 50 },
  ];

  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredData =
    filter === "all" ? data : data.filter((item) => item.channel === filter);
  const maxPages = Math.ceil(filteredData.length / itemsPerPage);
  console.log(maxPages);
  const handleChangeFilter = (event) => {
    setFilter(event.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= maxPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className='Broadcasts'>
      <Topbar />
      <div className='container-fluid mt-4'>
        <div className='row flex-nowrap'>
          <SideBar />
          <div className='col py-3 cardRassemblement'>
            {/* <div className='addBouton flex'>
              <div className='btn w-1/2'>
                <button className='bg-purple-500 hover:bg-purple-700 text-white font-bold sm:py-1 sm:px-1 py-2 px-4 rounded'>
                  Ajouter un message
                </button>
              </div>

              <div className='chanal w-1/2'>
                <img
                  className='inline-block h-12 w-12 rounded-full '
                  src={whatsapp}
                  alt=''
                />
                <img
                  className='inline-block h-12 w-12 rounded-full '
                  src={message}
                  alt=''
                />
                <img
                  className='inline-block h-12 w-12 rounded-full '
                  src={gmail}
                  alt=''
                />
              </div>
            </div>
            <div className='max-w-screen-xl mx-auto p-5 sm:px-2'>
              <div className='overflow-x-auto'>
                <table className='min-w-full border bg-white text-black border-gray-300'>
                  <thead>
                    <tr>
                      <th className='p-3'>ID</th>
                      <th className='p-3'>Nom</th>
                      <th className='p-3'>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='p-3'>1</td>
                      <td className='p-3'>John Doe</td>
                      <td className='p-3'>john@example.com</td>
                      <td>
                        <button></button>
                      </td>
                    </tr>
                    <tr>
                      <td className='p-3'>2</td>
                      <td className='p-3'>Jane Smith</td>
                      <td className='p-3'>jane@example.com</td>
                    </tr>
                    <tr>
                      <td className='p-3'>2</td>
                      <td className='p-3'>Jane Smith</td>
                      <td className='p-3'>jane@example.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='flex justify-end mt-4'>
                <button className='px-4 py-2 mr-1 bg-purple-500 text-white rounded hover:bg-purple-700'>
                  Précédent
                </button>
                <button className='px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-700'>
                  Suivant
                </button>
              </div>
            </div> */}

            <div className='container mx-auto p-8'>
              <div className='mb-4'>
                <select
                  id='channel'
                  className='p-2 rounded-md border-gray-300 text-gray-600'
                  value={filter}
                  onChange={handleChangeFilter}>
                  <option value='all'>Tous les canaux</option>
                  <option value='Whatsapp'>Whatsapp</option>
                  <option value='Email'>Email</option>
                  <option value='SMS'>SMS</option>
                </select>
              </div>
              <div className='overflow-x-auto'>
                <table className='w-full text-sm text-left text-gray-500'>
                  <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                    <tr className='bg-white border-b'>
                      <th className='px-6 py-3'>Nom</th>
                      <th className='px-6 py-3'>Canal</th>
                      <th className='px-6 py-3'>Nombre de membres</th>
                    </tr>
                  </thead>
                  <tbody className='bg-white border-b'>
                    {filteredData
                      .slice(
                        (currentPage - 1) * itemsPerPage,
                        currentPage * itemsPerPage
                      )
                      .map((item) => (
                        <tr key={item.id} className='border border-gray-200'>
                          <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap '>
                            {item.name}
                          </td>
                          <td className='px-6 py-4'>
                            <img
                              className='inline-block h-12 w-12 rounded-full '
                              src={whatsapp}
                              alt={item.channel}
                            />
                          </td>
                          <td className='px-6 py-4'>{item.members}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              <div className='mt-4 flex justify-center items-center'>
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  className={`px-3 py-2 ${
                    currentPage === 1
                      ? "bg-gray-200 text-gray-600"
                      : "bg-blue-500 text-white"
                  } rounded-md mr-2`}>
                  &#8592;
                </button>
                <span className='text-lg font-medium'>{currentPage}</span>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  className={`px-3 py-2 ${
                    currentPage === maxPages
                      ? "bg-gray-200 text-gray-600"
                      : "bg-blue-500 text-white"
                  } rounded-md ml-2`}>
                  &#8594;
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
