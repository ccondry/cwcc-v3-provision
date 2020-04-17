require('dotenv').config()

const ldap = require('./models/ldap')
const cucm = require('./models/cucm')

function abileneProvision ({
  userId,
  password = 'C1sco12345'
}) {
  ldap.createUser({
    firstName: 'Sandra ' + userId,
    lastName: 'Jefferson',
    username: 'sjeffers' + userId,
    commonName: 'sjeffers' + userId,
    domain: 'dcloud.cisco.com',
    physicalDeliveryOfficeName: userId,
    telephoneNumber: '1080' + userId,
    userId,
    mail: 'sjeffers' + userId + '@dcloud.cisco.com',
    email: 'sjeffers' + userId + '@dcloud.cisco.com',
    description: 'Sandra Jefferson ' + userId,
    usersDn: 'OU=Sync2Webex,DC=dcloud,DC=cisco,DC=com',
    password
  })
  .then(r => {
    console.log('LDAP provision successful for user', userId)
  })
  .catch(e => {
    console.log('Failed LDAP provision for user', userId, ':', e.message)
  })
  
  cucm.provision(userId)
  .then(r => {
    console.log('CUCM provision successful for user', userId)
  })
  .catch(e => {
    console.log('CUCM provision failed for user', userId, ':', e.message)
  })
}

abileneProvision({
  userId: '0325'
})