const hamBtn = document.querySelector("#ham-btn");
const navBar = document.querySelector("#nav-bar")

hamBtn.addEventListener("click", () => {
    hamBtn.classList.toggle('show');
    navBar.classList.toggle('show');
})

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

// Course Buttons
const courseContainer = document.querySelector("#courseContainer");
const allBtn = document.querySelector("#allBtn");
const cseBtn = document.querySelector("#cseBtn");
const wddBtn = document.querySelector("#wddBtn");

function displayCourses(courseList) {
    courseContainer.innerHTML = ""; // clear previous content

    courseList.forEach(course => {
        const courseEl = document.createElement("div");
        courseEl.classList.add("course");

        //adding a conditional classs and icon 

        const statusClass = course.completed ? "completed" : "not-completed";
        const statusIcon = course.completed ? "✅" : "❌";

        courseEl.innerHTML = `
        <p class="courseName ${statusClass}">${course.subject} ${course.number} ${statusIcon}</p>
        `;
        
        //showing modal if the course button is clicked:
        courseEl.addEventListener("click", () => {
            displayCourseInfo(course);
        })

        courseContainer.appendChild(courseEl);
    });


    //Calculating the total credits dynamically with reduce()

    const totalCredits = courseList.reduce((sum, course) => sum + course.credits, 0);

    const totalCreditsEl = document.querySelector("#totalCredits");
    totalCreditsEl.textContent = `Total Credits: ${totalCredits}`;
}

allBtn.addEventListener("click", () => displayCourses(courses));
cseBtn.addEventListener("click", () => {
    const cseCourses = courses.filter(course => course.subject === "CSE");
    displayCourses(cseCourses);
});

wddBtn.addEventListener("click", () => {
    const wddCourses = courses.filter(course => course.subject === "WDD");
    displayCourses(wddCourses);
});

// getting the dates for the dynamic footer

const current = document.querySelector("#currentyear");

const lastM = document.querySelector("#lastModified");

let lastModif = new Date(document.lastModified);

const today = new Date();

lastM.innerHTML = `Last modified: ${new Intl.DateTimeFormat("en-US", {
  dateStyle: "short",
  timeStyle: "short"
}).format(lastModif)}`;

current.innerHTML = today.getFullYear();

// Logic for wayfinding
const navLinks = document.querySelectorAll("nav a");
const currentPath = window.location.pathname;

navLinks.forEach(link => {
  if (link.pathname === currentPath) {
    link.parentElement.classList.add("current");
  } else {
    link.parentElement.classList.remove("current");
  }
});

// LOGIC FOR MODALS

const modal = document.querySelector('#courseInfoModal');
const closeModalBtn = document.querySelector('#closeModal');
const modalContent = document.querySelector('#courseDetails');


closeModalBtn.addEventListener("click", () => modal.close());

function displayCourseInfo(info) {

        modalContent.innerHTML = `
                <h2>${info.subject}</h2>
                <p>${info.credits}</p>
                <p>Certificate: ${info.title} credits</p>
                <p>${info.description}</p>
                <p>Technologies: ${info.technology}.</p>
                `;
        modal.showModal();
};





