import React from 'react'

function ColorChange({handleChangeColor}) {
  return (
    <button onClick={e => {
        e.stopPropagation();
        handleChangeColor();
    }}>
        Change Color
    </button>
  )
}

export default ColorChange
