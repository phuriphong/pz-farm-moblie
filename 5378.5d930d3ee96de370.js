"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5378],{5378:(R,p,m)=>{m.r(p),m.d(p,{Tab2PageModule:()=>N});var u=m(4742),h=m(177),s=m(4341),f=m(1307),_=m(8986),E=m(467),b=m(7762),e=m(4438),v=m(1626),k=m(7907),T=m(4723);const F=["TreeModal"],y=["gardenModal"];function j(a,c){if(1&a&&(e.j41(0,"ion-select-option",19),e.EFF(1),e.k0s()),2&a){const i=c.$implicit;e.Y8G("value",i._id),e.R7$(),e.JRh(i.name)}}function I(a,c){if(1&a){const i=e.RV6();e.j41(0,"ion-item")(1,"ion-label")(2,"h2"),e.EFF(3),e.k0s(),e.j41(4,"ion-icon",20),e.bIt("click",function(){const o=e.eBV(i).$implicit,r=e.XpG();return e.Njj(r.over_map(o))}),e.k0s(),e.EFF(5),e.nrm(6,"br"),e.EFF(7),e.nrm(8,"br"),e.EFF(9),e.nrm(10,"br"),e.EFF(11),e.nrm(12,"br"),e.EFF(13),e.j41(14,"ion-icon",21),e.bIt("click",function(){const o=e.eBV(i).$implicit,r=e.XpG();return e.Njj(r.setFocus(o.treeId))}),e.k0s()()()}if(2&a){const i=c.$implicit;e.R7$(3),e.Lme("",i.treeId," - ",i.treeName||"Unknown Tree",""),e.R7$(2),e.SpI(" \u0e0a\u0e19\u0e34\u0e14: ",i.treeType,""),e.R7$(2),e.SpI("\u0e2a\u0e32\u0e22\u0e1e\u0e31\u0e19\u0e18\u0e38\u0e4c: ",i.species,""),e.R7$(2),e.SpI("\u0e2a\u0e27\u0e19:",null==i||null==i.gardenId?null:i.gardenId.name,""),e.R7$(2),e.SpI("\u0e02\u0e2d\u0e07:",null==i||null==i.gardenId?null:i.gardenId.owner,""),e.R7$(2),e.SpI(" \u0e1e\u0e34\u0e01\u0e31\u0e14: ",i.latitude&&i.longitude?i.latitude+", "+i.longitude:"No Location"," "),e.R7$(),e.Y8G("color",null!=i&&i.tree_focus?"danger":"primary"),e.BMQ("treeId",i.treeId)}}function P(a,c){if(1&a&&(e.j41(0,"ion-select-option",19),e.EFF(1),e.k0s()),2&a){const i=c.$implicit;e.Y8G("value",i._id),e.R7$(),e.JRh(i.name)}}function C(a,c){if(1&a){const i=e.RV6();e.j41(0,"ion-header")(1,"ion-toolbar",2)(2,"ion-title"),e.EFF(3,"\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e15\u0e49\u0e19\u0e44\u0e21\u0e49"),e.k0s(),e.j41(4,"ion-buttons",3)(5,"ion-button",11),e.bIt("click",function(){e.eBV(i),e.XpG();const o=e.sdS(25);return e.Njj(o.dismiss())}),e.nrm(6,"ion-icon",22),e.k0s()()()(),e.j41(7,"ion-content",23)(8,"form",24),e.bIt("ngSubmit",function(){e.eBV(i);const o=e.XpG();return e.Njj(o.onSubmitTree())}),e.j41(9,"ion-list")(10,"ion-item"),e.nrm(11,"ion-input",25),e.k0s(),e.j41(12,"ion-item"),e.nrm(13,"ion-input",26),e.k0s(),e.j41(14,"ion-item")(15,"ion-select",27),e.DNE(16,P,2,2,"ion-select-option",16),e.k0s()(),e.j41(17,"ion-item"),e.nrm(18,"ion-input",28),e.k0s(),e.j41(19,"ion-item")(20,"ion-label"),e.EFF(21,"\u0e1e\u0e34\u0e01\u0e31\u0e14 :"),e.k0s(),e.j41(22,"ion-label"),e.EFF(23),e.k0s(),e.j41(24,"ion-icon",29),e.bIt("click",function(){e.eBV(i);const o=e.XpG();return e.Njj(o.onClick(o.treeForm))}),e.k0s()(),e.j41(25,"ion-item")(26,"ion-label"),e.EFF(27,"\u0e2a\u0e16\u0e32\u0e19\u0e30"),e.k0s(),e.nrm(28,"ion-toggle",30),e.k0s()(),e.j41(29,"div",23)(30,"ion-button",31),e.nrm(31,"ion-icon",32),e.EFF(32," \u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01 "),e.k0s()()()()}if(2&a){let i;const t=e.XpG();e.R7$(8),e.Y8G("formGroup",t.treeForm),e.R7$(8),e.Y8G("ngForOf",t.gardenList),e.R7$(7),e.Lme("",null==(i=t.treeForm.get("latitude"))?null:i.value,", ",null==(i=t.treeForm.get("longitude"))?null:i.value," "),e.R7$(7),e.Y8G("disabled",!t.treeForm.valid)}}function G(a,c){if(1&a){const i=e.RV6();e.j41(0,"ion-header")(1,"ion-toolbar",2)(2,"ion-title"),e.EFF(3,"\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e2a\u0e27\u0e19\u0e43\u0e2b\u0e21\u0e48"),e.k0s(),e.j41(4,"ion-buttons",3)(5,"ion-button",11),e.bIt("click",function(){e.eBV(i),e.XpG();const o=e.sdS(28);return e.Njj(o.dismiss())}),e.EFF(6,"\u0e1b\u0e34\u0e14"),e.k0s()()()(),e.j41(7,"ion-content",23)(8,"form",24),e.bIt("ngSubmit",function(){e.eBV(i);const o=e.XpG();return e.Njj(o.onSubmitgarden())}),e.j41(9,"ion-item"),e.nrm(10,"ion-input",33),e.k0s(),e.j41(11,"ion-item"),e.nrm(12,"ion-input",34),e.k0s(),e.j41(13,"ion-item"),e.nrm(14,"ion-input",35),e.k0s(),e.j41(15,"ion-item")(16,"ion-label"),e.EFF(17,"\u0e1e\u0e34\u0e01\u0e31\u0e14 :"),e.k0s(),e.j41(18,"ion-label"),e.EFF(19),e.k0s(),e.j41(20,"ion-icon",29),e.bIt("click",function(){e.eBV(i);const o=e.XpG();return e.Njj(o.onClick(o.treeForm))}),e.k0s()(),e.j41(21,"ion-button",36),e.EFF(22,"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01"),e.k0s()()()}if(2&a){let i;const t=e.XpG();e.R7$(8),e.Y8G("formGroup",t.gardenForm),e.R7$(11),e.Lme("",null==(i=t.gardenForm.get("latitude"))?null:i.value,", ",null==(i=t.gardenForm.get("longitude"))?null:i.value," "),e.R7$(2),e.Y8G("disabled",!t.gardenForm.valid)}}const S=[{path:"",component:(()=>{var a;class c{ngOnInit(){var t=this;return(0,E.A)(function*(){var o;t._util.showLoading(),setTimeout(()=>{t.init_map()},500),null===(o=t.treeForm)||void 0===o||o.patchValue({keyby:"system",keystamp:(new Date).toISOString()})})()}onClick(t){return(0,E.A)(function*(){const o=yield b.L.getCurrentPosition();null==t||t.patchValue({latitude:o.coords.latitude,longitude:o.coords.longitude})})()}getCurrentLocation(){var t=this;return(0,E.A)(function*(){try{var o,r;const n=yield b.L.getCurrentPosition(),l=n.coords.latitude,d=n.coords.longitude;console.log("Current location:",l,d),null===(o=t.treeForm)||void 0===o||o.patchValue({latitude:l,longitude:d}),null===(r=t.gardenForm)||void 0===r||r.patchValue({latitude:l,longitude:d}),t.currentLocation.lat=l,t.currentLocation.lon=d,t.map.location(t.currentLocation),t._util.showToast("Location fetched successfully"),yield t.loaddata()}catch(n){console.error("Error fetching location:",n),t._util.showToast("Unable to fetch current location")}})()}drawcuurent(){var t=this;return(0,E.A)(function*(){let o={title:"\u0e15\u0e33\u0e41\u0e2b\u0e19\u0e48\u0e07\u0e1b\u0e31\u0e08\u0e08\u0e38\u0e1a\u0e31\u0e19",icon:{html:'<ion-icon name="ellipse" size="large" class="current-location" ></ion-icon>'},weight:longdo.OverlayWeight.Top};yield t.map.Overlays.add(new longdo.Marker(t.currentLocation,o))})()}init_map(){var t=this;return(0,E.A)(function*(){t.map=new longdo.Map({placeholder:document.getElementById("map8")}),t.map.Ui.Toolbar.visible(!1),t.map.Ui.Geolocation.visible(!1),t.map.Ui.Zoombar.visible(!1),t.map.Ui.LayerSelector.visible(!1),setTimeout((0,E.A)(function*(){t.map.zoom(15,!0),yield t.getCurrentLocation()}),100),t.map.Event.bind("overlayChange",function(){var o=(0,E.A)(function*(r){t._util.closeLoading()});return function(r){return o.apply(this,arguments)}}()),t.map.Event.bind("overlayClick",o=>{o.location()&&setTimeout(()=>{const n=document.querySelector(".img-click");n&&n.addEventListener("click",l=>{console.log(l.currentTarget);const g=l.currentTarget.getAttribute("treeId");g&&(console.log("updateTreeFocus"),t._apiService.updateTreeFocus(g).toPromise(),t._util.showToast("\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08"),t.loaddata())})},200)})})()}setFocus(t){this._apiService.updateTreeFocus(t).toPromise(),this._util.showToast("\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08"),this.loaddata()}constructor(t,o,r,n,l){this.formBuilder=t,this.http=o,this._apiService=r,this._util=n,this.actionSheetCtrl=l,this.currentLocation={},this.showtable=!1,this.treeForm=this.formBuilder.group({treeName:["",[s.k0.required]],treeType:["",[s.k0.required]],gardenId:["",[s.k0.required]],species:["",[s.k0.required]],latitude:["",[s.k0.required,s.k0.min(-90),s.k0.max(90)]],longitude:["",[s.k0.required,s.k0.min(-180),s.k0.max(180)]],active:[!0],keyby:[""],keystamp:[""]}),this.gardenForm=this.formBuilder.group({name:["",s.k0.required],latitude:[null,[s.k0.required]],longitude:[null,[s.k0.required]],area:[null,[s.k0.required,s.k0.min(0)]],owner:["",s.k0.required]})}ongardenChange(){this.gettreeingarden()}gettreeingarden(){var t=this;return(0,E.A)(function*(){const o=yield t._apiService.gettreeingarden(t.gardenId).toPromise();console.log(o),t.data=o,console.log(t.data),t.drawmap()})()}onSubmitgarden(){var t=this;return(0,E.A)(function*(){var o;if(null!==(o=t.gardenForm)&&void 0!==o&&o.valid)try{const r=t.gardenForm.value,n={name:r.name,location:{latitude:r.latitude,longitude:r.longitude},area:r.area,owner:r.owner},l=yield t._apiService.createGardens(n).toPromise();t._util.showToast("\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08"),t.loaddata(),t.gardenForm.patchValue({name:null,owner:null,area:null}),t.onClick(t.treeForm),t.gardenModal.dismiss(l)}catch(r){console.error("Error:",r)}})()}getgardens(){var t=this;return(0,E.A)(function*(){const o=yield t._apiService.getGardens().toPromise();console.log(o),t.gardenList=null==o?void 0:o.gardens,null!=o&&o.gardenId&&t.treeForm.patchValue({gardenId:null==o?void 0:o.gardenId})})()}loaddata(){var t=this.map.location();const{lon:o,lat:r}=t;this._apiService.getTreesNear(r,o).subscribe(n=>{this.data=n,console.log(this.data),this.gardenId=null,this.drawmap(),(!this.data||0==this.data.length)&&this._util.closeLoading()}),this.getgardens()}drawmap(){var t=this;return(0,E.A)(function*(){yield t.map.Overlays.clear();for(const n of t.data){var o,r;let l=null!=n&&n.tree_focus?"danger":"primary";yield t.map.Overlays.add(new longdo.Marker({lon:n.longitude,lat:n.latitude},{title:n.treeId,detail:`${n.treeId}: ${n.treeName}<br>\u0e0a\u0e19\u0e34\u0e14: ${n.treeType}<br>\u0e2a\u0e32\u0e22\u0e1e\u0e31\u0e19\u0e18\u0e38\u0e4c: ${n.species}<br>\u0e2a\u0e27\u0e19:${null==n||null===(o=n.gardenId)||void 0===o?void 0:o.name}<br>\u0e02\u0e2d\u0e07:${null==n||null===(r=n.gardenId)||void 0===r?void 0:r.owner}<br/>\n           \u0e1e\u0e34\u0e01\u0e31\u0e14: ${n.latitude&&n.longitude?n.latitude+", "+n.longitude:"No Location"}\n          <br><ion-icon  class='img-click' style="float: right; font-size: 2em;cursor: pointer;" color='${l}' treeId='${n.treeId}' title='\u0e40\u0e0a\u0e15\u0e42\u0e1f\u0e01\u0e31\u0e2a' name="radio"></ion-icon>`,icon:{html:null!=n&&n.tree_focus?'<ion-img src="assets/icon/focus_plant.png"  class="icon-bank-show-circle" alt="bank"></ion-img>':'<ion-img src="assets/icon/plant.png"  class="icon-bank-show" alt="bank"></ion-img>'}}))}})()}over_map(t){this.showtable=!this.showtable,this.map.location({lat:t.latitude,lon:t.longitude}),setTimeout(()=>{var o;null===(o=this.map.Overlays.list().filter(n=>n.clickable).find(n=>n.element().title==t.treeId))||void 0===o||o.pop()},100)}refreshData(t){var o;this._util.showLoading(),this.loaddata(),null==t||null===(o=t.target)||void 0===o||o.complete()}presentActionSheet(){var t=this;return(0,E.A)(function*(){const o=yield t.actionSheetCtrl.create({header:"Actions",buttons:[{text:"\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e2a\u0e27\u0e19",data:"garden"},{text:"\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e15\u0e49\u0e19\u0e44\u0e21\u0e49",data:"tree"}]});yield o.present();const{data:n}=yield o.onDidDismiss();var l,d;"tree"==n&&(yield null===(l=t.treeModal)||void 0===l?void 0:l.present()),"garden"==n&&(yield null===(d=t.gardenModal)||void 0===d?void 0:d.present())})()}onSubmitTree(){var t;if(null!==(t=this.treeForm)&&void 0!==t&&t.valid){console.log("Form data:",this.treeForm.value);let o=this.treeForm.value;o.location={type:"Point",coordinates:[o.longitude,o.latitude]},this._apiService.createTree(o).subscribe(r=>{console.log(r),this._util.showToast("\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08"),this.loaddata(),this.treeForm.controls.treeName.setValue("")})}}test(){const t=this.treeForm.value.latitude,o=this.treeForm.value.longitude;for(let r=0;r<50;r++){const n=t+this.randomOffset(2e3),l=o+this.randomOffset(2e3),d={...this.treeForm.value};d.treeId=`T${String(r+2).padStart(5,"0")}`,d.latitude=n,d.longitude=l,d.location={type:"Point",coordinates:[l,n]},this._apiService.createTree(d).subscribe(g=>{console.log("Created:",g),this._util.showToast(`\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a Tree ${r+1}`)},g=>{console.error("Error creating tree:",g)})}}randomOffset(t){return 2*(Math.random()-.5)*t/111320}}return(a=c).\u0275fac=function(t){return new(t||a)(e.rXU(s.ok),e.rXU(v.Qq),e.rXU(k.G),e.rXU(T.Q),e.rXU(u.GD))},a.\u0275cmp=e.VBU({type:a,selectors:[["app-tab2"]],viewQuery:function(t,o){if(1&t&&(e.GBs(F,5),e.GBs(y,5)),2&t){let r;e.mGM(r=e.lsd())&&(o.treeModal=r.first),e.mGM(r=e.lsd())&&(o.gardenModal=r.first)}},decls:30,vars:7,consts:[["TreeModal",""],["gardenModal",""],["color","primary"],["slot","end"],["color","light",3,"click"],["name","add-outline","slot","start"],["name","grid","slot","start"],["vertical","bottom","horizontal","start","slot","fixed",3,"hidden"],["color","warning",3,"click"],["name","search-sharp"],["vertical","bottom","horizontal","end","slot","fixed",3,"hidden"],[3,"click"],["name","locate"],["id","map8",1,"body-maps-show",3,"hidden"],[3,"hidden"],["label","\u0e04\u0e49\u0e19\u0e2b\u0e32\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e15\u0e34\u0e21...","placeholder","\u0e0a\u0e37\u0e48\u0e2d\u0e2a\u0e27\u0e19",1,"ion-text-start",3,"ngModelChange","ionChange","ngModel"],[3,"value",4,"ngFor","ngForOf"],["slot","fixed",3,"ionRefresh"],[4,"ngFor","ngForOf"],[3,"value"],["color","primary","name","location-sharp",2,"float","right","cursor","pointer","font-size","1.5em",3,"click"],["title","\u0e40\u0e0a\u0e15\u0e42\u0e1f\u0e01\u0e31\u0e2a","name","radio",1,"img-click",2,"float","right","font-size","1.5em","cursor","pointer",3,"click","color"],["name","close-outline"],[1,"ion-padding"],[3,"ngSubmit","formGroup"],["formControlName","treeName","type","text","label","\u0e0a\u0e37\u0e48\u0e2d\u0e15\u0e49\u0e19\u0e44\u0e21\u0e49 *",1,"ion-text-right"],["formControlName","treeType","type","text","label","\u0e0a\u0e19\u0e34\u0e14\u0e15\u0e49\u0e19\u0e44\u0e21\u0e49 *",1,"ion-text-right"],["formControlName","gardenId","label","\u0e23\u0e2b\u0e31\u0e2a\u0e2a\u0e27\u0e19 *","interface","action-sheet",1,"ion-text-right"],["formControlName","species","type","text","label","\u0e2a\u0e32\u0e22\u0e1e\u0e31\u0e19\u0e18\u0e38\u0e4c",1,"ion-text-right"],["slot","end","name","refresh-circle-outline","slot","end","color","primary",2,"cursor","pointer",3,"click"],["formControlName","active"],["expand","block","type","submit",3,"disabled"],["name","save-outline","slot","start"],["formControlName","name","type","text","label","\u0e0a\u0e37\u0e48\u0e2d\u0e2a\u0e27\u0e19 *",1,"ion-text-right"],["formControlName","owner","type","text","label","\u0e40\u0e08\u0e49\u0e32\u0e02\u0e2d\u0e07 *",1,"ion-text-right"],["formControlName","area","type","number","label","\u0e1e\u0e37\u0e49\u0e19\u0e17\u0e35\u0e48 (\u0e15\u0e23.\u0e21.) *",1,"ion-text-right"],["expand","block","type","submit",1,"ion-margin",3,"disabled"]],template:function(t,o){if(1&t){const r=e.RV6();e.j41(0,"ion-toolbar",2)(1,"ion-title"),e.EFF(2,"\u0e41\u0e1c\u0e19\u0e17\u0e35\u0e48\u0e15\u0e49\u0e19\u0e44\u0e21\u0e49"),e.k0s(),e.j41(3,"ion-buttons",3)(4,"ion-button",4),e.bIt("click",function(){return e.eBV(r),e.Njj(o.presentActionSheet())}),e.nrm(5,"ion-icon",5),e.EFF(6," \u0e40\u0e1e\u0e34\u0e48\u0e21\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25 "),e.k0s(),e.j41(7,"ion-button",4),e.bIt("click",function(){return e.eBV(r),e.Njj(o.showtable=!o.showtable)}),e.nrm(8,"ion-icon",6),e.k0s()()(),e.j41(9,"ion-fab",7)(10,"ion-fab-button",8),e.bIt("click",function(){return e.eBV(r),e.Njj(o.refreshData({}))}),e.nrm(11,"ion-icon",9),e.k0s()(),e.j41(12,"ion-fab",10)(13,"ion-fab-button",11),e.bIt("click",function(){return e.eBV(r),e.Njj(o.getCurrentLocation())}),e.nrm(14,"ion-icon",12),e.k0s()(),e.nrm(15,"div",13),e.j41(16,"ion-content",14)(17,"ion-item")(18,"ion-select",15),e.mxI("ngModelChange",function(l){return e.eBV(r),e.DH7(o.gardenId,l)||(o.gardenId=l),e.Njj(l)}),e.bIt("ionChange",function(){return e.eBV(r),e.Njj(o.ongardenChange())}),e.DNE(19,j,2,2,"ion-select-option",16),e.k0s()(),e.j41(20,"ion-refresher",17),e.bIt("ionRefresh",function(l){return e.eBV(r),e.Njj(o.refreshData(l))}),e.nrm(21,"ion-refresher-content"),e.k0s(),e.j41(22,"ion-list"),e.DNE(23,I,15,9,"ion-item",18),e.k0s()(),e.j41(24,"ion-modal",null,0),e.DNE(26,C,33,5,"ng-template"),e.k0s(),e.j41(27,"ion-modal",null,1),e.DNE(29,G,23,4,"ng-template"),e.k0s()}2&t&&(e.R7$(9),e.Y8G("hidden",o.showtable),e.R7$(3),e.Y8G("hidden",o.showtable),e.R7$(3),e.Y8G("hidden",o.showtable),e.R7$(),e.Y8G("hidden",!o.showtable),e.R7$(2),e.R50("ngModel",o.gardenId),e.R7$(),e.Y8G("ngForOf",o.gardenList),e.R7$(4),e.Y8G("ngForOf",o.data))},dependencies:[u.Jm,u.QW,u.W9,u.Q8,u.YW,u.eU,u.iq,u.$w,u.uz,u.he,u.nf,u.To,u.Ki,u.Nm,u.Ip,u.BC,u.BY,u.ai,u.Sb,u.hB,u.su,u.Je,u.Gw,h.Sq,s.qT,s.BC,s.cb,s.vS,s.j4,s.JD],styles:[".body-maps-show[_ngcontent-%COMP%]{height:100%}"]}),c})()}];let w=(()=>{var a;class c{}return(a=c).\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.$C({type:a}),a.\u0275inj=e.G2t({imports:[_.iI.forChild(S),_.iI]}),c})(),N=(()=>{var a;class c{}return(a=c).\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.$C({type:a}),a.\u0275inj=e.G2t({imports:[u.bv,h.MD,s.YN,s.X1,f.S,w]}),c})()}}]);