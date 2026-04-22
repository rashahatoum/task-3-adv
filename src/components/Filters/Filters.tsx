import { useState } from "react";
import type { FiltersProps } from "../../interfaces";
import style from "./Filters.module.css";


function Filters<T>({
    items,
    filters,
    filterKey,
    onChange,
}: FiltersProps<T>) {
    const [active, setActive] = useState(filters[0]);

    const handleFilter = (filter: string) => {
        setActive(filter);

        if (filter === "All") {
            onChange(items);
            return;
        }

        const filtered = items.filter((item) => {
            if (!filterKey) return true;

            const value = String(item[filterKey]).toLowerCase();
            return value.includes(filter.toLowerCase());
        });

        onChange(filtered);
    };

    return (
        <div className={style.filters}>
            {filters.map((filter, index) => (
                <button
                    key={index}
                    onClick={() => handleFilter(filter)}
                    className={`${style.filterBtn} ${active === filter ? style.active : ""
                        }`}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
}

export default Filters;
