import { useState } from "react";

function PopupBraodcoast({ isOpen, onClose }) {
  const [teamName, setTeamName] = useState("");

  const handleCreateTeam = () => {
    // Ici, vous pouvez effectuer la création de la nouvelle équipe (team) avec le nom `teamName`
    // Réinitialisez les champs et fermez le popup
    setTeamName("");
    onClose();
  };

  if (!isOpen) {
    return null;
  }
  return (
    <div className='fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-800 bg-opacity-50'>
      <div className='bg-white p-4 rounded-md shadow-md'>
        <h2 className='text-2xl mb-4'>Ajouter une Nouvelle Team</h2>
        <input
          type='text'
          placeholder="Nom de l'équipe"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          className='border rounded-md p-2 mb-2 w-full'
        />
        <div className='flex justify-end'>
          <button
            onClick={handleCreateTeam}
            className='bg-purple-700 text-white px-4 py-2 rounded-md'>
            Créer
          </button>
          <button
            onClick={onClose}
            className='ml-2 text-white-500 bg-black hover:text-gray-700 px-4 py-2 rounded-lg'>
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopupBraodcoast;
