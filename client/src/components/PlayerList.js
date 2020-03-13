import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { useLocalStorage } from '../hooks/useLocalStorage';



export const PlayerList = ({players, searchTerm}) => {
  const [favoritePlayer, setFavoritePlayer] = useLocalStorage('favoritePlayer', '')


  const checkSearch = (name) => {
    return name.toLowerCase().includes(searchTerm.toLowerCase())
  }

  return (
    <>
      <h1>Women's Professional Soccer Players</h1>
      <ListGroup>
      {players.filter((player) => checkSearch(player.name)).map(player =>
        <ListGroupItem key={player.id}>
          <div><strong>Name: </strong>{player.name}</div>
          <div><strong>Country: </strong>{player.country}</div>
          <button onClick={() => {
            setFavoritePlayer(player.name)
            console.log(player.name)
            }}>Save Favorite Player</button>
        </ListGroupItem>
      )}        
      </ListGroup>
    </>
  )
}