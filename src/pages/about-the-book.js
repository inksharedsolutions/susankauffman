import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../images/book_front_1.png'

const ATB = (props)=>{


    const slug =(props.location.href);
    
	const disqusConfig = {
	  shortname: 'chereva-marley',
	  config: { identifier:  12, slug}
    }
    

	return (
		<>
		 	<Layout>
		 		<Nav pathExt={props.path}/>
                 
		 		<Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                 />

                <main className="wrapperMain">
                    <div 
                        className="container"
                        id="book-containers" >

                            <BookInfo
                                data={{
                                    title:`To Hell and Back Again`,
                                    spanTitle: `A Young Woman's Journal`,
                                    imgSrc: Book1,
                                    id:'the_gifted_one',
                                    content:
                                    `Life was a bit different when Chereva came into the world.  Simply put, 
                                    you lived at the pleasure of your parents or guardians. You behaved as
                                    your parents told you and unless spoken to, you kept quiet. Perhaps that
                                    is why, when Chereva broke the strings that attached her to her strict 
                                    parents, she had trouble recognizing dangerous and deceitful people
                                    and allowed them to take advantage of her naivete.

                                    Her struggles were constant, difficult, and barbarous at times.
                                    They came one after another until her spirit had given up.
                                    Fighting depression, thoughts of suicide, and drug abuse, 
                                    discover how she was able to change her way of thinking 
                                    and find inner strength and courage to eradicate her demons without
                                    vindication.  Now, she shares her stories to the world, so you can 
                                    recognize the characteristics and actions of people whose sole purpose 
                                    in life is to try to take what you have and throw you away.`,

                                    ebooks:{
                                        stratton : 'https://www.stratton-press.com/books/to-hell-and-back-again-a-young-womans-journal/',
                                        barnes: 'https://www.barnesandnoble.com/w/to-hell-and-back-again-chereva-s-marley/1131577019?ean=9781643454993',
                                        amazon :'https://www.amazon.com/Hell-Back-Again-Womans-Journal-ebook/dp/B07RN9MFXX/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1557956504&sr=8-1', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/Hell-Back-Again-Womans-Journal/dp/1643451642/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1557956504&sr=8-1',
                                        barnes:'https://www.barnesandnoble.com/w/to-hell-and-back-again-chereva-s-marley/1131577019?ean=9781643451640',
                                        booksamillion:'https://www.booksamillion.com/product/A16595808711?id=8182376598095',
                                    }
                                }}
                            />

                            <div className="commentSection" >
                                <DiscussionEmbed {...disqusConfig} />
                            </div>
                    </div>	
                </main>


		 	</Layout>
		</>
	)
}


export default ATB;