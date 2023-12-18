document.addEventListener("DOMContentLoaded", function() 
{
    const nameInput = document.querySelector('input[name="name"]');
    const emailInput = document.querySelector('input[name="email"]');
    const sendButton = document.querySelector('.btn');
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      // Ajoutez ici votre logique pour envoyer le formulaire si les conditions sont remplies
  
      // Vérification des critères
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
  
      // Vérification si le nom contient uniquement des lettres et ne dépasse pas 10 caractères
      const isAlpha = /^[a-zA-Z\s]{1,10}$/;
      const isNameValid = isAlpha.test(name);
  
      // Vérification du format de l'email
      const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
  
      // Vérification si le nom est inclus dans l'email et s'il y a au moins deux chiffres après @
      const isNameInEmail = email.includes(name);
      const afterAt = email.split('@')[1];
      const hasTwoNumbersAfterAt = /\d.*\d/.test(afterAt);
  
      // Affichage du message d'erreur si les critères ne sont pas respectés
      if (!isNameValid) {
        alert('Veuillez entrer un nom contenant uniquement des lettres et ne dépassant pas 10 caractères.');
      } else if (!isEmailValid) {
        alert('Veuillez entrer une adresse email valide.');
      } else if (!isNameInEmail || !hasTwoNumbersAfterAt) {
        alert('Le nom doit être inclus dans l\'email et l\'email doit contenir au moins deux chiffres après @.');
      } else {
        // Si toutes les conditions sont remplies, le formulaire peut être soumis
        console.log('Le formulaire est valide, envoi en cours...');
        // Vous pouvez ajouter ici le code pour soumettre le formulaire
      }
    });
  
    // Activation ou désactivation du bouton "Send" en fonction des saisies dans les champs
    nameInput.addEventListener('input', validateForm);
    emailInput.addEventListener('input', validateForm);
  
    function validateForm() {
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const isAlpha = /^[a-zA-Z\s]{1,10}$/;
      const isNameValid = isAlpha.test(name);
      const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
      const isNameInEmail = email.includes(name);
      const afterAt = email.split('@')[1];
      const hasTwoNumbersAfterAt = /\d.*\d/.test(afterAt);
  
      if (isNameValid && isEmailValid && isNameInEmail && hasTwoNumbersAfterAt) {
        sendButton.disabled = false;
      } else {
        sendButton.disabled = true;
      }
    }
  });
  