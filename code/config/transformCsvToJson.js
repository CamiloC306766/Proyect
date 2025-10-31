const transformData = (data) => {
  return data.map(row => {
    const key = Object.keys(row)[0]; // "nombre;edad;ciudad"
    const headers = key.split(";");  // ["nombre","edad","ciudad"]
    
    const values = row[key].split(";"); // ["samuel","21","medellin"]

    let obj = {};
    headers.forEach((h, i) => {
      obj[h] = values[i];
    });

    return obj;
  });
};

module.exports = transformData