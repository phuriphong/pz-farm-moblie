"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4711],{4711:(R,g,r)=>{r.r(g),r.d(g,{Tab1PageModule:()=>M});var o=r(4742),s=r(177),d=r(4341),f=r(1307),m=r(8986),h=r(467),e=r(4438),c=r(7907),p=r(4723);function T(t,u){if(1&t&&(e.j41(0,"ion-select-option",9),e.EFF(1),e.k0s()),2&t){const i=u.$implicit;e.Y8G("value",i._id),e.R7$(),e.JRh(i.name)}}function I(t,u){if(1&t&&(e.j41(0,"ion-select-option",9),e.EFF(1),e.k0s()),2&t){const i=u.$implicit;e.Y8G("value",i._id),e.R7$(),e.JRh(i.treeName)}}function v(t,u){if(1&t&&(e.j41(0,"ion-item")(1,"ion-label")(2,"h2"),e.EFF(3),e.k0s(),e.j41(4,"p"),e.EFF(5),e.nI1(6,"date"),e.k0s()()()),2&t){const i=u.$implicit;e.R7$(3),e.E5c("Chip ID: ",i.chipId,"-",null==i.treeId?null:i.treeId.treeName," \u0e2a\u0e27\u0e19 ",null==i.treeId||null==i.treeId.gardenId?null:i.treeId.gardenId.name,""),e.R7$(2),e.SjE(" \u0e2d\u0e38\u0e13\u0e2b\u0e20\u0e39\u0e21\u0e34: ",i.measurements.airTemperature,"\xb0C | \u0e04\u0e27\u0e32\u0e21\u0e0a\u0e37\u0e49\u0e19\u0e43\u0e19\u0e2d\u0e32\u0e01\u0e32\u0e28: ",i.measurements.humidity," | \u0e04\u0e27\u0e32\u0e21\u0e0a\u0e37\u0e49\u0e19\u0e43\u0e19\u0e14\u0e34\u0e19: ",i.measurements.soilMoisture," | \u0e41\u0e2a\u0e07\u0e2a\u0e27\u0e48\u0e32\u0e07: ",i.measurements.lightIntensity," | \u0e25\u0e48\u0e32\u0e2a\u0e38\u0e14: ",e.i5U(6,8,i.timestamp,"dd/MM/yyyy HH:mm:ss")," ")}}function b(t,u){1&t&&(e.j41(0,"ion-item")(1,"ion-label")(2,"p"),e.EFF(3,"\u0e44\u0e21\u0e48\u0e1e\u0e1a\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25"),e.k0s()()())}const C=[{path:"",component:(()=>{var t;class u{constructor(a,n){this._apiService=a,this._util=n,this.gardenList=[],this.treeId="",this.gardenId=""}ngOnInit(){this.getgardens()}loaddata(){this._apiService.getmeasurements(this.gardenId,this.treeId).subscribe(a=>{this.data=null==a?void 0:a.measurements,console.log(a),this._util.closeLoading()})}getgardens(){var a=this;return(0,h.A)(function*(){const n=yield a._apiService.getGardens().toPromise();console.log(n),a.gardenList=n.gardens,null!=n&&n.gardenId&&(a.gardenId=null==n?void 0:n.gardenId,a.gettreeingarden(),a.loaddata())})()}gettreeingarden(){var a=this;return(0,h.A)(function*(){const n=yield a._apiService.gettreeingarden(a.gardenId).toPromise();console.log(n),a.treeList=n})()}refreshData(a){var n;this.loaddata(),null==a||null===(n=a.target)||void 0===n||n.complete()}ongardenChange(){this.gettreeingarden(),this.ontreeChange()}ontreeChange(){this.loaddata()}}return(t=u).\u0275fac=function(a){return new(a||t)(e.rXU(c.G),e.rXU(p.Q))},t.\u0275cmp=e.VBU({type:t,selectors:[["app-tab1"]],decls:18,vars:6,consts:[["color","primary"],["lines","none"],["label","\u0e0a\u0e37\u0e48\u0e2d\u0e2a\u0e27\u0e19","placeholder","\u0e0a\u0e37\u0e48\u0e2d\u0e2a\u0e27\u0e19",1,"ion-text-start",3,"ngModelChange","ionChange","ngModel"],[3,"value",4,"ngFor","ngForOf"],["label","\u0e15\u0e49\u0e19\u0e44\u0e21\u0e49","placeholder","\u0e15\u0e49\u0e19\u0e44\u0e21\u0e49",1,"ion-text-start",3,"ngModelChange","ionChange","ngModel"],["value",""],["slot","fixed",3,"ionRefresh"],[4,"ngFor","ngForOf"],[4,"ngIf"],[3,"value"]],template:function(a,n){1&a&&(e.j41(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-title"),e.EFF(3,"\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e2a\u0e27\u0e19"),e.k0s(),e.j41(4,"ion-item",1)(5,"ion-select",2),e.mxI("ngModelChange",function(l){return e.DH7(n.gardenId,l)||(n.gardenId=l),l}),e.bIt("ionChange",function(){return n.ongardenChange()}),e.DNE(6,T,2,2,"ion-select-option",3),e.k0s(),e.nrm(7,"ion-label"),e.j41(8,"ion-select",4),e.mxI("ngModelChange",function(l){return e.DH7(n.treeId,l)||(n.treeId=l),l}),e.bIt("ionChange",function(){return n.ontreeChange()}),e.j41(9,"ion-select-option",5),e.EFF(10,"\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14"),e.k0s(),e.DNE(11,I,2,2,"ion-select-option",3),e.k0s()()()(),e.j41(12,"ion-content")(13,"ion-refresher",6),e.bIt("ionRefresh",function(l){return n.refreshData(l)}),e.nrm(14,"ion-refresher-content"),e.k0s(),e.j41(15,"ion-list"),e.DNE(16,v,7,11,"ion-item",7)(17,b,4,0,"ion-item",8),e.k0s()()),2&a&&(e.R7$(5),e.R50("ngModel",n.gardenId),e.R7$(),e.Y8G("ngForOf",n.gardenList),e.R7$(2),e.R50("ngModel",n.treeId),e.R7$(3),e.Y8G("ngForOf",n.treeList),e.R7$(5),e.Y8G("ngForOf",n.data),e.R7$(),e.Y8G("ngIf",!n.data||0===n.data.length))},dependencies:[o.W9,o.eU,o.uz,o.he,o.nf,o.To,o.Ki,o.Nm,o.Ip,o.BC,o.ai,o.Je,s.Sq,s.bT,d.BC,d.vS,s.vh]}),u})()}];let P=(()=>{var t;class u{}return(t=u).\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[m.iI.forChild(C),m.iI]}),u})();var F=r(1626);let M=(()=>{var t;class u{}return(t=u).\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({providers:[c.G,F.q1],imports:[o.bv,s.MD,d.YN,f.S,P]}),u})()}}]);