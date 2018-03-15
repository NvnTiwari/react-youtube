import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {isEmpty, get} from "lodash";
import { Link, Redirect } from 'react-router-dom';
import Loader from "react-loader";

import {authenticateUser} from "../actions/auth.actions";

class HomePage extends Component{
  constructor(props){
    super(props);
    this.state = {
      shouldRedirect: false,
      showLoading: false
    };
    this.showLoading = false;
    this.initializeGoogle = this.initializeGoogle.bind(this);
    this.handleGoogleResponse = this.handleGoogleResponse.bind(this);
  }

  componentDidMount(){
    this.handleGoogleResponse();
  }

  initializeGoogle(){
      let provider = new window.firebase.auth.GoogleAuthProvider();
      window.firebase.auth().signInWithRedirect(provider);
  }

  handleGoogleResponse(){
      this.setState({showLoading: true});
      window.firebase.auth().getRedirectResult().then((result) =>  {
          this.setState({showLoading: false});
          if(!isEmpty(get(result, "user"))){
              this.setState({
                shouldRedirect: true
              });
              this.props.actions.authenticateUser(result);
          }
      }).catch((error) => {
          this.setState({showLoading: false});
      });
  }

  render(){
    return (
      <div className="is-text-centered">
        {!this.state.showLoading ? (<section className="hero is-fullheight">
                          <div className="hero-body">
                            <div className="container has-text-centered">
                              <div className="column is-4 is-offset-4">
                                <h3 className="title has-text-grey">Login</h3>
                                <p className="subtitle has-text-grey">Please login to proceed.</p>
                                <div className="box">
                                  <figure className="avatar">
                                    <img src="https://www.google.co.in/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" />
                                  </figure>
                                    <button className="button is-block is-info is-large is-fullwidth" onClick={this.initializeGoogle}>Login</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>) : (
                          <section className="hero is-fullheight">
                          <div className="hero-body">
                            <div className="container has-text-centered">
                              <div className="column is-4 is-offset-4">
                                <div className="box">
                                    <button className="button is-block is-info is-large is-fullwidth" disabled>Loading...</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                        )}
        {this.state.shouldRedirect && <Redirect to="/dashboard" />}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
    return {
        name: "Navin Tiwari"
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
          authenticateUser: authenticateUser
        }, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
