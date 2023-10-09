import React from 'react';
import Categories from './lists/Categories';
import Comments from './lists/Comments';
import Recipes from './lists/Recipes';
import Users from './lists/Users';
import UserForm from './forms/UserForm';
import RecipeForm from "./forms/RecipeForm";
import CategoryForm from "./forms/CategoryForm";
import CommentForm from "./forms/CommentForm";

function App() {
  return (
    <div className="container mx-auto">
      <Users />
      <UserForm />
      <Categories />
      <CategoryForm />
      <Recipes />
      <RecipeForm />
      <Comments />
      <CommentForm />
    </div>
  );
}

export default App;
