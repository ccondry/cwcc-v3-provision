require('dotenv').config()

const ldap = require('./models/ldap')

// ldap.listUsers({})
// .then(r => {
//   console.log(r)
// })
// .catch(e => {
//   console.log(e)
// })

// ldap.resetPassword({
//   newPassword: 'C1sco12345',
//   upn: 'sjeffers@dcloud.cisco.com'
// })
// .then(r => {
//   console.log(r)
// })
// .catch(e => {
//   console.log(e)
// })

ldap.createUser({
  firstName: 'Sandra 0325 Finance',
  lastName: 'Jefferson',
  username: 'sjeffers0325_finance',
  commonName: 'sjeffers0325_finance',
  domain: 'dcloud.cisco.com',
  physicalDeliveryOfficeName: '0325',
  telephoneNumber: '10800325',
  userId: '0325',
  mail: 'sjeffers0325_finance@dcloud.cisco.com',
  email: 'sjeffers0325_finance@dcloud.cisco.com',
  description: 'Sandra Jefferson 0325 Finance',
  usersDn: 'OU=Sync2Webex,DC=dcloud,DC=cisco,DC=com',
  password: 'C1sco12345'
})
.then(r => {
  // console.log(r)
})
.catch(e => {
  console.log(e)
})

// getUser,
// resetPassword,
// changePassword,
// addToGroup,
// lockUser,