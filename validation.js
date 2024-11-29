document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
  
    document.getElementById('nameError').textContent = '';
    document.getElementById('messageError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('emailError').textContent = '';
  
    let isValid = true;
      if (!name) {
      document.getElementById('nameError').textContent = 'Name is required.';
      isValid = false;
    }
      if (message.length < 5) {
      document.getElementById('messageError').textContent = 'Message must be at least 5 characters.';
      isValid = false;
    }
    const phoneRegex = /^\+380\d{9}$/;
    if (!phoneRegex.test(phone)) {
      document.getElementById('phoneError').textContent = 'Phone number must start with +380 and contain 12 digits.';
      isValid = false;
    }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById('emailError').textContent = 'Email must be a valid format.';
      isValid = false;
    }
      if (isValid) {
      console.log({ name, message, phone, email });
      alert('Form submitted successfully!');
    }
  });
  