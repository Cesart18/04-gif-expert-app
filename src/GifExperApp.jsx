import { useState } from "react"
import { AddCategory, GifGrid } from "./components";


export const GifExperApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);

    const onAddCategory = (newCategory) => {

        const lowCategories = categories.map(cat => cat.toLowerCase());
        if (lowCategories.includes(newCategory.toLowerCase())) return;
        setCategories([newCategory, ...categories,]);

    }

    return (
        <>
            <h1> GifExpertApp </h1>
            <AddCategory
                onNewCategory={onAddCategory}
            />

            {categories.map(cat => (

                <GifGrid key={cat} category={cat} />
            )
            )}
        </>
    )
}

