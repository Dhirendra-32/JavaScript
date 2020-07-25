function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// MAKE GET REQUEST

easyHTTP.prototype.get = function (url, callback) {
  this.http.open("GET", url, true);
  let self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback("Error" + self.http.status);
    }
  };

  this.http.send();
};

// MAKE POST Method

easyHTTP.prototype.post = function (url, data, callback) {
  this.http.open("POST", url, true);
  this.http.setRequestHeader("content-type", "application/json");
  let self = this;
  this.http.onload = function () {
    callback(null, self.http.responseText);
  };
  this.http.send(JSON.stringify(data));
};

// Make PUT request

easyHTTP.prototype.put = function (url, data, callback) {
  this.http.open("PUT", url, true);
  this.http.setRequestHeader("content-type", "application/json");
  let self = this;
  this.http.onload = function () {
    callback(null, self.http.responseText);
  };
  this.http.send(JSON.stringify(data));
};

// Delete request

easyHTTP.prototype.delete = function (url, callback) {
  this.http.open("DELETE", url, true);
  let self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, "Post deleted"); //return empty object
    } else {
      callback("Error" + self.http.status);
    }
  };

  this.http.send();
};
