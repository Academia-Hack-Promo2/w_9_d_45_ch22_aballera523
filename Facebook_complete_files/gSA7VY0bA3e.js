/*!CK:4039880401!*//*1427087428,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["F0cgP"]); }

__d("LeftNavDragNUX.react",["ContextualDialog","ContextualDialogArrow","LayerAutoFocus","LayerRefocusOnHide","ReactLayer","React","cx","fbt","LEGACY_getSiblingByRef"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){b.__markCompiled&&b.__markCompiled();'use strict';var p=l,q=p.PropTypes,r=k.createClass({displayName:'LeftNavDragNUX',createLayer:function(t){var u=this.props.nuxType!=='remove'?"_53lz":"_53l-",v=this.getContextNode(),w={wrapperClassName:u,arrowDimensions:{offset:14,length:18}},x={alignment:this.props.alignment,arrowBehavior:h,context:v,offsetX:this.props.offsetX,offsetY:this.props.offsetY,position:this.props.position,theme:w},y=new g(x,t);y.disableBehavior(i);y.disableBehavior(j);y.conditionShow(this.props.shown);return y;},receiveProps:function(t){var u=this.getContextNode();this.layer.setContext(u);this.layer.setPosition(t.position).setAlignment(t.alignment).setOffsetX(t.offsetX).setOffsetY(t.offsetY).conditionShow(t.shown);},getContextNode:function(){var t=o(this.props.owner,this.props.contextRef);return t&&l.findDOMNode(t);}}),s=l.createClass({displayName:"LeftNavDragNUX",propTypes:{contextRef:q.string,nuxType:q.oneOf(['add','sort','remove',null,undefined]),alignment:q.oneOf(['left','center','right']),offsetX:q.number,offsetY:q.number},render:function(){var t=this.props,u=t.nuxType,v=(function(x,y){var z={},aa=Object.prototype.hasOwnProperty;if(x==null)throw new TypeError();for(var ba in x)if(aa.call(x,ba)&&!aa.call(y,ba))z[ba]=x[ba];return z;})(t,{nuxType:1}),w=null;switch(u){case 'add':w=n._("Add to Favorites");break;case 'sort':w=n._("Rearrange");break;case 'remove':w=n._("Remove from Favorites");break;case null:return null;case undefined:return null;}return (l.createElement(r,l.__spread({},v,{className:"dragTooltip",shown:u!==null,owner:this,nuxType:u}),w));}});e.exports=s;},null);