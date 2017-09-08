import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { ListItem } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'

class TodoItem extends Component {

    render() {
        return (
            <Link to={`/contacts/${this.props.id}`}  style={{ textDecoration: 'none' }}>
                <ListItem
                    primaryText={<span>{this.props.name.first} {this.props.name.last}</span>}
                    leftAvatar={<Avatar src={this.props.picture.thumbnail} />}
                />
            </Link>
        )
    }
}

export default TodoItem