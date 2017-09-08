import React, { Component } from 'react';
import '../styles/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Contacts from './Contacts';
import ContactDetails from './ContactDetails';
import BaseLayout from './BaseLayout';
import {fetchContacts} from '../actions/contacts'

class App extends Component {
  componentDidMount() {
    fetchContacts()
  }
  render() {
    return (
      <MuiThemeProvider store={store}>
        <Router>
          <Provider store={store}>
            <BaseLayout>
              <Switch>
                <Route exact path='/' component={Contacts} />
                <Route path='/contacts/:id' component={ContactDetails} />
              </Switch>
            </BaseLayout>
          </Provider>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
