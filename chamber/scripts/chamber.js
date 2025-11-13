const hamBtn = document.querySelector('#ham-btn');
const navBar = document.querySelector('#nav-bar');
const gridBtn = document.querySelector("#gridView");
const listBtn = document.querySelector("#listView");
const container = document.querySelector("#companyCards");

// Hamburger menu
hamBtn.addEventListener("click", () => {
  hamBtn.classList.toggle('show');
  navBar.classList.toggle('show');
});

// Dynamic footer
const current = document.querySelector("#currentyear");
const lastM = document.querySelector("#lastModified");

const lastModif = new Date(document.lastModified);
const today = new Date();

lastM.innerHTML = `Last modified: ${new Intl.DateTimeFormat("en-US", {
  dateStyle: "short",
  timeStyle: "short"
}).format(lastModif)}`;

current.innerHTML = today.getFullYear();

// Reading the JSON file
async function loadCompanies() {
  const response = await fetch("data/members.json");
  const data = await response.json();
  displayCompanies(data.companies, "grid"); // default to grid view
}

function displayCompanies(companies, viewType) {
  container.innerHTML = ""; // clear previous content

  if (viewType === "grid") {
    // GRID VIEW: Cards
    companies.forEach(company => {
      const card = document.createElement("section");
      card.classList.add("company-card");

      let membershipClass =
        company.membershipLevel === 3 ? "gold" :
        company.membershipLevel === 2 ? "silver" : "member";

      card.innerHTML = `
        <img src="${company.image}" alt="${company.name} logo">
        <h2>${company.name}</h2>
        <p>${company.description}</p>
        <div class="company-info">
          <p>${company.address}</p>
          <p>${company.phone}</p>
          <a href="${company.website}" target="_blank">${company.website}</a>
        </div>
        <p class="membership ${membershipClass}">
          ${company.membershipLevel === 3 ? "🌟 Gold Member" :
            company.membershipLevel === 2 ? "🥈 Silver Member" :
            "🥉 Member"}
        </p>
      `;
      container.appendChild(card);
    });

    container.classList.add("grid-view");
    container.classList.remove("list-view");

  } else {
    // LIST VIEW: Table
    const table = document.createElement("table");
    table.classList.add("company-table");

    table.innerHTML = `
      <thead>
        <tr>
          <th>Logo</th>
          <th>Name</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Website</th>
          <th>Membership</th>
        </tr>
      </thead>
      <tbody>
        ${companies.map(company => `
          <tr>
            <td><img src="${company.image}" alt="${company.name} logo" width="60"></td>
            <td>${company.name}</td>
            <td>${company.address}</td>
            <td>${company.phone}</td>
            <td><a href="${company.website}" target="_blank">${company.website}</a></td>
            <td>${company.membershipLevel === 3 ? "Gold" :
                  company.membershipLevel === 2 ? "Silver" : "Member"}</td>
          </tr>
        `).join("")}
      </tbody>
    `;

    container.appendChild(table);
    container.classList.add("list-view");
    container.classList.remove("grid-view");
  }
}

// Toggle buttons
gridBtn.addEventListener("click", () => {
  loadCompanies(); // reload as grid
});

listBtn.addEventListener("click", async () => {
  const response = await fetch("data/members.json");
  const data = await response.json();
  displayCompanies(data.companies, "list");
});

// Load default view
loadCompanies();
