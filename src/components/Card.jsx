export default function Card({name, species, gender, image, onClose}) {

   return (
      <div className="flex flex-col bg-white rounded-3xl items-center w-64 ">
         <button className="m-4" onClick={onClose}>X</button>
         <img 
            className="rounded-full w-40 h-40 mb-5" 
            loading="lazy"
            src={image} 
            alt={name} 
         />
         
         <h1 className="text-2xl font-bold text-gray-800 dark:text-white leading-none">{name}</h1>
         <div className="flex justify-center items-center gap-3 pb-5">
            <span className="text-gray-500 dark:text-gray-400">{species}</span>
            <span className="text-gray-500 dark:text-gray-400">{gender}</span>
         </div>
         
         
      </div>
   );













































}
