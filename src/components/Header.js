import React from 'react';
import AppBar from 'material-ui/AppBar';
import {withRouter} from 'react-router-dom'

const titleStyle = {
  cursor: 'pointer'
}

const Header = (props) => {
  return (
    <AppBar
      title='My Peeps' 
      style={{fontWeight:100}}
      titleStyle={titleStyle}
      showMenuIconButton={false} 
      onTitleTouchTap={(e) => {props.history.push('/')}}
    />
  )
}

export default withRouter(Header)