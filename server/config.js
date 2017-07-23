module.exports = {
  AUTH0_DOMAIN: 'avariaguinee.auth0.com',
  AUTH0_API_AUDIENCE: 'http://localhost:8083/api/', /* likely 'http://localhost:8083/api/' */
  MONGO_URI: process.env.MONGO_URI || 'mongodb://rsvp-user:rsvp-password@ds153422.mlab.com:53422/rsvp',
  NAMESPACE: 'http://myapp.com/roles'
};