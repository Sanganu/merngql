import React, { Component } from 'react'


export default class MenuExampleTabularOnLeft extends Component {
  state = { activeItem: 'bio' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <section   width={4}>
          <ul fluid vertical tabular>
            <li
              name='bio'
              active={activeItem === 'bio'}
              onClick={this.handleItemClick}
            >Bio</li>
            <li
              name='pics'
              active={activeItem === 'pics'}
              onClick={this.handleItemClick}
            >Pic</li>
            <li
              name='companies'
              active={activeItem === 'companies'}
              onClick={this.handleItemClick}
            >companies</li>
            <li
              name='links'
              active={activeItem === 'links'}
              onClick={this.handleItemClick}
            >d</li>
          </ul>
        </section>

      
    )
  }
}