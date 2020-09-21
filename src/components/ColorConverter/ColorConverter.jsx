import React, { useState } from 'react'
import styles from './ColorConverter.module.css'

function ColorConverter() {
  const [input, setInput] = useState("")

  const handleChange = (evt) => {
    setInput(evt.target.value.trim());
  }

  let convertedValue = "";

  function hexToRgb(hex) {
    const first = parseInt("0x" + hex[0].substring(1, 3), 16);
    const second = parseInt("0x" + hex[0].substring(3, 5), 16);
    const third = parseInt("0x" + hex[0].substring(5, 7), 16);
    return (`rgb(${first}, ${second}, ${third})`);
  }

  if (input.length === 7) {
    if (input.match(/#[a-f0-9]{6}\b/gi) !== null) {
      convertedValue = hexToRgb(input.match(/#[a-f0-9]{6}\b/gi))
      document.body.style.background = `${convertedValue}`;
    } else {
      convertedValue = "ОШИБКА!";
      document.body.style.background = `#e94b35`;
    }
  } else {
    convertedValue = "";
  }

  return (
    <form>
      <p>
        <label htmlFor="hex">Введите значение цвета в формате HEX (#******)</label>
        <input className={styles.hexField} type="text" id="hex" value={input} onChange={handleChange} placeholder="HEX-значение" maxLength="7" autoFocus />
      </p>
      <p>
        <label htmlFor="rgb">Данный цвет в представлении RGB</label>
        <input className={styles.rgbField} type="text" id="rgb" value={convertedValue} placeholder="RGB-значение" readOnly />
      </p>
    </form>
  )
}

export default ColorConverter
