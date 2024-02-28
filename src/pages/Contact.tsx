import gitIcon from "../images/github-icon.png"; 
import mailIcon from "../images/mail-icon.png"; 
import linkedInIcon from "../images/linkedin-square-icon(1).png"; 


export const Contact = () => {
    return (
        <div id="contactContainer" className="container">
            <h1>Contact</h1>
            <p>Do you have a new project, job, or internship opportunity for me? Or just want to have a chat? Feel free to connect.</p>
            <div>
                <ul>
                    <li className="project">
                        <a><img src={gitIcon} alt="gitIcon" /> </a>
                    </li>
                    <li className="project">
                     <a><img src={mailIcon} alt="mailIcon" /> </a>
                    </li>
                    <li className="project">
                       <a> <img src={linkedInIcon} alt="linkedInIcon" /> </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}