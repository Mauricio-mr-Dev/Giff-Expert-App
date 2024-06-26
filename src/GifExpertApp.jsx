import { useState } from "react";
import { AddCategory } from "./components";
import { GifGrid } from "./components";

export default function GifExpertApp() {
  
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (onNewCategory) => {

    if (categories.includes(onNewCategory)) return;
    setCategories([onNewCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
}
