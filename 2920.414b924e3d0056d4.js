"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2920],{2920:(l,a,i)=>{i.r(a),i.d(a,{Geolocation:()=>u,GeolocationWeb:()=>s});var o=i(467),c=i(7464);class s extends c.E_{getCurrentPosition(e){return(0,o.A)(function*(){return new Promise((n,r)=>{navigator.geolocation.getCurrentPosition(t=>{n(t)},t=>{r(t)},Object.assign({enableHighAccuracy:!1,timeout:1e4,maximumAge:0},e))})})()}watchPosition(e,n){return(0,o.A)(function*(){return`${navigator.geolocation.watchPosition(t=>{n(t)},t=>{n(null,t)},Object.assign({enableHighAccuracy:!1,timeout:1e4,maximumAge:0,minimumUpdateInterval:5e3},e))}`})()}clearWatch(e){return(0,o.A)(function*(){window.navigator.geolocation.clearWatch(parseInt(e.id,10))})()}checkPermissions(){var e=this;return(0,o.A)(function*(){if(typeof navigator>"u"||!navigator.permissions)throw e.unavailable("Permissions API not available in this browser");const n=yield window.navigator.permissions.query({name:"geolocation"});return{location:n.state,coarseLocation:n.state}})()}requestPermissions(){var e=this;return(0,o.A)(function*(){throw e.unimplemented("Not implemented on web.")})()}}const u=new s}}]);