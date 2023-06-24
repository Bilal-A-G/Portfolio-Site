const Projects = [
    {name : "Project Mortalis", path: "/project-mortalis", bottom: false, image : "bg-[url(ProjectMortalis.png)]", description : 
            "A long-term, post apocalyptic, first person shooter project", 
        longDescription: 
            <div>
                <p>
                    Project Mortalis is a first person shooter set in a post apocalyptic world.
                    It has been in development for several years to ensure quality
                    and is currently going through a huge rewrite and shift in aesthetics  
                </p>
                <p className="pt-[30px]">
                    Furthermore, I created several tools to ease development of this project.
                    To reuse these tools in the future, they have been published as a Unity package named W_I_Zr_Ds
                </p>
                <p className="pt-[30px] underline decoration-dark-red"><a href="https://github.com/Bilal-A-G/W_I_Zr_Ds" target="_blank">W I Zr Ds on Github</a></p>
            </div>, 
        features: 
            [{name : "Satisfying Gunplay", 
                description: 
                    <div>
                        This project uses several techniques that made the gunplay very satisfying, these include:
                        <div className="flex pt-[20px]"><p>o</p> <p className="pl-[20px]">Screenshake (when the gun is fired)</p></div>
                        <div className="flex"><p>o</p> <p className="pl-[20px]">Audio</p></div>
                        <div className="flex"><p>o</p> <p className="pl-[20px]">Particles</p></div>
                        <div className="flex"><p>o</p> <p className="pl-[20px]">Weapon Sway (based on mouse position and move direction)</p></div>
                        <div className="flex"><p>o</p> <p className="pl-[20px]">Animations (procedural and keyframed)</p></div>
                    </div>, odd : true, underline : true}, 
                {name : "Solid Architecture", 
                description : 
                    <div>
                        This project makes use of various design patterns and principles of Object Oriented Programming such as:
                        
                        <div className="flex pt-[20px]"><p>o</p> <p className="pl-[20px]">Observer</p></div>
                        <div className="flex"><p>o</p> <p className="pl-[20px]">State</p></div>
                        <div className="flex"><p>o</p> <p className="pl-[20px]">Object Pooling</p></div>
                        <div className="flex"><p>o</p> <p className="pl-[20px]">Composition and Polymorphism over Inheritance</p></div>
                        <div className="flex"><p>o</p> <p className="pl-[20px]">Abstraction</p></div>
                        
                        <div className="pt-[20px] pb-[10%]">
                            Furthermore, most code in the project is highly reusable and easy to extend. Most of this
                            was implemented via the W_I_Zr_Ds package
                        </div>

                    </div>, odd : false, underline : true}, 
                {name : "Long Term Support", 
                description : 
                    <div>
                        Lastly, this project has been and will be in development for a long time,
                        I want to take the time to create a high quality game, and that cannot be done in a short period of time
                        
                        <div className="pt-[20px]">
                            I am committed to developing it until completion, no matter how long it takes
                        </div>
                    </div>, odd : true, underline : false}],
        github: "https://github.com/Bilal-A-G/Project-Mortalis", itch : "https://bilal-a-g.itch.io/project-mortalis", trello : ""
    },
    
    {name : "Ga_U_SS Engine", path: "/gauss-engine", bottom: false, image : "bg-[url(GaussEngine.png)]", description : 
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
                    </div>, odd : true, underline : true}, 
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
                    </div> , odd : false, underline : true}, 
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
                    </div>, odd : true, underline : false}],
        github: "https://github.com/Bilal-A-G/NEXT-Submission-2023", itch : "", trello : "https://trello.com/b/RNW4WbNu/ubisoft-next-planning"
    },
    
    {name : "Unity Terrain", path: "/unity-terrain", bottom: true, image: "bg-[url(ProceduralTerrain.png)]", description : 
            "A procedural terrain generation demo, made in Unity", 
        longDescription: 
            <div>
                <p>
                    Unity Terrain is an infinite procedural terrain generation demo. It was originally my contribution to a
                    group project, named Project Ganymede, for my Intermediate CG course
                </p>
                <p className="pt-[30px]">
                    It has been seperated out into it's own project so I can continue it's development in the future, also because
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
                    </div>, odd : true, underline : true}, 
                {name : "Dynamic Tessellation",
                description :
                    <div>
                        This project also features a dynamic tesselation system via tesselation shaders that subdivides
                        the terrain based on how close the player is to it, this allows for very detailed terrain 
                        with little to no lag
                    </div>, odd : false, underline : true}, 
                {name : "Chunk System",
                description :
                    <div>
                        Lastly, this project also features a chunk system, where new chunks are loaded on based on the 
                        player's distance to the center of all chunks in game, old chunks are deleted as well

                        <div className="pt-[20px]">
                            This allows for infinite terrain, while reducing lag and memory usage
                        </div>
                    </div>, odd : true, underline : false}],
        github: "https://github.com/Bilal-A-G/Procedural-Terrain", itch : "https://bilal-a-g.itch.io/procedurally-generated-terrain", trello : ""
    }
]

export default Projects