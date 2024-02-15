const review = document.querySelector('#review');
const numOfTickets = document.querySelector('#numOfTickets');
const eventPK = document.querySelector('#eventPK');
let selectedOption = 'A';

document.addEventListener('DOMContentLoaded', function() {
    var selectElement = document.getElementById('seatChoice');

    selectElement.addEventListener('change', function() {
        // This will give you the selected option element
        selectedOption = selectElement.options[selectElement.selectedIndex];
        console.log(selectedOption.id); // Logs the id of the selected option
    });
});


const fetchData = async () => {
    try {
        const response = await fetch ();
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Error fetching data', error);
    };
};

const displayData = (data) => {
    const container = document.getElementById();
    container.innerHTML = ``;
    data.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent = JSON.stringify(item);
        container.appendChild(itemElement);      
    });
};

review.addEventListener('click', async () => {
    try {
        console.log('1. selectedOption is', selectedOption.id)
        const response = await fetch('/store', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ seatGrade: selectedOption.id, numOfTickets: numOfTickets.value, perfPK: eventPK.textContent })
        });

        if(!response.ok) {
            throw new Error('failed to call store POST route');
        }

        const data = await response.json();
        console.log('Response: ', data);
        window.location.href = `/reviewOrder/${data.data}`
    } catch (err) {
        console.error(err)
    };

});
