fetch('https://bxlly5hekabmhbrc6ttu6t2zpi0ofjuo.lambda-url.eu-north-1.on.aws/')
.then(response => response.json())
.then(data => {
  document.getElementById('count').innerText = data;
})
.catch(err => {
  console.error('Error fetching visitor count:', err);
  document.getElementById('count').innerText = 'N/A';
});