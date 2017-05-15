/**
 * Created by lhy95 on 2017/2/25.
 */

// let host = 'http://202.194.155.189:9999/';
let host = 'http://47.93.46.153:8880/';
let laterHost = 'http://47.93.46.153:8889/'

export default {
  login: host + 'Login',
  logout: host + 'Login/Logout',
  reg: host + 'Register',
  isLogin: host + 'Login/IsLogin',
  block: host + 'Map/Block',
  indicator : host + 'Indicator',
  wellInfo: host + 'Map/Well',
  wellLog: host + 'WarnLog',
  parameter: laterHost + '/Line/Parameter',
  initialization: laterHost + '/Line/Initialization',
  historyLineData: laterHost + '/Line/HistoryLineData',
  getwarn: host + '/WarnLog/WellWarn',
  getoperator: host + '/WarnLog/WellOperation',
  allData: laterHost + '/Data/Data',
  fixedSensor: laterHost + 'Adjust/FixedSensor',
  sensor: laterHost + '/Adjust/Sensor',
  configration: laterHost + '/Adjust/Configuration',
  adjust: laterHost + '/Adjust/Adjust'
}
