import {RecentProject} from "../type/RecentProject.ts";

const recentProjects: RecentProject[] = [
    {
        name: "PMCS",
        description: "PMCS Application modernizes military equipment maintenance by providing mobile access to technical manuals, standardized procedures, and real-time fault tracking. This application enhances equipment readiness and streamlines maintenance workflows.",
        image: "src/assets/pmcs-app.png",
        liveDemo: "https://pmcs.swf.army.mil/",
        gitHub: ""
    },
    {
        name: "Soldier Solutions",
        description: "The official platform of the Army Software Factory (ASF), where Soldiers and units can submit challenges, explore custom-built software solutions, and collaborate on Army technology initiatives.",
        image: "src/assets/soldier-solutions.png",
        gitHub: "",
        liveDemo: "https://soldiersolutions.swf.army.mil/"
    },
    {
        name: "Counter Fire Dashboard",
        description: "Leverages access to data-at-rest from AFATDS that originates from radars to help visualize and provide amplifying information about target acquisitions. Expediting decision-making by automating statistical analysis and information dissemination.",
        image: "",
        gitHub: "",
        liveDemo: ""
    },
    {
        name: "CoinTracker",
        description: "Built with REACT, NodeJS, Express, and the CoinGecko API. Easily track your favorite coin's price, trending coins, and exchanges. Currently Hosted on Render.",
        image: "src/assets/coin-tracker.png",
        gitHub: "https://github.com/MrRolbot23/crypto-tracker",
        liveDemo: "https://coin-tracker-0e2n.onrender.com/"
    },
    {
        name: "Face Detection App",
        description: "This Application was built with REACT, Node.js, Express, and Postgres. Implemented Clarifai API to detect faces Currently hosted on Render.",
        image: "src/assets/face-detection-app.webp",
        gitHub: "https://github.com/mrrolbot23/face-recognition",
        liveDemo: "https://face-recognition-app-nz3w.onrender.com/"
    }
]

export default recentProjects;