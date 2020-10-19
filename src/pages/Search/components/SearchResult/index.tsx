import React from 'react';
import './styles.scss';
import Button from '../../../../core/components/Button';
import InforSearch from '../InfoSearch';
import Info from '../Info';
import { dateFormat } from '../../../../core/utils/dateFormat';

type Props = {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: object;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
};
const SearchResult = ({
  avatar_url,
  html_url,
  name,
  company,
  blog,
  location,
  email,
  public_repos,
  followers,
  following,
  created_at,
}: Props) => {
  return (
    <div className="search-result-container">
      <div className="col-1">
        <img src={avatar_url} alt={name} className="search-result-img" />
        <a href={html_url} target="_blank" rel="noopener noreferrer">
          <Button buttonText="Ver Perfil" />
        </a>
      </div>
      <div className="col-2">
        <div className="search-result-repository">
          <Info name="Repositórios públicos:" result={public_repos} />
          <Info name="Seguidores:" result={followers} />
          <Info name="Seguindo:" result={following} />
        </div>
        <div className="search-result-information">
          <h2 className="search-result-title">Informações</h2>
          <InforSearch name="Empresa:" result={company} />
          <InforSearch name="Website/Blog:" result={blog} />
          <InforSearch name="Localidade:" result={location} />
          <InforSearch name="Membro desde:" result={dateFormat(created_at)} />
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
