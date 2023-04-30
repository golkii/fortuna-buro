document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector("form");
  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();
    console.log(form);

    let formData = new FormData(form);

    form.classList.add('sending');
    console.log(formData.keys());

    let response = await fetch('sendmail.php', {
      method: "POST",
      body: formData,
      mode: "no-cors"
    });
    if (response.ok) {
      let result = await response.json();
      alert(result.message);
      form.reset();
    }
    else {
      alert('Ошибка');
    }
    form.classList.remove('sending');
  }
});