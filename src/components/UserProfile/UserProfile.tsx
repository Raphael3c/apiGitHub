import { useEffect, useState } from 'react';

import {useParams} from 'react-router-dom'

import { UserProfileProps } from '../../_config/interface'

import { CircularProgress } from '@material-ui/core';

import { api } from '../../_config/api'

import GitHubIcon from '@material-ui/icons/GitHub';
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import GroupAddOutlinedIcon from '@material-ui/icons/GroupAddOutlined';
import StorageOutlinedIcon from '@material-ui/icons/StorageOutlined';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';

import './UserProfile.css'
import { BackButton } from '../BackButton';

interface ParamsUrl{
  login: string;
}

function UserProfile() {

  const { login } = useParams() as ParamsUrl;

  const [props, setProps] = useState({} as UserProfileProps)
  const [hasContent, setHasContent] = useState(false)
  
  useEffect(() => {
    async function fetchAPI(){
      const result = await api.get(`/${login}`)
      setProps(result.data as UserProfileProps)
      setHasContent(true)
    }

    fetchAPI()
  }, [login])
  
  function dateCreated(){
    let [date, ] = props.created_at.split("T")

    date = date.replaceAll("-", "/")

    return date;
  }

  return (
    <>
    <BackButton />
    <div className="content-main">
      {hasContent ? (
      <>
        <div className="image-profile">
          <img src={props.avatar_url} alt="Foto do perfil procurado" width="250"/>
          <span>{props.login}</span>
        </div>
      
        <div className="content-profile">
          <div className="content-numbers">
            <p><span><GroupAddOutlinedIcon className="margin-right"/> Seguindo: </span>{props.following}</p>
            <p><span><PeopleAltOutlinedIcon className="margin-right"/> Seguidores: </span>{props.followers}</p>
            <p><span><StorageOutlinedIcon className="margin-right"/> Repositórios: </span>{props.public_repos}</p>
          </div>

          <div className="content-bio">
            <span className="title"><MenuBookOutlinedIcon className="margin-right"/> Bio:</span>
            <span>{props.bio}</span>
          </div>
        </div>

        <div className="footer">
          <span><GitHubIcon className="margin-right"/> <a target="_blank" rel="noreferrer" href={props.html_url}>Acesse: {`github.com/${props.login}`}</a></span>
          <p><QueryBuilderOutlinedIcon className="margin-right"/> Criado em: {dateCreated()}</p>
        </div>
      </>) 
      : 
      (<div id="center"> <CircularProgress color="secondary" /> </div>)}
    </div>
    </>
  )
}

export { UserProfile } 
