import {$http} from '/build/global/scripts/factories/xhr-factory.js';

export const AuthFactory = {

  register: function(account) {
    return $http.post('/api/auth/register', account);
  },

  login: function() {
    return $http.post('/api/auth/login');
  },

  changePassword: function() {
    return $http.post('/api/auth/changePassword');
  },

  remove: function(id) {
    return $http.get('/api/auth/remove' + id);
  },

  edit: function(id) {
    return $http.post('/api/auth/edit');
  }

};