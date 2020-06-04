import React from 'react'
import {Link} from 'gatsby'
import AuthorImg from '../../static/img/dummy.png'

const LowerMain = ()=>{
    return(
        <>
            <section className="author-section">
                <div className="container-gt">
                    <div className="grid-two-columns" id="author-container">
                        <div className="wrapper-auth-content auth-img-container">
                            <img src={AuthorImg} />
                        </div>

                        <div className="wrapper-auth-content">

                            <p>
                                Chereva Marley lives in Las Vegas, Nevada, working in the 
                                online digital marketing business. Chereva spent the last
                                thirty-five years as a dealer/supervisor in some of Las 
                                Vegas elite casinos.
                            </p>
                            
                            <h1>
                                Chereva Marley
                            </h1>

                            <span className="span-tagline">
                                Author & Writer
                            </span>

                            <button>
                                <Link to="/about-the-author">
                                    Read More
                                </Link>
                            </button>
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LowerMain 