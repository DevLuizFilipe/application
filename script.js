function callBackend() {
    const backendURL = process.env.BACKEND_URL;
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
  