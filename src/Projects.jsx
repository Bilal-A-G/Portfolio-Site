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
                    Furthermore, several tools have been created to ease development of this project,
                    for the purposes of reuse, these tools have been published as a Unity package named W_I_Zr_Ds
                </p>
                <p className="pt-[30px] underline decoration-dark-red"><a href="https://github.com/Bilal-A-G/W_I_Zr_Ds" target="_blank">W I Zr Ds on Github</a></p>
            </div>, 
        features: 
            [{name : "Satisfying Gunplay", odd : true, underline : true}, {name : "Solid Architecture", odd : false, underline : true}, {name : "Long Term Support", odd : true, underline : false}],
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
            [{name : "Software 3D Graphics", odd : true, underline : true}, {name : "Data Oriented ECS" , odd : false, underline : true}, {name : "Design Patterns", odd : true, underline : false}],
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
            [{name : "Fractal Perlin Noise", odd : true, underline : true}, {name : "Dynamic Tessellation", odd : false, underline : true}, {name : "Chunk System", odd : true, underline : false}],
        github: "https://github.com/Bilal-A-G/Procedural-Terrain", itch : "https://bilal-a-g.itch.io/procedurally-generated-terrain", trello : ""
    }
]

export default Projects