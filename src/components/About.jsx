import React, { Fragment } from 'react'
import Form from './Form'

const About = () => {
    return (
        <div className="about">
            <div className="banner">
                <div className='layer'>
                    <h1>About&nbsp;Us</h1>
                </div>
            </div>
            <main >
                <p>
                    Virtual reality (VR) is an interactive computer-generated experience taking place within a simulated environment.
                    It incorporates mainly auditory and visual feedback,
                    but may also allow other types of sensory feedback like haptic.
                    This immersive environment can be similar to the real world or it can be fantastical,
                    creating an experience that is not possible in ordinary physical reality.
                    Augmented reality systems may also be considered a form of VR that layers virtual information over a live camera feed into a headset or through a smartphone or tablet device giving the user the ability to view three-dimensional images.
                </p>
                <div className="contact">
                    <Form />
                </div>
            </main>
        </div>
    )
}

export default About