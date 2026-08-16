// Regression test for the bros discovery ledger and badge layer.
// Run from Reputation-Matrix2/:  node tools/tests/test_bros_discovery.mjs
// Minimal Foundry stub to exercise the three-strikes ledger for real.
const settings = new Map();
const flags = new Map();
const chat = [];
const hooks = {};
const mkActor = (id,name)=>({id,name,
  getFlag:(m,k)=>flags.get(`${id}|${m}|${k}`),
  setFlag:async(m,k,v)=>{flags.set(`${id}|${m}|${k}`,v);}});
const actors=new Map([["a",mkActor("a","Hjumpik")],["b",mkActor("b","Toad Lee")],["c",mkActor("c","Remi")],["d",mkActor("d","Green T")]]);
globalThis.game={settings:{register:(m,k,o)=>settings.set(`${m}|${k}`,o.default),
  get:(m,k)=>settings.get(`${m}|${k}`),set:async(m,k,v)=>settings.set(`${m}|${k}`,v)},
  actors:{get:id=>actors.get(id)}};
globalThis.ui={notifications:{warn:m=>chat.push(["WARN",m]),info:m=>chat.push(["INFO",m]),error:m=>chat.push(["ERR",m])}};
globalThis.ChatMessage={create:async m=>chat.push(["CHAT",m.content])};
globalThis.foundry={utils:{escapeHTML:s=>s}};
globalThis.Hooks={once:(n,f)=>{(hooks[n]??=[]).push(f);},on:(n,f)=>{(hooks[n]??=[]).push(f);},
  callAll:(n,...a)=>{(hooks[n]??[]).forEach(f=>f(...a));}};
globalThis.BROS_ATTACKS=[{id:"chop_bros_attack",school:"clearing"},{id:"support_fire_bros_attack",school:"support_fire"}];

// Resolved relative to this file so the test carries no machine-specific path.
const HERE=new URL("../../Foundry/bros_attacks/",import.meta.url);
const D=await import(new URL("bros-discovery.js",HERE));
const B=await import(new URL("bros-badges.js",HERE));
for(const f of hooks.init??[])f();
for(const f of hooks.ready??[])f();

let pass=0,fail=0;
const t=(name,cond)=>{cond?(pass++,console.log("  ok   "+name)):(fail++,console.log("  FAIL "+name));};

console.log("\n-- a success with no failures behind it is refused");
t("refused", await D.logDiscovery("a","b","chop_bros_attack","Timber") === null);
t("not learned", !(flags.get("a|bros_attacks|learned")??[]).includes("chop_bros_attack"));

console.log("\n-- a failure with no stated reason is refused");
t("refused", await D.logFailure("a","b","chop_bros_attack","bad") === null);
t("no strike", D.strikesAgainst("a","b","chop_bros_attack")===0);

console.log("\n-- two real failures, then the success");
await D.logFailure("a","b","chop_bros_attack","Both moved on the same beat and the axe arrived early.");
t("1 strike", D.strikesAgainst("a","b","chop_bros_attack")===1);
t("still refused", await D.logDiscovery("a","b","chop_bros_attack","Timber")===null);
await D.logFailure("a","b","chop_bros_attack","Counted down out loud again; the lift was not set.");
t("2 strikes", D.strikesAgainst("a","b","chop_bros_attack")===2);
t("last reason surfaces", D.lastFailure("a","b","chop_bros_attack").startsWith("Counted down"));
const e=await D.logDiscovery("a","b","chop_bros_attack","Timber");
t("discovered", e && e.discovered && e.name==="Timber");
t("both learned", ["a","b"].every(id=>(flags.get(`${id}|bros_attacks|learned`)??[]).includes("chop_bros_attack")));
t("pairKnows", D.pairKnows("a","b","chop_bros_attack"));

console.log("\n-- order of the pair must not matter");
t("b,a same", D.pairKnows("b","a","chop_bros_attack"));

console.log("\n-- an unrelated pair does NOT get it");
t("c,d ignorant", !D.pairKnows("c","d","chop_bros_attack"));

console.log("\n-- badges fired on discovery");
const badges=flags.get("a|bros_attacks|badges")??[];
t("first_discovery", badges.includes("first_discovery"));
t("first_to_name", badges.includes("first_to_name"));
t("no hard_way yet", !badges.includes("hard_way"));

console.log("\n-- hard way: five failures then land");
for(let i=0;i<5;i++) await D.logFailure("c","d","support_fire_bros_attack",`Attempt ${i+1} failed: fired before the call.`);
await D.logDiscovery("c","d","support_fire_bros_attack","Green's Count");
t("hard_way earned", (flags.get("c|bros_attacks|badges")??[]).includes("hard_way"));

console.log("\n-- undo reverts a discovery cleanly");
await D.undoLastAttempt("c","d","support_fire_bros_attack");
t("no longer known", !D.pairKnows("c","d","support_fire_bros_attack"));
t("flag removed", !(flags.get("c|bros_attacks|learned")??[]).includes("support_fire_bros_attack"));
t("strikes kept", D.strikesAgainst("c","d","support_fire_bros_attack")===5);

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail?1:0);
