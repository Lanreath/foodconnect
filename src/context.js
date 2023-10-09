import React, { useState, createContext, useContext } from "react";
const ListContext = createContext(
    {
    users: [],
    setUsers: () => {},
    recipes: [],
    setRecipes: () => {},
    categories: [],
    setCategories: () => {},
    comments: [],
    setComments: () => {},
    error: null,
    setError: () => {},
    isLoaded: false,
    setIsLoaded: () => {},
    }
);
 
const ListProvider = ({ children }) => {
 const [users, setUsers] = useState([]);
 const [recipes, setRecipes] = useState([]);
 const [categories, setCategories] = useState([]);
    const [comments, setComments] = useState([]);
 const [error, setError] = useState(null);
 const [isLoaded, setIsLoaded] = useState(false);
 return (
   <ListContext.Provider value={
        {
        users,
        setUsers,
        recipes,
        setRecipes,
        categories,
        setCategories,
        comments,
        setComments,
        error,
        setError,
        isLoaded,
        setIsLoaded,
        }
   }>
     {children}
   </ListContext.Provider>
 );
};
 
export const useListContext = () => useContext(ListContext);
 
export default ListProvider;