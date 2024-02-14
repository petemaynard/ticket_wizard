const review = document.querySelector('#review');
const seatChoice = document.querySelector('#seatChoice');
const numOfTickets = document.querySelector('#numOfTickets');
const eventPK = document.querySelector('#eventPK')

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
        const response = await fetch('/store', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ seatGrade: seatChoice.value, numOfTickets: numOfTickets.value, eventPK: eventPK.textContent })
        });

        if(!response.ok) {
            throw new Error('failed to call store POST route');
        }

        const data = await response.json();
        console.log('Response: ', data);
        window.location.href = `/reviewOrder`
    } catch (err) {
        console.error(err)
    };
});
