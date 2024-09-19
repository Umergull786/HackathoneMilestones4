// get references to the form and display area
var form = document.getElementById("form");
var resume_display = document.getElementById("ResumeDisplay");
//handling form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent page reload
    // collect input valuse
    var name = document.getElementById("name").value;
    var contact = document.getElementById("contact").value;
    var email = document.getElementById("email").value;
    var adress = document.getElementById("address").value;
    var education = document.getElementById("education").value;
    var work_experience = document.getElementById("WorkExperience").value;
    var skills = document.getElementById("skills").value;
    //reusme content dyamically'
    var resume_html = "<h2><b>Editable Resume</b></h2>\n<h3>Personal Information</h3>\n<p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span</p>\n<p><b>Conatac:</b><span contenteditable=\"true\">").concat(contact, "</span></p>\n<p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n<p><b>Adress:</b><span contenteditable=\"true\">").concat(adress, "</span></p>\n\n<h3>Education</h3>\n<p contenteditable=\"true\">").concat(education, "</p>\n\n<h3>Work Exeprience</h3>\n<p contenteditable=\"true\">").concat(work_experience, "</p>\n\n<h3>Skills</h3>\n<p span contenteditable=\"true\">").concat(skills, "</p>\n ");
    // display genrarting
    if (resume_display) {
        resume_display.innerHTML = resume_html;
    }
    else {
        console.error('The resume Display is missing something');
    }
});
// // get references to the form and display area
// const form = document.getElementById("form") as HTMLFormElement;
// const resume_display  = document.getElementById("ResumeDisplay") as HTMLDivElement;
// // handling form submission
// form.addEventListener("submit", (event: Event) => {
//     event.preventDefault();  // prevent page reload
//     // collect input values
//     const name = (document.getElementById("name") as HTMLInputElement).value;
//     const contact = (document.getElementById("contact") as HTMLInputElement).value;
//     const email = (document.getElementById("email") as HTMLInputElement).value;
//     const address = (document.getElementById("address") as HTMLInputElement).value;
//     const education = (document.getElementById("education") as HTMLInputElement).value;
//     const work_experience = (document.getElementById("WorkExperience") as HTMLInputElement).value;
//     const skills = (document.getElementById("skills") as HTMLInputElement).value;
//     // resume content dynamically
//     const resume_html = `
//         <h2><b>Resume</b></h2>
//         <h3>Personal Information</h3>
//         <p><b>Name:</b> ${name}</p>
//         <p><b>Contact:</b> ${contact}</p>
//         <p><b>Email:</b> ${email}</p>
//         <p><b>Address:</b> ${address}</p>
//         <h3>Education</h3>
//         <p>${education}</p>
//         <h3>Work Experience</h3>
//         <p>${work_experience}</p>
//         <h3>Skills</h3>
//         <p>${skills}</p>
//     `;
//     // display the generated resume
//     if (resume_display) {
//         resume_display.innerHTML = resume_html;
//     } else {
//         console.error('The resume display element is missing or not found.');
//     }
// });
