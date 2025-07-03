// Extra JS for future use
// Right now basic scroll-behavior is done by CSS
// JS will be useful if you want to add more interactions later

document.addEventListener('DOMContentLoaded', () => {
    console.log('Website Loaded Successfully!');
});

function toggleText(textId, btnId) {
    const text = document.getElementById(textId);
    const btn = document.getElementById(btnId);
  
    if (btn.innerText === "Read More") {
      if (textId === "authenticityText") {
        text.innerText = "Our commitment to preserving the authentic taste and aroma of South Indian filter coffee sets us apart from the rest. With Tanjore Degree Coffee, you can enjoy the true essence of this beloved beverage in the comfort of your own home.";
      } else if (textId === "qualityText") {
        text.innerText = "Produced by boiled milk, crafted with care and precision, our rose milk embodies the perfect balance of creamy richness and delicate floral notes, ensuring each sip is a decadent delight of unmatched quality.";
      }
      btn.innerText = "Read Less";
    } else {
      if (textId === "authenticityText") {
        text.innerText = "Our commitment to preserving the authentic taste and aroma of South Indian filter coffee sets us apart...";
      } else if (textId === "qualityText") {
        text.innerText = "Produced by boiled milk, crafted with care and precision, our rose milk embodies the perfect balance of creamy richness...";
      }
      btn.innerText = "Read More";
    }
  }
  
const track = document.querySelector('.testimonial-track');

track.addEventListener('mouseover', () => {
  track.style.animationPlayState = 'paused';
});

track.addEventListener('mouseout', () => {
  track.style.animationPlayState = 'running';
});

function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return false;
    }
  
    alert("Thank you for contacting us!");
    return true; // You can change this to false if you don't want it to submit for now
  }
  