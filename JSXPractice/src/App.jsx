function Strings() {

    return (
        <img
            className="alien"
            src="alien1.png"
            alt="This is the first alien"
        />
    );

}

function BracesInAttributes() {

    const image = "alien2.png"
    const description = "This is the second alien"
    return (
        <img
            className="alien"
            src={image}
            alt={description}
        />
    );
}

function BracesInTag() {

    const tagline = "scream"
    return (
        <h1>In space no one can hear you {tagline}.</h1>
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
        <ul style={{ backgroundColor: 'black', color: 'green' }}>
            <li>This is ET.</li>
            <li>He's friendly.</li>
            <li>Phone home!</li>
        </ul>
    );
}

const alienObject = {
    name: "xenomorph",
    theme: {
        backgroundColor: 'green',
        color: 'orange'
    }

};

function ManyExpressions() {
    return (
        <div style={alienObject.theme}>
            <h1>This is a {alienObject.name}.</h1>
            <img
                className="alien3"
                src="alien3.png"
                alt="this is a xenomorph"
            />

            <ul>
                <li>This is an alien.</li>
                <li>It wants to lay eggs in you.</li>
                <li>RUN!</li>
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

    )

}