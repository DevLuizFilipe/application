function callBackend() {
    const backendURL = "<URL_do_back-end>"; // Insira a URL do back-end aqui
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
  