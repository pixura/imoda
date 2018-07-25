import { createElement, ScriptableScene } from "metaverse-api";

const IMG_TEST = "img-test"

export default class DigitalArtMuseum extends ScriptableScene<{},{volume: number, localPlaying: boolean, externalPlaying: boolean, last: string}> {

    async render() {

        const wall1 = (
            <entity>
                <plane id={IMG_TEST} material="#img-test" scale={3.33} position={{ x: 1.665, y: 1, z: 9.99 }}></plane>
                <plane id={IMG_TEST} material="#zora" scale={3.33} position={{ x: 1.665, y: 4.33, z: 9.99 }}></plane>
                <plane id={IMG_TEST} material="#art1" scale={3.33} position={{ x: 1.665, y: 7.66, z: 9.99 }}></plane>

                <plane id={IMG_TEST} material="#img-test" scale={3.33} position={{ x: 4.995, y: 1, z: 9.99 }}></plane>
                <plane id={IMG_TEST} material="#zora" scale={3.33} position={{ x: 4.995, y: 4.33, z: 9.99 }}></plane>
                <plane id={IMG_TEST} material="#art1" scale={3.33} position={{ x: 4.995, y: 7.66, z: 9.99 }}></plane>

                <plane id={IMG_TEST} material="#img-test" scale={3.33} position={{ x: 8.325, y: 1, z: 9.99 }}></plane>
                <plane id={IMG_TEST} material="#zora" scale={3.33} position={{ x: 8.325, y: 4.33, z: 9.99 }}></plane>
                <plane id={IMG_TEST} material="#art1" scale={3.33} position={{ x: 8.325, y: 7.66, z: 9.99}}></plane>
            </entity>
        );


        const wall4 = (
            <entity>
                <plane  
                    material="#outsideWall" 
                    scale={9.9} 
                    position={{ x: 0.1, y: 5, z: 5 }}
                    rotation={{ x: 0, y: 90, z: 0 }} />
            </entity>
        )
        const wall2 = (
            
            <entity>
                

                <plane id={IMG_TEST} 
                    material="#img-test" 
                    scale={3.33} 
                    position={{ x: 9.8, y: 1, z: 8.325 }}
                    rotation={{ x: 0, y: 90, z: 0 }} />
                
                <plane id={IMG_TEST} 
                    material="#zora" 
                    scale={3.33} 
                    position={{ x: 9.8, y: 4.33, z: 8.325 }}
                    rotation={{ x: 0, y: 90, z: 0 }} />

                <plane id={IMG_TEST} 
                    material="#art1" 
                    scale={3.33} 
                    position={{ x: 9.8, y: 7.66, z: 8.325 }}
                    rotation={{ x: 0, y: 90, z: 0 }} />

                

                
                <plane id={IMG_TEST} 
                    material="#img-test" 
                    scale={3.33} 
                    position={{ x: 9.8, y: 1, z: 4.995 }}
                    rotation={{ x: 0, y: 90, z: 0 }} />
                
                <plane id={IMG_TEST} 
                    material="#zora" 
                    scale={3.33} 
                    position={{ x: 9.8, y: 4.33, z: 4.995 }}
                    rotation={{ x: 0, y: 90, z: 0 }} />

                <plane id={IMG_TEST} 
                    material="#art1" 
                    scale={3.33} 
                    position={{ x: 9.8, y: 7.66, z: 4.995 }}
                    rotation={{ x: 0, y: 90, z: 0 }} />

                


                <plane id={IMG_TEST} 
                    material="#img-test" 
                    scale={3.33} 
                    position={{ x: 9.8, y: 1, z: 1.665 }}
                    rotation={{ x: 0, y: 90, z: 0 }} />
                
                <plane id={IMG_TEST} 
                    material="#zora" 
                    scale={3.33} 
                    position={{ x: 9.8, y: 4.33, z: 1.665 }}
                    rotation={{ x: 0, y: 90, z: 0 }} />

                <plane id={IMG_TEST} 
                    material="#art1" 
                    scale={3.33} 
                    position={{ x: 9.8, y: 7.66, z: 1.665 }}
                    rotation={{ x: 0, y: 90, z: 0 }} />
            </entity>
        )

        const wall3 = (
            <entity>
                <plane id={IMG_TEST} material="#img-test" scale={3.33} position={{ x: 1.665, y: 1, z: 0.1 }}></plane>
                <plane id={IMG_TEST} material="#zora" scale={3.33} position={{ x: 1.665, y: 4.33, z: 0.1 }}></plane>
                <plane id={IMG_TEST} material="#art1" scale={3.33} position={{ x: 1.665, y: 7.66, z: 0.1 }}></plane>

                <plane id={IMG_TEST} material="#img-test" scale={3.33} position={{ x: 4.995, y: 1, z: 0.1 }}></plane>
                <plane id={IMG_TEST} material="#zora" scale={3.33} position={{ x: 4.995, y: 4.33, z: 0.1 }}></plane>
                <plane id={IMG_TEST} material="#art1" scale={3.33} position={{ x: 4.995, y: 7.66, z: 0.1 }}></plane>

                <plane id={IMG_TEST} material="#img-test" scale={3.33} position={{ x: 8.325, y: 1, z: 0.1 }}></plane>
                <plane id={IMG_TEST} material="#zora" scale={3.33} position={{ x: 8.325, y: 4.33, z: 0.1 }}></plane>
                <plane id={IMG_TEST} material="#art1" scale={3.33} position={{ x: 8.325, y: 7.66, z: 0.1}}></plane>
            </entity>
        )

        return (
            <scene>
                <material id="img-test" albedoTexture="https://ipfs.pixura.io/ipfs/QmZFQ88FD82mAwYzFBT96S5BHiwBz1GuDcgbVgQY3PJW1i" roughness={0} />
                <material id="xcopy" albedoTexture="https://ipfs.pixura.io/ipfs/Qmea9m2YjybqfQmnxxnEGYNpaVgC1M7fEQ5gz1E7uVXE9B" roughness={0} />
                <material id="zora" albedoTexture="https://ipfs.pixura.io/ipfs/QmUFkcZ8zbYqHNUD1QCdxqk86RPhg1Ltjy2wy6y8ysKu3L" roughness={0} />
                <material id="art1" albedoTexture="https://ipfs.pixura.io/ipfs/QmWhnPePsjsBPoqb18ZY1sA8uJagDMH5e9nnFZcGs54oUj" roughness={0} />
                <material id="outsideWall" albedoTexture="https://u1.photofunia.com/2/results/l/K/lKHoeEqaW8nbaPG0XOudqA_r.jpg" roughness={0} />


                {wall1}
                {wall2}
                {wall3}
                {wall4}
                
            </scene>
        )
    }
}

