onload = () => {
    document.body.classList.remove("container");
  };
  

  document.addEventListener('DOMContentLoaded', () => {
    const text = "Para la Niña de mis ojos <br>Jennifer Tatiana Lee <br> todo sea por una sonrisita de esa carita";
    let index = 0;
    let isDeleting = false;
    let repeatCount = 0;
  
    function typeWriter() {
      const element = document.getElementById('typing-text');
      
      if (!isDeleting) {
        // Efecto de escribir
        if (index < text.length) {
          if (text.charAt(index) === '<') { // Manejo del salto de línea
            element.innerHTML += "<br>";
            index += 4; // Saltamos el "<br>"
          } else {
            element.innerHTML += text.charAt(index);
            index++;
          }
        } else {
          // Cuando termina de escribir, iniciamos el borrado después de una pausa
          setTimeout(() => {
            isDeleting = true;
          }, 1000); // Pausa antes de borrar
        }
      } else {
        // Efecto de borrado
        if (index > 0) {
          if (element.innerHTML.slice(-4) === "<br>") {
            element.innerHTML = element.innerHTML.slice(0, -4); // Borra el <br>
            index -= 4;
          } else {
            element.innerHTML = element.innerHTML.slice(0, -1); // Borra el último carácter
            index--;
          }
        } else {
          // Cuando termina de borrar, volvemos a escribir o mostramos el texto final
          isDeleting = false;
          repeatCount++; // Incrementa el número de ciclos
          
          if (repeatCount >= 2) {
            element.innerHTML = text; // Muestra el texto final
            return; // Detenemos el ciclo
          }
        }
      }
      
      setTimeout(typeWriter, isDeleting ? 50 : 150); // Velocidad diferente para escribir y borrar
    }
  
    typeWriter(); // Inicia el efecto de escritura
  });
  
