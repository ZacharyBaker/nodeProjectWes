const axios = require('axios');


function typeAhead(search) {
  if (!search) return;

  const searchInput = search.querySelector('input[name="search"]');
  const searchResults = search.querySelector('.search__results');

  searchInput.on('input', function() {
    // if there is no value , quit it
    if(!this.value) {
      searchResults.style.display = 'none';
      return; // stop
    }
    //show the search results
    searchResults.style.display = 'block';
    console.log('about to axios')
    axios
      .get(`/api/search?q=${this.value}`)
      .then(res => {
        console.log(res.data,'RESPONSE DADDAD')
      }).catch(function (error) {
    console.log(error, 'ERRROR BIOTCH');
  });
  })
}

export default typeAhead;