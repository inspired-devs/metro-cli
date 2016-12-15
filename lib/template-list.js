var request = require('request')

module.exports = function (callback) {
  request({
    url: 'https://raw.githubusercontent.com/metrovue/metro-cli/master/lists/app-templates.json',
    headers: {
      'User-Agent': 'metro-cli'
    }
  }, function (err, res, list) {
    if (err) {
      callback({code: err, response: res})
      return
      // ^^^ EARLY EXIT
    }

    callback(null, JSON.parse(list))
  })
}
