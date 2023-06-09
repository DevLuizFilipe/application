function callBackend() {
    const backendURL = "http://44.193.202.31:3000";
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
  