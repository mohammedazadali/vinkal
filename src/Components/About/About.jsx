import React from 'react'
import './About.css'
import tick from '../../assets/tick.png'

function About() {
    const data =[
        {
            data:"We embrace creativity in all its forms and encourage our team to think outside the box."
        },{
            data:"We are committed to delivering the highest quality work, paying attention to every detail to ensure perfection."
        },{
            data:"We conduct our business with honesty and transparency, building trust with our clients and partners."
        },{
            data:"We believe in the power of teamwork and work closely with our clients to understand their needs and bring their vision to life."
        },{
            data:" We stay ahead of industry trends and continuously seek innovative solutions to deliver cutting-edge designs."
        },
    ]
  return (
    <>
    <section className="about-section" id='about'>
        <h1 className="title mont">ABOUT US</h1>
        <p className="lora">
        At Vinkal Production, we bring your ideas to life with our expert design services. Whether you need captivating graphics, stunning videos, or engaging content, our team is here to transform your vision into reality.Our mission is to deliver exceptional design solutions that help our clients stand out in a crowded market. We believe in the power of creativity and strive to push the boundaries of design to create unique and impactful experiences.To be the leading media agency recognized for innovation, creativity, and excellence in design. We aim to build lasting relationships with our clients by consistently exceeding their expectations and contributing to their success.Since our inception, Vinkal Production has grown from a small team of designers to a full-service media agency, serving clients across various industries. Our dedication to quality and innovation has  earned us a reputation as a trusted partner for businesses looking to enhance their brand through exceptional design.
        </p>
        <h1 className="title mont">WHY CHOOSE US?</h1>
        {
            data.map((data,index)=>{
               return(
                <div className='why-con'>
                <img src={tick} />
                <p className="lora">{data.data}</p>
                </div>
               )
            })
        }
    </section>
    </>
  )
}

export default About