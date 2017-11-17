const request = require('request-promise');
const md5 = require('md5');


module.exports = class Parking {
  constructor(conf) {
    this.conf = conf;
  }

  getSign(timestamp) {
    const stringSignTemp = `${this.conf.appId}${this.conf.appSecret}${timestamp}`;
    const sign = md5(stringSignTemp).toLowerCase();
    return sign;
  }

  async fetchApi(path, info) {
    const timestamp = new Date().getTime();

    const options = {
      method: 'POST',
      uri: `${this.conf.baseUrl}${path}`,
      form: {
        appid: this.conf.appId,
        appsecret: this.conf.appSecret,
        timestamp,
        sign: this.getSign(timestamp),
        ...info,
      },
    };
    const results = await request(options);
    return JSON.parse(results);
  }
}

// const Parking = (conf) => {
//   this.conf = conf;
// };

// const getSign = (timestamp) => {
//   const stringSignTemp = `${_self.conf.appId}${_self.conf.appSecret}${timestamp}`;
//   const sign = md5(stringSignTemp).toLowerCase();
//   return sign;
// };

// const fetchApi = async (path, info) => {
//   const timestamp = new Date().getTime();

//   const options = {
//     method: 'POST',
//     uri: `${conf.baseUrl}${path}`,
//     form: {
//       appid: _self.conf.appId,
//       appsecret: _self.conf.appSecret,
//       timestamp,
//       sign: getSign(timestamp),
//       ...info,
//     },
//   };
//   const results = await request(options);
//   return JSON.parse(results);
// };

// module.exports = Parking;
