"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3558],{3558:(c,s,i)=>{i.r(s),i.d(s,{HapticsWeb:()=>u});var e=i(467),o=i(7464),n=i(9182);class u extends o.E_{constructor(){super(...arguments),this.selectionStarted=!1}impact(t){var r=this;return(0,e.A)(function*(){const a=r.patternForImpact(null==t?void 0:t.style);r.vibrateWithPattern(a)})()}notification(t){var r=this;return(0,e.A)(function*(){const a=r.patternForNotification(null==t?void 0:t.type);r.vibrateWithPattern(a)})()}vibrate(t){var r=this;return(0,e.A)(function*(){r.vibrateWithPattern([(null==t?void 0:t.duration)||300])})()}selectionStart(){var t=this;return(0,e.A)(function*(){t.selectionStarted=!0})()}selectionChanged(){var t=this;return(0,e.A)(function*(){t.selectionStarted&&t.vibrateWithPattern([70])})()}selectionEnd(){var t=this;return(0,e.A)(function*(){t.selectionStarted=!1})()}patternForImpact(t=n.kn.Heavy){return t===n.kn.Medium?[43]:t===n.kn.Light?[20]:[61]}patternForNotification(t=n._n.Success){return t===n._n.Warning?[30,40,30,50,60]:t===n._n.Error?[27,45,50]:[35,65,21]}vibrateWithPattern(t){if(!navigator.vibrate)throw this.unavailable("Browser does not support the vibrate API");navigator.vibrate(t)}}}}]);