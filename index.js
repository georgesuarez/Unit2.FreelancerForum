const people = [
    {
        name: "Dr.Slice",
        price: 25,
        occupation: "gardner",
    },
    {
        name: "Dr.Pressure",
        price: 51,
        occupation: "programmer",
    },
    {
        name: "Alice",
        price: 72,
        occupation: "writer",
    },
    {
        name: "Bob",
        price: 95,
        occupation: "teacher",
    },
    {
        name: "Carol",
        price: 112,
        occupation: "programmer",
    }
];

const addFreelancerIntervalId = setInterval(addFreelancer, 3000);

render();

function render() {
    // Render the list of freelancers
    const freelancers = document.querySelector("#freelancers");
    const freelancerElements = people.map((person) => {
        const element = document.createElement("li");
        return element;
    });
    freelancers.replaceChildren(...freelancerElements);
}

function addFreelancer() {
    render();
}
