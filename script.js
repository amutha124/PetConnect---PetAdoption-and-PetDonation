// --- SIMULATED PET DATA (In a real project, this would come from a server/MySQL) ---
const petsData = [
    { id: 1, name: "Max", type: "Dog", age: 3, breed: "Labrador", imageUrl: "dog_placeholder.jpg" },
    { id: 2, name: "Whiskers", type: "Cat", age: 1, breed: "Tabby", imageUrl: "cat_placeholder.jpg" },
    { id: 3, name: "Rocky", type: "Dog", age: 5, breed: "Shepherd", imageUrl: "dog2_placeholder.jpg" },
    // Add more...
];

const petList = document.getElementById('pet-list');
const donationForm = document.getElementById('donation-form');

// 1. Function to render pets
function renderPets() {
    petList.innerHTML = ''; // Clear previous content
    petsData.forEach(pet => {
        const card = document.createElement('div');
        card.classList.add('pet-card');
        card.innerHTML = `
            <img src="${pet.imageUrl}" alt="${pet.name}">
            <h3>${pet.name} (${pet.type})</h3>
            <p>Age: ${pet.age} | Breed: ${pet.breed}</p>
            <button onclick="adoptPet(${pet.id})">Adopt Me!</button>
        `;
        petList.appendChild(card);
    });
}

// 2. Adoption handler (Simulated)
function adoptPet(petId) {
    const pet = petsData.find(p => p.id === petId);
    if (pet) {
        // In a real app: Send an AJAX request (fetch/XMLHttpRequest) to the server
        // The server would then update the MySQL database (e.g., mark as adopted, record interest).
        alert(`Thank you for your interest in adopting ${pet.name}! We'll be in touch.`);
    }
}

// 3. Donation Form Handler
donationForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Stop default form submission
    const amount = document.getElementById('amount').value;

    if (amount) {
        // In a real app: Send an AJAX request to the server with the donation amount
        // The server would process payment (via a payment gateway) and record it in MySQL.
        console.log(`Donation of $${amount} submitted.`);
        alert(`Thank you for your generous donation of $${amount}!`);
        donationForm.reset();
    }
});

// Initial load
document.addEventListener('DOMContentLoaded', renderPets);

// --- END OF FRONTEND LOGIC ---
