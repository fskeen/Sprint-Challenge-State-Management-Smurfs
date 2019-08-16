import React from 'react';

function Smurf ({smurf, deleteData}) {
    // console.log(smurf)
    return (
        <section>
            <h4>Hello, my name is {smurf.name}!</h4>
            <p>I am {smurf.age} years old and only {smurf.height} tall.</p>
            <button onClick={(e) => {
                e.preventDefault()
                return deleteData(smurf.id)
            }}>Evict smurf</button>
        </section>
    )
}

export default Smurf;