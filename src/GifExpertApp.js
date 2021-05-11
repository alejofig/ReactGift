import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    // const categorias = ["Primer", "Segundo", "Tercer"]
    const [categories, setCategories] = useState(["Charmander"])


    return (
        <div>
            <h2> GifExpertApp</h2>
            <AddCategory setCategories={setCategories} ></AddCategory>
            <hr></hr>
            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            category={category}
                            key={category}>
                        </GifGrid>
                    ))
                }
            </ol>
        </div>
    );
}

export default GifExpertApp