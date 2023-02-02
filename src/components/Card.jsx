import { BsXLg, BsFillHeartFill, BsHeart } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { addFavorite, removeFavorite } from "../redux/actions";
import { connect } from 'react-redux';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


export default function Card({id, name, species, gender, image, onClose}) {
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
         // despachar la funcion removeFavorite
         dispatch(removeFavorite(id));
      } else {
         setIsFav(true);
         // despachar la funcion addFavorite
         dispatch(addFavorite({id, name, species, gender, image, onClose}))
      }
   }

   return (
      
      <div className="flex flex-col bg-white rounded-3xl border-2 border-green-600 items-center w-64 shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">
         <div className="m-4 px-6 flex flex-row justify-between w-full">     
            {
               isFav ? (
                  <button onClick={handleFavorite} className="w-52">
                     <BsFillHeartFill className="text-red-500 text-xl"/>
                  </button>
               ) : (
                  <button onClick={handleFavorite} className="w-52">
                     <BsHeart className="text-red-500 text-xl"/>
                  </button>
               )
            }     
            
            
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

         <div className="bg-green-800 w-full rounded-b-2xl">
            <NavLink to={`/detail/${id}`}>
               <h1 className="text-2xl font-bold text-white text-center">{name}</h1>
            </NavLink>
            <div className="flex justify-center items-center gap-3 pb-5">
               <span className="text-white dark:text-gray-400">{species}</span>
               <span className="text-white dark:text-gray-400">{gender}</span>
            </div>
         </div>
        
         
         
         
      </div>
   );

}
// export function mapDispatchToProps(dispatch) {
//    return {
//       addFavorite: (item) => dispatch(addFavorite(item)),
//       removeFavorite: (id) => dispatch(removeFavorite(id)),
//    };
// }

// export function mapStateToProps(state) {
//    return {
//       myFavorites: state.myFavorites,
//    }  
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Card);

