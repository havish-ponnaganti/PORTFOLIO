import './style.css';
function F1(){
    return(
        <div></div>
    )
}
export function Home()
{
return <div class="vas"><p>My name Havish,I am currentli studibng 3 rd year from VIT-AP University. 

</p></div>
}


export function About()
{
return <div class="vas"><p>,my academic journey has been marked by excellenece acadamics ,securing impressive percentages that reflect his dedication and commitment to his education.</p><table><tr><th>Studying</th><th>College Name</th><th>Percenatge or Grade</th></tr><tr><td>Schooling</td><td> standard</td><td>10.Cgpa</td></tr><tr><td>Intermediate</td><td> Junior College</td><td>88.6%</td></tr><tr><td>B-tech</td><td>VIT-AP University</td><td>8.2 Cgpa *</td></tr></table></div>
}
export function Blog()
{
    return <div class="vas">
            <h2>Skills</h2>
            <div className="skill-box">
            <div class="d-flex flex-row justify-content-center">
            <div className="language-box">
               
                <h5>Java</h5>
            </div>
            <div className="language-box">
               
                <h5>Python</h5>
            </div>
            <div className="language-box">
                
                <h5>HTML</h5>
            </div>
            </div><br/>
            <div class="d-flex flex-row justify-content-center">
            <div className="language-box">
                
                <h5>CSS</h5>
            </div>
            <div className="language-box">
                
                <h5>JavaScript</h5>
            </div>
            <div className="language-box">
                
                <h5>React.js</h5>
            </div>
            </div><br/>
            <div class="d-flex flex-row justify-content-center">
            <div className="language-box">
                
                <h5>R<br/>Language</h5>
            </div>
            <div className="language-box">
                
                <h5>Android<br></br>Development</h5>
            </div>
            </div>
            </div>
        </div>
}
export function Contact()
{
return <div class='vas'>
<div class="pran">

    portfoli in react js<br/>
    new parking system<br/>
    
</div>
<div class="pran">

</div>
</div>
}

export default F1;
