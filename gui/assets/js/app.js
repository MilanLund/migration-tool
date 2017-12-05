!function(e){if('object'==typeof exports&&'object'==typeof module)module.exports=e();else{if('function'==typeof define&&define.amd)return define([],e);(this||window).CodeMirror=e();}}(function(){'use strict';function e(r,n){if(!(this instanceof e))return new e(r,n);this.options=n=n?zi(n):{},zi(el,n,!1),d(n);var i=n.value;'string'==typeof i&&(i=new Ll(i,n.mode,null,n.lineSeparator)),this.doc=i;var o=new e.inputStyles[n.inputStyle](this),l=this.display=new t(r,i,o);l.wrapper.CodeMirror=this,u(this),s(this),n.lineWrapping&&(this.display.wrapper.className+=' CodeMirror-wrap'),n.autofocus&&!Wo&&l.input.focus(),m(this),this.state={keyMaps:[],overlays:[],modeGen:0,overwrite:!1,delayingBlurEvent:!1,focused:!1,suppressEdits:!1,pasteIncoming:!1,cutIncoming:!1,selectingText:!1,draggingText:!1,highlight:new Ai,keySeq:null,specialChars:null};var a=this;bo&&11>wo&&setTimeout(function(){a.display.input.reset(!0);},20),Ut(this),qi(),wt(this),this.curOp.forceUpdate=!0,$n(this,i),n.autofocus&&!Wo||a.hasFocus()?setTimeout(Fi(vr,this),20):mr(this);for(var c in tl)tl.hasOwnProperty(c)&&tl[c](this,n[c],rl);C(this),n.finishInit&&n.finishInit(this);for(var h=0;h<ll.length;++h)ll[h](this);Ct(this),xo&&n.lineWrapping&&'optimizelegibility'==getComputedStyle(l.lineDiv).textRendering&&(l.lineDiv.style.textRendering='auto');}function t(e,t,r){var n=this;this.input=r,n.scrollbarFiller=Ui('div',null,'CodeMirror-scrollbar-filler'),n.scrollbarFiller.setAttribute('cm-not-content','true'),n.gutterFiller=Ui('div',null,'CodeMirror-gutter-filler'),n.gutterFiller.setAttribute('cm-not-content','true'),n.lineDiv=Ui('div',null,'CodeMirror-code'),n.selectionDiv=Ui('div',null,null,'position: relative; z-index: 1'),n.cursorDiv=Ui('div',null,'CodeMirror-cursors'),n.measure=Ui('div',null,'CodeMirror-measure'),n.lineMeasure=Ui('div',null,'CodeMirror-measure'),n.lineSpace=Ui('div',[n.measure,n.lineMeasure,n.selectionDiv,n.cursorDiv,n.lineDiv],null,'position: relative; outline: none'),n.mover=Ui('div',[Ui('div',[n.lineSpace],'CodeMirror-lines')],null,'position: relative'),n.sizer=Ui('div',[n.mover],'CodeMirror-sizer'),n.sizerWidth=null,n.heightForcer=Ui('div',null,null,'position: absolute; height: '+El+'px; width: 1px;'),n.gutters=Ui('div',null,'CodeMirror-gutters'),n.lineGutter=null,n.scroller=Ui('div',[n.sizer,n.heightForcer,n.gutters],'CodeMirror-scroll'),n.scroller.setAttribute('tabIndex','-1'),n.wrapper=Ui('div',[n.scrollbarFiller,n.gutterFiller,n.scroller],'CodeMirror'),bo&&8>wo&&(n.gutters.style.zIndex=-1,n.scroller.style.paddingRight=0),xo||vo&&Wo||(n.scroller.draggable=!0),e&&(e.appendChild?e.appendChild(n.wrapper):e(n.wrapper)),n.viewFrom=n.viewTo=t.first,n.reportedViewFrom=n.reportedViewTo=t.first,n.view=[],n.renderedView=null,n.externalMeasured=null,n.viewOffset=0,n.lastWrapHeight=n.lastWrapWidth=0,n.updateLineNumbers=null,n.nativeBarWidth=n.barHeight=n.barWidth=0,n.scrollbarsClipped=!1,n.lineNumWidth=n.lineNumInnerWidth=n.lineNumChars=null,n.alignWidgets=!1,n.cachedCharWidth=n.cachedTextHeight=n.cachedPaddingH=null,n.maxLine=null,n.maxLineLength=0,n.maxLineChanged=!1,n.wheelDX=n.wheelDY=n.wheelStartX=n.wheelStartY=null,n.shift=!1,n.selForContextMenu=null,n.activeTouch=null,r.init(n);}function r(t){t.doc.mode=e.getMode(t.options,t.doc.modeOption),n(t);}function n(e){e.doc.iter(function(e){e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null);}),e.doc.frontier=e.doc.first,Re(e,100),e.state.modeGen++,e.curOp&&Et(e);}function i(e){e.options.lineWrapping?(Ql(e.display.wrapper,'CodeMirror-wrap'),e.display.sizer.style.minWidth='',e.display.sizerWidth=null):(Zl(e.display.wrapper,'CodeMirror-wrap'),f(e)),l(e),Et(e),st(e),setTimeout(function(){y(e);},100);}function o(e){var t=yt(e.display),r=e.options.lineWrapping,n=r&&Math.max(5,e.display.scroller.clientWidth/bt(e.display)-3);return function(i){if(Cn(e.doc,i))return 0;var o=0;if(i.widgets)for(var l=0;l<i.widgets.length;l++)i.widgets[l].height&&(o+=i.widgets[l].height);return r?o+(Math.ceil(i.text.length/n)||1)*t:o+t;};}function l(e){var t=e.doc,r=o(e);t.iter(function(e){var t=r(e);t!=e.height&&ei(e,t);});}function s(e){e.display.wrapper.className=e.display.wrapper.className.replace(/\s*cm-s-\S+/g,'')+e.options.theme.replace(/(^|\s)\s*/g,' cm-s-'),st(e);}function a(e){u(e),Et(e),setTimeout(function(){x(e);},20);}function u(e){var t=e.display.gutters,r=e.options.gutters;Vi(t);for(var n=0;n<r.length;++n){var i=r[n],o=t.appendChild(Ui('div',null,'CodeMirror-gutter '+i));'CodeMirror-linenumbers'==i&&(e.display.lineGutter=o,o.style.width=(e.display.lineNumWidth||1)+'px');}t.style.display=n?'':'none',c(e);}function c(e){var t=e.display.gutters.offsetWidth;e.display.sizer.style.marginLeft=t+'px';}function h(e){if(0==e.height)return 0;for(var t,r=e.text.length,n=e;t=gn(n);){var i=t.find(0,!0);n=i.from.line,r+=i.from.ch-i.to.ch;}for(n=e;t=vn(n);){var i=t.find(0,!0);r-=n.text.length-i.from.ch,n=i.to.line,r+=n.text.length-i.to.ch;}return r;}function f(e){var t=e.display,r=e.doc;t.maxLine=Zn(r,r.first),t.maxLineLength=h(t.maxLine),t.maxLineChanged=!0,r.iter(function(e){var r=h(e);r>t.maxLineLength&&(t.maxLineLength=r,t.maxLine=e);});}function d(e){var t=Hi(e.gutters,'CodeMirror-linenumbers');-1==t&&e.lineNumbers?e.gutters=e.gutters.concat(['CodeMirror-linenumbers']):t>-1&&!e.lineNumbers&&(e.gutters=e.gutters.slice(0),e.gutters.splice(t,1));}function p(e){var t=e.display,r=t.gutters.offsetWidth,n=Math.round(e.doc.height+Ke(e.display));return{clientHeight:t.scroller.clientHeight,viewHeight:t.wrapper.clientHeight,scrollWidth:t.scroller.scrollWidth,clientWidth:t.scroller.clientWidth,viewWidth:t.wrapper.clientWidth,barLeft:e.options.fixedGutter?r:0,docHeight:n,scrollHeight:n+Xe(e)+t.barHeight,nativeBarWidth:t.nativeBarWidth,gutterWidth:r};}function g(e,t,r){this.cm=r;var n=this.vert=Ui('div',[Ui('div',null,null,'min-width: 1px')],'CodeMirror-vscrollbar'),i=this.horiz=Ui('div',[Ui('div',null,null,'height: 100%; min-height: 1px')],'CodeMirror-hscrollbar');e(n),e(i),Al(n,'scroll',function(){n.clientHeight&&t(n.scrollTop,'vertical');}),Al(i,'scroll',function(){i.clientWidth&&t(i.scrollLeft,'horizontal');}),this.checkedZeroWidth=!1,bo&&8>wo&&(this.horiz.style.minHeight=this.vert.style.minWidth='18px');}function v(){}function m(t){t.display.scrollbars&&(t.display.scrollbars.clear(),t.display.scrollbars.addClass&&Zl(t.display.wrapper,t.display.scrollbars.addClass)),t.display.scrollbars=new e.scrollbarModel[t.options.scrollbarStyle](function(e){t.display.wrapper.insertBefore(e,t.display.scrollbarFiller),Al(e,'mousedown',function(){t.state.focused&&setTimeout(function(){t.display.input.focus();},0);}),e.setAttribute('cm-not-content','true');},function(e,r){'horizontal'==r?ir(t,e):nr(t,e);},t),t.display.scrollbars.addClass&&Ql(t.display.wrapper,t.display.scrollbars.addClass);}function y(e,t){t||(t=p(e));var r=e.display.barWidth,n=e.display.barHeight;b(e,t);for(var i=0;4>i&&r!=e.display.barWidth||n!=e.display.barHeight;i++)r!=e.display.barWidth&&e.options.lineWrapping&&O(e),b(e,p(e)),r=e.display.barWidth,n=e.display.barHeight;}function b(e,t){var r=e.display,n=r.scrollbars.update(t);r.sizer.style.paddingRight=(r.barWidth=n.right)+'px',r.sizer.style.paddingBottom=(r.barHeight=n.bottom)+'px',r.heightForcer.style.borderBottom=n.bottom+'px solid transparent',n.right&&n.bottom?(r.scrollbarFiller.style.display='block',r.scrollbarFiller.style.height=n.bottom+'px',r.scrollbarFiller.style.width=n.right+'px'):r.scrollbarFiller.style.display='',n.bottom&&e.options.coverGutterNextToScrollbar&&e.options.fixedGutter?(r.gutterFiller.style.display='block',r.gutterFiller.style.height=n.bottom+'px',r.gutterFiller.style.width=t.gutterWidth+'px'):r.gutterFiller.style.display='';}function w(e,t,r){var n=r&&null!=r.top?Math.max(0,r.top):e.scroller.scrollTop;n=Math.floor(n-Ve(e));var i=r&&null!=r.bottom?r.bottom:n+e.wrapper.clientHeight,o=ri(t,n),l=ri(t,i);if(r&&r.ensure){var s=r.ensure.from.line,a=r.ensure.to.line;o>s?(o=s,l=ri(t,ni(Zn(t,s))+e.wrapper.clientHeight)):Math.min(a,t.lastLine())>=l&&(o=ri(t,ni(Zn(t,a))-e.wrapper.clientHeight),l=a);}return{from:o,to:Math.max(l,o+1)};}function x(e){var t=e.display,r=t.view;if(t.alignWidgets||t.gutters.firstChild&&e.options.fixedGutter){for(var n=L(t)-t.scroller.scrollLeft+e.doc.scrollLeft,i=t.gutters.offsetWidth,o=n+'px',l=0;l<r.length;l++)if(!r[l].hidden){e.options.fixedGutter&&r[l].gutter&&(r[l].gutter.style.left=o);var s=r[l].alignable;if(s)for(var a=0;a<s.length;a++)s[a].style.left=o;}e.options.fixedGutter&&(t.gutters.style.left=n+i+'px');}}function C(e){if(!e.options.lineNumbers)return!1;var t=e.doc,r=S(e.options,t.first+t.size-1),n=e.display;if(r.length!=n.lineNumChars){var i=n.measure.appendChild(Ui('div',[Ui('div',r)],'CodeMirror-linenumber CodeMirror-gutter-elt')),o=i.firstChild.offsetWidth,l=i.offsetWidth-o;return n.lineGutter.style.width='',n.lineNumInnerWidth=Math.max(o,n.lineGutter.offsetWidth-l)+1,n.lineNumWidth=n.lineNumInnerWidth+l,n.lineNumChars=n.lineNumInnerWidth?r.length:-1,n.lineGutter.style.width=n.lineNumWidth+'px',c(e),!0;}return!1;}function S(e,t){return String(e.lineNumberFormatter(t+e.firstLineNumber));}function L(e){return e.scroller.getBoundingClientRect().left-e.sizer.getBoundingClientRect().left;}function T(e,t,r){var n=e.display;this.viewport=t,this.visible=w(n,e.doc,t),this.editorIsHidden=!n.wrapper.offsetWidth,this.wrapperHeight=n.wrapper.clientHeight,this.wrapperWidth=n.wrapper.clientWidth,this.oldDisplayWidth=Ye(e),this.force=r,this.dims=H(e),this.events=[];}function k(e){var t=e.display;!t.scrollbarsClipped&&t.scroller.offsetWidth&&(t.nativeBarWidth=t.scroller.offsetWidth-t.scroller.clientWidth,t.heightForcer.style.height=Xe(e)+'px',t.sizer.style.marginBottom=-t.nativeBarWidth+'px',t.sizer.style.borderRightWidth=Xe(e)+'px',t.scrollbarsClipped=!0);}function M(e,t){var r=e.display,n=e.doc;if(t.editorIsHidden)return zt(e),!1;if(!t.force&&t.visible.from>=r.viewFrom&&t.visible.to<=r.viewTo&&(null==r.updateLineNumbers||r.updateLineNumbers>=r.viewTo)&&r.renderedView==r.view&&0==Gt(e))return!1;C(e)&&(zt(e),t.dims=H(e));var i=n.first+n.size,o=Math.max(t.visible.from-e.options.viewportMargin,n.first),l=Math.min(i,t.visible.to+e.options.viewportMargin);r.viewFrom<o&&o-r.viewFrom<20&&(o=Math.max(n.first,r.viewFrom)),r.viewTo>l&&r.viewTo-l<20&&(l=Math.min(i,r.viewTo)),zo&&(o=wn(e.doc,o),l=xn(e.doc,l));var s=o!=r.viewFrom||l!=r.viewTo||r.lastWrapHeight!=t.wrapperHeight||r.lastWrapWidth!=t.wrapperWidth;Bt(e,o,l),r.viewOffset=ni(Zn(e.doc,r.viewFrom)),e.display.mover.style.top=r.viewOffset+'px';var a=Gt(e);if(!s&&0==a&&!t.force&&r.renderedView==r.view&&(null==r.updateLineNumbers||r.updateLineNumbers>=r.viewTo))return!1;var u=ji();return a>4&&(r.lineDiv.style.display='none'),P(e,r.updateLineNumbers,t.dims),a>4&&(r.lineDiv.style.display=''),r.renderedView=r.view,u&&ji()!=u&&u.offsetHeight&&u.focus(),Vi(r.cursorDiv),Vi(r.selectionDiv),r.gutters.style.height=r.sizer.style.minHeight=0,s&&(r.lastWrapHeight=t.wrapperHeight,r.lastWrapWidth=t.wrapperWidth,Re(e,400)),r.updateLineNumbers=null,!0;}function N(e,t){for(var r=t.viewport,n=!0;(n&&e.options.lineWrapping&&t.oldDisplayWidth!=Ye(e)||(r&&null!=r.top&&(r={top:Math.min(e.doc.height+Ke(e.display)-_e(e),r.top)}),t.visible=w(e.display,e.doc,r),!(t.visible.from>=e.display.viewFrom&&t.visible.to<=e.display.viewTo)))&&M(e,t);n=!1){O(e);var i=p(e);Pe(e),y(e,i),A(e,i);}t.signal(e,'update',e),e.display.viewFrom==e.display.reportedViewFrom&&e.display.viewTo==e.display.reportedViewTo||(t.signal(e,'viewportChange',e,e.display.viewFrom,e.display.viewTo),e.display.reportedViewFrom=e.display.viewFrom,e.display.reportedViewTo=e.display.viewTo);}function W(e,t){var r=new T(e,t);if(M(e,r)){O(e),N(e,r);var n=p(e);Pe(e),y(e,n),A(e,n),r.finish();}}function A(e,t){e.display.sizer.style.minHeight=t.docHeight+'px',e.display.heightForcer.style.top=t.docHeight+'px',e.display.gutters.style.height=t.docHeight+e.display.barHeight+Xe(e)+'px';}function O(e){for(var t=e.display,r=t.lineDiv.offsetTop,n=0;n<t.view.length;n++){var i,o=t.view[n];if(!o.hidden){if(bo&&8>wo){var l=o.node.offsetTop+o.node.offsetHeight;i=l-r,r=l;}else{var s=o.node.getBoundingClientRect();i=s.bottom-s.top;}var a=o.line.height-i;if(2>i&&(i=yt(t)),(a>.001||-.001>a)&&(ei(o.line,i),D(o.line),o.rest))for(var u=0;u<o.rest.length;u++)D(o.rest[u]);}}}function D(e){if(e.widgets)for(var t=0;t<e.widgets.length;++t)e.widgets[t].height=e.widgets[t].node.parentNode.offsetHeight;}function H(e){for(var t=e.display,r={},n={},i=t.gutters.clientLeft,o=t.gutters.firstChild,l=0;o;o=o.nextSibling,++l)r[e.options.gutters[l]]=o.offsetLeft+o.clientLeft+i,n[e.options.gutters[l]]=o.clientWidth;return{fixedPos:L(t),gutterTotalWidth:t.gutters.offsetWidth,gutterLeft:r,gutterWidth:n,wrapperWidth:t.wrapper.clientWidth};}function P(e,t,r){function n(t){var r=t.nextSibling;return xo&&Ao&&e.display.currentWheelTarget==t?t.style.display='none':t.parentNode.removeChild(t),r;}for(var i=e.display,o=e.options.lineNumbers,l=i.lineDiv,s=l.firstChild,a=i.view,u=i.viewFrom,c=0;c<a.length;c++){var h=a[c];if(h.hidden);else if(h.node&&h.node.parentNode==l){for(;s!=h.node;)s=n(s);var f=o&&null!=t&&u>=t&&h.lineNumber;h.changes&&(Hi(h.changes,'gutter')>-1&&(f=!1),E(e,h,u,r)),f&&(Vi(h.lineNumber),h.lineNumber.appendChild(document.createTextNode(S(e.options,u)))),s=h.node.nextSibling;}else{var d=V(e,h,u,r);l.insertBefore(d,s);}u+=h.size;}for(;s;)s=n(s);}function E(e,t,r,n){for(var i=0;i<t.changes.length;i++){var o=t.changes[i];'text'==o?R(e,t):'gutter'==o?G(e,t,r,n):'class'==o?B(t):'widget'==o&&U(e,t,n);}t.changes=null;}function I(e){return e.node==e.text&&(e.node=Ui('div',null,null,'position: relative'),e.text.parentNode&&e.text.parentNode.replaceChild(e.node,e.text),e.node.appendChild(e.text),bo&&8>wo&&(e.node.style.zIndex=2)),e.node;}function z(e){var t=e.bgClass?e.bgClass+' '+(e.line.bgClass||''):e.line.bgClass;if(t&&(t+=' CodeMirror-linebackground'),e.background)t?e.background.className=t:(e.background.parentNode.removeChild(e.background),e.background=null);else if(t){var r=I(e);e.background=r.insertBefore(Ui('div',null,t),r.firstChild);}}function F(e,t){var r=e.display.externalMeasured;return r&&r.line==t.line?(e.display.externalMeasured=null,t.measure=r.measure,r.built):Fn(e,t);}function R(e,t){var r=t.text.className,n=F(e,t);t.text==t.node&&(t.node=n.pre),t.text.parentNode.replaceChild(n.pre,t.text),t.text=n.pre,n.bgClass!=t.bgClass||n.textClass!=t.textClass?(t.bgClass=n.bgClass,t.textClass=n.textClass,B(t)):r&&(t.text.className=r);}function B(e){z(e),e.line.wrapClass?I(e).className=e.line.wrapClass:e.node!=e.text&&(e.node.className='');var t=e.textClass?e.textClass+' '+(e.line.textClass||''):e.line.textClass;e.text.className=t||'';}function G(e,t,r,n){if(t.gutter&&(t.node.removeChild(t.gutter),t.gutter=null),t.gutterBackground&&(t.node.removeChild(t.gutterBackground),t.gutterBackground=null),t.line.gutterClass){var i=I(t);t.gutterBackground=Ui('div',null,'CodeMirror-gutter-background '+t.line.gutterClass,'left: '+(e.options.fixedGutter?n.fixedPos:-n.gutterTotalWidth)+'px; width: '+n.gutterTotalWidth+'px'),i.insertBefore(t.gutterBackground,t.text);}var o=t.line.gutterMarkers;if(e.options.lineNumbers||o){var i=I(t),l=t.gutter=Ui('div',null,'CodeMirror-gutter-wrapper','left: '+(e.options.fixedGutter?n.fixedPos:-n.gutterTotalWidth)+'px');if(e.display.input.setUneditable(l),i.insertBefore(l,t.text),t.line.gutterClass&&(l.className+=' '+t.line.gutterClass),!e.options.lineNumbers||o&&o['CodeMirror-linenumbers']||(t.lineNumber=l.appendChild(Ui('div',S(e.options,r),'CodeMirror-linenumber CodeMirror-gutter-elt','left: '+n.gutterLeft['CodeMirror-linenumbers']+'px; width: '+e.display.lineNumInnerWidth+'px'))),o)for(var s=0;s<e.options.gutters.length;++s){var a=e.options.gutters[s],u=o.hasOwnProperty(a)&&o[a];u&&l.appendChild(Ui('div',[u],'CodeMirror-gutter-elt','left: '+n.gutterLeft[a]+'px; width: '+n.gutterWidth[a]+'px'));}}}function U(e,t,r){t.alignable&&(t.alignable=null);for(var n,i=t.node.firstChild;i;i=n){var n=i.nextSibling;'CodeMirror-linewidget'==i.className&&t.node.removeChild(i);}K(e,t,r);}function V(e,t,r,n){var i=F(e,t);return t.text=t.node=i.pre,i.bgClass&&(t.bgClass=i.bgClass),i.textClass&&(t.textClass=i.textClass),B(t),G(e,t,r,n),K(e,t,n),t.node;}function K(e,t,r){if(j(e,t.line,t,r,!0),t.rest)for(var n=0;n<t.rest.length;n++)j(e,t.rest[n],t,r,!1);}function j(e,t,r,n,i){if(t.widgets)for(var o=I(r),l=0,s=t.widgets;l<s.length;++l){var a=s[l],u=Ui('div',[a.node],'CodeMirror-linewidget');a.handleMouseEvents||u.setAttribute('cm-ignore-events','true'),X(a,u,r,n),e.display.input.setUneditable(u),i&&a.above?o.insertBefore(u,r.gutter||r.text):o.appendChild(u),Li(a,'redraw');}}function X(e,t,r,n){if(e.noHScroll){(r.alignable||(r.alignable=[])).push(t);var i=n.wrapperWidth;t.style.left=n.fixedPos+'px',e.coverGutter||(i-=n.gutterTotalWidth,t.style.paddingLeft=n.gutterTotalWidth+'px'),t.style.width=i+'px';}e.coverGutter&&(t.style.zIndex=5,t.style.position='relative',e.noHScroll||(t.style.marginLeft=-n.gutterTotalWidth+'px'));}function Y(e){return Fo(e.line,e.ch);}function _(e,t){return Ro(e,t)<0?t:e;}function q(e,t){return Ro(e,t)<0?e:t;}function $(e){e.state.focused||(e.display.input.focus(),vr(e));}function Z(e,t,r,n,i){var o=e.doc;e.display.shift=!1,n||(n=o.sel);var l=e.state.pasteIncoming||'paste'==i,s=o.splitLines(t),a=null;if(l&&n.ranges.length>1)if(Bo&&Bo.text.join('\n')==t){if(n.ranges.length%Bo.text.length==0){a=[];for(var u=0;u<Bo.text.length;u++)a.push(o.splitLines(Bo.text[u]));}}else s.length==n.ranges.length&&(a=Pi(s,function(e){return[e];}));for(var u=n.ranges.length-1;u>=0;u--){var c=n.ranges[u],h=c.from(),f=c.to();c.empty()&&(r&&r>0?h=Fo(h.line,h.ch-r):e.state.overwrite&&!l?f=Fo(f.line,Math.min(Zn(o,f.line).text.length,f.ch+Di(s).length)):Bo&&Bo.lineWise&&Bo.text.join('\n')==t&&(h=f=Fo(h.line,0)));var d=e.curOp.updateInput,p={from:h,to:f,text:a?a[u%a.length]:s,origin:i||(l?'paste':e.state.cutIncoming?'cut':'+input')};Tr(e.doc,p),Li(e,'inputRead',e,p);}t&&!l&&J(e,t),zr(e),e.curOp.updateInput=d,e.curOp.typing=!0,e.state.pasteIncoming=e.state.cutIncoming=!1;}function Q(e,t){var r=e.clipboardData&&e.clipboardData.getData('text/plain');return r?(e.preventDefault(),t.isReadOnly()||t.options.disableInput||Wt(t,function(){Z(t,r,0,null,'paste');}),!0):void 0;}function J(e,t){if(e.options.electricChars&&e.options.smartIndent)for(var r=e.doc.sel,n=r.ranges.length-1;n>=0;n--){var i=r.ranges[n];if(!(i.head.ch>100||n&&r.ranges[n-1].head.line==i.head.line)){var o=e.getModeAt(i.head),l=!1;if(o.electricChars){for(var s=0;s<o.electricChars.length;s++)if(t.indexOf(o.electricChars.charAt(s))>-1){l=Rr(e,i.head.line,'smart');break;}}else o.electricInput&&o.electricInput.test(Zn(e.doc,i.head.line).text.slice(0,i.head.ch))&&(l=Rr(e,i.head.line,'smart'));l&&Li(e,'electricInput',e,i.head.line);}}}function ee(e){for(var t=[],r=[],n=0;n<e.doc.sel.ranges.length;n++){var i=e.doc.sel.ranges[n].head.line,o={anchor:Fo(i,0),head:Fo(i+1,0)};r.push(o),t.push(e.getRange(o.anchor,o.head));}return{text:t,ranges:r};}function te(e){e.setAttribute('autocorrect','off'),e.setAttribute('autocapitalize','off'),e.setAttribute('spellcheck','false');}function re(e){this.cm=e,this.prevInput='',this.pollingFast=!1,this.polling=new Ai,this.inaccurateSelection=!1,this.hasSelection=!1,this.composing=null;}function ne(){var e=Ui('textarea',null,null,'position: absolute; padding: 0; width: 1px; height: 1em; outline: none'),t=Ui('div',[e],null,'overflow: hidden; position: relative; width: 3px; height: 0px;');return xo?e.style.width='1000px':e.setAttribute('wrap','off'),No&&(e.style.border='1px solid black'),te(e),t;}function ie(e){this.cm=e,this.lastAnchorNode=this.lastAnchorOffset=this.lastFocusNode=this.lastFocusOffset=null,this.polling=new Ai,this.gracePeriod=!1;}function oe(e,t){var r=Je(e,t.line);if(!r||r.hidden)return null;var n=Zn(e.doc,t.line),i=$e(r,n,t.line),o=ii(n),l='left';if(o){var s=uo(o,t.ch);l=s%2?'right':'left';}var a=rt(i.map,t.ch,l);return a.offset='right'==a.collapse?a.end:a.start,a;}function le(e,t){return t&&(e.bad=!0),e;}function se(e,t,r){var n;if(t==e.display.lineDiv){if(n=e.display.lineDiv.childNodes[r],!n)return le(e.clipPos(Fo(e.display.viewTo-1)),!0);t=null,r=0;}else for(n=t;;n=n.parentNode){if(!n||n==e.display.lineDiv)return null;if(n.parentNode&&n.parentNode==e.display.lineDiv)break;}for(var i=0;i<e.display.view.length;i++){var o=e.display.view[i];if(o.node==n)return ae(o,t,r);}}function ae(e,t,r){function n(t,r,n){for(var i=-1;i<(c?c.length:0);i++)for(var o=0>i?u.map:c[i],l=0;l<o.length;l+=3){var s=o[l+2];if(s==t||s==r){var a=ti(0>i?e.line:e.rest[i]),h=o[l]+n;return(0>n||s!=t)&&(h=o[l+(n?1:0)]),Fo(a,h);}}}var i=e.text.firstChild,o=!1;if(!t||!_l(i,t))return le(Fo(ti(e.line),0),!0);if(t==i&&(o=!0,t=i.childNodes[r],r=0,!t)){var l=e.rest?Di(e.rest):e.line;return le(Fo(ti(l),l.text.length),o);}var s=3==t.nodeType?t:null,a=t;for(s||1!=t.childNodes.length||3!=t.firstChild.nodeType||(s=t.firstChild,r&&(r=s.nodeValue.length));a.parentNode!=i;)a=a.parentNode;var u=e.measure,c=u.maps,h=n(s,a,r);if(h)return le(h,o);for(var f=a.nextSibling,d=s?s.nodeValue.length-r:0;f;f=f.nextSibling){if(h=n(f,f.firstChild,0))return le(Fo(h.line,h.ch-d),o);d+=f.textContent.length;}for(var p=a.previousSibling,d=r;p;p=p.previousSibling){if(h=n(p,p.firstChild,-1))return le(Fo(h.line,h.ch+d),o);d+=f.textContent.length;}}function ue(e,t,r,n,i){function o(e){return function(t){return t.id==e;};}function l(t){if(1==t.nodeType){var r=t.getAttribute('cm-text');if(null!=r)return''==r&&(r=t.textContent.replace(/\u200b/g,'')),void(s+=r);var c,h=t.getAttribute('cm-marker');if(h){var f=e.findMarks(Fo(n,0),Fo(i+1,0),o(+h));return void(f.length&&(c=f[0].find())&&(s+=Qn(e.doc,c.from,c.to).join(u)));}if('false'==t.getAttribute('contenteditable'))return;for(var d=0;d<t.childNodes.length;d++)l(t.childNodes[d]);/^(pre|div|p)$/i.test(t.nodeName)&&(a=!0);}else if(3==t.nodeType){var p=t.nodeValue;if(!p)return;a&&(s+=u,a=!1),s+=p;}}for(var s='',a=!1,u=e.doc.lineSeparator();l(t),t!=r;)t=t.nextSibling;return s;}function ce(e,t){this.ranges=e,this.primIndex=t;}function he(e,t){this.anchor=e,this.head=t;}function fe(e,t){var r=e[t];e.sort(function(e,t){return Ro(e.from(),t.from());}),t=Hi(e,r);for(var n=1;n<e.length;n++){var i=e[n],o=e[n-1];if(Ro(o.to(),i.from())>=0){var l=q(o.from(),i.from()),s=_(o.to(),i.to()),a=o.empty()?i.from()==i.head:o.from()==o.head;t>=n&&--t,e.splice(--n,2,new he(a?s:l,a?l:s));}}return new ce(e,t);}function de(e,t){return new ce([new he(e,t||e)],0);}function pe(e,t){return Math.max(e.first,Math.min(t,e.first+e.size-1));}function ge(e,t){if(t.line<e.first)return Fo(e.first,0);var r=e.first+e.size-1;return t.line>r?Fo(r,Zn(e,r).text.length):ve(t,Zn(e,t.line).text.length);}function ve(e,t){var r=e.ch;return null==r||r>t?Fo(e.line,t):0>r?Fo(e.line,0):e;}function me(e,t){return t>=e.first&&t<e.first+e.size;}function ye(e,t){for(var r=[],n=0;n<t.length;n++)r[n]=ge(e,t[n]);return r;}function be(e,t,r,n){if(e.cm&&e.cm.display.shift||e.extend){var i=t.anchor;if(n){var o=Ro(r,i)<0;o!=Ro(n,i)<0?(i=r,r=n):o!=Ro(r,n)<0&&(r=n);}return new he(i,r);}return new he(n||r,r);}function we(e,t,r,n){ke(e,new ce([be(e,e.sel.primary(),t,r)],0),n);}function xe(e,t,r){for(var n=[],i=0;i<e.sel.ranges.length;i++)n[i]=be(e,e.sel.ranges[i],t[i],null);var o=fe(n,e.sel.primIndex);ke(e,o,r);}function Ce(e,t,r,n){var i=e.sel.ranges.slice(0);i[t]=r,ke(e,fe(i,e.sel.primIndex),n);}function Se(e,t,r,n){ke(e,de(t,r),n);}function Le(e,t,r){var n={ranges:t.ranges,update:function(t){this.ranges=[];for(var r=0;r<t.length;r++)this.ranges[r]=new he(ge(e,t[r].anchor),ge(e,t[r].head));},origin:r&&r.origin};return Hl(e,'beforeSelectionChange',e,n),e.cm&&Hl(e.cm,'beforeSelectionChange',e.cm,n),n.ranges!=t.ranges?fe(n.ranges,n.ranges.length-1):t;}function Te(e,t,r){var n=e.history.done,i=Di(n);i&&i.ranges?(n[n.length-1]=t,Me(e,t,r)):ke(e,t,r);}function ke(e,t,r){Me(e,t,r),hi(e,e.sel,e.cm?e.cm.curOp.id:NaN,r);}function Me(e,t,r){(Ni(e,'beforeSelectionChange')||e.cm&&Ni(e.cm,'beforeSelectionChange'))&&(t=Le(e,t,r));var n=r&&r.bias||(Ro(t.primary().head,e.sel.primary().head)<0?-1:1);Ne(e,Ae(e,t,n,!0)),r&&r.scroll===!1||!e.cm||zr(e.cm);}function Ne(e,t){t.equals(e.sel)||(e.sel=t,e.cm&&(e.cm.curOp.updateInput=e.cm.curOp.selectionChanged=!0,Mi(e.cm)),Li(e,'cursorActivity',e));}function We(e){Ne(e,Ae(e,e.sel,null,!1),zl);}function Ae(e,t,r,n){for(var i,o=0;o<t.ranges.length;o++){var l=t.ranges[o],s=t.ranges.length==e.sel.ranges.length&&e.sel.ranges[o],a=De(e,l.anchor,s&&s.anchor,r,n),u=De(e,l.head,s&&s.head,r,n);(i||a!=l.anchor||u!=l.head)&&(i||(i=t.ranges.slice(0,o)),i[o]=new he(a,u));}return i?fe(i,t.primIndex):t;}function Oe(e,t,r,n,i){var o=Zn(e,t.line);if(o.markedSpans)for(var l=0;l<o.markedSpans.length;++l){var s=o.markedSpans[l],a=s.marker;if((null==s.from||(a.inclusiveLeft?s.from<=t.ch:s.from<t.ch))&&(null==s.to||(a.inclusiveRight?s.to>=t.ch:s.to>t.ch))){if(i&&(Hl(a,'beforeCursorEnter'),a.explicitlyCleared)){if(o.markedSpans){--l;continue;}break;}if(!a.atomic)continue;if(r){var u,c=a.find(0>n?1:-1);if((0>n?a.inclusiveRight:a.inclusiveLeft)&&(c=He(e,c,-n,c&&c.line==t.line?o:null)),c&&c.line==t.line&&(u=Ro(c,r))&&(0>n?0>u:u>0))return Oe(e,c,t,n,i);}var h=a.find(0>n?-1:1);return(0>n?a.inclusiveLeft:a.inclusiveRight)&&(h=He(e,h,n,h.line==t.line?o:null)),h?Oe(e,h,t,n,i):null;}}return t;}function De(e,t,r,n,i){var o=n||1,l=Oe(e,t,r,o,i)||!i&&Oe(e,t,r,o,!0)||Oe(e,t,r,-o,i)||!i&&Oe(e,t,r,-o,!0);return l?l:(e.cantEdit=!0,Fo(e.first,0));}function He(e,t,r,n){return 0>r&&0==t.ch?t.line>e.first?ge(e,Fo(t.line-1)):null:r>0&&t.ch==(n||Zn(e,t.line)).text.length?t.line<e.first+e.size-1?Fo(t.line+1,0):null:new Fo(t.line,t.ch+r);}function Pe(e){e.display.input.showSelection(e.display.input.prepareSelection());}function Ee(e,t){for(var r=e.doc,n={},i=n.cursors=document.createDocumentFragment(),o=n.selection=document.createDocumentFragment(),l=0;l<r.sel.ranges.length;l++)if(t!==!1||l!=r.sel.primIndex){var s=r.sel.ranges[l];if(!(s.from().line>=e.display.viewTo||s.to().line<e.display.viewFrom)){var a=s.empty();(a||e.options.showCursorWhenSelecting)&&Ie(e,s.head,i),a||ze(e,s,o);}}return n;}function Ie(e,t,r){var n=dt(e,t,'div',null,null,!e.options.singleCursorHeightPerLine),i=r.appendChild(Ui('div',' ','CodeMirror-cursor'));if(i.style.left=n.left+'px',i.style.top=n.top+'px',i.style.height=Math.max(0,n.bottom-n.top)*e.options.cursorHeight+'px',n.other){var o=r.appendChild(Ui('div',' ','CodeMirror-cursor CodeMirror-secondarycursor'));o.style.display='',o.style.left=n.other.left+'px',o.style.top=n.other.top+'px',o.style.height=.85*(n.other.bottom-n.other.top)+'px';}}function ze(e,t,r){function n(e,t,r,n){0>t&&(t=0),t=Math.round(t),n=Math.round(n),s.appendChild(Ui('div',null,'CodeMirror-selected','position: absolute; left: '+e+'px; top: '+t+'px; width: '+(null==r?c-e:r)+'px; height: '+(n-t)+'px'));}function i(t,r,i){function o(r,n){return ft(e,Fo(t,r),'div',h,n);}var s,a,h=Zn(l,t),f=h.text.length;return eo(ii(h),r||0,null==i?f:i,function(e,t,l){var h,d,p,g=o(e,'left');if(e==t)h=g,d=p=g.left;else{if(h=o(t-1,'right'),'rtl'==l){var v=g;g=h,h=v;}d=g.left,p=h.right;}null==r&&0==e&&(d=u),h.top-g.top>3&&(n(d,g.top,null,g.bottom),d=u,g.bottom<h.top&&n(d,g.bottom,null,h.top)),null==i&&t==f&&(p=c),(!s||g.top<s.top||g.top==s.top&&g.left<s.left)&&(s=g),(!a||h.bottom>a.bottom||h.bottom==a.bottom&&h.right>a.right)&&(a=h),u+1>d&&(d=u),n(d,h.top,p-d,h.bottom);}),{start:s,end:a};}var o=e.display,l=e.doc,s=document.createDocumentFragment(),a=je(e.display),u=a.left,c=Math.max(o.sizerWidth,Ye(e)-o.sizer.offsetLeft)-a.right,h=t.from(),f=t.to();if(h.line==f.line)i(h.line,h.ch,f.ch);else{var d=Zn(l,h.line),p=Zn(l,f.line),g=yn(d)==yn(p),v=i(h.line,h.ch,g?d.text.length+1:null).end,m=i(f.line,g?0:null,f.ch).start;g&&(v.top<m.top-2?(n(v.right,v.top,null,v.bottom),n(u,m.top,m.left,m.bottom)):n(v.right,v.top,m.left-v.right,v.bottom)),v.bottom<m.top&&n(u,v.bottom,null,m.top);}r.appendChild(s);}function Fe(e){if(e.state.focused){var t=e.display;clearInterval(t.blinker);var r=!0;t.cursorDiv.style.visibility='',e.options.cursorBlinkRate>0?t.blinker=setInterval(function(){t.cursorDiv.style.visibility=(r=!r)?'':'hidden';},e.options.cursorBlinkRate):e.options.cursorBlinkRate<0&&(t.cursorDiv.style.visibility='hidden');}}function Re(e,t){e.doc.mode.startState&&e.doc.frontier<e.display.viewTo&&e.state.highlight.set(t,Fi(Be,e));}function Be(e){var t=e.doc;if(t.frontier<t.first&&(t.frontier=t.first),!(t.frontier>=e.display.viewTo)){var r=+new Date+e.options.workTime,n=al(t.mode,Ue(e,t.frontier)),i=[];t.iter(t.frontier,Math.min(t.first+t.size,e.display.viewTo+500),function(o){if(t.frontier>=e.display.viewFrom){var l=o.styles,s=o.text.length>e.options.maxHighlightLength,a=Pn(e,o,s?al(t.mode,n):n,!0);o.styles=a.styles;var u=o.styleClasses,c=a.classes;c?o.styleClasses=c:u&&(o.styleClasses=null);for(var h=!l||l.length!=o.styles.length||u!=c&&(!u||!c||u.bgClass!=c.bgClass||u.textClass!=c.textClass),f=0;!h&&f<l.length;++f)h=l[f]!=o.styles[f];h&&i.push(t.frontier),o.stateAfter=s?n:al(t.mode,n);}else o.text.length<=e.options.maxHighlightLength&&In(e,o.text,n),o.stateAfter=t.frontier%5==0?al(t.mode,n):null;return++t.frontier,+new Date>r?(Re(e,e.options.workDelay),!0):void 0;}),i.length&&Wt(e,function(){for(var t=0;t<i.length;t++)It(e,i[t],'text');});}}function Ge(e,t,r){for(var n,i,o=e.doc,l=r?-1:t-(e.doc.mode.innerMode?1e3:100),s=t;s>l;--s){if(s<=o.first)return o.first;var a=Zn(o,s-1);if(a.stateAfter&&(!r||s<=o.frontier))return s;var u=Bl(a.text,null,e.options.tabSize);(null==i||n>u)&&(i=s-1,n=u);}return i;}function Ue(e,t,r){var n=e.doc,i=e.display;if(!n.mode.startState)return!0;var o=Ge(e,t,r),l=o>n.first&&Zn(n,o-1).stateAfter;return l=l?al(n.mode,l):ul(n.mode),n.iter(o,t,function(r){In(e,r.text,l);var s=o==t-1||o%5==0||o>=i.viewFrom&&o<i.viewTo;r.stateAfter=s?al(n.mode,l):null,++o;}),r&&(n.frontier=o),l;}function Ve(e){return e.lineSpace.offsetTop;}function Ke(e){return e.mover.offsetHeight-e.lineSpace.offsetHeight;}function je(e){if(e.cachedPaddingH)return e.cachedPaddingH;var t=Ki(e.measure,Ui('pre','x')),r=window.getComputedStyle?window.getComputedStyle(t):t.currentStyle,n={left:parseInt(r.paddingLeft),right:parseInt(r.paddingRight)};return isNaN(n.left)||isNaN(n.right)||(e.cachedPaddingH=n),n;}function Xe(e){return El-e.display.nativeBarWidth;}function Ye(e){return e.display.scroller.clientWidth-Xe(e)-e.display.barWidth;}function _e(e){return e.display.scroller.clientHeight-Xe(e)-e.display.barHeight;}function qe(e,t,r){var n=e.options.lineWrapping,i=n&&Ye(e);if(!t.measure.heights||n&&t.measure.width!=i){var o=t.measure.heights=[];if(n){t.measure.width=i;for(var l=t.text.firstChild.getClientRects(),s=0;s<l.length-1;s++){var a=l[s],u=l[s+1];Math.abs(a.bottom-u.bottom)>2&&o.push((a.bottom+u.top)/2-r.top);}}o.push(r.bottom-r.top);}}function $e(e,t,r){if(e.line==t)return{map:e.measure.map,cache:e.measure.cache};for(var n=0;n<e.rest.length;n++)if(e.rest[n]==t)return{map:e.measure.maps[n],cache:e.measure.caches[n]};for(var n=0;n<e.rest.length;n++)if(ti(e.rest[n])>r)return{map:e.measure.maps[n],cache:e.measure.caches[n],before:!0};}function Ze(e,t){t=yn(t);var r=ti(t),n=e.display.externalMeasured=new Ht(e.doc,t,r);n.lineN=r;var i=n.built=Fn(e,n);return n.text=i.pre,Ki(e.display.lineMeasure,i.pre),n;}function Qe(e,t,r,n){return tt(e,et(e,t),r,n);}function Je(e,t){if(t>=e.display.viewFrom&&t<e.display.viewTo)return e.display.view[Ft(e,t)];var r=e.display.externalMeasured;return r&&t>=r.lineN&&t<r.lineN+r.size?r:void 0;}function et(e,t){var r=ti(t),n=Je(e,r);n&&!n.text?n=null:n&&n.changes&&(E(e,n,r,H(e)),e.curOp.forceUpdate=!0),n||(n=Ze(e,t));var i=$e(n,t,r);return{line:t,view:n,rect:null,map:i.map,cache:i.cache,before:i.before,hasHeights:!1};}function tt(e,t,r,n,i){t.before&&(r=-1);var o,l=r+(n||'');return t.cache.hasOwnProperty(l)?o=t.cache[l]:(t.rect||(t.rect=t.view.text.getBoundingClientRect()),t.hasHeights||(qe(e,t.view,t.rect),t.hasHeights=!0),o=nt(e,t,r,n),o.bogus||(t.cache[l]=o)),{left:o.left,right:o.right,top:i?o.rtop:o.top,bottom:i?o.rbottom:o.bottom};}function rt(e,t,r){for(var n,i,o,l,s=0;s<e.length;s+=3){var a=e[s],u=e[s+1];if(a>t?(i=0,o=1,l='left'):u>t?(i=t-a,
	o=i+1):(s==e.length-3||t==u&&e[s+3]>t)&&(o=u-a,i=o-1,t>=u&&(l='right')),null!=i){if(n=e[s+2],a==u&&r==(n.insertLeft?'left':'right')&&(l=r),'left'==r&&0==i)for(;s&&e[s-2]==e[s-3]&&e[s-1].insertLeft;)n=e[(s-=3)+2],l='left';if('right'==r&&i==u-a)for(;s<e.length-3&&e[s+3]==e[s+4]&&!e[s+5].insertLeft;)n=e[(s+=3)+2],l='right';break;}}return{node:n,start:i,end:o,collapse:l,coverStart:a,coverEnd:u};}function nt(e,t,r,n){var i,o=rt(t.map,r,n),l=o.node,s=o.start,a=o.end,u=o.collapse;if(3==l.nodeType){for(var c=0;4>c;c++){for(;s&&Gi(t.line.text.charAt(o.coverStart+s));)--s;for(;o.coverStart+a<o.coverEnd&&Gi(t.line.text.charAt(o.coverStart+a));)++a;if(bo&&9>wo&&0==s&&a==o.coverEnd-o.coverStart)i=l.parentNode.getBoundingClientRect();else if(bo&&e.options.lineWrapping){var h=Kl(l,s,a).getClientRects();i=h.length?h['right'==n?h.length-1:0]:Ko;}else i=Kl(l,s,a).getBoundingClientRect()||Ko;if(i.left||i.right||0==s)break;a=s,s-=1,u='right';}bo&&11>wo&&(i=it(e.display.measure,i));}else{s>0&&(u=n='right');var h;i=e.options.lineWrapping&&(h=l.getClientRects()).length>1?h['right'==n?h.length-1:0]:l.getBoundingClientRect();}if(bo&&9>wo&&!s&&(!i||!i.left&&!i.right)){var f=l.parentNode.getClientRects()[0];i=f?{left:f.left,right:f.left+bt(e.display),top:f.top,bottom:f.bottom}:Ko;}for(var d=i.top-t.rect.top,p=i.bottom-t.rect.top,g=(d+p)/2,v=t.view.measure.heights,c=0;c<v.length-1&&!(g<v[c]);c++);var m=c?v[c-1]:0,y=v[c],b={left:('right'==u?i.right:i.left)-t.rect.left,right:('left'==u?i.left:i.right)-t.rect.left,top:m,bottom:y};return i.left||i.right||(b.bogus=!0),e.options.singleCursorHeightPerLine||(b.rtop=d,b.rbottom=p),b;}function it(e,t){if(!window.screen||null==screen.logicalXDPI||screen.logicalXDPI==screen.deviceXDPI||!Ji(e))return t;var r=screen.logicalXDPI/screen.deviceXDPI,n=screen.logicalYDPI/screen.deviceYDPI;return{left:t.left*r,right:t.right*r,top:t.top*n,bottom:t.bottom*n};}function ot(e){if(e.measure&&(e.measure.cache={},e.measure.heights=null,e.rest))for(var t=0;t<e.rest.length;t++)e.measure.caches[t]={};}function lt(e){e.display.externalMeasure=null,Vi(e.display.lineMeasure);for(var t=0;t<e.display.view.length;t++)ot(e.display.view[t]);}function st(e){lt(e),e.display.cachedCharWidth=e.display.cachedTextHeight=e.display.cachedPaddingH=null,e.options.lineWrapping||(e.display.maxLineChanged=!0),e.display.lineNumChars=null;}function at(){return window.pageXOffset||(document.documentElement||document.body).scrollLeft;}function ut(){return window.pageYOffset||(document.documentElement||document.body).scrollTop;}function ct(e,t,r,n){if(t.widgets)for(var i=0;i<t.widgets.length;++i)if(t.widgets[i].above){var o=Tn(t.widgets[i]);r.top+=o,r.bottom+=o;}if('line'==n)return r;n||(n='local');var l=ni(t);if('local'==n?l+=Ve(e.display):l-=e.display.viewOffset,'page'==n||'window'==n){var s=e.display.lineSpace.getBoundingClientRect();l+=s.top+('window'==n?0:ut());var a=s.left+('window'==n?0:at());r.left+=a,r.right+=a;}return r.top+=l,r.bottom+=l,r;}function ht(e,t,r){if('div'==r)return t;var n=t.left,i=t.top;if('page'==r)n-=at(),i-=ut();else if('local'==r||!r){var o=e.display.sizer.getBoundingClientRect();n+=o.left,i+=o.top;}var l=e.display.lineSpace.getBoundingClientRect();return{left:n-l.left,top:i-l.top};}function ft(e,t,r,n,i){return n||(n=Zn(e.doc,t.line)),ct(e,n,Qe(e,n,t.ch,i),r);}function dt(e,t,r,n,i,o){function l(t,l){var s=tt(e,i,t,l?'right':'left',o);return l?s.left=s.right:s.right=s.left,ct(e,n,s,r);}function s(e,t){var r=a[t],n=r.level%2;return e==to(r)&&t&&r.level<a[t-1].level?(r=a[--t],e=ro(r)-(r.level%2?0:1),n=!0):e==ro(r)&&t<a.length-1&&r.level<a[t+1].level&&(r=a[++t],e=to(r)-r.level%2,n=!1),n&&e==r.to&&e>r.from?l(e-1):l(e,n);}n=n||Zn(e.doc,t.line),i||(i=et(e,n));var a=ii(n),u=t.ch;if(!a)return l(u);var c=uo(a,u),h=s(u,c);return null!=ls&&(h.other=s(u,ls)),h;}function pt(e,t){var r=0,t=ge(e.doc,t);e.options.lineWrapping||(r=bt(e.display)*t.ch);var n=Zn(e.doc,t.line),i=ni(n)+Ve(e.display);return{left:r,right:r,top:i,bottom:i+n.height};}function gt(e,t,r,n){var i=Fo(e,t);return i.xRel=n,r&&(i.outside=!0),i;}function vt(e,t,r){var n=e.doc;if(r+=e.display.viewOffset,0>r)return gt(n.first,0,!0,-1);var i=ri(n,r),o=n.first+n.size-1;if(i>o)return gt(n.first+n.size-1,Zn(n,o).text.length,!0,1);0>t&&(t=0);for(var l=Zn(n,i);;){var s=mt(e,l,i,t,r),a=vn(l),u=a&&a.find(0,!0);if(!a||!(s.ch>u.from.ch||s.ch==u.from.ch&&s.xRel>0))return s;i=ti(l=u.to.line);}}function mt(e,t,r,n,i){function o(n){var i=dt(e,Fo(r,n),'line',t,u);return s=!0,l>i.bottom?i.left-a:l<i.top?i.left+a:(s=!1,i.left);}var l=i-ni(t),s=!1,a=2*e.display.wrapper.clientWidth,u=et(e,t),c=ii(t),h=t.text.length,f=no(t),d=io(t),p=o(f),g=s,v=o(d),m=s;if(n>v)return gt(r,d,m,1);for(;;){if(c?d==f||d==ho(t,f,1):1>=d-f){for(var y=p>n||v-n>=n-p?f:d,b=n-(y==f?p:v);Gi(t.text.charAt(y));)++y;var w=gt(r,y,y==f?g:m,-1>b?-1:b>1?1:0);return w;}var x=Math.ceil(h/2),C=f+x;if(c){C=f;for(var S=0;x>S;++S)C=ho(t,C,1);}var L=o(C);L>n?(d=C,v=L,(m=s)&&(v+=1e3),h=x):(f=C,p=L,g=s,h-=x);}}function yt(e){if(null!=e.cachedTextHeight)return e.cachedTextHeight;if(null==Go){Go=Ui('pre');for(var t=0;49>t;++t)Go.appendChild(document.createTextNode('x')),Go.appendChild(Ui('br'));Go.appendChild(document.createTextNode('x'));}Ki(e.measure,Go);var r=Go.offsetHeight/50;return r>3&&(e.cachedTextHeight=r),Vi(e.measure),r||1;}function bt(e){if(null!=e.cachedCharWidth)return e.cachedCharWidth;var t=Ui('span','xxxxxxxxxx'),r=Ui('pre',[t]);Ki(e.measure,r);var n=t.getBoundingClientRect(),i=(n.right-n.left)/10;return i>2&&(e.cachedCharWidth=i),i||10;}function wt(e){e.curOp={cm:e,viewChanged:!1,startHeight:e.doc.height,forceUpdate:!1,updateInput:null,typing:!1,changeObjs:null,cursorActivityHandlers:null,cursorActivityCalled:0,selectionChanged:!1,updateMaxLine:!1,scrollLeft:null,scrollTop:null,scrollToPos:null,focus:!1,id:++Xo},jo?jo.ops.push(e.curOp):e.curOp.ownsGroup=jo={ops:[e.curOp],delayedCallbacks:[]};}function xt(e){var t=e.delayedCallbacks,r=0;do{for(;r<t.length;r++)t[r].call(null);for(var n=0;n<e.ops.length;n++){var i=e.ops[n];if(i.cursorActivityHandlers)for(;i.cursorActivityCalled<i.cursorActivityHandlers.length;)i.cursorActivityHandlers[i.cursorActivityCalled++].call(null,i.cm);}}while(r<t.length);}function Ct(e){var t=e.curOp,r=t.ownsGroup;if(r)try{xt(r);}finally{jo=null;for(var n=0;n<r.ops.length;n++)r.ops[n].cm.curOp=null;St(r);}}function St(e){for(var t=e.ops,r=0;r<t.length;r++)Lt(t[r]);for(var r=0;r<t.length;r++)Tt(t[r]);for(var r=0;r<t.length;r++)kt(t[r]);for(var r=0;r<t.length;r++)Mt(t[r]);for(var r=0;r<t.length;r++)Nt(t[r]);}function Lt(e){var t=e.cm,r=t.display;k(t),e.updateMaxLine&&f(t),e.mustUpdate=e.viewChanged||e.forceUpdate||null!=e.scrollTop||e.scrollToPos&&(e.scrollToPos.from.line<r.viewFrom||e.scrollToPos.to.line>=r.viewTo)||r.maxLineChanged&&t.options.lineWrapping,e.update=e.mustUpdate&&new T(t,e.mustUpdate&&{top:e.scrollTop,ensure:e.scrollToPos},e.forceUpdate);}function Tt(e){e.updatedDisplay=e.mustUpdate&&M(e.cm,e.update);}function kt(e){var t=e.cm,r=t.display;e.updatedDisplay&&O(t),e.barMeasure=p(t),r.maxLineChanged&&!t.options.lineWrapping&&(e.adjustWidthTo=Qe(t,r.maxLine,r.maxLine.text.length).left+3,t.display.sizerWidth=e.adjustWidthTo,e.barMeasure.scrollWidth=Math.max(r.scroller.clientWidth,r.sizer.offsetLeft+e.adjustWidthTo+Xe(t)+t.display.barWidth),e.maxScrollLeft=Math.max(0,r.sizer.offsetLeft+e.adjustWidthTo-Ye(t))),(e.updatedDisplay||e.selectionChanged)&&(e.preparedSelection=r.input.prepareSelection(e.focus));}function Mt(e){var t=e.cm;null!=e.adjustWidthTo&&(t.display.sizer.style.minWidth=e.adjustWidthTo+'px',e.maxScrollLeft<t.doc.scrollLeft&&ir(t,Math.min(t.display.scroller.scrollLeft,e.maxScrollLeft),!0),t.display.maxLineChanged=!1);var r=e.focus&&e.focus==ji()&&(!document.hasFocus||document.hasFocus());e.preparedSelection&&t.display.input.showSelection(e.preparedSelection,r),(e.updatedDisplay||e.startHeight!=t.doc.height)&&y(t,e.barMeasure),e.updatedDisplay&&A(t,e.barMeasure),e.selectionChanged&&Fe(t),t.state.focused&&e.updateInput&&t.display.input.reset(e.typing),r&&$(e.cm);}function Nt(e){var t=e.cm,r=t.display,n=t.doc;if(e.updatedDisplay&&N(t,e.update),null==r.wheelStartX||null==e.scrollTop&&null==e.scrollLeft&&!e.scrollToPos||(r.wheelStartX=r.wheelStartY=null),null==e.scrollTop||r.scroller.scrollTop==e.scrollTop&&!e.forceScroll||(n.scrollTop=Math.max(0,Math.min(r.scroller.scrollHeight-r.scroller.clientHeight,e.scrollTop)),r.scrollbars.setScrollTop(n.scrollTop),r.scroller.scrollTop=n.scrollTop),null==e.scrollLeft||r.scroller.scrollLeft==e.scrollLeft&&!e.forceScroll||(n.scrollLeft=Math.max(0,Math.min(r.scroller.scrollWidth-r.scroller.clientWidth,e.scrollLeft)),r.scrollbars.setScrollLeft(n.scrollLeft),r.scroller.scrollLeft=n.scrollLeft,x(t)),e.scrollToPos){var i=Hr(t,ge(n,e.scrollToPos.from),ge(n,e.scrollToPos.to),e.scrollToPos.margin);e.scrollToPos.isCursor&&t.state.focused&&Dr(t,i);}var o=e.maybeHiddenMarkers,l=e.maybeUnhiddenMarkers;if(o)for(var s=0;s<o.length;++s)o[s].lines.length||Hl(o[s],'hide');if(l)for(var s=0;s<l.length;++s)l[s].lines.length&&Hl(l[s],'unhide');r.wrapper.offsetHeight&&(n.scrollTop=t.display.scroller.scrollTop),e.changeObjs&&Hl(t,'changes',t,e.changeObjs),e.update&&e.update.finish();}function Wt(e,t){if(e.curOp)return t();wt(e);try{return t();}finally{Ct(e);}}function At(e,t){return function(){if(e.curOp)return t.apply(e,arguments);wt(e);try{return t.apply(e,arguments);}finally{Ct(e);}};}function Ot(e){return function(){if(this.curOp)return e.apply(this,arguments);wt(this);try{return e.apply(this,arguments);}finally{Ct(this);}};}function Dt(e){return function(){var t=this.cm;if(!t||t.curOp)return e.apply(this,arguments);wt(t);try{return e.apply(this,arguments);}finally{Ct(t);}};}function Ht(e,t,r){this.line=t,this.rest=bn(t),this.size=this.rest?ti(Di(this.rest))-r+1:1,this.node=this.text=null,this.hidden=Cn(e,t);}function Pt(e,t,r){for(var n,i=[],o=t;r>o;o=n){var l=new Ht(e.doc,Zn(e.doc,o),o);n=o+l.size,i.push(l);}return i;}function Et(e,t,r,n){null==t&&(t=e.doc.first),null==r&&(r=e.doc.first+e.doc.size),n||(n=0);var i=e.display;if(n&&r<i.viewTo&&(null==i.updateLineNumbers||i.updateLineNumbers>t)&&(i.updateLineNumbers=t),e.curOp.viewChanged=!0,t>=i.viewTo)zo&&wn(e.doc,t)<i.viewTo&&zt(e);else if(r<=i.viewFrom)zo&&xn(e.doc,r+n)>i.viewFrom?zt(e):(i.viewFrom+=n,i.viewTo+=n);else if(t<=i.viewFrom&&r>=i.viewTo)zt(e);else if(t<=i.viewFrom){var o=Rt(e,r,r+n,1);o?(i.view=i.view.slice(o.index),i.viewFrom=o.lineN,i.viewTo+=n):zt(e);}else if(r>=i.viewTo){var o=Rt(e,t,t,-1);o?(i.view=i.view.slice(0,o.index),i.viewTo=o.lineN):zt(e);}else{var l=Rt(e,t,t,-1),s=Rt(e,r,r+n,1);l&&s?(i.view=i.view.slice(0,l.index).concat(Pt(e,l.lineN,s.lineN)).concat(i.view.slice(s.index)),i.viewTo+=n):zt(e);}var a=i.externalMeasured;a&&(r<a.lineN?a.lineN+=n:t<a.lineN+a.size&&(i.externalMeasured=null));}function It(e,t,r){e.curOp.viewChanged=!0;var n=e.display,i=e.display.externalMeasured;if(i&&t>=i.lineN&&t<i.lineN+i.size&&(n.externalMeasured=null),!(t<n.viewFrom||t>=n.viewTo)){var o=n.view[Ft(e,t)];if(null!=o.node){var l=o.changes||(o.changes=[]);-1==Hi(l,r)&&l.push(r);}}}function zt(e){e.display.viewFrom=e.display.viewTo=e.doc.first,e.display.view=[],e.display.viewOffset=0;}function Ft(e,t){if(t>=e.display.viewTo)return null;if(t-=e.display.viewFrom,0>t)return null;for(var r=e.display.view,n=0;n<r.length;n++)if(t-=r[n].size,0>t)return n;}function Rt(e,t,r,n){var i,o=Ft(e,t),l=e.display.view;if(!zo||r==e.doc.first+e.doc.size)return{index:o,lineN:r};for(var s=0,a=e.display.viewFrom;o>s;s++)a+=l[s].size;if(a!=t){if(n>0){if(o==l.length-1)return null;i=a+l[o].size-t,o++;}else i=a-t;t+=i,r+=i;}for(;wn(e.doc,r)!=r;){if(o==(0>n?0:l.length-1))return null;r+=n*l[o-(0>n?1:0)].size,o+=n;}return{index:o,lineN:r};}function Bt(e,t,r){var n=e.display,i=n.view;0==i.length||t>=n.viewTo||r<=n.viewFrom?(n.view=Pt(e,t,r),n.viewFrom=t):(n.viewFrom>t?n.view=Pt(e,t,n.viewFrom).concat(n.view):n.viewFrom<t&&(n.view=n.view.slice(Ft(e,t))),n.viewFrom=t,n.viewTo<r?n.view=n.view.concat(Pt(e,n.viewTo,r)):n.viewTo>r&&(n.view=n.view.slice(0,Ft(e,r)))),n.viewTo=r;}function Gt(e){for(var t=e.display.view,r=0,n=0;n<t.length;n++){var i=t[n];i.hidden||i.node&&!i.changes||++r;}return r;}function Ut(e){function t(){i.activeTouch&&(o=setTimeout(function(){i.activeTouch=null;},1e3),l=i.activeTouch,l.end=+new Date);}function r(e){if(1!=e.touches.length)return!1;var t=e.touches[0];return t.radiusX<=1&&t.radiusY<=1;}function n(e,t){if(null==t.left)return!0;var r=t.left-e.left,n=t.top-e.top;return r*r+n*n>400;}var i=e.display;Al(i.scroller,'mousedown',At(e,Yt)),bo&&11>wo?Al(i.scroller,'dblclick',At(e,function(t){if(!ki(e,t)){var r=Xt(e,t);if(r&&!Qt(e,t)&&!jt(e.display,t)){Ml(t);var n=e.findWordAt(r);we(e.doc,n.anchor,n.head);}}})):Al(i.scroller,'dblclick',function(t){ki(e,t)||Ml(t);}),Eo||Al(i.scroller,'contextmenu',function(t){yr(e,t);});var o,l={end:0};Al(i.scroller,'touchstart',function(t){if(!ki(e,t)&&!r(t)){clearTimeout(o);var n=+new Date;i.activeTouch={start:n,moved:!1,prev:n-l.end<=300?l:null},1==t.touches.length&&(i.activeTouch.left=t.touches[0].pageX,i.activeTouch.top=t.touches[0].pageY);}}),Al(i.scroller,'touchmove',function(){i.activeTouch&&(i.activeTouch.moved=!0);}),Al(i.scroller,'touchend',function(r){var o=i.activeTouch;if(o&&!jt(i,r)&&null!=o.left&&!o.moved&&new Date-o.start<300){var l,s=e.coordsChar(i.activeTouch,'page');l=!o.prev||n(o,o.prev)?new he(s,s):!o.prev.prev||n(o,o.prev.prev)?e.findWordAt(s):new he(Fo(s.line,0),ge(e.doc,Fo(s.line+1,0))),e.setSelection(l.anchor,l.head),e.focus(),Ml(r);}t();}),Al(i.scroller,'touchcancel',t),Al(i.scroller,'scroll',function(){i.scroller.clientHeight&&(nr(e,i.scroller.scrollTop),ir(e,i.scroller.scrollLeft,!0),Hl(e,'scroll',e));}),Al(i.scroller,'mousewheel',function(t){or(e,t);}),Al(i.scroller,'DOMMouseScroll',function(t){or(e,t);}),Al(i.wrapper,'scroll',function(){i.wrapper.scrollTop=i.wrapper.scrollLeft=0;}),i.dragFunctions={enter:function(t){ki(e,t)||Wl(t);},over:function(t){ki(e,t)||(tr(e,t),Wl(t));},start:function(t){er(e,t);},drop:At(e,Jt),leave:function(t){ki(e,t)||rr(e);}};var s=i.input.getField();Al(s,'keyup',function(t){dr.call(e,t);}),Al(s,'keydown',At(e,hr)),Al(s,'keypress',At(e,pr)),Al(s,'focus',Fi(vr,e)),Al(s,'blur',Fi(mr,e));}function Vt(t,r,n){var i=n&&n!=e.Init;if(!r!=!i){var o=t.display.dragFunctions,l=r?Al:Dl;l(t.display.scroller,'dragstart',o.start),l(t.display.scroller,'dragenter',o.enter),l(t.display.scroller,'dragover',o.over),l(t.display.scroller,'dragleave',o.leave),l(t.display.scroller,'drop',o.drop);}}function Kt(e){var t=e.display;t.lastWrapHeight==t.wrapper.clientHeight&&t.lastWrapWidth==t.wrapper.clientWidth||(t.cachedCharWidth=t.cachedTextHeight=t.cachedPaddingH=null,t.scrollbarsClipped=!1,e.setSize());}function jt(e,t){for(var r=xi(t);r!=e.wrapper;r=r.parentNode)if(!r||1==r.nodeType&&'true'==r.getAttribute('cm-ignore-events')||r.parentNode==e.sizer&&r!=e.mover)return!0;}function Xt(e,t,r,n){var i=e.display;if(!r&&'true'==xi(t).getAttribute('cm-not-content'))return null;var o,l,s=i.lineSpace.getBoundingClientRect();try{o=t.clientX-s.left,l=t.clientY-s.top;}catch(t){return null;}var a,u=vt(e,o,l);if(n&&1==u.xRel&&(a=Zn(e.doc,u.line).text).length==u.ch){var c=Bl(a,a.length,e.options.tabSize)-a.length;u=Fo(u.line,Math.max(0,Math.round((o-je(e.display).left)/bt(e.display))-c));}return u;}function Yt(e){var t=this,r=t.display;if(!(ki(t,e)||r.activeTouch&&r.input.supportsTouch())){if(r.shift=e.shiftKey,jt(r,e))return void(xo||(r.scroller.draggable=!1,setTimeout(function(){r.scroller.draggable=!0;},100)));if(!Qt(t,e)){var n=Xt(t,e);switch(window.focus(),Ci(e)){case 1:t.state.selectingText?t.state.selectingText(e):n?_t(t,e,n):xi(e)==r.scroller&&Ml(e);break;case 2:xo&&(t.state.lastMiddleDown=+new Date),n&&we(t.doc,n),setTimeout(function(){r.input.focus();},20),Ml(e);break;case 3:Eo?yr(t,e):gr(t);}}}}function _t(e,t,r){bo?setTimeout(Fi($,e),0):e.curOp.focus=ji();var n,i=+new Date;Vo&&Vo.time>i-400&&0==Ro(Vo.pos,r)?n='triple':Uo&&Uo.time>i-400&&0==Ro(Uo.pos,r)?(n='double',Vo={time:i,pos:r}):(n='single',Uo={time:i,pos:r});var o,l=e.doc.sel,s=Ao?t.metaKey:t.ctrlKey;e.options.dragDrop&&es&&!e.isReadOnly()&&'single'==n&&(o=l.contains(r))>-1&&(Ro((o=l.ranges[o]).from(),r)<0||r.xRel>0)&&(Ro(o.to(),r)>0||r.xRel<0)?qt(e,t,r,s):$t(e,t,r,n,s);}function qt(e,t,r,n){var i=e.display,o=+new Date,l=At(e,function(s){xo&&(i.scroller.draggable=!1),e.state.draggingText=!1,Dl(document,'mouseup',l),Dl(i.scroller,'drop',l),Math.abs(t.clientX-s.clientX)+Math.abs(t.clientY-s.clientY)<10&&(Ml(s),!n&&+new Date-200<o&&we(e.doc,r),xo||bo&&9==wo?setTimeout(function(){document.body.focus(),i.input.focus();},20):i.input.focus());});xo&&(i.scroller.draggable=!0),e.state.draggingText=l,i.scroller.dragDrop&&i.scroller.dragDrop(),Al(document,'mouseup',l),Al(i.scroller,'drop',l);}function $t(e,t,r,n,i){function o(t){if(0!=Ro(v,t))if(v=t,'rect'==n){for(var i=[],o=e.options.tabSize,l=Bl(Zn(u,r.line).text,r.ch,o),s=Bl(Zn(u,t.line).text,t.ch,o),a=Math.min(l,s),d=Math.max(l,s),p=Math.min(r.line,t.line),g=Math.min(e.lastLine(),Math.max(r.line,t.line));g>=p;p++){var m=Zn(u,p).text,y=Gl(m,a,o);a==d?i.push(new he(Fo(p,y),Fo(p,y))):m.length>y&&i.push(new he(Fo(p,y),Fo(p,Gl(m,d,o))));}i.length||i.push(new he(r,r)),ke(u,fe(f.ranges.slice(0,h).concat(i),h),{origin:'*mouse',scroll:!1}),e.scrollIntoView(t);}else{var b=c,w=b.anchor,x=t;if('single'!=n){if('double'==n)var C=e.findWordAt(t);else var C=new he(Fo(t.line,0),ge(u,Fo(t.line+1,0)));Ro(C.anchor,w)>0?(x=C.head,w=q(b.from(),C.anchor)):(x=C.anchor,w=_(b.to(),C.head));}var i=f.ranges.slice(0);i[h]=new he(ge(u,w),x),ke(u,fe(i,h),Fl);}}function l(t){var r=++y,i=Xt(e,t,!0,'rect'==n);if(i)if(0!=Ro(i,v)){e.curOp.focus=ji(),o(i);var s=w(a,u);(i.line>=s.to||i.line<s.from)&&setTimeout(At(e,function(){y==r&&l(t);}),150);}else{var c=t.clientY<m.top?-20:t.clientY>m.bottom?20:0;c&&setTimeout(At(e,function(){y==r&&(a.scroller.scrollTop+=c,l(t));}),50);}}function s(t){e.state.selectingText=!1,y=1/0,Ml(t),a.input.focus(),Dl(document,'mousemove',b),Dl(document,'mouseup',x),u.history.lastSelOrigin=null;}var a=e.display,u=e.doc;Ml(t);var c,h,f=u.sel,d=f.ranges;if(i&&!t.shiftKey?(h=u.sel.contains(r),c=h>-1?d[h]:new he(r,r)):(c=u.sel.primary(),h=u.sel.primIndex),Oo?t.shiftKey&&t.metaKey:t.altKey)n='rect',i||(c=new he(r,r)),r=Xt(e,t,!0,!0),h=-1;else if('double'==n){var p=e.findWordAt(r);c=e.display.shift||u.extend?be(u,c,p.anchor,p.head):p;}else if('triple'==n){var g=new he(Fo(r.line,0),ge(u,Fo(r.line+1,0)));c=e.display.shift||u.extend?be(u,c,g.anchor,g.head):g;}else c=be(u,c,r);i?-1==h?(h=d.length,ke(u,fe(d.concat([c]),h),{scroll:!1,origin:'*mouse'})):d.length>1&&d[h].empty()&&'single'==n&&!t.shiftKey?(ke(u,fe(d.slice(0,h).concat(d.slice(h+1)),0),{scroll:!1,origin:'*mouse'}),f=u.sel):Ce(u,h,c,Fl):(h=0,ke(u,new ce([c],0),Fl),f=u.sel);var v=r,m=a.wrapper.getBoundingClientRect(),y=0,b=At(e,function(e){Ci(e)?l(e):s(e);}),x=At(e,s);e.state.selectingText=x,Al(document,'mousemove',b),Al(document,'mouseup',x);}function Zt(e,t,r,n){try{var i=t.clientX,o=t.clientY;}catch(t){return!1;}if(i>=Math.floor(e.display.gutters.getBoundingClientRect().right))return!1;n&&Ml(t);var l=e.display,s=l.lineDiv.getBoundingClientRect();if(o>s.bottom||!Ni(e,r))return wi(t);o-=s.top-l.viewOffset;for(var a=0;a<e.options.gutters.length;++a){var u=l.gutters.childNodes[a];if(u&&u.getBoundingClientRect().right>=i){var c=ri(e.doc,o),h=e.options.gutters[a];return Hl(e,r,e,c,h,t),wi(t);}}}function Qt(e,t){return Zt(e,t,'gutterClick',!0);}function Jt(e){var t=this;if(rr(t),!ki(t,e)&&!jt(t.display,e)){Ml(e),bo&&(Yo=+new Date);var r=Xt(t,e,!0),n=e.dataTransfer.files;if(r&&!t.isReadOnly())if(n&&n.length&&window.FileReader&&window.File)for(var i=n.length,o=Array(i),l=0,s=function(e,n){if(!t.options.allowDropFileTypes||-1!=Hi(t.options.allowDropFileTypes,e.type)){var s=new FileReader;s.onload=At(t,function(){var e=s.result;if(/[\x00-\x08\x0e-\x1f]{2}/.test(e)&&(e=''),o[n]=e,++l==i){r=ge(t.doc,r);var a={from:r,to:r,text:t.doc.splitLines(o.join(t.doc.lineSeparator())),origin:'paste'};Tr(t.doc,a),Te(t.doc,de(r,Jo(a)));}}),s.readAsText(e);}},a=0;i>a;++a)s(n[a],a);else{if(t.state.draggingText&&t.doc.sel.contains(r)>-1)return t.state.draggingText(e),void setTimeout(function(){t.display.input.focus();},20);try{var o=e.dataTransfer.getData('Text');if(o){if(t.state.draggingText&&!(Ao?e.altKey:e.ctrlKey))var u=t.listSelections();if(Me(t.doc,de(r,r)),u)for(var a=0;a<u.length;++a)Or(t.doc,'',u[a].anchor,u[a].head,'drag');t.replaceSelection(o,'around','paste'),t.display.input.focus();}}catch(e){}}}}function er(e,t){if(bo&&(!e.state.draggingText||+new Date-Yo<100))return void Wl(t);if(!ki(e,t)&&!jt(e.display,t)&&(t.dataTransfer.setData('Text',e.getSelection()),t.dataTransfer.effectAllowed='copyMove',t.dataTransfer.setDragImage&&!To)){var r=Ui('img',null,null,'position: fixed; left: 0; top: 0;');r.src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',Lo&&(r.width=r.height=1,e.display.wrapper.appendChild(r),r._top=r.offsetTop),t.dataTransfer.setDragImage(r,0,0),Lo&&r.parentNode.removeChild(r);}}function tr(e,t){var r=Xt(e,t);if(r){var n=document.createDocumentFragment();Ie(e,r,n),e.display.dragCursor||(e.display.dragCursor=Ui('div',null,'CodeMirror-cursors CodeMirror-dragcursors'),e.display.lineSpace.insertBefore(e.display.dragCursor,e.display.cursorDiv)),Ki(e.display.dragCursor,n);}}function rr(e){e.display.dragCursor&&(e.display.lineSpace.removeChild(e.display.dragCursor),e.display.dragCursor=null);}function nr(e,t){Math.abs(e.doc.scrollTop-t)<2||(e.doc.scrollTop=t,vo||W(e,{top:t}),e.display.scroller.scrollTop!=t&&(e.display.scroller.scrollTop=t),e.display.scrollbars.setScrollTop(t),vo&&W(e),Re(e,100));}function ir(e,t,r){(r?t==e.doc.scrollLeft:Math.abs(e.doc.scrollLeft-t)<2)||(t=Math.min(t,e.display.scroller.scrollWidth-e.display.scroller.clientWidth),e.doc.scrollLeft=t,x(e),e.display.scroller.scrollLeft!=t&&(e.display.scroller.scrollLeft=t),e.display.scrollbars.setScrollLeft(t));}function or(e,t){var r=$o(t),n=r.x,i=r.y,o=e.display,l=o.scroller,s=l.scrollWidth>l.clientWidth,a=l.scrollHeight>l.clientHeight;if(n&&s||i&&a){if(i&&Ao&&xo)e:for(var u=t.target,c=o.view;u!=l;u=u.parentNode)for(var h=0;h<c.length;h++)if(c[h].node==u){e.display.currentWheelTarget=u;break e;}if(n&&!vo&&!Lo&&null!=qo)return i&&a&&nr(e,Math.max(0,Math.min(l.scrollTop+i*qo,l.scrollHeight-l.clientHeight))),ir(e,Math.max(0,Math.min(l.scrollLeft+n*qo,l.scrollWidth-l.clientWidth))),(!i||i&&a)&&Ml(t),void(o.wheelStartX=null);if(i&&null!=qo){var f=i*qo,d=e.doc.scrollTop,p=d+o.wrapper.clientHeight;0>f?d=Math.max(0,d+f-50):p=Math.min(e.doc.height,p+f+50),W(e,{top:d,bottom:p});}20>_o&&(null==o.wheelStartX?(o.wheelStartX=l.scrollLeft,o.wheelStartY=l.scrollTop,o.wheelDX=n,o.wheelDY=i,setTimeout(function(){if(null!=o.wheelStartX){var e=l.scrollLeft-o.wheelStartX,t=l.scrollTop-o.wheelStartY,r=t&&o.wheelDY&&t/o.wheelDY||e&&o.wheelDX&&e/o.wheelDX;o.wheelStartX=o.wheelStartY=null,r&&(qo=(qo*_o+r)/(_o+1),++_o);}},200)):(o.wheelDX+=n,o.wheelDY+=i));}}function lr(e,t,r){if('string'==typeof t&&(t=cl[t],!t))return!1;e.display.input.ensurePolled();var n=e.display.shift,i=!1;try{e.isReadOnly()&&(e.state.suppressEdits=!0),r&&(e.display.shift=!1),i=t(e)!=Il;}finally{e.display.shift=n,e.state.suppressEdits=!1;}return i;}function sr(e,t,r){for(var n=0;n<e.state.keyMaps.length;n++){var i=fl(t,e.state.keyMaps[n],r,e);if(i)return i;}return e.options.extraKeys&&fl(t,e.options.extraKeys,r,e)||fl(t,e.options.keyMap,r,e);}function ar(e,t,r,n){var i=e.state.keySeq;if(i){if(dl(t))return'handled';Zo.set(50,function(){e.state.keySeq==i&&(e.state.keySeq=null,e.display.input.reset());}),t=i+' '+t;}var o=sr(e,t,n);return'multi'==o&&(e.state.keySeq=t),'handled'==o&&Li(e,'keyHandled',e,t,r),'handled'!=o&&'multi'!=o||(Ml(r),Fe(e)),i&&!o&&/\'$/.test(t)?(Ml(r),!0):!!o;}function ur(e,t){var r=pl(t,!0);return r?t.shiftKey&&!e.state.keySeq?ar(e,'Shift-'+r,t,function(t){return lr(e,t,!0);})||ar(e,r,t,function(t){return('string'==typeof t?/^go[A-Z]/.test(t):t.motion)?lr(e,t):void 0;}):ar(e,r,t,function(t){return lr(e,t);}):!1;}function cr(e,t,r){return ar(e,'\''+r+'\'',t,function(t){return lr(e,t,!0);});}function hr(e){var t=this;if(t.curOp.focus=ji(),!ki(t,e)){bo&&11>wo&&27==e.keyCode&&(e.returnValue=!1);var r=e.keyCode;t.display.shift=16==r||e.shiftKey;var n=ur(t,e);Lo&&(Qo=n?r:null,!n&&88==r&&!ns&&(Ao?e.metaKey:e.ctrlKey)&&t.replaceSelection('',null,'cut')),18!=r||/\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className)||fr(t);}}function fr(e){function t(e){18!=e.keyCode&&e.altKey||(Zl(r,'CodeMirror-crosshair'),Dl(document,'keyup',t),Dl(document,'mouseover',t));}var r=e.display.lineDiv;Ql(r,'CodeMirror-crosshair'),Al(document,'keyup',t),Al(document,'mouseover',t);}function dr(e){16==e.keyCode&&(this.doc.sel.shift=!1),ki(this,e);}function pr(e){var t=this;if(!(jt(t.display,e)||ki(t,e)||e.ctrlKey&&!e.altKey||Ao&&e.metaKey)){var r=e.keyCode,n=e.charCode;if(Lo&&r==Qo)return Qo=null,void Ml(e);if(!Lo||e.which&&!(e.which<10)||!ur(t,e)){var i=String.fromCharCode(null==n?r:n);cr(t,e,i)||t.display.input.onKeyPress(e);}}}function gr(e){e.state.delayingBlurEvent=!0,setTimeout(function(){e.state.delayingBlurEvent&&(e.state.delayingBlurEvent=!1,mr(e));},100);}function vr(e){e.state.delayingBlurEvent&&(e.state.delayingBlurEvent=!1),'nocursor'!=e.options.readOnly&&(e.state.focused||(Hl(e,'focus',e),e.state.focused=!0,Ql(e.display.wrapper,'CodeMirror-focused'),e.curOp||e.display.selForContextMenu==e.doc.sel||(e.display.input.reset(),xo&&setTimeout(function(){e.display.input.reset(!0);},20)),e.display.input.receivedFocus()),Fe(e));}function mr(e){e.state.delayingBlurEvent||(e.state.focused&&(Hl(e,'blur',e),e.state.focused=!1,Zl(e.display.wrapper,'CodeMirror-focused')),clearInterval(e.display.blinker),setTimeout(function(){e.state.focused||(e.display.shift=!1);},150));}function yr(e,t){jt(e.display,t)||br(e,t)||ki(e,t,'contextmenu')||e.display.input.onContextMenu(t);}function br(e,t){return Ni(e,'gutterContextMenu')?Zt(e,t,'gutterContextMenu',!1):!1;}function wr(e,t){if(Ro(e,t.from)<0)return e;if(Ro(e,t.to)<=0)return Jo(t);var r=e.line+t.text.length-(t.to.line-t.from.line)-1,n=e.ch;return e.line==t.to.line&&(n+=Jo(t).ch-t.to.ch),Fo(r,n);}function xr(e,t){for(var r=[],n=0;n<e.sel.ranges.length;n++){var i=e.sel.ranges[n];r.push(new he(wr(i.anchor,t),wr(i.head,t)));}return fe(r,e.sel.primIndex);}function Cr(e,t,r){return e.line==t.line?Fo(r.line,e.ch-t.ch+r.ch):Fo(r.line+(e.line-t.line),e.ch);}function Sr(e,t,r){for(var n=[],i=Fo(e.first,0),o=i,l=0;l<t.length;l++){var s=t[l],a=Cr(s.from,i,o),u=Cr(Jo(s),i,o);if(i=s.to,o=u,'around'==r){var c=e.sel.ranges[l],h=Ro(c.head,c.anchor)<0;n[l]=new he(h?u:a,h?a:u);}else n[l]=new he(a,a);}return new ce(n,e.sel.primIndex);}function Lr(e,t,r){var n={canceled:!1,from:t.from,to:t.to,text:t.text,origin:t.origin,cancel:function(){this.canceled=!0;}};return r&&(n.update=function(t,r,n,i){t&&(this.from=ge(e,t)),r&&(this.to=ge(e,r)),n&&(this.text=n),void 0!==i&&(this.origin=i);}),Hl(e,'beforeChange',e,n),e.cm&&Hl(e.cm,'beforeChange',e.cm,n),n.canceled?null:{from:n.from,to:n.to,text:n.text,origin:n.origin};}function Tr(e,t,r){if(e.cm){if(!e.cm.curOp)return At(e.cm,Tr)(e,t,r);if(e.cm.state.suppressEdits)return;}if(!(Ni(e,'beforeChange')||e.cm&&Ni(e.cm,'beforeChange'))||(t=Lr(e,t,!0))){var n=Io&&!r&&an(e,t.from,t.to);if(n)for(var i=n.length-1;i>=0;--i)kr(e,{from:n[i].from,to:n[i].to,text:i?['']:t.text});else kr(e,t);}}function kr(e,t){if(1!=t.text.length||''!=t.text[0]||0!=Ro(t.from,t.to)){var r=xr(e,t);ui(e,t,r,e.cm?e.cm.curOp.id:NaN),Wr(e,t,r,on(e,t));var n=[];qn(e,function(e,r){r||-1!=Hi(n,e.history)||(bi(e.history,t),n.push(e.history)),Wr(e,t,null,on(e,t));});}}function Mr(e,t,r){if(!e.cm||!e.cm.state.suppressEdits){for(var n,i=e.history,o=e.sel,l='undo'==t?i.done:i.undone,s='undo'==t?i.undone:i.done,a=0;a<l.length&&(n=l[a],r?!n.ranges||n.equals(e.sel):n.ranges);a++);if(a!=l.length){for(i.lastOrigin=i.lastSelOrigin=null;n=l.pop(),n.ranges;){if(fi(n,s),r&&!n.equals(e.sel))return void ke(e,n,{clearRedo:!1});o=n;}var u=[];fi(o,s),s.push({changes:u,generation:i.generation}),i.generation=n.generation||++i.maxGeneration;for(var c=Ni(e,'beforeChange')||e.cm&&Ni(e.cm,'beforeChange'),a=n.changes.length-1;a>=0;--a){var h=n.changes[a];if(h.origin=t,c&&!Lr(e,h,!1))return void(l.length=0);u.push(li(e,h));var f=a?xr(e,h):Di(l);Wr(e,h,f,sn(e,h)),!a&&e.cm&&e.cm.scrollIntoView({from:h.from,to:Jo(h)});var d=[];qn(e,function(e,t){t||-1!=Hi(d,e.history)||(bi(e.history,h),d.push(e.history)),Wr(e,h,null,sn(e,h));});}}}}function Nr(e,t){if(0!=t&&(e.first+=t,e.sel=new ce(Pi(e.sel.ranges,function(e){return new he(Fo(e.anchor.line+t,e.anchor.ch),Fo(e.head.line+t,e.head.ch));}),e.sel.primIndex),e.cm)){Et(e.cm,e.first,e.first-t,t);for(var r=e.cm.display,n=r.viewFrom;n<r.viewTo;n++)It(e.cm,n,'gutter');}}function Wr(e,t,r,n){if(e.cm&&!e.cm.curOp)return At(e.cm,Wr)(e,t,r,n);if(t.to.line<e.first)return void Nr(e,t.text.length-1-(t.to.line-t.from.line));if(!(t.from.line>e.lastLine())){if(t.from.line<e.first){var i=t.text.length-1-(e.first-t.from.line);Nr(e,i),t={from:Fo(e.first,0),to:Fo(t.to.line+i,t.to.ch),text:[Di(t.text)],origin:t.origin};}var o=e.lastLine();t.to.line>o&&(t={from:t.from,to:Fo(o,Zn(e,o).text.length),text:[t.text[0]],origin:t.origin}),t.removed=Qn(e,t.from,t.to),r||(r=xr(e,t)),e.cm?Ar(e.cm,t,n):Xn(e,t,n),Me(e,r,zl);}}function Ar(e,t,r){var n=e.doc,i=e.display,l=t.from,s=t.to,a=!1,u=l.line;e.options.lineWrapping||(u=ti(yn(Zn(n,l.line))),n.iter(u,s.line+1,function(e){return e==i.maxLine?(a=!0,!0):void 0;})),n.sel.contains(t.from,t.to)>-1&&Mi(e),Xn(n,t,r,o(e)),e.options.lineWrapping||(n.iter(u,l.line+t.text.length,function(e){var t=h(e);t>i.maxLineLength&&(i.maxLine=e,i.maxLineLength=t,i.maxLineChanged=!0,a=!1);}),a&&(e.curOp.updateMaxLine=!0)),n.frontier=Math.min(n.frontier,l.line),Re(e,400);var c=t.text.length-(s.line-l.line)-1;t.full?Et(e):l.line!=s.line||1!=t.text.length||jn(e.doc,t)?Et(e,l.line,s.line+1,c):It(e,l.line,'text');var f=Ni(e,'changes'),d=Ni(e,'change');if(d||f){var p={from:l,to:s,text:t.text,removed:t.removed,origin:t.origin};d&&Li(e,'change',e,p),f&&(e.curOp.changeObjs||(e.curOp.changeObjs=[])).push(p);}e.display.selForContextMenu=null;}function Or(e,t,r,n,i){if(n||(n=r),Ro(n,r)<0){var o=n;n=r,r=o;}'string'==typeof t&&(t=e.splitLines(t)),Tr(e,{from:r,to:n,text:t,origin:i});}function Dr(e,t){if(!ki(e,'scrollCursorIntoView')){var r=e.display,n=r.sizer.getBoundingClientRect(),i=null;if(t.top+n.top<0?i=!0:t.bottom+n.top>(window.innerHeight||document.documentElement.clientHeight)&&(i=!1),null!=i&&!Mo){var o=Ui('div','​',null,'position: absolute; top: '+(t.top-r.viewOffset-Ve(e.display))+'px; height: '+(t.bottom-t.top+Xe(e)+r.barHeight)+'px; left: '+t.left+'px; width: 2px;');e.display.lineSpace.appendChild(o),o.scrollIntoView(i),e.display.lineSpace.removeChild(o);}}}function Hr(e,t,r,n){null==n&&(n=0);for(var i=0;5>i;i++){var o=!1,l=dt(e,t),s=r&&r!=t?dt(e,r):l,a=Er(e,Math.min(l.left,s.left),Math.min(l.top,s.top)-n,Math.max(l.left,s.left),Math.max(l.bottom,s.bottom)+n),u=e.doc.scrollTop,c=e.doc.scrollLeft;if(null!=a.scrollTop&&(nr(e,a.scrollTop),Math.abs(e.doc.scrollTop-u)>1&&(o=!0)),null!=a.scrollLeft&&(ir(e,a.scrollLeft),Math.abs(e.doc.scrollLeft-c)>1&&(o=!0)),!o)break;}return l;}function Pr(e,t,r,n,i){var o=Er(e,t,r,n,i);null!=o.scrollTop&&nr(e,o.scrollTop),null!=o.scrollLeft&&ir(e,o.scrollLeft);}function Er(e,t,r,n,i){var o=e.display,l=yt(e.display);0>r&&(r=0);var s=e.curOp&&null!=e.curOp.scrollTop?e.curOp.scrollTop:o.scroller.scrollTop,a=_e(e),u={};i-r>a&&(i=r+a);var c=e.doc.height+Ke(o),h=l>r,f=i>c-l;if(s>r)u.scrollTop=h?0:r;else if(i>s+a){var d=Math.min(r,(f?c:i)-a);d!=s&&(u.scrollTop=d);}var p=e.curOp&&null!=e.curOp.scrollLeft?e.curOp.scrollLeft:o.scroller.scrollLeft,g=Ye(e)-(e.options.fixedGutter?o.gutters.offsetWidth:0),v=n-t>g;return v&&(n=t+g),10>t?u.scrollLeft=0:p>t?u.scrollLeft=Math.max(0,t-(v?0:10)):n>g+p-3&&(u.scrollLeft=n+(v?0:10)-g),u;}function Ir(e,t,r){null==t&&null==r||Fr(e),null!=t&&(e.curOp.scrollLeft=(null==e.curOp.scrollLeft?e.doc.scrollLeft:e.curOp.scrollLeft)+t),null!=r&&(e.curOp.scrollTop=(null==e.curOp.scrollTop?e.doc.scrollTop:e.curOp.scrollTop)+r);
}function zr(e){Fr(e);var t=e.getCursor(),r=t,n=t;e.options.lineWrapping||(r=t.ch?Fo(t.line,t.ch-1):t,n=Fo(t.line,t.ch+1)),e.curOp.scrollToPos={from:r,to:n,margin:e.options.cursorScrollMargin,isCursor:!0};}function Fr(e){var t=e.curOp.scrollToPos;if(t){e.curOp.scrollToPos=null;var r=pt(e,t.from),n=pt(e,t.to),i=Er(e,Math.min(r.left,n.left),Math.min(r.top,n.top)-t.margin,Math.max(r.right,n.right),Math.max(r.bottom,n.bottom)+t.margin);e.scrollTo(i.scrollLeft,i.scrollTop);}}function Rr(e,t,r,n){var i,o=e.doc;null==r&&(r='add'),'smart'==r&&(o.mode.indent?i=Ue(e,t):r='prev');var l=e.options.tabSize,s=Zn(o,t),a=Bl(s.text,null,l);s.stateAfter&&(s.stateAfter=null);var u,c=s.text.match(/^\s*/)[0];if(n||/\S/.test(s.text)){if('smart'==r&&(u=o.mode.indent(i,s.text.slice(c.length),s.text),u==Il||u>150)){if(!n)return;r='prev';}}else u=0,r='not';'prev'==r?u=t>o.first?Bl(Zn(o,t-1).text,null,l):0:'add'==r?u=a+e.options.indentUnit:'subtract'==r?u=a-e.options.indentUnit:'number'==typeof r&&(u=a+r),u=Math.max(0,u);var h='',f=0;if(e.options.indentWithTabs)for(var d=Math.floor(u/l);d;--d)f+=l,h+='	';if(u>f&&(h+=Oi(u-f)),h!=c)return Or(o,h,Fo(t,0),Fo(t,c.length),'+input'),s.stateAfter=null,!0;for(var d=0;d<o.sel.ranges.length;d++){var p=o.sel.ranges[d];if(p.head.line==t&&p.head.ch<c.length){var f=Fo(t,c.length);Ce(o,d,new he(f,f));break;}}}function Br(e,t,r,n){var i=t,o=t;return'number'==typeof t?o=Zn(e,pe(e,t)):i=ti(t),null==i?null:(n(o,i)&&e.cm&&It(e.cm,i,r),o);}function Gr(e,t){for(var r=e.doc.sel.ranges,n=[],i=0;i<r.length;i++){for(var o=t(r[i]);n.length&&Ro(o.from,Di(n).to)<=0;){var l=n.pop();if(Ro(l.from,o.from)<0){o.from=l.from;break;}}n.push(o);}Wt(e,function(){for(var t=n.length-1;t>=0;t--)Or(e.doc,'',n[t].from,n[t].to,'+delete');zr(e);});}function Ur(e,t,r,n,i){function o(){var t=s+r;return t<e.first||t>=e.first+e.size?!1:(s=t,c=Zn(e,t));}function l(e){var t=(i?ho:fo)(c,a,r,!0);if(null==t){if(e||!o())return!1;a=i?(0>r?io:no)(c):0>r?c.text.length:0;}else a=t;return!0;}var s=t.line,a=t.ch,u=r,c=Zn(e,s);if('char'==n)l();else if('column'==n)l(!0);else if('word'==n||'group'==n)for(var h=null,f='group'==n,d=e.cm&&e.cm.getHelper(t,'wordChars'),p=!0;!(0>r)||l(!p);p=!1){var g=c.text.charAt(a)||'\n',v=Ri(g,d)?'w':f&&'\n'==g?'n':!f||/\s/.test(g)?null:'p';if(!f||p||v||(v='s'),h&&h!=v){0>r&&(r=1,l());break;}if(v&&(h=v),r>0&&!l(!p))break;}var m=De(e,Fo(s,a),t,u,!0);return Ro(t,m)||(m.hitSide=!0),m;}function Vr(e,t,r,n){var i,o=e.doc,l=t.left;if('page'==n){var s=Math.min(e.display.wrapper.clientHeight,window.innerHeight||document.documentElement.clientHeight);i=t.top+r*(s-(0>r?1.5:.5)*yt(e.display));}else'line'==n&&(i=r>0?t.bottom+3:t.top-3);for(;;){var a=vt(e,l,i);if(!a.outside)break;if(0>r?0>=i:i>=o.height){a.hitSide=!0;break;}i+=5*r;}return a;}function Kr(t,r,n,i){e.defaults[t]=r,n&&(tl[t]=i?function(e,t,r){r!=rl&&n(e,t,r);}:n);}function jr(e){for(var t,r,n,i,o=e.split(/-(?!$)/),e=o[o.length-1],l=0;l<o.length-1;l++){var s=o[l];if(/^(cmd|meta|m)$/i.test(s))i=!0;else if(/^a(lt)?$/i.test(s))t=!0;else if(/^(c|ctrl|control)$/i.test(s))r=!0;else{if(!/^s(hift)$/i.test(s))throw new Error('Unrecognized modifier name: '+s);n=!0;}}return t&&(e='Alt-'+e),r&&(e='Ctrl-'+e),i&&(e='Cmd-'+e),n&&(e='Shift-'+e),e;}function Xr(e){return'string'==typeof e?hl[e]:e;}function Yr(e,t,r,n,i){if(n&&n.shared)return _r(e,t,r,n,i);if(e.cm&&!e.cm.curOp)return At(e.cm,Yr)(e,t,r,n,i);var o=new ml(e,i),l=Ro(t,r);if(n&&zi(n,o,!1),l>0||0==l&&o.clearWhenEmpty!==!1)return o;if(o.replacedWith&&(o.collapsed=!0,o.widgetNode=Ui('span',[o.replacedWith],'CodeMirror-widget'),n.handleMouseEvents||o.widgetNode.setAttribute('cm-ignore-events','true'),n.insertLeft&&(o.widgetNode.insertLeft=!0)),o.collapsed){if(mn(e,t.line,t,r,o)||t.line!=r.line&&mn(e,r.line,t,r,o))throw new Error('Inserting collapsed marker partially overlapping an existing one');zo=!0;}o.addToHistory&&ui(e,{from:t,to:r,origin:'markText'},e.sel,NaN);var s,a=t.line,u=e.cm;if(e.iter(a,r.line+1,function(e){u&&o.collapsed&&!u.options.lineWrapping&&yn(e)==u.display.maxLine&&(s=!0),o.collapsed&&a!=t.line&&ei(e,0),tn(e,new Qr(o,a==t.line?t.ch:null,a==r.line?r.ch:null)),++a;}),o.collapsed&&e.iter(t.line,r.line+1,function(t){Cn(e,t)&&ei(t,0);}),o.clearOnEnter&&Al(o,'beforeCursorEnter',function(){o.clear();}),o.readOnly&&(Io=!0,(e.history.done.length||e.history.undone.length)&&e.clearHistory()),o.collapsed&&(o.id=++vl,o.atomic=!0),u){if(s&&(u.curOp.updateMaxLine=!0),o.collapsed)Et(u,t.line,r.line+1);else if(o.className||o.title||o.startStyle||o.endStyle||o.css)for(var c=t.line;c<=r.line;c++)It(u,c,'text');o.atomic&&We(u.doc),Li(u,'markerAdded',u,o);}return o;}function _r(e,t,r,n,i){n=zi(n),n.shared=!1;var o=[Yr(e,t,r,n,i)],l=o[0],s=n.widgetNode;return qn(e,function(e){s&&(n.widgetNode=s.cloneNode(!0)),o.push(Yr(e,ge(e,t),ge(e,r),n,i));for(var a=0;a<e.linked.length;++a)if(e.linked[a].isParent)return;l=Di(o);}),new yl(o,l);}function qr(e){return e.findMarks(Fo(e.first,0),e.clipPos(Fo(e.lastLine())),function(e){return e.parent;});}function $r(e,t){for(var r=0;r<t.length;r++){var n=t[r],i=n.find(),o=e.clipPos(i.from),l=e.clipPos(i.to);if(Ro(o,l)){var s=Yr(e,o,l,n.primary,n.primary.type);n.markers.push(s),s.parent=n;}}}function Zr(e){for(var t=0;t<e.length;t++){var r=e[t],n=[r.primary.doc];qn(r.primary.doc,function(e){n.push(e);});for(var i=0;i<r.markers.length;i++){var o=r.markers[i];-1==Hi(n,o.doc)&&(o.parent=null,r.markers.splice(i--,1));}}}function Qr(e,t,r){this.marker=e,this.from=t,this.to=r;}function Jr(e,t){if(e)for(var r=0;r<e.length;++r){var n=e[r];if(n.marker==t)return n;}}function en(e,t){for(var r,n=0;n<e.length;++n)e[n]!=t&&(r||(r=[])).push(e[n]);return r;}function tn(e,t){e.markedSpans=e.markedSpans?e.markedSpans.concat([t]):[t],t.marker.attachLine(e);}function rn(e,t,r){if(e)for(var n,i=0;i<e.length;++i){var o=e[i],l=o.marker,s=null==o.from||(l.inclusiveLeft?o.from<=t:o.from<t);if(s||o.from==t&&'bookmark'==l.type&&(!r||!o.marker.insertLeft)){var a=null==o.to||(l.inclusiveRight?o.to>=t:o.to>t);(n||(n=[])).push(new Qr(l,o.from,a?null:o.to));}}return n;}function nn(e,t,r){if(e)for(var n,i=0;i<e.length;++i){var o=e[i],l=o.marker,s=null==o.to||(l.inclusiveRight?o.to>=t:o.to>t);if(s||o.from==t&&'bookmark'==l.type&&(!r||o.marker.insertLeft)){var a=null==o.from||(l.inclusiveLeft?o.from<=t:o.from<t);(n||(n=[])).push(new Qr(l,a?null:o.from-t,null==o.to?null:o.to-t));}}return n;}function on(e,t){if(t.full)return null;var r=me(e,t.from.line)&&Zn(e,t.from.line).markedSpans,n=me(e,t.to.line)&&Zn(e,t.to.line).markedSpans;if(!r&&!n)return null;var i=t.from.ch,o=t.to.ch,l=0==Ro(t.from,t.to),s=rn(r,i,l),a=nn(n,o,l),u=1==t.text.length,c=Di(t.text).length+(u?i:0);if(s)for(var h=0;h<s.length;++h){var f=s[h];if(null==f.to){var d=Jr(a,f.marker);d?u&&(f.to=null==d.to?null:d.to+c):f.to=i;}}if(a)for(var h=0;h<a.length;++h){var f=a[h];if(null!=f.to&&(f.to+=c),null==f.from){var d=Jr(s,f.marker);d||(f.from=c,u&&(s||(s=[])).push(f));}else f.from+=c,u&&(s||(s=[])).push(f);}s&&(s=ln(s)),a&&a!=s&&(a=ln(a));var p=[s];if(!u){var g,v=t.text.length-2;if(v>0&&s)for(var h=0;h<s.length;++h)null==s[h].to&&(g||(g=[])).push(new Qr(s[h].marker,null,null));for(var h=0;v>h;++h)p.push(g);p.push(a);}return p;}function ln(e){for(var t=0;t<e.length;++t){var r=e[t];null!=r.from&&r.from==r.to&&r.marker.clearWhenEmpty!==!1&&e.splice(t--,1);}return e.length?e:null;}function sn(e,t){var r=gi(e,t),n=on(e,t);if(!r)return n;if(!n)return r;for(var i=0;i<r.length;++i){var o=r[i],l=n[i];if(o&&l)e:for(var s=0;s<l.length;++s){for(var a=l[s],u=0;u<o.length;++u)if(o[u].marker==a.marker)continue e;o.push(a);}else l&&(r[i]=l);}return r;}function an(e,t,r){var n=null;if(e.iter(t.line,r.line+1,function(e){if(e.markedSpans)for(var t=0;t<e.markedSpans.length;++t){var r=e.markedSpans[t].marker;!r.readOnly||n&&-1!=Hi(n,r)||(n||(n=[])).push(r);}}),!n)return null;for(var i=[{from:t,to:r}],o=0;o<n.length;++o)for(var l=n[o],s=l.find(0),a=0;a<i.length;++a){var u=i[a];if(!(Ro(u.to,s.from)<0||Ro(u.from,s.to)>0)){var c=[a,1],h=Ro(u.from,s.from),f=Ro(u.to,s.to);(0>h||!l.inclusiveLeft&&!h)&&c.push({from:u.from,to:s.from}),(f>0||!l.inclusiveRight&&!f)&&c.push({from:s.to,to:u.to}),i.splice.apply(i,c),a+=c.length-1;}}return i;}function un(e){var t=e.markedSpans;if(t){for(var r=0;r<t.length;++r)t[r].marker.detachLine(e);e.markedSpans=null;}}function cn(e,t){if(t){for(var r=0;r<t.length;++r)t[r].marker.attachLine(e);e.markedSpans=t;}}function hn(e){return e.inclusiveLeft?-1:0;}function fn(e){return e.inclusiveRight?1:0;}function dn(e,t){var r=e.lines.length-t.lines.length;if(0!=r)return r;var n=e.find(),i=t.find(),o=Ro(n.from,i.from)||hn(e)-hn(t);if(o)return-o;var l=Ro(n.to,i.to)||fn(e)-fn(t);return l?l:t.id-e.id;}function pn(e,t){var r,n=zo&&e.markedSpans;if(n)for(var i,o=0;o<n.length;++o)i=n[o],i.marker.collapsed&&null==(t?i.from:i.to)&&(!r||dn(r,i.marker)<0)&&(r=i.marker);return r;}function gn(e){return pn(e,!0);}function vn(e){return pn(e,!1);}function mn(e,t,r,n,i){var o=Zn(e,t),l=zo&&o.markedSpans;if(l)for(var s=0;s<l.length;++s){var a=l[s];if(a.marker.collapsed){var u=a.marker.find(0),c=Ro(u.from,r)||hn(a.marker)-hn(i),h=Ro(u.to,n)||fn(a.marker)-fn(i);if(!(c>=0&&0>=h||0>=c&&h>=0)&&(0>=c&&(a.marker.inclusiveRight&&i.inclusiveLeft?Ro(u.to,r)>=0:Ro(u.to,r)>0)||c>=0&&(a.marker.inclusiveRight&&i.inclusiveLeft?Ro(u.from,n)<=0:Ro(u.from,n)<0)))return!0;}}}function yn(e){for(var t;t=gn(e);)e=t.find(-1,!0).line;return e;}function bn(e){for(var t,r;t=vn(e);)e=t.find(1,!0).line,(r||(r=[])).push(e);return r;}function wn(e,t){var r=Zn(e,t),n=yn(r);return r==n?t:ti(n);}function xn(e,t){if(t>e.lastLine())return t;var r,n=Zn(e,t);if(!Cn(e,n))return t;for(;r=vn(n);)n=r.find(1,!0).line;return ti(n)+1;}function Cn(e,t){var r=zo&&t.markedSpans;if(r)for(var n,i=0;i<r.length;++i)if(n=r[i],n.marker.collapsed){if(null==n.from)return!0;if(!n.marker.widgetNode&&0==n.from&&n.marker.inclusiveLeft&&Sn(e,t,n))return!0;}}function Sn(e,t,r){if(null==r.to){var n=r.marker.find(1,!0);return Sn(e,n.line,Jr(n.line.markedSpans,r.marker));}if(r.marker.inclusiveRight&&r.to==t.text.length)return!0;for(var i,o=0;o<t.markedSpans.length;++o)if(i=t.markedSpans[o],i.marker.collapsed&&!i.marker.widgetNode&&i.from==r.to&&(null==i.to||i.to!=r.from)&&(i.marker.inclusiveLeft||r.marker.inclusiveRight)&&Sn(e,t,i))return!0;}function Ln(e,t,r){ni(t)<(e.curOp&&e.curOp.scrollTop||e.doc.scrollTop)&&Ir(e,null,r);}function Tn(e){if(null!=e.height)return e.height;var t=e.doc.cm;if(!t)return 0;if(!_l(document.body,e.node)){var r='position: relative;';e.coverGutter&&(r+='margin-left: -'+t.display.gutters.offsetWidth+'px;'),e.noHScroll&&(r+='width: '+t.display.wrapper.clientWidth+'px;'),Ki(t.display.measure,Ui('div',[e.node],null,r));}return e.height=e.node.parentNode.offsetHeight;}function kn(e,t,r,n){var i=new bl(e,r,n),o=e.cm;return o&&i.noHScroll&&(o.display.alignWidgets=!0),Br(e,t,'widget',function(t){var r=t.widgets||(t.widgets=[]);if(null==i.insertAt?r.push(i):r.splice(Math.min(r.length-1,Math.max(0,i.insertAt)),0,i),i.line=t,o&&!Cn(e,t)){var n=ni(t)<e.scrollTop;ei(t,t.height+Tn(i)),n&&Ir(o,null,i.height),o.curOp.forceUpdate=!0;}return!0;}),i;}function Mn(e,t,r,n){e.text=t,e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null),null!=e.order&&(e.order=null),un(e),cn(e,r);var i=n?n(e):1;i!=e.height&&ei(e,i);}function Nn(e){e.parent=null,un(e);}function Wn(e,t){if(e)for(;;){var r=e.match(/(?:^|\s+)line-(background-)?(\S+)/);if(!r)break;e=e.slice(0,r.index)+e.slice(r.index+r[0].length);var n=r[1]?'bgClass':'textClass';null==t[n]?t[n]=r[2]:new RegExp('(?:^|s)'+r[2]+'(?:$|s)').test(t[n])||(t[n]+=' '+r[2]);}return e;}function An(t,r){if(t.blankLine)return t.blankLine(r);if(t.innerMode){var n=e.innerMode(t,r);return n.mode.blankLine?n.mode.blankLine(n.state):void 0;}}function On(t,r,n,i){for(var o=0;10>o;o++){i&&(i[0]=e.innerMode(t,n).mode);var l=t.token(r,n);if(r.pos>r.start)return l;}throw new Error('Mode '+t.name+' failed to advance stream.');}function Dn(e,t,r,n){function i(e){return{start:h.start,end:h.pos,string:h.current(),type:o||null,state:e?al(l.mode,c):c};}var o,l=e.doc,s=l.mode;t=ge(l,t);var a,u=Zn(l,t.line),c=Ue(e,t.line,r),h=new gl(u.text,e.options.tabSize);for(n&&(a=[]);(n||h.pos<t.ch)&&!h.eol();)h.start=h.pos,o=On(s,h,c),n&&a.push(i(!0));return n?a:i();}function Hn(e,t,r,n,i,o,l){var s=r.flattenSpans;null==s&&(s=e.options.flattenSpans);var a,u=0,c=null,h=new gl(t,e.options.tabSize),f=e.options.addModeClass&&[null];for(''==t&&Wn(An(r,n),o);!h.eol();){if(h.pos>e.options.maxHighlightLength?(s=!1,l&&In(e,t,n,h.pos),h.pos=t.length,a=null):a=Wn(On(r,h,n,f),o),f){var d=f[0].name;d&&(a='m-'+(a?d+' '+a:d));}if(!s||c!=a){for(;u<h.start;)u=Math.min(h.start,u+5e4),i(u,c);c=a;}h.start=h.pos;}for(;u<h.pos;){var p=Math.min(h.pos,u+5e4);i(p,c),u=p;}}function Pn(e,t,r,n){var i=[e.state.modeGen],o={};Hn(e,t.text,e.doc.mode,r,function(e,t){i.push(e,t);},o,n);for(var l=0;l<e.state.overlays.length;++l){var s=e.state.overlays[l],a=1,u=0;Hn(e,t.text,s.mode,!0,function(e,t){for(var r=a;e>u;){var n=i[a];n>e&&i.splice(a,1,e,i[a+1],n),a+=2,u=Math.min(e,n);}if(t)if(s.opaque)i.splice(r,a-r,e,'cm-overlay '+t),a=r+2;else for(;a>r;r+=2){var o=i[r+1];i[r+1]=(o?o+' ':'')+'cm-overlay '+t;}},o);}return{styles:i,classes:o.bgClass||o.textClass?o:null};}function En(e,t,r){if(!t.styles||t.styles[0]!=e.state.modeGen){var n=Ue(e,ti(t)),i=Pn(e,t,t.text.length>e.options.maxHighlightLength?al(e.doc.mode,n):n);t.stateAfter=n,t.styles=i.styles,i.classes?t.styleClasses=i.classes:t.styleClasses&&(t.styleClasses=null),r===e.doc.frontier&&e.doc.frontier++;}return t.styles;}function In(e,t,r,n){var i=e.doc.mode,o=new gl(t,e.options.tabSize);for(o.start=o.pos=n||0,''==t&&An(i,r);!o.eol();)On(i,o,r),o.start=o.pos;}function zn(e,t){if(!e||/^\s*$/.test(e))return null;var r=t.addModeClass?Cl:xl;return r[e]||(r[e]=e.replace(/\S+/g,'cm-$&'));}function Fn(e,t){var r=Ui('span',null,null,xo?'padding-right: .1px':null),n={pre:Ui('pre',[r],'CodeMirror-line'),content:r,col:0,pos:0,cm:e,splitSpaces:(bo||xo)&&e.getOption('lineWrapping')};t.measure={};for(var i=0;i<=(t.rest?t.rest.length:0);i++){var o,l=i?t.rest[i-1]:t.line;n.pos=0,n.addToken=Bn,Qi(e.display.measure)&&(o=ii(l))&&(n.addToken=Un(n.addToken,o)),n.map=[];var s=t!=e.display.externalMeasured&&ti(l);Kn(l,n,En(e,l,s)),l.styleClasses&&(l.styleClasses.bgClass&&(n.bgClass=Yi(l.styleClasses.bgClass,n.bgClass||'')),l.styleClasses.textClass&&(n.textClass=Yi(l.styleClasses.textClass,n.textClass||''))),0==n.map.length&&n.map.push(0,0,n.content.appendChild(Zi(e.display.measure))),0==i?(t.measure.map=n.map,t.measure.cache={}):((t.measure.maps||(t.measure.maps=[])).push(n.map),(t.measure.caches||(t.measure.caches=[])).push({}));}if(xo){var a=n.content.lastChild;(/\bcm-tab\b/.test(a.className)||a.querySelector&&a.querySelector('.cm-tab'))&&(n.content.className='cm-tab-wrap-hack');}return Hl(e,'renderLine',e,t.line,n.pre),n.pre.className&&(n.textClass=Yi(n.pre.className,n.textClass||'')),n;}function Rn(e){var t=Ui('span','•','cm-invalidchar');return t.title='\\u'+e.charCodeAt(0).toString(16),t.setAttribute('aria-label',t.title),t;}function Bn(e,t,r,n,i,o,l){if(t){var s=e.splitSpaces?t.replace(/ {3,}/g,Gn):t,a=e.cm.state.specialChars,u=!1;if(a.test(t))for(var c=document.createDocumentFragment(),h=0;;){a.lastIndex=h;var f=a.exec(t),d=f?f.index-h:t.length-h;if(d){var p=document.createTextNode(s.slice(h,h+d));bo&&9>wo?c.appendChild(Ui('span',[p])):c.appendChild(p),e.map.push(e.pos,e.pos+d,p),e.col+=d,e.pos+=d;}if(!f)break;if(h+=d+1,'	'==f[0]){var g=e.cm.options.tabSize,v=g-e.col%g,p=c.appendChild(Ui('span',Oi(v),'cm-tab'));p.setAttribute('role','presentation'),p.setAttribute('cm-text','	'),e.col+=v;}else if('\r'==f[0]||'\n'==f[0]){var p=c.appendChild(Ui('span','\r'==f[0]?'␍':'␤','cm-invalidchar'));p.setAttribute('cm-text',f[0]),e.col+=1;}else{var p=e.cm.options.specialCharPlaceholder(f[0]);p.setAttribute('cm-text',f[0]),bo&&9>wo?c.appendChild(Ui('span',[p])):c.appendChild(p),e.col+=1;}e.map.push(e.pos,e.pos+1,p),e.pos++;}else{e.col+=t.length;var c=document.createTextNode(s);e.map.push(e.pos,e.pos+t.length,c),bo&&9>wo&&(u=!0),e.pos+=t.length;}if(r||n||i||u||l){var m=r||'';n&&(m+=n),i&&(m+=i);var y=Ui('span',[c],m,l);return o&&(y.title=o),e.content.appendChild(y);}e.content.appendChild(c);}}function Gn(e){for(var t=' ',r=0;r<e.length-2;++r)t+=r%2?' ':' ';return t+=' ';}function Un(e,t){return function(r,n,i,o,l,s,a){i=i?i+' cm-force-border':'cm-force-border';for(var u=r.pos,c=u+n.length;;){for(var h=0;h<t.length;h++){var f=t[h];if(f.to>u&&f.from<=u)break;}if(f.to>=c)return e(r,n,i,o,l,s,a);e(r,n.slice(0,f.to-u),i,o,null,s,a),o=null,n=n.slice(f.to-u),u=f.to;}};}function Vn(e,t,r,n){var i=!n&&r.widgetNode;i&&e.map.push(e.pos,e.pos+t,i),!n&&e.cm.display.input.needsContentAttribute&&(i||(i=e.content.appendChild(document.createElement('span'))),i.setAttribute('cm-marker',r.id)),i&&(e.cm.display.input.setUneditable(i),e.content.appendChild(i)),e.pos+=t;}function Kn(e,t,r){var n=e.markedSpans,i=e.text,o=0;if(n)for(var l,s,a,u,c,h,f,d=i.length,p=0,g=1,v='',m=0;;){if(m==p){a=u=c=h=s='',f=null,m=1/0;for(var y,b=[],w=0;w<n.length;++w){var x=n[w],C=x.marker;'bookmark'==C.type&&x.from==p&&C.widgetNode?b.push(C):x.from<=p&&(null==x.to||x.to>p||C.collapsed&&x.to==p&&x.from==p)?(null!=x.to&&x.to!=p&&m>x.to&&(m=x.to,u=''),C.className&&(a+=' '+C.className),C.css&&(s=(s?s+';':'')+C.css),C.startStyle&&x.from==p&&(c+=' '+C.startStyle),C.endStyle&&x.to==m&&(y||(y=[])).push(C.endStyle,x.to),C.title&&!h&&(h=C.title),C.collapsed&&(!f||dn(f.marker,C)<0)&&(f=x)):x.from>p&&m>x.from&&(m=x.from);}if(y)for(var w=0;w<y.length;w+=2)y[w+1]==m&&(u+=' '+y[w]);if(!f||f.from==p)for(var w=0;w<b.length;++w)Vn(t,0,b[w]);if(f&&(f.from||0)==p){if(Vn(t,(null==f.to?d+1:f.to)-p,f.marker,null==f.from),null==f.to)return;f.to==p&&(f=!1);}}if(p>=d)break;for(var S=Math.min(d,m);;){if(v){var L=p+v.length;if(!f){var T=L>S?v.slice(0,S-p):v;t.addToken(t,T,l?l+a:a,c,p+T.length==m?u:'',h,s);}if(L>=S){v=v.slice(S-p),p=S;break;}p=L,c='';}v=i.slice(o,o=r[g++]),l=zn(r[g++],t.cm.options);}}else for(var g=1;g<r.length;g+=2)t.addToken(t,i.slice(o,o=r[g]),zn(r[g+1],t.cm.options));}function jn(e,t){return 0==t.from.ch&&0==t.to.ch&&''==Di(t.text)&&(!e.cm||e.cm.options.wholeLineUpdateBefore);}function Xn(e,t,r,n){function i(e){return r?r[e]:null;}function o(e,r,i){Mn(e,r,i,n),Li(e,'change',e,t);}function l(e,t){for(var r=e,o=[];t>r;++r)o.push(new wl(u[r],i(r),n));return o;}var s=t.from,a=t.to,u=t.text,c=Zn(e,s.line),h=Zn(e,a.line),f=Di(u),d=i(u.length-1),p=a.line-s.line;if(t.full)e.insert(0,l(0,u.length)),e.remove(u.length,e.size-u.length);else if(jn(e,t)){var g=l(0,u.length-1);o(h,h.text,d),p&&e.remove(s.line,p),g.length&&e.insert(s.line,g);}else if(c==h)if(1==u.length)o(c,c.text.slice(0,s.ch)+f+c.text.slice(a.ch),d);else{var g=l(1,u.length-1);g.push(new wl(f+c.text.slice(a.ch),d,n)),o(c,c.text.slice(0,s.ch)+u[0],i(0)),e.insert(s.line+1,g);}else if(1==u.length)o(c,c.text.slice(0,s.ch)+u[0]+h.text.slice(a.ch),i(0)),e.remove(s.line+1,p);else{o(c,c.text.slice(0,s.ch)+u[0],i(0)),o(h,f+h.text.slice(a.ch),d);var g=l(1,u.length-1);p>1&&e.remove(s.line+1,p-1),e.insert(s.line+1,g);}Li(e,'change',e,t);}function Yn(e){this.lines=e,this.parent=null;for(var t=0,r=0;t<e.length;++t)e[t].parent=this,r+=e[t].height;this.height=r;}function _n(e){this.children=e;for(var t=0,r=0,n=0;n<e.length;++n){var i=e[n];t+=i.chunkSize(),r+=i.height,i.parent=this;}this.size=t,this.height=r,this.parent=null;}function qn(e,t,r){function n(e,i,o){if(e.linked)for(var l=0;l<e.linked.length;++l){var s=e.linked[l];if(s.doc!=i){var a=o&&s.sharedHist;r&&!a||(t(s.doc,a),n(s.doc,e,a));}}}n(e,null,!0);}function $n(e,t){if(t.cm)throw new Error('This document is already in use.');e.doc=t,t.cm=e,l(e),r(e),e.options.lineWrapping||f(e),e.options.mode=t.modeOption,Et(e);}function Zn(e,t){if(t-=e.first,0>t||t>=e.size)throw new Error('There is no line '+(t+e.first)+' in the document.');for(var r=e;!r.lines;)for(var n=0;;++n){var i=r.children[n],o=i.chunkSize();if(o>t){r=i;break;}t-=o;}return r.lines[t];}function Qn(e,t,r){var n=[],i=t.line;return e.iter(t.line,r.line+1,function(e){var o=e.text;i==r.line&&(o=o.slice(0,r.ch)),i==t.line&&(o=o.slice(t.ch)),n.push(o),++i;}),n;}function Jn(e,t,r){var n=[];return e.iter(t,r,function(e){n.push(e.text);}),n;}function ei(e,t){var r=t-e.height;if(r)for(var n=e;n;n=n.parent)n.height+=r;}function ti(e){if(null==e.parent)return null;for(var t=e.parent,r=Hi(t.lines,e),n=t.parent;n;t=n,n=n.parent)for(var i=0;n.children[i]!=t;++i)r+=n.children[i].chunkSize();return r+t.first;}function ri(e,t){var r=e.first;e:do{for(var n=0;n<e.children.length;++n){var i=e.children[n],o=i.height;if(o>t){e=i;continue e;}t-=o,r+=i.chunkSize();}return r;}while(!e.lines);for(var n=0;n<e.lines.length;++n){var l=e.lines[n],s=l.height;if(s>t)break;t-=s;}return r+n;}function ni(e){e=yn(e);for(var t=0,r=e.parent,n=0;n<r.lines.length;++n){var i=r.lines[n];if(i==e)break;t+=i.height;}for(var o=r.parent;o;r=o,o=r.parent)for(var n=0;n<o.children.length;++n){var l=o.children[n];if(l==r)break;t+=l.height;}return t;}function ii(e){var t=e.order;return null==t&&(t=e.order=ss(e.text)),t;}function oi(e){this.done=[],this.undone=[],this.undoDepth=1/0,this.lastModTime=this.lastSelTime=0,this.lastOp=this.lastSelOp=null,this.lastOrigin=this.lastSelOrigin=null,this.generation=this.maxGeneration=e||1;}function li(e,t){var r={from:Y(t.from),to:Jo(t),text:Qn(e,t.from,t.to)};return di(e,r,t.from.line,t.to.line+1),qn(e,function(e){di(e,r,t.from.line,t.to.line+1);},!0),r;}function si(e){for(;e.length;){var t=Di(e);if(!t.ranges)break;e.pop();}}function ai(e,t){return t?(si(e.done),Di(e.done)):e.done.length&&!Di(e.done).ranges?Di(e.done):e.done.length>1&&!e.done[e.done.length-2].ranges?(e.done.pop(),Di(e.done)):void 0;}function ui(e,t,r,n){var i=e.history;i.undone.length=0;var o,l=+new Date;if((i.lastOp==n||i.lastOrigin==t.origin&&t.origin&&('+'==t.origin.charAt(0)&&e.cm&&i.lastModTime>l-e.cm.options.historyEventDelay||'*'==t.origin.charAt(0)))&&(o=ai(i,i.lastOp==n))){var s=Di(o.changes);0==Ro(t.from,t.to)&&0==Ro(t.from,s.to)?s.to=Jo(t):o.changes.push(li(e,t));}else{var a=Di(i.done);for(a&&a.ranges||fi(e.sel,i.done),o={changes:[li(e,t)],generation:i.generation},i.done.push(o);i.done.length>i.undoDepth;)i.done.shift(),i.done[0].ranges||i.done.shift();}i.done.push(r),i.generation=++i.maxGeneration,i.lastModTime=i.lastSelTime=l,i.lastOp=i.lastSelOp=n,i.lastOrigin=i.lastSelOrigin=t.origin,s||Hl(e,'historyAdded');}function ci(e,t,r,n){var i=t.charAt(0);return'*'==i||'+'==i&&r.ranges.length==n.ranges.length&&r.somethingSelected()==n.somethingSelected()&&new Date-e.history.lastSelTime<=(e.cm?e.cm.options.historyEventDelay:500);}function hi(e,t,r,n){var i=e.history,o=n&&n.origin;r==i.lastSelOp||o&&i.lastSelOrigin==o&&(i.lastModTime==i.lastSelTime&&i.lastOrigin==o||ci(e,o,Di(i.done),t))?i.done[i.done.length-1]=t:fi(t,i.done),i.lastSelTime=+new Date,i.lastSelOrigin=o,i.lastSelOp=r,n&&n.clearRedo!==!1&&si(i.undone);}function fi(e,t){var r=Di(t);r&&r.ranges&&r.equals(e)||t.push(e);}function di(e,t,r,n){var i=t['spans_'+e.id],o=0;e.iter(Math.max(e.first,r),Math.min(e.first+e.size,n),function(r){r.markedSpans&&((i||(i=t['spans_'+e.id]={}))[o]=r.markedSpans),++o;});}function pi(e){if(!e)return null;for(var t,r=0;r<e.length;++r)e[r].marker.explicitlyCleared?t||(t=e.slice(0,r)):t&&t.push(e[r]);return t?t.length?t:null:e;}function gi(e,t){var r=t['spans_'+e.id];if(!r)return null;for(var n=0,i=[];n<t.text.length;++n)i.push(pi(r[n]));return i;}function vi(e,t,r){for(var n=0,i=[];n<e.length;++n){var o=e[n];if(o.ranges)i.push(r?ce.prototype.deepCopy.call(o):o);else{var l=o.changes,s=[];i.push({changes:s});for(var a=0;a<l.length;++a){var u,c=l[a];if(s.push({from:c.from,to:c.to,text:c.text}),t)for(var h in c)(u=h.match(/^spans_(\d+)$/))&&Hi(t,Number(u[1]))>-1&&(Di(s)[h]=c[h],delete c[h]);}}}return i;}function mi(e,t,r,n){r<e.line?e.line+=n:t<e.line&&(e.line=t,e.ch=0);}function yi(e,t,r,n){for(var i=0;i<e.length;++i){var o=e[i],l=!0;if(o.ranges){o.copied||(o=e[i]=o.deepCopy(),o.copied=!0);for(var s=0;s<o.ranges.length;s++)mi(o.ranges[s].anchor,t,r,n),mi(o.ranges[s].head,t,r,n);}else{for(var s=0;s<o.changes.length;++s){var a=o.changes[s];if(r<a.from.line)a.from=Fo(a.from.line+n,a.from.ch),a.to=Fo(a.to.line+n,a.to.ch);else if(t<=a.to.line){l=!1;break;}}l||(e.splice(0,i+1),i=0);}}}function bi(e,t){var r=t.from.line,n=t.to.line,i=t.text.length-(n-r)-1;yi(e.done,r,n,i),yi(e.undone,r,n,i);}function wi(e){return null!=e.defaultPrevented?e.defaultPrevented:0==e.returnValue;}function xi(e){return e.target||e.srcElement;}function Ci(e){var t=e.which;return null==t&&(1&e.button?t=1:2&e.button?t=3:4&e.button&&(t=2)),Ao&&e.ctrlKey&&1==t&&(t=3),t;}function Si(e,t,r){var n=e._handlers&&e._handlers[t];return r?n&&n.length>0?n.slice():Ol:n||Ol;}function Li(e,t){function r(e){return function(){e.apply(null,o);};}var n=Si(e,t,!1);if(n.length){var i,o=Array.prototype.slice.call(arguments,2);jo?i=jo.delayedCallbacks:Pl?i=Pl:(i=Pl=[],setTimeout(Ti,0));for(var l=0;l<n.length;++l)i.push(r(n[l]));}}function Ti(){var e=Pl;Pl=null;for(var t=0;t<e.length;++t)e[t]();}function ki(e,t,r){return'string'==typeof t&&(t={type:t,preventDefault:function(){this.defaultPrevented=!0;}}),Hl(e,r||t.type,e,t),wi(t)||t.codemirrorIgnore;}function Mi(e){var t=e._handlers&&e._handlers.cursorActivity;if(t)for(var r=e.curOp.cursorActivityHandlers||(e.curOp.cursorActivityHandlers=[]),n=0;n<t.length;++n)-1==Hi(r,t[n])&&r.push(t[n]);}function Ni(e,t){return Si(e,t).length>0;}function Wi(e){e.prototype.on=function(e,t){Al(this,e,t);},e.prototype.off=function(e,t){Dl(this,e,t);};}function Ai(){this.id=null;}function Oi(e){for(;Ul.length<=e;)Ul.push(Di(Ul)+' ');return Ul[e];}function Di(e){return e[e.length-1];}function Hi(e,t){for(var r=0;r<e.length;++r)if(e[r]==t)return r;return-1;}function Pi(e,t){for(var r=[],n=0;n<e.length;n++)r[n]=t(e[n],n);return r;}function Ei(){}function Ii(e,t){var r;return Object.create?r=Object.create(e):(Ei.prototype=e,r=new Ei),t&&zi(t,r),r;}function zi(e,t,r){t||(t={});for(var n in e)!e.hasOwnProperty(n)||r===!1&&t.hasOwnProperty(n)||(t[n]=e[n]);return t;}function Fi(e){var t=Array.prototype.slice.call(arguments,1);return function(){return e.apply(null,t);};}function Ri(e,t){return t?t.source.indexOf('\\w')>-1&&Xl(e)?!0:t.test(e):Xl(e);}function Bi(e){for(var t in e)if(e.hasOwnProperty(t)&&e[t])return!1;return!0;}function Gi(e){return e.charCodeAt(0)>=768&&Yl.test(e);}function Ui(e,t,r,n){var i=document.createElement(e);if(r&&(i.className=r),n&&(i.style.cssText=n),'string'==typeof t)i.appendChild(document.createTextNode(t));else if(t)for(var o=0;o<t.length;++o)i.appendChild(t[o]);return i;}function Vi(e){for(var t=e.childNodes.length;t>0;--t)e.removeChild(e.firstChild);return e;}function Ki(e,t){return Vi(e).appendChild(t);}function ji(){for(var e=document.activeElement;e&&e.root&&e.root.activeElement;)e=e.root.activeElement;return e;}function Xi(e){return new RegExp('(^|\\s)'+e+'(?:$|\\s)\\s*');}function Yi(e,t){for(var r=e.split(' '),n=0;n<r.length;n++)r[n]&&!Xi(r[n]).test(t)&&(t+=' '+r[n]);return t;}function _i(e){if(document.body.getElementsByClassName)for(var t=document.body.getElementsByClassName('CodeMirror'),r=0;r<t.length;r++){var n=t[r].CodeMirror;n&&e(n);}}function qi(){Jl||($i(),Jl=!0);}function $i(){var e;Al(window,'resize',function(){null==e&&(e=setTimeout(function(){e=null,_i(Kt);},100));}),Al(window,'blur',function(){_i(mr);});}function Zi(e){if(null==ql){var t=Ui('span','​');Ki(e,Ui('span',[t,document.createTextNode('x')])),0!=e.firstChild.offsetHeight&&(ql=t.offsetWidth<=1&&t.offsetHeight>2&&!(bo&&8>wo));}var r=ql?Ui('span','​'):Ui('span',' ',null,'display: inline-block; width: 1px; margin-right: -1px');return r.setAttribute('cm-text',''),r;}function Qi(e){if(null!=$l)return $l;var t=Ki(e,document.createTextNode('AخA')),r=Kl(t,0,1).getBoundingClientRect();if(!r||r.left==r.right)return!1;var n=Kl(t,1,2).getBoundingClientRect();return $l=n.right-r.right<3;}function Ji(e){if(null!=is)return is;var t=Ki(e,Ui('span','x')),r=t.getBoundingClientRect(),n=Kl(t,0,1).getBoundingClientRect();return is=Math.abs(r.left-n.left)>1;}function eo(e,t,r,n){if(!e)return n(t,r,'ltr');for(var i=!1,o=0;o<e.length;++o){var l=e[o];(l.from<r&&l.to>t||t==r&&l.to==t)&&(n(Math.max(l.from,t),Math.min(l.to,r),1==l.level?'rtl':'ltr'),i=!0);}i||n(t,r,'ltr');}function to(e){return e.level%2?e.to:e.from;}function ro(e){return e.level%2?e.from:e.to;}function no(e){var t=ii(e);return t?to(t[0]):0;}function io(e){var t=ii(e);return t?ro(Di(t)):e.text.length;}function oo(e,t){var r=Zn(e.doc,t),n=yn(r);n!=r&&(t=ti(n));var i=ii(n),o=i?i[0].level%2?io(n):no(n):0;return Fo(t,o);}function lo(e,t){for(var r,n=Zn(e.doc,t);r=vn(n);)n=r.find(1,!0).line,t=null;var i=ii(n),o=i?i[0].level%2?no(n):io(n):n.text.length;return Fo(null==t?ti(n):t,o);}function so(e,t){var r=oo(e,t.line),n=Zn(e.doc,r.line),i=ii(n);if(!i||0==i[0].level){var o=Math.max(0,n.text.search(/\S/)),l=t.line==r.line&&t.ch<=o&&t.ch;return Fo(r.line,l?0:o);}return r;}function ao(e,t,r){var n=e[0].level;return t==n?!0:r==n?!1:r>t;}function uo(e,t){ls=null;for(var r,n=0;n<e.length;++n){var i=e[n];if(i.from<t&&i.to>t)return n;if(i.from==t||i.to==t){if(null!=r)return ao(e,i.level,e[r].level)?(i.from!=i.to&&(ls=r),n):(i.from!=i.to&&(ls=n),r);r=n;}}return r;}function co(e,t,r,n){if(!n)return t+r;do t+=r;while(t>0&&Gi(e.text.charAt(t)));return t;}function ho(e,t,r,n){var i=ii(e);if(!i)return fo(e,t,r,n);for(var o=uo(i,t),l=i[o],s=co(e,t,l.level%2?-r:r,n);;){if(s>l.from&&s<l.to)return s;if(s==l.from||s==l.to)return uo(i,s)==o?s:(l=i[o+=r],r>0==l.level%2?l.to:l.from);if(l=i[o+=r],!l)return null;s=r>0==l.level%2?co(e,l.to,-1,n):co(e,l.from,1,n);}}function fo(e,t,r,n){var i=t+r;if(n)for(;i>0&&Gi(e.text.charAt(i));)i+=r;return 0>i||i>e.text.length?null:i;}var po=navigator.userAgent,go=navigator.platform,vo=/gecko\/\d/i.test(po),mo=/MSIE \d/.test(po),yo=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(po),bo=mo||yo,wo=bo&&(mo?document.documentMode||6:yo[1]),xo=/WebKit\//.test(po),Co=xo&&/Qt\/\d+\.\d+/.test(po),So=/Chrome\//.test(po),Lo=/Opera\//.test(po),To=/Apple Computer/.test(navigator.vendor),ko=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(po),Mo=/PhantomJS/.test(po),No=/AppleWebKit/.test(po)&&/Mobile\/\w+/.test(po),Wo=No||/Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(po),Ao=No||/Mac/.test(go),Oo=/\bCrOS\b/.test(po),Do=/win/i.test(go),Ho=Lo&&po.match(/Version\/(\d*\.\d*)/);Ho&&(Ho=Number(Ho[1])),Ho&&Ho>=15&&(Lo=!1,xo=!0);var Po=Ao&&(Co||Lo&&(null==Ho||12.11>Ho)),Eo=vo||bo&&wo>=9,Io=!1,zo=!1;g.prototype=zi({update:function(e){var t=e.scrollWidth>e.clientWidth+1,r=e.scrollHeight>e.clientHeight+1,n=e.nativeBarWidth;if(r){this.vert.style.display='block',this.vert.style.bottom=t?n+'px':'0';var i=e.viewHeight-(t?n:0);this.vert.firstChild.style.height=Math.max(0,e.scrollHeight-e.clientHeight+i)+'px';}else this.vert.style.display='',this.vert.firstChild.style.height='0';if(t){this.horiz.style.display='block',this.horiz.style.right=r?n+'px':'0',this.horiz.style.left=e.barLeft+'px';var o=e.viewWidth-e.barLeft-(r?n:0);this.horiz.firstChild.style.width=e.scrollWidth-e.clientWidth+o+'px';}else this.horiz.style.display='',this.horiz.firstChild.style.width='0';return!this.checkedZeroWidth&&e.clientHeight>0&&(0==n&&this.zeroWidthHack(),this.checkedZeroWidth=!0),{right:r?n:0,bottom:t?n:0};},setScrollLeft:function(e){this.horiz.scrollLeft!=e&&(this.horiz.scrollLeft=e),this.disableHoriz&&this.enableZeroWidthBar(this.horiz,this.disableHoriz);},setScrollTop:function(e){this.vert.scrollTop!=e&&(this.vert.scrollTop=e),this.disableVert&&this.enableZeroWidthBar(this.vert,this.disableVert);},zeroWidthHack:function(){var e=Ao&&!ko?'12px':'18px';this.horiz.style.height=this.vert.style.width=e,this.horiz.style.pointerEvents=this.vert.style.pointerEvents='none',this.disableHoriz=new Ai,this.disableVert=new Ai;},enableZeroWidthBar:function(e,t){function r(){var n=e.getBoundingClientRect(),i=document.elementFromPoint(n.left+1,n.bottom-1);i!=e?e.style.pointerEvents='none':t.set(1e3,r);}e.style.pointerEvents='auto',t.set(1e3,r);},clear:function(){var e=this.horiz.parentNode;e.removeChild(this.horiz),e.removeChild(this.vert);}},g.prototype),v.prototype=zi({update:function(){
	return{bottom:0,right:0};},setScrollLeft:function(){},setScrollTop:function(){},clear:function(){}},v.prototype),e.scrollbarModel={'native':g,'null':v},T.prototype.signal=function(e,t){Ni(e,t)&&this.events.push(arguments);},T.prototype.finish=function(){for(var e=0;e<this.events.length;e++)Hl.apply(null,this.events[e]);};var Fo=e.Pos=function(e,t){return this instanceof Fo?(this.line=e,void(this.ch=t)):new Fo(e,t);},Ro=e.cmpPos=function(e,t){return e.line-t.line||e.ch-t.ch;},Bo=null;re.prototype=zi({init:function(e){function t(e){if(!ki(n,e)){if(n.somethingSelected())Bo={lineWise:!1,text:n.getSelections()},r.inaccurateSelection&&(r.prevInput='',r.inaccurateSelection=!1,o.value=Bo.text.join('\n'),Vl(o));else{if(!n.options.lineWiseCopyCut)return;var t=ee(n);Bo={lineWise:!0,text:t.text},'cut'==e.type?n.setSelections(t.ranges,null,zl):(r.prevInput='',o.value=t.text.join('\n'),Vl(o));}'cut'==e.type&&(n.state.cutIncoming=!0);}}var r=this,n=this.cm,i=this.wrapper=ne(),o=this.textarea=i.firstChild;e.wrapper.insertBefore(i,e.wrapper.firstChild),No&&(o.style.width='0px'),Al(o,'input',function(){bo&&wo>=9&&r.hasSelection&&(r.hasSelection=null),r.poll();}),Al(o,'paste',function(e){ki(n,e)||Q(e,n)||(n.state.pasteIncoming=!0,r.fastPoll());}),Al(o,'cut',t),Al(o,'copy',t),Al(e.scroller,'paste',function(t){jt(e,t)||ki(n,t)||(n.state.pasteIncoming=!0,r.focus());}),Al(e.lineSpace,'selectstart',function(t){jt(e,t)||Ml(t);}),Al(o,'compositionstart',function(){var e=n.getCursor('from');r.composing&&r.composing.range.clear(),r.composing={start:e,range:n.markText(e,n.getCursor('to'),{className:'CodeMirror-composing'})};}),Al(o,'compositionend',function(){r.composing&&(r.poll(),r.composing.range.clear(),r.composing=null);});},prepareSelection:function(){var e=this.cm,t=e.display,r=e.doc,n=Ee(e);if(e.options.moveInputWithCursor){var i=dt(e,r.sel.primary().head,'div'),o=t.wrapper.getBoundingClientRect(),l=t.lineDiv.getBoundingClientRect();n.teTop=Math.max(0,Math.min(t.wrapper.clientHeight-10,i.top+l.top-o.top)),n.teLeft=Math.max(0,Math.min(t.wrapper.clientWidth-10,i.left+l.left-o.left));}return n;},showSelection:function(e){var t=this.cm,r=t.display;Ki(r.cursorDiv,e.cursors),Ki(r.selectionDiv,e.selection),null!=e.teTop&&(this.wrapper.style.top=e.teTop+'px',this.wrapper.style.left=e.teLeft+'px');},reset:function(e){if(!this.contextMenuPending){var t,r,n=this.cm,i=n.doc;if(n.somethingSelected()){this.prevInput='';var o=i.sel.primary();t=ns&&(o.to().line-o.from().line>100||(r=n.getSelection()).length>1e3);var l=t?'-':r||n.getSelection();this.textarea.value=l,n.state.focused&&Vl(this.textarea),bo&&wo>=9&&(this.hasSelection=l);}else e||(this.prevInput=this.textarea.value='',bo&&wo>=9&&(this.hasSelection=null));this.inaccurateSelection=t;}},getField:function(){return this.textarea;},supportsTouch:function(){return!1;},focus:function(){if('nocursor'!=this.cm.options.readOnly&&(!Wo||ji()!=this.textarea))try{this.textarea.focus();}catch(e){}},blur:function(){this.textarea.blur();},resetPosition:function(){this.wrapper.style.top=this.wrapper.style.left=0;},receivedFocus:function(){this.slowPoll();},slowPoll:function(){var e=this;e.pollingFast||e.polling.set(this.cm.options.pollInterval,function(){e.poll(),e.cm.state.focused&&e.slowPoll();});},fastPoll:function(){function e(){var n=r.poll();n||t?(r.pollingFast=!1,r.slowPoll()):(t=!0,r.polling.set(60,e));}var t=!1,r=this;r.pollingFast=!0,r.polling.set(20,e);},poll:function(){var e=this.cm,t=this.textarea,r=this.prevInput;if(this.contextMenuPending||!e.state.focused||rs(t)&&!r&&!this.composing||e.isReadOnly()||e.options.disableInput||e.state.keySeq)return!1;var n=t.value;if(n==r&&!e.somethingSelected())return!1;if(bo&&wo>=9&&this.hasSelection===n||Ao&&/[\uf700-\uf7ff]/.test(n))return e.display.input.reset(),!1;if(e.doc.sel==e.display.selForContextMenu){var i=n.charCodeAt(0);if(8203!=i||r||(r='​'),8666==i)return this.reset(),this.cm.execCommand('undo');}for(var o=0,l=Math.min(r.length,n.length);l>o&&r.charCodeAt(o)==n.charCodeAt(o);)++o;var s=this;return Wt(e,function(){Z(e,n.slice(o),r.length-o,null,s.composing?'*compose':null),n.length>1e3||n.indexOf('\n')>-1?t.value=s.prevInput='':s.prevInput=n,s.composing&&(s.composing.range.clear(),s.composing.range=e.markText(s.composing.start,e.getCursor('to'),{className:'CodeMirror-composing'}));}),!0;},ensurePolled:function(){this.pollingFast&&this.poll()&&(this.pollingFast=!1);},onKeyPress:function(){bo&&wo>=9&&(this.hasSelection=null),this.fastPoll();},onContextMenu:function(e){function t(){if(null!=l.selectionStart){var e=i.somethingSelected(),t='​'+(e?l.value:'');l.value='⇚',l.value=t,n.prevInput=e?'':'​',l.selectionStart=1,l.selectionEnd=t.length,o.selForContextMenu=i.doc.sel;}}function r(){if(n.contextMenuPending=!1,n.wrapper.style.cssText=h,l.style.cssText=c,bo&&9>wo&&o.scrollbars.setScrollTop(o.scroller.scrollTop=a),null!=l.selectionStart){(!bo||bo&&9>wo)&&t();var e=0,r=function(){o.selForContextMenu==i.doc.sel&&0==l.selectionStart&&l.selectionEnd>0&&'​'==n.prevInput?At(i,cl.selectAll)(i):e++<10?o.detectingSelectAll=setTimeout(r,500):o.input.reset();};o.detectingSelectAll=setTimeout(r,200);}}var n=this,i=n.cm,o=i.display,l=n.textarea,s=Xt(i,e),a=o.scroller.scrollTop;if(s&&!Lo){var u=i.options.resetSelectionOnContextMenu;u&&-1==i.doc.sel.contains(s)&&At(i,ke)(i.doc,de(s),zl);var c=l.style.cssText,h=n.wrapper.style.cssText;n.wrapper.style.cssText='position: absolute';var f=n.wrapper.getBoundingClientRect();if(l.style.cssText='position: absolute; width: 30px; height: 30px; top: '+(e.clientY-f.top-5)+'px; left: '+(e.clientX-f.left-5)+'px; z-index: 1000; background: '+(bo?'rgba(255, 255, 255, .05)':'transparent')+'; outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);',xo)var d=window.scrollY;if(o.input.focus(),xo&&window.scrollTo(null,d),o.input.reset(),i.somethingSelected()||(l.value=n.prevInput=' '),n.contextMenuPending=!0,o.selForContextMenu=i.doc.sel,clearTimeout(o.detectingSelectAll),bo&&wo>=9&&t(),Eo){Wl(e);var p=function(){Dl(window,'mouseup',p),setTimeout(r,20);};Al(window,'mouseup',p);}else setTimeout(r,50);}},readOnlyChanged:function(e){e||this.reset();},setUneditable:Ei,needsContentAttribute:!1},re.prototype),ie.prototype=zi({init:function(e){function t(e){if(!ki(n,e)){if(n.somethingSelected())Bo={lineWise:!1,text:n.getSelections()},'cut'==e.type&&n.replaceSelection('',null,'cut');else{if(!n.options.lineWiseCopyCut)return;var t=ee(n);Bo={lineWise:!0,text:t.text},'cut'==e.type&&n.operation(function(){n.setSelections(t.ranges,0,zl),n.replaceSelection('',null,'cut');});}if(e.clipboardData&&!No)e.preventDefault(),e.clipboardData.clearData(),e.clipboardData.setData('text/plain',Bo.text.join('\n'));else{var r=ne(),i=r.firstChild;n.display.lineSpace.insertBefore(r,n.display.lineSpace.firstChild),i.value=Bo.text.join('\n');var o=document.activeElement;Vl(i),setTimeout(function(){n.display.lineSpace.removeChild(r),o.focus();},50);}}}var r=this,n=r.cm,i=r.div=e.lineDiv;te(i),Al(i,'paste',function(e){ki(n,e)||Q(e,n);}),Al(i,'compositionstart',function(e){var t=e.data;if(r.composing={sel:n.doc.sel,data:t,startData:t},t){var i=n.doc.sel.primary(),o=n.getLine(i.head.line),l=o.indexOf(t,Math.max(0,i.head.ch-t.length));l>-1&&l<=i.head.ch&&(r.composing.sel=de(Fo(i.head.line,l),Fo(i.head.line,l+t.length)));}}),Al(i,'compositionupdate',function(e){r.composing.data=e.data;}),Al(i,'compositionend',function(e){var t=r.composing;t&&(e.data==t.startData||/\u200b/.test(e.data)||(t.data=e.data),setTimeout(function(){t.handled||r.applyComposition(t),r.composing==t&&(r.composing=null);},50));}),Al(i,'touchstart',function(){r.forceCompositionEnd();}),Al(i,'input',function(){r.composing||!n.isReadOnly()&&r.pollContent()||Wt(r.cm,function(){Et(n);});}),Al(i,'copy',t),Al(i,'cut',t);},prepareSelection:function(){var e=Ee(this.cm,!1);return e.focus=this.cm.state.focused,e;},showSelection:function(e,t){e&&this.cm.display.view.length&&((e.focus||t)&&this.showPrimarySelection(),this.showMultipleSelections(e));},showPrimarySelection:function(){var e=window.getSelection(),t=this.cm.doc.sel.primary(),r=se(this.cm,e.anchorNode,e.anchorOffset),n=se(this.cm,e.focusNode,e.focusOffset);if(!r||r.bad||!n||n.bad||0!=Ro(q(r,n),t.from())||0!=Ro(_(r,n),t.to())){var i=oe(this.cm,t.from()),o=oe(this.cm,t.to());if(i||o){var l=this.cm.display.view,s=e.rangeCount&&e.getRangeAt(0);if(i){if(!o){var a=l[l.length-1].measure,u=a.maps?a.maps[a.maps.length-1]:a.map;o={node:u[u.length-1],offset:u[u.length-2]-u[u.length-3]};}}else i={node:l[0].measure.map[2],offset:0};try{var c=Kl(i.node,i.offset,o.offset,o.node);}catch(h){}c&&(!vo&&this.cm.state.focused?(e.collapse(i.node,i.offset),c.collapsed||e.addRange(c)):(e.removeAllRanges(),e.addRange(c)),s&&null==e.anchorNode?e.addRange(s):vo&&this.startGracePeriod()),this.rememberSelection();}}},startGracePeriod:function(){var e=this;clearTimeout(this.gracePeriod),this.gracePeriod=setTimeout(function(){e.gracePeriod=!1,e.selectionChanged()&&e.cm.operation(function(){e.cm.curOp.selectionChanged=!0;});},20);},showMultipleSelections:function(e){Ki(this.cm.display.cursorDiv,e.cursors),Ki(this.cm.display.selectionDiv,e.selection);},rememberSelection:function(){var e=window.getSelection();this.lastAnchorNode=e.anchorNode,this.lastAnchorOffset=e.anchorOffset,this.lastFocusNode=e.focusNode,this.lastFocusOffset=e.focusOffset;},selectionInEditor:function(){var e=window.getSelection();if(!e.rangeCount)return!1;var t=e.getRangeAt(0).commonAncestorContainer;return _l(this.div,t);},focus:function(){'nocursor'!=this.cm.options.readOnly&&this.div.focus();},blur:function(){this.div.blur();},getField:function(){return this.div;},supportsTouch:function(){return!0;},receivedFocus:function(){function e(){t.cm.state.focused&&(t.pollSelection(),t.polling.set(t.cm.options.pollInterval,e));}var t=this;this.selectionInEditor()?this.pollSelection():Wt(this.cm,function(){t.cm.curOp.selectionChanged=!0;}),this.polling.set(this.cm.options.pollInterval,e);},selectionChanged:function(){var e=window.getSelection();return e.anchorNode!=this.lastAnchorNode||e.anchorOffset!=this.lastAnchorOffset||e.focusNode!=this.lastFocusNode||e.focusOffset!=this.lastFocusOffset;},pollSelection:function(){if(!this.composing&&!this.gracePeriod&&this.selectionChanged()){var e=window.getSelection(),t=this.cm;this.rememberSelection();var r=se(t,e.anchorNode,e.anchorOffset),n=se(t,e.focusNode,e.focusOffset);r&&n&&Wt(t,function(){ke(t.doc,de(r,n),zl),(r.bad||n.bad)&&(t.curOp.selectionChanged=!0);});}},pollContent:function(){var e=this.cm,t=e.display,r=e.doc.sel.primary(),n=r.from(),i=r.to();if(n.line<t.viewFrom||i.line>t.viewTo-1)return!1;var o;if(n.line==t.viewFrom||0==(o=Ft(e,n.line)))var l=ti(t.view[0].line),s=t.view[0].node;else var l=ti(t.view[o].line),s=t.view[o-1].node.nextSibling;var a=Ft(e,i.line);if(a==t.view.length-1)var u=t.viewTo-1,c=t.lineDiv.lastChild;else var u=ti(t.view[a+1].line)-1,c=t.view[a+1].node.previousSibling;for(var h=e.doc.splitLines(ue(e,s,c,l,u)),f=Qn(e.doc,Fo(l,0),Fo(u,Zn(e.doc,u).text.length));h.length>1&&f.length>1;)if(Di(h)==Di(f))h.pop(),f.pop(),u--;else{if(h[0]!=f[0])break;h.shift(),f.shift(),l++;}for(var d=0,p=0,g=h[0],v=f[0],m=Math.min(g.length,v.length);m>d&&g.charCodeAt(d)==v.charCodeAt(d);)++d;for(var y=Di(h),b=Di(f),w=Math.min(y.length-(1==h.length?d:0),b.length-(1==f.length?d:0));w>p&&y.charCodeAt(y.length-p-1)==b.charCodeAt(b.length-p-1);)++p;h[h.length-1]=y.slice(0,y.length-p),h[0]=h[0].slice(d);var x=Fo(l,d),C=Fo(u,f.length?Di(f).length-p:0);return h.length>1||h[0]||Ro(x,C)?(Or(e.doc,h,x,C,'+input'),!0):void 0;},ensurePolled:function(){this.forceCompositionEnd();},reset:function(){this.forceCompositionEnd();},forceCompositionEnd:function(){this.composing&&!this.composing.handled&&(this.applyComposition(this.composing),this.composing.handled=!0,this.div.blur(),this.div.focus());},applyComposition:function(e){this.cm.isReadOnly()?At(this.cm,Et)(this.cm):e.data&&e.data!=e.startData&&At(this.cm,Z)(this.cm,e.data,0,e.sel);},setUneditable:function(e){e.contentEditable='false';},onKeyPress:function(e){e.preventDefault(),this.cm.isReadOnly()||At(this.cm,Z)(this.cm,String.fromCharCode(null==e.charCode?e.keyCode:e.charCode),0);},readOnlyChanged:function(e){this.div.contentEditable=String('nocursor'!=e);},onContextMenu:Ei,resetPosition:Ei,needsContentAttribute:!0},ie.prototype),e.inputStyles={textarea:re,contenteditable:ie},ce.prototype={primary:function(){return this.ranges[this.primIndex];},equals:function(e){if(e==this)return!0;if(e.primIndex!=this.primIndex||e.ranges.length!=this.ranges.length)return!1;for(var t=0;t<this.ranges.length;t++){var r=this.ranges[t],n=e.ranges[t];if(0!=Ro(r.anchor,n.anchor)||0!=Ro(r.head,n.head))return!1;}return!0;},deepCopy:function(){for(var e=[],t=0;t<this.ranges.length;t++)e[t]=new he(Y(this.ranges[t].anchor),Y(this.ranges[t].head));return new ce(e,this.primIndex);},somethingSelected:function(){for(var e=0;e<this.ranges.length;e++)if(!this.ranges[e].empty())return!0;return!1;},contains:function(e,t){t||(t=e);for(var r=0;r<this.ranges.length;r++){var n=this.ranges[r];if(Ro(t,n.from())>=0&&Ro(e,n.to())<=0)return r;}return-1;}},he.prototype={from:function(){return q(this.anchor,this.head);},to:function(){return _(this.anchor,this.head);},empty:function(){return this.head.line==this.anchor.line&&this.head.ch==this.anchor.ch;}};var Go,Uo,Vo,Ko={left:0,right:0,top:0,bottom:0},jo=null,Xo=0,Yo=0,_o=0,qo=null;bo?qo=-.53:vo?qo=15:So?qo=-.7:To&&(qo=-1/3);var $o=function(e){var t=e.wheelDeltaX,r=e.wheelDeltaY;return null==t&&e.detail&&e.axis==e.HORIZONTAL_AXIS&&(t=e.detail),null==r&&e.detail&&e.axis==e.VERTICAL_AXIS?r=e.detail:null==r&&(r=e.wheelDelta),{x:t,y:r};};e.wheelEventPixels=function(e){var t=$o(e);return t.x*=qo,t.y*=qo,t;};var Zo=new Ai,Qo=null,Jo=e.changeEnd=function(e){return e.text?Fo(e.from.line+e.text.length-1,Di(e.text).length+(1==e.text.length?e.from.ch:0)):e.to;};e.prototype={constructor:e,focus:function(){window.focus(),this.display.input.focus();},setOption:function(e,t){var r=this.options,n=r[e];r[e]==t&&'mode'!=e||(r[e]=t,tl.hasOwnProperty(e)&&At(this,tl[e])(this,t,n));},getOption:function(e){return this.options[e];},getDoc:function(){return this.doc;},addKeyMap:function(e,t){this.state.keyMaps[t?'push':'unshift'](Xr(e));},removeKeyMap:function(e){for(var t=this.state.keyMaps,r=0;r<t.length;++r)if(t[r]==e||t[r].name==e)return t.splice(r,1),!0;},addOverlay:Ot(function(t,r){var n=t.token?t:e.getMode(this.options,t);if(n.startState)throw new Error('Overlays may not be stateful.');this.state.overlays.push({mode:n,modeSpec:t,opaque:r&&r.opaque}),this.state.modeGen++,Et(this);}),removeOverlay:Ot(function(e){for(var t=this.state.overlays,r=0;r<t.length;++r){var n=t[r].modeSpec;if(n==e||'string'==typeof e&&n.name==e)return t.splice(r,1),this.state.modeGen++,void Et(this);}}),indentLine:Ot(function(e,t,r){'string'!=typeof t&&'number'!=typeof t&&(t=null==t?this.options.smartIndent?'smart':'prev':t?'add':'subtract'),me(this.doc,e)&&Rr(this,e,t,r);}),indentSelection:Ot(function(e){for(var t=this.doc.sel.ranges,r=-1,n=0;n<t.length;n++){var i=t[n];if(i.empty())i.head.line>r&&(Rr(this,i.head.line,e,!0),r=i.head.line,n==this.doc.sel.primIndex&&zr(this));else{var o=i.from(),l=i.to(),s=Math.max(r,o.line);r=Math.min(this.lastLine(),l.line-(l.ch?0:1))+1;for(var a=s;r>a;++a)Rr(this,a,e);var u=this.doc.sel.ranges;0==o.ch&&t.length==u.length&&u[n].from().ch>0&&Ce(this.doc,n,new he(o,u[n].to()),zl);}}}),getTokenAt:function(e,t){return Dn(this,e,t);},getLineTokens:function(e,t){return Dn(this,Fo(e),t,!0);},getTokenTypeAt:function(e){e=ge(this.doc,e);var t,r=En(this,Zn(this.doc,e.line)),n=0,i=(r.length-1)/2,o=e.ch;if(0==o)t=r[2];else for(;;){var l=n+i>>1;if((l?r[2*l-1]:0)>=o)i=l;else{if(!(r[2*l+1]<o)){t=r[2*l+2];break;}n=l+1;}}var s=t?t.indexOf('cm-overlay '):-1;return 0>s?t:0==s?null:t.slice(0,s-1);},getModeAt:function(t){var r=this.doc.mode;return r.innerMode?e.innerMode(r,this.getTokenAt(t).state).mode:r;},getHelper:function(e,t){return this.getHelpers(e,t)[0];},getHelpers:function(e,t){var r=[];if(!sl.hasOwnProperty(t))return r;var n=sl[t],i=this.getModeAt(e);if('string'==typeof i[t])n[i[t]]&&r.push(n[i[t]]);else if(i[t])for(var o=0;o<i[t].length;o++){var l=n[i[t][o]];l&&r.push(l);}else i.helperType&&n[i.helperType]?r.push(n[i.helperType]):n[i.name]&&r.push(n[i.name]);for(var o=0;o<n._global.length;o++){var s=n._global[o];s.pred(i,this)&&-1==Hi(r,s.val)&&r.push(s.val);}return r;},getStateAfter:function(e,t){var r=this.doc;return e=pe(r,null==e?r.first+r.size-1:e),Ue(this,e+1,t);},cursorCoords:function(e,t){var r,n=this.doc.sel.primary();return r=null==e?n.head:'object'==typeof e?ge(this.doc,e):e?n.from():n.to(),dt(this,r,t||'page');},charCoords:function(e,t){return ft(this,ge(this.doc,e),t||'page');},coordsChar:function(e,t){return e=ht(this,e,t||'page'),vt(this,e.left,e.top);},lineAtHeight:function(e,t){return e=ht(this,{top:e,left:0},t||'page').top,ri(this.doc,e+this.display.viewOffset);},heightAtLine:function(e,t){var r,n=!1;if('number'==typeof e){var i=this.doc.first+this.doc.size-1;e<this.doc.first?e=this.doc.first:e>i&&(e=i,n=!0),r=Zn(this.doc,e);}else r=e;return ct(this,r,{top:0,left:0},t||'page').top+(n?this.doc.height-ni(r):0);},defaultTextHeight:function(){return yt(this.display);},defaultCharWidth:function(){return bt(this.display);},setGutterMarker:Ot(function(e,t,r){return Br(this.doc,e,'gutter',function(e){var n=e.gutterMarkers||(e.gutterMarkers={});return n[t]=r,!r&&Bi(n)&&(e.gutterMarkers=null),!0;});}),clearGutter:Ot(function(e){var t=this,r=t.doc,n=r.first;r.iter(function(r){r.gutterMarkers&&r.gutterMarkers[e]&&(r.gutterMarkers[e]=null,It(t,n,'gutter'),Bi(r.gutterMarkers)&&(r.gutterMarkers=null)),++n;});}),lineInfo:function(e){if('number'==typeof e){if(!me(this.doc,e))return null;var t=e;if(e=Zn(this.doc,e),!e)return null;}else{var t=ti(e);if(null==t)return null;}return{line:t,handle:e,text:e.text,gutterMarkers:e.gutterMarkers,textClass:e.textClass,bgClass:e.bgClass,wrapClass:e.wrapClass,widgets:e.widgets};},getViewport:function(){return{from:this.display.viewFrom,to:this.display.viewTo};},addWidget:function(e,t,r,n,i){var o=this.display;e=dt(this,ge(this.doc,e));var l=e.bottom,s=e.left;if(t.style.position='absolute',t.setAttribute('cm-ignore-events','true'),this.display.input.setUneditable(t),o.sizer.appendChild(t),'over'==n)l=e.top;else if('above'==n||'near'==n){var a=Math.max(o.wrapper.clientHeight,this.doc.height),u=Math.max(o.sizer.clientWidth,o.lineSpace.clientWidth);('above'==n||e.bottom+t.offsetHeight>a)&&e.top>t.offsetHeight?l=e.top-t.offsetHeight:e.bottom+t.offsetHeight<=a&&(l=e.bottom),s+t.offsetWidth>u&&(s=u-t.offsetWidth);}t.style.top=l+'px',t.style.left=t.style.right='','right'==i?(s=o.sizer.clientWidth-t.offsetWidth,t.style.right='0px'):('left'==i?s=0:'middle'==i&&(s=(o.sizer.clientWidth-t.offsetWidth)/2),t.style.left=s+'px'),r&&Pr(this,s,l,s+t.offsetWidth,l+t.offsetHeight);},triggerOnKeyDown:Ot(hr),triggerOnKeyPress:Ot(pr),triggerOnKeyUp:dr,execCommand:function(e){return cl.hasOwnProperty(e)?cl[e].call(null,this):void 0;},triggerElectric:Ot(function(e){J(this,e);}),findPosH:function(e,t,r,n){var i=1;0>t&&(i=-1,t=-t);for(var o=0,l=ge(this.doc,e);t>o&&(l=Ur(this.doc,l,i,r,n),!l.hitSide);++o);return l;},moveH:Ot(function(e,t){var r=this;r.extendSelectionsBy(function(n){return r.display.shift||r.doc.extend||n.empty()?Ur(r.doc,n.head,e,t,r.options.rtlMoveVisually):0>e?n.from():n.to();},Rl);}),deleteH:Ot(function(e,t){var r=this.doc.sel,n=this.doc;r.somethingSelected()?n.replaceSelection('',null,'+delete'):Gr(this,function(r){var i=Ur(n,r.head,e,t,!1);return 0>e?{from:i,to:r.head}:{from:r.head,to:i};});}),findPosV:function(e,t,r,n){var i=1,o=n;0>t&&(i=-1,t=-t);for(var l=0,s=ge(this.doc,e);t>l;++l){var a=dt(this,s,'div');if(null==o?o=a.left:a.left=o,s=Vr(this,a,i,r),s.hitSide)break;}return s;},moveV:Ot(function(e,t){var r=this,n=this.doc,i=[],o=!r.display.shift&&!n.extend&&n.sel.somethingSelected();if(n.extendSelectionsBy(function(l){if(o)return 0>e?l.from():l.to();var s=dt(r,l.head,'div');null!=l.goalColumn&&(s.left=l.goalColumn),i.push(s.left);var a=Vr(r,s,e,t);return'page'==t&&l==n.sel.primary()&&Ir(r,null,ft(r,a,'div').top-s.top),a;},Rl),i.length)for(var l=0;l<n.sel.ranges.length;l++)n.sel.ranges[l].goalColumn=i[l];}),findWordAt:function(e){var t=this.doc,r=Zn(t,e.line).text,n=e.ch,i=e.ch;if(r){var o=this.getHelper(e,'wordChars');(e.xRel<0||i==r.length)&&n?--n:++i;for(var l=r.charAt(n),s=Ri(l,o)?function(e){return Ri(e,o);}:/\s/.test(l)?function(e){return/\s/.test(e);}:function(e){return!/\s/.test(e)&&!Ri(e);};n>0&&s(r.charAt(n-1));)--n;for(;i<r.length&&s(r.charAt(i));)++i;}return new he(Fo(e.line,n),Fo(e.line,i));},toggleOverwrite:function(e){null!=e&&e==this.state.overwrite||((this.state.overwrite=!this.state.overwrite)?Ql(this.display.cursorDiv,'CodeMirror-overwrite'):Zl(this.display.cursorDiv,'CodeMirror-overwrite'),Hl(this,'overwriteToggle',this,this.state.overwrite));},hasFocus:function(){return this.display.input.getField()==ji();},isReadOnly:function(){return!(!this.options.readOnly&&!this.doc.cantEdit);},scrollTo:Ot(function(e,t){null==e&&null==t||Fr(this),null!=e&&(this.curOp.scrollLeft=e),null!=t&&(this.curOp.scrollTop=t);}),getScrollInfo:function(){var e=this.display.scroller;return{left:e.scrollLeft,top:e.scrollTop,height:e.scrollHeight-Xe(this)-this.display.barHeight,width:e.scrollWidth-Xe(this)-this.display.barWidth,clientHeight:_e(this),clientWidth:Ye(this)};},scrollIntoView:Ot(function(e,t){if(null==e?(e={from:this.doc.sel.primary().head,to:null},null==t&&(t=this.options.cursorScrollMargin)):'number'==typeof e?e={from:Fo(e,0),to:null}:null==e.from&&(e={from:e,to:null}),e.to||(e.to=e.from),e.margin=t||0,null!=e.from.line)Fr(this),this.curOp.scrollToPos=e;else{var r=Er(this,Math.min(e.from.left,e.to.left),Math.min(e.from.top,e.to.top)-e.margin,Math.max(e.from.right,e.to.right),Math.max(e.from.bottom,e.to.bottom)+e.margin);this.scrollTo(r.scrollLeft,r.scrollTop);}}),setSize:Ot(function(e,t){function r(e){return'number'==typeof e||/^\d+$/.test(String(e))?e+'px':e;}var n=this;null!=e&&(n.display.wrapper.style.width=r(e)),null!=t&&(n.display.wrapper.style.height=r(t)),n.options.lineWrapping&&lt(this);var i=n.display.viewFrom;n.doc.iter(i,n.display.viewTo,function(e){if(e.widgets)for(var t=0;t<e.widgets.length;t++)if(e.widgets[t].noHScroll){It(n,i,'widget');break;}++i;}),n.curOp.forceUpdate=!0,Hl(n,'refresh',this);}),operation:function(e){return Wt(this,e);},refresh:Ot(function(){var e=this.display.cachedTextHeight;Et(this),this.curOp.forceUpdate=!0,st(this),this.scrollTo(this.doc.scrollLeft,this.doc.scrollTop),c(this),(null==e||Math.abs(e-yt(this.display))>.5)&&l(this),Hl(this,'refresh',this);}),swapDoc:Ot(function(e){var t=this.doc;return t.cm=null,$n(this,e),st(this),this.display.input.reset(),this.scrollTo(e.scrollLeft,e.scrollTop),this.curOp.forceScroll=!0,Li(this,'swapDoc',this,t),t;}),getInputField:function(){return this.display.input.getField();},getWrapperElement:function(){return this.display.wrapper;},getScrollerElement:function(){return this.display.scroller;},getGutterElement:function(){return this.display.gutters;}},Wi(e);var el=e.defaults={},tl=e.optionHandlers={},rl=e.Init={toString:function(){return'CodeMirror.Init';}};Kr('value','',function(e,t){e.setValue(t);},!0),Kr('mode',null,function(e,t){e.doc.modeOption=t,r(e);},!0),Kr('indentUnit',2,r,!0),Kr('indentWithTabs',!1),Kr('smartIndent',!0),Kr('tabSize',4,function(e){n(e),st(e),Et(e);},!0),Kr('lineSeparator',null,function(e,t){if(e.doc.lineSep=t,t){var r=[],n=e.doc.first;e.doc.iter(function(e){for(var i=0;;){var o=e.text.indexOf(t,i);if(-1==o)break;i=o+t.length,r.push(Fo(n,o));}n++;});for(var i=r.length-1;i>=0;i--)Or(e.doc,t,r[i],Fo(r[i].line,r[i].ch+t.length));}}),Kr('specialChars',/[\u0000-\u001f\u007f\u00ad\u200b-\u200f\u2028\u2029\ufeff]/g,function(t,r,n){t.state.specialChars=new RegExp(r.source+(r.test('	')?'':'|	'),'g'),n!=e.Init&&t.refresh();}),Kr('specialCharPlaceholder',Rn,function(e){e.refresh();},!0),Kr('electricChars',!0),Kr('inputStyle',Wo?'contenteditable':'textarea',function(){throw new Error('inputStyle can not (yet) be changed in a running editor');},!0),Kr('rtlMoveVisually',!Do),Kr('wholeLineUpdateBefore',!0),Kr('theme','default',function(e){s(e),a(e);},!0),Kr('keyMap','default',function(t,r,n){var i=Xr(r),o=n!=e.Init&&Xr(n);o&&o.detach&&o.detach(t,i),i.attach&&i.attach(t,o||null);}),Kr('extraKeys',null),Kr('lineWrapping',!1,i,!0),Kr('gutters',[],function(e){d(e.options),a(e);},!0),Kr('fixedGutter',!0,function(e,t){e.display.gutters.style.left=t?L(e.display)+'px':'0',e.refresh();},!0),Kr('coverGutterNextToScrollbar',!1,function(e){y(e);},!0),Kr('scrollbarStyle','native',function(e){m(e),y(e),e.display.scrollbars.setScrollTop(e.doc.scrollTop),e.display.scrollbars.setScrollLeft(e.doc.scrollLeft);},!0),Kr('lineNumbers',!1,function(e){d(e.options),a(e);},!0),Kr('firstLineNumber',1,a,!0),Kr('lineNumberFormatter',function(e){return e;},a,!0),Kr('showCursorWhenSelecting',!1,Pe,!0),Kr('resetSelectionOnContextMenu',!0),Kr('lineWiseCopyCut',!0),Kr('readOnly',!1,function(e,t){'nocursor'==t?(mr(e),e.display.input.blur(),e.display.disabled=!0):e.display.disabled=!1,e.display.input.readOnlyChanged(t);}),Kr('disableInput',!1,function(e,t){t||e.display.input.reset();},!0),Kr('dragDrop',!0,Vt),Kr('allowDropFileTypes',null),Kr('cursorBlinkRate',530),Kr('cursorScrollMargin',0),Kr('cursorHeight',1,Pe,!0),Kr('singleCursorHeightPerLine',!0,Pe,!0),Kr('workTime',100),Kr('workDelay',100),Kr('flattenSpans',!0,n,!0),Kr('addModeClass',!1,n,!0),Kr('pollInterval',100),Kr('undoDepth',200,function(e,t){e.doc.history.undoDepth=t;}),Kr('historyEventDelay',1250),Kr('viewportMargin',10,function(e){e.refresh();},!0),Kr('maxHighlightLength',1e4,n,!0),Kr('moveInputWithCursor',!0,function(e,t){t||e.display.input.resetPosition();}),Kr('tabindex',null,function(e,t){e.display.input.getField().tabIndex=t||'';}),Kr('autofocus',null);var nl=e.modes={},il=e.mimeModes={};e.defineMode=function(t,r){e.defaults.mode||'null'==t||(e.defaults.mode=t),arguments.length>2&&(r.dependencies=Array.prototype.slice.call(arguments,2)),nl[t]=r;},e.defineMIME=function(e,t){il[e]=t;},e.resolveMode=function(t){if('string'==typeof t&&il.hasOwnProperty(t))t=il[t];else if(t&&'string'==typeof t.name&&il.hasOwnProperty(t.name)){var r=il[t.name];'string'==typeof r&&(r={name:r}),t=Ii(r,t),t.name=r.name;}else if('string'==typeof t&&/^[\w\-]+\/[\w\-]+\+xml$/.test(t))return e.resolveMode('application/xml');return'string'==typeof t?{name:t}:t||{name:'null'};},e.getMode=function(t,r){var r=e.resolveMode(r),n=nl[r.name];if(!n)return e.getMode(t,'text/plain');var i=n(t,r);if(ol.hasOwnProperty(r.name)){var o=ol[r.name];for(var l in o)o.hasOwnProperty(l)&&(i.hasOwnProperty(l)&&(i['_'+l]=i[l]),i[l]=o[l]);}if(i.name=r.name,r.helperType&&(i.helperType=r.helperType),r.modeProps)for(var l in r.modeProps)i[l]=r.modeProps[l];return i;},e.defineMode('null',function(){return{token:function(e){e.skipToEnd();}};}),e.defineMIME('text/plain','null');var ol=e.modeExtensions={};e.extendMode=function(e,t){var r=ol.hasOwnProperty(e)?ol[e]:ol[e]={};zi(t,r);},e.defineExtension=function(t,r){e.prototype[t]=r;},e.defineDocExtension=function(e,t){Ll.prototype[e]=t;},e.defineOption=Kr;var ll=[];e.defineInitHook=function(e){ll.push(e);};var sl=e.helpers={};e.registerHelper=function(t,r,n){sl.hasOwnProperty(t)||(sl[t]=e[t]={_global:[]}),sl[t][r]=n;},e.registerGlobalHelper=function(t,r,n,i){e.registerHelper(t,r,i),sl[t]._global.push({pred:n,val:i});};var al=e.copyState=function(e,t){if(t===!0)return t;if(e.copyState)return e.copyState(t);var r={};for(var n in t){var i=t[n];i instanceof Array&&(i=i.concat([])),r[n]=i;}return r;},ul=e.startState=function(e,t,r){return e.startState?e.startState(t,r):!0;};e.innerMode=function(e,t){for(;e.innerMode;){var r=e.innerMode(t);if(!r||r.mode==e)break;t=r.state,e=r.mode;}return r||{mode:e,state:t};};var cl=e.commands={selectAll:function(e){e.setSelection(Fo(e.firstLine(),0),Fo(e.lastLine()),zl);},singleSelection:function(e){e.setSelection(e.getCursor('anchor'),e.getCursor('head'),zl);},killLine:function(e){Gr(e,function(t){if(t.empty()){var r=Zn(e.doc,t.head.line).text.length;return t.head.ch==r&&t.head.line<e.lastLine()?{from:t.head,to:Fo(t.head.line+1,0)}:{from:t.head,to:Fo(t.head.line,r)};}return{from:t.from(),to:t.to()};});},deleteLine:function(e){Gr(e,function(t){return{from:Fo(t.from().line,0),to:ge(e.doc,Fo(t.to().line+1,0))};});},delLineLeft:function(e){Gr(e,function(e){return{from:Fo(e.from().line,0),to:e.from()};});},delWrappedLineLeft:function(e){Gr(e,function(t){var r=e.charCoords(t.head,'div').top+5,n=e.coordsChar({left:0,top:r},'div');return{from:n,to:t.from()};});},delWrappedLineRight:function(e){Gr(e,function(t){var r=e.charCoords(t.head,'div').top+5,n=e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:r},'div');return{from:t.from(),to:n};});},undo:function(e){e.undo();},redo:function(e){e.redo();},undoSelection:function(e){e.undoSelection();},redoSelection:function(e){e.redoSelection();},goDocStart:function(e){e.extendSelection(Fo(e.firstLine(),0));},goDocEnd:function(e){e.extendSelection(Fo(e.lastLine()));},goLineStart:function(e){e.extendSelectionsBy(function(t){return oo(e,t.head.line);},{origin:'+move',bias:1});},goLineStartSmart:function(e){e.extendSelectionsBy(function(t){return so(e,t.head);},{origin:'+move',bias:1});},goLineEnd:function(e){e.extendSelectionsBy(function(t){return lo(e,t.head.line);},{origin:'+move',bias:-1});},goLineRight:function(e){e.extendSelectionsBy(function(t){var r=e.charCoords(t.head,'div').top+5;return e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:r},'div');},Rl);},goLineLeft:function(e){e.extendSelectionsBy(function(t){var r=e.charCoords(t.head,'div').top+5;return e.coordsChar({left:0,top:r},'div');},Rl);},goLineLeftSmart:function(e){e.extendSelectionsBy(function(t){var r=e.charCoords(t.head,'div').top+5,n=e.coordsChar({left:0,top:r},'div');return n.ch<e.getLine(n.line).search(/\S/)?so(e,t.head):n;},Rl);},goLineUp:function(e){e.moveV(-1,'line');},goLineDown:function(e){e.moveV(1,'line');},goPageUp:function(e){e.moveV(-1,'page');},goPageDown:function(e){e.moveV(1,'page');},goCharLeft:function(e){e.moveH(-1,'char');},goCharRight:function(e){e.moveH(1,'char');},goColumnLeft:function(e){e.moveH(-1,'column');},goColumnRight:function(e){e.moveH(1,'column');},goWordLeft:function(e){e.moveH(-1,'word');},goGroupRight:function(e){e.moveH(1,'group');},goGroupLeft:function(e){e.moveH(-1,'group');},goWordRight:function(e){e.moveH(1,'word');},delCharBefore:function(e){e.deleteH(-1,'char');},delCharAfter:function(e){e.deleteH(1,'char');},delWordBefore:function(e){e.deleteH(-1,'word');},delWordAfter:function(e){e.deleteH(1,'word');},delGroupBefore:function(e){e.deleteH(-1,'group');},delGroupAfter:function(e){e.deleteH(1,'group');},indentAuto:function(e){e.indentSelection('smart');},indentMore:function(e){e.indentSelection('add');},indentLess:function(e){e.indentSelection('subtract');},insertTab:function(e){e.replaceSelection('	');},insertSoftTab:function(e){for(var t=[],r=e.listSelections(),n=e.options.tabSize,i=0;i<r.length;i++){var o=r[i].from(),l=Bl(e.getLine(o.line),o.ch,n);t.push(Oi(n-l%n));}e.replaceSelections(t);},defaultTab:function(e){e.somethingSelected()?e.indentSelection('add'):e.execCommand('insertTab');},transposeChars:function(e){Wt(e,function(){for(var t=e.listSelections(),r=[],n=0;n<t.length;n++){var i=t[n].head,o=Zn(e.doc,i.line).text;if(o)if(i.ch==o.length&&(i=new Fo(i.line,i.ch-1)),i.ch>0)i=new Fo(i.line,i.ch+1),e.replaceRange(o.charAt(i.ch-1)+o.charAt(i.ch-2),Fo(i.line,i.ch-2),i,'+transpose');else if(i.line>e.doc.first){var l=Zn(e.doc,i.line-1).text;l&&e.replaceRange(o.charAt(0)+e.doc.lineSeparator()+l.charAt(l.length-1),Fo(i.line-1,l.length-1),Fo(i.line,1),'+transpose');}r.push(new he(i,i));}e.setSelections(r);});},newlineAndIndent:function(e){Wt(e,function(){for(var t=e.listSelections().length,r=0;t>r;r++){var n=e.listSelections()[r];e.replaceRange(e.doc.lineSeparator(),n.anchor,n.head,'+input'),e.indentLine(n.from().line+1,null,!0);}zr(e);});},openLine:function(e){e.replaceSelection('\n','start');},toggleOverwrite:function(e){
		e.toggleOverwrite();}},hl=e.keyMap={};hl.basic={Left:'goCharLeft',Right:'goCharRight',Up:'goLineUp',Down:'goLineDown',End:'goLineEnd',Home:'goLineStartSmart',PageUp:'goPageUp',PageDown:'goPageDown',Delete:'delCharAfter',Backspace:'delCharBefore','Shift-Backspace':'delCharBefore',Tab:'defaultTab','Shift-Tab':'indentAuto',Enter:'newlineAndIndent',Insert:'toggleOverwrite',Esc:'singleSelection'},hl.pcDefault={'Ctrl-A':'selectAll','Ctrl-D':'deleteLine','Ctrl-Z':'undo','Shift-Ctrl-Z':'redo','Ctrl-Y':'redo','Ctrl-Home':'goDocStart','Ctrl-End':'goDocEnd','Ctrl-Up':'goLineUp','Ctrl-Down':'goLineDown','Ctrl-Left':'goGroupLeft','Ctrl-Right':'goGroupRight','Alt-Left':'goLineStart','Alt-Right':'goLineEnd','Ctrl-Backspace':'delGroupBefore','Ctrl-Delete':'delGroupAfter','Ctrl-S':'save','Ctrl-F':'find','Ctrl-G':'findNext','Shift-Ctrl-G':'findPrev','Shift-Ctrl-F':'replace','Shift-Ctrl-R':'replaceAll','Ctrl-[':'indentLess','Ctrl-]':'indentMore','Ctrl-U':'undoSelection','Shift-Ctrl-U':'redoSelection','Alt-U':'redoSelection',fallthrough:'basic'},hl.emacsy={'Ctrl-F':'goCharRight','Ctrl-B':'goCharLeft','Ctrl-P':'goLineUp','Ctrl-N':'goLineDown','Alt-F':'goWordRight','Alt-B':'goWordLeft','Ctrl-A':'goLineStart','Ctrl-E':'goLineEnd','Ctrl-V':'goPageDown','Shift-Ctrl-V':'goPageUp','Ctrl-D':'delCharAfter','Ctrl-H':'delCharBefore','Alt-D':'delWordAfter','Alt-Backspace':'delWordBefore','Ctrl-K':'killLine','Ctrl-T':'transposeChars','Ctrl-O':'openLine'},hl.macDefault={'Cmd-A':'selectAll','Cmd-D':'deleteLine','Cmd-Z':'undo','Shift-Cmd-Z':'redo','Cmd-Y':'redo','Cmd-Home':'goDocStart','Cmd-Up':'goDocStart','Cmd-End':'goDocEnd','Cmd-Down':'goDocEnd','Alt-Left':'goGroupLeft','Alt-Right':'goGroupRight','Cmd-Left':'goLineLeft','Cmd-Right':'goLineRight','Alt-Backspace':'delGroupBefore','Ctrl-Alt-Backspace':'delGroupAfter','Alt-Delete':'delGroupAfter','Cmd-S':'save','Cmd-F':'find','Cmd-G':'findNext','Shift-Cmd-G':'findPrev','Cmd-Alt-F':'replace','Shift-Cmd-Alt-F':'replaceAll','Cmd-[':'indentLess','Cmd-]':'indentMore','Cmd-Backspace':'delWrappedLineLeft','Cmd-Delete':'delWrappedLineRight','Cmd-U':'undoSelection','Shift-Cmd-U':'redoSelection','Ctrl-Up':'goDocStart','Ctrl-Down':'goDocEnd',fallthrough:['basic','emacsy']},hl['default']=Ao?hl.macDefault:hl.pcDefault,e.normalizeKeyMap=function(e){var t={};for(var r in e)if(e.hasOwnProperty(r)){var n=e[r];if(/^(name|fallthrough|(de|at)tach)$/.test(r))continue;if('...'==n){delete e[r];continue;}for(var i=Pi(r.split(' '),jr),o=0;o<i.length;o++){var l,s;o==i.length-1?(s=i.join(' '),l=n):(s=i.slice(0,o+1).join(' '),l='...');var a=t[s];if(a){if(a!=l)throw new Error('Inconsistent bindings for '+s);}else t[s]=l;}delete e[r];}for(var u in t)e[u]=t[u];return e;};var fl=e.lookupKey=function(e,t,r,n){t=Xr(t);var i=t.call?t.call(e,n):t[e];if(i===!1)return'nothing';if('...'===i)return'multi';if(null!=i&&r(i))return'handled';if(t.fallthrough){if('[object Array]'!=Object.prototype.toString.call(t.fallthrough))return fl(e,t.fallthrough,r,n);for(var o=0;o<t.fallthrough.length;o++){var l=fl(e,t.fallthrough[o],r,n);if(l)return l;}}},dl=e.isModifierKey=function(e){var t='string'==typeof e?e:os[e.keyCode];return'Ctrl'==t||'Alt'==t||'Shift'==t||'Mod'==t;},pl=e.keyName=function(e,t){if(Lo&&34==e.keyCode&&e['char'])return!1;var r=os[e.keyCode],n=r;return null==n||e.altGraphKey?!1:(e.altKey&&'Alt'!=r&&(n='Alt-'+n),(Po?e.metaKey:e.ctrlKey)&&'Ctrl'!=r&&(n='Ctrl-'+n),(Po?e.ctrlKey:e.metaKey)&&'Cmd'!=r&&(n='Cmd-'+n),!t&&e.shiftKey&&'Shift'!=r&&(n='Shift-'+n),n);};e.fromTextArea=function(t,r){function n(){t.value=u.getValue();}if(r=r?zi(r):{},r.value=t.value,!r.tabindex&&t.tabIndex&&(r.tabindex=t.tabIndex),!r.placeholder&&t.placeholder&&(r.placeholder=t.placeholder),null==r.autofocus){var i=ji();r.autofocus=i==t||null!=t.getAttribute('autofocus')&&i==document.body;}if(t.form&&(Al(t.form,'submit',n),!r.leaveSubmitMethodAlone)){var o=t.form,l=o.submit;try{var s=o.submit=function(){n(),o.submit=l,o.submit(),o.submit=s;};}catch(a){}}r.finishInit=function(e){e.save=n,e.getTextArea=function(){return t;},e.toTextArea=function(){e.toTextArea=isNaN,n(),t.parentNode.removeChild(e.getWrapperElement()),t.style.display='',t.form&&(Dl(t.form,'submit',n),'function'==typeof t.form.submit&&(t.form.submit=l));};},t.style.display='none';var u=e(function(e){t.parentNode.insertBefore(e,t.nextSibling);},r);return u;};var gl=e.StringStream=function(e,t){this.pos=this.start=0,this.string=e,this.tabSize=t||8,this.lastColumnPos=this.lastColumnValue=0,this.lineStart=0;};gl.prototype={eol:function(){return this.pos>=this.string.length;},sol:function(){return this.pos==this.lineStart;},peek:function(){return this.string.charAt(this.pos)||void 0;},next:function(){return this.pos<this.string.length?this.string.charAt(this.pos++):void 0;},eat:function(e){var t=this.string.charAt(this.pos);if('string'==typeof e)var r=t==e;else var r=t&&(e.test?e.test(t):e(t));return r?(++this.pos,t):void 0;},eatWhile:function(e){for(var t=this.pos;this.eat(e););return this.pos>t;},eatSpace:function(){for(var e=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;return this.pos>e;},skipToEnd:function(){this.pos=this.string.length;},skipTo:function(e){var t=this.string.indexOf(e,this.pos);return t>-1?(this.pos=t,!0):void 0;},backUp:function(e){this.pos-=e;},column:function(){return this.lastColumnPos<this.start&&(this.lastColumnValue=Bl(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start),this.lastColumnValue-(this.lineStart?Bl(this.string,this.lineStart,this.tabSize):0);},indentation:function(){return Bl(this.string,null,this.tabSize)-(this.lineStart?Bl(this.string,this.lineStart,this.tabSize):0);},match:function(e,t,r){if('string'!=typeof e){var n=this.string.slice(this.pos).match(e);return n&&n.index>0?null:(n&&t!==!1&&(this.pos+=n[0].length),n);}var i=function(e){return r?e.toLowerCase():e;},o=this.string.substr(this.pos,e.length);return i(o)==i(e)?(t!==!1&&(this.pos+=e.length),!0):void 0;},current:function(){return this.string.slice(this.start,this.pos);},hideFirstChars:function(e,t){this.lineStart+=e;try{return t();}finally{this.lineStart-=e;}}};var vl=0,ml=e.TextMarker=function(e,t){this.lines=[],this.type=t,this.doc=e,this.id=++vl;};Wi(ml),ml.prototype.clear=function(){if(!this.explicitlyCleared){var e=this.doc.cm,t=e&&!e.curOp;if(t&&wt(e),Ni(this,'clear')){var r=this.find();r&&Li(this,'clear',r.from,r.to);}for(var n=null,i=null,o=0;o<this.lines.length;++o){var l=this.lines[o],s=Jr(l.markedSpans,this);e&&!this.collapsed?It(e,ti(l),'text'):e&&(null!=s.to&&(i=ti(l)),null!=s.from&&(n=ti(l))),l.markedSpans=en(l.markedSpans,s),null==s.from&&this.collapsed&&!Cn(this.doc,l)&&e&&ei(l,yt(e.display));}if(e&&this.collapsed&&!e.options.lineWrapping)for(var o=0;o<this.lines.length;++o){var a=yn(this.lines[o]),u=h(a);u>e.display.maxLineLength&&(e.display.maxLine=a,e.display.maxLineLength=u,e.display.maxLineChanged=!0);}null!=n&&e&&this.collapsed&&Et(e,n,i+1),this.lines.length=0,this.explicitlyCleared=!0,this.atomic&&this.doc.cantEdit&&(this.doc.cantEdit=!1,e&&We(e.doc)),e&&Li(e,'markerCleared',e,this),t&&Ct(e),this.parent&&this.parent.clear();}},ml.prototype.find=function(e,t){null==e&&'bookmark'==this.type&&(e=1);for(var r,n,i=0;i<this.lines.length;++i){var o=this.lines[i],l=Jr(o.markedSpans,this);if(null!=l.from&&(r=Fo(t?o:ti(o),l.from),-1==e))return r;if(null!=l.to&&(n=Fo(t?o:ti(o),l.to),1==e))return n;}return r&&{from:r,to:n};},ml.prototype.changed=function(){var e=this.find(-1,!0),t=this,r=this.doc.cm;e&&r&&Wt(r,function(){var n=e.line,i=ti(e.line),o=Je(r,i);if(o&&(ot(o),r.curOp.selectionChanged=r.curOp.forceUpdate=!0),r.curOp.updateMaxLine=!0,!Cn(t.doc,n)&&null!=t.height){var l=t.height;t.height=null;var s=Tn(t)-l;s&&ei(n,n.height+s);}});},ml.prototype.attachLine=function(e){if(!this.lines.length&&this.doc.cm){var t=this.doc.cm.curOp;t.maybeHiddenMarkers&&-1!=Hi(t.maybeHiddenMarkers,this)||(t.maybeUnhiddenMarkers||(t.maybeUnhiddenMarkers=[])).push(this);}this.lines.push(e);},ml.prototype.detachLine=function(e){if(this.lines.splice(Hi(this.lines,e),1),!this.lines.length&&this.doc.cm){var t=this.doc.cm.curOp;(t.maybeHiddenMarkers||(t.maybeHiddenMarkers=[])).push(this);}};var vl=0,yl=e.SharedTextMarker=function(e,t){this.markers=e,this.primary=t;for(var r=0;r<e.length;++r)e[r].parent=this;};Wi(yl),yl.prototype.clear=function(){if(!this.explicitlyCleared){this.explicitlyCleared=!0;for(var e=0;e<this.markers.length;++e)this.markers[e].clear();Li(this,'clear');}},yl.prototype.find=function(e,t){return this.primary.find(e,t);};var bl=e.LineWidget=function(e,t,r){if(r)for(var n in r)r.hasOwnProperty(n)&&(this[n]=r[n]);this.doc=e,this.node=t;};Wi(bl),bl.prototype.clear=function(){var e=this.doc.cm,t=this.line.widgets,r=this.line,n=ti(r);if(null!=n&&t){for(var i=0;i<t.length;++i)t[i]==this&&t.splice(i--,1);t.length||(r.widgets=null);var o=Tn(this);ei(r,Math.max(0,r.height-o)),e&&Wt(e,function(){Ln(e,r,-o),It(e,n,'widget');});}},bl.prototype.changed=function(){var e=this.height,t=this.doc.cm,r=this.line;this.height=null;var n=Tn(this)-e;n&&(ei(r,r.height+n),t&&Wt(t,function(){t.curOp.forceUpdate=!0,Ln(t,r,n);}));};var wl=e.Line=function(e,t,r){this.text=e,cn(this,t),this.height=r?r(this):1;};Wi(wl),wl.prototype.lineNo=function(){return ti(this);};var xl={},Cl={};Yn.prototype={chunkSize:function(){return this.lines.length;},removeInner:function(e,t){for(var r=e,n=e+t;n>r;++r){var i=this.lines[r];this.height-=i.height,Nn(i),Li(i,'delete');}this.lines.splice(e,t);},collapse:function(e){e.push.apply(e,this.lines);},insertInner:function(e,t,r){this.height+=r,this.lines=this.lines.slice(0,e).concat(t).concat(this.lines.slice(e));for(var n=0;n<t.length;++n)t[n].parent=this;},iterN:function(e,t,r){for(var n=e+t;n>e;++e)if(r(this.lines[e]))return!0;}},_n.prototype={chunkSize:function(){return this.size;},removeInner:function(e,t){this.size-=t;for(var r=0;r<this.children.length;++r){var n=this.children[r],i=n.chunkSize();if(i>e){var o=Math.min(t,i-e),l=n.height;if(n.removeInner(e,o),this.height-=l-n.height,i==o&&(this.children.splice(r--,1),n.parent=null),0==(t-=o))break;e=0;}else e-=i;}if(this.size-t<25&&(this.children.length>1||!(this.children[0]instanceof Yn))){var s=[];this.collapse(s),this.children=[new Yn(s)],this.children[0].parent=this;}},collapse:function(e){for(var t=0;t<this.children.length;++t)this.children[t].collapse(e);},insertInner:function(e,t,r){this.size+=t.length,this.height+=r;for(var n=0;n<this.children.length;++n){var i=this.children[n],o=i.chunkSize();if(o>=e){if(i.insertInner(e,t,r),i.lines&&i.lines.length>50){for(var l=i.lines.length%25+25,s=l;s<i.lines.length;){var a=new Yn(i.lines.slice(s,s+=25));i.height-=a.height,this.children.splice(++n,0,a),a.parent=this;}i.lines=i.lines.slice(0,l),this.maybeSpill();}break;}e-=o;}},maybeSpill:function(){if(!(this.children.length<=10)){var e=this;do{var t=e.children.splice(e.children.length-5,5),r=new _n(t);if(e.parent){e.size-=r.size,e.height-=r.height;var n=Hi(e.parent.children,e);e.parent.children.splice(n+1,0,r);}else{var i=new _n(e.children);i.parent=e,e.children=[i,r],e=i;}r.parent=e.parent;}while(e.children.length>10);e.parent.maybeSpill();}},iterN:function(e,t,r){for(var n=0;n<this.children.length;++n){var i=this.children[n],o=i.chunkSize();if(o>e){var l=Math.min(t,o-e);if(i.iterN(e,l,r))return!0;if(0==(t-=l))break;e=0;}else e-=o;}}};var Sl=0,Ll=e.Doc=function(e,t,r,n){if(!(this instanceof Ll))return new Ll(e,t,r,n);null==r&&(r=0),_n.call(this,[new Yn([new wl('',null)])]),this.first=r,this.scrollTop=this.scrollLeft=0,this.cantEdit=!1,this.cleanGeneration=1,this.frontier=r;var i=Fo(r,0);this.sel=de(i),this.history=new oi(null),this.id=++Sl,this.modeOption=t,this.lineSep=n,this.extend=!1,'string'==typeof e&&(e=this.splitLines(e)),Xn(this,{from:i,to:i,text:e}),ke(this,de(i),zl);};Ll.prototype=Ii(_n.prototype,{constructor:Ll,iter:function(e,t,r){r?this.iterN(e-this.first,t-e,r):this.iterN(this.first,this.first+this.size,e);},insert:function(e,t){for(var r=0,n=0;n<t.length;++n)r+=t[n].height;this.insertInner(e-this.first,t,r);},remove:function(e,t){this.removeInner(e-this.first,t);},getValue:function(e){var t=Jn(this,this.first,this.first+this.size);return e===!1?t:t.join(e||this.lineSeparator());},setValue:Dt(function(e){var t=Fo(this.first,0),r=this.first+this.size-1;Tr(this,{from:t,to:Fo(r,Zn(this,r).text.length),text:this.splitLines(e),origin:'setValue',full:!0},!0),ke(this,de(t));}),replaceRange:function(e,t,r,n){t=ge(this,t),r=r?ge(this,r):t,Or(this,e,t,r,n);},getRange:function(e,t,r){var n=Qn(this,ge(this,e),ge(this,t));return r===!1?n:n.join(r||this.lineSeparator());},getLine:function(e){var t=this.getLineHandle(e);return t&&t.text;},getLineHandle:function(e){return me(this,e)?Zn(this,e):void 0;},getLineNumber:function(e){return ti(e);},getLineHandleVisualStart:function(e){return'number'==typeof e&&(e=Zn(this,e)),yn(e);},lineCount:function(){return this.size;},firstLine:function(){return this.first;},lastLine:function(){return this.first+this.size-1;},clipPos:function(e){return ge(this,e);},getCursor:function(e){var t,r=this.sel.primary();return t=null==e||'head'==e?r.head:'anchor'==e?r.anchor:'end'==e||'to'==e||e===!1?r.to():r.from();},listSelections:function(){return this.sel.ranges;},somethingSelected:function(){return this.sel.somethingSelected();},setCursor:Dt(function(e,t,r){Se(this,ge(this,'number'==typeof e?Fo(e,t||0):e),null,r);}),setSelection:Dt(function(e,t,r){Se(this,ge(this,e),ge(this,t||e),r);}),extendSelection:Dt(function(e,t,r){we(this,ge(this,e),t&&ge(this,t),r);}),extendSelections:Dt(function(e,t){xe(this,ye(this,e),t);}),extendSelectionsBy:Dt(function(e,t){var r=Pi(this.sel.ranges,e);xe(this,ye(this,r),t);}),setSelections:Dt(function(e,t,r){if(e.length){for(var n=0,i=[];n<e.length;n++)i[n]=new he(ge(this,e[n].anchor),ge(this,e[n].head));null==t&&(t=Math.min(e.length-1,this.sel.primIndex)),ke(this,fe(i,t),r);}}),addSelection:Dt(function(e,t,r){var n=this.sel.ranges.slice(0);n.push(new he(ge(this,e),ge(this,t||e))),ke(this,fe(n,n.length-1),r);}),getSelection:function(e){for(var t,r=this.sel.ranges,n=0;n<r.length;n++){var i=Qn(this,r[n].from(),r[n].to());t=t?t.concat(i):i;}return e===!1?t:t.join(e||this.lineSeparator());},getSelections:function(e){for(var t=[],r=this.sel.ranges,n=0;n<r.length;n++){var i=Qn(this,r[n].from(),r[n].to());e!==!1&&(i=i.join(e||this.lineSeparator())),t[n]=i;}return t;},replaceSelection:function(e,t,r){for(var n=[],i=0;i<this.sel.ranges.length;i++)n[i]=e;this.replaceSelections(n,t,r||'+input');},replaceSelections:Dt(function(e,t,r){for(var n=[],i=this.sel,o=0;o<i.ranges.length;o++){var l=i.ranges[o];n[o]={from:l.from(),to:l.to(),text:this.splitLines(e[o]),origin:r};}for(var s=t&&'end'!=t&&Sr(this,n,t),o=n.length-1;o>=0;o--)Tr(this,n[o]);s?Te(this,s):this.cm&&zr(this.cm);}),undo:Dt(function(){Mr(this,'undo');}),redo:Dt(function(){Mr(this,'redo');}),undoSelection:Dt(function(){Mr(this,'undo',!0);}),redoSelection:Dt(function(){Mr(this,'redo',!0);}),setExtending:function(e){this.extend=e;},getExtending:function(){return this.extend;},historySize:function(){for(var e=this.history,t=0,r=0,n=0;n<e.done.length;n++)e.done[n].ranges||++t;for(var n=0;n<e.undone.length;n++)e.undone[n].ranges||++r;return{undo:t,redo:r};},clearHistory:function(){this.history=new oi(this.history.maxGeneration);},markClean:function(){this.cleanGeneration=this.changeGeneration(!0);},changeGeneration:function(e){return e&&(this.history.lastOp=this.history.lastSelOp=this.history.lastOrigin=null),this.history.generation;},isClean:function(e){return this.history.generation==(e||this.cleanGeneration);},getHistory:function(){return{done:vi(this.history.done),undone:vi(this.history.undone)};},setHistory:function(e){var t=this.history=new oi(this.history.maxGeneration);t.done=vi(e.done.slice(0),null,!0),t.undone=vi(e.undone.slice(0),null,!0);},addLineClass:Dt(function(e,t,r){return Br(this,e,'gutter'==t?'gutter':'class',function(e){var n='text'==t?'textClass':'background'==t?'bgClass':'gutter'==t?'gutterClass':'wrapClass';if(e[n]){if(Xi(r).test(e[n]))return!1;e[n]+=' '+r;}else e[n]=r;return!0;});}),removeLineClass:Dt(function(e,t,r){return Br(this,e,'gutter'==t?'gutter':'class',function(e){var n='text'==t?'textClass':'background'==t?'bgClass':'gutter'==t?'gutterClass':'wrapClass',i=e[n];if(!i)return!1;if(null==r)e[n]=null;else{var o=i.match(Xi(r));if(!o)return!1;var l=o.index+o[0].length;e[n]=i.slice(0,o.index)+(o.index&&l!=i.length?' ':'')+i.slice(l)||null;}return!0;});}),addLineWidget:Dt(function(e,t,r){return kn(this,e,t,r);}),removeLineWidget:function(e){e.clear();},markText:function(e,t,r){return Yr(this,ge(this,e),ge(this,t),r,r&&r.type||'range');},setBookmark:function(e,t){var r={replacedWith:t&&(null==t.nodeType?t.widget:t),insertLeft:t&&t.insertLeft,clearWhenEmpty:!1,shared:t&&t.shared,handleMouseEvents:t&&t.handleMouseEvents};return e=ge(this,e),Yr(this,e,e,r,'bookmark');},findMarksAt:function(e){e=ge(this,e);var t=[],r=Zn(this,e.line).markedSpans;if(r)for(var n=0;n<r.length;++n){var i=r[n];(null==i.from||i.from<=e.ch)&&(null==i.to||i.to>=e.ch)&&t.push(i.marker.parent||i.marker);}return t;},findMarks:function(e,t,r){e=ge(this,e),t=ge(this,t);var n=[],i=e.line;return this.iter(e.line,t.line+1,function(o){var l=o.markedSpans;if(l)for(var s=0;s<l.length;s++){var a=l[s];null!=a.to&&i==e.line&&e.ch>=a.to||null==a.from&&i!=e.line||null!=a.from&&i==t.line&&a.from>=t.ch||r&&!r(a.marker)||n.push(a.marker.parent||a.marker);}++i;}),n;},getAllMarks:function(){var e=[];return this.iter(function(t){var r=t.markedSpans;if(r)for(var n=0;n<r.length;++n)null!=r[n].from&&e.push(r[n].marker);}),e;},posFromIndex:function(e){var t,r=this.first,n=this.lineSeparator().length;return this.iter(function(i){var o=i.text.length+n;return o>e?(t=e,!0):(e-=o,void++r);}),ge(this,Fo(r,t));},indexFromPos:function(e){e=ge(this,e);var t=e.ch;if(e.line<this.first||e.ch<0)return 0;var r=this.lineSeparator().length;return this.iter(this.first,e.line,function(e){t+=e.text.length+r;}),t;},copy:function(e){var t=new Ll(Jn(this,this.first,this.first+this.size),this.modeOption,this.first,this.lineSep);return t.scrollTop=this.scrollTop,t.scrollLeft=this.scrollLeft,t.sel=this.sel,t.extend=!1,e&&(t.history.undoDepth=this.history.undoDepth,t.setHistory(this.getHistory())),t;},linkedDoc:function(e){e||(e={});var t=this.first,r=this.first+this.size;null!=e.from&&e.from>t&&(t=e.from),null!=e.to&&e.to<r&&(r=e.to);var n=new Ll(Jn(this,t,r),e.mode||this.modeOption,t,this.lineSep);return e.sharedHist&&(n.history=this.history),(this.linked||(this.linked=[])).push({doc:n,sharedHist:e.sharedHist}),n.linked=[{doc:this,isParent:!0,sharedHist:e.sharedHist}],$r(n,qr(this)),n;},unlinkDoc:function(t){if(t instanceof e&&(t=t.doc),this.linked)for(var r=0;r<this.linked.length;++r){var n=this.linked[r];if(n.doc==t){this.linked.splice(r,1),t.unlinkDoc(this),Zr(qr(this));break;}}if(t.history==this.history){var i=[t.id];qn(t,function(e){i.push(e.id);},!0),t.history=new oi(null),t.history.done=vi(this.history.done,i),t.history.undone=vi(this.history.undone,i);}},iterLinkedDocs:function(e){qn(this,e);},getMode:function(){return this.mode;},getEditor:function(){return this.cm;},splitLines:function(e){return this.lineSep?e.split(this.lineSep):ts(e);},lineSeparator:function(){return this.lineSep||'\n';}}),Ll.prototype.eachLine=Ll.prototype.iter;var Tl='iter insert remove copy getEditor constructor'.split(' ');for(var kl in Ll.prototype)Ll.prototype.hasOwnProperty(kl)&&Hi(Tl,kl)<0&&(e.prototype[kl]=function(e){return function(){return e.apply(this.doc,arguments);};}(Ll.prototype[kl]));Wi(Ll);var Ml=e.e_preventDefault=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1;},Nl=e.e_stopPropagation=function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0;},Wl=e.e_stop=function(e){Ml(e),Nl(e);},Al=e.on=function(e,t,r){if(e.addEventListener)e.addEventListener(t,r,!1);else if(e.attachEvent)e.attachEvent('on'+t,r);else{var n=e._handlers||(e._handlers={}),i=n[t]||(n[t]=[]);i.push(r);}},Ol=[],Dl=e.off=function(e,t,r){if(e.removeEventListener)e.removeEventListener(t,r,!1);else if(e.detachEvent)e.detachEvent('on'+t,r);else for(var n=Si(e,t,!1),i=0;i<n.length;++i)if(n[i]==r){n.splice(i,1);break;}},Hl=e.signal=function(e,t){var r=Si(e,t,!0);if(r.length)for(var n=Array.prototype.slice.call(arguments,2),i=0;i<r.length;++i)r[i].apply(null,n);},Pl=null,El=30,Il=e.Pass={toString:function(){return'CodeMirror.Pass';}},zl={scroll:!1},Fl={origin:'*mouse'},Rl={origin:'+move'};Ai.prototype.set=function(e,t){clearTimeout(this.id),this.id=setTimeout(t,e);};var Bl=e.countColumn=function(e,t,r,n,i){null==t&&(t=e.search(/[^\s\u00a0]/),-1==t&&(t=e.length));for(var o=n||0,l=i||0;;){var s=e.indexOf('	',o);if(0>s||s>=t)return l+(t-o);l+=s-o,l+=r-l%r,o=s+1;}},Gl=e.findColumn=function(e,t,r){for(var n=0,i=0;;){var o=e.indexOf('	',n);-1==o&&(o=e.length);var l=o-n;if(o==e.length||i+l>=t)return n+Math.min(l,t-i);if(i+=o-n,i+=r-i%r,n=o+1,i>=t)return n;}},Ul=[''],Vl=function(e){e.select();};No?Vl=function(e){e.selectionStart=0,e.selectionEnd=e.value.length;}:bo&&(Vl=function(e){try{e.select();}catch(t){}});var Kl,jl=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,Xl=e.isWordChar=function(e){return/\w/.test(e)||e>''&&(e.toUpperCase()!=e.toLowerCase()||jl.test(e));},Yl=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;Kl=document.createRange?function(e,t,r,n){var i=document.createRange();return i.setEnd(n||e,r),i.setStart(e,t),i;}:function(e,t,r){var n=document.body.createTextRange();try{n.moveToElementText(e.parentNode);}catch(i){return n;}return n.collapse(!0),n.moveEnd('character',r),n.moveStart('character',t),n;};var _l=e.contains=function(e,t){if(3==t.nodeType&&(t=t.parentNode),e.contains)return e.contains(t);do if(11==t.nodeType&&(t=t.host),t==e)return!0;while(t=t.parentNode);};bo&&11>wo&&(ji=function(){try{return document.activeElement;}catch(e){return document.body;}});var ql,$l,Zl=e.rmClass=function(e,t){var r=e.className,n=Xi(t).exec(r);if(n){var i=r.slice(n.index+n[0].length);e.className=r.slice(0,n.index)+(i?n[1]+i:'');}},Ql=e.addClass=function(e,t){var r=e.className;Xi(t).test(r)||(e.className+=(r?' ':'')+t);},Jl=!1,es=function(){if(bo&&9>wo)return!1;var e=Ui('div');return'draggable'in e||'dragDrop'in e;}(),ts=e.splitLines=3!='\n\nb'.split(/\n/).length?function(e){for(var t=0,r=[],n=e.length;n>=t;){var i=e.indexOf('\n',t);-1==i&&(i=e.length);var o=e.slice(t,'\r'==e.charAt(i-1)?i-1:i),l=o.indexOf('\r');-1!=l?(r.push(o.slice(0,l)),t+=l+1):(r.push(o),t=i+1);}return r;}:function(e){return e.split(/\r\n?|\n/);},rs=window.getSelection?function(e){try{return e.selectionStart!=e.selectionEnd;}catch(t){return!1;}}:function(e){try{var t=e.ownerDocument.selection.createRange();}catch(r){}return t&&t.parentElement()==e?0!=t.compareEndPoints('StartToEnd',t):!1;},ns=function(){var e=Ui('div');return'oncopy'in e?!0:(e.setAttribute('oncopy','return;'),'function'==typeof e.oncopy);}(),is=null,os=e.keyNames={3:'Enter',8:'Backspace',9:'Tab',13:'Enter',16:'Shift',17:'Ctrl',18:'Alt',19:'Pause',20:'CapsLock',27:'Esc',32:'Space',33:'PageUp',34:'PageDown',35:'End',36:'Home',37:'Left',38:'Up',39:'Right',40:'Down',44:'PrintScrn',45:'Insert',46:'Delete',59:';',61:'=',91:'Mod',92:'Mod',93:'Mod',106:'*',107:'=',109:'-',110:'.',111:'/',127:'Delete',173:'-',186:';',187:'=',188:',',189:'-',190:'.',191:'/',192:'`',219:'[',220:'\\',221:']',222:'\'',63232:'Up',63233:'Down',63234:'Left',63235:'Right',63272:'Delete',63273:'Home',63275:'End',63276:'PageUp',63277:'PageDown',63302:'Insert'};!function(){for(var e=0;10>e;e++)os[e+48]=os[e+96]=String(e);for(var e=65;90>=e;e++)os[e]=String.fromCharCode(e);for(var e=1;12>=e;e++)os[e+111]=os[e+63235]='F'+e;}();var ls,ss=function(){function e(e){return 247>=e?r.charAt(e):e>=1424&&1524>=e?'R':e>=1536&&1773>=e?n.charAt(e-1536):e>=1774&&2220>=e?'r':e>=8192&&8203>=e?'w':8204==e?'b':'L';}function t(e,t,r){this.level=e,this.from=t,this.to=r;}var r='bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN',n='rrrrrrrrrrrr,rNNmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmrrrrrrrnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmNmmmm',i=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,o=/[stwN]/,l=/[LRr]/,s=/[Lb1n]/,a=/[1n]/,u='L';return function(r){if(!i.test(r))return!1;for(var n,c=r.length,h=[],f=0;c>f;++f)h.push(n=e(r.charCodeAt(f)));for(var f=0,d=u;c>f;++f){var n=h[f];'m'==n?h[f]=d:d=n;}for(var f=0,p=u;c>f;++f){var n=h[f];'1'==n&&'r'==p?h[f]='n':l.test(n)&&(p=n,'r'==n&&(h[f]='R'));}for(var f=1,d=h[0];c-1>f;++f){var n=h[f];'+'==n&&'1'==d&&'1'==h[f+1]?h[f]='1':','!=n||d!=h[f+1]||'1'!=d&&'n'!=d||(h[f]=d),d=n;}for(var f=0;c>f;++f){var n=h[f];if(','==n)h[f]='N';else if('%'==n){for(var g=f+1;c>g&&'%'==h[g];++g);for(var v=f&&'!'==h[f-1]||c>g&&'1'==h[g]?'1':'N',m=f;g>m;++m)h[m]=v;f=g-1;}}for(var f=0,p=u;c>f;++f){var n=h[f];'L'==p&&'1'==n?h[f]='L':l.test(n)&&(p=n);}for(var f=0;c>f;++f)if(o.test(h[f])){for(var g=f+1;c>g&&o.test(h[g]);++g);for(var y='L'==(f?h[f-1]:u),b='L'==(c>g?h[g]:u),v=y||b?'L':'R',m=f;g>m;++m)h[m]=v;f=g-1;}for(var w,x=[],f=0;c>f;)if(s.test(h[f])){var C=f;for(++f;c>f&&s.test(h[f]);++f);x.push(new t(0,C,f));}else{var S=f,L=x.length;for(++f;c>f&&'L'!=h[f];++f);for(var m=S;f>m;)if(a.test(h[m])){m>S&&x.splice(L,0,new t(1,S,m));var T=m;for(++m;f>m&&a.test(h[m]);++m);x.splice(L,0,new t(2,T,m)),S=m;}else++m;f>S&&x.splice(L,0,new t(1,S,f));}return 1==x[0].level&&(w=r.match(/^\s+/))&&(x[0].from=w[0].length,x.unshift(new t(0,0,w[0].length))),1==Di(x).level&&(w=r.match(/\s+$/))&&(Di(x).to-=w[0].length,x.push(new t(0,c-w[0].length,c))),2==x[0].level&&x.unshift(new t(1,x[0].to,x[0].to)),x[0].level!=Di(x).level&&x.push(new t(x[0].level,c,c)),x;};}();return e.version='5.15.2',e;});
//# sourceMappingURL=codemirror.min.js.map
!function(e){'object'==typeof exports&&'object'==typeof module?e(require('../../lib/codemirror')):'function'==typeof define&&define.amd?define(['../../lib/codemirror'],e):e(CodeMirror);}(function(e){'use strict';e.defineMode('javascript',function(t,r){function n(e){for(var t,r=!1,n=!1;null!=(t=e.next());){if(!r){if('/'==t&&!n)return;'['==t?n=!0:n&&']'==t&&(n=!1);}r=!r&&'\\'==t;}}function a(e,t,r){return Ee=e,ze=r,t;}function i(e,t){var r=e.next();if('"'==r||'\''==r)return t.tokenize=o(r),t.tokenize(e,t);if('.'==r&&e.match(/^\d+(?:[eE][+\-]?\d+)?/))return a('number','number');if('.'==r&&e.match('..'))return a('spread','meta');if(/[\[\]{}\(\),;\:\.]/.test(r))return a(r);if('='==r&&e.eat('>'))return a('=>','operator');if('0'==r&&e.eat(/x/i))return e.eatWhile(/[\da-f]/i),a('number','number');if('0'==r&&e.eat(/o/i))return e.eatWhile(/[0-7]/i),a('number','number');if('0'==r&&e.eat(/b/i))return e.eatWhile(/[01]/i),a('number','number');if(/\d/.test(r))return e.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/),a('number','number');if('/'==r)return e.eat('*')?(t.tokenize=c,c(e,t)):e.eat('/')?(e.skipToEnd(),a('comment','comment')):Ve(e,t,1)?(n(e),e.match(/^\b(([gimyu])(?![gimyu]*\2))+\b/),a('regexp','string-2')):(e.eatWhile(We),a('operator','operator',e.current()));if('`'==r)return t.tokenize=u,u(e,t);if('#'==r)return e.skipToEnd(),a('error','error');if(We.test(r))return'>'==r&&t.lexical&&'>'==t.lexical.type||e.eatWhile(We),a('operator','operator',e.current());if(Ce.test(r)){e.eatWhile(Ce);var i=e.current();if('.'!=t.lastType){if(Oe.propertyIsEnumerable(i)){var f=Oe[i];return a(f.type,f.style,i);}if('async'==i&&e.match(/^\s*[\(\w]/,!1))return a('async','keyword',i);}return a('variable','variable',i);}}function o(e){return function(t,r){var n,o=!1;if(Te&&'@'==t.peek()&&t.match(Pe))return r.tokenize=i,a('jsonld-keyword','meta');for(;null!=(n=t.next())&&(n!=e||o);)o=!o&&'\\'==n;return o||(r.tokenize=i),a('string','string');};}function c(e,t){for(var r,n=!1;r=e.next();){if('/'==r&&n){t.tokenize=i;break;}n='*'==r;}return a('comment','comment');}function u(e,t){for(var r,n=!1;null!=(r=e.next());){if(!n&&('`'==r||'$'==r&&e.eat('{'))){t.tokenize=i;break;}n=!n&&'\\'==r;}return a('quasi','string-2',e.current());}function f(e,t){t.fatArrowAt&&(t.fatArrowAt=null);var r=e.string.indexOf('=>',e.start);if(!(r<0)){if(qe){var n=/:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(e.string.slice(e.start,r));n&&(r=n.index);}for(var a=0,i=!1,o=r-1;o>=0;--o){var c=e.string.charAt(o),u=Se.indexOf(c);if(u>=0&&u<3){if(!a){++o;break;}if(0==--a){'('==c&&(i=!0);break;}}else if(u>=3&&u<6)++a;else if(Ce.test(c))i=!0;else{if(/["'\/]/.test(c))return;if(i&&!a){++o;break;}}}i&&!a&&(t.fatArrowAt=o);}}function l(e,t,r,n,a,i){this.indented=e,this.column=t,this.type=r,this.prev=a,this.info=i,null!=n&&(this.align=n);}function s(e,t){for(n=e.localVars;n;n=n.next)if(n.name==t)return!0;for(var r=e.context;r;r=r.prev)for(var n=r.vars;n;n=n.next)if(n.name==t)return!0;}function d(e,t,r,n,a){var i=e.cc;for(Be.state=e,Be.stream=a,Be.marked=null,Be.cc=i,Be.style=t,e.lexical.hasOwnProperty('align')||(e.lexical.align=!0);;)if((i.length?i.pop():$e?g:h)(r,n)){for(;i.length&&i[i.length-1].lex;)i.pop()();return Be.marked?Be.marked:'variable'==r&&s(e,n)?'variable-2':t;}}function p(){for(var e=arguments.length-1;e>=0;e--)Be.cc.push(arguments[e]);}function m(){return p.apply(null,arguments),!0;}function v(e){function t(t){for(var r=t;r;r=r.next)if(r.name==e)return!0;return!1;}var n=Be.state;if(Be.marked='def',n.context){if(t(n.localVars))return;n.localVars={name:e,next:n.localVars};}else{if(t(n.globalVars))return;r.globalVars&&(n.globalVars={name:e,next:n.globalVars});}}function y(){Be.state.context={prev:Be.state.context,vars:Be.state.localVars},Be.state.localVars=He;}function k(){Be.state.localVars=Be.state.context.vars,Be.state.context=Be.state.context.prev;}function b(e,t){var r=function(){var r=Be.state,n=r.indented;if('stat'==r.lexical.type)n=r.lexical.indented;else for(var a=r.lexical;a&&')'==a.type&&a.align;a=a.prev)n=a.indented;r.lexical=new l(n,Be.stream.column(),e,null,r.lexical,t);};return r.lex=!0,r;}function x(){var e=Be.state;e.lexical.prev&&(')'==e.lexical.type&&(e.indented=e.lexical.indented),e.lexical=e.lexical.prev);}function w(e){function t(r){return r==e?m():';'==e?p():m(t);}return t;}function h(e,t){return'var'==e?m(b('vardef',t.length),Z,w(';'),x):'keyword a'==e?m(b('form'),M,h,x):'keyword b'==e?m(b('form'),h,x):'{'==e?m(b('}'),G,x):';'==e?m():'if'==e?('else'==Be.state.lexical.info&&Be.state.cc[Be.state.cc.length-1]==x&&Be.state.cc.pop()(),m(b('form'),M,h,x,ne)):'function'==e?m(fe):'for'==e?m(b('form'),ae,h,x):'variable'==e?qe&&'type'==t?(Be.marked='keyword',m(K,w('operator'),K,w(';'))):qe&&'declare'==t?(Be.marked='keyword',m(h)):m(b('stat'),S):'switch'==e?m(b('form'),M,w('{'),b('}','switch'),G,x,x):'case'==e?m(g,w(':')):'default'==e?m(w(':')):'catch'==e?m(b('form'),y,w('('),le,w(')'),h,x,k):'class'==e?m(b('form'),de,x):'export'==e?m(b('stat'),ye,x):'import'==e?m(b('stat'),be,x):'module'==e?m(b('form'),_,w('{'),b('}'),G,x,x):'async'==e?m(h):'@'==t?m(g,h):p(b('stat'),g,w(';'),x);}function g(e){return V(e,!1);}function j(e){return V(e,!0);}function M(e){return'('!=e?p():m(b(')'),g,w(')'),x);}function V(e,t){if(Be.state.fatArrowAt==Be.stream.start){var r=t?C:q;if('('==e)return m(y,b(')'),D(_,')'),x,w('=>'),r,k);if('variable'==e)return p(y,_,w('=>'),r,k);}var n=t?A:I;return Ne.hasOwnProperty(e)?m(n):'function'==e?m(fe,n):'class'==e?m(b('form'),se,x):'keyword c'==e||'async'==e?m(t?z:E):'('==e?m(b(')'),E,w(')'),x,n):'operator'==e||'spread'==e?m(t?j:g):'['==e?m(b(']'),je,x,n):'{'==e?F(B,'}',null,n):'quasi'==e?p(T,n):'new'==e?m(O(t)):m();}function E(e){return e.match(/[;\}\)\],]/)?p():p(g);}function z(e){return e.match(/[;\}\)\],]/)?p():p(j);}function I(e,t){return','==e?m(g):A(e,t,!1);}function A(e,t,r){var n=0==r?I:A,a=0==r?g:j;return'=>'==e?m(y,r?C:q,k):'operator'==e?/\+\+|--/.test(t)||qe&&'!'==t?m(n):'?'==t?m(g,w(':'),a):m(a):'quasi'==e?p(T,n):';'!=e?'('==e?F(j,')','call',n):'.'==e?m(N,n):'['==e?m(b(']'),E,w(']'),x,n):qe&&'as'==t?(Be.marked='keyword',m(K,n)):void 0:void 0;}function T(e,t){return'quasi'!=e?p():'${'!=t.slice(t.length-2)?m(T):m(g,$);}function $(e){if('}'==e)return Be.marked='string-2',Be.state.tokenize=u,m(T);}function q(e){return f(Be.stream,Be.state),p('{'==e?h:g);}function C(e){return f(Be.stream,Be.state),p('{'==e?h:j);}function O(e){return function(t){return'.'==t?m(e?P:W):'variable'==t&&qe?m(Y,e?A:I):p(e?j:g);};}function W(e,t){if('target'==t)return Be.marked='keyword',m(I);}function P(e,t){if('target'==t)return Be.marked='keyword',m(A);}function S(e){return':'==e?m(x,h):p(I,w(';'),x);}function N(e){if('variable'==e)return Be.marked='property',m();}function B(e,t){return'async'==e?(Be.marked='property',m(B)):'variable'==e||'keyword'==Be.style?(Be.marked='property',m('get'==t||'set'==t?H:U)):'number'==e||'string'==e?(Be.marked=Te?'property':Be.style+' property',m(U)):'jsonld-keyword'==e?m(U):'modifier'==e?m(B):'['==e?m(g,w(']'),U):'spread'==e?m(g,U):':'==e?p(U):void 0;}function H(e){return'variable'!=e?p(U):(Be.marked='property',m(fe));}function U(e){return':'==e?m(j):'('==e?p(fe):void 0;}function D(e,t,r){function n(a,i){if(r?r.indexOf(a)>-1:','==a){var o=Be.state.lexical;return'call'==o.info&&(o.pos=(o.pos||0)+1),m(function(r,n){return r==t||n==t?p():p(e);},n);}return a==t||i==t?m():m(w(t));}return function(r,a){return r==t||a==t?m():p(e,n);};}function F(e,t,r){for(var n=3;n<arguments.length;n++)Be.cc.push(arguments[n]);return m(b(t,r),D(e,t),x);}function G(e){return'}'==e?m():p(h,G);}function J(e,t){if(qe){if(':'==e)return m(K);if('?'==t)return m(J);}}function K(e,t){return'variable'==e?'keyof'==t?(Be.marked='keyword',m(K)):(Be.marked='type',m(X)):'string'==e||'number'==e||'atom'==e?m(X):'['==e?m(b(']'),D(K,']',','),x,X):'{'==e?m(b('}'),D(Q,'}',',;'),x,X):'('==e?m(D(R,')'),L):void 0;}function L(e){if('=>'==e)return m(K);}function Q(e,t){return'variable'==e||'keyword'==Be.style?(Be.marked='property',m(Q)):'?'==t?m(Q):':'==e?m(K):'['==e?m(g,J,w(']'),Q):void 0;}function R(e){return'variable'==e?m(R):':'==e?m(K):void 0;}function X(e,t){return'<'==t?m(b('>'),D(K,'>'),x,X):'|'==t||'.'==e?m(K):'['==e?m(w(']'),X):'extends'==t?m(K):void 0;}function Y(e,t){if('<'==t)return m(b('>'),D(K,'>'),x,X);}function Z(){return p(_,J,te,re);}function _(e,t){return'modifier'==e?m(_):'variable'==e?(v(t),m()):'spread'==e?m(_):'['==e?F(_,']'):'{'==e?F(ee,'}'):void 0;}function ee(e,t){return'variable'!=e||Be.stream.match(/^\s*:/,!1)?('variable'==e&&(Be.marked='property'),'spread'==e?m(_):'}'==e?p():m(w(':'),_,te)):(v(t),m(te));}function te(e,t){if('='==t)return m(j);}function re(e){if(','==e)return m(Z);}function ne(e,t){if('keyword b'==e&&'else'==t)return m(b('form','else'),h,x);}function ae(e){if('('==e)return m(b(')'),ie,w(')'),x);}function ie(e){return'var'==e?m(Z,w(';'),ce):';'==e?m(ce):'variable'==e?m(oe):p(g,w(';'),ce);}function oe(e,t){return'in'==t||'of'==t?(Be.marked='keyword',m(g)):m(I,ce);}function ce(e,t){return';'==e?m(ue):'in'==t||'of'==t?(Be.marked='keyword',m(g)):p(g,w(';'),ue);}function ue(e){')'!=e&&m(g);}function fe(e,t){return'*'==t?(Be.marked='keyword',m(fe)):'variable'==e?(v(t),m(fe)):'('==e?m(y,b(')'),D(le,')'),x,J,h,k):qe&&'<'==t?m(b('>'),D(K,'>'),x,fe):void 0;}function le(e){return'spread'==e||'modifier'==e?m(le):p(_,J,te);}function se(e,t){return'variable'==e?de(e,t):pe(e,t);}function de(e,t){if('variable'==e)return v(t),m(pe);}function pe(e,t){return'<'==t?m(b('>'),D(K,'>'),x,pe):'extends'==t||'implements'==t||qe&&','==e?m(qe?K:g,pe):'{'==e?m(b('}'),me,x):void 0;}function me(e,t){return'modifier'==e||'async'==e||'variable'==e&&('static'==t||'get'==t||'set'==t)&&Be.stream.match(/^\s+[\w$\xa1-\uffff]/,!1)?(Be.marked='keyword',m(me)):'variable'==e?(Be.marked='property',m(qe?ve:fe,me)):'['==e?m(g,w(']'),qe?ve:fe,me):'*'==t?(Be.marked='keyword',m(me)):';'==e?m(me):'}'==e?m():'@'==t?m(g,me):void 0;}function ve(e,t){return'?'==t?m(ve):':'==e?m(K,te):'='==t?m(j):p(fe);}function ye(e,t){return'*'==t?(Be.marked='keyword',m(ge,w(';'))):'default'==t?(Be.marked='keyword',m(g,w(';'))):'{'==e?m(D(ke,'}'),ge,w(';')):p(h);}function ke(e,t){return'as'==t?(Be.marked='keyword',m(w('variable'))):'variable'==e?p(j,ke):void 0;}function be(e){return'string'==e?m():p(xe,we,ge);}function xe(e,t){return'{'==e?F(xe,'}'):('variable'==e&&v(t),'*'==t&&(Be.marked='keyword'),m(he));}function we(e){if(','==e)return m(xe,we);}function he(e,t){if('as'==t)return Be.marked='keyword',m(xe);}function ge(e,t){if('from'==t)return Be.marked='keyword',m(g);}function je(e){return']'==e?m():p(D(j,']'));}function Me(e,t){return'operator'==e.lastType||','==e.lastType||We.test(t.charAt(0))||/[,.]/.test(t.charAt(0));}function Ve(e,t,r){return t.tokenize==i&&/^(?:operator|sof|keyword c|case|new|export|default|[\[{}\(,;:]|=>)$/.test(t.lastType)||'quasi'==t.lastType&&/\{\s*$/.test(e.string.slice(0,e.pos-(r||0)));}var Ee,ze,Ie=t.indentUnit,Ae=r.statementIndent,Te=r.jsonld,$e=r.json||Te,qe=r.typescript,Ce=r.wordCharacters||/[\w$\xa1-\uffff]/,Oe=function(){function e(e){return{type:e,style:'keyword'};}var t=e('keyword a'),r=e('keyword b'),n=e('keyword c'),a=e('operator'),i={type:'atom',style:'atom'},o={if:e('if'),while:t,with:t,else:r,do:r,try:r,finally:r,return:n,break:n,continue:n,new:e('new'),delete:n,throw:n,debugger:n,var:e('var'),const:e('var'),let:e('var'),function:e('function'),catch:e('catch'),for:e('for'),switch:e('switch'),case:e('case'),default:e('default'),in:a,typeof:a,instanceof:a,true:i,false:i,null:i,undefined:i,NaN:i,Infinity:i,this:e('this'),class:e('class'),super:e('atom'),yield:n,export:e('export'),import:e('import'),extends:n,await:n};if(qe){var c={type:'variable',style:'type'},u={interface:e('class'),implements:n,namespace:n,module:e('module'),enum:e('module'),public:e('modifier'),private:e('modifier'),protected:e('modifier'),abstract:e('modifier'),readonly:e('modifier'),string:c,number:c,boolean:c,any:c};for(var f in u)o[f]=u[f];}return o;}(),We=/[+\-*&%=<>!?|~^@]/,Pe=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/,Se='([{}])',Ne={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,this:!0,'jsonld-keyword':!0},Be={state:null,column:null,marked:null,cc:null},He={name:'this',next:{name:'arguments'}};return x.lex=!0,{startState:function(e){var t={tokenize:i,lastType:'sof',cc:[],lexical:new l((e||0)-Ie,0,'block',!1),localVars:r.localVars,context:r.localVars&&{vars:r.localVars},indented:e||0};return r.globalVars&&'object'==typeof r.globalVars&&(t.globalVars=r.globalVars),t;},token:function(e,t){if(e.sol()&&(t.lexical.hasOwnProperty('align')||(t.lexical.align=!1),t.indented=e.indentation(),f(e,t)),t.tokenize!=c&&e.eatSpace())return null;var r=t.tokenize(e,t);return'comment'==Ee?r:(t.lastType='operator'!=Ee||'++'!=ze&&'--'!=ze?Ee:'incdec',d(t,r,Ee,ze,e));},indent:function(t,n){if(t.tokenize==c)return e.Pass;if(t.tokenize!=i)return 0;var a,o=n&&n.charAt(0),u=t.lexical;if(!/^\s*else\b/.test(n))for(var f=t.cc.length-1;f>=0;--f){var l=t.cc[f];if(l==x)u=u.prev;else if(l!=ne)break;}for(;('stat'==u.type||'form'==u.type)&&('}'==o||(a=t.cc[t.cc.length-1])&&(a==I||a==A)&&!/^[,\.=+\-*:?[\(]/.test(n));)u=u.prev;Ae&&')'==u.type&&'stat'==u.prev.type&&(u=u.prev);var s=u.type,d=o==s;return'vardef'==s?u.indented+('operator'==t.lastType||','==t.lastType?u.info+1:0):'form'==s&&'{'==o?u.indented:'form'==s?u.indented+Ie:'stat'==s?u.indented+(Me(t,n)?Ae||Ie:0):'switch'!=u.info||d||0==r.doubleIndentSwitch?u.align?u.column+(d?0:1):u.indented+(d?0:Ie):u.indented+(/^(?:case|default)\b/.test(n)?Ie:2*Ie);},electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,blockCommentStart:$e?null:'/*',blockCommentEnd:$e?null:'*/',lineComment:$e?null:'//',fold:'brace',closeBrackets:'()[]{}\'\'""``',helperType:$e?'json':'javascript',jsonldMode:Te,jsonMode:$e,expressionAllowed:Ve,skipExpression:function(e){var t=e.cc[e.cc.length-1];t!=g&&t!=j||e.cc.pop();}};}),e.registerHelper('wordChars','javascript',/[\w$]/),e.defineMIME('text/javascript','javascript'),e.defineMIME('text/ecmascript','javascript'),e.defineMIME('application/javascript','javascript'),e.defineMIME('application/x-javascript','javascript'),e.defineMIME('application/ecmascript','javascript'),e.defineMIME('application/json',{name:'javascript',json:!0}),e.defineMIME('application/x-json',{name:'javascript',json:!0}),e.defineMIME('application/ld+json',{name:'javascript',jsonld:!0}),e.defineMIME('text/typescript',{name:'javascript',typescript:!0}),e.defineMIME('application/typescript',{name:'javascript',typescript:!0});});
/*jshint curly:true, eqeqeq:true, laxbreak:true, noempty:false */
/*

  The MIT License (MIT)

  Copyright (c) 2007-2017 Einar Lielmanis, Liam Newman, and contributors.

  Permission is hereby granted, free of charge, to any person
  obtaining a copy of this software and associated documentation files
  (the "Software"), to deal in the Software without restriction,
  including without limitation the rights to use, copy, modify, merge,
  publish, distribute, sublicense, and/or sell copies of the Software,
  and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.

 JS Beautifier
---------------


  Written by Einar Lielmanis, <einar@jsbeautifier.org>
      http://jsbeautifier.org/

  Originally converted to javascript by Vital, <vital76@gmail.com>
  "End braces on own line" added by Chris J. Shull, <chrisjshull@gmail.com>
  Parsing improvements for brace-less statements by Liam Newman <bitwiseman@gmail.com>


  Usage:
    js_beautify(js_source_text);
    js_beautify(js_source_text, options);

  The options are:
    indent_size (default 4)          - indentation size,
    indent_char (default space)      - character to indent with,
    preserve_newlines (default true) - whether existing line breaks should be preserved,
    max_preserve_newlines (default unlimited) - maximum number of line breaks to be preserved in one chunk,

    jslint_happy (default false) - if true, then jslint-stricter mode is enforced.

            jslint_happy        !jslint_happy
            ---------------------------------
            function ()         function()

            switch () {         switch() {
            case 1:               case 1:
              break;                break;
            }                   }

    space_after_anon_function (default false) - should the space before an anonymous function's parens be added, "function()" vs "function ()",
          NOTE: This option is overriden by jslint_happy (i.e. if jslint_happy is true, space_after_anon_function is true by design)

    brace_style (default "collapse") - "collapse" | "expand" | "end-expand" | "none" | any of the former + ",preserve-inline"
            put braces on the same line as control statements (default), or put braces on own line (Allman / ANSI style), or just put end braces on own line, or attempt to keep them where they are.
            preserve-inline will try to preserve inline blocks of curly braces

    space_before_conditional (default true) - should the space before conditional statement be added, "if(true)" vs "if (true)",

    unescape_strings (default false) - should printable characters in strings encoded in \xNN notation be unescaped, "example" vs "\x65\x78\x61\x6d\x70\x6c\x65"

    wrap_line_length (default unlimited) - lines should wrap at next opportunity after this number of characters.
          NOTE: This is not a hard limit. Lines will continue until a point where a newline would
                be preserved if it were present.

    end_with_newline (default false)  - end output with a newline


    e.g

    js_beautify(js_source_text, {
      'indent_size': 1,
      'indent_char': '\t'
    });

*/

// Object.values polyfill found here:
// http://tokenposts.blogspot.com.au/2012/04/javascript-objectkeys-browser.html
if (!Object.values) {
	Object.values = function(o) {
		if (o !== Object(o)) {
			throw new TypeError('Object.values called on a non-object');
		}
		var k = [],
			p;
		for (p in o) {
			if (Object.prototype.hasOwnProperty.call(o, p)) {
				k.push(o[p]);
			}
		}
		return k;
	};
}

(function() {

	function mergeOpts(allOptions, targetType) {
		var finalOpts = {};
		var name;

		for (name in allOptions) {
			if (name !== targetType) {
				finalOpts[name] = allOptions[name];
			}
		}

		//merge in the per type settings for the targetType
		if (targetType in allOptions) {
			for (name in allOptions[targetType]) {
				finalOpts[name] = allOptions[targetType][name];
			}
		}
		return finalOpts;
	}

	function js_beautify(js_source_text, options) {

		var acorn = {};
		(function(exports) {
			/* jshint curly: false */
			// This section of code is taken from acorn.
			//
			// Acorn was written by Marijn Haverbeke and released under an MIT
			// license. The Unicode regexps (for identifiers and whitespace) were
			// taken from [Esprima](http://esprima.org) by Ariya Hidayat.
			//
			// Git repositories for Acorn are available at
			//
			//     http://marijnhaverbeke.nl/git/acorn
			//     https://github.com/marijnh/acorn.git

			// ## Character categories

			// Big ugly regular expressions that match characters in the
			// whitespace, identifier, and identifier-start categories. These
			// are only applied when a character is found to actually have a
			// code point above 128.

			var nonASCIIwhitespace = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/; // jshint ignore:line
			var nonASCIIidentifierStartChars = '\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc';
			var nonASCIIidentifierChars = '\u0300-\u036f\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u0620-\u0649\u0672-\u06d3\u06e7-\u06e8\u06fb-\u06fc\u0730-\u074a\u0800-\u0814\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0840-\u0857\u08e4-\u08fe\u0900-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962-\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09d7\u09df-\u09e0\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2-\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b5f-\u0b60\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c01-\u0c03\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62-\u0c63\u0c66-\u0c6f\u0c82\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2-\u0ce3\u0ce6-\u0cef\u0d02\u0d03\u0d46-\u0d48\u0d57\u0d62-\u0d63\u0d66-\u0d6f\u0d82\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e34-\u0e3a\u0e40-\u0e45\u0e50-\u0e59\u0eb4-\u0eb9\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f41-\u0f47\u0f71-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u1000-\u1029\u1040-\u1049\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u170e-\u1710\u1720-\u1730\u1740-\u1750\u1772\u1773\u1780-\u17b2\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u1920-\u192b\u1930-\u193b\u1951-\u196d\u19b0-\u19c0\u19c8-\u19c9\u19d0-\u19d9\u1a00-\u1a15\u1a20-\u1a53\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1b46-\u1b4b\u1b50-\u1b59\u1b6b-\u1b73\u1bb0-\u1bb9\u1be6-\u1bf3\u1c00-\u1c22\u1c40-\u1c49\u1c5b-\u1c7d\u1cd0-\u1cd2\u1d00-\u1dbe\u1e01-\u1f15\u200c\u200d\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2d81-\u2d96\u2de0-\u2dff\u3021-\u3028\u3099\u309a\ua640-\ua66d\ua674-\ua67d\ua69f\ua6f0-\ua6f1\ua7f8-\ua800\ua806\ua80b\ua823-\ua827\ua880-\ua881\ua8b4-\ua8c4\ua8d0-\ua8d9\ua8f3-\ua8f7\ua900-\ua909\ua926-\ua92d\ua930-\ua945\ua980-\ua983\ua9b3-\ua9c0\uaa00-\uaa27\uaa40-\uaa41\uaa4c-\uaa4d\uaa50-\uaa59\uaa7b\uaae0-\uaae9\uaaf2-\uaaf3\uabc0-\uabe1\uabec\uabed\uabf0-\uabf9\ufb20-\ufb28\ufe00-\ufe0f\ufe20-\ufe26\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f';
			var nonASCIIidentifierStart = new RegExp('[' + nonASCIIidentifierStartChars + ']');
			var nonASCIIidentifier = new RegExp('[' + nonASCIIidentifierStartChars + nonASCIIidentifierChars + ']');

			// Whether a single character denotes a newline.

			exports.newline = /[\n\r\u2028\u2029]/;

			// Matches a whole line break (where CRLF is considered a single
			// line break). Used to count lines.

			// in javascript, these two differ
			// in python they are the same, different methods are called on them
			exports.lineBreak = new RegExp('\r\n|' + exports.newline.source);
			exports.allLineBreaks = new RegExp(exports.lineBreak.source, 'g');


			// Test whether a given character code starts an identifier.

			exports.isIdentifierStart = function(code) {
				// permit $ (36) and @ (64). @ is used in ES7 decorators.
				if (code < 65) return code === 36 || code === 64;
				// 65 through 91 are uppercase letters.
				if (code < 91) return true;
				// permit _ (95).
				if (code < 97) return code === 95;
				// 97 through 123 are lowercase letters.
				if (code < 123) return true;
				return code >= 0xaa && nonASCIIidentifierStart.test(String.fromCharCode(code));
			};

			// Test whether a given character is part of an identifier.

			exports.isIdentifierChar = function(code) {
				if (code < 48) return code === 36;
				if (code < 58) return true;
				if (code < 65) return false;
				if (code < 91) return true;
				if (code < 97) return code === 95;
				if (code < 123) return true;
				return code >= 0xaa && nonASCIIidentifier.test(String.fromCharCode(code));
			};
		})(acorn);
		/* jshint curly: true */

		function in_array(what, arr) {
			for (var i = 0; i < arr.length; i += 1) {
				if (arr[i] === what) {
					return true;
				}
			}
			return false;
		}

		function trim(s) {
			return s.replace(/^\s+|\s+$/g, '');
		}

		function ltrim(s) {
			return s.replace(/^\s+/g, '');
		}

		// function rtrim(s) {
		//     return s.replace(/\s+$/g, '');
		// }

		function sanitizeOperatorPosition(opPosition) {
			opPosition = opPosition || OPERATOR_POSITION.before_newline;

			var validPositionValues = Object.values(OPERATOR_POSITION);

			if (!in_array(opPosition, validPositionValues)) {
				throw new Error('Invalid Option Value: The option \'operator_position\' must be one of the following values\n' +
                    validPositionValues +
                    '\nYou passed in: \'' + opPosition + '\'');
			}

			return opPosition;
		}

		var OPERATOR_POSITION = {
			before_newline: 'before-newline',
			after_newline: 'after-newline',
			preserve_newline: 'preserve-newline',
		};

		var OPERATOR_POSITION_BEFORE_OR_PRESERVE = [OPERATOR_POSITION.before_newline, OPERATOR_POSITION.preserve_newline];

		var MODE = {
			BlockStatement: 'BlockStatement', // 'BLOCK'
			Statement: 'Statement', // 'STATEMENT'
			ObjectLiteral: 'ObjectLiteral', // 'OBJECT',
			ArrayLiteral: 'ArrayLiteral', //'[EXPRESSION]',
			ForInitializer: 'ForInitializer', //'(FOR-EXPRESSION)',
			Conditional: 'Conditional', //'(COND-EXPRESSION)',
			Expression: 'Expression' //'(EXPRESSION)'
		};

		function Beautifier(js_source_text, options) {
			'use strict';
			var output;
			var tokens = [],
				token_pos;
			var Tokenizer;
			var current_token;
			var last_type, last_last_text, indent_string;
			var flags, previous_flags, flag_store;
			var prefix;

			var handlers, opt;
			var baseIndentString = '';

			handlers = {
				'TK_START_EXPR': handle_start_expr,
				'TK_END_EXPR': handle_end_expr,
				'TK_START_BLOCK': handle_start_block,
				'TK_END_BLOCK': handle_end_block,
				'TK_WORD': handle_word,
				'TK_RESERVED': handle_word,
				'TK_SEMICOLON': handle_semicolon,
				'TK_STRING': handle_string,
				'TK_EQUALS': handle_equals,
				'TK_OPERATOR': handle_operator,
				'TK_COMMA': handle_comma,
				'TK_BLOCK_COMMENT': handle_block_comment,
				'TK_COMMENT': handle_comment,
				'TK_DOT': handle_dot,
				'TK_UNKNOWN': handle_unknown,
				'TK_EOF': handle_eof
			};

			function create_flags(flags_base, mode) {
				var next_indent_level = 0;
				if (flags_base) {
					next_indent_level = flags_base.indentation_level;
					if (!output.just_added_newline() &&
                        flags_base.line_indent_level > next_indent_level) {
						next_indent_level = flags_base.line_indent_level;
					}
				}

				var next_flags = {
					mode: mode,
					parent: flags_base,
					last_text: flags_base ? flags_base.last_text : '', // last token text
					last_word: flags_base ? flags_base.last_word : '', // last 'TK_WORD' passed
					declaration_statement: false,
					declaration_assignment: false,
					multiline_frame: false,
					inline_frame: false,
					if_block: false,
					else_block: false,
					do_block: false,
					do_while: false,
					import_block: false,
					in_case_statement: false, // switch(..){ INSIDE HERE }
					in_case: false, // we're on the exact line with "case 0:"
					case_body: false, // the indented case-action block
					indentation_level: next_indent_level,
					line_indent_level: flags_base ? flags_base.line_indent_level : next_indent_level,
					start_line_index: output.get_line_number(),
					ternary_depth: 0
				};
				return next_flags;
			}

			// Some interpreters have unexpected results with foo = baz || bar;
			options = options ? options : {};

			// Allow the setting of language/file-type specific options
			// with inheritance of overall settings
			options = mergeOpts(options, 'js');

			opt = {};

			// compatibility, re
			if (options.brace_style === 'expand-strict') { //graceful handling of deprecated option
				options.brace_style = 'expand';
			} else if (options.brace_style === 'collapse-preserve-inline') { //graceful handling of deprecated option
				options.brace_style = 'collapse,preserve-inline';
			} else if (options.braces_on_own_line !== undefined) { //graceful handling of deprecated option
				options.brace_style = options.braces_on_own_line ? 'expand' : 'collapse';
			} else if (!options.brace_style) //Nothing exists to set it
			{
				options.brace_style = 'collapse';
			}


			var brace_style_split = options.brace_style.split(/[^a-zA-Z0-9_\-]+/);
			opt.brace_style = brace_style_split[0];
			opt.brace_preserve_inline = brace_style_split[1] ? brace_style_split[1] : false;

			opt.indent_size = options.indent_size ? parseInt(options.indent_size, 10) : 4;
			opt.indent_char = options.indent_char ? options.indent_char : ' ';
			opt.eol = options.eol ? options.eol : 'auto';
			opt.preserve_newlines = (options.preserve_newlines === undefined) ? true : options.preserve_newlines;
			opt.break_chained_methods = (options.break_chained_methods === undefined) ? false : options.break_chained_methods;
			opt.max_preserve_newlines = (options.max_preserve_newlines === undefined) ? 0 : parseInt(options.max_preserve_newlines, 10);
			opt.space_in_paren = (options.space_in_paren === undefined) ? false : options.space_in_paren;
			opt.space_in_empty_paren = (options.space_in_empty_paren === undefined) ? false : options.space_in_empty_paren;
			opt.jslint_happy = (options.jslint_happy === undefined) ? false : options.jslint_happy;
			opt.space_after_anon_function = (options.space_after_anon_function === undefined) ? false : options.space_after_anon_function;
			opt.keep_array_indentation = (options.keep_array_indentation === undefined) ? false : options.keep_array_indentation;
			opt.space_before_conditional = (options.space_before_conditional === undefined) ? true : options.space_before_conditional;
			opt.unescape_strings = (options.unescape_strings === undefined) ? false : options.unescape_strings;
			opt.wrap_line_length = (options.wrap_line_length === undefined) ? 0 : parseInt(options.wrap_line_length, 10);
			opt.e4x = (options.e4x === undefined) ? false : options.e4x;
			opt.end_with_newline = (options.end_with_newline === undefined) ? false : options.end_with_newline;
			opt.comma_first = (options.comma_first === undefined) ? false : options.comma_first;
			opt.operator_position = sanitizeOperatorPosition(options.operator_position);

			// For testing of beautify ignore:start directive
			opt.test_output_raw = (options.test_output_raw === undefined) ? false : options.test_output_raw;

			// force opt.space_after_anon_function to true if opt.jslint_happy
			if (opt.jslint_happy) {
				opt.space_after_anon_function = true;
			}

			if (options.indent_with_tabs) {
				opt.indent_char = '\t';
				opt.indent_size = 1;
			}

			if (opt.eol === 'auto') {
				opt.eol = '\n';
				if (js_source_text && acorn.lineBreak.test(js_source_text || '')) {
					opt.eol = js_source_text.match(acorn.lineBreak)[0];
				}
			}

			opt.eol = opt.eol.replace(/\\r/, '\r').replace(/\\n/, '\n');

			//----------------------------------
			indent_string = '';
			while (opt.indent_size > 0) {
				indent_string += opt.indent_char;
				opt.indent_size -= 1;
			}

			var preindent_index = 0;
			if (js_source_text && js_source_text.length) {
				while ((js_source_text.charAt(preindent_index) === ' ' ||
                        js_source_text.charAt(preindent_index) === '\t')) {
					baseIndentString += js_source_text.charAt(preindent_index);
					preindent_index += 1;
				}
				js_source_text = js_source_text.substring(preindent_index);
			}

			last_type = 'TK_START_BLOCK'; // last token type
			last_last_text = ''; // pre-last token text
			output = new Output(indent_string, baseIndentString);

			// If testing the ignore directive, start with output disable set to true
			output.raw = opt.test_output_raw;


			// Stack of parsing/formatting states, including MODE.
			// We tokenize, parse, and output in an almost purely a forward-only stream of token input
			// and formatted output.  This makes the beautifier less accurate than full parsers
			// but also far more tolerant of syntax errors.
			//
			// For example, the default mode is MODE.BlockStatement. If we see a '{' we push a new frame of type
			// MODE.BlockStatement on the the stack, even though it could be object literal.  If we later
			// encounter a ":", we'll switch to to MODE.ObjectLiteral.  If we then see a ";",
			// most full parsers would die, but the beautifier gracefully falls back to
			// MODE.BlockStatement and continues on.
			flag_store = [];
			set_mode(MODE.BlockStatement);

			this.beautify = function() {

				/*jshint onevar:true */
				var sweet_code;
				Tokenizer = new tokenizer(js_source_text, opt, indent_string);
				tokens = Tokenizer.tokenize();
				token_pos = 0;

				current_token = get_token();
				while (current_token) {
					handlers[current_token.type]();

					last_last_text = flags.last_text;
					last_type = current_token.type;
					flags.last_text = current_token.text;

					token_pos += 1;
					current_token = get_token();
				}

				sweet_code = output.get_code();
				if (opt.end_with_newline) {
					sweet_code += '\n';
				}

				if (opt.eol !== '\n') {
					sweet_code = sweet_code.replace(/[\n]/g, opt.eol);
				}

				return sweet_code;
			};

			function handle_whitespace_and_comments(local_token, preserve_statement_flags) {
				var newlines = local_token.newlines;
				var keep_whitespace = opt.keep_array_indentation && is_array(flags.mode);
				var temp_token = current_token;

				for (var h = 0; h < local_token.comments_before.length; h++) {
					// The cleanest handling of inline comments is to treat them as though they aren't there.
					// Just continue formatting and the behavior should be logical.
					// Also ignore unknown tokens.  Again, this should result in better behavior.
					current_token = local_token.comments_before[h];
					handle_whitespace_and_comments(current_token, preserve_statement_flags);
					handlers[current_token.type](preserve_statement_flags);
				}
				current_token = temp_token;

				if (keep_whitespace) {
					for (var i = 0; i < newlines; i += 1) {
						print_newline(i > 0, preserve_statement_flags);
					}
				} else {
					if (opt.max_preserve_newlines && newlines > opt.max_preserve_newlines) {
						newlines = opt.max_preserve_newlines;
					}

					if (opt.preserve_newlines) {
						if (local_token.newlines > 1) {
							print_newline(false, preserve_statement_flags);
							for (var j = 1; j < newlines; j += 1) {
								print_newline(true, preserve_statement_flags);
							}
						}
					}
				}

			}

			// we could use just string.split, but
			// IE doesn't like returning empty strings
			function split_linebreaks(s) {
				//return s.split(/\x0d\x0a|\x0a/);

				s = s.replace(acorn.allLineBreaks, '\n');
				var out = [],
					idx = s.indexOf('\n');
				while (idx !== -1) {
					out.push(s.substring(0, idx));
					s = s.substring(idx + 1);
					idx = s.indexOf('\n');
				}
				if (s.length) {
					out.push(s);
				}
				return out;
			}

			var newline_restricted_tokens = ['break', 'continue', 'return', 'throw'];

			function allow_wrap_or_preserved_newline(force_linewrap) {
				force_linewrap = (force_linewrap === undefined) ? false : force_linewrap;

				// Never wrap the first token on a line
				if (output.just_added_newline()) {
					return;
				}

				var shouldPreserveOrForce = (opt.preserve_newlines && current_token.wanted_newline) || force_linewrap;
				var operatorLogicApplies = in_array(flags.last_text, Tokenizer.positionable_operators) || in_array(current_token.text, Tokenizer.positionable_operators);

				if (operatorLogicApplies) {
					var shouldPrintOperatorNewline = (
						in_array(flags.last_text, Tokenizer.positionable_operators) &&
                            in_array(opt.operator_position, OPERATOR_POSITION_BEFORE_OR_PRESERVE)
					) ||
                        in_array(current_token.text, Tokenizer.positionable_operators);
					shouldPreserveOrForce = shouldPreserveOrForce && shouldPrintOperatorNewline;
				}

				if (shouldPreserveOrForce) {
					print_newline(false, true);
				} else if (opt.wrap_line_length) {
					if (last_type === 'TK_RESERVED' && in_array(flags.last_text, newline_restricted_tokens)) {
						// These tokens should never have a newline inserted
						// between them and the following expression.
						return;
					}
					var proposed_line_length = output.current_line.get_character_count() + current_token.text.length +
                        (output.space_before_token ? 1 : 0);
					if (proposed_line_length >= opt.wrap_line_length) {
						print_newline(false, true);
					}
				}
			}

			function print_newline(force_newline, preserve_statement_flags) {
				if (!preserve_statement_flags) {
					if (flags.last_text !== ';' && flags.last_text !== ',' && flags.last_text !== '=' && last_type !== 'TK_OPERATOR') {
						var next_token = get_token(1);
						while (flags.mode === MODE.Statement &&
                            !(flags.if_block && next_token && next_token.type === 'TK_RESERVED' && next_token.text === 'else') &&
                            !flags.do_block) {
							restore_mode();
						}
					}
				}

				if (output.add_new_line(force_newline)) {
					flags.multiline_frame = true;
				}
			}

			function print_token_line_indentation() {
				if (output.just_added_newline()) {
					if (opt.keep_array_indentation && is_array(flags.mode) && current_token.wanted_newline) {
						output.current_line.push(current_token.whitespace_before);
						output.space_before_token = false;
					} else if (output.set_indent(flags.indentation_level)) {
						flags.line_indent_level = flags.indentation_level;
					}
				}
			}

			function print_token(printable_token) {
				if (output.raw) {
					output.add_raw_token(current_token);
					return;
				}

				if (opt.comma_first && last_type === 'TK_COMMA' &&
                    output.just_added_newline()) {
					if (output.previous_line.last() === ',') {
						var popped = output.previous_line.pop();
						// if the comma was already at the start of the line,
						// pull back onto that line and reprint the indentation
						if (output.previous_line.is_empty()) {
							output.previous_line.push(popped);
							output.trim(true);
							output.current_line.pop();
							output.trim();
						}

						// add the comma in front of the next token
						print_token_line_indentation();
						output.add_token(',');
						output.space_before_token = true;
					}
				}

				printable_token = printable_token || current_token.text;
				print_token_line_indentation();
				output.add_token(printable_token);
			}

			function indent() {
				flags.indentation_level += 1;
			}

			function deindent() {
				if (flags.indentation_level > 0 &&
                    ((!flags.parent) || flags.indentation_level > flags.parent.indentation_level)) {
					flags.indentation_level -= 1;

				}
			}

			function set_mode(mode) {
				if (flags) {
					flag_store.push(flags);
					previous_flags = flags;
				} else {
					previous_flags = create_flags(null, mode);
				}

				flags = create_flags(previous_flags, mode);
			}

			function is_array(mode) {
				return mode === MODE.ArrayLiteral;
			}

			function is_expression(mode) {
				return in_array(mode, [MODE.Expression, MODE.ForInitializer, MODE.Conditional]);
			}

			function restore_mode() {
				if (flag_store.length > 0) {
					previous_flags = flags;
					flags = flag_store.pop();
					if (previous_flags.mode === MODE.Statement) {
						output.remove_redundant_indentation(previous_flags);
					}
				}
			}

			function start_of_object_property() {
				return flags.parent.mode === MODE.ObjectLiteral && flags.mode === MODE.Statement && (
					(flags.last_text === ':' && flags.ternary_depth === 0) || (last_type === 'TK_RESERVED' && in_array(flags.last_text, ['get', 'set'])));
			}

			function start_of_statement() {
				if (
					(last_type === 'TK_RESERVED' && in_array(flags.last_text, ['var', 'let', 'const']) && current_token.type === 'TK_WORD') ||
                    (last_type === 'TK_RESERVED' && flags.last_text === 'do') ||
                    (last_type === 'TK_RESERVED' && in_array(flags.last_text, ['return', 'throw']) && !current_token.wanted_newline) ||
                    (last_type === 'TK_RESERVED' && flags.last_text === 'else' &&
                        !(current_token.type === 'TK_RESERVED' && current_token.text === 'if' && !current_token.comments_before.length)) ||
                    (last_type === 'TK_END_EXPR' && (previous_flags.mode === MODE.ForInitializer || previous_flags.mode === MODE.Conditional)) ||
                    (last_type === 'TK_WORD' && flags.mode === MODE.BlockStatement &&
                        !flags.in_case &&
                        !(current_token.text === '--' || current_token.text === '++') &&
                        last_last_text !== 'function' &&
                        current_token.type !== 'TK_WORD' && current_token.type !== 'TK_RESERVED') ||
                    (flags.mode === MODE.ObjectLiteral && (
                    	(flags.last_text === ':' && flags.ternary_depth === 0) || (last_type === 'TK_RESERVED' && in_array(flags.last_text, ['get', 'set']))))
				) {

					set_mode(MODE.Statement);
					indent();

					handle_whitespace_and_comments(current_token, true);

					// Issue #276:
					// If starting a new statement with [if, for, while, do], push to a new line.
					// if (a) if (b) if(c) d(); else e(); else f();
					if (!start_of_object_property()) {
						allow_wrap_or_preserved_newline(
							current_token.type === 'TK_RESERVED' && in_array(current_token.text, ['do', 'for', 'if', 'while']));
					}

					return true;
				}
				return false;
			}

			function all_lines_start_with(lines, c) {
				for (var i = 0; i < lines.length; i++) {
					var line = trim(lines[i]);
					if (line.charAt(0) !== c) {
						return false;
					}
				}
				return true;
			}

			function each_line_matches_indent(lines, indent) {
				var i = 0,
					len = lines.length,
					line;
				for (; i < len; i++) {
					line = lines[i];
					// allow empty lines to pass through
					if (line && line.indexOf(indent) !== 0) {
						return false;
					}
				}
				return true;
			}

			function is_special_word(word) {
				return in_array(word, ['case', 'return', 'do', 'if', 'throw', 'else']);
			}

			function get_token(offset) {
				var index = token_pos + (offset || 0);
				return (index < 0 || index >= tokens.length) ? null : tokens[index];
			}

			function handle_start_expr() {
				// The conditional starts the statement if appropriate.
				if (!start_of_statement()) {
					handle_whitespace_and_comments(current_token);
				}

				var next_mode = MODE.Expression;
				if (current_token.text === '[') {

					if (last_type === 'TK_WORD' || flags.last_text === ')') {
						// this is array index specifier, break immediately
						// a[x], fn()[x]
						if (last_type === 'TK_RESERVED' && in_array(flags.last_text, Tokenizer.line_starters)) {
							output.space_before_token = true;
						}
						set_mode(next_mode);
						print_token();
						indent();
						if (opt.space_in_paren) {
							output.space_before_token = true;
						}
						return;
					}

					next_mode = MODE.ArrayLiteral;
					if (is_array(flags.mode)) {
						if (flags.last_text === '[' ||
                            (flags.last_text === ',' && (last_last_text === ']' || last_last_text === '}'))) {
							// ], [ goes to new line
							// }, [ goes to new line
							if (!opt.keep_array_indentation) {
								print_newline();
							}
						}
					}

				} else {
					if (last_type === 'TK_RESERVED' && flags.last_text === 'for') {
						next_mode = MODE.ForInitializer;
					} else if (last_type === 'TK_RESERVED' && in_array(flags.last_text, ['if', 'while'])) {
						next_mode = MODE.Conditional;
					} else {
						// next_mode = MODE.Expression;
					}
				}

				if (flags.last_text === ';' || last_type === 'TK_START_BLOCK') {
					print_newline();
				} else if (last_type === 'TK_END_EXPR' || last_type === 'TK_START_EXPR' || last_type === 'TK_END_BLOCK' || flags.last_text === '.') {
					// TODO: Consider whether forcing this is required.  Review failing tests when removed.
					allow_wrap_or_preserved_newline(current_token.wanted_newline);
					// do nothing on (( and )( and ][ and ]( and .(
				} else if (!(last_type === 'TK_RESERVED' && current_token.text === '(') && last_type !== 'TK_WORD' && last_type !== 'TK_OPERATOR') {
					output.space_before_token = true;
				} else if ((last_type === 'TK_RESERVED' && (flags.last_word === 'function' || flags.last_word === 'typeof')) ||
                    (flags.last_text === '*' &&
                        (in_array(last_last_text, ['function', 'yield']) ||
                            (flags.mode === MODE.ObjectLiteral && in_array(last_last_text, ['{', ',']))))) {
					// function() vs function ()
					// yield*() vs yield* ()
					// function*() vs function* ()
					if (opt.space_after_anon_function) {
						output.space_before_token = true;
					}
				} else if (last_type === 'TK_RESERVED' && (in_array(flags.last_text, Tokenizer.line_starters) || flags.last_text === 'catch')) {
					if (opt.space_before_conditional) {
						output.space_before_token = true;
					}
				}

				// Should be a space between await and an IIFE
				if (current_token.text === '(' && last_type === 'TK_RESERVED' && flags.last_word === 'await') {
					output.space_before_token = true;
				}

				// Support of this kind of newline preservation.
				// a = (b &&
				//     (c || d));
				if (current_token.text === '(') {
					if (last_type === 'TK_EQUALS' || last_type === 'TK_OPERATOR') {
						if (!start_of_object_property()) {
							allow_wrap_or_preserved_newline();
						}
					}
				}

				// Support preserving wrapped arrow function expressions
				// a.b('c',
				//     () => d.e
				// )
				if (current_token.text === '(' && last_type !== 'TK_WORD' && last_type !== 'TK_RESERVED') {
					allow_wrap_or_preserved_newline();
				}

				set_mode(next_mode);
				print_token();
				if (opt.space_in_paren) {
					output.space_before_token = true;
				}

				// In all cases, if we newline while inside an expression it should be indented.
				indent();
			}

			function handle_end_expr() {
				// statements inside expressions are not valid syntax, but...
				// statements must all be closed when their container closes
				while (flags.mode === MODE.Statement) {
					restore_mode();
				}

				handle_whitespace_and_comments(current_token);

				if (flags.multiline_frame) {
					allow_wrap_or_preserved_newline(current_token.text === ']' && is_array(flags.mode) && !opt.keep_array_indentation);
				}

				if (opt.space_in_paren) {
					if (last_type === 'TK_START_EXPR' && !opt.space_in_empty_paren) {
						// () [] no inner space in empty parens like these, ever, ref #320
						output.trim();
						output.space_before_token = false;
					} else {
						output.space_before_token = true;
					}
				}
				if (current_token.text === ']' && opt.keep_array_indentation) {
					print_token();
					restore_mode();
				} else {
					restore_mode();
					print_token();
				}
				output.remove_redundant_indentation(previous_flags);

				// do {} while () // no statement required after
				if (flags.do_while && previous_flags.mode === MODE.Conditional) {
					previous_flags.mode = MODE.Expression;
					flags.do_block = false;
					flags.do_while = false;

				}
			}

			function handle_start_block() {
				handle_whitespace_and_comments(current_token);

				// Check if this is should be treated as a ObjectLiteral
				var next_token = get_token(1);
				var second_token = get_token(2);
				if (second_token && (
					(in_array(second_token.text, [':', ',']) && in_array(next_token.type, ['TK_STRING', 'TK_WORD', 'TK_RESERVED'])) ||
                        (in_array(next_token.text, ['get', 'set', '...']) && in_array(second_token.type, ['TK_WORD', 'TK_RESERVED']))
				)) {
					// We don't support TypeScript,but we didn't break it for a very long time.
					// We'll try to keep not breaking it.
					if (!in_array(last_last_text, ['class', 'interface'])) {
						set_mode(MODE.ObjectLiteral);
					} else {
						set_mode(MODE.BlockStatement);
					}
				} else if (last_type === 'TK_OPERATOR' && flags.last_text === '=>') {
					// arrow function: (param1, paramN) => { statements }
					set_mode(MODE.BlockStatement);
				} else if (in_array(last_type, ['TK_EQUALS', 'TK_START_EXPR', 'TK_COMMA', 'TK_OPERATOR']) ||
                    (last_type === 'TK_RESERVED' && in_array(flags.last_text, ['return', 'throw', 'import', 'default']))
				) {
					// Detecting shorthand function syntax is difficult by scanning forward,
					//     so check the surrounding context.
					// If the block is being returned, imported, export default, passed as arg,
					//     assigned with = or assigned in a nested object, treat as an ObjectLiteral.
					set_mode(MODE.ObjectLiteral);
				} else {
					set_mode(MODE.BlockStatement);
				}

				var empty_braces = !next_token.comments_before.length && next_token.text === '}';
				var empty_anonymous_function = empty_braces && flags.last_word === 'function' &&
                    last_type === 'TK_END_EXPR';

				if (opt.brace_preserve_inline) // check for inline, set inline_frame if so
				{
					// search forward for a newline wanted inside this block
					var index = 0;
					var check_token = null;
					flags.inline_frame = true;
					do {
						index += 1;
						check_token = get_token(index);
						if (check_token.wanted_newline) {
							flags.inline_frame = false;
							break;
						}
					} while (check_token.type !== 'TK_EOF' &&
                        !(check_token.type === 'TK_END_BLOCK' && check_token.opened === current_token));
				}

				if ((opt.brace_style === 'expand' ||
                        (opt.brace_style === 'none' && current_token.wanted_newline)) &&
                    !flags.inline_frame) {
					if (last_type !== 'TK_OPERATOR' &&
                        (empty_anonymous_function ||
                            last_type === 'TK_EQUALS' ||
                            (last_type === 'TK_RESERVED' && is_special_word(flags.last_text) && flags.last_text !== 'else'))) {
						output.space_before_token = true;
					} else {
						print_newline(false, true);
					}
				} else { // collapse || inline_frame
					if (is_array(previous_flags.mode) && (last_type === 'TK_START_EXPR' || last_type === 'TK_COMMA')) {
						if (last_type === 'TK_COMMA' || opt.space_in_paren) {
							output.space_before_token = true;
						}

						if (last_type === 'TK_COMMA' || (last_type === 'TK_START_EXPR' && flags.inline_frame)) {
							allow_wrap_or_preserved_newline();
							previous_flags.multiline_frame = previous_flags.multiline_frame || flags.multiline_frame;
							flags.multiline_frame = false;
						}
					}
					if (last_type !== 'TK_OPERATOR' && last_type !== 'TK_START_EXPR') {
						if (last_type === 'TK_START_BLOCK' && !flags.inline_frame) {
							print_newline();
						} else {
							output.space_before_token = true;
						}
					}
				}
				print_token();
				indent();
			}

			function handle_end_block() {
				// statements must all be closed when their container closes
				handle_whitespace_and_comments(current_token);

				while (flags.mode === MODE.Statement) {
					restore_mode();
				}

				var empty_braces = last_type === 'TK_START_BLOCK';

				if (flags.inline_frame && !empty_braces) { // try inline_frame (only set if opt.braces-preserve-inline) first
					output.space_before_token = true;
				} else if (opt.brace_style === 'expand') {
					if (!empty_braces) {
						print_newline();
					}
				} else {
					// skip {}
					if (!empty_braces) {
						if (is_array(flags.mode) && opt.keep_array_indentation) {
							// we REALLY need a newline here, but newliner would skip that
							opt.keep_array_indentation = false;
							print_newline();
							opt.keep_array_indentation = true;

						} else {
							print_newline();
						}
					}
				}
				restore_mode();
				print_token();
			}

			function handle_word() {
				if (current_token.type === 'TK_RESERVED') {
					if (in_array(current_token.text, ['set', 'get']) && flags.mode !== MODE.ObjectLiteral) {
						current_token.type = 'TK_WORD';
					} else if (in_array(current_token.text, ['as', 'from']) && !flags.import_block) {
						current_token.type = 'TK_WORD';
					} else if (flags.mode === MODE.ObjectLiteral) {
						var next_token = get_token(1);
						if (next_token.text === ':') {
							current_token.type = 'TK_WORD';
						}
					}
				}

				if (start_of_statement()) {
					// The conditional starts the statement if appropriate.
					if (last_type === 'TK_RESERVED' && in_array(flags.last_text, ['var', 'let', 'const']) && current_token.type === 'TK_WORD') {
						flags.declaration_statement = true;
					}
				} else if (current_token.wanted_newline && !is_expression(flags.mode) &&
                    (last_type !== 'TK_OPERATOR' || (flags.last_text === '--' || flags.last_text === '++')) &&
                    last_type !== 'TK_EQUALS' &&
                    (opt.preserve_newlines || !(last_type === 'TK_RESERVED' && in_array(flags.last_text, ['var', 'let', 'const', 'set', 'get'])))) {
					handle_whitespace_and_comments(current_token);
					print_newline();
				} else {
					handle_whitespace_and_comments(current_token);
				}

				if (flags.do_block && !flags.do_while) {
					if (current_token.type === 'TK_RESERVED' && current_token.text === 'while') {
						// do {} ## while ()
						output.space_before_token = true;
						print_token();
						output.space_before_token = true;
						flags.do_while = true;
						return;
					} else {
						// do {} should always have while as the next word.
						// if we don't see the expected while, recover
						print_newline();
						flags.do_block = false;
					}
				}

				// if may be followed by else, or not
				// Bare/inline ifs are tricky
				// Need to unwind the modes correctly: if (a) if (b) c(); else d(); else e();
				if (flags.if_block) {
					if (!flags.else_block && (current_token.type === 'TK_RESERVED' && current_token.text === 'else')) {
						flags.else_block = true;
					} else {
						while (flags.mode === MODE.Statement) {
							restore_mode();
						}
						flags.if_block = false;
						flags.else_block = false;
					}
				}

				if (current_token.type === 'TK_RESERVED' && (current_token.text === 'case' || (current_token.text === 'default' && flags.in_case_statement))) {
					print_newline();
					if (flags.case_body || opt.jslint_happy) {
						// switch cases following one another
						deindent();
						flags.case_body = false;
					}
					print_token();
					flags.in_case = true;
					flags.in_case_statement = true;
					return;
				}

				if (last_type === 'TK_COMMA' || last_type === 'TK_START_EXPR' || last_type === 'TK_EQUALS' || last_type === 'TK_OPERATOR') {
					if (!start_of_object_property()) {
						allow_wrap_or_preserved_newline();
					}
				}

				if (current_token.type === 'TK_RESERVED' && current_token.text === 'function') {
					if (in_array(flags.last_text, ['}', ';']) ||
                        (output.just_added_newline() && !(in_array(flags.last_text, ['(', '[', '{', ':', '=', ',']) || last_type === 'TK_OPERATOR'))) {
						// make sure there is a nice clean space of at least one blank line
						// before a new function definition
						if (!output.just_added_blankline() && !current_token.comments_before.length) {
							print_newline();
							print_newline(true);
						}
					}
					if (last_type === 'TK_RESERVED' || last_type === 'TK_WORD') {
						if (last_type === 'TK_RESERVED' && in_array(flags.last_text, ['get', 'set', 'new', 'return', 'export', 'async'])) {
							output.space_before_token = true;
						} else if (last_type === 'TK_RESERVED' && flags.last_text === 'default' && last_last_text === 'export') {
							output.space_before_token = true;
						} else {
							print_newline();
						}
					} else if (last_type === 'TK_OPERATOR' || flags.last_text === '=') {
						// foo = function
						output.space_before_token = true;
					} else if (!flags.multiline_frame && (is_expression(flags.mode) || is_array(flags.mode))) {
						// (function
					} else {
						print_newline();
					}

					print_token();
					flags.last_word = current_token.text;
					return;
				}

				prefix = 'NONE';

				if (last_type === 'TK_END_BLOCK') {

					if (previous_flags.inline_frame) {
						prefix = 'SPACE';
					} else if (!(current_token.type === 'TK_RESERVED' && in_array(current_token.text, ['else', 'catch', 'finally', 'from']))) {
						prefix = 'NEWLINE';
					} else {
						if (opt.brace_style === 'expand' ||
                            opt.brace_style === 'end-expand' ||
                            (opt.brace_style === 'none' && current_token.wanted_newline)) {
							prefix = 'NEWLINE';
						} else {
							prefix = 'SPACE';
							output.space_before_token = true;
						}
					}
				} else if (last_type === 'TK_SEMICOLON' && flags.mode === MODE.BlockStatement) {
					// TODO: Should this be for STATEMENT as well?
					prefix = 'NEWLINE';
				} else if (last_type === 'TK_SEMICOLON' && is_expression(flags.mode)) {
					prefix = 'SPACE';
				} else if (last_type === 'TK_STRING') {
					prefix = 'NEWLINE';
				} else if (last_type === 'TK_RESERVED' || last_type === 'TK_WORD' ||
                    (flags.last_text === '*' &&
                        (in_array(last_last_text, ['function', 'yield']) ||
                            (flags.mode === MODE.ObjectLiteral && in_array(last_last_text, ['{', ',']))))) {
					prefix = 'SPACE';
				} else if (last_type === 'TK_START_BLOCK') {
					if (flags.inline_frame) {
						prefix = 'SPACE';
					} else {
						prefix = 'NEWLINE';
					}
				} else if (last_type === 'TK_END_EXPR') {
					output.space_before_token = true;
					prefix = 'NEWLINE';
				}

				if (current_token.type === 'TK_RESERVED' && in_array(current_token.text, Tokenizer.line_starters) && flags.last_text !== ')') {
					if (flags.inline_frame || flags.last_text === 'else' || flags.last_text === 'export') {
						prefix = 'SPACE';
					} else {
						prefix = 'NEWLINE';
					}

				}

				if (current_token.type === 'TK_RESERVED' && in_array(current_token.text, ['else', 'catch', 'finally'])) {
					if ((!(last_type === 'TK_END_BLOCK' && previous_flags.mode === MODE.BlockStatement) ||
                            opt.brace_style === 'expand' ||
                            opt.brace_style === 'end-expand' ||
                            (opt.brace_style === 'none' && current_token.wanted_newline)) &&
                        !flags.inline_frame) {
						print_newline();
					} else {
						output.trim(true);
						var line = output.current_line;
						// If we trimmed and there's something other than a close block before us
						// put a newline back in.  Handles '} // comment' scenario.
						if (line.last() !== '}') {
							print_newline();
						}
						output.space_before_token = true;
					}
				} else if (prefix === 'NEWLINE') {
					if (last_type === 'TK_RESERVED' && is_special_word(flags.last_text)) {
						// no newline between 'return nnn'
						output.space_before_token = true;
					} else if (last_type !== 'TK_END_EXPR') {
						if ((last_type !== 'TK_START_EXPR' || !(current_token.type === 'TK_RESERVED' && in_array(current_token.text, ['var', 'let', 'const']))) && flags.last_text !== ':') {
							// no need to force newline on 'var': for (var x = 0...)
							if (current_token.type === 'TK_RESERVED' && current_token.text === 'if' && flags.last_text === 'else') {
								// no newline for } else if {
								output.space_before_token = true;
							} else {
								print_newline();
							}
						}
					} else if (current_token.type === 'TK_RESERVED' && in_array(current_token.text, Tokenizer.line_starters) && flags.last_text !== ')') {
						print_newline();
					}
				} else if (flags.multiline_frame && is_array(flags.mode) && flags.last_text === ',' && last_last_text === '}') {
					print_newline(); // }, in lists get a newline treatment
				} else if (prefix === 'SPACE') {
					output.space_before_token = true;
				}
				print_token();
				flags.last_word = current_token.text;

				if (current_token.type === 'TK_RESERVED') {
					if (current_token.text === 'do') {
						flags.do_block = true;
					} else if (current_token.text === 'if') {
						flags.if_block = true;
					} else if (current_token.text === 'import') {
						flags.import_block = true;
					} else if (flags.import_block && current_token.type === 'TK_RESERVED' && current_token.text === 'from') {
						flags.import_block = false;
					}
				}
			}

			function handle_semicolon() {
				if (start_of_statement()) {
					// The conditional starts the statement if appropriate.
					// Semicolon can be the start (and end) of a statement
					output.space_before_token = false;
				} else {
					handle_whitespace_and_comments(current_token);
				}

				var next_token = get_token(1);
				while (flags.mode === MODE.Statement &&
                    !(flags.if_block && next_token && next_token.type === 'TK_RESERVED' && next_token.text === 'else') &&
                    !flags.do_block) {
					restore_mode();
				}

				// hacky but effective for the moment
				if (flags.import_block) {
					flags.import_block = false;
				}
				print_token();
			}

			function handle_string() {
				if (start_of_statement()) {
					// The conditional starts the statement if appropriate.
					// One difference - strings want at least a space before
					output.space_before_token = true;
				} else {
					handle_whitespace_and_comments(current_token);
					if (last_type === 'TK_RESERVED' || last_type === 'TK_WORD' || flags.inline_frame) {
						output.space_before_token = true;
					} else if (last_type === 'TK_COMMA' || last_type === 'TK_START_EXPR' || last_type === 'TK_EQUALS' || last_type === 'TK_OPERATOR') {
						if (!start_of_object_property()) {
							allow_wrap_or_preserved_newline();
						}
					} else {
						print_newline();
					}
				}
				print_token();
			}

			function handle_equals() {
				if (start_of_statement()) {
					// The conditional starts the statement if appropriate.
				} else {
					handle_whitespace_and_comments(current_token);
				}

				if (flags.declaration_statement) {
					// just got an '=' in a var-line, different formatting/line-breaking, etc will now be done
					flags.declaration_assignment = true;
				}
				output.space_before_token = true;
				print_token();
				output.space_before_token = true;
			}

			function handle_comma() {
				handle_whitespace_and_comments(current_token, true);

				print_token();
				output.space_before_token = true;
				if (flags.declaration_statement) {
					if (is_expression(flags.parent.mode)) {
						// do not break on comma, for(var a = 1, b = 2)
						flags.declaration_assignment = false;
					}

					if (flags.declaration_assignment) {
						flags.declaration_assignment = false;
						print_newline(false, true);
					} else if (opt.comma_first) {
						// for comma-first, we want to allow a newline before the comma
						// to turn into a newline after the comma, which we will fixup later
						allow_wrap_or_preserved_newline();
					}
				} else if (flags.mode === MODE.ObjectLiteral ||
                    (flags.mode === MODE.Statement && flags.parent.mode === MODE.ObjectLiteral)) {
					if (flags.mode === MODE.Statement) {
						restore_mode();
					}

					if (!flags.inline_frame) {
						print_newline();
					}
				} else if (opt.comma_first) {
					// EXPR or DO_BLOCK
					// for comma-first, we want to allow a newline before the comma
					// to turn into a newline after the comma, which we will fixup later
					allow_wrap_or_preserved_newline();
				}
			}

			function handle_operator() {
				var isGeneratorAsterisk = current_token.text === '*' &&
                    ((last_type === 'TK_RESERVED' && in_array(flags.last_text, ['function', 'yield'])) ||
                        (in_array(last_type, ['TK_START_BLOCK', 'TK_COMMA', 'TK_END_BLOCK', 'TK_SEMICOLON']))
                    );
				var isUnary = in_array(current_token.text, ['-', '+']) && (
					in_array(last_type, ['TK_START_BLOCK', 'TK_START_EXPR', 'TK_EQUALS', 'TK_OPERATOR']) ||
                    in_array(flags.last_text, Tokenizer.line_starters) ||
                    flags.last_text === ','
				);

				if (start_of_statement()) {
					// The conditional starts the statement if appropriate.
				} else {
					var preserve_statement_flags = !isGeneratorAsterisk;
					handle_whitespace_and_comments(current_token, preserve_statement_flags);
				}

				if (last_type === 'TK_RESERVED' && is_special_word(flags.last_text)) {
					// "return" had a special handling in TK_WORD. Now we need to return the favor
					output.space_before_token = true;
					print_token();
					return;
				}

				// hack for actionscript's import .*;
				if (current_token.text === '*' && last_type === 'TK_DOT') {
					print_token();
					return;
				}

				if (current_token.text === '::') {
					// no spaces around exotic namespacing syntax operator
					print_token();
					return;
				}

				// Allow line wrapping between operators when operator_position is
				//   set to before or preserve
				if (last_type === 'TK_OPERATOR' && in_array(opt.operator_position, OPERATOR_POSITION_BEFORE_OR_PRESERVE)) {
					allow_wrap_or_preserved_newline();
				}

				if (current_token.text === ':' && flags.in_case) {
					flags.case_body = true;
					indent();
					print_token();
					print_newline();
					flags.in_case = false;
					return;
				}

				var space_before = true;
				var space_after = true;
				var in_ternary = false;
				if (current_token.text === ':') {
					if (flags.ternary_depth === 0) {
						// Colon is invalid javascript outside of ternary and object, but do our best to guess what was meant.
						space_before = false;
					} else {
						flags.ternary_depth -= 1;
						in_ternary = true;
					}
				} else if (current_token.text === '?') {
					flags.ternary_depth += 1;
				}

				// let's handle the operator_position option prior to any conflicting logic
				if (!isUnary && !isGeneratorAsterisk && opt.preserve_newlines && in_array(current_token.text, Tokenizer.positionable_operators)) {
					var isColon = current_token.text === ':';
					var isTernaryColon = (isColon && in_ternary);
					var isOtherColon = (isColon && !in_ternary);

					switch (opt.operator_position) {
					case OPERATOR_POSITION.before_newline:
						// if the current token is : and it's not a ternary statement then we set space_before to false
						output.space_before_token = !isOtherColon;

						print_token();

						if (!isColon || isTernaryColon) {
							allow_wrap_or_preserved_newline();
						}

						output.space_before_token = true;
						return;

					case OPERATOR_POSITION.after_newline:
						// if the current token is anything but colon, or (via deduction) it's a colon and in a ternary statement,
						//   then print a newline.

						output.space_before_token = true;

						if (!isColon || isTernaryColon) {
							if (get_token(1).wanted_newline) {
								print_newline(false, true);
							} else {
								allow_wrap_or_preserved_newline();
							}
						} else {
							output.space_before_token = false;
						}

						print_token();

						output.space_before_token = true;
						return;

					case OPERATOR_POSITION.preserve_newline:
						if (!isOtherColon) {
							allow_wrap_or_preserved_newline();
						}

						// if we just added a newline, or the current token is : and it's not a ternary statement,
						//   then we set space_before to false
						space_before = !(output.just_added_newline() || isOtherColon);

						output.space_before_token = space_before;
						print_token();
						output.space_before_token = true;
						return;
					}
				}

				if (isGeneratorAsterisk) {
					allow_wrap_or_preserved_newline();
					space_before = false;
					var next_token = get_token(1);
					space_after = next_token && in_array(next_token.type, ['TK_WORD', 'TK_RESERVED']);
				} else if (current_token.text === '...') {
					allow_wrap_or_preserved_newline();
					space_before = last_type === 'TK_START_BLOCK';
					space_after = false;
				} else if (in_array(current_token.text, ['--', '++', '!', '~']) || isUnary) {
					// unary operators (and binary +/- pretending to be unary) special cases

					space_before = false;
					space_after = false;

					// http://www.ecma-international.org/ecma-262/5.1/#sec-7.9.1
					// if there is a newline between -- or ++ and anything else we should preserve it.
					if (current_token.wanted_newline && (current_token.text === '--' || current_token.text === '++')) {
						print_newline(false, true);
					}

					if (flags.last_text === ';' && is_expression(flags.mode)) {
						// for (;; ++i)
						//        ^^^
						space_before = true;
					}

					if (last_type === 'TK_RESERVED') {
						space_before = true;
					} else if (last_type === 'TK_END_EXPR') {
						space_before = !(flags.last_text === ']' && (current_token.text === '--' || current_token.text === '++'));
					} else if (last_type === 'TK_OPERATOR') {
						// a++ + ++b;
						// a - -b
						space_before = in_array(current_token.text, ['--', '-', '++', '+']) && in_array(flags.last_text, ['--', '-', '++', '+']);
						// + and - are not unary when preceeded by -- or ++ operator
						// a-- + b
						// a * +b
						// a - -b
						if (in_array(current_token.text, ['+', '-']) && in_array(flags.last_text, ['--', '++'])) {
							space_after = true;
						}
					}


					if (((flags.mode === MODE.BlockStatement && !flags.inline_frame) || flags.mode === MODE.Statement) &&
                        (flags.last_text === '{' || flags.last_text === ';')) {
						// { foo; --i }
						// foo(); --bar;
						print_newline();
					}
				}

				output.space_before_token = output.space_before_token || space_before;
				print_token();
				output.space_before_token = space_after;
			}

			function handle_block_comment(preserve_statement_flags) {
				if (output.raw) {
					output.add_raw_token(current_token);
					if (current_token.directives && current_token.directives.preserve === 'end') {
						// If we're testing the raw output behavior, do not allow a directive to turn it off.
						output.raw = opt.test_output_raw;
					}
					return;
				}

				if (current_token.directives) {
					print_newline(false, preserve_statement_flags);
					print_token();
					if (current_token.directives.preserve === 'start') {
						output.raw = true;
					}
					print_newline(false, true);
					return;
				}

				// inline block
				if (!acorn.newline.test(current_token.text) && !current_token.wanted_newline) {
					output.space_before_token = true;
					print_token();
					output.space_before_token = true;
					return;
				}

				var lines = split_linebreaks(current_token.text);
				var j; // iterator for this case
				var javadoc = false;
				var starless = false;
				var lastIndent = current_token.whitespace_before;
				var lastIndentLength = lastIndent.length;

				// block comment starts with a new line
				print_newline(false, preserve_statement_flags);
				if (lines.length > 1) {
					javadoc = all_lines_start_with(lines.slice(1), '*');
					starless = each_line_matches_indent(lines.slice(1), lastIndent);
				}

				// first line always indented
				print_token(lines[0]);
				for (j = 1; j < lines.length; j++) {
					print_newline(false, true);
					if (javadoc) {
						// javadoc: reformat and re-indent
						print_token(' ' + ltrim(lines[j]));
					} else if (starless && lines[j].length > lastIndentLength) {
						// starless: re-indent non-empty content, avoiding trim
						print_token(lines[j].substring(lastIndentLength));
					} else {
						// normal comments output raw
						output.add_token(lines[j]);
					}
				}

				// for comments of more than one line, make sure there's a new line after
				print_newline(false, preserve_statement_flags);
			}

			function handle_comment(preserve_statement_flags) {
				if (current_token.wanted_newline) {
					print_newline(false, preserve_statement_flags);
				} else {
					output.trim(true);
				}

				output.space_before_token = true;
				print_token();
				print_newline(false, preserve_statement_flags);
			}

			function handle_dot() {
				if (start_of_statement()) {
					// The conditional starts the statement if appropriate.
				} else {
					handle_whitespace_and_comments(current_token, true);
				}

				if (last_type === 'TK_RESERVED' && is_special_word(flags.last_text)) {
					output.space_before_token = true;
				} else {
					// allow preserved newlines before dots in general
					// force newlines on dots after close paren when break_chained - for bar().baz()
					allow_wrap_or_preserved_newline(flags.last_text === ')' && opt.break_chained_methods);
				}

				print_token();
			}

			function handle_unknown(preserve_statement_flags) {
				print_token();

				if (current_token.text[current_token.text.length - 1] === '\n') {
					print_newline(false, preserve_statement_flags);
				}
			}

			function handle_eof() {
				// Unwind any open statements
				while (flags.mode === MODE.Statement) {
					restore_mode();
				}
				handle_whitespace_and_comments(current_token);
			}
		}


		function OutputLine(parent) {
			var _character_count = 0;
			// use indent_count as a marker for lines that have preserved indentation
			var _indent_count = -1;

			var _items = [];
			var _empty = true;

			this.set_indent = function(level) {
				_character_count = parent.baseIndentLength + level * parent.indent_length;
				_indent_count = level;
			};

			this.get_character_count = function() {
				return _character_count;
			};

			this.is_empty = function() {
				return _empty;
			};

			this.last = function() {
				if (!this._empty) {
					return _items[_items.length - 1];
				} else {
					return null;
				}
			};

			this.push = function(input) {
				_items.push(input);
				_character_count += input.length;
				_empty = false;
			};

			this.pop = function() {
				var item = null;
				if (!_empty) {
					item = _items.pop();
					_character_count -= item.length;
					_empty = _items.length === 0;
				}
				return item;
			};

			this.remove_indent = function() {
				if (_indent_count > 0) {
					_indent_count -= 1;
					_character_count -= parent.indent_length;
				}
			};

			this.trim = function() {
				while (this.last() === ' ') {
					_items.pop();
					_character_count -= 1;
				}
				_empty = _items.length === 0;
			};

			this.toString = function() {
				var result = '';
				if (!this._empty) {
					if (_indent_count >= 0) {
						result = parent.indent_cache[_indent_count];
					}
					result += _items.join('');
				}
				return result;
			};
		}

		function Output(indent_string, baseIndentString) {
			baseIndentString = baseIndentString || '';
			this.indent_cache = [baseIndentString];
			this.baseIndentLength = baseIndentString.length;
			this.indent_length = indent_string.length;
			this.raw = false;

			var lines = [];
			this.baseIndentString = baseIndentString;
			this.indent_string = indent_string;
			this.previous_line = null;
			this.current_line = null;
			this.space_before_token = false;

			this.add_outputline = function() {
				this.previous_line = this.current_line;
				this.current_line = new OutputLine(this);
				lines.push(this.current_line);
			};

			// initialize
			this.add_outputline();


			this.get_line_number = function() {
				return lines.length;
			};

			// Using object instead of string to allow for later expansion of info about each line
			this.add_new_line = function(force_newline) {
				if (this.get_line_number() === 1 && this.just_added_newline()) {
					return false; // no newline on start of file
				}

				if (force_newline || !this.just_added_newline()) {
					if (!this.raw) {
						this.add_outputline();
					}
					return true;
				}

				return false;
			};

			this.get_code = function() {
				var sweet_code = lines.join('\n').replace(/[\r\n\t ]+$/, '');
				return sweet_code;
			};

			this.set_indent = function(level) {
				// Never indent your first output indent at the start of the file
				if (lines.length > 1) {
					while (level >= this.indent_cache.length) {
						this.indent_cache.push(this.indent_cache[this.indent_cache.length - 1] + this.indent_string);
					}

					this.current_line.set_indent(level);
					return true;
				}
				this.current_line.set_indent(0);
				return false;
			};

			this.add_raw_token = function(token) {
				for (var x = 0; x < token.newlines; x++) {
					this.add_outputline();
				}
				this.current_line.push(token.whitespace_before);
				this.current_line.push(token.text);
				this.space_before_token = false;
			};

			this.add_token = function(printable_token) {
				this.add_space_before_token();
				this.current_line.push(printable_token);
			};

			this.add_space_before_token = function() {
				if (this.space_before_token && !this.just_added_newline()) {
					this.current_line.push(' ');
				}
				this.space_before_token = false;
			};

			this.remove_redundant_indentation = function(frame) {
				// This implementation is effective but has some issues:
				//     - can cause line wrap to happen too soon due to indent removal
				//           after wrap points are calculated
				// These issues are minor compared to ugly indentation.

				if (frame.multiline_frame ||
                    frame.mode === MODE.ForInitializer ||
                    frame.mode === MODE.Conditional) {
					return;
				}

				// remove one indent from each line inside this section
				var index = frame.start_line_index;

				var output_length = lines.length;
				while (index < output_length) {
					lines[index].remove_indent();
					index++;
				}
			};

			this.trim = function(eat_newlines) {
				eat_newlines = (eat_newlines === undefined) ? false : eat_newlines;

				this.current_line.trim(indent_string, baseIndentString);

				while (eat_newlines && lines.length > 1 &&
                    this.current_line.is_empty()) {
					lines.pop();
					this.current_line = lines[lines.length - 1];
					this.current_line.trim();
				}

				this.previous_line = lines.length > 1 ? lines[lines.length - 2] : null;
			};

			this.just_added_newline = function() {
				return this.current_line.is_empty();
			};

			this.just_added_blankline = function() {
				if (this.just_added_newline()) {
					if (lines.length === 1) {
						return true; // start of the file and newline = blank
					}

					var line = lines[lines.length - 2];
					return line.is_empty();
				}
				return false;
			};
		}

		var InputScanner = function(input) {
			var _input = input;
			var _input_length = _input.length;
			var _position = 0;

			this.back = function() {
				_position -= 1;
			};

			this.hasNext = function() {
				return _position < _input_length;
			};

			this.next = function() {
				var val = null;
				if (this.hasNext()) {
					val = _input.charAt(_position);
					_position += 1;
				}
				return val;
			};

			this.peek = function(index) {
				var val = null;
				index = index || 0;
				index += _position;
				if (index >= 0 && index < _input_length) {
					val = _input.charAt(index);
				}
				return val;
			};

			this.peekCharCode = function(index) {
				var val = 0;
				index = index || 0;
				index += _position;
				if (index >= 0 && index < _input_length) {
					val = _input.charCodeAt(index);
				}
				return val;
			};

			this.test = function(pattern, index) {
				index = index || 0;
				pattern.lastIndex = _position + index;
				return pattern.test(_input);
			};

			this.testChar = function(pattern, index) {
				var val = this.peek(index);
				return val !== null && pattern.test(val);
			};

			this.match = function(pattern) {
				pattern.lastIndex = _position;
				var pattern_match = pattern.exec(_input);
				if (pattern_match && pattern_match.index === _position) {
					_position += pattern_match[0].length;
				} else {
					pattern_match = null;
				}
				return pattern_match;
			};
		};

		var Token = function(type, text, newlines, whitespace_before, parent) {
			this.type = type;
			this.text = text;

			// comments_before are
			// comments that have a new line before them
			// and may or may not have a newline after
			// this is a set of comments before
			this.comments_before = /* inline comment*/ [];


			this.comments_after = []; // no new line before and newline after
			this.newlines = newlines || 0;
			this.wanted_newline = newlines > 0;
			this.whitespace_before = whitespace_before || '';
			this.parent = parent || null;
			this.opened = null;
			this.directives = null;
		};

		function tokenizer(input_string, opts) {

			var whitespace = '\n\r\t '.split('');
			var digit = /[0-9]/;
			var digit_bin = /[01]/;
			var digit_oct = /[01234567]/;
			var digit_hex = /[0123456789abcdefABCDEF]/;

			this.positionable_operators = '!= !== % & && * ** + - / : < << <= == === > >= >> >>> ? ^ | ||'.split(' ');
			var punct = this.positionable_operators.concat(
				// non-positionable operators - these do not follow operator position settings
				'! %= &= *= **= ++ += , -- -= /= :: <<= = => >>= >>>= ^= |= ~ ...'.split(' '));

			// words which should always start on new line.
			this.line_starters = 'continue,try,throw,return,var,let,const,if,switch,case,default,for,while,break,function,import,export'.split(',');
			var reserved_words = this.line_starters.concat(['do', 'in', 'of', 'else', 'get', 'set', 'new', 'catch', 'finally', 'typeof', 'yield', 'async', 'await', 'from', 'as']);

			//  /* ... */ comment ends with nearest */ or end of file
			var block_comment_pattern = /([\s\S]*?)((?:\*\/)|$)/g;

			// comment ends just before nearest linefeed or end of file
			var comment_pattern = /([^\n\r\u2028\u2029]*)/g;

			var directives_block_pattern = /\/\* beautify( \w+[:]\w+)+ \*\//g;
			var directive_pattern = / (\w+)[:](\w+)/g;
			var directives_end_ignore_pattern = /([\s\S]*?)((?:\/\*\sbeautify\signore:end\s\*\/)|$)/g;

			var template_pattern = /((<\?php|<\?=)[\s\S]*?\?>)|(<%[\s\S]*?%>)/g;

			var n_newlines, whitespace_before_token, in_html_comment, tokens;
			var input;

			this.tokenize = function() {
				input = new InputScanner(input_string);
				in_html_comment = false;
				tokens = [];

				var next, last;
				var token_values;
				var open = null;
				var open_stack = [];
				var comments = [];

				while (!(last && last.type === 'TK_EOF')) {
					token_values = tokenize_next();
					next = new Token(token_values[1], token_values[0], n_newlines, whitespace_before_token);
					while (next.type === 'TK_COMMENT' || next.type === 'TK_BLOCK_COMMENT' || next.type === 'TK_UNKNOWN') {
						if (next.type === 'TK_BLOCK_COMMENT') {
							next.directives = token_values[2];
						}
						comments.push(next);
						token_values = tokenize_next();
						next = new Token(token_values[1], token_values[0], n_newlines, whitespace_before_token);
					}

					if (comments.length) {
						next.comments_before = comments;
						comments = [];
					}

					if (next.type === 'TK_START_BLOCK' || next.type === 'TK_START_EXPR') {
						next.parent = last;
						open_stack.push(open);
						open = next;
					} else if ((next.type === 'TK_END_BLOCK' || next.type === 'TK_END_EXPR') &&
                        (open && (
                        	(next.text === ']' && open.text === '[') ||
                            (next.text === ')' && open.text === '(') ||
                            (next.text === '}' && open.text === '{')))) {
						next.parent = open.parent;
						next.opened = open;

						open = open_stack.pop();
					}

					tokens.push(next);
					last = next;
				}

				return tokens;
			};

			function get_directives(text) {
				if (!text.match(directives_block_pattern)) {
					return null;
				}

				var directives = {};
				directive_pattern.lastIndex = 0;
				var directive_match = directive_pattern.exec(text);

				while (directive_match) {
					directives[directive_match[1]] = directive_match[2];
					directive_match = directive_pattern.exec(text);
				}

				return directives;
			}

			function tokenize_next() {
				var resulting_string;
				var whitespace_on_this_line = [];

				n_newlines = 0;
				whitespace_before_token = '';

				var c = input.next();

				if (c === null) {
					return ['', 'TK_EOF'];
				}

				var last_token;
				if (tokens.length) {
					last_token = tokens[tokens.length - 1];
				} else {
					// For the sake of tokenizing we can pretend that there was on open brace to start
					last_token = new Token('TK_START_BLOCK', '{');
				}

				while (in_array(c, whitespace)) {

					if (acorn.newline.test(c)) {
						if (!(c === '\n' && input.peek(-2) === '\r')) {
							n_newlines += 1;
							whitespace_on_this_line = [];
						}
					} else {
						whitespace_on_this_line.push(c);
					}

					c = input.next();

					if (c === null) {
						return ['', 'TK_EOF'];
					}
				}

				if (whitespace_on_this_line.length) {
					whitespace_before_token = whitespace_on_this_line.join('');
				}

				if (digit.test(c) || (c === '.' && input.testChar(digit))) {
					var allow_decimal = true;
					var allow_e = true;
					var local_digit = digit;

					if (c === '0' && input.testChar(/[XxOoBb]/)) {
						// switch to hex/oct/bin number, no decimal or e, just hex/oct/bin digits
						allow_decimal = false;
						allow_e = false;
						if (input.testChar(/[Bb]/)) {
							local_digit = digit_bin;
						} else if (input.testChar(/[Oo]/)) {
							local_digit = digit_oct;
						} else {
							local_digit = digit_hex;
						}
						c += input.next();
					} else if (c === '.') {
						// Already have a decimal for this literal, don't allow another
						allow_decimal = false;
					} else {
						// we know this first loop will run.  It keeps the logic simpler.
						c = '';
						input.back();
					}

					// Add the digits
					while (input.testChar(local_digit)) {
						c += input.next();

						if (allow_decimal && input.peek() === '.') {
							c += input.next();
							allow_decimal = false;
						}

						// a = 1.e-7 is valid, so we test for . then e in one loop
						if (allow_e && input.testChar(/[Ee]/)) {
							c += input.next();

							if (input.testChar(/[+-]/)) {
								c += input.next();
							}

							allow_e = false;
							allow_decimal = false;
						}
					}

					return [c, 'TK_WORD'];
				}

				if (acorn.isIdentifierStart(input.peekCharCode(-1))) {
					if (input.hasNext()) {
						while (acorn.isIdentifierChar(input.peekCharCode())) {
							c += input.next();
							if (!input.hasNext()) {
								break;
							}
						}
					}

					if (!(last_token.type === 'TK_DOT' ||
                            (last_token.type === 'TK_RESERVED' && in_array(last_token.text, ['set', 'get']))) &&
                        in_array(c, reserved_words)) {
						if (c === 'in' || c === 'of') { // hack for 'in' and 'of' operators
							return [c, 'TK_OPERATOR'];
						}
						return [c, 'TK_RESERVED'];
					}

					return [c, 'TK_WORD'];
				}

				if (c === '(' || c === '[') {
					return [c, 'TK_START_EXPR'];
				}

				if (c === ')' || c === ']') {
					return [c, 'TK_END_EXPR'];
				}

				if (c === '{') {
					return [c, 'TK_START_BLOCK'];
				}

				if (c === '}') {
					return [c, 'TK_END_BLOCK'];
				}

				if (c === ';') {
					return [c, 'TK_SEMICOLON'];
				}

				if (c === '/') {
					var comment = '';
					var comment_match;
					// peek for comment /* ... */
					if (input.peek() === '*') {
						input.next();
						comment_match = input.match(block_comment_pattern);
						comment = '/*' + comment_match[0];
						var directives = get_directives(comment);
						if (directives && directives.ignore === 'start') {
							comment_match = input.match(directives_end_ignore_pattern);
							comment += comment_match[0];
						}
						comment = comment.replace(acorn.allLineBreaks, '\n');
						return [comment, 'TK_BLOCK_COMMENT', directives];
					}
					// peek for comment // ...
					if (input.peek() === '/') {
						input.next();
						comment_match = input.match(comment_pattern);
						comment = '//' + comment_match[0];
						return [comment, 'TK_COMMENT'];
					}

				}

				var startXmlRegExp = /<()([-a-zA-Z:0-9_.]+|{[\s\S]+?}|!\[CDATA\[[\s\S]*?\]\])(\s+{[\s\S]+?}|\s+[-a-zA-Z:0-9_.]+|\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{[\s\S]+?}))*\s*(\/?)\s*>/g;

				if (c === '`' || c === '\'' || c === '"' || // string
                    (
                    	(c === '/') || // regexp
                        (opts.e4x && c === '<' && input.test(startXmlRegExp, -1)) // xml
                    ) && ( // regex and xml can only appear in specific locations during parsing
                    		(last_token.type === 'TK_RESERVED' && in_array(last_token.text, ['return', 'case', 'throw', 'else', 'do', 'typeof', 'yield'])) ||
                        (last_token.type === 'TK_END_EXPR' && last_token.text === ')' &&
                            last_token.parent && last_token.parent.type === 'TK_RESERVED' && in_array(last_token.parent.text, ['if', 'while', 'for'])) ||
                        (in_array(last_token.type, ['TK_COMMENT', 'TK_START_EXPR', 'TK_START_BLOCK',
                        	'TK_END_BLOCK', 'TK_OPERATOR', 'TK_EQUALS', 'TK_EOF', 'TK_SEMICOLON', 'TK_COMMA'
                        ]))
                    	)) {

					var sep = c,
						esc = false,
						has_char_escapes = false;

					resulting_string = c;

					if (sep === '/') {
						//
						// handle regexp
						//
						var in_char_class = false;
						while (input.hasNext() &&
                            ((esc || in_char_class || input.peek() !== sep) &&
                                !input.testChar(acorn.newline))) {
							resulting_string += input.peek();
							if (!esc) {
								esc = input.peek() === '\\';
								if (input.peek() === '[') {
									in_char_class = true;
								} else if (input.peek() === ']') {
									in_char_class = false;
								}
							} else {
								esc = false;
							}
							input.next();
						}
					} else if (opts.e4x && sep === '<') {
						//
						// handle e4x xml literals
						//

						var xmlRegExp = /[\s\S]*?<(\/?)([-a-zA-Z:0-9_.]+|{[\s\S]+?}|!\[CDATA\[[\s\S]*?\]\])(\s+{[\s\S]+?}|\s+[-a-zA-Z:0-9_.]+|\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{[\s\S]+?}))*\s*(\/?)\s*>/g;
						input.back();
						var xmlStr = '';
						var match = input.match(startXmlRegExp);
						if (match) {
							// Trim root tag to attempt to
							var rootTag = match[2].replace(/^{\s+/, '{').replace(/\s+}$/, '}');
							var isCurlyRoot = rootTag.indexOf('{') === 0;
							var depth = 0;
							while (match) {
								var isEndTag = !!match[1];
								var tagName = match[2];
								var isSingletonTag = (!!match[match.length - 1]) || (tagName.slice(0, 8) === '![CDATA[');
								if (!isSingletonTag &&
                                    (tagName === rootTag || (isCurlyRoot && tagName.replace(/^{\s+/, '{').replace(/\s+}$/, '}')))) {
									if (isEndTag) {
										--depth;
									} else {
										++depth;
									}
								}
								xmlStr += match[0];
								if (depth <= 0) {
									break;
								}
								match = input.match(xmlRegExp);
							}
							// if we didn't close correctly, keep unformatted.
							if (!match) {
								xmlStr += input.match(/[\s\S]*/g)[0];
							}
							xmlStr = xmlStr.replace(acorn.allLineBreaks, '\n');
							return [xmlStr, 'TK_STRING'];
						}
					} else {
						//
						// handle string
						//
						var parse_string = function(delimiter, allow_unescaped_newlines, start_sub) {
							// Template strings can travers lines without escape characters.
							// Other strings cannot
							var current_char;
							while (input.hasNext()) {
								current_char = input.peek();
								if (!(esc || (current_char !== delimiter &&
                                        (allow_unescaped_newlines || !acorn.newline.test(current_char))))) {
									break;
								}

								// Handle \r\n linebreaks after escapes or in template strings
								if ((esc || allow_unescaped_newlines) && acorn.newline.test(current_char)) {
									if (current_char === '\r' && input.peek(1) === '\n') {
										input.next();
										current_char = input.peek();
									}
									resulting_string += '\n';
								} else {
									resulting_string += current_char;
								}

								if (esc) {
									if (current_char === 'x' || current_char === 'u') {
										has_char_escapes = true;
									}
									esc = false;
								} else {
									esc = current_char === '\\';
								}

								input.next();

								if (start_sub && resulting_string.indexOf(start_sub, resulting_string.length - start_sub.length) !== -1) {
									if (delimiter === '`') {
										parse_string('}', allow_unescaped_newlines, '`');
									} else {
										parse_string('`', allow_unescaped_newlines, '${');
									}

									if (input.hasNext()) {
										resulting_string += input.next();
									}
								}
							}
						};

						if (sep === '`') {
							parse_string('`', true, '${');
						} else {
							parse_string(sep);
						}
					}

					if (has_char_escapes && opts.unescape_strings) {
						resulting_string = unescape_string(resulting_string);
					}

					if (input.peek() === sep) {
						resulting_string += sep;
						input.next();

						if (sep === '/') {
							// regexps may have modifiers /regexp/MOD , so fetch those, too
							// Only [gim] are valid, but if the user puts in garbage, do what we can to take it.
							while (input.hasNext() && acorn.isIdentifierStart(input.peekCharCode())) {
								resulting_string += input.next();
							}
						}
					}
					return [resulting_string, 'TK_STRING'];
				}

				if (c === '#') {

					if (tokens.length === 0 && input.peek() === '!') {
						// shebang
						resulting_string = c;
						while (input.hasNext() && c !== '\n') {
							c = input.next();
							resulting_string += c;
						}
						return [trim(resulting_string) + '\n', 'TK_UNKNOWN'];
					}



					// Spidermonkey-specific sharp variables for circular references
					// https://developer.mozilla.org/En/Sharp_variables_in_JavaScript
					// http://mxr.mozilla.org/mozilla-central/source/js/src/jsscan.cpp around line 1935
					var sharp = '#';
					if (input.hasNext() && input.testChar(digit)) {
						do {
							c = input.next();
							sharp += c;
						} while (input.hasNext() && c !== '#' && c !== '=');
						if (c === '#') {
							//
						} else if (input.peek() === '[' && input.peek(1) === ']') {
							sharp += '[]';
							input.next();
							input.next();
						} else if (input.peek() === '{' && input.peek(1) === '}') {
							sharp += '{}';
							input.next();
							input.next();
						}
						return [sharp, 'TK_WORD'];
					}
				}

				if (c === '<' && (input.peek() === '?' || input.peek() === '%')) {
					input.back();
					var template_match = input.match(template_pattern);
					if (template_match) {
						c = template_match[0];
						c = c.replace(acorn.allLineBreaks, '\n');
						return [c, 'TK_STRING'];
					}
				}

				if (c === '<' && input.match(/\!--/g)) {
					c = '<!--';
					while (input.hasNext() && !input.testChar(acorn.newline)) {
						c += input.next();
					}
					in_html_comment = true;
					return [c, 'TK_COMMENT'];
				}

				if (c === '-' && in_html_comment && input.match(/->/g)) {
					in_html_comment = false;
					return ['-->', 'TK_COMMENT'];
				}

				if (c === '.') {
					if (input.peek() === '.' && input.peek(1) === '.') {
						c += input.next() + input.next();
						return [c, 'TK_OPERATOR'];
					}
					return [c, 'TK_DOT'];
				}

				if (in_array(c, punct)) {
					while (input.hasNext() && in_array(c + input.peek(), punct)) {
						c += input.next();
						if (!input.hasNext()) {
							break;
						}
					}

					if (c === ',') {
						return [c, 'TK_COMMA'];
					} else if (c === '=') {
						return [c, 'TK_EQUALS'];
					} else {
						return [c, 'TK_OPERATOR'];
					}
				}

				return [c, 'TK_UNKNOWN'];
			}


			function unescape_string(s) {
				// You think that a regex would work for this
				// return s.replace(/\\x([0-9a-f]{2})/gi, function(match, val) {
				//         return String.fromCharCode(parseInt(val, 16));
				//     })
				// However, dealing with '\xff', '\\xff', '\\\xff' makes this more fun.
				var out = '',
					escaped = 0;

				var input_scan = new InputScanner(s);
				var matched = null;

				while (input_scan.hasNext()) {
					// Keep any whitespace, non-slash characters
					// also keep slash pairs.
					matched = input_scan.match(/([\s]|[^\\]|\\\\)+/g);

					if (matched) {
						out += matched[0];
					}

					if (input_scan.peek() === '\\') {
						input_scan.next();
						if (input_scan.peek() === 'x') {
							matched = input_scan.match(/x([0-9A-Fa-f]{2})/g);
						} else if (input_scan.peek() === 'u') {
							matched = input_scan.match(/u([0-9A-Fa-f]{4})/g);
						} else {
							out += '\\';
							if (input_scan.hasNext()) {
								out += input_scan.next();
							}
							continue;
						}

						// If there's some error decoding, return the original string
						if (!matched) {
							return s;
						}

						escaped = parseInt(matched[1], 16);

						if (escaped > 0x7e && escaped <= 0xff && matched[0].indexOf('x') === 0) {
							// we bail out on \x7f..\xff,
							// leaving whole string escaped,
							// as it's probably completely binary
							return s;
						} else if (escaped >= 0x00 && escaped < 0x20) {
							// leave 0x00...0x1f escaped
							out += '\\' + matched[0];
							continue;
						} else if (escaped === 0x22 || escaped === 0x27 || escaped === 0x5c) {
							// single-quote, apostrophe, backslash - escape these
							out += '\\' + String.fromCharCode(escaped);
						} else {
							out += String.fromCharCode(escaped);
						}
					}
				}

				return out;
			}
		}

		var beautifier = new Beautifier(js_source_text, options);
		return beautifier.beautify();

	}

	if (typeof define === 'function' && define.amd) {
		// Add support for AMD ( https://github.com/amdjs/amdjs-api/wiki/AMD#defineamd-property- )
		define([], function() {
			return { js_beautify: js_beautify };
		});
	} else if (typeof exports !== 'undefined') {
		// Add support for CommonJS. Just put this file somewhere on your require.paths
		// and you will be able to `var js_beautify = require("beautify").js_beautify`.
		exports.js_beautify = js_beautify;
	} else if (typeof window !== 'undefined') {
		// If we're running a web page and don't have either of the above, add our one global
		window.js_beautify = js_beautify;
	} else if (typeof global !== 'undefined') {
		// If we don't even have window, try global.
		global.js_beautify = js_beautify;
	}

}());
!function(t,e){'object'==typeof exports&&'object'==typeof module?module.exports=e():'function'==typeof define&&define.amd?define([],e):'object'==typeof exports?exports.io=e():t.io=e();}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports;}var n={};return e.m=t,e.c=n,e.p='',e(0);}([function(t,e,n){'use strict';function r(t,e){'object'===('undefined'==typeof t?'undefined':o(t))&&(e=t,t=void 0),e=e||{};var n,r=i(t),s=r.source,u=r.id,h=r.path,f=p[u]&&h in p[u].nsps,l=e.forceNew||e['force new connection']||!1===e.multiplex||f;return l?(c('ignoring socket cache for %s',s),n=a(s,e)):(p[u]||(c('new io instance for %s',s),p[u]=a(s,e)),n=p[u]),r.query&&!e.query&&(e.query=r.query),n.socket(r.path,e);}var o='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;},i=n(1),s=n(7),a=n(13),c=n(3)('socket.io-client');t.exports=e=r;var p=e.managers={};e.protocol=s.protocol,e.connect=r,e.Manager=n(13),e.Socket=n(37);},function(t,e,n){(function(e){'use strict';function r(t,n){var r=t;n=n||e.location,null==t&&(t=n.protocol+'//'+n.host),'string'==typeof t&&('/'===t.charAt(0)&&(t='/'===t.charAt(1)?n.protocol+t:n.host+t),/^(https?|wss?):\/\//.test(t)||(i('protocol-less url %s',t),t='undefined'!=typeof n?n.protocol+'//'+t:'https://'+t),i('parse %s',t),r=o(t)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port='80':/^(http|ws)s$/.test(r.protocol)&&(r.port='443')),r.path=r.path||'/';var s=r.host.indexOf(':')!==-1,a=s?'['+r.host+']':r.host;return r.id=r.protocol+'://'+a+':'+r.port,r.href=r.protocol+'://'+a+(n&&n.port===r.port?'':':'+r.port),r;}var o=n(2),i=n(3)('socket.io-client:url');t.exports=r;}).call(e,function(){return this;}());},function(t,e){var n=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,r=['source','protocol','authority','userInfo','user','password','host','port','relative','path','directory','file','query','anchor'];t.exports=function(t){var e=t,o=t.indexOf('['),i=t.indexOf(']');o!=-1&&i!=-1&&(t=t.substring(0,o)+t.substring(o,i).replace(/:/g,';')+t.substring(i,t.length));for(var s=n.exec(t||''),a={},c=14;c--;)a[r[c]]=s[c]||'';return o!=-1&&i!=-1&&(a.source=e,a.host=a.host.substring(1,a.host.length-1).replace(/;/g,':'),a.authority=a.authority.replace('[','').replace(']','').replace(/;/g,':'),a.ipv6uri=!0),a;};},function(t,e,n){(function(r){function o(){return!('undefined'==typeof window||!window.process||'renderer'!==window.process.type)||('undefined'!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||'undefined'!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||'undefined'!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||'undefined'!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));}function i(t){var n=this.useColors;if(t[0]=(n?'%c':'')+this.namespace+(n?' %c':' ')+t[0]+(n?'%c ':' ')+'+'+e.humanize(this.diff),n){var r='color: '+this.color;t.splice(1,0,r,'color: inherit');var o=0,i=0;t[0].replace(/%[a-zA-Z%]/g,function(t){'%%'!==t&&(o++,'%c'===t&&(i=o));}),t.splice(i,0,r);}}function s(){return'object'==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments);}function a(t){try{null==t?e.storage.removeItem('debug'):e.storage.debug=t;}catch(n){}}function c(){var t;try{t=e.storage.debug;}catch(n){}return!t&&'undefined'!=typeof r&&'env'in r&&(t=r.env.DEBUG),t;}function p(){try{return window.localStorage;}catch(t){}}e=t.exports=n(5),e.log=s,e.formatArgs=i,e.save=a,e.load=c,e.useColors=o,e.storage='undefined'!=typeof chrome&&'undefined'!=typeof chrome.storage?chrome.storage.local:p(),e.colors=['lightseagreen','forestgreen','goldenrod','dodgerblue','darkorchid','crimson'],e.formatters.j=function(t){try{return JSON.stringify(t);}catch(e){return'[UnexpectedJSONParseError]: '+e.message;}},e.enable(c());}).call(e,n(4));},function(t,e){function n(){throw new Error('setTimeout has not been defined');}function r(){throw new Error('clearTimeout has not been defined');}function o(t){if(u===setTimeout)return setTimeout(t,0);if((u===n||!u)&&setTimeout)return u=setTimeout,setTimeout(t,0);try{return u(t,0);}catch(e){try{return u.call(null,t,0);}catch(e){return u.call(this,t,0);}}}function i(t){if(h===clearTimeout)return clearTimeout(t);if((h===r||!h)&&clearTimeout)return h=clearTimeout,clearTimeout(t);try{return h(t);}catch(e){try{return h.call(null,t);}catch(e){return h.call(this,t);}}}function s(){y&&l&&(y=!1,l.length?d=l.concat(d):m=-1,d.length&&a());}function a(){if(!y){var t=o(s);y=!0;for(var e=d.length;e;){for(l=d,d=[];++m<e;)l&&l[m].run();m=-1,e=d.length;}l=null,y=!1,i(t);}}function c(t,e){this.fun=t,this.array=e;}function p(){}var u,h,f=t.exports={};!function(){try{u='function'==typeof setTimeout?setTimeout:n;}catch(t){u=n;}try{h='function'==typeof clearTimeout?clearTimeout:r;}catch(t){h=r;}}();var l,d=[],y=!1,m=-1;f.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];d.push(new c(t,e)),1!==d.length||y||o(a);},c.prototype.run=function(){this.fun.apply(null,this.array);},f.title='browser',f.browser=!0,f.env={},f.argv=[],f.version='',f.versions={},f.on=p,f.addListener=p,f.once=p,f.off=p,f.removeListener=p,f.removeAllListeners=p,f.emit=p,f.prependListener=p,f.prependOnceListener=p,f.listeners=function(t){return[];},f.binding=function(t){throw new Error('process.binding is not supported');},f.cwd=function(){return'/';},f.chdir=function(t){throw new Error('process.chdir is not supported');},f.umask=function(){return 0;};},function(t,e,n){function r(t){var n,r=0;for(n in t)r=(r<<5)-r+t.charCodeAt(n),r|=0;return e.colors[Math.abs(r)%e.colors.length];}function o(t){function n(){if(n.enabled){var t=n,r=+new Date,o=r-(p||r);t.diff=o,t.prev=p,t.curr=r,p=r;for(var i=new Array(arguments.length),s=0;s<i.length;s++)i[s]=arguments[s];i[0]=e.coerce(i[0]),'string'!=typeof i[0]&&i.unshift('%O');var a=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,function(n,r){if('%%'===n)return n;a++;var o=e.formatters[r];if('function'==typeof o){var s=i[a];n=o.call(t,s),i.splice(a,1),a--;}return n;}),e.formatArgs.call(t,i);var c=n.log||e.log||console.log.bind(console);c.apply(t,i);}}return n.namespace=t,n.enabled=e.enabled(t),n.useColors=e.useColors(),n.color=r(t),'function'==typeof e.init&&e.init(n),n;}function i(t){e.save(t),e.names=[],e.skips=[];for(var n=('string'==typeof t?t:'').split(/[\s,]+/),r=n.length,o=0;o<r;o++)n[o]&&(t=n[o].replace(/\*/g,'.*?'),'-'===t[0]?e.skips.push(new RegExp('^'+t.substr(1)+'$')):e.names.push(new RegExp('^'+t+'$')));}function s(){e.enable('');}function a(t){var n,r;for(n=0,r=e.skips.length;n<r;n++)if(e.skips[n].test(t))return!1;for(n=0,r=e.names.length;n<r;n++)if(e.names[n].test(t))return!0;return!1;}function c(t){return t instanceof Error?t.stack||t.message:t;}e=t.exports=o.debug=o['default']=o,e.coerce=c,e.disable=s,e.enable=i,e.enabled=a,e.humanize=n(6),e.names=[],e.skips=[],e.formatters={};var p;},function(t,e){function n(t){if(t=String(t),!(t.length>100)){var e=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if(e){var n=parseFloat(e[1]),r=(e[2]||'ms').toLowerCase();switch(r){case'years':case'year':case'yrs':case'yr':case'y':return n*u;case'days':case'day':case'd':return n*p;case'hours':case'hour':case'hrs':case'hr':case'h':return n*c;case'minutes':case'minute':case'mins':case'min':case'm':return n*a;case'seconds':case'second':case'secs':case'sec':case's':return n*s;case'milliseconds':case'millisecond':case'msecs':case'msec':case'ms':return n;default:return;}}}}function r(t){return t>=p?Math.round(t/p)+'d':t>=c?Math.round(t/c)+'h':t>=a?Math.round(t/a)+'m':t>=s?Math.round(t/s)+'s':t+'ms';}function o(t){return i(t,p,'day')||i(t,c,'hour')||i(t,a,'minute')||i(t,s,'second')||t+' ms';}function i(t,e,n){if(!(t<e))return t<1.5*e?Math.floor(t/e)+' '+n:Math.ceil(t/e)+' '+n+'s';}var s=1e3,a=60*s,c=60*a,p=24*c,u=365.25*p;t.exports=function(t,e){e=e||{};var i=typeof t;if('string'===i&&t.length>0)return n(t);if('number'===i&&isNaN(t)===!1)return e['long']?o(t):r(t);throw new Error('val is not a non-empty string or a valid number. val='+JSON.stringify(t));};},function(t,e,n){function r(){}function o(t){var n=''+t.type;return e.BINARY_EVENT!==t.type&&e.BINARY_ACK!==t.type||(n+=t.attachments+'-'),t.nsp&&'/'!==t.nsp&&(n+=t.nsp+','),null!=t.id&&(n+=t.id),null!=t.data&&(n+=JSON.stringify(t.data)),h('encoded %j as %s',t,n),n;}function i(t,e){function n(t){var n=d.deconstructPacket(t),r=o(n.packet),i=n.buffers;i.unshift(r),e(i);}d.removeBlobs(t,n);}function s(){this.reconstructor=null;}function a(t){var n=0,r={type:Number(t.charAt(0))};if(null==e.types[r.type])return u();if(e.BINARY_EVENT===r.type||e.BINARY_ACK===r.type){for(var o='';'-'!==t.charAt(++n)&&(o+=t.charAt(n),n!=t.length););if(o!=Number(o)||'-'!==t.charAt(n))throw new Error('Illegal attachments');r.attachments=Number(o);}if('/'===t.charAt(n+1))for(r.nsp='';++n;){var i=t.charAt(n);if(','===i)break;if(r.nsp+=i,n===t.length)break;}else r.nsp='/';var s=t.charAt(n+1);if(''!==s&&Number(s)==s){for(r.id='';++n;){var i=t.charAt(n);if(null==i||Number(i)!=i){--n;break;}if(r.id+=t.charAt(n),n===t.length)break;}r.id=Number(r.id);}return t.charAt(++n)&&(r=c(r,t.substr(n))),h('decoded %s as %j',t,r),r;}function c(t,e){try{t.data=JSON.parse(e);}catch(n){return u();}return t;}function p(t){this.reconPack=t,this.buffers=[];}function u(){return{type:e.ERROR,data:'parser error'};}var h=n(3)('socket.io-parser'),f=n(8),l=n(9),d=n(11),y=n(12);e.protocol=4,e.types=['CONNECT','DISCONNECT','EVENT','ACK','ERROR','BINARY_EVENT','BINARY_ACK'],e.CONNECT=0,e.DISCONNECT=1,e.EVENT=2,e.ACK=3,e.ERROR=4,e.BINARY_EVENT=5,e.BINARY_ACK=6,e.Encoder=r,e.Decoder=s,r.prototype.encode=function(t,n){if(t.type!==e.EVENT&&t.type!==e.ACK||!l(t.data)||(t.type=t.type===e.EVENT?e.BINARY_EVENT:e.BINARY_ACK),h('encoding packet %j',t),e.BINARY_EVENT===t.type||e.BINARY_ACK===t.type)i(t,n);else{var r=o(t);n([r]);}},f(s.prototype),s.prototype.add=function(t){var n;if('string'==typeof t)n=a(t),e.BINARY_EVENT===n.type||e.BINARY_ACK===n.type?(this.reconstructor=new p(n),0===this.reconstructor.reconPack.attachments&&this.emit('decoded',n)):this.emit('decoded',n);else{if(!y(t)&&!t.base64)throw new Error('Unknown type: '+t);if(!this.reconstructor)throw new Error('got binary data when not reconstructing a packet');n=this.reconstructor.takeBinaryData(t),n&&(this.reconstructor=null,this.emit('decoded',n));}},s.prototype.destroy=function(){this.reconstructor&&this.reconstructor.finishedReconstruction();},p.prototype.takeBinaryData=function(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){var e=d.reconstructPacket(this.reconPack,this.buffers);return this.finishedReconstruction(),e;}return null;},p.prototype.finishedReconstruction=function(){this.reconPack=null,this.buffers=[];};},function(t,e,n){function r(t){if(t)return o(t);}function o(t){for(var e in r.prototype)t[e]=r.prototype[e];return t;}t.exports=r,r.prototype.on=r.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks['$'+t]=this._callbacks['$'+t]||[]).push(e),this;},r.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments);}return n.fn=e,this.on(t,n),this;},r.prototype.off=r.prototype.removeListener=r.prototype.removeAllListeners=r.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n=this._callbacks['$'+t];if(!n)return this;if(1==arguments.length)return delete this._callbacks['$'+t],this;for(var r,o=0;o<n.length;o++)if(r=n[o],r===e||r.fn===e){n.splice(o,1);break;}return this;},r.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),n=this._callbacks['$'+t];if(n){n=n.slice(0);for(var r=0,o=n.length;r<o;++r)n[r].apply(this,e);}return this;},r.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks['$'+t]||[];},r.prototype.hasListeners=function(t){return!!this.listeners(t).length;};},function(t,e,n){(function(e){function r(t){if(!t||'object'!=typeof t)return!1;if(o(t)){for(var n=0,i=t.length;n<i;n++)if(r(t[n]))return!0;return!1;}if('function'==typeof e.Buffer&&e.Buffer.isBuffer&&e.Buffer.isBuffer(t)||'function'==typeof e.ArrayBuffer&&t instanceof ArrayBuffer||s&&t instanceof Blob||a&&t instanceof File)return!0;if(t.toJSON&&'function'==typeof t.toJSON&&1===arguments.length)return r(t.toJSON(),!0);for(var c in t)if(Object.prototype.hasOwnProperty.call(t,c)&&r(t[c]))return!0;return!1;}var o=n(10),i=Object.prototype.toString,s='function'==typeof e.Blob||'[object BlobConstructor]'===i.call(e.Blob),a='function'==typeof e.File||'[object FileConstructor]'===i.call(e.File);t.exports=r;}).call(e,function(){return this;}());},function(t,e){var n={}.toString;t.exports=Array.isArray||function(t){return'[object Array]'==n.call(t);};},function(t,e,n){(function(t){function r(t,e){if(!t)return t;if(s(t)){var n={_placeholder:!0,num:e.length};return e.push(t),n;}if(i(t)){for(var o=new Array(t.length),a=0;a<t.length;a++)o[a]=r(t[a],e);return o;}if('object'==typeof t&&!(t instanceof Date)){var o={};for(var c in t)o[c]=r(t[c],e);return o;}return t;}function o(t,e){if(!t)return t;if(t&&t._placeholder)return e[t.num];if(i(t))for(var n=0;n<t.length;n++)t[n]=o(t[n],e);else if('object'==typeof t)for(var r in t)t[r]=o(t[r],e);return t;}var i=n(10),s=n(12),a=Object.prototype.toString,c='function'==typeof t.Blob||'[object BlobConstructor]'===a.call(t.Blob),p='function'==typeof t.File||'[object FileConstructor]'===a.call(t.File);e.deconstructPacket=function(t){var e=[],n=t.data,o=t;return o.data=r(n,e),o.attachments=e.length,{packet:o,buffers:e};},e.reconstructPacket=function(t,e){return t.data=o(t.data,e),t.attachments=void 0,t;},e.removeBlobs=function(t,e){function n(t,a,u){if(!t)return t;if(c&&t instanceof Blob||p&&t instanceof File){r++;var h=new FileReader;h.onload=function(){u?u[a]=this.result:o=this.result,--r||e(o);},h.readAsArrayBuffer(t);}else if(i(t))for(var f=0;f<t.length;f++)n(t[f],f,t);else if('object'==typeof t&&!s(t))for(var l in t)n(t[l],l,t);}var r=0,o=t;n(o),r||e(o);};}).call(e,function(){return this;}());},function(t,e){(function(e){function n(t){return e.Buffer&&e.Buffer.isBuffer(t)||e.ArrayBuffer&&t instanceof ArrayBuffer;}t.exports=n;}).call(e,function(){return this;}());},function(t,e,n){'use strict';function r(t,e){if(!(this instanceof r))return new r(t,e);t&&'object'===('undefined'==typeof t?'undefined':o(t))&&(e=t,t=void 0),e=e||{},e.path=e.path||'/socket.io',this.nsps={},this.subs=[],this.opts=e,this.reconnection(e.reconnection!==!1),this.reconnectionAttempts(e.reconnectionAttempts||1/0),this.reconnectionDelay(e.reconnectionDelay||1e3),this.reconnectionDelayMax(e.reconnectionDelayMax||5e3),this.randomizationFactor(e.randomizationFactor||.5),this.backoff=new l({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(null==e.timeout?2e4:e.timeout),this.readyState='closed',this.uri=t,this.connecting=[],this.lastPing=null,this.encoding=!1,this.packetBuffer=[];var n=e.parser||c;this.encoder=new n.Encoder,this.decoder=new n.Decoder,this.autoConnect=e.autoConnect!==!1,this.autoConnect&&this.open();}var o='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;},i=n(14),s=n(37),a=n(8),c=n(7),p=n(39),u=n(40),h=n(3)('socket.io-client:manager'),f=n(36),l=n(41),d=Object.prototype.hasOwnProperty;t.exports=r,r.prototype.emitAll=function(){this.emit.apply(this,arguments);for(var t in this.nsps)d.call(this.nsps,t)&&this.nsps[t].emit.apply(this.nsps[t],arguments);},r.prototype.updateSocketIds=function(){for(var t in this.nsps)d.call(this.nsps,t)&&(this.nsps[t].id=this.generateId(t));},r.prototype.generateId=function(t){return('/'===t?'':t+'#')+this.engine.id;},a(r.prototype),r.prototype.reconnection=function(t){return arguments.length?(this._reconnection=!!t,this):this._reconnection;},r.prototype.reconnectionAttempts=function(t){return arguments.length?(this._reconnectionAttempts=t,this):this._reconnectionAttempts;},r.prototype.reconnectionDelay=function(t){return arguments.length?(this._reconnectionDelay=t,this.backoff&&this.backoff.setMin(t),this):this._reconnectionDelay;},r.prototype.randomizationFactor=function(t){return arguments.length?(this._randomizationFactor=t,this.backoff&&this.backoff.setJitter(t),this):this._randomizationFactor;},r.prototype.reconnectionDelayMax=function(t){return arguments.length?(this._reconnectionDelayMax=t,this.backoff&&this.backoff.setMax(t),this):this._reconnectionDelayMax;},r.prototype.timeout=function(t){return arguments.length?(this._timeout=t,this):this._timeout;},r.prototype.maybeReconnectOnOpen=function(){!this.reconnecting&&this._reconnection&&0===this.backoff.attempts&&this.reconnect();},r.prototype.open=r.prototype.connect=function(t,e){if(h('readyState %s',this.readyState),~this.readyState.indexOf('open'))return this;h('opening %s',this.uri),this.engine=i(this.uri,this.opts);var n=this.engine,r=this;this.readyState='opening',this.skipReconnect=!1;var o=p(n,'open',function(){r.onopen(),t&&t();}),s=p(n,'error',function(e){if(h('connect_error'),r.cleanup(),r.readyState='closed',r.emitAll('connect_error',e),t){var n=new Error('Connection error');n.data=e,t(n);}else r.maybeReconnectOnOpen();});if(!1!==this._timeout){var a=this._timeout;h('connect attempt will timeout after %d',a);var c=setTimeout(function(){h('connect attempt timed out after %d',a),o.destroy(),n.close(),n.emit('error','timeout'),r.emitAll('connect_timeout',a);},a);this.subs.push({destroy:function(){clearTimeout(c);}});}return this.subs.push(o),this.subs.push(s),this;},r.prototype.onopen=function(){h('open'),this.cleanup(),this.readyState='open',this.emit('open');var t=this.engine;this.subs.push(p(t,'data',u(this,'ondata'))),this.subs.push(p(t,'ping',u(this,'onping'))),this.subs.push(p(t,'pong',u(this,'onpong'))),this.subs.push(p(t,'error',u(this,'onerror'))),this.subs.push(p(t,'close',u(this,'onclose'))),this.subs.push(p(this.decoder,'decoded',u(this,'ondecoded')));},r.prototype.onping=function(){this.lastPing=new Date,this.emitAll('ping');},r.prototype.onpong=function(){this.emitAll('pong',new Date-this.lastPing);},r.prototype.ondata=function(t){this.decoder.add(t);},r.prototype.ondecoded=function(t){this.emit('packet',t);},r.prototype.onerror=function(t){h('error',t),this.emitAll('error',t);},r.prototype.socket=function(t,e){function n(){~f(o.connecting,r)||o.connecting.push(r);}var r=this.nsps[t];if(!r){r=new s(this,t,e),this.nsps[t]=r;var o=this;r.on('connecting',n),r.on('connect',function(){r.id=o.generateId(t);}),this.autoConnect&&n();}return r;},r.prototype.destroy=function(t){var e=f(this.connecting,t);~e&&this.connecting.splice(e,1),this.connecting.length||this.close();},r.prototype.packet=function(t){h('writing packet %j',t);var e=this;t.query&&0===t.type&&(t.nsp+='?'+t.query),e.encoding?e.packetBuffer.push(t):(e.encoding=!0,this.encoder.encode(t,function(n){for(var r=0;r<n.length;r++)e.engine.write(n[r],t.options);e.encoding=!1,e.processPacketQueue();}));},r.prototype.processPacketQueue=function(){if(this.packetBuffer.length>0&&!this.encoding){var t=this.packetBuffer.shift();this.packet(t);}},r.prototype.cleanup=function(){h('cleanup');for(var t=this.subs.length,e=0;e<t;e++){var n=this.subs.shift();n.destroy();}this.packetBuffer=[],this.encoding=!1,this.lastPing=null,this.decoder.destroy();},r.prototype.close=r.prototype.disconnect=function(){h('disconnect'),this.skipReconnect=!0,this.reconnecting=!1,'opening'===this.readyState&&this.cleanup(),this.backoff.reset(),this.readyState='closed',this.engine&&this.engine.close();},r.prototype.onclose=function(t){h('onclose'),this.cleanup(),this.backoff.reset(),this.readyState='closed',this.emit('close',t),this._reconnection&&!this.skipReconnect&&this.reconnect();},r.prototype.reconnect=function(){if(this.reconnecting||this.skipReconnect)return this;var t=this;if(this.backoff.attempts>=this._reconnectionAttempts)h('reconnect failed'),this.backoff.reset(),this.emitAll('reconnect_failed'),this.reconnecting=!1;else{var e=this.backoff.duration();h('will wait %dms before reconnect attempt',e),this.reconnecting=!0;var n=setTimeout(function(){t.skipReconnect||(h('attempting reconnect'),t.emitAll('reconnect_attempt',t.backoff.attempts),t.emitAll('reconnecting',t.backoff.attempts),t.skipReconnect||t.open(function(e){e?(h('reconnect attempt error'),t.reconnecting=!1,t.reconnect(),t.emitAll('reconnect_error',e.data)):(h('reconnect success'),t.onreconnect());}));},e);this.subs.push({destroy:function(){clearTimeout(n);}});}},r.prototype.onreconnect=function(){var t=this.backoff.attempts;this.reconnecting=!1,this.backoff.reset(),this.updateSocketIds(),this.emitAll('reconnect',t);};},function(t,e,n){t.exports=n(15),t.exports.parser=n(22);},function(t,e,n){(function(e){function r(t,n){if(!(this instanceof r))return new r(t,n);n=n||{},t&&'object'==typeof t&&(n=t,t=null),t?(t=u(t),n.hostname=t.host,n.secure='https'===t.protocol||'wss'===t.protocol,n.port=t.port,t.query&&(n.query=t.query)):n.host&&(n.hostname=u(n.host).host),this.secure=null!=n.secure?n.secure:e.location&&'https:'===location.protocol,n.hostname&&!n.port&&(n.port=this.secure?'443':'80'),this.agent=n.agent||!1,this.hostname=n.hostname||(e.location?location.hostname:'localhost'),this.port=n.port||(e.location&&location.port?location.port:this.secure?443:80),this.query=n.query||{},'string'==typeof this.query&&(this.query=h.decode(this.query)),this.upgrade=!1!==n.upgrade,this.path=(n.path||'/engine.io').replace(/\/$/,'')+'/',this.forceJSONP=!!n.forceJSONP,this.jsonp=!1!==n.jsonp,this.forceBase64=!!n.forceBase64,this.enablesXDR=!!n.enablesXDR,this.timestampParam=n.timestampParam||'t',this.timestampRequests=n.timestampRequests,this.transports=n.transports||['polling','websocket'],this.transportOptions=n.transportOptions||{},this.readyState='',this.writeBuffer=[],this.prevBufferLen=0,this.policyPort=n.policyPort||843,this.rememberUpgrade=n.rememberUpgrade||!1,this.binaryType=null,this.onlyBinaryUpgrades=n.onlyBinaryUpgrades,this.perMessageDeflate=!1!==n.perMessageDeflate&&(n.perMessageDeflate||{}),!0===this.perMessageDeflate&&(this.perMessageDeflate={}),this.perMessageDeflate&&null==this.perMessageDeflate.threshold&&(this.perMessageDeflate.threshold=1024),this.pfx=n.pfx||null,this.key=n.key||null,this.passphrase=n.passphrase||null,this.cert=n.cert||null,this.ca=n.ca||null,this.ciphers=n.ciphers||null,this.rejectUnauthorized=void 0===n.rejectUnauthorized||n.rejectUnauthorized,this.forceNode=!!n.forceNode;var o='object'==typeof e&&e;o.global===o&&(n.extraHeaders&&Object.keys(n.extraHeaders).length>0&&(this.extraHeaders=n.extraHeaders),n.localAddress&&(this.localAddress=n.localAddress)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingIntervalTimer=null,this.pingTimeoutTimer=null,this.open();}function o(t){var e={};for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e;}var i=n(16),s=n(8),a=n(3)('engine.io-client:socket'),c=n(36),p=n(22),u=n(2),h=n(30);t.exports=r,r.priorWebsocketSuccess=!1,s(r.prototype),r.protocol=p.protocol,r.Socket=r,r.Transport=n(21),r.transports=n(16),r.parser=n(22),r.prototype.createTransport=function(t){a('creating transport "%s"',t);var e=o(this.query);e.EIO=p.protocol,e.transport=t;var n=this.transportOptions[t]||{};this.id&&(e.sid=this.id);var r=new i[t]({query:e,socket:this,agent:n.agent||this.agent,hostname:n.hostname||this.hostname,port:n.port||this.port,secure:n.secure||this.secure,path:n.path||this.path,forceJSONP:n.forceJSONP||this.forceJSONP,jsonp:n.jsonp||this.jsonp,forceBase64:n.forceBase64||this.forceBase64,enablesXDR:n.enablesXDR||this.enablesXDR,timestampRequests:n.timestampRequests||this.timestampRequests,timestampParam:n.timestampParam||this.timestampParam,policyPort:n.policyPort||this.policyPort,pfx:n.pfx||this.pfx,key:n.key||this.key,passphrase:n.passphrase||this.passphrase,cert:n.cert||this.cert,ca:n.ca||this.ca,ciphers:n.ciphers||this.ciphers,rejectUnauthorized:n.rejectUnauthorized||this.rejectUnauthorized,perMessageDeflate:n.perMessageDeflate||this.perMessageDeflate,extraHeaders:n.extraHeaders||this.extraHeaders,forceNode:n.forceNode||this.forceNode,localAddress:n.localAddress||this.localAddress,requestTimeout:n.requestTimeout||this.requestTimeout,protocols:n.protocols||void 0});return r;},r.prototype.open=function(){var t;if(this.rememberUpgrade&&r.priorWebsocketSuccess&&this.transports.indexOf('websocket')!==-1)t='websocket';else{if(0===this.transports.length){var e=this;return void setTimeout(function(){e.emit('error','No transports available');},0);}t=this.transports[0];}this.readyState='opening';try{t=this.createTransport(t);}catch(n){return this.transports.shift(),void this.open();}t.open(),this.setTransport(t);},r.prototype.setTransport=function(t){a('setting transport %s',t.name);var e=this;this.transport&&(a('clearing existing transport %s',this.transport.name),this.transport.removeAllListeners()),this.transport=t,t.on('drain',function(){e.onDrain();}).on('packet',function(t){e.onPacket(t);}).on('error',function(t){e.onError(t);}).on('close',function(){e.onClose('transport close');});},r.prototype.probe=function(t){function e(){if(f.onlyBinaryUpgrades){var e=!this.supportsBinary&&f.transport.supportsBinary;h=h||e;}h||(a('probe transport "%s" opened',t),u.send([{type:'ping',data:'probe'}]),u.once('packet',function(e){if(!h)if('pong'===e.type&&'probe'===e.data){if(a('probe transport "%s" pong',t),f.upgrading=!0,f.emit('upgrading',u),!u)return;r.priorWebsocketSuccess='websocket'===u.name,a('pausing current transport "%s"',f.transport.name),f.transport.pause(function(){h||'closed'!==f.readyState&&(a('changing transport and sending upgrade packet'),p(),f.setTransport(u),u.send([{type:'upgrade'}]),f.emit('upgrade',u),u=null,f.upgrading=!1,f.flush());});}else{a('probe transport "%s" failed',t);var n=new Error('probe error');n.transport=u.name,f.emit('upgradeError',n);}}));}function n(){h||(h=!0,p(),u.close(),u=null);}function o(e){var r=new Error('probe error: '+e);r.transport=u.name,n(),a('probe transport "%s" failed because of error: %s',t,e),f.emit('upgradeError',r);}function i(){o('transport closed');}function s(){o('socket closed');}function c(t){u&&t.name!==u.name&&(a('"%s" works - aborting "%s"',t.name,u.name),n());}function p(){u.removeListener('open',e),u.removeListener('error',o),u.removeListener('close',i),f.removeListener('close',s),f.removeListener('upgrading',c);}a('probing transport "%s"',t);var u=this.createTransport(t,{probe:1}),h=!1,f=this;r.priorWebsocketSuccess=!1,u.once('open',e),u.once('error',o),u.once('close',i),this.once('close',s),this.once('upgrading',c),u.open();},r.prototype.onOpen=function(){if(a('socket open'),this.readyState='open',r.priorWebsocketSuccess='websocket'===this.transport.name,this.emit('open'),this.flush(),'open'===this.readyState&&this.upgrade&&this.transport.pause){a('starting upgrade probes');for(var t=0,e=this.upgrades.length;t<e;t++)this.probe(this.upgrades[t]);}},r.prototype.onPacket=function(t){if('opening'===this.readyState||'open'===this.readyState||'closing'===this.readyState)switch(a('socket receive: type "%s", data "%s"',t.type,t.data),this.emit('packet',t),this.emit('heartbeat'),t.type){case'open':this.onHandshake(JSON.parse(t.data));break;case'pong':this.setPing(),this.emit('pong');break;case'error':var e=new Error('server error');e.code=t.data,this.onError(e);break;case'message':this.emit('data',t.data),this.emit('message',t.data);}else a('packet received with socket readyState "%s"',this.readyState);},r.prototype.onHandshake=function(t){this.emit('handshake',t),this.id=t.sid,this.transport.query.sid=t.sid,this.upgrades=this.filterUpgrades(t.upgrades),this.pingInterval=t.pingInterval,this.pingTimeout=t.pingTimeout,this.onOpen(),'closed'!==this.readyState&&(this.setPing(),this.removeListener('heartbeat',this.onHeartbeat),this.on('heartbeat',this.onHeartbeat));},r.prototype.onHeartbeat=function(t){clearTimeout(this.pingTimeoutTimer);var e=this;e.pingTimeoutTimer=setTimeout(function(){'closed'!==e.readyState&&e.onClose('ping timeout');},t||e.pingInterval+e.pingTimeout);},r.prototype.setPing=function(){var t=this;clearTimeout(t.pingIntervalTimer),t.pingIntervalTimer=setTimeout(function(){a('writing ping packet - expecting pong within %sms',t.pingTimeout),t.ping(),t.onHeartbeat(t.pingTimeout);},t.pingInterval);},r.prototype.ping=function(){var t=this;this.sendPacket('ping',function(){t.emit('ping');});},r.prototype.onDrain=function(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,0===this.writeBuffer.length?this.emit('drain'):this.flush();},r.prototype.flush=function(){'closed'!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length&&(a('flushing %d packets in socket',this.writeBuffer.length),this.transport.send(this.writeBuffer),this.prevBufferLen=this.writeBuffer.length,this.emit('flush'));},r.prototype.write=r.prototype.send=function(t,e,n){return this.sendPacket('message',t,e,n),this;},r.prototype.sendPacket=function(t,e,n,r){if('function'==typeof e&&(r=e,e=void 0),'function'==typeof n&&(r=n,n=null),'closing'!==this.readyState&&'closed'!==this.readyState){n=n||{},n.compress=!1!==n.compress;var o={type:t,data:e,options:n};this.emit('packetCreate',o),this.writeBuffer.push(o),r&&this.once('flush',r),this.flush();}},r.prototype.close=function(){function t(){r.onClose('forced close'),a('socket closing - telling transport to close'),r.transport.close();}function e(){r.removeListener('upgrade',e),r.removeListener('upgradeError',e),t();}function n(){r.once('upgrade',e),r.once('upgradeError',e);}if('opening'===this.readyState||'open'===this.readyState){this.readyState='closing';var r=this;this.writeBuffer.length?this.once('drain',function(){this.upgrading?n():t();}):this.upgrading?n():t();}return this;},r.prototype.onError=function(t){a('socket error %j',t),r.priorWebsocketSuccess=!1,this.emit('error',t),this.onClose('transport error',t);},r.prototype.onClose=function(t,e){if('opening'===this.readyState||'open'===this.readyState||'closing'===this.readyState){a('socket close with reason: "%s"',t);var n=this;clearTimeout(this.pingIntervalTimer),clearTimeout(this.pingTimeoutTimer),this.transport.removeAllListeners('close'),this.transport.close(),this.transport.removeAllListeners(),this.readyState='closed',this.id=null,this.emit('close',t,e),n.writeBuffer=[],n.prevBufferLen=0;}},r.prototype.filterUpgrades=function(t){for(var e=[],n=0,r=t.length;n<r;n++)~c(this.transports,t[n])&&e.push(t[n]);return e;};}).call(e,function(){return this;}());},function(t,e,n){(function(t){function r(e){var n,r=!1,a=!1,c=!1!==e.jsonp;if(t.location){var p='https:'===location.protocol,u=location.port;u||(u=p?443:80),r=e.hostname!==location.hostname||u!==e.port,a=e.secure!==p;}if(e.xdomain=r,e.xscheme=a,n=new o(e),'open'in n&&!e.forceJSONP)return new i(e);if(!c)throw new Error('JSONP disabled');return new s(e);}var o=n(17),i=n(19),s=n(33),a=n(34);e.polling=r,e.websocket=a;}).call(e,function(){return this;}());},function(t,e,n){(function(e){var r=n(18);t.exports=function(t){var n=t.xdomain,o=t.xscheme,i=t.enablesXDR;try{if('undefined'!=typeof XMLHttpRequest&&(!n||r))return new XMLHttpRequest;}catch(s){}try{if('undefined'!=typeof XDomainRequest&&!o&&i)return new XDomainRequest;}catch(s){}if(!n)try{return new(e[['Active'].concat('Object').join('X')])('Microsoft.XMLHTTP');
}catch(s){}};}).call(e,function(){return this;}());},function(t,e){try{t.exports='undefined'!=typeof XMLHttpRequest&&'withCredentials'in new XMLHttpRequest;}catch(n){t.exports=!1;}},function(t,e,n){(function(e){function r(){}function o(t){if(c.call(this,t),this.requestTimeout=t.requestTimeout,this.extraHeaders=t.extraHeaders,e.location){var n='https:'===location.protocol,r=location.port;r||(r=n?443:80),this.xd=t.hostname!==e.location.hostname||r!==t.port,this.xs=t.secure!==n;}}function i(t){this.method=t.method||'GET',this.uri=t.uri,this.xd=!!t.xd,this.xs=!!t.xs,this.async=!1!==t.async,this.data=void 0!==t.data?t.data:null,this.agent=t.agent,this.isBinary=t.isBinary,this.supportsBinary=t.supportsBinary,this.enablesXDR=t.enablesXDR,this.requestTimeout=t.requestTimeout,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.extraHeaders=t.extraHeaders,this.create();}function s(){for(var t in i.requests)i.requests.hasOwnProperty(t)&&i.requests[t].abort();}var a=n(17),c=n(20),p=n(8),u=n(31),h=n(3)('engine.io-client:polling-xhr');t.exports=o,t.exports.Request=i,u(o,c),o.prototype.supportsBinary=!0,o.prototype.request=function(t){return t=t||{},t.uri=this.uri(),t.xd=this.xd,t.xs=this.xs,t.agent=this.agent||!1,t.supportsBinary=this.supportsBinary,t.enablesXDR=this.enablesXDR,t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized,t.requestTimeout=this.requestTimeout,t.extraHeaders=this.extraHeaders,new i(t);},o.prototype.doWrite=function(t,e){var n='string'!=typeof t&&void 0!==t,r=this.request({method:'POST',data:t,isBinary:n}),o=this;r.on('success',e),r.on('error',function(t){o.onError('xhr post error',t);}),this.sendXhr=r;},o.prototype.doPoll=function(){h('xhr poll');var t=this.request(),e=this;t.on('data',function(t){e.onData(t);}),t.on('error',function(t){e.onError('xhr poll error',t);}),this.pollXhr=t;},p(i.prototype),i.prototype.create=function(){var t={agent:this.agent,xdomain:this.xd,xscheme:this.xs,enablesXDR:this.enablesXDR};t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized;var n=this.xhr=new a(t),r=this;try{h('xhr open %s: %s',this.method,this.uri),n.open(this.method,this.uri,this.async);try{if(this.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(var o in this.extraHeaders)this.extraHeaders.hasOwnProperty(o)&&n.setRequestHeader(o,this.extraHeaders[o]);}}catch(s){}if('POST'===this.method)try{this.isBinary?n.setRequestHeader('Content-type','application/octet-stream'):n.setRequestHeader('Content-type','text/plain;charset=UTF-8');}catch(s){}try{n.setRequestHeader('Accept','*/*');}catch(s){}'withCredentials'in n&&(n.withCredentials=!0),this.requestTimeout&&(n.timeout=this.requestTimeout),this.hasXDR()?(n.onload=function(){r.onLoad();},n.onerror=function(){r.onError(n.responseText);}):n.onreadystatechange=function(){if(2===n.readyState){var t;try{t=n.getResponseHeader('Content-Type');}catch(e){}'application/octet-stream'===t&&(n.responseType='arraybuffer');}4===n.readyState&&(200===n.status||1223===n.status?r.onLoad():setTimeout(function(){r.onError(n.status);},0));},h('xhr data %s',this.data),n.send(this.data);}catch(s){return void setTimeout(function(){r.onError(s);},0);}e.document&&(this.index=i.requestsCount++,i.requests[this.index]=this);},i.prototype.onSuccess=function(){this.emit('success'),this.cleanup();},i.prototype.onData=function(t){this.emit('data',t),this.onSuccess();},i.prototype.onError=function(t){this.emit('error',t),this.cleanup(!0);},i.prototype.cleanup=function(t){if('undefined'!=typeof this.xhr&&null!==this.xhr){if(this.hasXDR()?this.xhr.onload=this.xhr.onerror=r:this.xhr.onreadystatechange=r,t)try{this.xhr.abort();}catch(n){}e.document&&delete i.requests[this.index],this.xhr=null;}},i.prototype.onLoad=function(){var t;try{var e;try{e=this.xhr.getResponseHeader('Content-Type');}catch(n){}t='application/octet-stream'===e?this.xhr.response||this.xhr.responseText:this.xhr.responseText;}catch(n){this.onError(n);}null!=t&&this.onData(t);},i.prototype.hasXDR=function(){return'undefined'!=typeof e.XDomainRequest&&!this.xs&&this.enablesXDR;},i.prototype.abort=function(){this.cleanup();},i.requestsCount=0,i.requests={},e.document&&(e.attachEvent?e.attachEvent('onunload',s):e.addEventListener&&e.addEventListener('beforeunload',s,!1));}).call(e,function(){return this;}());},function(t,e,n){function r(t){var e=t&&t.forceBase64;u&&!e||(this.supportsBinary=!1),o.call(this,t);}var o=n(21),i=n(30),s=n(22),a=n(31),c=n(32),p=n(3)('engine.io-client:polling');t.exports=r;var u=function(){var t=n(17),e=new t({xdomain:!1});return null!=e.responseType;}();a(r,o),r.prototype.name='polling',r.prototype.doOpen=function(){this.poll();},r.prototype.pause=function(t){function e(){p('paused'),n.readyState='paused',t();}var n=this;if(this.readyState='pausing',this.polling||!this.writable){var r=0;this.polling&&(p('we are currently polling - waiting to pause'),r++,this.once('pollComplete',function(){p('pre-pause polling complete'),--r||e();})),this.writable||(p('we are currently writing - waiting to pause'),r++,this.once('drain',function(){p('pre-pause writing complete'),--r||e();}));}else e();},r.prototype.poll=function(){p('polling'),this.polling=!0,this.doPoll(),this.emit('poll');},r.prototype.onData=function(t){var e=this;p('polling got data %s',t);var n=function(t,n,r){return'opening'===e.readyState&&e.onOpen(),'close'===t.type?(e.onClose(),!1):void e.onPacket(t);};s.decodePayload(t,this.socket.binaryType,n),'closed'!==this.readyState&&(this.polling=!1,this.emit('pollComplete'),'open'===this.readyState?this.poll():p('ignoring poll - transport state "%s"',this.readyState));},r.prototype.doClose=function(){function t(){p('writing close packet'),e.write([{type:'close'}]);}var e=this;'open'===this.readyState?(p('transport open - closing'),t()):(p('transport not open - deferring close'),this.once('open',t));},r.prototype.write=function(t){var e=this;this.writable=!1;var n=function(){e.writable=!0,e.emit('drain');};s.encodePayload(t,this.supportsBinary,function(t){e.doWrite(t,n);});},r.prototype.uri=function(){var t=this.query||{},e=this.secure?'https':'http',n='';!1!==this.timestampRequests&&(t[this.timestampParam]=c()),this.supportsBinary||t.sid||(t.b64=1),t=i.encode(t),this.port&&('https'===e&&443!==Number(this.port)||'http'===e&&80!==Number(this.port))&&(n=':'+this.port),t.length&&(t='?'+t);var r=this.hostname.indexOf(':')!==-1;return e+'://'+(r?'['+this.hostname+']':this.hostname)+n+this.path+t;};},function(t,e,n){function r(t){this.path=t.path,this.hostname=t.hostname,this.port=t.port,this.secure=t.secure,this.query=t.query,this.timestampParam=t.timestampParam,this.timestampRequests=t.timestampRequests,this.readyState='',this.agent=t.agent||!1,this.socket=t.socket,this.enablesXDR=t.enablesXDR,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.forceNode=t.forceNode,this.extraHeaders=t.extraHeaders,this.localAddress=t.localAddress;}var o=n(22),i=n(8);t.exports=r,i(r.prototype),r.prototype.onError=function(t,e){var n=new Error(t);return n.type='TransportError',n.description=e,this.emit('error',n),this;},r.prototype.open=function(){return'closed'!==this.readyState&&''!==this.readyState||(this.readyState='opening',this.doOpen()),this;},r.prototype.close=function(){return'opening'!==this.readyState&&'open'!==this.readyState||(this.doClose(),this.onClose()),this;},r.prototype.send=function(t){if('open'!==this.readyState)throw new Error('Transport not open');this.write(t);},r.prototype.onOpen=function(){this.readyState='open',this.writable=!0,this.emit('open');},r.prototype.onData=function(t){var e=o.decodePacket(t,this.socket.binaryType);this.onPacket(e);},r.prototype.onPacket=function(t){this.emit('packet',t);},r.prototype.onClose=function(){this.readyState='closed',this.emit('close');};},function(t,e,n){(function(t){function r(t,n){var r='b'+e.packets[t.type]+t.data.data;return n(r);}function o(t,n,r){if(!n)return e.encodeBase64Packet(t,r);var o=t.data,i=new Uint8Array(o),s=new Uint8Array(1+o.byteLength);s[0]=v[t.type];for(var a=0;a<i.length;a++)s[a+1]=i[a];return r(s.buffer);}function i(t,n,r){if(!n)return e.encodeBase64Packet(t,r);var o=new FileReader;return o.onload=function(){t.data=o.result,e.encodePacket(t,n,!0,r);},o.readAsArrayBuffer(t.data);}function s(t,n,r){if(!n)return e.encodeBase64Packet(t,r);if(g)return i(t,n,r);var o=new Uint8Array(1);o[0]=v[t.type];var s=new k([o.buffer,t.data]);return r(s);}function a(t){try{t=d.decode(t,{strict:!1});}catch(e){return!1;}return t;}function c(t,e,n){for(var r=new Array(t.length),o=l(t.length,n),i=function(t,n,o){e(n,function(e,n){r[t]=n,o(e,r);});},s=0;s<t.length;s++)i(s,t[s],o);}var p,u=n(23),h=n(9),f=n(24),l=n(25),d=n(26);t&&t.ArrayBuffer&&(p=n(28));var y='undefined'!=typeof navigator&&/Android/i.test(navigator.userAgent),m='undefined'!=typeof navigator&&/PhantomJS/i.test(navigator.userAgent),g=y||m;e.protocol=3;var v=e.packets={open:0,close:1,ping:2,pong:3,message:4,upgrade:5,noop:6},b=u(v),w={type:'error',data:'parser error'},k=n(29);e.encodePacket=function(e,n,i,a){'function'==typeof n&&(a=n,n=!1),'function'==typeof i&&(a=i,i=null);var c=void 0===e.data?void 0:e.data.buffer||e.data;if(t.ArrayBuffer&&c instanceof ArrayBuffer)return o(e,n,a);if(k&&c instanceof t.Blob)return s(e,n,a);if(c&&c.base64)return r(e,a);var p=v[e.type];return void 0!==e.data&&(p+=i?d.encode(String(e.data),{strict:!1}):String(e.data)),a(''+p);},e.encodeBase64Packet=function(n,r){var o='b'+e.packets[n.type];if(k&&n.data instanceof t.Blob){var i=new FileReader;return i.onload=function(){var t=i.result.split(',')[1];r(o+t);},i.readAsDataURL(n.data);}var s;try{s=String.fromCharCode.apply(null,new Uint8Array(n.data));}catch(a){for(var c=new Uint8Array(n.data),p=new Array(c.length),u=0;u<c.length;u++)p[u]=c[u];s=String.fromCharCode.apply(null,p);}return o+=t.btoa(s),r(o);},e.decodePacket=function(t,n,r){if(void 0===t)return w;if('string'==typeof t){if('b'===t.charAt(0))return e.decodeBase64Packet(t.substr(1),n);if(r&&(t=a(t),t===!1))return w;var o=t.charAt(0);return Number(o)==o&&b[o]?t.length>1?{type:b[o],data:t.substring(1)}:{type:b[o]}:w;}var i=new Uint8Array(t),o=i[0],s=f(t,1);return k&&'blob'===n&&(s=new k([s])),{type:b[o],data:s};},e.decodeBase64Packet=function(t,e){var n=b[t.charAt(0)];if(!p)return{type:n,data:{base64:!0,data:t.substr(1)}};var r=p.decode(t.substr(1));return'blob'===e&&k&&(r=new k([r])),{type:n,data:r};},e.encodePayload=function(t,n,r){function o(t){return t.length+':'+t;}function i(t,r){e.encodePacket(t,!!s&&n,!1,function(t){r(null,o(t));});}'function'==typeof n&&(r=n,n=null);var s=h(t);return n&&s?k&&!g?e.encodePayloadAsBlob(t,r):e.encodePayloadAsArrayBuffer(t,r):t.length?void c(t,i,function(t,e){return r(e.join(''));}):r('0:');},e.decodePayload=function(t,n,r){if('string'!=typeof t)return e.decodePayloadAsBinary(t,n,r);'function'==typeof n&&(r=n,n=null);var o;if(''===t)return r(w,0,1);for(var i,s,a='',c=0,p=t.length;c<p;c++){var u=t.charAt(c);if(':'===u){if(''===a||a!=(i=Number(a)))return r(w,0,1);if(s=t.substr(c+1,i),a!=s.length)return r(w,0,1);if(s.length){if(o=e.decodePacket(s,n,!1),w.type===o.type&&w.data===o.data)return r(w,0,1);var h=r(o,c+i,p);if(!1===h)return;}c+=i,a='';}else a+=u;}return''!==a?r(w,0,1):void 0;},e.encodePayloadAsArrayBuffer=function(t,n){function r(t,n){e.encodePacket(t,!0,!0,function(t){return n(null,t);});}return t.length?void c(t,r,function(t,e){var r=e.reduce(function(t,e){var n;return n='string'==typeof e?e.length:e.byteLength,t+n.toString().length+n+2;},0),o=new Uint8Array(r),i=0;return e.forEach(function(t){var e='string'==typeof t,n=t;if(e){for(var r=new Uint8Array(t.length),s=0;s<t.length;s++)r[s]=t.charCodeAt(s);n=r.buffer;}e?o[i++]=0:o[i++]=1;for(var a=n.byteLength.toString(),s=0;s<a.length;s++)o[i++]=parseInt(a[s]);o[i++]=255;for(var r=new Uint8Array(n),s=0;s<r.length;s++)o[i++]=r[s];}),n(o.buffer);}):n(new ArrayBuffer(0));},e.encodePayloadAsBlob=function(t,n){function r(t,n){e.encodePacket(t,!0,!0,function(t){var e=new Uint8Array(1);if(e[0]=1,'string'==typeof t){for(var r=new Uint8Array(t.length),o=0;o<t.length;o++)r[o]=t.charCodeAt(o);t=r.buffer,e[0]=0;}for(var i=t instanceof ArrayBuffer?t.byteLength:t.size,s=i.toString(),a=new Uint8Array(s.length+1),o=0;o<s.length;o++)a[o]=parseInt(s[o]);if(a[s.length]=255,k){var c=new k([e.buffer,a.buffer,t]);n(null,c);}});}c(t,r,function(t,e){return n(new k(e));});},e.decodePayloadAsBinary=function(t,n,r){'function'==typeof n&&(r=n,n=null);for(var o=t,i=[];o.byteLength>0;){for(var s=new Uint8Array(o),a=0===s[0],c='',p=1;255!==s[p];p++){if(c.length>310)return r(w,0,1);c+=s[p];}o=f(o,2+c.length),c=parseInt(c);var u=f(o,0,c);if(a)try{u=String.fromCharCode.apply(null,new Uint8Array(u));}catch(h){var l=new Uint8Array(u);u='';for(var p=0;p<l.length;p++)u+=String.fromCharCode(l[p]);}i.push(u),o=f(o,c);}var d=i.length;i.forEach(function(t,o){r(e.decodePacket(t,n,!0),o,d);});};}).call(e,function(){return this;}());},function(t,e){t.exports=Object.keys||function(t){var e=[],n=Object.prototype.hasOwnProperty;for(var r in t)n.call(t,r)&&e.push(r);return e;};},function(t,e){t.exports=function(t,e,n){var r=t.byteLength;if(e=e||0,n=n||r,t.slice)return t.slice(e,n);if(e<0&&(e+=r),n<0&&(n+=r),n>r&&(n=r),e>=r||e>=n||0===r)return new ArrayBuffer(0);for(var o=new Uint8Array(t),i=new Uint8Array(n-e),s=e,a=0;s<n;s++,a++)i[a]=o[s];return i.buffer;};},function(t,e){function n(t,e,n){function o(t,r){if(o.count<=0)throw new Error('after called too many times');--o.count,t?(i=!0,e(t),e=n):0!==o.count||i||e(null,r);}var i=!1;return n=n||r,o.count=t,0===t?e():o;}function r(){}t.exports=n;},function(t,e,n){var r;(function(t,o){!function(i){function s(t){for(var e,n,r=[],o=0,i=t.length;o<i;)e=t.charCodeAt(o++),e>=55296&&e<=56319&&o<i?(n=t.charCodeAt(o++),56320==(64512&n)?r.push(((1023&e)<<10)+(1023&n)+65536):(r.push(e),o--)):r.push(e);return r;}function a(t){for(var e,n=t.length,r=-1,o='';++r<n;)e=t[r],e>65535&&(e-=65536,o+=w(e>>>10&1023|55296),e=56320|1023&e),o+=w(e);return o;}function c(t,e){if(t>=55296&&t<=57343){if(e)throw Error('Lone surrogate U+'+t.toString(16).toUpperCase()+' is not a scalar value');return!1;}return!0;}function p(t,e){return w(t>>e&63|128);}function u(t,e){if(0==(4294967168&t))return w(t);var n='';return 0==(4294965248&t)?n=w(t>>6&31|192):0==(4294901760&t)?(c(t,e)||(t=65533),n=w(t>>12&15|224),n+=p(t,6)):0==(4292870144&t)&&(n=w(t>>18&7|240),n+=p(t,12),n+=p(t,6)),n+=w(63&t|128);}function h(t,e){e=e||{};for(var n,r=!1!==e.strict,o=s(t),i=o.length,a=-1,c='';++a<i;)n=o[a],c+=u(n,r);return c;}function f(){if(b>=v)throw Error('Invalid byte index');var t=255&g[b];if(b++,128==(192&t))return 63&t;throw Error('Invalid continuation byte');}function l(t){var e,n,r,o,i;if(b>v)throw Error('Invalid byte index');if(b==v)return!1;if(e=255&g[b],b++,0==(128&e))return e;if(192==(224&e)){if(n=f(),i=(31&e)<<6|n,i>=128)return i;throw Error('Invalid continuation byte');}if(224==(240&e)){if(n=f(),r=f(),i=(15&e)<<12|n<<6|r,i>=2048)return c(i,t)?i:65533;throw Error('Invalid continuation byte');}if(240==(248&e)&&(n=f(),r=f(),o=f(),i=(7&e)<<18|n<<12|r<<6|o,i>=65536&&i<=1114111))return i;throw Error('Invalid UTF-8 detected');}function d(t,e){e=e||{};var n=!1!==e.strict;g=s(t),v=g.length,b=0;for(var r,o=[];(r=l(n))!==!1;)o.push(r);return a(o);}var y='object'==typeof e&&e,m=('object'==typeof t&&t&&t.exports==y&&t,'object'==typeof o&&o);m.global!==m&&m.window!==m||(i=m);var g,v,b,w=String.fromCharCode,k={version:'2.1.2',encode:h,decode:d};r=function(){return k;}.call(e,n,e,t),!(void 0!==r&&(t.exports=r));}(this);}).call(e,n(27)(t),function(){return this;}());},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children=[],t.webpackPolyfill=1),t;};},function(t,e){!function(){'use strict';for(var t='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',n=new Uint8Array(256),r=0;r<t.length;r++)n[t.charCodeAt(r)]=r;e.encode=function(e){var n,r=new Uint8Array(e),o=r.length,i='';for(n=0;n<o;n+=3)i+=t[r[n]>>2],i+=t[(3&r[n])<<4|r[n+1]>>4],i+=t[(15&r[n+1])<<2|r[n+2]>>6],i+=t[63&r[n+2]];return o%3===2?i=i.substring(0,i.length-1)+'=':o%3===1&&(i=i.substring(0,i.length-2)+'=='),i;},e.decode=function(t){var e,r,o,i,s,a=.75*t.length,c=t.length,p=0;'='===t[t.length-1]&&(a--,'='===t[t.length-2]&&a--);var u=new ArrayBuffer(a),h=new Uint8Array(u);for(e=0;e<c;e+=4)r=n[t.charCodeAt(e)],o=n[t.charCodeAt(e+1)],i=n[t.charCodeAt(e+2)],s=n[t.charCodeAt(e+3)],h[p++]=r<<2|o>>4,h[p++]=(15&o)<<4|i>>2,h[p++]=(3&i)<<6|63&s;return u;};}();},function(t,e){(function(e){function n(t){for(var e=0;e<t.length;e++){var n=t[e];if(n.buffer instanceof ArrayBuffer){var r=n.buffer;if(n.byteLength!==r.byteLength){var o=new Uint8Array(n.byteLength);o.set(new Uint8Array(r,n.byteOffset,n.byteLength)),r=o.buffer;}t[e]=r;}}}function r(t,e){e=e||{};var r=new i;n(t);for(var o=0;o<t.length;o++)r.append(t[o]);return e.type?r.getBlob(e.type):r.getBlob();}function o(t,e){return n(t),new Blob(t,e||{});}var i=e.BlobBuilder||e.WebKitBlobBuilder||e.MSBlobBuilder||e.MozBlobBuilder,s=function(){try{var t=new Blob(['hi']);return 2===t.size;}catch(e){return!1;}}(),a=s&&function(){try{var t=new Blob([new Uint8Array([1,2])]);return 2===t.size;}catch(e){return!1;}}(),c=i&&i.prototype.append&&i.prototype.getBlob;t.exports=function(){return s?a?e.Blob:o:c?r:void 0;}();}).call(e,function(){return this;}());},function(t,e){e.encode=function(t){var e='';for(var n in t)t.hasOwnProperty(n)&&(e.length&&(e+='&'),e+=encodeURIComponent(n)+'='+encodeURIComponent(t[n]));return e;},e.decode=function(t){for(var e={},n=t.split('&'),r=0,o=n.length;r<o;r++){var i=n[r].split('=');e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]);}return e;};},function(t,e){t.exports=function(t,e){var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t;};},function(t,e){'use strict';function n(t){var e='';do e=s[t%a]+e,t=Math.floor(t/a);while(t>0);return e;}function r(t){var e=0;for(u=0;u<t.length;u++)e=e*a+c[t.charAt(u)];return e;}function o(){var t=n(+new Date);return t!==i?(p=0,i=t):t+'.'+n(p++);}for(var i,s='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''),a=64,c={},p=0,u=0;u<a;u++)c[s[u]]=u;o.encode=n,o.decode=r,t.exports=o;},function(t,e,n){(function(e){function r(){}function o(t){i.call(this,t),this.query=this.query||{},a||(e.___eio||(e.___eio=[]),a=e.___eio),this.index=a.length;var n=this;a.push(function(t){n.onData(t);}),this.query.j=this.index,e.document&&e.addEventListener&&e.addEventListener('beforeunload',function(){n.script&&(n.script.onerror=r);},!1);}var i=n(20),s=n(31);t.exports=o;var a,c=/\n/g,p=/\\n/g;s(o,i),o.prototype.supportsBinary=!1,o.prototype.doClose=function(){this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),this.form&&(this.form.parentNode.removeChild(this.form),this.form=null,this.iframe=null),i.prototype.doClose.call(this);},o.prototype.doPoll=function(){var t=this,e=document.createElement('script');this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),e.async=!0,e.src=this.uri(),e.onerror=function(e){t.onError('jsonp poll error',e);};var n=document.getElementsByTagName('script')[0];n?n.parentNode.insertBefore(e,n):(document.head||document.body).appendChild(e),this.script=e;var r='undefined'!=typeof navigator&&/gecko/i.test(navigator.userAgent);r&&setTimeout(function(){var t=document.createElement('iframe');document.body.appendChild(t),document.body.removeChild(t);},100);},o.prototype.doWrite=function(t,e){function n(){r(),e();}function r(){if(o.iframe)try{o.form.removeChild(o.iframe);}catch(t){o.onError('jsonp polling iframe removal error',t);}try{var e='<iframe src="javascript:0" name="'+o.iframeId+'">';i=document.createElement(e);}catch(t){i=document.createElement('iframe'),i.name=o.iframeId,i.src='javascript:0';}i.id=o.iframeId,o.form.appendChild(i),o.iframe=i;}var o=this;if(!this.form){var i,s=document.createElement('form'),a=document.createElement('textarea'),u=this.iframeId='eio_iframe_'+this.index;s.className='socketio',s.style.position='absolute',s.style.top='-1000px',s.style.left='-1000px',s.target=u,s.method='POST',s.setAttribute('accept-charset','utf-8'),a.name='d',s.appendChild(a),document.body.appendChild(s),this.form=s,this.area=a;}this.form.action=this.uri(),r(),t=t.replace(p,'\\\n'),this.area.value=t.replace(c,'\\n');try{this.form.submit();}catch(h){}this.iframe.attachEvent?this.iframe.onreadystatechange=function(){'complete'===o.iframe.readyState&&n();}:this.iframe.onload=n;};}).call(e,function(){return this;}());},function(t,e,n){(function(e){function r(t){var e=t&&t.forceBase64;e&&(this.supportsBinary=!1),this.perMessageDeflate=t.perMessageDeflate,this.usingBrowserWebSocket=h&&!t.forceNode,this.protocols=t.protocols,this.usingBrowserWebSocket||(l=o),i.call(this,t);}var o,i=n(21),s=n(22),a=n(30),c=n(31),p=n(32),u=n(3)('engine.io-client:websocket'),h=e.WebSocket||e.MozWebSocket;if('undefined'==typeof window)try{o=n(35);}catch(f){}var l=h;l||'undefined'!=typeof window||(l=o),t.exports=r,c(r,i),r.prototype.name='websocket',r.prototype.supportsBinary=!0,r.prototype.doOpen=function(){if(this.check()){var t=this.uri(),e=this.protocols,n={agent:this.agent,perMessageDeflate:this.perMessageDeflate};n.pfx=this.pfx,n.key=this.key,n.passphrase=this.passphrase,n.cert=this.cert,n.ca=this.ca,n.ciphers=this.ciphers,n.rejectUnauthorized=this.rejectUnauthorized,this.extraHeaders&&(n.headers=this.extraHeaders),this.localAddress&&(n.localAddress=this.localAddress);try{this.ws=this.usingBrowserWebSocket?e?new l(t,e):new l(t):new l(t,e,n);}catch(r){return this.emit('error',r);}void 0===this.ws.binaryType&&(this.supportsBinary=!1),this.ws.supports&&this.ws.supports.binary?(this.supportsBinary=!0,this.ws.binaryType='nodebuffer'):this.ws.binaryType='arraybuffer',this.addEventListeners();}},r.prototype.addEventListeners=function(){var t=this;this.ws.onopen=function(){t.onOpen();},this.ws.onclose=function(){t.onClose();},this.ws.onmessage=function(e){t.onData(e.data);},this.ws.onerror=function(e){t.onError('websocket error',e);};},r.prototype.write=function(t){function n(){r.emit('flush'),setTimeout(function(){r.writable=!0,r.emit('drain');},0);}var r=this;this.writable=!1;for(var o=t.length,i=0,a=o;i<a;i++)!function(t){s.encodePacket(t,r.supportsBinary,function(i){if(!r.usingBrowserWebSocket){var s={};if(t.options&&(s.compress=t.options.compress),r.perMessageDeflate){var a='string'==typeof i?e.Buffer.byteLength(i):i.length;a<r.perMessageDeflate.threshold&&(s.compress=!1);}}try{r.usingBrowserWebSocket?r.ws.send(i):r.ws.send(i,s);}catch(c){u('websocket closed before onclose event');}--o||n();});}(t[i]);},r.prototype.onClose=function(){i.prototype.onClose.call(this);},r.prototype.doClose=function(){'undefined'!=typeof this.ws&&this.ws.close();},r.prototype.uri=function(){var t=this.query||{},e=this.secure?'wss':'ws',n='';this.port&&('wss'===e&&443!==Number(this.port)||'ws'===e&&80!==Number(this.port))&&(n=':'+this.port),this.timestampRequests&&(t[this.timestampParam]=p()),this.supportsBinary||(t.b64=1),t=a.encode(t),t.length&&(t='?'+t);var r=this.hostname.indexOf(':')!==-1;return e+'://'+(r?'['+this.hostname+']':this.hostname)+n+this.path+t;},r.prototype.check=function(){return!(!l||'__initialize'in l&&this.name===r.prototype.name);};}).call(e,function(){return this;}());},function(t,e){},function(t,e){var n=[].indexOf;t.exports=function(t,e){if(n)return t.indexOf(e);for(var r=0;r<t.length;++r)if(t[r]===e)return r;return-1;};},function(t,e,n){'use strict';function r(t,e,n){this.io=t,this.nsp=e,this.json=this,this.ids=0,this.acks={},this.receiveBuffer=[],this.sendBuffer=[],this.connected=!1,this.disconnected=!0,n&&n.query&&(this.query=n.query),this.io.autoConnect&&this.open();}var o='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t;},i=n(7),s=n(8),a=n(38),c=n(39),p=n(40),u=n(3)('socket.io-client:socket'),h=n(30);t.exports=e=r;var f={connect:1,connect_error:1,connect_timeout:1,connecting:1,disconnect:1,error:1,reconnect:1,reconnect_attempt:1,reconnect_failed:1,reconnect_error:1,reconnecting:1,ping:1,pong:1},l=s.prototype.emit;s(r.prototype),r.prototype.subEvents=function(){if(!this.subs){var t=this.io;this.subs=[c(t,'open',p(this,'onopen')),c(t,'packet',p(this,'onpacket')),c(t,'close',p(this,'onclose'))];}},r.prototype.open=r.prototype.connect=function(){return this.connected?this:(this.subEvents(),this.io.open(),'open'===this.io.readyState&&this.onopen(),this.emit('connecting'),this);},r.prototype.send=function(){var t=a(arguments);return t.unshift('message'),this.emit.apply(this,t),this;},r.prototype.emit=function(t){if(f.hasOwnProperty(t))return l.apply(this,arguments),this;var e=a(arguments),n={type:i.EVENT,data:e};return n.options={},n.options.compress=!this.flags||!1!==this.flags.compress,'function'==typeof e[e.length-1]&&(u('emitting packet with ack id %d',this.ids),this.acks[this.ids]=e.pop(),n.id=this.ids++),this.connected?this.packet(n):this.sendBuffer.push(n),delete this.flags,this;},r.prototype.packet=function(t){t.nsp=this.nsp,this.io.packet(t);},r.prototype.onopen=function(){if(u('transport is open - connecting'),'/'!==this.nsp)if(this.query){var t='object'===o(this.query)?h.encode(this.query):this.query;u('sending connect packet with query %s',t),this.packet({type:i.CONNECT,query:t});}else this.packet({type:i.CONNECT});},r.prototype.onclose=function(t){u('close (%s)',t),this.connected=!1,this.disconnected=!0,delete this.id,this.emit('disconnect',t);},r.prototype.onpacket=function(t){if(t.nsp===this.nsp)switch(t.type){case i.CONNECT:this.onconnect();break;case i.EVENT:this.onevent(t);break;case i.BINARY_EVENT:this.onevent(t);break;case i.ACK:this.onack(t);break;case i.BINARY_ACK:this.onack(t);break;case i.DISCONNECT:this.ondisconnect();break;case i.ERROR:this.emit('error',t.data);}},r.prototype.onevent=function(t){var e=t.data||[];u('emitting event %j',e),null!=t.id&&(u('attaching ack callback to event'),e.push(this.ack(t.id))),this.connected?l.apply(this,e):this.receiveBuffer.push(e);},r.prototype.ack=function(t){var e=this,n=!1;return function(){if(!n){n=!0;var r=a(arguments);u('sending ack %j',r),e.packet({type:i.ACK,id:t,data:r});}};},r.prototype.onack=function(t){var e=this.acks[t.id];'function'==typeof e?(u('calling ack %s with %j',t.id,t.data),e.apply(this,t.data),delete this.acks[t.id]):u('bad ack %s',t.id);},r.prototype.onconnect=function(){this.connected=!0,this.disconnected=!1,this.emit('connect'),this.emitBuffered();},r.prototype.emitBuffered=function(){var t;for(t=0;t<this.receiveBuffer.length;t++)l.apply(this,this.receiveBuffer[t]);for(this.receiveBuffer=[],t=0;t<this.sendBuffer.length;t++)this.packet(this.sendBuffer[t]);this.sendBuffer=[];},r.prototype.ondisconnect=function(){u('server disconnect (%s)',this.nsp),this.destroy(),this.onclose('io server disconnect');},r.prototype.destroy=function(){if(this.subs){for(var t=0;t<this.subs.length;t++)this.subs[t].destroy();this.subs=null;}this.io.destroy(this);},r.prototype.close=r.prototype.disconnect=function(){return this.connected&&(u('performing disconnect (%s)',this.nsp),this.packet({type:i.DISCONNECT})),this.destroy(),this.connected&&this.onclose('io client disconnect'),this;},r.prototype.compress=function(t){return this.flags=this.flags||{},this.flags.compress=t,this;};},function(t,e){function n(t,e){var n=[];e=e||0;for(var r=e||0;r<t.length;r++)n[r-e]=t[r];return n;}t.exports=n;},function(t,e){'use strict';function n(t,e,n){return t.on(e,n),{destroy:function(){t.removeListener(e,n);}};}t.exports=n;},function(t,e){var n=[].slice;t.exports=function(t,e){if('string'==typeof e&&(e=t[e]),'function'!=typeof e)throw new Error('bind() requires a function');var r=n.call(arguments,2);return function(){return e.apply(t,r.concat(n.call(arguments)));};};},function(t,e){function n(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0;}t.exports=n,n.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),n=Math.floor(e*this.jitter*t);t=0==(1&Math.floor(10*e))?t-n:t+n;}return 0|Math.min(t,this.max);},n.prototype.reset=function(){this.attempts=0;},n.prototype.setMin=function(t){this.ms=t;},n.prototype.setMax=function(t){this.max=t;},n.prototype.setJitter=function(t){this.jitter=t;};}]);});
/* eslint-disable no-console */
'use-strict';

// Helper functions for the GUI 

var helper = {
	// Encode special characters to html entities
	encodedStr: function encodedStr (rawStr) {
		return rawStr.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
			return '&#'+i.charCodeAt(0)+';';
		});
	},

	// Get timestamp with current datetime
	getNow: function getNow () {
		var date = new Date();
		return date.toUTCString();
	},

	// Keep scroll position on bottom in logs
	updateScroll: function updateScroll () {
		var element = document.querySelector('.editor__logs');
		element.scrollTop = element.scrollHeight;
	},
    
	// Add loading animation to the code editor 
	addLoading: function addLoading (message) {
		var editor = document.querySelector('#code-editor .editor__main'),
			loading = document.createElement('div');

		if (typeof message !== 'undefined') {
			loading.setAttribute('class', 'editor__loading editor__loading--' + message); 
		} else {
			loading.setAttribute('class', 'editor__loading');
		}

		editor.appendChild(loading);
	},

	// Remove loading animation from the code editor 
	removeLoading: function removeLoading () {
		var loading = document.querySelector('.editor__loading');
		loading.parentNode.removeChild(loading);
	},

	// Add a log message to the log area
	// If isSuccess parameter is set set the log color
	addLog: function addLog (message, isSuccess) {
		var logArea = document.querySelector('.editor__logs'),
			log = document.createElement('div');

		log.setAttribute('class', 'log');

		if (isSuccess && typeof isSuccess !== 'undefined') {
			log.setAttribute('class' ,'log--success');
		} else if (!isSuccess && typeof isSuccess !== 'undefined') {
			log.setAttribute('class' ,'log--error');
		}

		log.innerHTML = message;
		logArea.appendChild(log);
		helper.updateScroll();

		if (message.indexOf('at position') > -1) {
			var messageArray = message.split(' '),
				charPosition = parseInt(messageArray[messageArray.length - 1]);

			helper.markTextInEditor(charPosition);
		}
	},

	createNodeFromString: function createNodeFromString (nodeString) {        
		var div = document.createElement('div');
		div.innerHTML = nodeString;
		return div.childNodes;
	},

	getMimeType: function getMimeType (format) {
		var mimeType = '';

		switch (format) {
		case 'json':
			mimeType = 'application/json';
			break;
		case 'csv':
			mimeType = 'text/csv';
			break;
		}

		return mimeType;
	},

	markTextInEditor: function markTextInEditor (position) {
		var charPosition = editorWrapper.posFromIndex(parseInt(position)),
			charPositionNext = editorWrapper.posFromIndex(parseInt(position) + 1);

		// Correct marker position if the error occurs at the end of a line
		if (charPosition.ch === editorWrapper.getLine(charPosition.line).length) {
			charPosition = editorWrapper.posFromIndex(parseInt(position) + 1);
			charPositionNext = editorWrapper.posFromIndex(parseInt(position) + 2);
		}

		editorMarkers.push(editorWrapper.markText(charPosition, charPositionNext, { readOnly: true, css: "background-color : #ffd2d2" }));
		editorWrapper.setCursor(charPosition.line);
	}
};

    
/* eslint-disable no-console */
'use-strict';

var editorWrapper,
	editorMarkers = [];

(function() {
	var codeEditor = {
		init: function (id, mode) {
			//Get textarea that should host the code editor
			var textArea = document.getElementById(id);
            
			//Init the code editor
			CodeMirror.keyMap.default['Shift-Tab'] = 'indentLess';

			var myCodeMirror = CodeMirror.fromTextArea(textArea, {
				lineNumbers: true,
				lineWrapping: false,
				mode: mode,
				theme: 'material',
				indentUnit: 3,
				tabSize: 3

			});
            
			//Set the code editor to an empty state
			myCodeMirror.refresh();
			myCodeMirror.setValue('');
            
			return myCodeMirror;
		}
	};

	var format = localStorage.getItem('format'),
		importData = localStorage.getItem('importData');

	// Set code format according to format stored in local storage
	if (format !== null) {
		document.querySelector('[data-format="' + format + '"]').classList.add('switch__link--active');
	} else {
		document.querySelector('[data-format="application/json"]').classList.add('switch__link--active');
	}

	// Get active code switch value
	var activeSwitch = document.querySelector('.switch .switch__link.switch__link--active').getAttribute('data-format');

	// Init code editor with a proper code format 
	editorWrapper = codeEditor.init('import-data', activeSwitch);

	// Set code from local storage
	if (importData !== null) {
		if (format === 'application/json') {
			editorWrapper.setValue(js_beautify(importData, {indent_size: 3}));
		} else if (format === 'text/csv') {
			editorWrapper.setValue(importData);
		}   
	} 

	// Get code switches options 
	var codeSwitches = document.querySelectorAll('.switch .switch__link');

	// Make switches change their visual look as well as mode of the code editor 
	for (i = 0; i < codeSwitches.length; i++) {
		(function (i) {
			codeSwitches[i].addEventListener('click', function (event) {
				event.preventDefault();
    
				document.querySelectorAll('.switch .switch__link').forEach(function (el) {
					el.classList.remove('switch__link--active');
				});
				codeSwitches[i].classList.add('switch__link--active');
				editorWrapper.setOption('mode', codeSwitches[i].getAttribute('data-format'));
			});
		})(i);
	}   
})();


/* eslint-disable no-console */
'use-strict';

(function () {
	var form = document.getElementById('importForm'),
		socket = io(),
		projectId,
		cmKey,
		importData;

	// Make a request to the import endpoint and get a response
	var makeRequest = function (projectId, cmKey, importData) {
		var request = new XMLHttpRequest(),
			response,
			format = document.querySelector('.switch__link--active').getAttribute('data-format');

		request.open('POST', '/' + projectId, true);
		request.setRequestHeader('Content-Type', format);
		request.setRequestHeader('Authorization', 'Bearer ' + cmKey);

		// When a response is obtained
		request.onload = function() {
			helper.removeLoading();
			response = request.responseText;

			// If the response is successful
			if (request.status >= 200 && request.status < 400) {
				//Set code editor to use JSON
				document.querySelectorAll('.switch .switch__link').forEach(function (el) {
					el.classList.remove('switch__link--active');
				});
				document.querySelector('[data-format="application/json"]').classList.add('switch__link--active');
				editorWrapper.setOption('mode', 'application/json');

				// Set the response body to the code editor
				editorWrapper.setValue(js_beautify(response, {indent_size: 3}));
				setTimeout(function () {
					helper.addLog('Import successful. See information about imported items in the code editor above.', true);
				}, 500);		
			} else {
				// If the response is failed
				//Log errors 
				helper.addLog(helper.encodedStr(JSON.parse(response).message), false);

				var errors = JSON.parse(response).validation_errors,
					itemIndex = JSON.parse(response).itemIndex;

				if (typeof errors !== 'undefined') {
					for (var i = 0; i < errors.length; i++) {
						helper.addLog(helper.encodedStr(errors[i].message), false);
					}
				}
			}
		};
        
		request.onerror = function() {
			// There was a connection error
			console.error('Connection error');
			helper.addLog('Connection error', false);
		};
        
		// Make the request
		request.send(importData);
	};

	// Save Project ID, Content Management Key, Format and Import Data to local storage
	var saveToLocalStorage = function (projectId, cmKey, importData, format) {
		localStorage.setItem('projectId', projectId);  
		localStorage.setItem('cmKey', cmKey); 
		localStorage.setItem('importData', importData);
		localStorage.setItem('format', format);
	};

	// Get Project ID, Content Management Key and Import Data from local storage
	var getFromLocalStorage = function () {
		var projectId = localStorage.getItem('projectId'),
			cmKey = localStorage.getItem('cmKey');

		if (projectId !== null && cmKey !== null) {
			document.getElementById('project').value = projectId;
			document.getElementById('cmkey').value = cmKey;
		}
	};  

	// Function that fires when import starts
	var sumbitForm = function (event) {
		projectId = document.getElementById('project').value;
		cmKey = document.getElementById('cmkey').value;
		importData = editorWrapper.getValue(),
		format = document.querySelector('.switch__link--active').getAttribute('data-format');

		// Markers is a global variable defined in the ./code-editor.js file
		editorMarkers.forEach(function (marker) {
			marker.clear();
		});

		saveToLocalStorage(projectId, cmKey, importData, format);

		helper.addLoading();
		helper.addLog('=== New data import at ' + helper.getNow() + '===');
		makeRequest(projectId, cmKey, importData); 

		event.preventDefault();     
	};

	// On page load

	// Get data from previous sessions
	getFromLocalStorage();

	// Attach event listener to the import form
	form.addEventListener('submit', sumbitForm, true);

	// Listen to Socket.io messages
	// Used for logging
	socket.on('message', function(message) {
		helper.addLog(message);
	});
})();
/* eslint-disable no-console */
'use-strict';

(function() {
	var projectIdElem = document.getElementById('project'),
		projectId = projectIdElem.value,
		blueprintForm = document.getElementById('blueprintForm');

	// Takes passed content models object and transforms it into select options 
	var fillBlueprintSelector = function (data) {
		var selector = document.getElementById('contentmodel'),
			option = '';
    
		// It there are not any data
		if (data.length === 0) {
			// Set the selector to the disabled state
			selector.innerHTML = '<option value="">Fill in a valid Project ID</option>';
			selector.setAttribute('disabled', 'disabled');
		} else {
			// Fill the selector with content model names and codenames
			selector.innerHTML = '';
			selector.removeAttribute('disabled');

			for (var i = 0; i < data.length; i++) {
				option = '<option value="' + data[i].system.codename + '">' + data[i].system.name + '</option>';
				selector.appendChild(helper.createNodeFromString(option)[0]);         
			}  
		}
 
	};

	// Request the Delivery API to get all content models
	var initBlueprintSelector = function (projectId) {
		var request = new XMLHttpRequest(),
			response;

		// Assemble endpoint url
		request.open('GET', 'https://deliver.kenticocloud.com/' + projectId + '/types', true);
		request.setRequestHeader('Content-Type', 'application/json');

		// When a response is obtained
		request.onload = function() {
			response = request.responseText;

			// If the response is successful
			if (request.status >= 200 && request.status < 400) {
				// Initialize the blueprint selector with data
				fillBlueprintSelector(JSON.parse(response).types);
			}
		};
        
		request.onerror = function() {
			// There was a connection error
			console.error('Connection error');
			helper.addLog('Connection error', false);
		};
        
		// Make the request
		request.send();
	};

	// Request the Blueprint endpoint to get a blueprint of the selected content model
	var generateBlueprint = function (projectId, format, model) {
		var request = new XMLHttpRequest(),
			response,
			mimeType;

		// Assemble endpoint url
		request.open('GET', '/' + projectId + '/blueprint/' + format + '/' + model, true);
		request.setRequestHeader('Content-Type', helper.getMimeType(format));

		// When a response is obtained
		request.onload = function() {
			helper.removeLoading();
			response = request.responseText;

			// If the response is successful
			if (request.status >= 200 && request.status < 400) {
				// Set the response body to the code editor
				if (format === 'json') {
					editorWrapper.setValue(js_beautify(response, {indent_size: 3}));
					helper.addLog('JSON blueprint for the "' + model + '" content model successfully generated.', true);
				} else if (format === 'csv') {
					editorWrapper.setValue(response);
					helper.addLog('CSV header blueprint for the "' + model + '" content model successfully generated.', true);
				}   
			} else {
				// If the response is failed
				//Log errors 
				helper.addLog(helper.encodedStr(JSON.parse(response).message), false);
			}
		};
        
		request.onerror = function() {
			// There was a connection error
			console.error('Connection error');
			helper.addLog('Connection error', false);
		};
        
		// Make the request
		request.send();
	};

	// Get mode set in the code editor as a string to be passed in the blueprint endpoint 
	function getFormat () {
		// editorWrapper is a global variable set in the ./code-editor.js file
		var format = editorWrapper.getOption('mode');

		switch (format) {
		case 'application/json':
			format = 'json';
			break;
		case 'text/csv':
			format = 'csv';
			break;
		}

		return format;
	}

	// On page load

	if (projectId !== '') {
		// Fill content models selector with data
		initBlueprintSelector(projectId); 
	}

	// When Project ID input loses focus
	projectIdElem.addEventListener('blur', function () {
		projectId = projectIdElem.value;

		if (projectId !== '') {
			// Fill content models selector with data
			initBlueprintSelector(projectId); 
		}             
	});

	// On the blueprint form submit
	blueprintForm.addEventListener('submit', function (event) {
		var format = getFormat();
		selector = document.getElementById('contentmodel');
		model = selector.options[selector.selectedIndex].value;

		projectId = projectIdElem.value;
		helper.addLog('=== New blueprint at ' + helper.getNow() + '===');
		helper.addLoading('blueprint');

		if (model !== '' && format !== '' && selector !== null) {
			// Generate blueprint and show it in the code editor
			generateBlueprint(projectId, format, model);
		} else {
			helper.addLog('A content model must be selected to be able to generate a blueprint.' , false);
		}

		event.preventDefault(); 
        
	}, true);

})();