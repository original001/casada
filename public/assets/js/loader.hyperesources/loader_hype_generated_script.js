//	HYPE.documents["loader"]

(function(){(function k(){var f="loader.hyperesources",d="loader",c="loader_hype_container";if(false==!1)try{for(var g=document.getElementsByTagName("script"),a=0;a<g.length;a++){var b=g[a].src;if(null!=b&&-1!=b.indexOf("loader_hype_generated_script.js")){f=b.substr(0,b.lastIndexOf("/"));break}}}catch(m){}if(false==!1&&null==window.HYPE_458)null==window.HYPE_dtl_458?(window.HYPE_dtl_458=[],window.HYPE_dtl_458.push(k),d=document.getElementsByTagName("head")[0],c=document.createElement("script"),
a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,c.type="text/javascript",c.src=f+"/"+(!0==(null!=a&&10>a||false==!0)?"HYPE-458.full.min.js":"HYPE-458.thin.min.js"),d.appendChild(c)):window.HYPE_dtl_458.push(k);else{window.HYPE_dtl_458=[];g=window.HYPE.documents;if(null!=g[d]){b=1;a=d;do d=""+a+"-"+b++;while(null!=g[d]);for(var e=document.getElementsByTagName("div"),b=!1,a=0;a<e.length;a++)if(e[a].id==c&&null==e[a].getAttribute("HYP_dn")){var b=
1,h=c;do c=""+h+"-"+b++;while(null!=document.getElementById(c));e[a].id=c;b=!0;break}if(!1==b)return}b=[];b=[{name:"endOfAnimation",source:"function(hypeDocument, element, event) {\t$('body').trigger('load.loader');\n}",identifier:"207"}];e={};h={};for(a=0;a<b.length;a++)try{h[b[a].identifier]=b[a].name,e[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(l){window.console&&window.console.log(l),e[b[a].name]=function(){}}f=new HYPE_458(d,c,{"3":{p:1,n:"dot.png",g:"6",t:"@1x"},"1":{p:1,n:"bg.jpg",g:"5",t:"@1x"},"2":{p:1,n:"loader-my.png",g:"40",t:"@1x"},"0":{p:1,n:"aeroplan.png",g:"4",t:"@1x"}},f,[],e,[{n:"Untitled Scene",o:"1",X:[0]}],[{o:"3",p:"600px",x:0,cA:false,Z:400,Y:600,c:"#FFFFFF",L:[{a:[{p:0}],B:"FormSended"}],bY:1,d:600,U:{},T:{"206":{f:30,z:5,i:"206",n:"animation",j:{"3":[[290,295,290,295,264,287,251,268],[251,268,237,248,235,217,235,217]],"1":[[357,166,357,166,377,181,381,204],[381,204,385,226,374,257,374,257]],"4":[[235,217,235,217,235,202,242,188],[242,188,249,174,264,162,264,162]],"2":[[374,257,374,257,360,279,339,289],[339,289,318,298,290,295,290,295]],"0":[[264,161.5,264,161.5,287,145,310,146],[310,146,333,147,357,166,357,166]]},a:[{f:"c",y:0,z:4.2,i:"b",e:217,s:217,o:"212"},{f:"c",y:0,z:1.2,i:"b",e:0,s:102,o:"210"},{f:"c",y:0,z:1.2,i:"a",e:291,s:159,o:"210"},{f:"c",y:0,z:0.16,i:"w",e:"20",s:"10",o:"208"},{f:"a",y:0,z:0.05,i:"f",e:13,s:0,o:"209"},{f:"a",y:0.05,z:0.05,i:"f",e:26,s:13,o:"209"},{o:"211",y:0.07,z:1,i:"b",e:152.5,a:"0",f:"b",s:148},{o:"211",y:0.07,z:1,i:"a",e:343,a:"0",f:"b",s:250},{f:"a",y:0.1,z:0.05,i:"f",e:39,s:26,o:"209"},{f:"a",y:0.15,z:0.05,i:"f",e:52,s:39,o:"209"},{f:"c",y:0.16,z:0.15,i:"w",e:"30",s:"20",o:"208"},{f:"a",y:0.2,z:0.05,i:"f",e:65,s:52,o:"209"},{f:"a",y:0.25,z:0.05,i:"f",e:78,s:65,o:"209"},{f:"a",y:1,z:0.05,i:"f",e:91,s:78,o:"209"},{f:"c",y:1.01,z:0.16,i:"w",e:"40",s:"30",o:"208"},{f:"a",y:1.05,z:0.05,i:"f",e:104,s:91,o:"209"},{o:"211",y:1.07,z:1,i:"a",e:360,a:"1",f:"b",s:343},{o:"211",y:1.07,z:1,i:"b",e:243.5,a:"1",f:"b",s:152.5},{f:"a",y:1.1,z:0.05,i:"f",e:117,s:104,o:"209"},{f:"a",y:1.15,z:0.05,i:"f",e:130,s:117,o:"209"},{f:"c",y:1.17,z:0.15,i:"w",e:"50",s:"40",o:"208"},{f:"a",y:1.2,z:0.11,i:"b",e:102,s:0,o:"210"},{f:"a",y:1.2,z:0.11,i:"a",e:160,s:291,o:"210"},{f:"a",y:1.2,z:0.05,i:"f",e:143,s:130,o:"209"},{f:"a",y:1.25,z:0.05,i:"f",e:156,s:143,o:"209"},{f:"a",y:2,z:0.05,i:"f",e:169,s:156,o:"209"},{f:"c",y:2.01,z:1.09,i:"b",e:0,s:102,o:"210"},{f:"c",y:2.01,z:1.09,i:"a",e:291,s:160,o:"210"},{f:"c",y:2.02,z:0.16,i:"w",e:"60",s:"50",o:"208"},{f:"a",y:2.05,z:0.05,i:"f",e:182,s:169,o:"209"},{o:"211",y:2.07,z:1,i:"b",e:281.5,a:"2",f:"b",s:243.5},{o:"211",y:2.07,z:1,i:"a",e:276,a:"2",f:"b",s:360},{f:"a",y:2.1,z:0.05,i:"f",e:195,s:182,o:"209"},{f:"a",y:2.15,z:0.05,i:"f",e:208,s:195,o:"209"},{f:"c",y:2.18,z:0.15,i:"w",e:"70",s:"60",o:"208"},{f:"a",y:2.2,z:0.05,i:"f",e:221,s:208,o:"209"},{f:"a",y:2.25,z:0.05,i:"f",e:234,s:221,o:"209"},{f:"a",y:3,z:0.05,i:"f",e:247,s:234,o:"209"},{f:"c",y:3.03,z:0.16,i:"w",e:"80",s:"70",o:"208"},{f:"a",y:3.05,z:0.05,i:"f",e:260,s:247,o:"209"},{o:"211",y:3.07,z:0.3,i:"b",e:203.5,a:"3",f:"b",s:281.5},{o:"211",y:3.07,z:0.3,i:"a",e:221,a:"3",f:"b",s:276},{f:"a",y:3.1,z:0.09,i:"b",e:102,s:0,o:"210"},{f:"a",y:3.1,z:0.09,i:"a",e:159,s:291,o:"210"},{f:"a",y:3.1,z:0.05,i:"f",e:273,s:260,o:"209"},{f:"a",y:3.15,z:0.05,i:"f",e:286,s:273,o:"209"},{f:"c",y:3.19,z:1.11,i:"b",e:0,s:102,o:"210"},{f:"c",y:3.19,z:1.11,i:"a",e:291,s:159,o:"210"},{f:"c",y:3.19,z:0.15,i:"w",e:"90",s:"80",o:"208"},{f:"a",y:3.2,z:0.05,i:"f",e:299,s:286,o:"209"},{f:"a",y:3.25,z:0.05,i:"f",e:312,s:299,o:"209"},{f:"a",y:4,z:0.05,i:"f",e:325,s:312,o:"209"},{f:"a",y:4.04,z:0.16,i:"a",e:349,s:334,o:"212"},{f:"c",y:4.04,z:0.16,i:"w",e:"100",s:"90",o:"208"},{f:"a",y:4.05,z:0.05,i:"f",e:339,s:325,o:"209"},{o:"211",y:4.07,z:0.2,i:"b",e:148.5,a:"4",f:"b",s:203.5},{o:"211",y:4.07,z:0.2,i:"a",e:250,a:"4",f:"b",s:221},{f:"a",y:4.1,z:0.05,i:"f",e:352,s:339,o:"209"},{f:"a",y:4.15,z:0.05,i:"f",e:365,s:352,o:"209"},{y:4.2,i:"b",s:217,z:0,o:"212",f:"a"},{y:4.2,i:"a",s:349,z:0,o:"212",f:"c"},{y:4.2,i:"w",s:"100",z:0,o:"208",f:"c"},{y:4.2,i:"f",s:365,z:0,o:"209",f:"a"},{y:4.27,i:"b",s:148.5,z:0,o:"211",f:"c"},{y:4.27,i:"a",s:250,z:0,o:"211",f:"c"},{f:"c",p:2,y:5,z:0,i:"ActionHandler",s:{a:[{p:4,h:"207"}]},o:"206"},{y:5,i:"b",s:0,z:0,o:"210",f:"c"},{y:5,i:"a",s:291,z:0,o:"210",f:"c"}],b:[]},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[{y:0,i:"b",s:217,z:0,o:"212",f:"c"}],f:30}},bZ:180,O:["211","209","212","208","210"],v:{"210":{h:"4",p:"no-repeat",x:"visible",a:159,q:"100% 100%",b:102,j:"absolute",r:"inline",c:85,k:"div",z:3,d:51},"209":{w:"",h:"40",p:"no-repeat",x:"visible",a:233,q:"100% 100%",b:146,j:"absolute",r:"inline",z:7,k:"div",c:152,d:152,f:0},"211":{h:"6",p:"no-repeat",x:"visible",tY:0.5,a:250,q:"100% 100%",j:"absolute",b:148,z:8,k:"div",c:28,d:27,bP:"YES",r:"inline",tX:0.5},"212":{G:"#FFFFFF",aU:8,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:16,u:"normal",Z:"break-word",v:"bold",w:"%",j:"absolute",x:"visible",yy:"nowrap",k:"div",y:"preserve",z:5,aS:8,aT:8,a:334,b:217},"208":{G:"#FFFFFF",aU:8,c:99,aV:8,d:63,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:55,Z:"break-word",v:"bold",w:"10",j:"absolute",x:"visible",k:"div",y:"preserve",z:4,aS:8,aT:8,a:250,F:"center",b:182}}}],{},h,{},
0,false,false,true,-1,true,true,true);g[d]=f.API;document.getElementById(c).setAttribute("HYP_dn",d);f.z_o(this.body)}})();})();
