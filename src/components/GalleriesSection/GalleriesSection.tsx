import { useState } from "react";
import Filters from "../Filters/Filters";
import Gallery from "../Gallery/Gallery";
import type { GalleryProps } from "../../interfaces";


const GallerySection = ({ Galleries }: GalleryProps) => {
    const [filtered, setFiltered] = useState(Galleries);

    return (
        <>
            <Filters
                items={Galleries}
                filters={["All", "Classrooms", "Library", "Science Lab", "Computer Lab", "Garden and Nature Area"]}
                filterKey="title"
                onChange={setFiltered}
            />

            <Gallery Galleries={filtered} />
        </>
    );
};

export default GallerySection;