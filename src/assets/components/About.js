import React from 'react';
import './second.css'

function About() {
    return (
        <div className='container flex-colum'>
            <div className="heroSection" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60)' }}>
                <h1>Who are We</h1>
            </div>
            <div className="subContainer" style={{marginTop:"90px"}}>
                <div className="text_container">
                    <div className="column1">
                        <h1>Event Flow</h1>
                    </div>
                    <hr style={{marginLeft : "30px",
                marginRight : "30px"
                }}/>
                    <div className="column2">
                        <p>EventFlow is a dynamic platform that bridges event aspirations with reality. Admins wield the power to curate exceptional experiences, while users effortlessly discover, book, and engage in a world of captivating events. Seamlessly connect with the events that matter most, whether it's for leisure, learning, or celebration. Join us and let your event journey flourish!</p><br /><br />

                    </div>
                </div>

                <div className="our-story">
                    <div className="row1">
                        <h1>our <span>story</span></h1>
                        <p>The journey of EventFlow began with a simple yet powerful idea: to create a space where events could be curated, discovered, and celebrated like never before.
                            </p><br />
                        <p>Our founders, driven by a passion for seamless experiences, saw the need to bridge the gap between event organizers and enthusiastic attendees. With a shared vision of empowering both event creators and participants, they embarked on a mission to craft a platform that would redefine the way events are brought to life.</p>
                        <p>Countless brainstorming sessions, sleepless nights, and dedicated efforts later, EventFlow emerged as a beacon of innovation and connection. We believe that every event has a story to tell, and every moment deserves to be shared, cherished, and remembered.</p>
                        <p>From the tireless work of our development team to the creative insights of our designers, each element of EventFlow has been meticulously crafted to offer a user experience that's as seamless as it is inspiring. Our commitment to excellence drives us to continually enhance our features, making event discovery and engagement effortless for both admins and users.</p>
                        <p>Today, EventFlow stands as a testament to collaboration, passion, and the relentless pursuit of making events not just happen, but truly come alive. We invite you to be a part of our story, to explore the boundless world of events, and to curate, discover, and celebrate with us. Together, let's turn every event into a cherished memory and every moment into an unforgettable experience.</p>
                    </div>
                    <div className="row2">
                        <hr style={{marginLeft : "30px",
                    marginRight : "30px"
                    }}/>
                        <img src="https://i.ytimg.com/vi/pn44Q-1MnyI/maxresdefault.jpg" alt="" />
                    </div>
                </div>

                <div className="our-story">
                    <div className="row2 col2">
                        <img src="https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX35315077.jpg" alt="" />
                        <hr style={{marginLeft : "30px",
                    marginRight : "30px"
                    }}/>
                    </div>
                    <div className="row1 col1">
                        <h1>our <span>Founder</span></h1>
                        <p>Meet the visionary mind behind EventFlow, Usman Javed. With a passion for innovation and a drive to transform the way we experience events, Usman embarked on a journey to create a platform that would empower event organizers and attendees alike.</p><br />
                        <p>Usman's story is one of determination, fueled by his belief that events have the power to inspire, connect, and leave lasting memories. Drawing from his background in technology and a deep understanding of user dynamics, he envisioned a platform that seamlessly brings event creators and enthusiasts together.</p>
                        <p>Through countless hours of research, collaboration, and hands-on development, Usman's dedication led to the birth of EventFlow. His commitment to excellence is evident in every aspect of the platform, from its intuitive user interface to its powerful features that cater to both admins and users.</p>
                        <p>As a leader, Usman's guiding principle is to always put the user first. He believes that technology should amplify human experiences, and EventFlow stands as a testament to this philosophy. With Usman at the helm, EventFlow continues to evolve, creating a space where events thrive, connections flourish, and memories are made.</p>
                        <p>Join Usman on this transformative journey as we shape the future of event experiences together. His passion, innovation, and unwavering dedication continue to drive EventFlow's mission to inspire, connect, and elevate the way we engage with events.</p>
                    </div>
                </div>


                <div className="vision">
                    <div className="row1 vis1">
                        <h1>our <span>vision</span></h1>
                        <p>At EventFlow, we envision a world where every event is a masterpiece waiting to be discovered and every moment becomes a cherished memory. Our vision is to revolutionize the way events are curated, experienced, and shared, connecting people through meaningful experiences that transcend boundaries.</p><br />
                        <p>We strive to empower event creators, enabling them to bring their visions to life with seamless tools and resources. We aim to provide them with a platform that not only showcases their creativity but also fosters engagement and interaction among attendees.</p>
                        <p>For event enthusiasts, our vision is to offer a hub of endless inspiration and possibilities. We want to be the go-to destination for discovering events that resonate with passions, interests, and desires. With intuitive features, easy booking, and personalized recommendations, we aim to make event participation a breeze.</p>
                        <p>In this future we're building, events won't just be events – they'll be transformative moments that connect people, spark conversations, and leave lasting impressions. We envision EventFlow as a catalyst for creating vibrant communities, fostering personal growth, and shaping a global culture of shared experiences.</p>
                        <p>As we journey toward this vision, we remain committed to innovation, user-centric design, and fostering connections that go beyond the digital realm. Together with our users, partners, and stakeholders, we're turning this vision into reality, one event at a time. Join us as we redefine the art of experiences and shape the future of events.</p>
                    </div>
                    <div className="row2 vis2">
                        <hr style={{marginLeft : "30px",
                    marginRight : "30px"
                    }}/>
                        <img src="https://th.bing.com/th/id/OIP.rIjAoTFRX3GwYuSjd-eyQAHahr/?pid=ImgDet&w=538&h=528&rs=1" alt="" width={'100px'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
