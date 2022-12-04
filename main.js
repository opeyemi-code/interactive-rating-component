let rateValue = 0
const mainContainer = document.getElementById('main-container');
const listItems = document.querySelectorAll('.list-items');
const submitBtn  = document.getElementById('submit-btn');
const container = document.getElementById('container2');
const rate = document.getElementById('rate');

listItems.forEach( (listItem) => listItem.addEventListener('click', getRate));

function getRate (e) {
    rateValue = e.currentTarget.textContent;
    
}

submitBtn.addEventListener('click', submitRate);

function submitRate (e) {
    e.preventDefault();
        if (rateValue > 0){
            mainContainer.style.display = 'none';
            container.style.display = 'block';
            rate.textContent = `${rateValue} `;
        }
}
