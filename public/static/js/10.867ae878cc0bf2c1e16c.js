webpackJsonp([10],{GtDl:function(e,t){},L6pb:function(e,t){},"jP3+":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("mvHQ"),l=a.n(s),i=["身份证查询","护照查询","驾照查询","NFC识别"],n={name:"HelloWorld",data:function(){return{userName:"",sex:[{sexvalue:1,label:"男"},{sexvalue:2,label:"女"}],sexvalue:1,apart:[{apartvalue:1,label:"视频部"}],age:"",car:!0,record:!0,statistics:!0,comparison:!0,apartvalue:1,checkAll:!0,checkedCities:["身份证查询","护照查询","驾照查询","NFC识别"],cities:i,isIndeterminate:!0,ruleForm:{desc:""},rules:{desc:[{required:!0,message:"",trigger:"blur"}]},value1:!1,value2:!1,people:!0}},methods:{handleCheckAllChange:function(e){this.checkedCities=e?i:[],this.isIndeterminate=!1},handleCheckedCitiesChange:function(e){var t=e.length;this.checkAll=t===this.cities.length,this.isIndeterminate=t>0&&t<this.cities.length},addRole:function(){var e=this;if(this.userName){var t=this.value2?1:0,a={key1:{"人员盘查":this.people},key2:{"车辆查询":this.car},key3:{"核查记录":this.record},key4:{"核查统计":this.statistics},key5:{"人像比对":this.comparison}},s=new URLSearchParams;s.append("roleStatus",l()(a)),s.append("isAdmin",t),s.append("roleName",this.userName),this.$post(this.url+"/xhHlck/addXhRole",s).then(function(t){200==t.code?(e.$message({message:"新增成功",type:"success"}),e.$router.push({path:"/systemManage"})):e.$message.error("新增失败")})}else this.$message({message:"角色名称不能为空",type:"warning"})}}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"addUserContent"},[a("div",{staticClass:"add"},[a("div",{staticClass:"addList"},[e._m(0),e._v(" "),a("el-input",{staticClass:"input",attrs:{placeholder:"角色名称"},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}})],1),e._v(" "),a("div",{staticClass:"addList"},[e._m(1),e._v(" "),a("i",[e._v("该角色为管理员 ")]),e._v(" "),a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1),e._v(" "),a("div",{staticClass:"addList power"},[e._m(2),e._v(" "),a("div",{staticClass:"addListRight"},[a("div",{staticClass:"checkbox"},[a("el-checkbox",{attrs:{indeterminate:e.isIndeterminate},on:{change:e.handleCheckAllChange},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}},[e._v("人员盘查")]),e._v(" "),a("div",{staticStyle:{margin:"15px 0"}}),e._v(" "),a("el-checkbox-group",{staticClass:"checkbox-group",on:{change:e.handleCheckedCitiesChange},model:{value:e.checkedCities,callback:function(t){e.checkedCities=t},expression:"checkedCities"}},e._l(e.cities,function(t){return a("el-checkbox",{key:t,attrs:{label:t}},[e._v(e._s(t))])}),1),e._v(" "),a("div",{staticClass:"type"},[a("el-checkbox",{model:{value:e.car,callback:function(t){e.car=t},expression:"car"}},[e._v("车辆查询")])],1),e._v(" "),a("div",{staticClass:"type"},[a("el-checkbox",{model:{value:e.record,callback:function(t){e.record=t},expression:"record"}},[e._v("核查记录")])],1),e._v(" "),a("div",{staticClass:"type"},[a("el-checkbox",{model:{value:e.statistics,callback:function(t){e.statistics=t},expression:"statistics"}},[e._v("核查统计")])],1)],1)])]),e._v(" "),a("div",{staticClass:"addList"},[a("span",{staticClass:"userName"},[e._v("备注")]),e._v(" "),a("el-input",{attrs:{type:"textarea",placeholder:"输入内容"},model:{value:e.node,callback:function(t){e.node=t},expression:"node"}})],1),e._v(" "),a("div",{staticClass:"sure"},[a("el-button",{staticClass:"sureButton",attrs:{type:"primary"},on:{click:function(t){return e.addRole()}}},[e._v("确定")])],1)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"userName"},[this._v("角色名称"),t("em",[this._v("*")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("span",[this._v("管理员"),t("em",[this._v("*")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("span",[this._v("分配权限"),t("em",[this._v("*")])])}]};var r={name:"addUser",data:function(){return{dialogTableVisible:!1,roleName:"",tableData:[],pageTotal:1,pageNum:1,noData:!0}},methods:{getXhRole:function(){var e=this,t=new URLSearchParams;t.append("roleName",this.roleName),t.append("pageNum",this.pageNum),t.append("pageSize",10),this.$post(this.url+"/xhHlck/getXhRole",t).then(function(t){if(200==t.code){var a=JSON.parse(t.data),s=JSON.parse(t.data).list;if(e.pageTotal=a.total,0==s.length)return e.tableData=[],void(e.noData=!0);e.tableData=s,e.noData=!1}else e.$message.error("获取数据失败")})},jumpSystem:function(){this.$router.push({path:"/systemManage"})},searchPeople:function(){},handleEdit:function(){},jueseDel:function(){}},components:{addUserContent:a("VU/8")(n,c,!1,function(e){a("GtDl")},"data-v-b3f64bf4",null).exports},mounted:function(){this.getXhRole()}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"addUser"},[e._m(0),e._v(" "),a("div",{staticClass:"addUserBody"},[a("div",{staticClass:"manageTop"},[a("el-input",{attrs:{placeholder:"请输入人员名字"},model:{value:e.roleName,callback:function(t){e.roleName=t},expression:"roleName"}}),e._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.searchPeople}},[e._v("搜索")]),e._v(" "),a("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary"},on:{click:function(t){e.dialogTableVisible=!0}}},[e._v("新增角色")]),e._v(" "),a("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary"}},[e._v("导出excel")])],1),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{label:"角色名称",prop:"roleName"}}),e._v(" "),a("el-table-column",{attrs:{label:"管理员"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(1==t.row.isAdmin?"是":"否"))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"权限"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.roleStatus))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"备注",prop:"roleName"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return e.handleEdit(t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{size:"mini"},on:{click:function(a){return e.jueseDel(t.row)}}},[e._v("删除")])]}}])})],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"新增角色",visible:e.dialogTableVisible,"modal-append-to-body":!1},on:{"update:visible":function(t){e.dialogTableVisible=t}}},[a("addUserContent")],1)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"addUserMnage"},[t("p",[this._v("角色列表")])])}]};var d=a("VU/8")(r,o,!1,function(e){a("L6pb")},"data-v-05843aab",null);t.default=d.exports}});