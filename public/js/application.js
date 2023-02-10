const table = document.querySelector('#table');

table.addEventListener('click', async (event) => {
  event.preventDefault();
  if (event.target.classList.contains('chooseDeck')) {
    const deck = event.target.getAttribute('id');
    // console.log(deck);
    const response = await fetch(`/theme/${deck}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify({
        deck,
      }),
    });
    const data = await response.text()
    console.log(data)
    // event.target.parentNode.remove();

  }
});

// table.addEventListener('click', async (event) => {
//     event.preventDefault();
//     console.log(event.target);
//     // if (event.target.classList.contains('chooseDeck')) {
//     //   const deck = event.target.getAttribute('id');
//     //   // console.log(deck);
//     //   console.log(data)
//     //   // event.target.parentNode.remove();
  
//     })
  