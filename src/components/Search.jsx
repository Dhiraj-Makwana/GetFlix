import React from "react";

const Search = ({searchTerm, setSearchTerm}) => {
    return(
        <div className="search">
            <div>
                <img src="/search-icon.png" alt="search" loading="lazy" />

                <input 
                    type="text"
                    placeholder="Search through thousands of movie"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>
    )
}

export default Search;