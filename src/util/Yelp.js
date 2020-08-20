const apiKey = '_Yemqs-xicK3oZmfiFPMSLQthL467kBjPJZ1Vjg_weuR2kWJg0Vht6p_WGGHG-o4ViwiF0BgO7MqeW5_QODEsb5l9n3xJySACKc8NrgyneUe0sW-eyvgFJsm0t4zX3Yx';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }).then(response => response.json() ).then(jsonResponse => {
        if(jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => ({
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.reviewCount
            }));
        }
    });
  }
};

export default Yelp;
