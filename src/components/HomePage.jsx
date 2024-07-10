import '../css/HomePage.css';

function Home({ setPage }) {
    return (
        <div className="container">
            <div className="coffee-box">
                <button 
                    className="coffee-button"
                    onClick={() => setPage("coffee")}
                >Coffee</button>
            </div>
            <div className="tea-box">
                <button 
                    className="tea-button"
                    onClick={() => setPage("tea")}
                >Tea</button>
            </div>
        </div>
    );
}

export default Home;