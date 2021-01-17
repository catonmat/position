import React from 'react'
import { Typography, Slider } from '@material-ui/core'

export function CustomSlider({ title, textTop, marks, value, handleChange }) {
    return (
        <div>
            <h2>{title}</h2>
            <Typography id="discrete-slider-restrict" gutterBottom>
                {textTop}
            </Typography>
            <Slider
                defaultValue={value}
                aria-labelledby="discrete-slider-restrict"
                step={null}
                valueLabelDisplay="auto"
                marks={marks}
                value={value}
                onChange={handleChange}
            />
            <Typography id="discrete-slider-restrict" gutterBottom>
                {marks[marks.map(item => item.value).indexOf(value)].text}
            </Typography>
        </div>
    )
}
