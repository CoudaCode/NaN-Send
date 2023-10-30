import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
function PopupContact({ isOpen, onClose }) {
  const addContact = async (data) => {
    const result = await axios.post(
      "https://nan-send-api.onrender.com/api/contact/",
      data
    );
    return result;
  };

  const { register, handleSubmit } = useForm({
    fullname: "",
    email: "",
    numeroWhatsapp: "",
    numeroSms: "",
  });

  const { mutate: loginUser } = useMutation({
    mutationFn: (Mydata) => addContact(Mydata),
    onSuccess: (succes) => {
      console.log("demo", succes.data);
      toast.success(succes.data.message);
    },
    onError: (e) => {
      console.log(e.response.data.message);
      toast.error(e.response.data.message);
    },
  });

  const handleCreateTeam = (data) => loginUser(data);
  if (!isOpen) {
    return null;
  }
  return (
    <div className='fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-800 bg-opacity-50'>
      <div className='bg-white p-4 rounded-md shadow-md'>
        <h2 className='text-2xl mb-4'>Ajouter une Nouvelle Contact</h2>
        <input
          type='text'
          placeholder='fullname'
          {...register("fullname")}
          className='border rounded-md p-2 mb-2 w-full text-black'
        />
        <input
          type='email'
          placeholder='Prenom'
          {...register("email", {
            required: "svp votre  Email",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "svp entrer un mail valide",
            },
          })}
          className='border rounded-md p-2 mb-2 w-full text-black'
        />
        <input
          type='number'
          placeholder='numero de telephone'
          {...register("numeroWhatsapp", {
            required: "Entrez le numero du contact",
            pattern: {
              value: /^\d{10}$/,
              message: "svp entrer un numero a 10 chiffre ivoirien valide",
            },
          })}
          className='border rounded-md p-2 mb-2 w-full text-black'
        />
        <input
          type='number'
          placeholder='numero de telephone'
          {...register("numeroWhatsapp", {
            required: "Entrez le numero du contact",
            pattern: {
              value: /^\d{10}$/,
              message: "svp entrer un numero a 10 chiffre ivoirien valide",
            },
          })}
          className='border rounded-md p-2 mb-2 w-full text-black'
        />
        <div className='flex justify-end'>
          <button
            onSubmit={handleSubmit(handleCreateTeam)}
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

export default PopupContact;
