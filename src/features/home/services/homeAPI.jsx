
export async function fetchHomeSections() {
    const res = await fetch('http://localhost:3001/sections');
    const data = await res.json();
    return data;
  }
  