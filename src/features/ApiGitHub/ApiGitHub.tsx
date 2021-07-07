import {Link} from 'react-router-dom'

import {useState} from 'react'

import { Card, TextField, InputAdornment, IconButton} from '@material-ui/core';

import { AccountCircle } from '@material-ui/icons';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

import {useStyle} from './ApiGitHub.style'

function ApiGitHub() {
  const style = useStyle();

  const [profile, setProfile] = useState("");

  return (
    <div className={style.container}>
      <Card className={style.MuiCardRoot}>
        <div className={style.searcherContainer}>
          <TextField id="outlined-basic" 
            label="Procure por um perfil" 
            variant="outlined"
            color="secondary" 
            onChange={(event) => setProfile(event.currentTarget.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }} /> 

          <Link to={`/user/${profile}`}>
            <IconButton 
              className={style.button} 
              color="secondary" 
              aria-label="add to shopping cart"
              >
              <SearchOutlinedIcon color="secondary"/>
            </IconButton>
          </Link>
        </div>
      </Card>
    </div>
  )
}

export {ApiGitHub}
