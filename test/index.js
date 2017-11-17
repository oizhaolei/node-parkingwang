const Parking = require('../lib/index');

const parking = new Parking({
  appId: process.env.APP_ID,
  appSecret: process.env.APP_SECRET,
  baseUrl: process.env.BASE_URL,
});

describe('parking', () => {
  it('Test /park/QueryByCode', async () => {
    const res = await parking.fetchApi('/park/QueryByCode', { park_code: 'a8662e561fb30fe644e38a9fc78953fd' });
    console.log(JSON.stringify(res));
  });
  /*
   *   it('Test /vehicle_auth/ModifyAuthPeroid', async () => {
   *     const info = {
   *       serial_number: '1510711605400290418RAhp5',
   *       park_code: 'a8662e561fb30fe644e38a9fc78953fd',
   *       vpl_number: '藏AKA123',
   *       start_time: '1500344987',
   *       end_time: '1523344000',
   *     };
   *     const res = await parking.fetchApi('/vehicle_auth/ModifyAuthPeroid', info);
   *     console.log(JSON.stringify(res));
   *   });
   *
   *   it('Test /vehicle_auth/Issued', async () => {
   *     const info = {
   *       serial_number: '1510711605400290418RAhp5',
   *       park_code: 'a8662e561fb30fe644e38a9fc78953fd',
   *       user_name: 'xiaozhao',
   *       park_no: '123',
   *       type: '5',
   *       vpl_number: '藏AKA123',
   *       begin_time: '1500344987',
   *       end_time: '1523344000',
   *     };
   *     const res = await parking.fetchApi('/vehicle_auth/Issued', info);
   *     console.log(JSON.stringify(res));
   *   });
   *
   *   it('Test /vehicle_auth/GetAuth', async () => {
   *     const info = {
   *       park_code: 'a8662e561fb30fe644e38a9fc78953fd',
   *       vpl_number: '藏AKA123',
   *       per_page: '1',
   *     };
   *     const res = await parking.fetchApi('/vehicle_auth/GetAuth', info);
   *     console.log(JSON.stringify(res));
   *   });*/
});
