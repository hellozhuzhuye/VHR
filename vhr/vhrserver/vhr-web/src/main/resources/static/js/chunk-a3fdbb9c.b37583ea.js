(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a3fdbb9c"],{"0aaf":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v("\n    综合信息统计\n")])},n=[],r={name:"StaAll"},i=r,s=a("9ca4"),c=Object(s["a"])(i,l,n,!1,null,"71464d5f",null);t["default"]=c.exports},1937:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v("\n    工资表查询\n")])},n=[],r={name:"SalSearch"},i=r,s=a("9ca4"),c=Object(s["a"])(i,l,n,!1,null,"564a95f9",null);t["default"]=c.exports},"21c7":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v("\n    工资表管理\n")])},n=[],r={name:"SalTable"},i=r,s=a("9ca4"),c=Object(s["a"])(i,l,n,!1,null,"bca3269e",null);t["default"]=c.exports},"2bc5":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[a("el-button",{attrs:{icon:"el-icon-plus",type:"primary"},on:{click:e.showAddSalaryView}},[e._v("添加工资账套")]),a("el-button",{attrs:{icon:"el-icon-refresh",type:"success"},on:{click:e.initSalaries}})],1),a("div",{staticStyle:{"margin-top":"10px"}},[a("el-table",{attrs:{data:e.salaries,border:"",stripe:""}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{width:"120",prop:"name",label:"账套名称"}}),a("el-table-column",{attrs:{width:"70",prop:"basicSalary",label:"基本工资"}}),a("el-table-column",{attrs:{width:"70",prop:"trafficSalary",label:"交通补助"}}),a("el-table-column",{attrs:{width:"70",prop:"lunchSalary",label:"午餐补助"}}),a("el-table-column",{attrs:{width:"70",prop:"bonus",label:"奖金"}}),a("el-table-column",{attrs:{width:"100",prop:"createDate",label:"启用时间"}}),a("el-table-column",{attrs:{label:"养老金",align:"center"}},[a("el-table-column",{attrs:{width:"70",prop:"pensionPer",label:"比率"}}),a("el-table-column",{attrs:{width:"70",prop:"pensionBase",label:"基数"}})],1),a("el-table-column",{attrs:{label:"医疗保险",align:"center"}},[a("el-table-column",{attrs:{width:"70",prop:"medicalPer",label:"比率"}}),a("el-table-column",{attrs:{width:"70",prop:"medicalBase",label:"基数"}})],1),a("el-table-column",{attrs:{label:"公积金",align:"center"}},[a("el-table-column",{attrs:{width:"70",prop:"accumulationFundPer",label:"比率"}}),a("el-table-column",{attrs:{width:"70",prop:"accumulationFundBase",label:"基数"}})],1),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{on:{click:function(a){return e.showEditSalaryView(t.row)}}},[e._v("编辑")]),a("el-button",{attrs:{type:"danger"},on:{click:function(a){return e.deleteSalary(t.row)}}},[e._v("删除")])]}}])})],1)],1),a("el-dialog",{attrs:{title:e.dialogTitle,visible:e.dialogVisible,width:"50%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",{staticStyle:{display:"flex","justify-content":"space-around","align-items":"center"}},[a("el-steps",{attrs:{direction:"vertical",active:e.activeItemIndex}},e._l(e.salaryItemName,(function(e,t){return a("el-step",{key:t,attrs:{title:e}})})),1),e._l(e.salary,(function(t,l,n){return a("el-input",{directives:[{name:"show",rawName:"v-show",value:e.activeItemIndex==n,expression:"activeItemIndex==index"}],key:n,staticStyle:{width:"200px"},attrs:{placeholder:"请输入"+e.salaryItemName[n]+"..."},model:{value:e.salary[l],callback:function(t){e.$set(e.salary,l,t)},expression:"salary[title]"}})}))],2),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.preStep}},[e._v(e._s(10==e.activeItemIndex?"取消":"上一步"))]),a("el-button",{attrs:{type:"primary"},on:{click:e.nextStep}},[e._v(e._s(10==e.activeItemIndex?"完成":"下一步"))])],1)])],1)},n=[],r=(a("cc57"),{name:"SalSob",data:function(){return{dialogVisible:!1,dialogTitle:"添加工资账套",salaries:[],activeItemIndex:0,salaryItemName:["基本工资","交通补助","午餐补助","奖金","养老金比率","养老金基数","医疗保险比率","医疗保险基数","公积金比率","公积金基数","账套名称"],salary:{basicSalary:0,trafficSalary:0,lunchSalary:0,bonus:0,pensionPer:0,pensionBase:0,medicalPer:0,medicalBase:0,accumulationFundPer:0,accumulationFundBase:0,name:""}}},mounted:function(){this.initSalaries()},methods:{showEditSalaryView:function(e){this.dialogTitle="修改工资账套",this.dialogVisible=!0,this.salary.basicSalary=e.basicSalary,this.salary.trafficSalary=e.trafficSalary,this.salary.lunchSalary=e.lunchSalary,this.salary.bonus=e.bonus,this.salary.pensionPer=e.pensionPer,this.salary.pensionBase=e.pensionBase,this.salary.medicalPer=e.medicalPer,this.salary.medicalBase=e.medicalBase,this.salary.accumulationFundPer=e.accumulationFundPer,this.salary.accumulationFundBase=e.accumulationFundBase,this.salary.name=e.name,this.salary.id=e.id},deleteSalary:function(e){var t=this;this.$confirm("此操作将删除【"+e.name+"】账套，是否继续？","提示",{cancelButtonText:"取消",confirmButtonText:"确定"}).then((function(){t.deleteRequest("/salary/sob/"+e.id).then((function(e){e&&t.initSalaries()}))})).catch((function(){t.$message.info("取消删除!")}))},preStep:function(){0!=this.activeItemIndex&&(10!=this.activeItemIndex?this.activeItemIndex--:this.dialogVisible=!1)},nextStep:function(){var e=this;10!=this.activeItemIndex?this.activeItemIndex++:this.salary.id?this.putRequest("/salary/sob/",this.salary).then((function(t){t&&(e.initSalaries(),e.dialogVisible=!1)})):this.postRequest("/salary/sob/",this.salary).then((function(t){t&&(e.initSalaries(),e.dialogVisible=!1)}))},showAddSalaryView:function(){this.salary={basicSalary:0,trafficSalary:0,lunchSalary:0,bonus:0,pensionPer:0,pensionBase:0,medicalPer:0,medicalBase:0,accumulationFundPer:0,accumulationFundBase:0,name:"默认名称"},this.dialogTitle="添加工资账套",this.activeItemIndex=0,this.dialogVisible=!0},initSalaries:function(){var e=this;this.getRequest("/salary/sob/").then((function(t){t&&(e.salaries=t)}))}}}),i=r,s=a("9ca4"),c=Object(s["a"])(i,l,n,!1,null,"d7200d56",null);t["default"]=c.exports},5865:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v("\n    员工资料\n")])},n=[],r={name:"PerEmp"},i=r,s=a("9ca4"),c=Object(s["a"])(i,l,n,!1,null,"3547bc42",null);t["default"]=c.exports},"5a4a":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v("\n    员工调薪\n")])},n=[],r={name:"PerSalary"},i=r,s=a("9ca4"),c=Object(s["a"])(i,l,n,!1,null,"5bc2678a",null);t["default"]=c.exports},"6ac9":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",[a("el-table",{attrs:{data:e.emps,border:"",stripe:"",size:"mini"}},[a("el-table-column",{attrs:{type:"selection",align:"left",width:"55"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名",fixed:"",width:"120",align:"left"}}),a("el-table-column",{attrs:{prop:"workID",label:"工号",width:"120",align:"left"}}),a("el-table-column",{attrs:{prop:"email",label:"电子邮件",width:"200",align:"left"}}),a("el-table-column",{attrs:{prop:"phone",label:"电话号码",width:"120",align:"left"}}),a("el-table-column",{attrs:{prop:"department.name",label:"所属部门",width:"120",align:"left"}}),a("el-table-column",{attrs:{label:"所属部门",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.salary?a("el-tooltip",{attrs:{placement:"right"}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("table",[a("tr",[a("td",[e._v("基本工资")]),a("td",[e._v(e._s(t.row.salary.basicSalary))])]),a("tr",[a("td",[e._v("交通补助")]),a("td",[e._v(e._s(t.row.salary.trafficSalary))])]),a("tr",[a("td",[e._v("午餐补助")]),a("td",[e._v(e._s(t.row.salary.lunchSalary))])]),a("tr",[a("td",[e._v("奖金")]),a("td",[e._v(e._s(t.row.salary.bonus))])]),a("tr",[a("td",[e._v("养老金比率")]),a("td",[e._v(e._s(t.row.salary.pensionPer))])]),a("tr",[a("td",[e._v("养老金基数")]),a("td",[e._v(e._s(t.row.salary.pensionBase))])]),a("tr",[a("td",[e._v("医疗保险比率")]),a("td",[e._v(e._s(t.row.salary.medicalPer))])]),a("tr",[a("td",[e._v("医疗保险基数")]),a("td",[e._v(e._s(t.row.salary.medicalBase))])]),a("tr",[a("td",[e._v("公积金比率")]),a("td",[e._v(e._s(t.row.salary.accumulationFundPer))])]),a("tr",[a("td",[e._v("公积金基数")]),a("td",[e._v(e._s(t.row.salary.accumulationFundBase))])]),a("tr",[a("td",[e._v("启用时间")]),a("td",[e._v(e._s(t.row.salary.createDate))])])])]),a("el-tag",[e._v(e._s(t.row.salary.name))])],1):a("el-tag",[e._v("暂未设置")])]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-popover",{attrs:{placement:"left",title:"修改工资账套",width:"200",trigger:"click"},on:{show:function(a){return e.showPop(t.row.salary)},hide:function(a){return e.hidePop(t.row)}}},[a("div",[a("el-select",{attrs:{placeholder:"请选择",size:"mini"},model:{value:e.currentSalary,callback:function(t){e.currentSalary=t},expression:"currentSalary"}},e._l(e.salaries,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),a("el-button",{attrs:{slot:"reference",type:"danger"},slot:"reference"},[e._v("修改工资账套")])],1)]}}])})],1),a("div",{staticStyle:{display:"flex","justify-content":"flex-end"}},[a("el-pagination",{attrs:{background:"",layout:"sizes, prev, pager, next, jumper, ->, total, slot",total:e.total},on:{"size-change":e.sizeChange,"current-change":e.currentChange}})],1)],1)])},n=[],r={name:"SalSobCfg",data:function(){return{emps:[],total:0,currentPage:1,currentSize:10,currentSalary:null,salaries:[]}},mounted:function(){this.initEmps(),this.initSalaries()},methods:{sizeChange:function(e){this.currentSize=e,this.initEmps()},currentChange:function(e){this.currentPage=e,this.initEmps()},hidePop:function(e){var t=this;this.currentSalary&&this.putRequest("/salary/sobcfg/?eid="+e.id+"&sid="+this.currentSalary).then((function(e){e&&t.initEmps()}))},showPop:function(e){this.currentSalary=e?e.id:null},initSalaries:function(){var e=this;this.getRequest("/salary/sobcfg/salaries").then((function(t){t&&(e.salaries=t)}))},initEmps:function(){var e=this;this.getRequest("/salary/sobcfg/?page="+this.currentPage+"&size="+this.currentSize).then((function(t){t&&(e.emps=t.data,e.total=t.total)}))}}},i=r,s=a("9ca4"),c=Object(s["a"])(i,l,n,!1,null,"4129ff7d",null);t["default"]=c.exports},"83ed":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v("\n    员工培训\n")])},n=[],r={name:"PerTrain"},i=r,s=a("9ca4"),c=Object(s["a"])(i,l,n,!1,null,"7597653a",null);t["default"]=c.exports},a49a:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v("\n    人事记录统计\n")])},n=[],r={name:"StaRecord"},i=r,s=a("9ca4"),c=Object(s["a"])(i,l,n,!1,null,"0f16d65e",null);t["default"]=c.exports},b419:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v("\n    人事信息统计\n")])},n=[],r={name:"StaPers"},i=r,s=a("9ca4"),c=Object(s["a"])(i,l,n,!1,null,"5b97df8c",null);t["default"]=c.exports},c1d3:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v("\n    员工积分统计\n")])},n=[],r={name:"StaScore"},i=r,s=a("9ca4"),c=Object(s["a"])(i,l,n,!1,null,"14a28673",null);t["default"]=c.exports},cfbb:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v("\n    员工调动\n")])},n=[],r={name:"PerMv"},i=r,s=a("9ca4"),c=Object(s["a"])(i,l,n,!1,null,"6cb496b0",null);t["default"]=c.exports},d9ac:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v("\n    PerEc\n")])},n=[],r={name:"PerEc"},i=r,s=a("9ca4"),c=Object(s["a"])(i,l,n,!1,null,"1c885ac5",null);t["default"]=c.exports},fbac:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v("\n    月末处理\n")])},n=[],r={name:"SalMonth"},i=r,s=a("9ca4"),c=Object(s["a"])(i,l,n,!1,null,"51ab19b2",null);t["default"]=c.exports},feca:function(e,t,a){var l={"./Home.vue":"bb51","./HrInfo.vue":"92d8","./Login.vue":"a55b","./chat/FriendChat.vue":"8a18","./emp/EmpAdv.vue":"8759","./emp/EmpBasic.vue":"58da","./per/PerEc.vue":"d9ac","./per/PerEmp.vue":"5865","./per/PerMv.vue":"cfbb","./per/PerSalary.vue":"5a4a","./per/PerTrain.vue":"83ed","./sal/SalMonth.vue":"fbac","./sal/SalSearch.vue":"1937","./sal/SalSob.vue":"2bc5","./sal/SalSobCfg.vue":"6ac9","./sal/SalTable.vue":"21c7","./sta/StaAll.vue":"0aaf","./sta/StaPers.vue":"b419","./sta/StaRecord.vue":"a49a","./sta/StaScore.vue":"c1d3","./sys/SysBasic.vue":"8d67","./sys/SysCfg.vue":"1fe7","./sys/SysData.vue":"d1e3","./sys/SysHr.vue":"418a","./sys/SysInit.vue":"8608","./sys/SysLog.vue":"864e"};function n(e){var t=r(e);return a(t)}function r(e){if(!a.o(l,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return l[e]}n.keys=function(){return Object.keys(l)},n.resolve=r,e.exports=n,n.id="feca"}}]);
//# sourceMappingURL=chunk-a3fdbb9c.b37583ea.js.map