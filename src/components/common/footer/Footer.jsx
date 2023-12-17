import React from 'react'
import { blog } from '../../../dummydata'
import './footer.css'

const Footer = () => {
  return (
    <>
    <section className="newletter">
        <div className="container flexSB">
            <div className="left row">
                <h1>News Letter -Stay tune and get the latedt update</h1>
                <span>Far far away , behind the world mountains</span>
            </div>
            <div className="right row">
                <input type="text" placeholder='Enter email address'/>
                <i className="fa fa-paper-plane"></i>
            </div>
        </div>
    </section>
    <footer>
        <div className="container padding">
            <div className="box logo">
                <h1>Think Tank</h1>
                <span>Online Education Courses & learing</span>
                <p>This Site Intreduse a Some Of Courses For User TO Learn a Trak to Improve Your Self </p>
                <i className="fab fa-facebook icon"></i>
                    <i className="fab fa-instagram icon"></i>
                    <i className="fab fa-twitter icon"></i>
                    <i className="fab fa-youtube icon"></i>
            </div>
            <div className="box link">
                <h3>Quck Links</h3>
                <ul>
                    <li>About Us</li>
                    <li>About Us</li>
                    <li>About Us</li>
                    <li>About Us</li>
                </ul>
            </div>
            <div className="box link">
                <h3>Explore</h3>
                <ul>
                    <li>About Us</li>
                    <li>About Us</li>
                    <li>About Us</li>
                    <li>About Us</li>
                </ul>
            </div>
            <div className="bxo">
                <h3>Recent Post</h3>
                {blog.slice(0,3).map((val)=>(
                    <div className="items flexSB">
                        <div className="img">
                            <img src={val.cover} alt="" />
                        </div>
                        <div className="text">
                            <span>
                                <i className='fa fa-user'></i>
                                <label htmlFor="">{val.type}</label>
                            </span>
                            <span>
                                <i className='fa fa-calender-alt'></i>
                                <label htmlFor="">{val.date}</label>
                            </span>
                            <h4>{val.title}</h4>
                        </div>
                    </div>
                ))}
                </div>
                <div className="box last">
                    <h3>Have a Question?</h3>
                    <ul>
                        <li>
                            <i className="fa fa-map">
                            </i>
                            203 fake ST mount view , san francisico , calfornia
                        </li>
                        <li>
                            <i className="fa fa-phone-alt">
                            </i>
                            +2001285655117
                        </li>
                        <li>
                            <i className="fa fa-paper-plane"></i>
                            AhmedSalama@gmail.com
                        </li>
                    </ul>
                </div>
        </div>
    </footer>
    <div className="legal">
        <p>Copyright @2023 All rights reserved | This template is made  <i className='fa fa-heart'></i> By a TEAM React</p>
    </div>
    </>
  )
}

export default Footer