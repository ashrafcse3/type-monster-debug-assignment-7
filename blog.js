const blogs = document.getElementById("blogs");
const blogDetails = [
    {
        question: 'Difference between session storage and local storage?',
        answer: "Local storage data does not have an expiry date and it's not even deleted if the browser gets closed. It will only get deleted by javascript code. On the other hand, session storage data gets deleted after closing the browser tab."
    },
    {
        question: 'How javaScript event loop work?',
        answer: 'The Event Loop has one simple job - to monitor the Call Stack and the Callback Queue. If the Call Stack is empty, the Event Loop will take the first event from the queue and will push it to the Call Stack, which effectively runs it. Such an iteration is called a tick in the Event Loop.'
    },
    {
        question: 'How many ways to get undefined in JavaScript?',
        answer: 'A variable that has not been assigned a value is of type undefined. A method or statement also returns undefined if the variable that is being evaluated does not have an assigned value. A function returns undefined if a value was not returned.'
    },
    {
        question: 'Difference between global scope and block scope?',
        answer: 'A variable can be declared inside or outside of a block. So, if a variable is declared outside of all functions or any curly braces ({}) or block scope, then that variable is inside of a global scope. A  global variable can be accessed anywhere from the code, even from inside of the block scope. On the other hand, if a variable is declared inside of a curly braces ({}) or a function body, then it can be accessed from that curly braces and its called a block scope. A global variable can be accessed from anywhere in the mentioned file but a block scope variable can be only accessed from that mentioned block scope.'
    },
];

function displayBlogs() {
    blogs.innerHTML = "";

    blogDetails.forEach((blog) => {
        const newRow = document.createElement("div");
        newRow.classList.add("blog-card");

        newRow.innerHTML = `
            <h2>${blog.question}</h2>
            <p>${blog.answer}</p>
        `;

        blogs.appendChild(newRow);
    });
}

displayBlogs();