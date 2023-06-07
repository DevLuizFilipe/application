function callBackend() {
    const backendURL = "";
    fetch(backendURL)
      .then(response => response.text())
      .then(data => {
        // Redirecionar para /api
        window.location.href = "/api";
        
        // Exibir a resposta do backend
        document.getElementById("response").textContent = data;
      })
      .catch(error => {
        console.error('Erro:', error);
      });
  }
  