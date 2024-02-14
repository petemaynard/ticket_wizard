const review = document.querySelector('#review');
const seatChoice = document.querySelector('#seatChoice');

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

seatChoice.addEventListener('change', function() {
    const currentSeat = this.textContent;
    console.log(currentSeat)
});