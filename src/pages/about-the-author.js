import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/img/dummy.png'
import { Helmet } from 'react-helmet'

const ATB = (props)=>{
	
	return (
		<>
            <Helmet title="Chereva Marley | About the Author"/>
		 	<Layout>
                 
		 		<Nav pathExt={props.path}/>
                 <Banner 
                 spanFirst={`About The`}
                 contextHeading={`Author`}/>

		 		<div className="container">
				    <section className="body-author-contents columns">

                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img src={AuthorImg} />
                            </div>

                            <div className="heading-quote">
                                <h4>
                                    Life is full of entanglement. I believe that
                                    had I not recognized that I needed to make some changes
                                    in myself earlier, I would not have been able to find that
                                    hidden door to go through to come out victoriously. It
                                    took all my newfound self-will to move on.
                                </h4>
                                
                                <span className="ata-span-fx">
                                    author quote
                                </span>
                            </div>
                        </div>

                        <article className="article-section column" id="author">
                            <p>
                                Chereva Marley lives in Las Vegas, Nevada, working in the online
                                digital marketing business. Chereva spent the last thirty-five years as a
                                dealer/supervisor in some of Las Vegas's elite casinos.
                            </p>

                            <p>
                                Outgoing, hardworking, and honest to a fault, Chereva spends a lot of time
                                trying to help others discover their unique passion and find peace with their
                                struggles. Chereva’s philosophy in life is that we are where we are supposed to
                                be. Not to fight, kill, and hate. We are all put together to learn from each other,
                                to lend a hand when needed, to love and support each other, and pay it forward.
                            </p>

                            <p>
                                So pick up the cards your dealer gave you and either double down or take a hit
                                because your life is not a roll of the dice; it’s the one thing you control.
                            </p>

                            
                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author |  Writer </span>
                                    <span className="ata-name">Chereva Marley </span>
                                </span>
                            </p>
                        </article>

                    </section>
                </div>

		 	</Layout>
		</>
	)
}


export default ATB;