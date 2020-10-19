import React, { useState } from 'react';
import './styles.scss';
import Button from '../../core/components/Button';
import BaseForm from './components/BaseForm';
import InfoLoader from './components/Loaders/InfoLoader';
import SearchResult from './components/SearchResult';
import { User } from '../../core/types/User';
import { makeRequest } from '../../core/utils/request';
import ImageLoader from './components/Loaders/ImageLoader';

type FormState = {
  login: string;
};

type FormEvent = React.ChangeEvent<HTMLInputElement>;

const Search = () => {
  const [formData, setFormData] = useState<FormState>({
    login: '',
  });
  const [userResponse, setUserResponse] = useState<User>({
    login: '',
    id: 0,
    node_id: '',
    avatar_url: '',
    gravatar_id: '',
    url: '',
    html_url: '',
    followers_url: '',
    following_url: '',
    gists_url: '',
    starred_url: '',
    subscriptions_url: '',
    organizations_url: '',
    repos_url: '',
    events_url: '',
    received_events_url: '',
    type: '',
    site_admin: false,
    name: '',
    company: '',
    blog: '',
    location: '',
    email: {},
    hireable: false,
    bio: {},
    twitter_username: '',
    public_repos: 0,
    public_gists: 0,
    followers: 0,
    following: 0,
    created_at: '',
    updated_at: '',
  });
  const [hide, setHide] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleOnChange = (event: FormEvent) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData((data) => ({ ...data, [name]: value }));
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const payload = {
      ...formData,
    };
    setHide(false);
    setIsLoading(true);
    makeRequest({ url: `${formData.login}`, method: 'GET', data: payload })
      .then((user) => setUserResponse(user.data))
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div className="search-background-container">
      <div className="search-container">
        <h1 className="search-title">Encontre um perfil Github</h1>
        <form onSubmit={handleSubmit}>
          <input
            value={formData.login}
            name="login"
            type="text"
            onChange={handleOnChange}
            placeholder="Usuário github"
            className="search-input"
          />

          <Button buttonText="Encontrar" />
        </form>
      </div>
      {hide ? (
        <div></div>
      ) : (
        <BaseForm>
          {isLoading ? (
            <>
              <ImageLoader />
              <div className="search-info-result">
                <InfoLoader />
              </div>
            </>
          ) : (
            <SearchResult {...userResponse} />
          )}
        </BaseForm>
      )}
    </div>
  );
};

export default Search;
