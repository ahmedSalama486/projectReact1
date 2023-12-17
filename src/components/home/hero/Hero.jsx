import React from 'react'
import Title from '../../common/title/Title'
import "./hero.css"
import "../../../App.css"

const Hero = () => {
  return (
    <>
    <section className="hero">
        <div className="container">
            <div className="row">
                <Title subtitle='WELCOME TO THINK TANK' title='Best OnLine Education' />
                <p>Think Tank is the Web Site for Education And Learning . It Can Get Some 
                Courses and For Many Fildes Like Programming and Every Fildes </p>
                <div className="button">
                    <button className='primary-btn'>
                        GET STARTED NOW! <i className="fa fa-long-arrow-alt-right"></i>
                    </button>
                    <button >
                            VIEW COURSES<i className="fa fa-long-arrow-alt-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </section>
    <div className="margin"></div>
    </>
  )
}

export default Hero