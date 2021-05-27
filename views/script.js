// alert('hello there');

const input = document.querySelector('input');
input.addEventListener('keyup', (e) => {
  // 13 is 'enter' key on keyboard
  if (e.keyCode === 13) {
    e.preventDefault();
    const text = input.value;
    // console.log('text: ', text)
    // post text to database
    try {
      if (text) axios.post('http://localhost:3000/thought', { text }).then(response => {
        location.reload();
      })
    }
    catch (err) {
      alert('An error has occurred; please try again later.')
    }

  }
})
