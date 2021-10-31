(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03dc0164"],{9406:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("h3",[e._v("Main banner")]),a("el-carousel",{attrs:{"indicator-position":"outside",trigger:"click"}},e._l(e.banners,(function(t){return a("el-carousel-item",{key:t.id},[a("div",{style:e.bgStyle(t)},[a("h1",{staticClass:"banner-title"},[e._v(" "+e._s(t.title)+" ")]),a("div",{staticStyle:{width:"50%"}},[a("p",{staticClass:"banner-desc"},[e._v(" "+e._s(t.description)+" ")])])])])})),1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.banners}},[a("el-table-column",{attrs:{type:"index",width:"50"}}),a("el-table-column",{attrs:{label:"Title",prop:"title"}}),a("el-table-column",{attrs:{label:"Filename",prop:"filename"}}),a("el-table-column",{attrs:{label:"Upload date",prop:"created_at"}}),a("el-table-column",{attrs:{align:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[a("i",{staticClass:"el-icon-edit"})]),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleDelete(t.$index,t.row)}}},[a("i",{staticClass:"el-icon-delete"})])]}}])},[a("template",{slot:"header"},[a("el-button",{attrs:{type:"success",size:"mini"},on:{click:e.handleAdd}},[a("i",{staticClass:"el-icon-plus"})])],1)],2)],1),a("el-dialog",{attrs:{title:e.dialogTitle,visible:e.dialogForm,width:"80%"},on:{"update:visible":function(t){e.dialogForm=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"120px","label-position":"top"}},[a("el-form-item",{attrs:{label:"Banner image"}},[a("el-upload",{ref:"file",staticClass:"avatar-uploader",attrs:{action:"#","auto-upload":!1,"show-file-list":!1,"on-change":e.onFileChange,accept:"image/jpeg,image/png"}},[e.url?a("img",{staticClass:"avatar",attrs:{src:e.url}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),a("el-form-item",{attrs:{label:"Title"}},[a("el-input",{attrs:{type:"textarea",maxlength:"250"},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),a("el-form-item",{attrs:{label:"Description"}},[a("el-input",{attrs:{type:"textarea",maxlength:"250"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogForm=!1}}},[e._v("Cancel")]),a("el-button",{attrs:{type:"primary"},on:{click:e.submitDialog}},[e._v("Confirm")])],1)],1)],1)},n=[],l=a("b85c"),r=a("1da1"),s=(a("96cf"),a("ac1f"),a("1276"),a("a15b"),a("a4d3"),a("e01a"),a("b0c0"),a("a434"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("9861"),a("bc3a")),o=a.n(s),c={data:function(){return{API_URL:"http://localhost",tableData:[],search:"",dialogFormVisible:!1,form:{title:"",description:""},formLabelWidth:"120px",banners:[{id:1,filename:"http://localhost/images/bigbanner01.jpg"},{id:2,filename:"http://localhost/images/bigbanner02.jpg"},{id:3,filename:"http://localhost/images/bigbanner03.jpg"}],editIndex:-1,dialogTitle:"",dialogForm:!1,url:""}},created:function(){var e=window.location.href.split("://");e[1]=e[1].split("/").shift(),e[1]=e[1].split(":").shift(),this.API_URL=e.join("://")},mounted:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a,i,n,r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o.a.get(e.API_URL+"/banner/list");case 2:a=t.sent,i=a.data.data,n=Object(l["a"])(i);try{for(n.s();!(r=n.n()).done;)s=r.value,s.created_at=s.created_at.split("T")[0],s.filepath=e.API_URL+"/images/uploads/"+s.filename}catch(c){n.e(c)}finally{n.f()}e.banners=i;case 7:case"end":return t.stop()}}),t)})))()},methods:{submitDialog:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a,i,n,l,r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.dialogForm=!1,a="Success",i=new FormData,i.append("title",e.form.title),i.append("description",e.form.description),!e.form.title||!e.form.description){t.next=23;break}if(n=new Date,!(e.editIndex<0)){t.next=16;break}return e.file&&i.append("file",e.file),t.next=11,o.a.post(e.API_URL+"/banner/add",i);case 11:l=t.sent,l.data.data.insertId&&e.banners.push({id:l.data.data.insertId,filename:l.data.data.filename,filepath:e.API_URL+"/images/uploads/"+l.data.data.filename,title:e.form.title,description:e.form.description,created_at:n.toISOString().split("T")[0]}),a="Add banner completed",t.next=23;break;case 16:return i.append("id",e.banners[e.editIndex].id),e.file&&i.append("file",e.file),t.next=20,o.a.post(e.API_URL+"/banner/update",i);case 20:r=t.sent,r.data.data.affectedRows&&(e.banners[e.editIndex].title=e.form.title,e.banners[e.editIndex].description=e.form.description,e.file&&(s=e.file.name.split(".").join("-bn-"+n.getHours()+"."),e.banners[e.editIndex].filename=s,e.banners[e.editIndex].filepath=e.API_URL+"/images/uploads/"+s),e.banners[e.editIndex].created_at=n.toISOString().split("T")[0]),a="Update banner completed";case 23:e.$message({type:"success",message:a}),e.dialogForm=!1;case 25:case"end":return t.stop()}}),t)})))()},handleAdd:function(){this.editIndex=-1,this.dialogTitle="Add banner",this.file=null,this.url="",this.form={title:"",description:""},this.dialogForm=!0},handleEdit:function(e,t){this.editIndex=e,this.dialogTitle="Edit banner",this.file=null,this.url=t.filepath,this.form={title:t.title,description:t.description},this.dialogForm=!0},handleDelete:function(e,t){var a=this;this.$confirm("Delete ?","Warning",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}).then((function(){o.a.post(a.API_URL+"/banner/remove",t),a.banners.splice(e,1),a.$message({type:"success",message:"Delete completed"})})).catch((function(){a.$message({type:"info",message:"Delete canceled"})}))},onFileChange:function(e){this.$refs.file.clearFiles(),this.file=e.raw,this.url=URL.createObjectURL(this.file)},bgStyle:function(e){return{height:"100%",backgroundImage:"url('".concat(e.filepath,"')"),backgroundSize:"100%",backgroundRepeat:"no-repeat"}}}},d=c,p=(a("f8a7"),a("2877")),u=Object(p["a"])(d,i,n,!1,null,null,null);t["default"]=u.exports},ca2b:function(e,t,a){},f8a7:function(e,t,a){"use strict";a("ca2b")}}]);