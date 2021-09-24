import React from 'react'
import { useState } from 'react';
import './works.scss';


const Works = () => {
    const[currentSlide, setCurrentSlide] = useState(0)
    const data=[
        {
            id: 1,
            title: 'Weather App',
            desc: 'A weather forecast application which uses an open weather data website API to get the data using city name as an input. It displays the weather with background image representing the weather.Built with HTML|CSS|BOOTSTRAP|Javascript',
            image: 'https://res.cloudinary.com/lidu4394/image/upload/v1616172130/zh4oqmk0aqbkrsoxixhk.png',
            code:  'https://github.com/Lidya1234/weather_app',
            demo: 'https://lidya1234.github.io/weather_app'
        },
        {
            id: 2,
            title: 'Find-your-house',
            desc: 'A website for renting a house which fetches data from https://findlidushouse.herokuapp.com API which is built with Ruby on Rails.Built with React|ROR|CSS|BOOTSTRAP',
            image: 'https://res.cloudinary.com/lidu4394/image/upload/v1621517710/vu-anh-TiVPTYCG_3E-unsplash_eivp1p.jpg',
            code:  'https://github.com/Lidya1234/find_my_house',
            demo: 'https://jovial-agnesi-9bf50a.netlify.app/'
        },
        {
            id: 3,
            title: 'Twitter redesign ',
            desc: 'A twitter redesign with two main pages the home page and user page. Users can follow, unfollow and see other users profiles. A user can create a post and can edit a post.                                      Built with HTML|CSS|BOOTSTRAP|ROR.HTML|CSS|RUBY ON RAILS',
            image: 'https://res.cloudinary.com/lidu4394/image/upload/v1616167294/te5vmhwba5lkf4ficeke.png',
            code:  'https://github.com/Lidya1234/tweeter_redesign',
            demo: 'https://my-tweeter-redesign.herokuapp.com/'
        },
        {
            id: 4,
            title: 'Turn based RPG ',
            desc: 'A RPG game with two characters chasing balls that move in all directions. The characters interchange their role when you click the space bar.Built with HTML|CSS|javascript|phaser',
            image: 'https://res.cloudinary.com/lidu4394/image/upload/v1616172131/ggqbr03ot4v4rlrxb5kr.png',
            code:  'https://github.com/Lidya1234/RPG-game',
            demo: 'https://romantic-albattani-29c047.netlify.app/'
        },
        {
            id: 5,
            title: 'Social Media App',
            desc: 'A Social Media App with which a user can send,delete,confirm  friend requests.                          Built with HTML|CSS|BOOTSTRAP|ROR.',
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
                                <span><a href={d.code} target="_blank" rel='noreferrer'>Code</a>    <a href={d.demo} target="_blank" rel='noreferrer'>Demo</a></span>
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