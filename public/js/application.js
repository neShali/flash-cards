const table = document.querySelector('#table');

table.addEventListener('click', async (event) => {
  event.preventDefault();
  if (event.target.classList.contains('chooseDeck')) {
    const deck = event.target.getAttribute('id');
    console.log(deck);
    const response = await fetch(`/user/${deck}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify({
        deck,
      }),
    });
    const data = await response.json()
    event.target.parentNode.remove();

  }
});
