__NUXT_JSONP__("/git-tips-and-tricks", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return {data:[{article:{slug:"git-tips-and-tricks",description:"The Git system is a powerful tool for tracking source code changes. Commonly used by developers and programmers across the globe, gaining a familiarity with this technology is a great asset to have. This article covers a number of tips and tricks to help improve your Git literacy and workflow.",title:"Git Tips and Tricks",date:"2021-07-22T00:00:00.000Z",categories:["Orther"],tags:["GIT"],math:true,authors:[{name:"anhkevin"}],toc:[{id:e,depth:2,text:f}],body:{type:"root",children:[{type:b,tag:"h2",props:{id:e},children:[{type:b,tag:"a",props:{ariaHidden:"true",href:"#1-git-clean",tabIndex:-1},children:[{type:b,tag:g,props:{className:["icon","icon-link"]},children:[]}]},{type:a,value:f}]},{type:a,value:c},{type:b,tag:"hr",props:{},children:[]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:"- Problem:"}]}]},{type:a,value:c},{type:b,tag:j,props:{className:[k]},children:[{type:b,tag:l,props:{className:[m,n]},children:[{type:b,tag:o,props:{},children:[{type:a,value:"error: The following untracked working tree files would be overwritten by checkout:\n        application\u002Fabc\u002Fxyz1.i\n        application\u002Fabc\u002Fxyz2.i\n        application\u002Fabc\u002Fxyz3.i\nPlease move or remove them before you switch branches.\nAborting\n"}]}]}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:"- Solution:"}]}]},{type:a,value:c},{type:b,tag:j,props:{className:[k]},children:[{type:b,tag:l,props:{className:[m,n]},children:[{type:b,tag:o,props:{},children:[{type:b,tag:g,props:{className:["token","function"]},children:[{type:a,value:"git"}]},{type:a,value:" clean -fd application\u002F\n"}]}]}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"‘git clean -n’ hiển thị danh sách files, folder sẽ bị xóa"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"‘git clean -f’ chỉ xóa files"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"‘git clean -d’ chỉ xóa folder"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"‘git clean -fd’ xóa files và folder"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"‘git clean -fx’ xóa các files đã được ignored (.gitignore)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"‘git clean -fdx’ xóa các files, folder đã được ignored (.gitignore)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"‘git clean --force’ clean hết"}]},{type:a,value:c}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002Fgit-tips-and-tricks",extension:".md",createdAt:p,updatedAt:p}}],fetch:{},mutations:[]}}("text","element","\n","li","1-git-clean","1. Git clean","span","p","strong","div","nuxt-content-highlight","pre","language-shell","line-numbers","code","2021-08-08T11:41:39.803Z")));