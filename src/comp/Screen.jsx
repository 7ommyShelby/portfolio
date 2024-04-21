import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect';

const Screen = () => {
    return (
        <>
            <section className=' w-screen overflow-hidden flex justify-center'>
                <div className="w-3/4 flex gap-4">
                    <div className="left flex justify-center flex-col">

                        <TypeWriterEffect
                            textStyle={{
                                color: '#8f8f8f',
                                fontWeight: 500,
                                fontSize: '1.5em',
                            }}
                            startDelay={200}
                            cursorColor="#3F3D56"
                            multiText={[
                                'Hey there, I am Arya',
                                'and I am a Front-End Developer',
                            ]}
                            multiTextDelay={1500}
                            multiTextLoop={true}
                            typeSpeed={30}
                        />
                        <p>Resolving design problems, building smart user interfaces and useful interactions, developing rich web applications and seamless web experiences.</p>

                    </div>
                    <div className="right"></div>
                </div>
            </section>
        </>
    )
}

export default Screen
