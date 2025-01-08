window.addEventListener('load', function() {
  // Create an iframe dynamically and insert it into the #background-container div
  const iframe = document.createElement('iframe');
  iframe.src = "https://my.spline.design/hologramvirus-669bd868077b111aad60914c1dcff8a4/";
  iframe.frameBorder = "0";
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.position = "absolute";
  iframe.style.top = "0";
  iframe.style.left = "0";
  iframe.style.zIndex = "-1"; // Ensure it's behind the content
  iframe.setAttribute("loading", "eager"); // Ensures the iframe loads as soon as the page loads
  document.getElementById('background-container').appendChild(iframe);
});
