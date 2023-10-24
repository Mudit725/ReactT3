import React from 'react';

const Picker = ({ colors }) => {
    const [selectedColor, setSelectedColor] = React.useState(null);
    const [displayColorList, setDisplayColorList] = React.useState(false);
  
    const handleButtonClick = () => {
      setDisplayColorList(!displayColorList);
    };
  
    const handleColorClick = (color) => {
      setSelectedColor(color);
      setDisplayColorList(false);
    };
  
    const colorSquares = colors.map((color, index) => (
      <div
        key={index}
        className="color-square"
        style={{ backgroundColor: color }}
        onClick={() => handleColorClick(color)}
      ></div>
    ));
  
    const colorList = displayColorList ? (
      <div className="color-list">
        {colorSquares}
      </div>
    ) : null;
  
    return (
      <div className="app">
        <div className="color-picker" style={{ backgroundColor: selectedColor || 'purple' }}>
          {colorList}
          <button onClick={handleButtonClick} style={{ backgroundColor: 'green' }}>
            Pick a color
          </button>
        </div>
      </div>
    );
  };
  export default Picker;