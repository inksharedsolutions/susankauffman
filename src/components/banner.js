import React from 'react'
import {Link} from 'gatsby'
import  ImgBanner from '../../static/banner/banner_img_2.png'

const Banner = ()=>{
    return (
        <>
            <section className="banner-section">
                <div className="container-gt">
                    <div className="grid-two-columns" id="banner-layout-responsive">
                        
                        <div className="right-col banner-img">
                            <img src={ImgBanner}/>
                        </div>


                        <div className="left-col">
                            <div className="banner-content-wrapper">
                                <h1>
                                    <div className="grid-element-text">
                                        <p className="div-text-elem">
                                            <span className="f-letter-elem">A</span>
                                        </p>
                                        <p className="div-text-elem">
                                            <span>Young woman</span> 
                                            <span>Journal</span>
                                        </p>
                                    </div>
                                </h1>
                                
                                <p>
                                    Her story is starkly shared so that others might find insight,
                                    or maybe comfort from a kindred spirit, into a life of betrayals, 
                                    loss, and abuse.
                                </p>

                                <button>
                                    <Link to="/about-the-author">
                                        Read More
                                    </Link>
                                </button>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner;