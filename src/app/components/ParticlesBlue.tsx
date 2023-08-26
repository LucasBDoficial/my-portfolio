'use client'

import React, { useCallback } from "react";
import { Particles}  from "react-particles";
import { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

export default function ParticlesBlue() {

    const particlesInit = useCallback(async (engine: Engine)=> {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async () => {}, []);

    return (
        <Particles 
        className="w-full h-[100%] max-[600px]:h-[95%] absolute translate-z-0 z-10 hidden"
        id="tspb"
        init={particlesInit} 
        loaded={particlesLoaded}
        options={{
            fullScreen: { enable: false},
            background: {
                color: {
                    value: '',
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: false,
                        mode: 'push',
                    },
                    onHover: {
                        enable: true,
                        mode: 'repulse',
                    },
                    resize: true,
                },
                modes: {
                    push: {
                        quantity: 90
                    },
                    repulse: {
                        distance: 100,
                        duration: 0.4,
                    }
                }
            },
            particles: {
                color: {
                    value: '#806192',
                },
                links: {
                    color: '#163480',
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1
                },
                collisions: {
                    enable: true,
                },
                move: {
                    direction: 'none',
                    enable: true,
                    outModes: {
                        default: 'bounce',
                    },
                    random: false,
                    speed: 1,
                    straight: false
                },
                number: {
                    density: {
                        enable: true,
                        area: 600
                    },
                    value: 90,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: 'circle',
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
        }} 
        />
    )  
}