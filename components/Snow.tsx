'use client'

import { useTheme } from 'next-themes'
import React from 'react'
import Snowfall from 'react-snowfall'
const image = document.createElement('img')

const Snow = () => {
  const { resolvedTheme } = useTheme()
  image.src = `/static/images/snow-${resolvedTheme}.png`

  return (
    <Snowfall
      snowflakeCount={30}
      radius={[5, 20]}
      style={{
        zIndex: -1,
        width: '100vw',
        height: '100vh',
        position: 'fixed',
      }}
      images={[image]}
    />
  )
}

export default Snow
