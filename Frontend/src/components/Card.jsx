import { BsXLg, BsFillHeartFill, BsHeart } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { addFavorite, removeFavorite } from "../redux/actions";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Card ({id, name, species, gender, image, onClose}) {
   const dispatch = useDispatch();
   const myFavorites = useSelector((state) => state.myFavorites);
   const [isFav, setIsFav] = useState(false);

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);


   function handleFavorite() {
      if (isFav) {
         setIsFav(false);
         dispatch(removeFavorite(id));
      
      } else {
         setIsFav(true);
         // despachar la funcion addFavorite
         dispatch(addFavorite({id, name, species, gender, image, onClose}))
      }
   }

   return (
      
      <div className="flex flex-col bg-sky-800 rounded-3xl border-2 border-sky-800 items-center w-64 shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">
         <div className="m-4 px-6 flex flex-row justify-between w-full">     
            {
               isFav ? (
                  <button onClick={handleFavorite} className="w-52">
                     <BsFillHeartFill className="text-white text-xl"/>
                  </button>
               ) : (
                  <button onClick={handleFavorite} className="w-52">
                     <BsHeart className="text-white text-xl"/>
                  </button>
               )
            }     
            
            
            <button 
               onClick={onClose}>
               <BsXLg className="text-white"/>
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

         <div className="bg-white w-full rounded-b-2xl">
            <NavLink to={`/detail/${id}`}>
               <h1 className="text-2xl font-bold text-zinc-800 text-center">{name}</h1>
            </NavLink>
            <div className="flex justify-center items-center gap-3 pb-5">
               <span className="text-zinc-800 dark:text-gray-400">{species}</span>
               <span className="text-zinc-800 dark:text-gray-400">{gender}</span>
               <span className="text-zinc-800 dark:text-gray-400 font-bold">#{id}</span>
            </div>
         </div>
        
         
         
         
      </div>
   );

}

/*
export function mapStateToProps(state) {
   return {
     myFavorites: state.myFavorites
   }
 }
 
 export function mapDispatchToProps(dispatch) {
   return {
     addFavorite : function (character) {
       dispatch(addFavorite(character))
     },
     removeFavorites: function(id) {
       dispatch(removeFavorite(id))
     }
   }
 }
 
 
 export default connect(mapStateToProps, mapDispatchToProps)(Card);*/

