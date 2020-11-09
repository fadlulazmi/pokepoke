import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDetail, catchPokemon } from '../../store/action'
import Button from '../../components/Button'
import defaultImage from '../../assets/ic-default-image.svg'
import './styles.scoped.css'


export default function Detail(props) {
  const dispatch = useDispatch()
  const { detailPokemon } = useSelector(state => state)
  const { id } = props.match.params
  const {
    sprites,
    name,
    base_experience,
    weight,
    height,
    types,
    moves
  } = detailPokemon || {}
  useEffect(() => {
    dispatch(getDetail(id))
  }, [dispatch, id])

  const getParaghraphContent = (arr, key) => {
    let content = '';
    arr.forEach((el, i) => {
      if(i < 10){
        if(i === arr.length-1){
          content += el[key].name
        } else {
          content += `${el[key].name}, `
        }
      }
    });
    
    if(content.length > 100){
      content = content.substr(0,100) + '...';
    }
    return content
  }

  return (
    <div className="detail">
      <img alt="id" src={sprites ? sprites.front_default : defaultImage}/>
      <p>{name && name.toUpperCase()}</p>
      <div>
        <p>
          <b>Base Experience</b> <br /> {base_experience} 
        </p>
        <p>
          <b>Weight</b> <br /> {weight} 
        </p>
        <p>
          <b>Height</b> <br /> {height} 
        </p>
        <p>
          <b>Types</b> <br /> {types && getParaghraphContent(types, 'type')} 
        </p>
        <p>
          <b>Moves</b> <br /> {moves && getParaghraphContent(moves, 'move')} 
        </p>
      </div>
      <div>
        <Button onClick={() => dispatch(catchPokemon(detailPokemon))} text="CATCH" />
      </div>
    </div>
  )
}
