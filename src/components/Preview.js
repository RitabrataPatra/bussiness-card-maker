import React from 'react'

const Preview = ({Values}) => {
  return (
    <section className="Preview">
      <h2>Preview</h2>
      <pre>{JSON.stringify(Values, null, 2)}</pre>
    </section>
  )
}

export default Preview