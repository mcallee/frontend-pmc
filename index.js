document.getElementById("enviarBtn").addEventListener("click", async () => {
    const mensaje = document.getElementById("mensaje").value;

    try {
      const res = await fetch("http://localhost:3000/chatGPT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ texto_usuario: mensaje })
      });
      const data = await res.json();

      // Mostrar el JSON formateado
      document.getElementById("respuesta").textContent = JSON.stringify(data, null, 2);
    } catch (error) {
      console.error("Error:", error);
      document.getElementById("respuesta").textContent = "Error al procesar la solicitud.";
    }
  });