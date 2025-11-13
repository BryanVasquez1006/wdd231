const hamBtn = document.querySelector('#ham-btn');
const navBar = document.querySelector('#nav-bar');

hamBtn.addEventListener("click", () => {
    hamBtn.classList.toggle('show');
    navBar.classList.toggle('show');
})

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


//Reading through the JSON file

//async function loadCompanies() {
//   const response = await fetch("data/members.json");
//}

async function loadCompanies() {
  const response = await fetch("data/members.json");
  const data = await response.json();
  displayCompanies(data.companies);
}

function displayCompanies(companies) {
  const container = document.getElementById("companyCards");

  companies.forEach(company => {
    const card = document.createElement("section");
    card.classList.add("company-card");

    let membershipClass = company.membershipLevel === 3 ? "gold" :
                          company.membershipLevel === 2 ? "silver" : "member";

    card.innerHTML = `
      <img src="${company.image}" alt="${company.name} logo">
      <h2>${company.name}</h2>
      <p>${company.description}</p>
      <div class="company-info">
        <p>${company.address}</p>
        <p>${company.phone}</p>
        <a href="${company.website}" target="_blank">Visit Website</a>
      </div>
      <p class="membership ${membershipClass}">
        ${company.membershipLevel === 3 ? "🌟 Gold Member" :
          company.membershipLevel === 2 ? "🥈 Silver Member" :
          "🥉 Member"}
      </p>
    `;

    container.appendChild(card);
  });
}

loadCompanies();
