// Adapted from: https://github.com/paulmillr/console-polyfill
global.console = {}
const con = global.console
let prop, method
const printFn = function (...args) {
  print(args.join(' '))
}
const properties = ['memory']
const methods = ('assert,clear,count,debug,dir,dirxml,error,exception,group,' +
   'groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,' +
   'show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn,timeLog,trace').split(',')
/* eslint-disable no-cond-assign */
while (prop = properties.pop()) if (!con[prop]) con[prop] = {}
while (method = methods.pop()) if (!con[method]) con[method] = printFn
/* eslint-enable no-cond-assign */
