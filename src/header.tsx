import React from 'react'

export type Props = {
  name: string
}

const Header: React.FC<Props> = ({ name }) => {
  return (
    <h2>{name}</h2>
  )
}

export default Header