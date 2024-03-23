__NUXT_JSONP__("/statelesswidget-va-statefulwidget-trong-flutter-la-gi", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y){return {data:[{article:{slug:"statelesswidget-va-statefulwidget-trong-flutter-la-gi",description:"Khi xây dựng ứng dụng Flutter, chúng ta thường sử dụng Widgets để dựng giao diện. Khi đó có 2 loại để dựng là statteful và stateless.",id:560,title:"StatelessWidget và StatefulWidget trong Flutter là gì?",date:"2019-11-30T00:00:00.000Z",author:"Ime Share",layout:"post",permalink:"\u002Fstatelesswidget-va-statefulwidget-trong-flutter-la-gi\u002F",post_views_count:["280"],categories:["Orther"],tags:[l],authors:[{name:"anhkevin"}],toc:[],body:{type:"root",children:[{type:b,tag:e,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:k}]},{type:a,value:" và "},{type:b,tag:d,props:{},children:[{type:a,value:h}]},{type:a,value:" là gì?"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:g,props:{style:i},children:[{type:b,tag:d,props:{},children:[{type:a,value:"1. StatefulWidget"}]}]}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:h}]},{type:a,value:" là đối tượng lưu trữ các widget có trạng thái (state), nó có thể được cập nhật trong thời gian chạy dựa trên hành động của người dùng hoặc thay đổi dữ liệu."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Khi "},{type:b,tag:d,props:{},children:[{type:a,value:l}]},{type:a,value:" xây dựng "},{type:b,tag:d,props:{},children:[{type:a,value:h}]},{type:a,value:", nó sẽ tạo một đối tượng Trạng thái. Đối tượng này là nơi giữ tất cả trạng thái có thể thay đổi cho widget đó."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"State"}]},{type:a,value:" trong "},{type:b,tag:d,props:{},children:[{type:a,value:h}]},{type:a,value:" giúp đối tượng này chỉ render lại phần giao diện nào có thay đổi mà thôi, không phải refresh lại toàn bộ cả Widget gây tốn thời gian cũng như làm hỏng cả trải nghiệm người dùng."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:g,props:{style:m},children:[{type:b,tag:g,props:{style:i},children:[{type:b,tag:d,props:{},children:[{type:a,value:"Cấu trúc hoạt động StatefulWidget:"}]}]}]}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Khi tạo một Stateful class phải "},{type:b,tag:d,props:{},children:[{type:a,value:"extends StatefulWidget"}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Khi sử dụng một "},{type:b,tag:d,props:{},children:[{type:a,value:h}]},{type:a,value:", ta cần một State tương ứng với nó, và trỏ vào StatefulWidget**#createState**. Phần render giao diện sẽ do State quản lí."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Trong State class, để cập nhật dữ liệu được hiển thị của một Widget, cũng như những đối tượng liên quan tới một member nào đó, ta cần dùng "},{type:b,tag:d,props:{},children:[{type:a,value:"setState(VoidCallback)"}]},{type:a,value:"."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:n,props:{to:o},children:[{type:b,tag:p,props:{className:[q,r,s],src:o,alt:t,width:u,height:v},children:[]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:g,props:{style:i},children:[{type:b,tag:d,props:{},children:[{type:a,value:"2. StatelessWidget"}]}]}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:k}]},{type:a,value:" là đối tượng lưu trữ các widget không trạng thái (state), không chấp nhận sự thay đổi bên trong nó, không lưu trữ đối tượng thay đổi dữ liệu."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"VD:"}]},{type:a,value:" xây dựng UI có Icon, IconButton và Text."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:g,props:{style:m},children:[{type:b,tag:g,props:{style:i},children:[{type:b,tag:d,props:{},children:[{type:a,value:"Cấu trúc hoạt động StatelessWidget:"}]}]}]}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Khi tạo một Stateless class phải "},{type:b,tag:d,props:{},children:[{type:a,value:"extends StatelessWidget"}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:k}]},{type:a,value:" không có State. Bản thân nó không có hàm createState, mà thay vào đó, hàm build(BuildContext) nằm trực tiếp trong nó luôn"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:n,props:{to:w},children:[{type:b,tag:p,props:{className:[q,r,s],src:w,alt:t,width:u,height:v},children:[]}]}]},{type:a,value:c},{type:b,tag:x,props:{id:"gtx-trans",style:"position: absolute; left: -15px; top: 33px;"},children:[{type:a,value:y},{type:b,tag:x,props:{className:["gtx-trans-icon"]},children:[{type:a,value:y}]},{type:a,value:c}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002Fstatelesswidget-va-statefulwidget-trong-flutter-la-gi",extension:".md",createdAt:"2024-03-23T10:13:04.122Z",updatedAt:"2024-03-23T10:13:04.126Z"}}],fetch:{},mutations:[]}}("text","element","\n","strong","p","li","span","StatefulWidget","font-size: 14pt;","ul","StatelessWidget","Flutter","text-decoration: underline;","nuxt-link","\u002Fimg\u002Fuploads\u002F2019\u002F11\u002Fflutter-stateful-ime-share-blog.png","img","alignnone","wp-image-563","size-full","",637,431,"\u002Fimg\u002Fuploads\u002F2019\u002F11\u002Fflutter-stateless-ime-share-blog-1.png","div","\n  ")));