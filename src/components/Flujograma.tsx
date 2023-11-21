
import { useState, useEffect } from 'react'
import axios from 'axios'
import Spinner from './Spinner'
import Materia from './Materia'

export interface MateriaProps {
  id: string
  nombre: string
  unidades: number
  prelacion: string[]
}

export interface Semestre {
  semestre: string
  materias: MateriaProps[]
}

const Flujograma = () => {
  const [nombre, setNombre] = useState<string>('')
  const [semestres, setSemestres] = useState<Semestre[]>()

  useEffect(() => {
    async function fetchData(): Promise<void> {
      try {
        const { data } = await axios(
          'http://localhost:3000/api/flujogramas/informatica'
        )
        setNombre(data.nombre)
        setSemestres(data.pensum)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  if (nombre) {
    return (
      <div className='p-3'>
        <div className='p-3 flex gap-x-3'>
          {semestres!.map(semestre => {
            return (
              <div
                key={semestre.semestre}
                className='w-36 text-center flex flex-col gap-y-3'
              >
                <h2 className='text-center text-xl font-semibold'>
                  {semestre.semestre}
                </h2>
                {semestre.materias.map(materia => {
                  return <Materia key={materia.id} materia={materia} />
                })}
              </div>
            )
          })}
        </div>
      </div>
    )
  } else return <Spinner />
}

export default Flujograma
