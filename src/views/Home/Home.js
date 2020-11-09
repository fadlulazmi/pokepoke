import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getList, getFavorite } from '../../store/action';
import Card from '../../components/Card';
import './styles.scoped.css';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

export default function Home() {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const {listPokemon, nextFetchedList} = state
  useEffect(() => {
    dispatch(getFavorite());
    dispatch(getList());
  }, [dispatch]);
  const getNewList = () => dispatch(getList(state.nextFetchedList));
  console.log(state);
  return (
    <section className="root">
      <div className="container">
        { 
          listPokemon.map((el, i) => (
            <Link key={i} to={`/detail/${el.name}`}>
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
      {
        nextFetchedList 
          ? <Button onClick={() => getNewList()} text="Show more..." />
          : <p>You reached the end of page</p>
      }
    </section>
  );
}
