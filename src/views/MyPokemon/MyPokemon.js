import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {removeFavorite, getFavorite} from '../../store/action'
import Card from '../../components/Card'
import Button from '../../components/Button'
import './styles.scoped.css'

export default function MyPokemon() {
  const dispatch = useDispatch()
  const { myPokemon } = useSelector(state => state)
  useEffect(() => {
    dispatch(getFavorite())
  }, [dispatch])
  return (
    <div className="container">
      { 
        myPokemon.length > 0 
          ? myPokemon.map(el => (
            <div key={el.id}>
              <Card
                key={el.name}
                name={el.name}
                counter={el.owned}
              />
              <Button onClick={() => dispatch(removeFavorite(el.id))} text="REMOVE"/>
            </div>
          ))
          : <p>Let's catch POKEMON !</p>
      }
    </div>
  )
}
