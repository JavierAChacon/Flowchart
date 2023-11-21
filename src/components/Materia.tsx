import { useEffect, useState } from 'react'
import { MateriaProps } from '../components/Flujograma'
import { Link } from 'react-router-dom'

interface Materia {
  materia: MateriaProps
}

const Materia: React.FC<Materia> = ({ materia }) => {
  const { nombre, id } = materia

  return (
    <button className='rounded-lg h-20 flex relative items-center justify-center p-1 cursor-pointer'>
      <h3 className='text-sm line leading-none'>{nombre}</h3>
      <Link to={`/materia/${id}`} className='absolute bottom-1 right-1 text-sm'>
        Detalles
      </Link>
    </button>
  )
}

export default Materia
