import React from 'react'
import './contact.css'
import Back from '../common/back/Back'

const Contact = () => {
    const map ='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13739.107691341913!2d30.999092000000005!3d30.583842199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1702838487322!5m2!1sar!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
  return (
    <>
        <Back title='Contact Us' />
        <section className="contact padding">
            <div className="container shadow flexSB">
                <div className="left row">
                    <iframe src={map}></iframe>
                </div>
                <div className="right row">
                    <h1>Contact Us</h1>
                    <p>Atque sint ducimus nulla cumque dolorem? Et.</p>
                    <div className="items grid2">
                        <div className="box">
                            <h4>Address:</h4>
                            <p>128 westHame Zifta Geypt</p>
                        </div>
                        <div className="box">
                            <h4>Email:</h4>
                            <p>AhmedSalama760@gmail.com</p>
                        </div>
                        <div className="box">
                            <h4>phone:</h4>
                            <p>+2001285655117</p>
                        </div>
                    </div>
                    <form action="">
                        <div className="flexSB">
                            <input type="text" placeholder='Name' />
                            <input type="email" placeholder='email' />
                        </div>
                        <input type="email" placeholder='Subject' />
                        <textarea  cols="30" rows="10">
                            Create a massage in here...
                        </textarea>
                        <button className="primary-btn">
                            SEND MASSAGE
                        </button>
                    </form>
                    <h3>follow us here</h3>
                    <span>facebook twitter instagram tiktok</span>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contact