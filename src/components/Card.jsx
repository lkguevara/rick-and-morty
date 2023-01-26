import { BsXLg } from "react-icons/bs";

export default function Card({id, name, species, gender, image, onClose}) {

   return (
      
      <div className="flex flex-col bg-white rounded-3xl border-2 border-green-600 items-center w-64 shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">
         <div className="m-4 flex flex-col justify-end"> 
            <button 
               onClick={onClose}>
               <BsXLg className="text-cyan-800"/>
            </button>  
         </div>
         
         <div className= "">
            <img 
               className="rounded-full border-red-700 w-40 h-40 mb-5 " 
               loading="lazy"
               src={image} 
               alt={name} 
            />
         </div>
        
         
         <h1 className="text-2xl font-bold text-black">{name}</h1>
         <div className="flex justify-center items-center gap-3 pb-5">
            <span className="text-gray-500 dark:text-gray-400">{species}</span>
            <span className="text-gray-500 dark:text-gray-400">{gender}</span>
         </div>
         
         
      </div>
   );













































}
