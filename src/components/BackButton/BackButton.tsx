import { useHistory } from "react-router-dom";
import {IconButton} from '@material-ui/core'

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import {useStyle} from './BackButton.style'

function BackButton() {

  const history = useHistory();

  function handleClick(){
    history.push("/")
  }

  const styles = useStyle();
  return (
    <div className={styles.backButton}>
      <IconButton 
        color="primary" 
        aria-label="add to shopping cart"
        onClick={handleClick}>
              <ArrowBackIosIcon color="secondary"/>
      </IconButton>
    </div>
  )
}

export { BackButton }
