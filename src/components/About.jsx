const myskills = [
    "HTML", "CSS", "Javascript", "NodeJs", "Express Js", "React Js", "Next Js"
]

export default function About(){
    return (
        <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card text-white about-card">
              <div className="card-body text-center">
                <h2 className="card-title">About Me</h2>
                <p className="card-text">
                  Hi, I'm Tasneem Ali, A passionate web developer and a homemaker too.
                  I like to create beautiful, functional, and responsive web applications.
                </p>
                <p className="card-text">
                  I as a developer wants to work with organization where i can develop myself personally as well as 
                  professionally.
                </p>
                <div className="about-card">
                <h4>My Skills</h4>
                <div className="row">
                    <ul className="list-unstyled d-flex flex-wrap fw-bold">
                        {myskills.map((s, index) => (
                            <li key={index} className="col-md-4">{s}</li> 
                        ))}
                    </ul>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}