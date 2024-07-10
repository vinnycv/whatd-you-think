import '../css/CoffeeInputForm.css';

const coffee = {
    Brand: "",
    Rating: 0,
    Name: "",
    Origin: "",
    Plant: "",
    Process: "",
    Roast: "",
    "Flavors listed": "",
    Acidity: "",
    Cost: "",
    Brew: "",
    "Flavors tasted": "",
    Thoughts: "",
    Preferences: ""
}

export default function CoffeeInputForm() {
    return (
        <div className="form">
            <h2>Tell me about your coffee</h2>
            <form>
                <fieldset>
                    <label for='brand'>Brand: <input id='brand' type='text'></input></label>
                    <label for='rating'><input id='rating' type='select'></input></label>
                </fieldset>
                <fieldset>

                </fieldset>
            </form>
        </div>
    );
}