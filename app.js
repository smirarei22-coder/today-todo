'use strict';
const KEY='today-todo-pwa-v1';
const $=id=>document.getElementById(id);
let tasks=[];
try {const saved=JSON.parse(localStorage.getItem(KEY)||'[]');if(Array.isArray(saved))tasks=saved.filter(t=>t&&typeof t.name==='string'&&typeof t.id==='string').map(t=>({id:t.id,name:t.name,done:!!t.done}));}catch(e){console.warn('保存データを読み込めませんでした',e);}
function save(){try{localStorage.setItem(KEY,JSON.stringify(tasks));}catch(e){alert('保存できませんでした。ブラウザーの空き容量や設定を確認してください。');}}
$('date').textContent=new Intl.DateTimeFormat('ja-JP',{month:'long',day:'numeric',weekday:'long'}).format(new Date());
function render(){const done=tasks.filter(t=>t.done).length;$('counter').textContent=`${done} / ${tasks.length}`;$('remaining').textContent=`残り ${tasks.length-done} 件`;$('fill').style.width=(tasks.length?done/tasks.length*100:0)+'%';$('empty').hidden=tasks.length>0;const list=$('list');list.replaceChildren();for(const task of tasks){const row=document.createElement('div');row.className='item'+(task.done?' done':'');const checkbox=document.createElement('input');checkbox.type='checkbox';checkbox.checked=task.done;checkbox.setAttribute('aria-label',task.name+'を完了');checkbox.addEventListener('change',()=>{task.done=checkbox.checked;save();render();});const label=document.createElement('span');label.className='name';label.textContent=task.name;const remove=document.createElement('button');remove.className='remove';remove.type='button';remove.textContent='×';remove.setAttribute('aria-label',task.name+'を削除');remove.addEventListener('click',()=>{tasks=tasks.filter(t=>t.id!==task.id);save();render();});row.append(checkbox,label,remove);list.append(row);}}
$('form').addEventListener('submit',e=>{e.preventDefault();const input=$('new');const name=input.value.trim();if(!name)return;tasks.push({id:crypto.randomUUID?crypto.randomUUID():String(Date.now())+'-'+Math.random(),name,done:false});input.value='';save();render();input.focus();});
$('clear').addEventListener('click',()=>{tasks=tasks.filter(t=>!t.done);save();render();});
render();
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(e=>console.warn('オフライン設定に失敗',e)));}
