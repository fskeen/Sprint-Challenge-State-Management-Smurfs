import React, {useState} from 'react';

function AddSmurfForm ({addingSmurf, postData, smurf}) {

    let height = 0
    const [tempSmurf, setTempSmurf] = useState({ name: "", age: 0, height: height + "cm"})

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            postData(tempSmurf)
        }}>
            <label htmlFor="name">Enter name of smurf</label>
            <input
                type="text"
                id="name"
                onChange={(e) => setTempSmurf({...tempSmurf, name: e.target.value})}></input>
            
            <label htmlFor="age">Enter age of smurf</label>
            <input
                type="number"
                id="age"
                onChange={(e) => setTempSmurf({...tempSmurf, age: e.target.value})}></input>

            <label htmlFor="height">Enter height of smurf in centimeters</label>
            <input
                type="number"
                id="height"
                onChange={(e) => height = e.target.value}></input>

            <button type="submit">Add that smurf</button>

        </form>
    )
}

export default AddSmurfForm;