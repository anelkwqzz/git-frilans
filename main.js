document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.name.value;
    const phone = this.phone.value;
    document.getElementById('confirmation').innerText = Спасибо, ${name}! Мы свяжемся с вами по телефону ${phone}.;
    this.reset();
  });