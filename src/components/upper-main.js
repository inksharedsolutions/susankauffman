import React from 'react'
import {Link} from 'gatsby'
import FrontBook from '../../static/books/front_book.png'

const UpperMain =()=>{
    return  (
        <>
            <section className="upper-main">
                <div className="container-gt separator-line">
    
                    <div className="grid-two-columns" id="wrapper-two-books">
                        <div className="content-wraps">
                            <h1>About The Book</h1>

                            <p>
                                Life was a bit different when Chereva came into the world. Simply
                                put, you lived at the pleasure of your parents or guardians. You behaved
                                as your parents told you and unless spoken to, you kept quiet.
                            </p>

                            <button>
                                <Link to="/about-the-book">Read More</Link>
                            </button>

                        </div>

                        <div className="book-wraps">
                            <img src={FrontBook}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UpperMain