webpackJsonp([4],{"3cXf":function(t,e,a){t.exports={default:a("q1bu"),__esModule:!0}},HMI5:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("3cXf"),i=a.n(s),n=a("IHPB"),l=a.n(n),o=a("hRKE"),r=a.n(o),c=a("4YfN"),u=a.n(c),d=a("SXGs"),v=a("2bvH"),g=[{value1:-1,label1:"不限"},{value1:0,label1:"草稿"},{value1:1,label1:"未审核"},{value1:2,label1:"被通过"},{value1:3,label1:"被驳回"}],h=[{value:[],label:"不限",children:[{value:[],label:"不限"}]}],p=[{value2:-1,label2:"不限"},{value2:1,label2:"自主研发"},{value2:2,label2:"合作研发"},{value2:3,label2:"企业研发"}],f={name:"matchAllocation",data:function(){return{inputNums:"",statusOption:g,statusValue:"不限",cityDefault:"不限",cityOptions:this.districtList,sortOption:h,sortValue:"",sourceOptions:p,sourceValue:"不限",timeValue:"",search:"",undercarriageMask:!1,optionArr:[],total:0,blogId:"",state:0,pageNum:1,dialogVisible:!1,anothorResultInput:"",rejectInfo:"",clearable:!0}},computed:u()({},Object(v.c)({userInfo:function(t){return t.mutations.userInfo}})),watch:{userInfo:function(t){console.log("变化信息:",t.district)}},created:function(){this.updateToken(),this.verifyToken(),this.getCategory()},methods:{judegeIsAdmin:function(){2==this.userInfo.type?(this.cityDefault=this.userInfo.district,console.log("变更省份2:",this.cityDefault),this.getAuditBlog()):this.getAuditBlog()},updateToken:function(){var t=this,e=localStorage.getItem("accessToken");if(e){var a=this.api.configIp+this.net.updateToken,s={accessToken:e};this.$fetch(a,s).then(function(e){console.log("sucess:",r()(e.data)),e.success?(t.$store.commit("saveUserInfo",JSON.parse(e.data)),t.judegeIsAdmin()):t.judegeIsAdmin()}).catch(function(t){console.log("err:",t)})}},verifyToken:function(){var t=this,e=localStorage.getItem("accessToken");if(e){var a=this.api.configIp+this.net.verifyToken,s={accessToken:e};this.$fetch(a,s).then(function(e){console.log("sucess:",e),e.success||(t.$message.warning("登录已经超时,需重新登陆"),setTimeout(function(){t.$router.push({name:"login"})},2e3))}).catch(function(t){console.log("err:",t)})}},selectStatus:function(t){this.statusValue=t,this.getAuditBlog()},selectFrom:function(t){this.sourceValue=t,this.getAuditBlog()},selectCity:function(t){this.cityDefault=t,this.getAuditBlog()},selectTime:function(t){this.timeValue=t,this.getAuditBlog()},selectType:function(t){this.sortValue=t,this.getAuditBlog()},inputSearch:function(){""!=this.search?this.getAuditBlog():this.$message.warning("请输入搜索内容!")},getCategory:function(){var t=this;this.$post(this.url+"/manage/category/getAllCategory",{}).then(function(e){if(200==e.code&&null!=e.data&&"null"!=e.data){var a=e.data;t.sortOption=[].concat(l()(t.sortOption),l()(function t(e,a){for(var s=[],i=0;i<e.length;i++){var n=e[i];if(n.parentCategoryId==a){var l={};l.value=n.categoryId,l.label=n.categoryName,s.push(l),0!=t(e,n.categoryId).length&&(l.children=t(e,n.categoryId))}}return s}(a,0)))}else t.$message.error("请求失败，请稍后重试")})},getAuditBlog:function(){var t=this,e=this.statusValue,a=this.sortValue,s=this.sourceValue,n=this.timeValue,l=this.search,o=this.cityDefault;"string"!=typeof e&&-1!=e||(e=""),a||(a=["",""]),""==a.join("")&&(a=["",""]),"string"!=typeof s&&-1!=s||(s=""),"不限"==o&&(o=""),n||(n=["",""]);var r={auditTerminal:"2",district:o,pageNum:this.pageNum,pageSize:10,auditState:e,tagTypeId1:a[0],tagTypeId2:a[1],msgFrom:s,startDate:n[0],endDate:n[1],blogTitle:l,orderByParam:"{auditState:1}"};console.log("查询参数:",i()(r)),this.$post(this.url+"/manage/audit/getAllAuditBlog",r).then(function(e){200==e.code&&null!=e.data.result&&"null"!=e.data.result?(t.optionArr=e.data.result,t.total=e.data.total,t.pageNum=e.data.pageNum):t.$message.error("请求失败，请稍后重试")})},clear:function(){this.search="",this.statusValue=-1,this.sortValue="",this.sourceValue="不限",this.timeValue="",this.cityDefault="不限",this.getAuditBlog()},handleCurrentChange:function(t){this.pageNum=t,this.getAuditBlog()},listenChildren:function(t){t&&this.getAuditBlog()}},components:{subContent:d.a}},_={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"auditConclusion"},[a("div",{staticClass:"container"},[a("div",{staticClass:"activeTitle"},[t._v("\n        参赛成果审核\n      ")]),t._v(" "),a("div",{staticClass:"settingContent"},[a("div",{staticClass:"requirement"},[a("span",[t._v("\n              状态\n              "),a("el-select",{staticClass:"selected",attrs:{clearable:t.clearable,placeholder:"请选择"},on:{change:t.selectStatus},model:{value:t.statusValue,callback:function(e){t.statusValue=e},expression:"statusValue"}},t._l(t.statusOption,function(t){return a("el-option",{key:t.value1,attrs:{label:t.label1,value:t.value1}})}),1)],1),t._v(" "),a("span",[t._v("\n              类别\n              "),a("el-cascader",{attrs:{options:t.sortOption,placeholder:"不限"},on:{change:t.selectType,"expand-change":t.selectType},model:{value:t.sortValue,callback:function(e){t.sortValue=e},expression:"sortValue"}})],1),t._v(" "),2!=this.userInfo.type?a("span",[t._v("\n              省份\n              "),a("el-select",{staticClass:"selected",attrs:{clearable:t.clearable,placeholder:"请选择"},on:{change:t.selectCity},model:{value:t.cityDefault,callback:function(e){t.cityDefault=e},expression:"cityDefault"}},t._l(t.cityOptions,function(t){return a("el-option",{key:t,attrs:{value:t}})}),1)],1):t._e(),t._v(" "),a("span",[t._v("\n              来源\n              "),a("el-select",{staticClass:"selected",attrs:{placeholder:"请选择"},on:{change:t.selectFrom},model:{value:t.sourceValue,callback:function(e){t.sourceValue=e},expression:"sourceValue"}},t._l(t.sourceOptions,function(t){return a("el-option",{key:t.value2,attrs:{label:t.label2,value:t.value2}})}),1)],1),t._v(" "),a("span",[a("el-date-picker",{attrs:{type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","value-format":"timestamp","end-placeholder":"结束日期"},on:{change:t.selectTime},model:{value:t.timeValue,callback:function(e){t.timeValue=e},expression:"timeValue"}})],1),t._v(" "),a("span",{staticClass:"search"},[a("i",{staticClass:"el-icon-search"}),t._v(" "),a("el-input",{staticClass:"inputSearch",attrs:{placeholder:"请输入搜索内容"},model:{value:t.search,callback:function(e){t.search="string"==typeof e?e.trim():e},expression:"search"}}),t._v(" "),a("el-button",{staticClass:"searchButton",attrs:{type:"primary"},on:{click:t.inputSearch}},[t._v("搜索")])],1),t._v(" "),a("span",{staticClass:"clear",on:{click:t.clear}},[t._v("\n              清除\n            ")])]),t._v(" "),a("subContent",{attrs:{optionArr:t.optionArr},on:{listenChildren:t.listenChildren}}),t._v(" "),a("div",{staticClass:"page"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total},on:{"current-change":t.handleCurrentChange}})],1)],1)])])},staticRenderFns:[]};var m=a("C7Lr")(f,_,!1,function(t){a("X/v5")},"data-v-393029fe",null);e.default=m.exports},L8dM:function(t,e){},SXGs:function(t,e,a){"use strict";var s=a("4YfN"),i=a.n(s),n=a("2bvH"),l={name:"subContent",props:{optionArr:Array},data:function(){return{blogId:"",state:0,pageNum:1,undercarriageMask:!1,dialogVisible:!1,radio2:"涉及敏感内容",anothorResultInput:"",rejectInfo:"",clearable:!0,selectTypeVal:""}},computed:i()({},Object(n.c)({userInfo:function(t){return t.mutations.userInfo}})),created:function(){},methods:{details:function(t){this.$router.push({path:"achievementDetail",query:{blogId:t}})},handleClose:function(){this.dialogVisible=!1},deleteAudit:function(t,e,a,s){var i=this,n={blogId:t,isDelete:s};this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){i.deleteBlog(t,e,a,s,n)}).catch(function(){i.$message({type:"info",message:"已取消删除"})})},deleteBlog:function(t,e,a,s,i){var n=this;this.$post(this.url+"/manage/audit/removeAch",i).then(function(s){200==s.code?(n.$message({message:"删除成功",type:"success"}),n.$emit("listenChildren",!0)):610==s.code?n.$confirm("该成果正在展示中，是否确定删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var s={blogId:t,isDelete:!0};n.deleteBlog(t,e,a,!0,s)}).catch(function(){n.$message({type:"info",message:"已取消删除"})}):n.$message.error("请求失败，请稍后重试")})},undercarriage:function(t,e){this.blogId=t,this.state=e,this.undercarriageMask=!0},rejectReasonMask:function(t){this.dialogVisible=!0,this.blogId=t},passReject:function(t,e,a){var s=this,i=4==this.radio2?this.anothorResultInput:this.radio2,n=this.userInfo.id,l=void 0;2==e?(i="",l=!0):l=!1;var o={blogId:t,auditUserId:n,auditState:e,rejectInfo:i,isUpperShelf:l};this.$post(this.url+"/manage/audit/auditAch",o).then(function(i){if(200==i.code){var n=3==e?"驳回成功":"审核通过";s.$message({message:n,type:"success"}),s.$emit("listenChildren",!0),s.dialogVisible=!1,console.log("state:",e),2==e&&s.addActivityBlog(t,a)}else s.$message.error("请求失败，请稍后重试")})},addActivityBlog:function(t,e){var a=this.api.voteUrl+this.net.addActivityBlog,s={activity_id:e,blog_id:t};this.$post(a,s).then(function(t){console.log("sucess:",t),t.code}).catch(function(t){console.log("err:",t)})},sure:function(){var t=this,e={blogId:this.blogId,isUpperShelf:0!=this.state};this.$post(this.url+"/manage/audit/editShelfAch",e).then(function(e){200==e.code?(t.$message({message:(0==t.state?"下架":"上架")+"成功",type:"success"}),t.undercarriageMask=!1,t.$emit("listenChildren",!0)):t.$message.error("请求失败，请稍后重试")})},close:function(){this.undercarriageMask=!1}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"subContent"},[t.undercarriageMask?a("div",{staticClass:"undercarriageMask"},[a("div",{staticClass:"undercarriageContent"},[a("p",[t._v("\n          选择对象\n          "),a("i",{staticClass:"el-icon-close",on:{click:function(e){return t.close()}}})]),t._v(" "),a("div",{staticClass:"undercarriageText"},[t._v("\n          确定"+t._s(0==t.state?"下架":"上架")+"该成果发布吗\n        ")]),t._v(" "),a("div",{staticClass:"undercarriageButton"},[a("span",{staticClass:"cancel",on:{click:function(e){return t.close()}}},[t._v("取消")]),t._v(" "),a("span",{staticClass:"sure",on:{click:function(e){return t.sure()}}},[t._v("确定")])])])]):t._e(),t._v(" "),a("div",{staticClass:"searchResult"},[t._m(0),t._v(" "),t.optionArr[0]?t._e():a("div",{staticClass:"noData"},[t._v("\n        暂无数据\n      ")]),t._v(" "),a("div",{staticClass:"list"},t._l(t.optionArr,function(e,s){return a("ul",{key:s,staticClass:"tableTr"},[a("li",[t._v(t._s(e.blogOrder))]),t._v(" "),a("li",[a("span",{staticClass:"title"},[t._v(t._s(e.blogTitle))])]),t._v(" "),a("li",[t._v(t._s(e.userNickname))]),t._v(" "),a("li",[t._v(t._s(e.tagTypeName2))]),t._v(" "),a("li",[t._v(t._s(e.district))]),t._v(" "),a("li",[t._v("\n            "+t._s(1==e.msgFrom?"自主研发":2==e.msgFrom?"合作研发":3==e.msgFrom?"企业研发":"")+"\n          ")]),t._v(" "),a("li",[0==e.auditState?a("span",{staticClass:"draft"},[t._v("\n              草稿\n            ")]):t._e(),t._v(" "),1==e.auditState?a("span",{staticClass:"noExamine"},[t._v("\n              未审核\n            ")]):t._e(),t._v(" "),2==e.auditState?a("span",{staticClass:"passed"},[t._v("\n              被通过\n            ")]):t._e(),t._v(" "),3==e.auditState?a("span",{staticClass:"reject"},[t._v("\n              被驳回\n            ")]):t._e()]),t._v(" "),a("li",[t._v("\n            "+t._s(t.formatDate(e.createTime))+"\n          ")]),t._v(" "),a("li",{staticClass:"operate"},[2!=e.auditState&&3!=e.auditState?a("span",{staticClass:"pass",on:{click:function(a){return t.passReject(e.blogId,2,e.activityId)}}},[t._v("\n              通过\n            ")]):t._e(),t._v(" "),2!=e.auditState&&3!=e.auditState?a("span",{staticClass:"reject",on:{click:function(a){return t.rejectReasonMask(e.blogId)}}},[t._v("\n             驳回\n            ")]):t._e(),t._v(" "),2==e.auditState?a("span",{staticClass:"undercarriage",class:{isundercarriage:1==e.isUpperShelf},on:{click:function(a){return t.undercarriage(e.blogId,0==e.isUpperShelf?1:0)}}},[t._v("\n             "+t._s(0==e.isUpperShelf?"上架":"下架")+"\n            ")]):t._e(),t._v(" "),a("span",{staticClass:"delete",on:{click:function(a){return t.deleteAudit(e.blogId,s,t.pageNum,!1)}}},[t._v("\n             删除\n            ")]),t._v(" "),a("span",{staticClass:"detail",on:{click:function(a){return t.details(e.blogId)}}},[t._v("\n\t        \t\t详情\n\t        \t\t"),a("i",{staticClass:"el-icon-arrow-right"})])])])}),0)]),t._v(" "),a("el-dialog",{attrs:{title:"微科技",visible:t.dialogVisible,width:"30%","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("div",{staticClass:"dialogContent"},[a("p",[t._v("请选择驳回原因")]),t._v(" "),a("div",{staticClass:"rejectReason"},[a("el-radio-group",{model:{value:t.radio2,callback:function(e){t.radio2=e},expression:"radio2"}},[a("el-radio",{attrs:{label:"涉及敏感内容"}},[t._v("涉及敏感内容")]),t._v(" "),a("el-radio",{attrs:{label:"内容描述不清"}},[t._v("内容描述不清")]),t._v(" "),a("el-radio",{attrs:{label:"展示效果不强"}},[t._v("展示效果不强")]),t._v(" "),a("el-radio",{attrs:{label:"4"}},[t._v("\n              其他\n              "),a("el-input",{staticClass:"anothorResult",attrs:{placeholder:"请输入内容"},model:{value:t.anothorResultInput,callback:function(e){t.anothorResultInput=e},expression:"anothorResultInput"}})],1)],1)],1)]),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.passReject(t.blogId,3)}}},[t._v("确 定")])],1)])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"tableTr"},[a("li",[t._v("成果编号")]),t._v(" "),a("li",[t._v("成果名称")]),t._v(" "),a("li",[t._v("发布人")]),t._v(" "),a("li",[t._v("类别")]),t._v(" "),a("li",[t._v("省份")]),t._v(" "),a("li",[t._v("来源")]),t._v(" "),a("li",[t._v("状态")]),t._v(" "),a("li",[t._v("发布时间")]),t._v(" "),a("li",{staticClass:"operate"},[t._v("操作")])])}]};var r=a("C7Lr")(l,o,!1,function(t){a("L8dM")},"data-v-7c5da04f",null);e.a=r.exports},"X/v5":function(t,e){},q1bu:function(t,e,a){var s=a("Rv9F"),i=s.JSON||(s.JSON={stringify:JSON.stringify});t.exports=function(t){return i.stringify.apply(i,arguments)}}});
//# sourceMappingURL=4.ddf7dc0292f715d58e5f.js.map