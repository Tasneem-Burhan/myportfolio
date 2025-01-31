const myProjects = [
    {
        title: "Plumbing services",
        description: `A Platform for plumbing services provided using Nextjs and bootstrap and Auth services using Redux`,
        link: "https://plumbing-servicess.vercel.app/"
    },
    {
        title: "Student Data Management",
        description: `Student Data Management using Expressjs and MongoDB for learning 
        Backend development. Testing Made easy with the help of Postman.`,
        link: ""
    },
    {
        title: "Demo Banking Services",
        description: "Provide Banking services to Customer and EmpLoyee Login services using HTML5, CSS, Javascript.",
        link: ""
    }
];

export default function Project() {
    return (
        <div className="container">
            <h2 className="text-center about-card">My Projects</h2>
            <div className="row justify-content-center">
                {myProjects.map((project, index) => (
                    <div key={index} className="col-md-4">
                        <div className="card text-white about-card mb-4">
                            <div className="card-body text-center">
                                <h5 className="card-title">{project.title}</h5>
                                <p className="fw-light">{project.description}</p>
                                {project.link ?  (
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                    View Project
                                </a>

                                ) :
                                ""
                                } 
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}