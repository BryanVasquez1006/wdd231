import { initChamber } from "./chamber.mjs";
const modals = document.querySelectorAll('.joinDialog');
const closeModalBtn = document.querySelector('.closeModal');
const modalContent = document.querySelector('.membershipDetails');
const openModalBtn = document.querySelectorAll('.learnMoreBtn');


const membershipInfo = [
    {
        level: "NP",
        name: "Non-Profit Membership",
        cost: 0,
        description: "A discounted membership tier for verified non-profit organizations focused on community service and outreach.",
        benefits: [
            "Access to community-focused networking events",
            "Basic directory listing",
            "Discounted rates for workshops and training",
            "Ability to submit community events for the Chamber calendar"
        ]
    },
    {
        level: "Bronze",
        name: "Bronze Membership",
        cost: 99,
        description: "Entry-level membership designed for small businesses and startups seeking visibility and foundational Chamber benefits.",
        benefits: [
            "All NP benefits",
            "Standard business directory listing with contact information",
            "Access to monthly networking events",
            "Member-only newsletters and opportunities",
            "Discounted entry to Chamber-sponsored events"
        ]
    },
    {
        level: "Silver",
        name: "Silver Membership",
        cost: 199,
        description: "A mid-level membership offering expanded visibility, advertising opportunities, and additional event access.",
        benefits: [
            "All Bronze benefits",
            "Featured business directory listing with logo and priority placement",
            "1–2 free event passes per year",
            "Annual social media spotlight",
            "Access to business development and leadership workshops",
            "Discounts on Chamber advertising and sponsored placements"
        ]
    },
    {
        level: "Gold",
        name: "Gold Membership",
        cost: 399,
        description: "The premium membership tier granting maximum visibility, influence, and exclusive access to Chamber leadership opportunities.",
        benefits: [
            "All Silver benefits",
            "Premium homepage spotlight placement",
            "Unlimited attendance at selected events",
            "Free booth at the annual business expo",
            "Priority speaking opportunities at Chamber events",
            "Feature article in the Chamber newsletter",
            "Access to executive roundtables and leadership meetings",
            "First-access to sponsorship opportunities"
        ]
    }
];


openModalBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        //getting the corresponding modal to this card:

        const modal = modals[index];
        const level = btn.dataset.level;

        //fetching membership info by level:

        const info = membershipInfo.find(m => m.level.toLowerCase() === level.toLowerCase());

        const modalContent = modal.querySelector('.membershipDetails');

        modalContent.innerHTML =  `
        <h2>${info.name}</h2>
        <p><strong>Membership Level: </strong>${info.description}</p>
        <p><strong>Membership Description: </strong>${info.description}</p>
        <strong>Benefits:</strong>
        <ul> 
           ${info.benefits.map(benefit => `<li>${benefit}`).join('')}
        </ul>
        <p><strong>Membership Cost: </strong>${info.cost}</p>
        `;

        modal.showModal();
    });
})

modals.forEach(modal => {
    const btn = modal.querySelector('.closeModal');
    btn.addEventListener('click', ()=> modal.close());
});

const joinCardsContainer = document.querySelector(".joinCards");


function displaymembModal() {
    //Clearing previous content
    joinCardsContainer.innerHTML = "";

    membershipInfo.forEach(membership => {
        const dialogEl = document.createElement("dialog");
        dialogEl.classList.add('membershipModal');

        dialogEl.innerHTML = `
            <button id="closeModal">❌</button>
            <div class="membershipDetails"></div>
        `;

        //showing modals based on the membership selected

        dialogEl.addEventListener('click', () => {
            displayMembInfo(membership);
        });

        joinCardsContainer.appendChild(dialogEl);
    });
};

//Last update footer
document.addEventListener("DOMContentLoaded", () => {
    initChamber();
});
