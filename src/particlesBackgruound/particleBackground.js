import React from "react";
import Particles from "react-tsparticles";
import particleConfig from "./particlesConfig";

export default function ParticleBackground(){
    return(
        <Particles params={particleConfig}></Particles>
    );
}