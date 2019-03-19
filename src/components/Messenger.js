import React, { Component } from 'react';

let users = []

class Messenger extends Component {

  render() {

    for(let i=0;i<25;i++) {
      users.push(
        <div className='user'>
          <img className='m-avatar' src={this.props.faker.image.image()} alt={this.props.faker.name.firstName} />
          {this.props.faker.name.firstName() + ' ' + this.props.faker.name.lastName()}
        </div>)
    }

    return (
      <div className='messages'>
        {
        users.map(user => user)
        }
      </div>
    );
  }

}

export default Messenger;
