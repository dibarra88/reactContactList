import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from 'material-ui/List';
import { fetchContacts } from '../actions/contacts';
import ContactItem from './ContactItem';
import Card from 'material-ui/Card';

const cardStyle = {
    width: "1000px",
    margin: "0 auto",
    textTransform: "capitalize"
}

class Contacts extends Component {
    render() {
        return (
            <Card style={cardStyle}>
                <List>
                    {this.props.contacts.map(contact => (
                        <ContactItem key={contact.id} {...contact} />
                    ))}
                </List>
            </Card>
        )
    }
}
function mapStateToProps(appState) {
    return {
        contacts: appState.contacts
    }
}
export default connect(mapStateToProps)(Contacts)