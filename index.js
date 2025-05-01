fetch('https://6z4nqa3j4bcfrvo7tuvq5eb6uq0xcvuq.lambda-url.eu-north-1.on.aws/')
.then(response => response.json())
.then(data => {
  document.getElementById('count').innerText = data;
})
.catch(err => {
  console.error('Error fetching visitor count:', err);
  document.getElementById('count').innerText = 'N/A';
});