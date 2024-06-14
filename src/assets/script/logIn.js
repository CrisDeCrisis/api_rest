const registerForm = document.getElementById('registerForm');

// console.log('registerForm');
const registerDataBase = async (data) => {
    console.log(data);
  try {
    const res = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      
    });
   if(!res.ok) {
       throw new Error('Error al registrar usuario');
   }
   const resData = await res.json();
   return resData;


  } catch (error) {
        console.log(error);
    
  }
}

registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log('registerForm');
    const formData = new FormData(registerForm);
    const nombre = formData.get('nombre');
    const email = formData.get('email');
    const contraseña = formData.get('contraseña');

    const data = { nombre, email, contraseña };
    const res = await registerDataBase(data);

    if (res) {
       alert('Usuario creado correctamente');
       return registerForm.reset();
    }
    alert('Error al crear el usuario');

});