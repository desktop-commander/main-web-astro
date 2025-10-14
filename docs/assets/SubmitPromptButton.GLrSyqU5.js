import{b as m,j as o}from"./createLucideIcon.lbH8MOOS.js";import{B as p}from"./button.Df6XjF6e.js";import{u as i}from"./EngagementMeter.Cxjmm_-r.js";import{E as l}from"./external-link.CJ9G_Kbx.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=m("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);function k({variant:t="default",size:r="default",className:s="",showIcon:a=!0,text:e="Submit Your Prompt"}){const n=i(),u=()=>{n.capture("submit_prompt_clicked",{button_variant:t,button_size:r,button_text:e,source_page:window.location.pathname}),window.open("https://tally.so/r/m6BbEN","_blank","noopener,noreferrer")};return o.jsxs(p,{onClick:u,variant:t,size:r,className:`${t==="default"?"dc-button-primary":""} ${s}`,title:"Submit your prompt via our form",children:[a&&o.jsx(c,{className:"h-4 w-4 mr-2"}),e,o.jsx(l,{className:"h-3 w-3 ml-1.5 opacity-70"})]})}export{k as S};
