import React from 'react'
import './Home.css';
import Banner from './Banner'
import Card from './Card'

function Home() {
    return (
        <div className='home'>
            
            <Banner />
            <div className='home__section'>
            <Card
                src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fblogs-images.forbes.com%2Flarryolmsted%2Ffiles%2F2016%2F10%2FPeninsula-Hong-KongSized.jpg?im_w=720"
                title="luxurious stays"
                description="Unique activities we can do together, led by a world of hosts."
            />
            <Card
                src="https://i.pinimg.com/originals/74/8f/96/748f96db781ad7dc49b08f1b92432ea2.jpg?im_w=720"
                title="Unique stays"
                description="Spaces that are more than just a place to sleep."
            />
            <Card
                src="https://static.tripzilla.com/thumb/6/c/154732_800x.jpg?im_w=720"
                title="Entire homes"
                description="Comfortable private places, with room for friends or family."
            />
            </div>
            <div className='home__section'>
            <Card
                src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                title="3 Bedroom Flat in Bournemouth"
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                price="£130/night"
            />
            <Card
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="Penthouse in London"
                description="Enjoy the amazing sights of London with this stunning penthouse"
                price="£350/night"
            />
            <Card
                src="https://media.nomadicmatt.com/2018/apartment.jpg"
                title="1 Bedroom apartment"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="£70/night"
            />
            </div> 
        </div>
    )
}

export default Home
