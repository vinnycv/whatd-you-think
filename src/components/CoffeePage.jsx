import '../css/CoffeePage.css';
import { useState } from 'react';

function CoffeePage({ setPage }) {
    return (
        <>
            <div className="coffee-page">
                <header className="toolbar">
                    <button onClick={() => setPage(null)}>Home</button>
                    <label htmlFor="search"><input id="search" type="text" placeholder="search..." /></label>
                    <label htmlFor="sort">
                        {/* <select id="sort" value=""> */}
                        <select id="sort">
                            {/* <option value="" disabled>Sort</option> */}
                            <option value="most-recent">Most recent</option>
                            <option value="highest-rated">Highest rated</option>
                            <option value="lowest-rated">Lowest rated</option>
                            <option value="brand">Brand</option>
                            <option value="origin">Origin</option>
                        </select>
                    </label>
                    <button id="add-new" onClick={() => setPage("coffee-input")}>Add Coffee</button>
                </header>
            </div>
        </>
    );
}

export default CoffeePage;