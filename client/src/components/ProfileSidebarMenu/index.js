import React from 'react';
import { ProfileSidebarMenuWrapper } from './styles';
import User from '../../assets/icons/user.svg';
import Book from '../../assets/icons/book.svg';
import Camera from '../../assets/icons/camera.svg';
import Sun from '../../assets/icons/sun.svg';
import Plus from '../../assets/icons/plus.svg';
import Logout from '../../assets/icons/logout.svg';

export function ProfileSidebarMenu() {
  return (
    <ProfileSidebarMenuWrapper>
      <nav>
        <a href="/">
          <img alt="imagem" src={User.src} />
          Perfil
        </a>
        <a href="/">
          <img alt="imagem" src={Book.src} />
          Recados
        </a>
        <a href="/">
          <img alt="imagem" src={Camera.src} />
          Fotos
        </a>
        <a href="/">
          <img alt="imagem" src={Sun.src} />
          Depoimentos
        </a>
      </nav>
      <hr />
      <nav>
        <a href="/">
          <img alt="imagem" src={Plus.src} />
          GitHub Trends
        </a>
        <a href="/logout">
          <img alt="imagem" src={Logout.src} />
          Sair
        </a>
      </nav>
    </ProfileSidebarMenuWrapper>
  )
}
