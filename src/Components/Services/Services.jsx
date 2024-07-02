import React from 'react'
import './Services.css'
import img1 from '../../assets/poster.svg'
import img2 from '../../assets/photo.svg'
import img3 from '../../assets/video.svg'
import img4 from '../../assets/ad.svg'
import img5 from '../../assets/yt.svg'
import img6 from '../../assets/loc.svg'
import img7 from '../../assets/color.svg'

function Services() {
    const service = [
        {
            img:img1,
            service:'poster design',
            des:'Eye-catching and impactful posters for events, promotions, and advertising campaigns. Our designs are crafted to grab attention and convey your message effectively.'
        },
        {
            img:img2,
            service:'photo album editing',
            des:'Transform your photo collections into beautiful, professionally edited albums. We enhance your photos and create layouts that tell a captivating story.'
        },
        {
            img:img3,
            service:'video album editing',
            des:'Turn your video footage into compelling video albums. We edit, refine, and add special effects to create memorable video presentations.'
        },
        {
            img:img4,
            service:'Ad flim',
            des:'Engage your audience with high-quality ad films. From concept to production, we create advertisements that highlight your brand and captivate viewers.'
        },
        {
            img:img5,
            service:'YouTube Channel Maintenance',
            des:'Grow your YouTube presence with our comprehensive channel maintenance services. We manage your content, optimize videos, and enhance your channel’s visibility.'
        },
        {
            img:img6,
            service:'Logo Designs',
            des:'Create a strong brand identity with our custom logo design services. We design logos that represent your brand’s values and make a lasting impression.'
        },
        {
            img:img7,
            service:'Color Grading',
            des:'Enhance the visual appeal of your videos and photos with our professional color grading services. We adjust colors, tones, and contrasts to create a polished and cohesive look.'
        },
    ]
  return (
    <>
    <section className="service-section">
        <h1 className="title mont">SERVICES</h1>
        <div className="services-container">
        {
            service.map((data,index)=>{
                return(
                    <div className="service" key={index}>
                    <img src={data.img} />
                    <h3 className='mont'>{data.service}</h3>
                    <p className="lora">{data.des}</p>
                </div>
                )
            })
        }
        </div>
    </section>
    </>
  )
}

export default Services