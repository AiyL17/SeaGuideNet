
     const seafoodData = {
  philippines: {
    luzon: [
      { img: "img/milkfish.jpg", name: "Bangus (Milkfish)", description: "Farmed in sustainable aquaculture practices", status: "Sustainable" },
      { img: "img/crab.jpg", name: "Blue Crab", description: "Wild-caught using sustainable methods", status: "Sustainable" },
      { img: "img/tuna.jpg", name: "Yellowfin Tuna", description: "Overfished in some areas, choose pole-and-line caught", status: "Not Sustainable" },
      { img: "img/squid.jpg", name: "Squid", description: "Caught sustainably in Luzon", status: "Sustainable" }
    ],
    visayas: [
      { img: "img/shrimp.jpg", name: "Shrimp", description: "Sustainably farmed in Visayas", status: "Sustainable" },
      { img: "img/lobster.jpg", name: "Lobster", description: "Harvested with careful stock management", status: "Sustainable" },
      { img: "img/sardines.jpg", name: "Sardines", description: "Overfished in some areas, choose responsibly sourced", status: "Not Sustainable" },
      { img: "img/tilapia.jpg", name: "Tilapia", description: "Farmed sustainably in aquaculture", status: "Sustainable" }
    ],
    mindanao: [
      { img: "img/crayfish.jpg", name: "Crayfish", description: "Sustainably caught in Mindanao waters", status: "Sustainable" },
      { img: "img/oyster.jpg", name: "Oyster", description: "Farmed sustainably in Mindanao", status: "Sustainable" },
      { img: "img/snapper.jpg", name: "Snapper", description: "Overfished in some areas", status: "Not Sustainable" },
      { img: "img/grouper.jpg", name: "Grouper", description: "Farmed sustainably in Mindanao", status: "Sustainable" }
    ]
  },
  japan: {
    hokkaido: [
      { img: "img/salmon.jpg", name: "Salmon", description: "Farm-raised in Hokkaido with sustainable practices", status: "Sustainable" },
      { img: "img/scallops.jpg", name: "Scallop", description: "Hokkaido scallops are farmed sustainably", status: "Sustainable" },
      { img: "img/sardine.jpg", name: "Sardine", description: "Wild-caught sustainably in Hokkaido", status: "Sustainable" },
      { img: "img/tuna.jpg", name: "Tuna", description: "Overfished, choose pole-and-line caught", status: "Not Sustainable" }
    ],
    kyushu: [
      { img: "img/amberjack.jpg", name: "Amberjack", description: "Fished with sustainable techniques", status: "Sustainable" },
      { img: "img/sea-bream.jpg", name: "Sea Bream", description: "Farmed sustainably in Kyushu waters", status: "Sustainable" },
      { img: "img/swordfish.jpg", name: "Swordfish", description: "Overfished in some areas", status: "Not Sustainable" },
      { img: "img/uni.jpg",       name: "Uni <br> (Sea Urchin)", description: "Farm-raised sustainably in Kyushu", status: "Sustainable" }
    ],
    okinawa: [
      { img: "img/grouper.jpg", name: "Grouper", description: "Farmed sustainably in Okinawa", status: "Sustainable" },
      { img: "img/lobster.jpg", name: "Lobster", description: "Caught sustainably in Okinawa waters", status: "Sustainable" },
      { img: "img/mackerel.jpg", name: "Mackerel", description: "Overfished in some areas, choose sustainably sourced", status: "Not Sustainable" },
      { img: "img/snapper.jpg", name: "Snapper", description: "Sustainably caught in Okinawa", status: "Sustainable" }
    ]
  },
  korea: {
    jeju: [
      { img: "img/abalone.jpg", name: "Abalone", description: "Farm-raised in Jeju for sustainability", status: "Sustainable" },
      { img: "img/octopus.jpg", name: "Octopus", description: "Caught with sustainable fishing practices in Jeju", status: "Sustainable" },
      { img: "img/mackerel.jpg", name: "Mackerel", description: "Controlled catch limits for sustainability", status: "Sustainable" },
      { img: "img/anchovy.jpg", name: "Anchovy", description: "Overfished, choose sustainably sourced", status: "Not Sustainable" }
    ],
    busan: [
      { img: "img/flatfish.jpg", name: "Flatfish", description: "Farmed in Busan with sustainable methods", status: "Sustainable" },
      { img: "img/rockfish.jpg", name: "Rockfish", description: "Caught with strict stock management", status: "Sustainable" },
      { img: "img/cod.jpg", name: "Cod", description: "Overfished in some areas, choose responsibly sourced", status: "Not Sustainable" },
      { img: "img/seaweed.jpg", name: "Seaweed", description: "Farmed sustainably", status: "Sustainable" }
    ],
    seoul: [
      { img: "img/tilapia.jpg", name: "Tilapia", description: "Farm-raised sustainably in Seoul", status: "Sustainable" },
      { img: "img/squid.jpg", name: "Squid", description: "Caught with sustainable methods", status: "Sustainable" },
      { img: "img/crab.jpg", name: "Crab", description: "Caught sustainably in Seoul waters", status: "Sustainable" },
      { img: "img/pollock.jpg", name: "Pollock", description: "Overfished in some areas", status: "Not Sustainable" }
    ]
  }
};
    
      const countrySelect = document.getElementById("country-select");
      const regionSelect = document.getElementById("region-select");
      const seafoodList = document.querySelector(".seafood-list");
    
      // Populate region options based on selected country
      countrySelect.addEventListener("change", () => {
        const country = countrySelect.value;
        updateRegions(country);
        updateSeafoodDisplay(country, regionSelect.value);
      });
    
      // Update displayed seafood when region changes
      regionSelect.addEventListener("change", () => {
        updateSeafoodDisplay(countrySelect.value, regionSelect.value);
      });
    
      // Update regions based on the selected country
      function updateRegions(country) {
        regionSelect.innerHTML = ""; // Clear existing regions
        if (seafoodData[country]) {
          Object.keys(seafoodData[country]).forEach(region => {
            const option = document.createElement("option");
            option.value = region;
            option.textContent = region.charAt(0).toUpperCase() + region.slice(1);
            regionSelect.appendChild(option);
          });
        }
      }
    
      // Update displayed seafood based on selected country and region
      function updateSeafoodDisplay(country, region) {
        seafoodList.innerHTML = ""; // Clear current display
        if (seafoodData[country] && seafoodData[country][region]) {
          seafoodData[country][region].forEach(seafood => {
            const seafoodCard = document.createElement("div");
            seafoodCard.className = "seafood-card";
    
            seafoodCard.innerHTML = `
              <img src="${seafood.img}" alt="${seafood.name}">
              <h3>${seafood.name}</h3>
              <p>${seafood.description}</p>
              <p class="sas">${seafood.status}</p>
            `;
    
            seafoodList.appendChild(seafoodCard);
          });
        }
      }
    
      // Initial population
      updateRegions(countrySelect.value);
      updateSeafoodDisplay(countrySelect.value, regionSelect.value);
