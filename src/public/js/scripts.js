//this needs to be filled out with specific data and variables

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

document.querySelector('#review').addEventListener('click', async () => {
    try {
        const response = await fetch('../../controllers/pages/store', {
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