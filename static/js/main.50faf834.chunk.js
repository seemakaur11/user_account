(this.webpackJsonppractices=this.webpackJsonppractices||[]).push([[0],{116:function(n,e,t){},117:function(n,e,t){},225:function(n,e,t){"use strict";t.r(e);var a=t(1),r=t.n(a),i=t(55),o=t.n(i),s=(t(116),t(102)),c=t(103),p=t(111),l=t(109),d=(t(117),t(57)),x=t(10),b=t(14),u=t(229),m=Object(b.b)({form:u.a}),j=Object(b.c)(m),h=t(27),f=t(22),g=t.n(f),O=t(31),w=t(38),v=t(11),y=t(12),k=t(228),z=t(227),S=t(46);t(226),t(182);S.a.initializeApp({apiKey:"AIzaSyAqg-u9O7My0HATWDUvQSEfF-zcDMfzQIU",authDomain:"form-626be.firebaseapp.com",projectId:"form-626be",storageBucket:"form-626be.appspot.com",messagingSenderId:"893875172318",appId:"1:893875172318:web:b2abfb12579d83bfc8234f",measurementId:"G-RDPM31YZLD"});var E,A,C,I,P,N,F,Z,D,L,q,U,_,$,M,B,R,T=S.a.auth(),W=S.a.firestore(),Y=(new S.a.auth.GoogleAuthProvider,t(3)),G=y.a.div(E||(E=Object(v.a)(["\n    width: 100%;\n    height: 100%;\n    border-raduis: 40px;\n    display: flex;\n    align-items: center;\n    justify-content: center; \n    .btn {\n        width: 130px;\n        height: 45px;\n        outline: none;\n        border: none;\n        font-size: 18px;\n        text-transform: uppercase;\n        font-weight: 600;\n        margin: 20px 0px;\n        color: #5ab9ea;\n        cursor: pointer;\n        border-radius: 40px;\n        box-shadow: 12px 12px 24px 0 rgba(0, 0, 0, 0.2), -12px -12px 24px 0 rgba(255, 255, 255, 1);        \n    }\n    .clear{\n        width: 130px;\n        height: 45px;\n        outline: none;\n        border: none;\n        font-size: 18px;\n        text-transform: uppercase;\n        font-weight: 600;\n        margin: 20px 0px;\n        color: #5ab9ea;\n        cursor: pointer;\n        border-radius: 40px;\n        margin-left: 27px;\n        box-shadow: 12px 12px 24px 0 rgba(0, 0, 0, 0.2), -12px -12px 24px 0 rgba(255, 255, 255, 1);        \n    }\n    .account-text {\n        color: #5ab9ea;\n        font-weight: 600;       \n        padding-left: 6px;\n    }\n"]))),J=y.a.div(A||(A=Object(v.a)(["\n    p, a {\n        text-align: center;\n        font-size: 20px;\n        margin-left: 15px;\n    }\n"]))),K=y.a.div(C||(C=Object(v.a)(["\n    font-size: 35px;\n    color: #5ab9ea;\n    margin-bottom: 10px;\n    text-align: center;\n    font-weight: 600;\n    text-transform: uppercase;\n"]))),Q=y.a.div(I||(I=Object(v.a)(["\ncolor: red;\nmargin-top: 65px; \nfont-size: 15px;\n"]))),H=y.a.div(P||(P=Object(v.a)(["\n    width: 320px;\n    height: 50px;\n    margun: 10px 0px;\n    background: #e0e0e0;\n    border-radius: 40px;\n    display: flex;\n    align-items: center;\n    margin: 20px 0px;\n    box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2), -6px -6px 10px 0 rgba(255, 255, 255, 0.5);\n    i {\n        flex: 1.2;\n        text-align: center;\n        font-size: 20px;\n        color: #999;\n        margin-left: 23px;\n    }\n    input {\n        flex: 5;\n        width: 100%;\n        color: black;\n        font-size: 18px;\n        font-weight: 500;\n        border: none;\n        outline: none;\n        background: none;\n        padding-left: 5px;\n    }\n"]))),V=y.a.div(N||(N=Object(v.a)(["\n  display:flex;\n"]))),X=function(n){var e=n.input,t=n.label,a=n.type,r=n.meta,i=r.touched,o=r.error;return Object(Y.jsxs)(V,{children:[Object(Y.jsx)("input",Object(w.a)(Object(w.a)({},e),{},{placeholder:t,type:a})),i&&o&&Object(Y.jsx)(Q,{children:o})]})},nn=Object(h.b)()(Object(z.a)({form:"Form",validate:function(n){var e={};return n.username?/^[A-Za-z]+$/i.test(n.username)||(e.username="Only alphabet characters are allowed"):e.username="Username is required",n.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(n.email)||(e.email="Invalid email address"):e.email="Email is required",n.password?/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/i.test(n.password)||(e.password="Invalid Password"):e.password="Password is required",n.confirm_password||(e.confirm_password="Confirm password is required"),n.password!==n.confirm_password&&(e.confirm_password="Password not match"),e},onSubmit:function(){var n=Object(O.a)(g.a.mark((function n(e){var t,a,r,i;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t=e.username,a=e.email,r=e.password,n.next=6,T.createUserWithEmailAndPassword(a,r);case 6:return i=n.sent,alert("create user successfully"),n.next=10,W.collection("users").add({uid:i.user.uid,username:t,authProvider:"local",email:a});case 10:n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),alert("Error --\x3e ".concat(n.t0.message," ErrorCode --\x3e",400));case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(e){return n.apply(this,arguments)}}()})((function(n){var e=n.handleSubmit,t=n.pristine,a=n.reset,r=n.submitting;return Object(Y.jsx)(G,{children:Object(Y.jsxs)(J,{children:[Object(Y.jsx)(K,{children:"Sign Up"}),Object(Y.jsxs)("form",{onSubmit:e((function(n){return n})),children:[Object(Y.jsxs)(H,{children:[Object(Y.jsx)("i",{className:"fa fa-user","aria-hidden":"true"}),Object(Y.jsx)("div",{className:"mainField",children:Object(Y.jsx)(k.a,{name:"username",type:"text",component:X,label:"username"})})]}),Object(Y.jsxs)(H,{children:[Object(Y.jsx)("i",{className:"fa fa-envelope","aria-hidden":"true"}),Object(Y.jsx)(k.a,{name:"email",type:"text",component:X,label:"Email"})]}),Object(Y.jsxs)(H,{children:[Object(Y.jsx)("i",{className:"fa fa-lock","aria-hidden":"true"}),Object(Y.jsx)(k.a,{name:"password",type:"password",component:X,label:"password"})]}),Object(Y.jsxs)(H,{children:[Object(Y.jsx)("i",{className:"fa fa-lock","aria-hidden":"true"}),Object(Y.jsx)(k.a,{name:"confirm_password",type:"password",component:X,label:"con password"})]}),Object(Y.jsx)("button",{type:"submit",value:"Sign Up",disabled:r,onClick:e,className:"btn",children:"Sign Up"}),Object(Y.jsx)("button",{type:"button",disabled:t||r,onClick:a,className:"clear",children:"Clear"}),Object(Y.jsx)(d.b,{to:"/Login",children:"Sign in"})]})]})})}))),en=y.a.div(F||(F=Object(v.a)(["\n    width: 100%;\n    height: 100%;\n   \n    border-raduis: 40px;\n    display: flex;\n    align-items: center;\n    justify-content: center; \n    .btn {\n        width: 130px;\n        height: 45px;\n\n        outline: none;\n        border: none;\n        font-size: 18px;\n        text-transform: uppercase;\n        font-weight: 600;\n        margin: 20px 0px;\n        color: #5ab9ea;\n        cursor: pointer;\n        border-radius: 40px;\n        box-shadow: 12px 12px 24px 0 rgba(0, 0, 0, 0.2), -12px -12px 24px 0 rgba(255, 255, 255, 1);        \n    }\n    .clear{\n        width: 130px;\n        height: 45px;\n        outline: none;\n        border: none;\n        font-size: 18px;\n        text-transform: uppercase;\n        font-weight: 600;\n        margin: 20px 0px;\n        color: #5ab9ea;\n        cursor: pointer;\n        border-radius: 40px;\n        margin-left: 27px;\n        box-shadow: 12px 12px 24px 0 rgba(0, 0, 0, 0.2), -12px -12px 24px 0 rgba(255, 255, 255, 1);   \n    }\n    .account-text {\n        color: #5ab9ea;\n        font-weight: 600;       \n        padding-left: 6px;\n    }\n"]))),tn=y.a.div(Z||(Z=Object(v.a)(["\n    p, a {\n        text-align: center;\n        font-size: 20px;\n        margin-left: 15px;\n    }\n"]))),an=y.a.div(D||(D=Object(v.a)(["\n    font-size: 35px;\n    color: #5ab9ea;\n    margin-bottom: 10px;\n    text-align: center;\n    font-weight: 600;\n    text-transform: uppercase;\n"]))),rn=y.a.div(L||(L=Object(v.a)(["\n    width: 320px;\n    height: 50px;\n    margun: 10px 0px;\n    background: #e0e0e0;\n    border-radius: 40px;\n    display: flex;\n    align-items: center;\n    margin: 20px 0px;\n    box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2), -6px -6px 10px 0 rgba(255, 255, 255, 0.5);\n    i {\n        flex: 1.2;\n        text-align: center;\n        font-size: 20px;\n        margin-left: 25px;\n        color: #999;\n    }\n    input {\n        flex: 5;\n        width: 100%;\n        color: #999;\n        font-size: 18px;\n        font-weight: 500;\n        border: none;\n        outline: none;\n        background: none;\n"]))),on=y.a.div(q||(q=Object(v.a)(["\n  display:flex;\n"]))),sn=y.a.div(U||(U=Object(v.a)(["\ncolor: red;\nmargin-top: 65px; \nfont-size: 15px;\n"]))),cn=y.a.div(_||(_=Object(v.a)(["\n    text-align: end;\n"]))),pn=function(n){var e=n.input,t=n.label,a=n.type,r=n.meta,i=r.touched,o=r.error;return Object(Y.jsxs)(on,{children:[Object(Y.jsx)("input",Object(w.a)(Object(w.a)({},e),{},{placeholder:t,type:a})),i&&o&&Object(Y.jsx)(sn,{children:o})]})},ln=Object(h.b)()(Object(z.a)({form:"Login",validate:function(n){var e={};return n.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(n.email)||(e.email="Invalid email address"):e.email="Email is required",n.password?/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/i.test(n.password)||(e.password="Invalid Password"):e.password="Password is required",e},onSubmit:function(){var n=Object(O.a)(g.a.mark((function n(e){return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,T.signInWithEmailAndPassword(e.email,e.password).then((function(){alert("user logged in successfully")})).catch((function(n){alert("Error --\x3e ".concat(n.message," ErrorCode --\x3e",400))}));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()})((function(n){var e=n.handleSubmit,t=n.pristine,a=n.reset,r=n.submitting;return Object(Y.jsx)(en,{children:Object(Y.jsxs)(tn,{children:[Object(Y.jsx)(an,{children:"Sign In"}),Object(Y.jsxs)("form",{onSubmit:e((function(n){return n})),children:[Object(Y.jsxs)(rn,{children:[Object(Y.jsx)("i",{className:"fa fa-user"}),Object(Y.jsx)(k.a,{name:"email",type:"text",component:pn,label:"Email"})]}),Object(Y.jsxs)(rn,{children:[Object(Y.jsx)("i",{className:"fa fa-lock"}),Object(Y.jsx)(k.a,{name:"password",type:"password",component:pn,label:"password"})]}),Object(Y.jsx)("button",{type:"submit",value:"login",disabled:r,onClick:e,className:"btn",children:"Login"}),Object(Y.jsx)("button",{type:"button",disabled:t||r,onClick:a,className:"clear",children:"Clear"}),Object(Y.jsx)(cn,{children:Object(Y.jsx)("a",{href:"/Forget",children:"Forgot Password ?"})})]})]})})}))),dn=t(110),xn=y.a.div($||($=Object(v.a)(["\n   .btn1 {\n        align-items: center;\n        height: 40px;\n        width: 187px;\n        background-color: orangered;\n        color: white;\n        font-weight: bold;\n        border-radius: 5px;\n        border: none;\n        margin-left: 545px;\n        margin-top: 5px;\n        text-align: center;\n        cursor: pointer;\n    }\n    "]))),bn=y.a.div(M||(M=Object(v.a)(["\n    width: 350px;\n    height: 50px;\n    margin: 10px 0px;\n\n    border-radius: 40px;\n    display: flex;\n    align-items: center;\n    margin: 20px 0px;\n    box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2), -6px -6px 10px 0 rgba(255, 255, 255, 0.5)\n    input {\n        flex: 5;\n        width: 100%;\n        color: black;\n        font-size: 18px;\n        font-weight: 500;\n        border: none;\n        outline: none;\n        background: none;\n        padding-left: 5px;\n        color: rgb(51, 51, 51);\n\n    }\n    .data {\n    width: 310px;\n    height: 42px;\n    border-radius: 5px;\n    font-size: 20px;\n    padding: 5px;\n    padding-left: 16px;\n    margin-left: 500px;\n    }\n    "]))),un=y.a.div(B||(B=Object(v.a)(["\n     text-align: center;\n     margin-top: 113px;\n     font-size: 50px;\n     font-weight: bold;\n    "]))),mn=y.a.div(R||(R=Object(v.a)(["\n    text-align: center;\n    color: rgb(51, 51, 51);\n    line-height: 26px;\n    padding: 10px;\n    "]))),jn=function(){var n=Object(a.useState)({email:""}),e=Object(dn.a)(n,2),t=e[0],r=e[1],i=function(){var n=Object(O.a)(g.a.mark((function n(e){return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),n.prev=1,n.next=4,T.sendPasswordResetEmail(t.email);case 4:alert("Email verification link sent!"),r({email:""}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),alert("Error --\x3e ".concat(n.t0.message," ErrorCode --\x3e",400));case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}();return Object(Y.jsxs)(xn,{children:[Object(Y.jsx)(un,{children:"Forgot Your Password ?"}),Object(Y.jsxs)(mn,{children:["Please enter the email address you used to create the account,",Object(Y.jsx)("br",{})," and we\u2019ll send you an activation code to reset your password."]}),Object(Y.jsxs)("form",{onSubmit:i,children:[Object(Y.jsx)(bn,{children:Object(Y.jsx)("input",{type:"text",name:"email",label:"email",placeholder:"email",className:"data",onChange:function(n){r({email:n.target.value})},value:t.email})}),Object(Y.jsx)("button",{type:"submit",onClick:function(n){return i},className:"btn1",children:"SEND VERIFY LINK"})]})]})},hn=function(n){Object(p.a)(t,n);var e=Object(l.a)(t);function t(){return Object(s.a)(this,t),e.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return Object(Y.jsx)(h.a,{store:j,children:Object(Y.jsx)(d.a,{children:Object(Y.jsxs)(x.c,{children:[Object(Y.jsx)(x.a,{exact:!0,path:"/",children:Object(Y.jsx)(nn,{})}),Object(Y.jsx)(x.a,{path:"/Login",component:ln}),Object(Y.jsx)(x.a,{path:"/Forget",component:jn})]})})})}}]),t}(r.a.Component),fn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,230)).then((function(e){var t=e.getCLS,a=e.getFID,r=e.getFCP,i=e.getLCP,o=e.getTTFB;t(n),a(n),r(n),i(n),o(n)}))};o.a.render(Object(Y.jsx)(r.a.StrictMode,{children:Object(Y.jsx)(hn,{})}),document.getElementById("root")),fn()}},[[225,1,2]]]);
//# sourceMappingURL=main.50faf834.chunk.js.map