import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => {
      this.setState({ activeItem: name })
  }
  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
         Home
        </Menu.Item>

        <Menu.Item
          name='savedbooks'
          active={activeItem === 'savedbooks'}
          onClick={this.handleItemClick}
        >
          Saved Books
        </Menu.Item>

        <Menu.Item
          name='searchbooks'
          active={activeItem === 'searchbooks '}
          onClick={this.handleItemClick}
        >
         Search Books
        </Menu.Item>
      </Menu>
    )
  }
}