import { useState } from "react";
import "./../assets/css/Contact.css";
import Topbar from "../components/Topbar";
import SideBar from "../Components/SideBar";
import Popup from "../Components/Popup";

function Contact() {
  const data = [
    {
      id: 1,
      nom: "John",
      prenom: "Doe",
      email: "john.doe@example.com",
      whatsapp: "123456789",
      langues: "Français",
      pays: "France",
    },
    {
      id: 2,
      nom: "Jane",
      prenom: "Smith",
      email: "jane.smith@example.com",
      whatsapp: "987654321",
      langues: "Anglais",
      pays: "États-Unis",
    },
    {
      id: 3,
      nom: "Alice",
      prenom: "Johnson",
      email: "alice.johnson@example.com",
      whatsapp: "555555555",
      langues: "Espagnol",
      pays: "Espagne",
    },
    {
      id: 4,
      nom: "Bob",
      prenom: "Brown",
      email: "bob.brown@example.com",
      whatsapp: "777777777",
      langues: "Allemand",
      pays: "Allemagne",
    },
    {
      id: 5,
      nom: "Ella",
      prenom: "White",
      email: "ella.white@example.com",
      whatsapp: "999999999",
      langues: "Italien",
      pays: "Italie",
    },
    {
      id: 6,
      nom: "David",
      prenom: "Wilson",
      email: "david.wilson@example.com",
      whatsapp: "444444444",
      langues: "Portugais",
      pays: "Portugal",
    },
    {
      id: 7,
      nom: "Linda",
      prenom: "Lee",
      email: "linda.lee@example.com",
      whatsapp: "666666666",
      langues: "Néerlandais",
      pays: "Pays-Bas",
    },
    {
      id: 8,
      nom: "Richard",
      prenom: "Taylor",
      email: "richard.taylor@example.com",
      whatsapp: "888888888",
      langues: "Suédois",
      pays: "Suède",
    },
    {
      id: 9,
      nom: "Megan",
      prenom: "Clark",
      email: "megan.clark@example.com",
      whatsapp: "111111111",
      langues: "Russe",
      pays: "Russie",
    },
    {
      id: 10,
      nom: "Michael",
      prenom: "Evans",
      email: "michael.evans@example.com",
      whatsapp: "222222222",
      langues: "Chinois",
      pays: "Chine",
    },
    {
      id: 11,
      nom: "Sophia",
      prenom: "Harris",
      email: "sophia.harris@example.com",
      whatsapp: "333333333",
      langues: "Arabe",
      pays: "Arabie saoudite",
    },
    {
      id: 12,
      nom: "William",
      prenom: "King",
      email: "william.king@example.com",
      whatsapp: "555555555",
      langues: "Japonais",
      pays: "Japon",
    },
    {
      id: 13,
      nom: "Olivia",
      prenom: "Lewis",
      email: "olivia.lewis@example.com",
      whatsapp: "777777777",
      langues: "Coréen",
      pays: "Corée du Sud",
    },
    {
      id: 14,
      nom: "James",
      prenom: "Allen",
      email: "james.allen@example.com",
      whatsapp: "999999999",
      langues: "Turc",
      pays: "Turquie",
    },
    {
      id: 15,
      nom: "Ava",
      prenom: "Green",
      email: "ava.green@example.com",
      whatsapp: "111111111",
      langues: "Grec",
      pays: "Grèce",
    },
    {
      id: 16,
      nom: "Benjamin",
      prenom: "Baker",
      email: "benjamin.baker@example.com",
      whatsapp: "222222222",
      langues: "Hindi",
      pays: "Inde",
    },
    {
      id: 17,
      nom: "Emma",
      prenom: "Adams",
      email: "emma.adams@example.com",
      whatsapp: "333333333",
      langues: "Vietnamien",
      pays: "Vietnam",
    },
    {
      id: 18,
      nom: "Henry",
      prenom: "Turner",
      email: "henry.turner@example.com",
      whatsapp: "444444444",
      langues: "Thaï",
      pays: "Thaïlande",
    },
    {
      id: 19,
      nom: "Charlotte",
      prenom: "Morris",
      email: "charlotte.morris@example.com",
      whatsapp: "666666666",
      langues: "Allemand",
      pays: "Allemagne",
    },
    {
      id: 20,
      nom: "Liam",
      prenom: "Wright",
      email: "liam.wright@example.com",
      whatsapp: "888888888",
      langues: "Anglais",
      pays: "Royaume-Uni",
    },
  ];

  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [searchTerm, setSearchTerm] = useState(""); // État pour la recherche

  const filteredData =
    filter === "all" ? data : data.filter((item) => item.channel === filter);
  const maxPages = Math.ceil(filteredData.length / itemsPerPage);

  const handleChangeFilter = (event) => {
    setFilter(event.target.value);
    setCurrentPage(1);
    setSearchTerm(""); // Efface le terme de recherche lorsque le filtre change.
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= maxPages) {
      setCurrentPage(page);
    }
  };

  const [isTeamPopupOpen, setIsTeamPopupOpen] = useState(false);

  const handleAddTeamClick = () => {
    setIsTeamPopupOpen(true);
  };

  const handleDelete = (id) => {
    // Implémentez la logique pour supprimer l'élément avec l'ID donné
    // Mettez à jour les données, par exemple : const newData = data.filter(item => item.id !== id);
    // Puis, mettez à jour l'état des données
    // setData(newData);
  };
  const handleEdit = (id) => {
    // Implémentez la logique pour modifier l'élément avec l'ID donné
    // Vous pouvez afficher un autre formulaire ou popup pour les modifications
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className='Contact'>
      <Topbar />
      <div className='container-fluid mt-4'>
        <div className='row flex-nowrap'>
          <SideBar />
          <div className='col py-3 cardRassemblement'>
            <div className='container mx-auto p-8'>
              <div className='flex flex-col md:flex-row md:items-center'>
                <div className='mb-4 md:mr-4 justify-around'>
                  <input
                    type='search'
                    name='search'
                    id='search'
                    className='px-3 py-2 border rounded-lg focus:outline-none focus:ring text-black focus:border-blue-500 w-full md:w-64'
                    placeholder='Rechercher par nom'
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                </div>
                <div className='flex md:mt-0 mb-4 md:space-x-2 md:justify-end'>
                  <button
                    // onClick={handleExportContacts}
                    className='bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600'>
                    Exporter les contacts
                  </button>
                  <button
                    onClick={handleAddTeamClick}
                    className='bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600'>
                    Ajouter Team
                  </button>
                </div>
              </div>

              <div className='overflow-x-auto'>
                <table className='w-full text-sm text-left text-gray-500'>
                  <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                    <tr className='bg-white border-b'>
                      <th className='px-6 py-3'>Nom</th>
                      <th className='px-6 py-3'>Prénom</th>
                      <th className='px-6 py-3'>Email</th>
                      <th className='px-6 py-3'>WhatsApp</th>
                      <th className='px-6 py-3'>Langues</th>
                      <th className='px-6 py-3'>Pays</th>
                      <th className='px-6 py-3'>Actions</th>
                    </tr>
                  </thead>
                  <tbody className='bg-white border-b'>
                    {filteredData
                      .filter((item) =>
                        item.nom
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase())
                      )
                      .slice(
                        (currentPage - 1) * itemsPerPage,
                        currentPage * itemsPerPage
                      )
                      .map((item) => (
                        <tr key={item.id} className='border border-gray-200'>
                          <td className='px-6 py-4'>{item.nom}</td>
                          <td className='px-6 py-4'>{item.prenom}</td>
                          <td className='px-6 py-4'>{item.email}</td>
                          <td className='px-6 py-4'>{item.whatsapp}</td>
                          <td className='px-6 py-4'>{item.langues}</td>
                          <td className='px-6 py-4'>{item.pays}</td>
                          <td className='px-6 py-4'>
                            <button
                              className='px-2 py-1 bg-purple-500 text-white rounded-md ml-2'
                              onClick={() => handleEdit(item.id)}>
                              Modifier
                            </button>
                            <button
                              className='px-2 md:ml-2 py-1 ml-2 bg-black text-white rounded-md'
                              onClick={() => handleDelete(item.id)}>
                              Supprimer
                            </button>
                          </td>
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
                      : "bg-purple-500 text-white"
                  } rounded-md mr-2`}>
                  &#8592;
                </button>
                <span className='text-lg font-medium'>{currentPage}</span>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  className={`px-3 py-2 ${
                    currentPage === maxPages
                      ? "bg-gray-200 text-gray-600"
                      : "bg-purple-500 text-white"
                  } rounded-md ml-2`}>
                  &#8594;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Popup
        isOpen={isTeamPopupOpen}
        onClose={() => setIsTeamPopupOpen(false)}
      />
    </div>
  );
}

export default Contact;
