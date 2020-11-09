import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getList } from '../../store/action';
import Card from '../../components/Card';
import './styles.scoped.css';
import { Link } from 'react-router-dom';

export default function Home() {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const {listPokemon, nextFetchedList} = state
  useEffect(() => {
    dispatch(getList());
  }, []);
  const getNewList = () => dispatch(getList(state.nextFetchedList));
  console.log(state);
  return (
    <section className="root">
      <div className="container">
        { listPokemon.map(el => (
          <Link to={`/detail/${el.name}`}>
            <Card
              key={el.name}
              name={el.name}
              counter={el.owned}
            />
          </Link>
          ))
        }
      </div>
      <br/>
      <button onClick={() => getNewList()}>next</button>
    </section>
  );
}
