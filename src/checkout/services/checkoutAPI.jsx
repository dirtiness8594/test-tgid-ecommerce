




// Simulando fetch para o JSON de seções
export async function fetchHomeSections() {
    const res = await fetch('http://localhost:3001/sections'); // JSON-server
    const data = await res.json();
    return data;
  }
  