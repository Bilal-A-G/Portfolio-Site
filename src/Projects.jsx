﻿import Styles from "./Styles.jsx";
import Resources from "./Resources.jsx";

const Projects = [
    {name : "Project Descent", path: "/project-descent", bottom: false, image : Resources.DescentPicture, description :
            "A survival horror game, with an emphasis on smart AI",
        longDescription:
            <div>
                <p>
                    Project Descent is a survival horror game made in Unity with an emphasis on smart AI, where you
                    are trapped in a cave and have to escape from a monster. It features several
                    common industry techniques used in games like Alien Isolation to immerse the player and provide
                    difficulty.
                </p>
            </div>,
        features:
            [{name : "Inverse Kinematics",
                description:
                    <div>
                        This project utilizes inverse kinematics to determine leg placement and other secondary
                        animations.
                        This allows for the monster to convincingly climb walls and ceilings, as well as
                        navigate uneven terrain.

                        <div className="pt-[20px]">
                            The leg placement is controlled by a series of raycast checks, utilizing Unity's
                            animation rigging package to setup the IK constraints
                        </div>
                    </div>, odd: true, underline: true, image: Resources.MonsterIK
            },
                {
                    name: "Behaviour tree",
                    description:
                        <div>
                            This project makes use of behaviour trees, which is an industry standard technique
                            used in AAA games such as Alien Isolation. This allows for complex behaviours,
                            while keeping the game easy to develop and reducing the chances of bugs.

                            <div className="pt-[20px]">
                                The following behaviours have been implemented with a behaviour tree:
                            </div>

                            <div className="flex"><p>o</p> <p className="pl-[6%]">Investigating</p></div>
                            <div className="flex"><p>o</p> <p className="pl-[6%]">Chasing</p></div>
                            <div className="flex"><p>o</p> <p className="pl-[6%]">Despawning</p></div>
                            <div className="flex"><p>o</p> <p className="pl-[6%]">Patrolling</p></div>

                        </div>, odd: false, underline: true, image: Resources.BehaviourTree
                },
                {
                    name: "Dynamic Rope System",
                    description:
                        <div>
                            Lastly, this project features a custom rope renderer,
                            this was originally designed for a feature that has been cut from the game.

                            <div className="pt-[20px]">
                                The rope system also has a crucial optimization implemented, if the rope is
                                straight, then there are fewer vertices in the rope, resulting in better performance.
                                However, if a rope needs to bend, it will dynamically subdivide to ensure there's
                                enough detail
                            </div>
                        </div>, odd : true, underline : false, image : Resources.RopeSystem}],
        github: "https://github.com/Bilal-A-G/Descent", itch : "https://bilal-a-g.itch.io/project-descent", trello : ""
    },
    
    {name : "Ga_U_SS Engine", path: "/gauss-engine", bottom: false, image : Resources.GaussEnginePicture, description : 
            "A C++, user friendly, memory efficient, 3D game engine. Made for Ubisoft Next", 
        longDescription: 
            <div>
                <p> 
                    The Ga_U_SS Engine is a C++ game engine that utilizes no external libraries,
                    aside for the fairly bare-bones NEXT API. It was submitted to Ubisoft Next 2023 in the programming category
                </p>
                <p className="pt-[30px]">
                    While it did not win the competition,
                    the judges have stated the following : 
                    'Overall, your code was solid. Good math (3D Projection) and good use of C++. 
                    Your entry was solid with a solid engine and code structure'
                </p>
            </div>,
        features:
            [{name : "Software 3D Graphics",
                description :
                    <div>
                        This project features 3D graphics (with frustum culling) that utilizes only the CPU for everything.
                        Which means several processes that were automatically done on the GPU, needed to be done
                        manually, such as perspective division

                        <div className="pt-[20px]">
                            Furthermore, I had to recreate the entire coordinate transform pipeline from scratch,
                            even needing to create custom vector and matrix types and define operations with them
                        </div>
                    </div>, odd : true, underline : true, image : Resources.ThreeDGraphicsGif}, 
                {name : "Data Oriented ECS",
                description :
                    <div>
                        Secondly, this project includes a Data Oriented Entity Component System, where all components are stored
                        contiguously in memory for fast access (avoid cache misses)

                        <div className="pt-[20px]">
                            I did this by storing all components in a two dimensional array, where the first dimension index corresponds
                            to component type (the underlying type of an enum), and the second dimension index corresponds to a 
                            entity id (a unique number each entity posesses)
                        </div>
                        
                        <div className="pt-[20px]">
                            Thus, it is possible for a system to get all components of a specific type by indexing the first dimension of the 
                            array using the component's enum
                        </div>
                        
                        <div className="pt-[20px]">
                            It is also possible to get a component that is attached to an entity, by indexing the first dimension of the array with
                            the component enum, and the second dimension with the entity id
                        </div>
                        
                        <div className="pt-[20px] pb-[40px]">
                            A byproduct of this architecture is that all component lookups have O(1) time complexity
                        </div>
                    </div> , odd : false, underline : true, image : Resources.ECSPicture}, 
                {name : "Physics",
                description :
                    <div>
                        Lastly, this project contains a physics system that supports sphere-sphere, box-box, and sphere-box collisions
                        as well as raycasting. This is done via the Seperating Axis Theorm, which 
                        detects collisions by projecting all 'vertices' of a shape
                        onto a various collision axes and checking if there is overlap

                        <div className="pt-[20px] pb-[20px]">
                            The physics system uses simplectic Euler integration to turn acceleration into a position change,
                            and impulse forces to resolve collisions
                        </div>
                    </div>, odd : true, underline : false, image : Resources.PhysicsGif}],
        github: "https://github.com/Bilal-A-G/NEXT-Submission-2023", itch : "", trello : "https://trello.com/b/RNW4WbNu/ubisoft-next-planning"
    },

    {name : "Project Mortalis", path: "/project-mortalis", bottom: false, image : Resources.ProjectMortalisPicture, description :
            "A long-term, post apocalyptic, first person shooter project",
        longDescription:
            <div>
                <p>
                    Project Mortalis is a first person shooter set in a post apocalyptic world.
                    It has been in development for several years to ensure quality
                    and is currently going through a huge rewrite and shift in aesthetics
                </p>
                <p className="pt-[5%]">
                    Furthermore, I created several tools to ease development of this project.
                    To reuse these tools in the future, they have been published as a Unity package named W_I_Zr_Ds
                </p>
                <p className="pt-[10%] underline decoration-dark-red"><a href="https://github.com/Bilal-A-G/W_I_Zr_Ds" target="_blank">W I Zr Ds on Github</a></p>
            </div>,
        features:
            [{name : "Satisfying Gunplay",
                description:
                    <div>
                        This project uses several techniques that made the gunplay very satisfying, these include:
                        <div className="flex pt-[8%]"><p>o</p> <p className="pl-[6%]">Screenshake (when the gun is fired)</p></div>
                        <div className="flex"><p>o</p> <p className="pl-[6%]">Audio</p></div>
                        <div className="flex"><p>o</p> <p className="pl-[6%]">Particles</p></div>
                        <div className="flex"><p>o</p> <p className="pl-[6%]">Weapon Sway (based on mouse position and move direction)</p></div>
                        <div className="flex"><p>o</p> <p className="pl-[6%]">Animations (procedural and keyframed)</p></div>
                    </div>, odd : true, underline : true, image : Resources.GunplayGif},
                {name : "Solid Architecture",
                    description :
                        <div>
                            This project makes use of various design patterns and principles of Object Oriented Programming such as:

                            <div className="flex md:pt-[20px] pt-[5px]"><p>o</p> <p className="pl-[6%]">Observer</p></div>
                            <div className="flex"><p>o</p> <p className="pl-[6%]">State</p></div>
                            <div className="flex"><p>o</p> <p className="pl-[6%]">Object Pooling</p></div>
                            <div className="flex"><p>o</p> <p className="pl-[6%]">Composition and Polymorphism over Inheritance</p></div>
                            <div className="flex"><p>o</p> <p className="pl-[6%]">Abstraction</p></div>

                            <div className="pt-[10%] pb-[10%]">
                                Furthermore, most code in the project is highly reusable and easy to extend. Most of this
                                was implemented via the W_I_Zr_Ds package
                            </div>
                        </div>, odd : false, underline : true, image : Resources.ArchitecturePicture},
                {name : "Long Term Support",
                    description :
                        <div>
                            Lastly, this project has been and will be in development for a long time,
                            I want to take the time to create a high quality game, and that cannot be done in a short period of time

                            <div className="pt-[20px]">
                                I am committed to developing it until completion, no matter how long it takes
                            </div>
                        </div>, odd : true, underline : false, image : Resources.LTSPicture}],
        github: "https://github.com/Bilal-A-G/Project-Mortalis", itch : "https://bilal-a-g.itch.io/project-mortalis", trello : ""
    },
    
    {name : "Unity Terrain", path: "/unity-terrain", bottom: false, image: Resources.ProceduralTerrainPicture, description : 
            "A procedural terrain generation demo, made in Unity", 
        longDescription: 
            <div>
                <p>
                    Unity Terrain is an infinite procedural terrain generation demo. It was originally my contribution to a
                    group project, named Project Ganymede, for my Intermediate CG course
                </p>
                <p className="pt-[30px]">
                    It has been separated out into it's own project so I can continue it's development in the future, also because
                    the terrain generator in Project Ganymede also procedurally generates colliders, which slows the game down a lot
                </p>
                <p className="pt-[30px] underline decoration-dark-red"><a href="https://github.com/Bilal-A-G/Project-Ganymede" target="_blank">Project Ganymede on Github</a></p>
            </div>,
        features:
            [{name : "Fractal Perlin Noise",
                description :
                    <div>
                        This project utilizes fractal perlin noise to generate both the heightmap of the terrain, 
                        as well as normals
                        
                        <div className="pt-[20px]">
                            The noise is calculated by summing together various layers of perlin noise, 
                            each layer with a higher frequency/scale than the last, but with decreasing amplitude/strength.
                            This creates a detailed, but coherent heightmap
                        </div>
                    </div>, odd : true, underline : true, image : Resources.PerlinNoiseGif}, 
                {name : "Dynamic Tessellation",
                description :
                    <div>
                        This project also features a dynamic tesselation system via tesselation shaders that subdivides
                        the terrain based on how close the player is to it, this allows for very detailed terrain 
                        with little to no lag
                    </div>, odd : false, underline : true, image : Resources.TesselationGif}, 
                {name : "Chunk System",
                description :
                    <div>
                        Lastly, this project also features a chunk system, where new chunks are loaded on based on the 
                        player's distance to the center of all chunks in game, old chunks are deleted as well

                        <div className="pt-[20px]">
                            This allows for infinite terrain, while reducing lag and memory usage
                        </div>
                    </div>, odd : true, underline : false, image : Resources.ChunksGif}],
        github: "https://github.com/Bilal-A-G/Procedural-Terrain", itch : "https://bilal-a-g.itch.io/procedurally-generated-terrain", trello : ""
    },

    {name : "NEXT 2025", path: "/next-2025", bottom: true, image: Resources.NEXT2025Picture, description :
            "A performant diorama and volumetric cloud renderer submitted to Ubisoft NEXT 2025",
        longDescription:
            <div>
                <p>
                    NEXT 2025 is my submission to Ubisoft NEXT 2025 in the technical art category, where it placed top 3!
                </p>
                <p className="pt-[30px]">
                    In this project, I focused on performance, visual fidelity, and cool tech above all else.
                </p>
            </div>,
        features:
            [{name : "Volumetric Clouds",
                description :
                    <div>
                        This project utilizes ray marching to render 3D volumetric clouds in the sky. 
                        It also features a custom pipeline to render these clouds, all the way from noise generation to a composite pass where the clouds
                        are injected into the scene based off of depth

                        <div className="pt-[20px]">
                            This system is also very performant, running 2 times as fast as Unity HDRP's clouds
                        </div>
                    </div>, odd : true, underline : true, image : Resources.CloudsGIF},
                {name : "LODs and Imposters",
                    description :
                        <div>
                            This project also features heavy use of imposters and LODs to render thousands of foliage objects, 
                            these imposters and lower poly LODs are swapped in when the player gets too far away, allowing a 
                            10x increase in framerate. Note, the trees are also modelled a certain way to allowing for rendering
                            without much GPU quad overdraw
                        </div>, odd : false, underline : true, image : Resources.LODGif},
                {name : "Post Processing & Lighting",
                    description :
                        <div>
                            Lastly, this project also features custom post processing effects make to make it look cinematic.
                            These include tonemapping, colour adjustments, bloom, etc.
                        </div>, odd : true, underline : false, image : Resources.PostProcessingGif}],
        github: "https://github.com/Bilal-A-G/NEXT-Submission-2025", itch : "", trello : ""
    },
]

export default Projects