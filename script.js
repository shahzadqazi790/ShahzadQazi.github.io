// script.js
const seoServices = [
"SEO Services in Lahore",
"On Page SEO in Lahore",
"Off Page SEO in Lahore",
"Technical SEO in Lahore",
"Keyword Research in Lahore",
"Website SEO Optimization in Lahore",
"Link Building Services in Lahore",
"Guest Posting in Lahore",
"High Authority Backlinks in Lahore",
"Website Speed Optimization in Lahore",
"SEO Audit in Lahore",
"SEO Consultation in Lahore",
"WordPress SEO in Lahore"
];

const localServices = [
"Local SEO Services in Lahore",
"Google My Business Optimization in Lahore",
"Google Maps Ranking in Lahore",
"GMB Profile Setup in Lahore",
"Local Citations in Lahore",
"NAP Consistency Fix in Lahore",
"Local SEO Consultation in Lahore"
];

function loadServices() {
  const seoContainer = document.getElementById("seoServices");
  const localContainer = document.getElementById("localServices");

  seoServices.forEach(service => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerText = service;
    seoContainer.appendChild(div);
  });

  localServices.forEach(service => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerText = service;
    localContainer.appendChild(div);
  });
}

loadServices();
