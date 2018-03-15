import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-4 is-offset-4">
            <div className="box">
                <h1 className="is-large">Page Not Found</h1>
                <a className="button is-block is-info is-outlined is-large is-fullwidth" href="/">Back to home</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
