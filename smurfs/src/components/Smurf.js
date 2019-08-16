import React from 'react';

function Smurf ({smurf}) {
    {console.log(smurf)}
    return (
        <section>
            <h4>Hello, my name is {smurf.name}!</h4>
            <p>I am {smurf.age} years old and only {smurf.height} tall.</p>
        </section>
    )
}

export default Smurf;