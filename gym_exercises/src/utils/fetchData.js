export const exerciseOptions={
  method: 'GET',
  headers: {
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
    'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
    
  }
};

  
  // Function to Fetch Data
  export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  };
  
    //abstraction will actuclly fetch the data

		//  url: ,
