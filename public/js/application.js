const table = document.querySelector('#table');
const btn = document.querySelectorAll('button');

let counter

table.addEventListener('click', async (event) => {
  event.preventDefault();
  if (event.target.classList.contains('chooseDeck')) {
    counter = 0;
    const deck = event.target.getAttribute('data');
    console.log(event.target);
    const response = await fetch(`/theme/${deck}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify({
        deck,
        counter,
      }),
    });
    const data = await response.text();
    console.log(data)

    table.removeChild(table.firstChild);
    table.removeChild(table.firstChild);
    table.removeChild(table.firstChild);
    table.insertAdjacentHTML('beforeend', data);
    // event.target.parentNode.remove();

  }
});

  table.addEventListener('click', async (event) => {
     event.preventDefault();
     if(event.target.classList.contains('answerButton')) {
       counter += 1;
     const deck = event.target.parentNode.parentNode.getAttribute('data');     
     const idAnswer = event.target.getAttribute('id');
     const response = await fetch(`/theme/${deck}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify({
        idAnswer,
        deck,
        counter,
      }),
    })
    const data = await response.text();
    table.removeChild(table.firstChild);
    table.insertAdjacentHTML('beforeend', data);
    }
  })
     
    
