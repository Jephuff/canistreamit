function request(url) {
  return window.fetch(url)
    .then(function(data){return data.json(); });
}

function availability(movie, mediaType){
  return request('http://www.canistream.it/services/query?movieId=' + movie._id + '&attributes=1&mediaType=' + mediaType);
}

module.exports = {
  search: function (movie, callback) {
    return request('http://www.canistream.it/services/search?movieName=' + movie)
      .then(function(data) {
        if(callback) callback(data);
        return data;
      });
  },
  streaming: function (movie, callback) {
    return availability(movie, 'streaming')
      .then(function(data) {
        if(callback) callback(data);
        return data;
      });
  },
  rental: function (movie, callback) {
    return availability(movie, 'rental')
      .then(function(data) {
        if(callback) callback(data);
        return data;
      });
  },
  purchase: function (movie, callback) {
    return availability(movie, 'purchase')
      .then(function(data) {
        if(callback) callback(data);
        return data;
      });
  },
  dvd: function (movie, callback) {
    return availability(movie, 'dvd')
      .then(function(data) {
        if(callback) callback(data);
        return data;
      });
  },
  xfinity: function (movie, callback) {
    return availability(movie, 'xfinity')
      .then(function(data) {
        if(callback) callback(data);
        return data;
      });
  }
};
