
     const seafoodData = {
  philippines: {
    luzon: [
      { img: "img/milkfish.jpg", name: "Bangus (Milkfish)", description: "Farmed in sustainable aquaculture practices", status: "Sustainable", origin: "Native to Pacific and Indan Oceans", harvest: "The most common method of harvesting milkfish is the 'pasulang' method whereby fish are induced to swim against a water current (induced by tidal exchange) and are gathered in the catching pond or canal system and concentrated using a seine net." },
      { img: "img/crab.jpg", name: "Blue Crab", description: "Wild-caught using sustainable methods", status: "Sustainable", origin: "The blue swimming crab (Portunus pelagicus) is native to the Indian and western Pacific oceans, and is found throughout the Philippines.", harvest: "Sustainable blue crab harvesting in the Philippines requires closed seasons, size limits, habitat protection, selective fishing gear, and community involvement in management. Promoting aquaculture, monitoring populations, and educating stakeholders ensures long-term sustainability." },
      { img: "img/tuna.jpg", name: "Yellowfin Tuna", description: "Overfished in some areas, choose pole-and-line caught", status: "Not Sustainable", origin:"Yellowfin tuna (Thunnus albacares) are found in warm waters of the Pacific, Atlantic, and Indian Oceans.", harvest: "To sustainably harvest yellowfin tuna, it is essential to implement strict fishing quotas, avoid overfishing during spawning periods, and use selective fishing gear like longlines and pole-and-line to reduce bycatch. Establishing marine protected areas, enforcing catch limits, and supporting international agreements on tuna conservation are key to maintaining healthy populations and ecosystem balance." },
      { img: "img/squid.jpg", name: "Squid", description: "Caught sustainably in Luzon", status: "Sustainable", origin: "Squid in the Philippines, particularly species like the shortfin and longfin, are commonly found in the country's rich coastal waters and deep-sea regions.", harvest: "Sustainable squid harvesting requires regulating fishing seasons, using selective gear like jigs or traps, and setting size limits to protect juvenile populations. Promoting sustainable aquaculture, protecting marine habitats, and enforcing fisheries management are also key to long-term sustainability." }
    ],
    visayas: [
      { img: "img/shrimp.jpg", name: "Shrimp", description: "Sustainably farmed in Visayas", status: "Sustainable", origin: "Shrimp in the Philippines are primarily found in coastal areas and mangrove ecosystems. ", harvest: "To sustainably harvest shrimp, it’s crucial to regulate fishing seasons, use selective gear like shrimp traps, and set size limits to protect juvenile shrimp. Preserving mangrove habitats, promoting responsible aquaculture, and enforcing sustainable fishing practices help reduce environmental impact and ensure healthy shrimp populations. Effective fisheries management and community involvement are essential for long-term sustainability." },
      { img: "img/lobster.jpg", name: "Lobster", description: "Harvested with careful stock management", status: "Sustainable", origin: "Lobsters in the Visayas are typically found in coral reef ecosystems and rocky seabeds.", harvest: "Regulate fishing seasons, set size limits, and use selective traps to minimize bycatch. Protect coral reefs and enforce marine protected areas to ensure healthy lobster populations." },
      { img: "img/sardines.jpg", name: "Sardines", description: "Overfished in some areas, choose responsibly sourced", status: "Not Sustainable", origin: "Sardines in the Visayas are found in coastal waters, often near estuaries and upwelling zones.", harvest: "Manage catch quotas, protect spawning areas through marine protected zones, and promote responsible fishing methods. Regular population monitoring and habitat conservation are essential." },
      { img: "img/tilapia.jpg", name: "Tilapia", description: "Farmed sustainably in aquaculture", status: "Sustainable", origin: "Tilapia is widely farmed in freshwater lakes and rivers in the Visayas.", harvest: " Promote responsible aquaculture practices, avoid overfishing, and conserve freshwater ecosystems. Implement proper farm management and collaborate with local communities to support sustainable practices." }
    ],
    mindanao: [
      { img: "img/crayfish.jpg", name: "Crayfish", description: "Sustainably caught in Mindanao waters", status: "Sustainable", origin: "Crayfish in Mindanao are typically found in freshwater habitats such as rivers, streams, and lakes.", harvest: "Implement size limits, regulate harvest seasons to protect breeding populations, and promote responsible aquaculture. Preserve freshwater ecosystems and prevent overharvesting to maintain crayfish populations." },
      { img: "img/oyster.jpg", name: "Oyster", description: "Farmed sustainably in Mindanao", status: "Sustainable", origin: "Oysters in Mindanao are commonly found in coastal areas, particularly in mangrove and estuarine environments.", harvest: "Use selective harvesting methods such as hand-harvesting or shellfish racks, regulate harvest seasons, and protect mangrove habitats. Promote sustainable aquaculture practices to reduce pressure on wild oyster populations." },
      { img: "img/snapper.jpg", name: "Snapper", description: "Overfished in some areas", status: "Not Sustainable", origin: "Snapper species in Mindanao inhabit both shallow coastal waters and deeper offshore areas.", harvest: "Set size limits, implement seasonal closures to protect breeding stocks, and use selective fishing gear like handlines and traps to minimize bycatch. Ensure the protection of coral reefs and other critical habitats." },
      { img: "img/grouper.jpg", name: "Grouper", description: "Farmed sustainably in Mindanao", status: "Sustainable", origin: "Groupers in Mindanao are found in coral reefs and rocky seafloors, typically in deeper coastal waters.", harvest: "Regulate catch limits, enforce seasonal closures, and use selective fishing gear such as traps. Protect coral reef ecosystems and promote sustainable fishing practices to ensure healthy grouper populations." }
    ]
  },
  japan: {
    hokkaido: [
      { img: "img/salmon.jpg", name: "Salmon", description: "Farm-raised in Hokkaido with sustainable practices", status: "Sustainable", origin: "Salmon in Hokkaido, Japan, are primarily found in cold waters, particularly in rivers and coastal areas where they spawn.", harvest: "Regulate fishing seasons, implement catch limits, and protect spawning habitats. Promote responsible aquaculture practices and reduce bycatch by using selective gear. Habitat conservation and monitoring salmon populations are key for sustainability." },
      { img: "img/scallops.jpg", name: "Scallop", description: "Hokkaido scallops are farmed sustainably", status: "Sustainable", origin: "Scallops in Hokkaido are harvested from cold, nutrient-rich waters, particularly from the Sea of Okhotsk and the Pacific Ocean.", harvest: "Use dredging methods that minimize environmental impact, set harvest quotas, and implement seasonal closures during breeding. Promote sustainable farming practices and protect marine ecosystems to ensure long-term scallop populations." },
      { img: "img/sardine.jpg", name: "Sardine", description: "Wild-caught sustainably in Hokkaido", status: "Sustainable", origin: "Sardines in Hokkaido are found in the northern Pacific Ocean, often near upwelling zones and coastal areas.", harvest: "Set catch quotas, protect spawning areas, and promote selective fishing methods like purse seines to minimize bycatch. Regular monitoring and habitat conservation are essential to maintaining healthy sardine stocks." },
      { img: "img/tuna.jpg", name: "Tuna", description: "Overfished, choose pole-and-line caught", status: "Not Sustainable", origin: "Tuna in Hokkaido, particularly species like Pacific bluefin, are found in deep, cold waters of the North Pacific Ocean.", harvest: "Regulate catch limits, establish seasonal closures to protect spawning populations, and use selective fishing gear like pole-and-line or longlines. Support international conservation efforts and promote sustainable fishing practices to ensure the health of tuna stocks." }
    ],
    kyushu: [
      { img: "img/amberjack.jpg", name: "Amberjack", description: "Fished with sustainable techniques", status: "Sustainable", origin: "Amberjack in Kyushu are found in warm coastal waters, particularly around reefs and rocky seabeds.", harvest: "Set catch limits, regulate fishing seasons, and use selective gear like traps or handlines to reduce bycatch. Protect reef habitats and enforce sustainable fishing practices to maintain healthy amberjack populations." },
      { img: "img/sea-bream.jpg", name: "Sea Bream", description: "Farmed sustainably in Kyushu waters", status: "Sustainable", origin: "Sea bream in Kyushu are typically found in the coastal waters and rocky reefs of the region.", harvest: "Implement size limits, establish seasonal closures to protect breeding stocks, and use selective fishing gear. Promote sustainable aquaculture practices and habitat conservation to support long-term sea bream populations." },
      { img: "img/swordfish.jpg", name: "Swordfish", description: "Overfished in some areas", status: "Not Sustainable", origin: "Swordfish in Kyushu are found in deeper, colder waters of the Pacific Ocean, particularly in offshore regions.", harvest: "Regulate catch limits, implement seasonal closures, and use selective fishing methods like longlines with circle hooks to reduce bycatch. Support international management efforts and promote responsible fishing practices to ensure sustainable swordfish populations." },
      { img: "img/uni.jpg",       name: "Uni (Sea Urchin)", description: "Farm-raised sustainably in Kyushu", status: "Sustainable", origin: "Uni, or sea urchins, are found in the rocky coastal areas of Kyushu, particularly in kelp forests and other marine ecosystems.", harvest: "Use hand-harvesting techniques to minimize damage to habitats, regulate harvest seasons, and set size limits to protect breeding populations. Promote sustainable aquaculture and enforce marine ecosystem conservation to ensure long-term sea urchin sustainability." }
    ],
    okinawa: [
      { img: "img/grouper.jpg", name: "Grouper", description: "Farmed sustainably in Okinawa", status: "Sustainable", origin: "Groupers in Okinawa are found in coral reefs and rocky seafloors, typically in warm, deeper coastal waters.", harvest: "Set size limits, regulate catch seasons, and use selective gear such as traps to reduce bycatch. Protect coral reef ecosystems and enforce sustainable fishing practices to ensure healthy grouper populations." },
      { img: "img/lobster.jpg", name: "Lobster", description: "Caught sustainably in Okinawa waters", status: "Sustainable", origin: "Lobsters in Okinawa are found in coral reefs and rocky coastal areas, especially in deeper waters.", harvest: "Implement seasonal closures to protect breeding populations, use selective traps to minimize bycatch, and set size limits to ensure lobsters have time to mature. Protecting coral habitats is crucial for sustaining lobster populations." },
      { img: "img/mackerel.jpg", name: "Mackerel", description: "Overfished in some areas, choose sustainably sourced", status: "Not Sustainable", origin: "Mackerel in Okinawa are found in coastal waters and deeper offshore regions of the Pacific Ocean.", harvest: "Set catch limits, establish seasonal closures to protect spawning populations, and use selective fishing gear like purse seines to reduce bycatch. Regular population monitoring and habitat protection are essential for sustainability." },
      { img: "img/snapper.jpg", name: "Snapper", description: "Sustainably caught in Okinawa", status: "Sustainable", origin: "Snapper in Okinawa are commonly found in coral reefs and rocky seafloors, in both shallow and deep waters.", harvest: "Regulate fishing seasons, set size limits, and use selective fishing gear to reduce bycatch. Protect coral ecosystems and implement marine protected areas to help sustain snapper populations." }
    ]
  },
  korea: {
    jeju: [
      { img: "img/abalone.jpg", name: "Abalone", description: "Farm-raised in Jeju for sustainability", status: "Sustainable", origin: "Abalone in Jeju are found in rocky coastal waters and kelp forests, where they cling to rocks in deeper waters.", harvest: "Use hand-harvesting techniques to minimize damage to habitats, regulate harvest seasons, and set size limits to protect juvenile abalone. Promote sustainable aquaculture and protect marine ecosystems to ensure long-term abalone populations." },
      { img: "img/octopus.jpg", name: "Octopus", description: "Caught with sustainable fishing practices in Jeju", status: "Sustainable", origin: "Octopuses in Jeju are found in rocky seabeds and coral reefs, often hiding in crevices and caves.", harvest: "Set catch limits, regulate fishing seasons, and use selective gear like traps to reduce bycatch. Protect marine habitats and avoid overfishing to ensure the sustainability of octopus populations." },
      { img: "img/mackerel.jpg", name: "Mackerel", description: "Controlled catch limits for sustainability", status: "Sustainable", origin: "Mackerel in Jeju are found in the waters surrounding the island, particularly in the cold, nutrient-rich waters of the Yellow Sea and the East China Sea.", harvest: "Implement catch quotas, protect spawning areas, and use selective fishing gear to minimize bycatch. Regular population monitoring and sustainable fishing practices are crucial for maintaining healthy mackerel stocks." },
      { img: "img/anchovy.jpg", name: "Anchovy", description: "Overfished, choose sustainably sourced", status: "Not Sustainable", origin: "Anchovies in Jeju are found in coastal and upwelling zones, typically in shallow waters where they form schools.", harvest: "Set catch limits, protect spawning grounds, and use selective gear such as purse seines to reduce bycatch. Habitat conservation and regular stock assessments are vital for ensuring sustainable anchovy populations." }
    ],
    busan: [
      { img: "img/flatfish.jpg", name: "Flatfish", description: "Farmed in Busan with sustainable methods", status: "Sustainable", origin: " Flatfish in Busan are found in sandy or muddy seabeds in shallow coastal waters and continental shelves.", harvest: "Set catch limits, implement size limits, and use selective fishing gear like trawl nets with bycatch reduction devices. Regulate fishing seasons to protect breeding populations and ensure long-term sustainability." },
      { img: "img/rockfish.jpg", name: "Rockfish", description: "Caught with strict stock management", status: "Sustainable", origin: "Rockfish in Busan are found in rocky seabeds and deep coastal waters of the Yellow Sea and the East Sea.", harvest: "Set catch limits, implement size limits, and use selective fishing gear such as traps or hook-and-line methods. Protect rocky habitats and regulate fishing seasons to ensure sustainable rockfish populations." },
      { img: "img/cod.jpg", name: "Cod", description: "Overfished in some areas, choose responsibly sourced", status: "Not Sustainable", origin: "Cod in Busan are typically found in colder waters of the Yellow Sea and East Sea, often in deeper, rocky regions.", harvest: "Set catch quotas, establish seasonal closures to protect spawning stocks, and use selective gear like longlines to reduce bycatch. Monitor cod populations and protect their natural habitats to maintain healthy stocks." },
      { img: "img/seaweed.jpg", name: "Seaweed", description: "Farmed sustainably", status: "Sustainable", origin: "Seaweed in Busan grows in the coastal waters of the Yellow Sea and the East Sea, particularly around rocky shorelines and kelp forests.", harvest: "Harvest seaweed by hand or using selective harvesting tools to minimize environmental damage. Regulate harvest seasons, ensure proper management of aquaculture, and protect coastal ecosystems to maintain healthy seaweed populations." }
    ],
    seoul: [
      { img: "img/tilapia.jpg", name: "Tilapia", description: "Farm-raised sustainably in Seoul", status: "Sustainable", origin: "Tilapia in Seoul is commonly farmed in freshwater aquaculture systems, as the species is not native to the region but thrives in warm, controlled environments.", harvest: "Promote responsible aquaculture practices, regulate stocking densities, and ensure water quality management. Avoid overfishing wild populations by focusing on sustainable farmed tilapia production." },
      { img: "img/squid.jpg", name: "Squid", description: "Caught with sustainable methods", status: "Sustainable", origin: "Squid in Seoul are typically sourced from nearby waters of the Yellow Sea and the East Sea, where they inhabit deeper, cooler waters.", harvest: "Implement catch limits, use selective fishing gear like squid jigs, and regulate fishing seasons to protect breeding populations. Protect marine habitats and ensure bycatch reduction through sustainable fishing methods." },
      { img: "img/crab.jpg", name: "Crab", description: "Caught sustainably in Seoul waters", status: "Sustainable", origin: "Crabs in Seoul, particularly species like the blue crab and mud crab, are found in coastal estuaries and mudflats of the Yellow Sea and the East Sea.", harvest: "Regulate harvest seasons, set size limits, and promote selective fishing gear such as traps. Protect coastal habitats like mangroves and estuaries, and implement sustainable aquaculture practices for farmed crabs." },
      { img: "img/pollock.jpg", name: "Pollock", description: "Overfished in some areas", status: "Not Sustainable", origin: "Pollock in Seoul is primarily sourced from colder, deeper waters of the Yellow Sea and the East Sea, with a significant presence in the Pacific Ocean as well.", harvest: "Set catch quotas, use selective fishing gear like longlines, and enforce seasonal closures to protect spawning stocks. Support international conservation efforts and ensure habitat protection to maintain pollock populations." }
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

// Get modal elements
const modal = document.getElementById("seafood-modal");
const modalImg = document.getElementById("modal-img");
const modalName = document.getElementById("modal-name");
const modalDescription = document.getElementById("modal-description");
const modalStatus = document.getElementById("modal-status");
const modalOrigin = document.getElementById("modal-origin");
const modalHarvest = document.getElementById("modal-harvest");
const closeButton = document.querySelector(".close-button");

// Update seafood display with modal integration
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
      seafoodCard.addEventListener("click", () => showModal(seafood));
      seafoodList.appendChild(seafoodCard);
    });
  }
}

// Show modal with additional information
function showModal(seafood) {
  modal.style.display = "flex"; // Show the modal
  modalImg.src = seafood.img;
  modalName.textContent = seafood.name;
  modalDescription.textContent = seafood.description;
  modalOrigin.innerHTML = `<strong>Origin:</strong> ${seafood.origin}`;
  modalHarvest.innerHTML = `<strong>How to Harvest:</strong> ${seafood.harvest}`;
  modalStatus.textContent = `${seafood.status}`;
  
}

// Close the modal
closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside of it
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Initial population
updateRegions(countrySelect.value);
updateSeafoodDisplay(countrySelect.value, regionSelect.value);

