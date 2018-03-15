import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {isEmpty, get} from "lodash";
import { Link } from 'react-router-dom';

import {getVideos} from "../actions/dashboard.actions";

class Dashboard extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    this.props.actions.getVideos();
  }

  render(){

    let videoComponents = this.props.videos.map((video)=>{
      return (
                <div className="column is-6">
                  <div className="card">
                    <div className="card-image has-text-centered">
                        <i className="fa fa-paw"></i>
                    </div>
                    <div className="card-content">
                      <div className="content">
                        <h4> {video.name} </h4>
                        <iframe width="100%" height="350" src={video.url} />
                      </div>
                    </div>
                  </div>
                </div>
            );
    });

    return (
        <div className="container-fluid">
          <section className="hero is-info is-medium is-bold">
            <div className="hero-head">
              <nav className="navbar">
                <div className="container">
                  <div className="navbar-brand">
                    <a className="navbar-item">
                      <h1>React Youtube</h1>
                    </a>
                    <span className="navbar-burger burger" data-target="navbarMenu">
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                  </div>
                  <div id="navbarMenu" className="navbar-menu">
                    <div className="navbar-end">
                      <a className="navbar-item">
                        {get(this.props.auth, "user.displayName", "John Doe")}
                      </a>
                      <a className="navbar-item" href="/">
                        Logout
                      </a>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </section>

          <section className="container">
            <div className="columns is-multiline features">
              {videoComponents}
            </div>
          </section>
          <footer className="footer">
            <div className="container">
              <div className="content has-text-centered">
                <p>
                  @Navin
                </p>
              </div>
            </div>
          </footer>
        </div>
    );
  }
};

const {object, array} = PropTypes;

Dashboard.propTypes = {
  videos: array,
  auth: object,
  actions: object
}

const mapStateToProps = (state) => {
    return {
      videos: get(state, "videos", []),
      auth: get(state, "auth", []),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
          getVideos
        }, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
