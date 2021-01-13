import React from 'react';

const About = () => {
    return (
        <div className="container" style={{minHeight : '500px'}}>
            <h1>Hello, World!</h1>
            <h2>
              This is a simple CRUD APP built using MERN Stack.
            </h2>
            <h3>Technologies Used:</h3>
            <ol>
                <li>Mongo DB with Mongoose</li>
                <li>Express.js</li>
                <li>Node.js</li> 
                <li>React.js with Hooks</li>
                <li>Redux</li>
                <li>Redux-Thunk</li>
                <li>Axios</li>
                <li>React-Router</li>
                <li>Bootstrap4</li> 
            </ol>
        </div>
    )
}

export default About;