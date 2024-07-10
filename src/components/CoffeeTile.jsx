import '../css/CoffeeTile.css';

// const coffee = {
//     Brand: "",
//     Rating: 0,
//     Name: "",
//     Origin: "",
//     Plant: "",
//     Process: "",
//     Roast: "",
//     "Flavors listed": "",
//     Acidity: "",
//     Cost: "",
//     Brew: "",
//     "Flavors tasted": "",
//     Thoughts: "",
//     Preferences: ""
// }

function Coffee() {
    return (
        <div className="coffe-container">
            <h3 className="brand">{Brand}</h3>
            <div className='rating'>{Rating}</div>
            <div className="primary-info">
                <p className="name">{Name}</p>
                <p className='origin'>{Origin}</p>
                <p className='plant'>{Plant}</p>
                <p className='process'>{Process}</p>
            </div>
            <div className='general-info'>
                <p className='roast'>{Roast}</p>
                <p className='flavors-listed'>{}</p>
                <p className='acidity'>{Acidity}</p>
                <p className='cost'>{Cost}</p>
            </div>
            <div className="what'd-you-think">
                <p className='brew'>{Brew}</p>
                <p className='flavors-tasted'>{}</p>
                <p className='thoughts'>{Thoughts}</p>
                <p className='preferences'>{Preferences}</p>
            </div>
        </div>
    );
}

export default Coffee;