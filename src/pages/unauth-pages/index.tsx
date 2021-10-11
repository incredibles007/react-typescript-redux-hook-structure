import React, { FunctionComponent } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import LoginPage from './login-page';
import SignupPage from './signup-page';
import HomePage from './home-page';
import PostJobPage from './post-job-page';
import MatchFreelancersPage from './match-freelancers-page'
import SelectMeetingPage from './select-meeting-page'
import ProfilePage from '../auth-pages/profile-page'
import MeetingsPage from '../auth-pages/meetings-page'
import MeetingPage from '../auth-pages/meeting-page'


const UnAuthPages: FunctionComponent = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/auth/login" component={LoginPage} />
        <Route exact path="/freelancer/signup" component={SignupPage} />
        <Route exact path="/client/signup" component={SignupPage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/client/post-job" component={PostJobPage} />
        <Route exact path="/client/match-freelancers" component={MatchFreelancersPage} />
        <Route exact path="/client/select-meeting" component={SelectMeetingPage} />
        <Route exact path="/profile/:id" component={ProfilePage} />
        <Route exact path="/meetings" component={MeetingsPage} />
        <Route exact path="/meeting/:id" component={MeetingPage} />
        <Redirect to="/home"></Redirect>
      </Switch>
    </React.Fragment>
  );
};

export default UnAuthPages;
