let historyString = "";

$(".command").on("keyup", function (e) {
  if (e.key === "Enter" || e.keyCode === 13) {
    historyString += `C:\\Users\\pranjal>${e.target.value}<br>`;
    console.log(historyString);

    switch (e.target.value.toLowerCase()) {
      case "help":
        historyString += `
        <table>
            <tr>
                <td>About</td>
                <td>Displays information about Pranjal Pareta</td>
            </tr>
            <tr>
                <td>Skills</td>
                <td>Displays skills owned.</td>
            </tr>
            <tr>
                <td>Objectives</td>
                <td>Displays objectives.</td>
            </tr>
            <tr>
                <td>Education</td>
                <td>Displays educational background.</td>
            </tr>
            <tr>
                <td>Projects</td>
                <td>Displays project built.</td>
            </tr>
            <tr>
                <td>Certificates</td>
                <td>Displays certifications.</td>
            </tr>
           
        </table><br><br>`;
        break;
      case "about":
        historyString += `
        <table>
        <tr>
        <td>Name</td>
        <td>Pranjal Pareta</td>
      </tr>
  <tr>
    <td>Address</td>
    <td>Kota, 324005, India</td>
  </tr>
  <tr>
    <td>Phone</td>
    <td>+91 9680680386</td>
  </tr>
  <tr>
    <td>Email</td>
    <td>pranjal55pareta@gmail.com</td>
  </tr>
  <tr>
    <td>Date of Birth</td>
    <td>09 january 1999</td>
  </tr>
</table><br>`;
        break;
      case "skills":
        historyString += `<table>
            <tr>
              <td>JavaScript</td>
            </tr>
            <tr>
              <td>Java</td>
            </tr>
            <tr>
              <td>Python</td>
            </tr>
            <tr>
              <td>HTML5, CSS3</td>
            </tr>
            <tr>
              <td>Flutter Framework</td>
            </tr>
            <tr>
              <td>MySQL Database</td>
            </tr>
            <tr>
              <td>Git</td>
            </tr>
            <tr>
              <td>AWS</td>
            </tr>
            <tr>
              <td>Technical Troubleshooting</td>
            </tr>
          </table><br>`;
        break;
      case "objective":
        historyString += `<table>
        
        <tr>
          <td>
            Motivated computer science postgraduate with a solid academic background and a keen interest in software development and technology, Seeking opportunities to apply theoretical knowledge gained during studies to practical, real-world projects. Eager to collaborate with industry professionals, contribute to innovative solutions, and further develop skills in programming, problem-solving, and teamwork, Dedicated to staying updated with the latest technological advancements and leveraging them to deliver efficient and impactful software solutions.
          </td>
        </tr>
      </table><br>`;
        break;
      case "education":
        historyString += `<table>
        
        <tr>
          <td>SSC, MB Public Senior Secondary School</td>
          <td>2014</td>
      
        </tr>
        <tr>
          <td>HSC, MB Public Senior Secondary School</td>
          <td>2016</td>
          
        </tr>
        <tr>
          <td>Bachelor of Computer Application, Aklank Girls PG College</td>
          <td>2021</td>
          
        </tr>
        <tr>
          <td>Master of Computer Application, University of Kota</td>
          <td>2023</td>
          
        </tr>
      </table><br>`;
        break;
      case "projects":
        historyString += `
        <table>
       
        <tr>
          <td>Drowsiness Detection System with Emergency Messaging</td>
        </tr>
        <tr>
          <td>Cryptority - Information Security Android Application</td>
        </tr>
        <tr>
          <td>BMI Calculator - Health Monitoring Android Application</td>
        </tr>
      
      </table>
      
      <br>`;
        break;
      case "certificates":
        historyString += `<table>
    
   
    <tr>
      <td>Problem Solving & Programming in Python & Website Designing</td>
      <td>Dec 2023</td>
    </tr>
  </table><br>`;
        break;

      case "cls":
        historyString = "";
        break;

      default:
        historyString += `'${e.target.value}' is not recognized as an internal or external command,
        operable program or batch file.<br><br>`;
        break;
    }

    $(".history").html(historyString);
    $(".terminal")[0].scrollTop = $(".terminal")[0].scrollHeight;
    e.target.value = "";
  }
});
