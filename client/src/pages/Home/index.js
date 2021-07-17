/* eslint-disable */
import React, { useState } from 'react';
import MainGrid from '../../components/MainGrid';
import Box from '../../components/Box';
import { ProfileRelationsBoxWrapper } from '../../components/ProfileRelations';
import { Menu } from '../../components/Menu';
import { ProfileSidebarMenu } from '../../components/ProfileSidebarMenu';
import { IconSet } from '../../components/IconSet';
import { Container } from './styles';

function ProfileSideBar(props) {
  return (
    <Container>
      <Box>
        <img alt="imagem" src={`https://github.com/${props.githubUser}.png`} style={{ borderRadius: '5px' }} />
        <hr />
        <p>
          <a className="boxLink" href={`https://github/${props.githubUser}`} >
            @{props.githubUser}
          </a>
        </p>
        <hr />
        <ProfileSidebarMenu />
      </Box>
    </Container>
  )
};

export default function Home() {

  const [comunidades, setComunidades] = useState(['alura']);
  const githubUser = 'kamillasthefany';
  const pessoasFavoritas = ['juunegreiros', 'peas', 'omariosouto', 'rafaballerini'];

  const handleSubmit = (e) => {
    debugger;
    e.preventDefault();
    console.log(e.target);
    setComunidades(...comunidades);
  };

  return (
    <>
      <Menu />
      <MainGrid>
        <div style={{ gridArea: 'profileArea' }}>
          <ProfileSideBar githubUser={githubUser} />
        </div>
        <div style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">
              Bem vindo
            </h1>
            <IconSet />
          </Box>
          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={() => handleSubmit(e)}>
              <div>
                <input
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                />
              </div>
              <div>
                <input
                  placeholder="Coloque uma URL para usarmos de capa"
                  name="image"
                  aria-label="Coloque uma URL para usarmos de capa"
                />
              </div>
              <button>
                Criar comunidade
              </button>
            </form>
          </Box>
        </div>
        <div style={{ gridArea: 'relationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Comunidades ({comunidades.length})</h2>
            <ul>
              {comunidades.map((itemAtual) => {
                return (
                  <li key={itemAtual}>
                    <a href="#">
                      <img alt="imagem" src={`http://picsum.photos/300/300`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Comunidades ({pessoasFavoritas.length})</h2>
            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li key={itemAtual}>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img alt="imagem" src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}
