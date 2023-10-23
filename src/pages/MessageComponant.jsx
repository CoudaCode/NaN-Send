import React from "react";
import "./../assets/css/MessageComponant.css";
import Topbar from "../components/Topbar";
import SideBar from "../Components/SideBar";

function MessageComponant() {
  return (
    <div className="MessageComponant">
      <Topbar />
      <div className="container-fluid mt-4">
        <div className="row flex-nowrap">
          <SideBar />
          <div className="col  cardRassemblement">
            <div className="flex justify-evenly">
              <div className="container mx-auto text-center">
                <div className="flex justify-around mb-8">
                  <button className=" inline-flex items-center py-2 px-4 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-300 focus:outline-none focus:ring-2 focus:bg-purple-200 focus:ring-opacity-75">
                    <svg
                      className="fill-current w-4 h-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="31"
                      viewBox="0 0 32 31"
                      fill="none"
                    >
                      <path
                        d="M31.4807 10.9217L20.4804 0.404861C19.5176 -0.515796 18 0.231593 18 1.66174V7.20112C7.96069 7.32837 0 9.55601 0 20.0895C0 24.341 2.47381 28.5528 5.20831 30.7549C6.06163 31.442 7.27775 30.5796 6.96313 29.4657C4.12913 19.4313 8.30731 16.7674 18 16.613V22.6964C18 24.1288 19.5188 24.8728 20.4804 23.9533L31.4807 13.4354C32.1726 12.7738 32.1736 11.5842 31.4807 10.9217Z"
                        fill="white"
                      />
                    </svg>
                    Vers contacts
                  </button>
                  <div className="flex bg-white py-1 px-4 rounded-3">
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-3 rounded-full inline-flex items-center ">
                      <span>Konany</span>
                      <svg
                        className="fill-current w-4 h-4 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                      >
                        <path
                          d="M22.6562 0H2.34375C1.0498 0 0 1.19978 0 2.67857V22.3214C0 23.8002 1.0498 25 2.34375 25H22.6562C23.9502 25 25 23.8002 25 22.3214V2.67857C25 1.19978 23.9502 0 22.6562 0ZM18.5742 16.2109C18.8086 16.4788 18.8086 16.9141 18.5742 17.1819L16.5967 19.442C16.3623 19.7098 15.9814 19.7098 15.7471 19.442L12.5 15.6975L9.25293 19.442C9.01855 19.7098 8.6377 19.7098 8.40332 19.442L6.42578 17.1819C6.19141 16.9141 6.19141 16.4788 6.42578 16.2109L9.70215 12.5L6.42578 8.78906C6.19141 8.5212 6.19141 8.08594 6.42578 7.81808L8.40332 5.55804C8.6377 5.29018 9.01855 5.29018 9.25293 5.55804L12.5 9.30245L15.7471 5.55804C15.9814 5.29018 16.3623 5.29018 16.5967 5.55804L18.5742 7.81808C18.8086 8.08594 18.8086 8.5212 18.5742 8.78906L15.2979 12.5L18.5742 16.2109Z"
                          fill="black"
                        />
                      </svg>
                    </button>
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-3 ml-8 rounded-full inline-flex items-center ">
                      <span>Konany</span>
                      <svg
                        className="fill-current w-4 h-4 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                      >
                        <path
                          d="M22.6562 0H2.34375C1.0498 0 0 1.19978 0 2.67857V22.3214C0 23.8002 1.0498 25 2.34375 25H22.6562C23.9502 25 25 23.8002 25 22.3214V2.67857C25 1.19978 23.9502 0 22.6562 0ZM18.5742 16.2109C18.8086 16.4788 18.8086 16.9141 18.5742 17.1819L16.5967 19.442C16.3623 19.7098 15.9814 19.7098 15.7471 19.442L12.5 15.6975L9.25293 19.442C9.01855 19.7098 8.6377 19.7098 8.40332 19.442L6.42578 17.1819C6.19141 16.9141 6.19141 16.4788 6.42578 16.2109L9.70215 12.5L6.42578 8.78906C6.19141 8.5212 6.19141 8.08594 6.42578 7.81808L8.40332 5.55804C8.6377 5.29018 9.01855 5.29018 9.25293 5.55804L12.5 9.30245L15.7471 5.55804C15.9814 5.29018 16.3623 5.29018 16.5967 5.55804L18.5742 7.81808C18.8086 8.08594 18.8086 8.5212 18.5742 8.78906L15.2979 12.5L18.5742 16.2109Z"
                          fill="black"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex justify-around mb-8">
                  <button className=" inline-flex items-center py-2 px-4 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-300 focus:outline-none focus:ring-2 focus:bg-purple-200 focus:ring-opacity-75">
                    <svg
                      className="fill-current w-4 h-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="31"
                      viewBox="0 0 32 31"
                      fill="none"
                    >
                      <path
                        d="M31.4807 10.9217L20.4804 0.404861C19.5176 -0.515796 18 0.231593 18 1.66174V7.20112C7.96069 7.32837 0 9.55601 0 20.0895C0 24.341 2.47381 28.5528 5.20831 30.7549C6.06163 31.442 7.27775 30.5796 6.96313 29.4657C4.12913 19.4313 8.30731 16.7674 18 16.613V22.6964C18 24.1288 19.5188 24.8728 20.4804 23.9533L31.4807 13.4354C32.1726 12.7738 32.1736 11.5842 31.4807 10.9217Z"
                        fill="white"
                      />
                    </svg>
                    Vers Teams
                  </button>
                  <div className="flex bg-white py-1 px-4 rounded-3">
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-3 rounded-full inline-flex items-center ">
                      <span>Konany</span>
                      <svg
                        className="fill-current w-4 h-4 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                      >
                        <path
                          d="M22.6562 0H2.34375C1.0498 0 0 1.19978 0 2.67857V22.3214C0 23.8002 1.0498 25 2.34375 25H22.6562C23.9502 25 25 23.8002 25 22.3214V2.67857C25 1.19978 23.9502 0 22.6562 0ZM18.5742 16.2109C18.8086 16.4788 18.8086 16.9141 18.5742 17.1819L16.5967 19.442C16.3623 19.7098 15.9814 19.7098 15.7471 19.442L12.5 15.6975L9.25293 19.442C9.01855 19.7098 8.6377 19.7098 8.40332 19.442L6.42578 17.1819C6.19141 16.9141 6.19141 16.4788 6.42578 16.2109L9.70215 12.5L6.42578 8.78906C6.19141 8.5212 6.19141 8.08594 6.42578 7.81808L8.40332 5.55804C8.6377 5.29018 9.01855 5.29018 9.25293 5.55804L12.5 9.30245L15.7471 5.55804C15.9814 5.29018 16.3623 5.29018 16.5967 5.55804L18.5742 7.81808C18.8086 8.08594 18.8086 8.5212 18.5742 8.78906L15.2979 12.5L18.5742 16.2109Z"
                          fill="black"
                        />
                      </svg>
                    </button>
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-3 ml-8 rounded-full inline-flex items-center ">
                      <span>Konany</span>
                      <svg
                        className="fill-current w-4 h-4 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                      >
                        <path
                          d="M22.6562 0H2.34375C1.0498 0 0 1.19978 0 2.67857V22.3214C0 23.8002 1.0498 25 2.34375 25H22.6562C23.9502 25 25 23.8002 25 22.3214V2.67857C25 1.19978 23.9502 0 22.6562 0ZM18.5742 16.2109C18.8086 16.4788 18.8086 16.9141 18.5742 17.1819L16.5967 19.442C16.3623 19.7098 15.9814 19.7098 15.7471 19.442L12.5 15.6975L9.25293 19.442C9.01855 19.7098 8.6377 19.7098 8.40332 19.442L6.42578 17.1819C6.19141 16.9141 6.19141 16.4788 6.42578 16.2109L9.70215 12.5L6.42578 8.78906C6.19141 8.5212 6.19141 8.08594 6.42578 7.81808L8.40332 5.55804C8.6377 5.29018 9.01855 5.29018 9.25293 5.55804L12.5 9.30245L15.7471 5.55804C15.9814 5.29018 16.3623 5.29018 16.5967 5.55804L18.5742 7.81808C18.8086 8.08594 18.8086 8.5212 18.5742 8.78906L15.2979 12.5L18.5742 16.2109Z"
                          fill="black"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex ">
                  <div className="blocMessage bg-white max-w-sm rounded overflow-hidden shadow-lg py-3 px-3">
                  <form className="w-full max-w-sm">
                    <div className="md:flex md:items-center mb-6">
                      <div className="md:w-1/4">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                         Objet
                        </label>
                      </div>
                      <div className="md:w-3/4">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text"  />
                      </div>
                    </div>
                    <div className="flex items-center mb-6 ">
                        <div className="md:w-4/4 flex-1 items-center">
                          <textarea rows="10" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="Message" > </textarea>
                        </div>
                    </div>
                    <div className="md:flex md:items-center">
                      <div className="md:w-3/4">
                        <button className="text-gray-900 bg-purple-500 bg-white hover:bg-purple-300 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-purple-500 mr-2 mb-2" type="button">
                            
                            Selectionner le canal d'envoi
                        </button>
                      </div>
                      <div className="md:w-2/4">
                        <button className=" inline-flex items-center py-2 px-4 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-300 focus:outline-none focus:ring-2 focus:bg-purple-200 focus:ring-opacity-75">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="31" viewBox="0 0 26 31" fill="none">
                              <path d="M22.3398 0.39206L1.21645 14.9174C-0.530292 16.1223 -0.362727 19.2042 1.50588 20.1184L7.30973 22.9823V28.0925C7.30973 30.9019 10.3157 32.0584 11.707 29.8242L13.9311 26.2458L19.6131 29.0431C19.9127 29.1884 20.2275 29.2611 20.5423 29.2611C20.9587 29.2611 21.37 29.1339 21.7406 28.8857C22.3906 28.4498 22.8374 27.6748 22.9542 26.7968L25.9704 3.35283C26.2801 0.924878 24.0967 -0.812835 22.3398 0.39206ZM9.74704 28.0925V24.1812L11.6055 25.0954L9.74704 28.0925ZM20.5423 26.3548L12.7327 22.51L19.8517 10.2613C20.395 9.32281 19.3693 8.23296 18.6483 8.97769L7.9089 20.1366L2.4351 17.4362L23.5585 2.90478L20.5423 26.3548Z" fill="white"/>
                            </svg>
                            Envoyer
                        </button>
                      </div>
                    </div>
                  </form>
                  </div>
                </div>
              </div>
              <div className="container mx-auto">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageComponant;
