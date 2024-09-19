function Strings() {

    return (
        <img
            className="bloodthirster"
            src="bloodthirster.png"
            alt="This is a bloodthirster"
        />

    );


}

function BracesInAttributes() {

    const image = "bloodthirster.png"
    const description = "This is another bloodthirster";
    return (
        <img
            className="bloodthirster"
            src={image}
            alt={description}

        />

    );


}

function BracesInTag() {

    const name = "Dave";
    return (

        <h1>{name} is an artist!</h1>
    );
}
const today = new Date();

function formatDate(date) {
    return new Intl.DateTimeFormat(
        'en-US',
        { weekday: 'long' }
    ).format(date);

}

function ObjectsInJSX() {
    return (
        <ul style={{ backgroundColor: 'black', color: 'pink' }}>
            <li>This is a bloodthirster.</li>
            <li>It eats faces.</li>
            <li>BLOOD FOR THE BLOOD GOD!</li>
        </ul>

    );
}

const bloodthirsterObject = {
    name: "Bloody",
    theme: {
        backgroundColor: 'red',
        color: 'orange'

    }

};

function ManyExpressions() {
    return (
        <div style={bloodthirsterObject.theme}>
            <h1>{bloodthirsterObject.name} is a bloodthirster!</h1>
            <img
                className="bloodthirster"
                src="bloodthirster.png"
                alt="this is a bloodthirster"
            />

            <ul>
                <li>This is a bloodthirster.</li>
                <li>It eats faces.</li>
                <li>BLOOD FOR THE BLOOD GOD!</li>
            </ul>

        </div>

    );


}

export default function App() {
    return (
        <>
            <Strings />
            <BracesInAttributes />
            <BracesInTag />
            <h1>{formatDate(today)}</h1>
            <ObjectsInJSX />
            <ManyExpressions />
        </>
    );

}