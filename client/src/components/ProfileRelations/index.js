import React from 'react';
import { ProfileRelationsBoxWrapper } from './styles';

export function ProfileRelations(props) {

  const comunidades = [props.items];
  const title = [props.title];

  function getImagem(item) {
    console.log('ttitulo', title);
    if (title[0] === 'Comunidades') {
      return `http://picsum.photos/300/300`;
    }
    return `https://github.com/${item}.png`;
  }

  return (
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle" style={{ marginTop: '5px' }}>{title} ({comunidades.length})</h2>
      <ul>
        {comunidades[0].map((itemAtual) => {
          return (
            <li key={itemAtual}>
              <a href="#">
                <img alt="imagem" src={getImagem(itemAtual)} />
                <span>{itemAtual}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </ProfileRelationsBoxWrapper>
  )
};