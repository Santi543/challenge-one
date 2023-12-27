const getData = async () => {
    const resp = await fetch('https://api.sampleapis.com/coffee/hot');
    const json = await resp.json();
    return json;
  }

  export default getData