import React, {useState} from 'react';

function ColorPicker(){

    const [color, setColor] = useState("#FFFFFF");

    function handleColorChange(e){
        setColor(e.target.value);
    }

    
    return(
        <>
        <h1>Color Picker</h1>
        <div className="color-display">
            <p className="color-text" style={{backgroundColor:color}}>Selected Color: {color}</p>
            <label>Select a color: </label>
            <input type="color" value={color} onChange={handleColorChange}/>
        </div>
        </>
    )
}

export default ColorPicker;