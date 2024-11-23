import React from 'react'
import BusinessCard from './BusinessCard'
import Button from '@mui/material/Button';

const Preview = ({Values}) => {
  return (
    <section className="Preview">
      <h2>Preview</h2>
      <pre>{JSON.stringify(Values, null, 2)}</pre>
      <div className="Preview-wrapper">
      <BusinessCard Values={Values}/> 
      </div>
      <div className="Preview-actions">
      <Button variant="outlined" size='medium' color='primary'>Save as PDF</Button>
      <Button variant="contained" size='medium'>Save as PNG</Button>
      <Button variant="contained" size='medium' color='secondary'>Save as JPEG</Button>
      </div>
    </section>
  )
}

export default Preview