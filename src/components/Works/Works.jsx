import React from 'react'
import { useState } from 'react';
import './works.scss';


const Works = () => {
    const[currentSlide, setCurrentSlide] = useState(0)
    const data=[
        {
            id: 1,
            title: 'Weather App',
            desc: 'HTML|CSS|BOOTSTRAP|Javascript',
            image: 'https://res.cloudinary.com/lidu4394/image/upload/v1616172130/zh4oqmk0aqbkrsoxixhk.png',
            code:  'https://github.com/Lidya1234/weather_app',
            demo: 'https://lidya1234.github.io/weather_app'
        },
        {
            id: 2,
            title: 'Find-your-house',
            desc: 'React|ROR|CSS|BOOTSTRAP',
            image: 'https://res.cloudinary.com/lidu4394/image/upload/v1621517710/vu-anh-TiVPTYCG_3E-unsplash_eivp1p.jpg',
            code:  'https://github.com/Lidya1234/find_my_house',
            demo: 'https://jovial-agnesi-9bf50a.netlify.app/'
        },
        {
            id: 3,
            title: 'Twitter redesign ',
            desc: 'HTML|CSS|RUBY ON RAILS',
            image: 'https://res.cloudinary.com/lidu4394/image/upload/v1616167294/te5vmhwba5lkf4ficeke.png',
            code:  'https://github.com/Lidya1234/tweeter_redesign',
            demo: 'https://my-tweeter-redesign.herokuapp.com/'
        },
        {
            id: 4,
            title: 'Turn based RPG ',
            desc: 'HTML|CSS|javascript|phaser',
            image: 'https://res.cloudinary.com/lidu4394/image/upload/v1616172131/ggqbr03ot4v4rlrxb5kr.png',
            code:  'https://github.com/Lidya1234/RPG-game',
            demo: 'https://romantic-albattani-29c047.netlify.app/'
        },
        {
            id: 5,
            title: 'Social Media App',
            desc: 'HTML|CSS|BOOTSTRAP|RUBY ON RAILS',
            image: 'https://res.cloudinary.com/lidu4394/image/upload/v1616167107/zhklfoaz9dzpp0qcu57g.png',
            code:  'https://github.com/Lidya1234/ror-social-scaffold',
            demo: 'https://stayintouch1.herokuapp.com'
        }
    ]

    const handleClick = (way) =>{
        way === 'left' ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1 ) : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0  );
    
    }

    return (
        <div className='works'>
            <div className="slider"  style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {data.map(d =>(
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>
                                <span><a href={d.code} >Code</a>    <a href={d.demo} >Demo</a></span>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.image} alt='' />
                        </div>
                    </div>
                </div>
        ))};


            </div>
            <img src='assets/arrow.png' className='arrow left'alt='left arrow'   onClick={() => handleClick('left')}/>
            <img src='assets/arrow.png' className='arrow right'alt='right arrow'  onClick={() => handleClick()}/>
        </div>
    )
}
export default Works;