import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import EmailIcon from 'material-ui/svg-icons/communication/mail-outline';
import PhoneIcon from 'material-ui/svg-icons/communication/phone';
import LocationIcon from 'material-ui/svg-icons/maps/my-location';
import { fetchContactDetails } from '../actions/contacts';

const cardStyle = {
    width: "1000px",
    margin: "0 auto",
    textAlign: "center",
    textTransform: "capitalize"
}
const imgStyle = {
    maxWidth: "30%",
    minWidth: "30%",
    borderRadius: "50%"
}
const cardTextStyle={
    textAlign:"left"
}
class ContactDetails extends Component {
    static defaultProps = {
        name: {
            first: '',
            last: ''
        },
        picture: {
            large: '',
            medium: '',
            thumbnail: ''
        },
        location:{
            city:'',
            state:''
        }
    }

    componentDidMount() {
        let id = this.props.match.params.id
        fetchContactDetails(id)
    }
    render() {
        return (
            <Card style={cardStyle}>
                <CardMedia>
                    <img src={this.props.picture.large} alt="" style={imgStyle} />
                </CardMedia>
                <CardTitle title={this.props.name.first + " " + this.props.name.last} />
                <CardText style={cardTextStyle}>
                    <List>
                        <ListItem
                            primaryText={this.props.email}
                            leftIcon={<EmailIcon />}
                        />
                        <ListItem
                            primaryText={this.props.phone}
                            leftIcon={<PhoneIcon/>}
                        />
                        <ListItem
                            primaryText={this.props.location.city + ", " + this.props.location.state}
                            leftIcon={<LocationIcon/>}
                        />
                    </List>
                </CardText>
            </Card>

        )
    }
}
function mapStateToProps(appState) {
    return { ...appState.details }
}
export default connect(mapStateToProps)(ContactDetails)