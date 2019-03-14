import React, { Component } from 'react';

import { Icon } from 'semantic-ui-react'

class NavBar extends Component {

  render() {
    return (
      <div className='navbar'>

      <div className='one'>
      <Icon name='facebook' size='big' />
      <form className='searchbar'>
        <input placeholder='Search'/>
      </form>
      </div>

      <div className='two'>
      Profile <span>|</span> Home <span>|</span> Create <span>|</span>
      <Icon id='icon' name='user' size='large'/>
      <Icon id='icon' name='facebook messenger' size='large'/>
      <Icon id='icon' name='bell' size='large'/>
      <span>|</span>
      <Icon id='icon' name='question circle' size='large'/>
      <Icon id='icon' name='caret down' size='large'/>
      </div>
      </div>
    );
  }

}

export default NavBar;
