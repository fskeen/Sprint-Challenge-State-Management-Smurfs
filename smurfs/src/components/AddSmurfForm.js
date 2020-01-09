import React, {useState} from 'react';

function AddSmurfForm ({postData}) {

    /**  --- COMMENT ---------------------------------------
     * 
     * This state below collects all the data into a temporary smurf object, which is what will eventually be sent through redux using my postData action.
     * 
     * The action is passed to this component as a prop (from App.js) and called in my onSubmit function, where I pass in the temp object.
     */
    const [tempSmurf, setTempSmurf] = useState(
        {
            name: "",
            age: 0,
            height: 0 + "cm"
        })

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            postData(tempSmurf)
        }}>
            <label htmlFor="name">Enter name of smurf</label>
            <input
                type="text"
                id="name"
                onChange={(e) => setTempSmurf(
                    {
                        ...tempSmurf, 
                        name: e.target.value
                    }
                    )}></input>
            
            <label htmlFor="age">Enter age of smurf</label>
            <input
                type="number"
                id="age"
                onChange={(e) => setTempSmurf(
                    {
                        ...tempSmurf, 
                        age: e.target.value
                    }
                    )}></input>

            <label htmlFor="height">Enter height of smurf in centimeters</label>
            <input
                type="number"
                id="height"
                onChange={(e) => setTempSmurf(
                    {
                        ...tempSmurf, 
                        height: e.target.value + "cm"
                    }
                    )}></input>

            <button type="submit">Add that smurf</button>

        </form>
    )
}

export default AddSmurfForm;