export default async function fetcherPost([url, dataToSend]) {
    const response = await fetch(url, {
      method: 'POST', // specify HTTP method
      headers: {
        'Content-Type': 'application/json', // specify content type
      },
      body: JSON.stringify(dataToSend), // convert data to JSON string
    });
  
    if (!response.ok) {
      throw new Error('An error occurred while fetching the data.');
    }
  
    return response.json();
};