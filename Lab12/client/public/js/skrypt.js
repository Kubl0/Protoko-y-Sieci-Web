window.addEventListener("load", function (event) { 
 const es = new EventSource("http://localhost:7000/events/messages");
 
 es.addEventListener("message", function(event) {
  const adContainer = document.getElementById("ad");

  adContainer.textContent = event.data;
 });
 
});
