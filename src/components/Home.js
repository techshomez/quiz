import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Home = () => (
    <Fragment>
        <Helmet><title>Quiz | Home</title></Helmet>
        <div id="home">
            <section>
                <div className='cube_d'>
                    <span className="mdi mdi-cube-outline cube"></span>
                </div>
                <h1>Quiz App</h1>
                <div className="play-button-container">
                    <ul>
                        <li><Link className="play-button" to="/play/instructions">Start</Link></li>
                    </ul>
                </div>
            </section>
        </div>
    </Fragment>
  );

export default Home;