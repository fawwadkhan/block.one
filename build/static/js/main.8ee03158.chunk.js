(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{20:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAALdJREFUWAntk80KwjAQhONPD3oQj4KF4tv40h49+0B6cFZ2YemxKSTCFxh2soXt5GtTCgsCEIAABCAAAQhA4E8IbJRz12vWbQq2T74La+RsnaXDz5UyeK0u+eRLhwWxiwY8pKv0lqIv237Fv3dXlJc0eqTqkGsQzHg+2sQnz/2mPijdlOIpTZ4m+k3D2cuD2En+6GlWuyQ+r7pESBvUDbn5qSxkXJb5M/YQgAAEIAABCEAAAn0S+AK+7wWMXWTv2gAAAABJRU5ErkJggg=="},21:function(e,t,n){e.exports=n.p+"static/media/spinner-7.6a701469.gif"},25:function(e,t,n){e.exports=n(44)},30:function(e,t,n){},40:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(17),c=n.n(o),i=(n(30),n(4)),r=n(5),s=n(9),m=n(6),u=n(8),d=n(46),p=n(47),h=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark mb-4"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 text-center"},l.a.createElement("h5",{style:{color:"#fff"}},"Block.one ( Web application developer technical test )")))))}}]),t}(a.Component),b=n(24),E=n(12),v=n(18),f=n(10),k=n(19),A=n(20),g=n.n(A),C=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).showBlockInfo=n.showBlockInfo.bind(Object(f.a)(n)),n.state={showBlockInfoContainer:!1},n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"showBlockInfo",value:function(){this.setState({showBlockInfoContainer:!this.state.showBlockInfoContainer})}},{key:"render",value:function(){var e;return this.state.showBlockInfoContainer&&(e=l.a.createElement("div",{style:{backgroundColor:"#eff0f1",padding:"15px",margin:"10px 50px",width:"90%",fontSize:"14px"}},l.a.createElement("div",null,l.a.createElement("span",{style:{fontWeight:"bold"}},"Id:")),l.a.createElement("div",null,l.a.createElement("span",null,this.props.information.id)),l.a.createElement("div",null,l.a.createElement("span",{style:{fontWeight:"bold"}},"Producer:")),l.a.createElement("div",null,l.a.createElement("span",null,this.props.information.producer)),l.a.createElement("div",null,l.a.createElement("span",{style:{fontWeight:"bold"}},"Block_num:")),l.a.createElement("div",null,l.a.createElement("span",null,this.props.information.block_num)),l.a.createElement("div",null,l.a.createElement("span",{style:{fontWeight:"bold"}},"Ref_block_prefix:")),l.a.createElement("div",null,l.a.createElement("span",null,this.props.information.ref_block_prefix)),l.a.createElement("div",null,l.a.createElement("span",{style:{fontWeight:"bold"}},"Timestamp:")),l.a.createElement("div",null,l.a.createElement("span",null,this.props.information.timestamp)),l.a.createElement("div",null,l.a.createElement("span",{style:{fontWeight:"bold"}},"Schedule_version:")),l.a.createElement("div",null,l.a.createElement("span",null,this.props.information.schedule_version)),l.a.createElement("div",null,l.a.createElement("span",{style:{fontWeight:"bold"}},"Action_mroot:")),l.a.createElement("div",null,l.a.createElement("span",null,this.props.information.action_mroot)),l.a.createElement("div",null,l.a.createElement("span",{style:{fontWeight:"bold"}},"Producer_signature:")),l.a.createElement("div",null,l.a.createElement("span",null,this.props.information.producer_signature)),l.a.createElement("div",null,l.a.createElement("span",{style:{fontWeight:"bold"}},"No. of Transactions:")),l.a.createElement("div",null,l.a.createElement("span",null,this.props.information.transactions.length)))),l.a.createElement("div",{className:"container",onClick:this.showBlockInfo},l.a.createElement("div",{className:"row",style:{cursor:"pointer"}},l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("img",{src:g.a,alt:"Pointer"}),this.props.information.id),l.a.createElement("div",{className:"col-sm-2"},this.props.information.timestamp),l.a.createElement("div",{className:"col-sm-2"},this.props.information.transactions.length)),l.a.createElement("div",{className:"row"},e))}}]),t}(a.Component),w=n(21),j=n.n(w),I=function(e){var t=e.count;return l.a.createElement("div",null,l.a.createElement("img",{src:j.a,alt:"Loading...",className:{width:"200px",margin:"10px"}}),l.a.createElement("p",{className:"text-center"},"Received ",t," Blocks."))},y=n(22),B=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).isComponentMounted=!1,n.state={maxLimit:10,currLimit:0,blockContainer:[],errors:"",block:{},rpcConnection:""},n.getLatestBlocks=n.getLatestBlocks.bind(Object(f.a)(n)),n.getBlocks=n.getBlocks.bind(Object(f.a)(n)),n.loadLatestBlock=n.loadLatestBlock.bind(Object(f.a)(n)),n.intervalOBJ=null,n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"loadLatestBlock",value:function(){this.setState({currLimit:0,blockContainer:[],block:{}}),this.getLatestBlocks()}},{key:"getBlocks",value:function(){var e=this;if(this.state.currLimit===this.state.maxLimit)clearInterval(this.intervalOBJ._id);else{var t=this.state.rpcConnection;t.get_info().then((function(n){n.head_block_num&&!e.state.block[n.head_block_num]&&e.isComponentMounted&&(e.setState((function(){return{block:Object(v.a)({},e.state.block,Object(E.a)({},n.head_block_num,n.head_block_num))}})),t.get_block(n.head_block_num).then((function(t){t&&e.isComponentMounted&&e.setState({blockContainer:[].concat(Object(b.a)(e.state.blockContainer),[t])}),e.isComponentMounted&&e.setState({currLimit:e.state.currLimit+1})})).catch((function(t){e.isComponentMounted&&e.setState({errors:"Failed to fetch block, "+t})})))})).catch((function(t){e.isComponentMounted&&e.setState({errors:"Failed to fetch info, "+t})}))}}},{key:"getLatestBlocks",value:function(){this.intervalOBJ=Object(y.setInterval)(this.getBlocks,800)}},{key:"componentDidMount",value:function(){this.isComponentMounted=!0,this.setState({rpcConnection:new k.JsonRpc("https://api.eosnewyork.io")}),this.getLatestBlocks()}},{key:"componentWillUnmount",value:function(){this.isComponentMounted=!1}},{key:"render",value:function(){var e,t,n=this.state.blockContainer;return 10===n.length?(e=n.map((function(e){return l.a.createElement(C,{key:e.block_num,information:e})})),t=l.a.createElement("div",{style:{margin:"0 auto"}},l.a.createElement("input",{type:"submit",value:"Load latest blocks",onClick:this.loadLatestBlock,className:"btn btn-info btn-block mt-4"}))):e=l.a.createElement(I,{count:this.state.currLimit}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("h3",null,"Latest Blocks"),l.a.createElement("hr",null)),l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("p",{className:"lead font-weight-bold"},"BlockID")),l.a.createElement("div",{className:"col-sm-2"},l.a.createElement("p",{className:"lead font-weight-bold"},"Timestamp")),l.a.createElement("div",{className:"col-sm-2"},l.a.createElement("p",{className:"lead font-weight-bold"},"Transactions")),e,t))}}]),t}(a.Component),O=function(){return l.a.createElement("footer",{className:"bg-dark text-white mt-5 p-2 text-center"},"Copyright \xa9 ",(new Date).getFullYear()," Fawwad Hk")},L=(n(40),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(h,null),l.a.createElement(p.a,{exact:!0,path:"/",component:B}),l.a.createElement(O,null)))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.8ee03158.chunk.js.map