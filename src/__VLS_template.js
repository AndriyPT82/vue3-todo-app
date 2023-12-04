import todos from "./data/todos";
import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name } from "./App.vue";

function __VLS_template() {
let __VLS_ctx!: InstanceType<import('./__VLS_types.js').PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_localComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption & typeof __VLS_ctx;
let __VLS_otherComponents!: typeof __VLS_localComponents & import('./__VLS_types.js').GlobalComponents;
let __VLS_own!: import('./__VLS_types.js').SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & typeof __VLS_publicComponent & (new () => { $slots: typeof __VLS_slots; }) >;
let __VLS_components!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_templateComponents!: {};
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("todoapp"), };
{
({} as JSX.IntrinsicElements).h1;
({} as JSX.IntrinsicElements).h1;
(__VLS_x as JSX.IntrinsicElements)['h1'] = { class: ("todoapp__title"), };
(__VLS_ctx.todos.length);
// @ts-ignore
[todos,];
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("todoapp__content"), };
{
({} as JSX.IntrinsicElements).header;
({} as JSX.IntrinsicElements).header;
(__VLS_x as JSX.IntrinsicElements)['header'] = { class: ("todoapp__header"), };
{
({} as JSX.IntrinsicElements).button;
({} as JSX.IntrinsicElements).button;
(__VLS_x as JSX.IntrinsicElements)['button'] = { class: ("todoapp__toggle-all active"), };
}
{
({} as JSX.IntrinsicElements).form;
({} as JSX.IntrinsicElements).form;
(__VLS_x as JSX.IntrinsicElements)['form'] = {};
{
({} as JSX.IntrinsicElements).input;
(__VLS_x as JSX.IntrinsicElements)['input'] = { type: ("text"), class: ("todoapp__new-todo"), placeholder: ("What needs to be done?"), };
}
}
}
{
({} as JSX.IntrinsicElements).section;
({} as JSX.IntrinsicElements).section;
(__VLS_x as JSX.IntrinsicElements)['section'] = { class: ("todoapp__main"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { '<!--': (true), class: ((`todo ${__VLS_ctx.todo.completed ? 'completed' : ''}`)), '--': (true), };
// @ts-ignore
[todo,];
{
({} as JSX.IntrinsicElements).label;
({} as JSX.IntrinsicElements).label;
(__VLS_x as JSX.IntrinsicElements)['label'] = { class: ("todo__status-label"), };
{
({} as JSX.IntrinsicElements).input;
(__VLS_x as JSX.IntrinsicElements)['input'] = { type: ("checkbox"), class: ("todo__status"), };
}
}
{
({} as JSX.IntrinsicElements).span;
({} as JSX.IntrinsicElements).span;
(__VLS_x as JSX.IntrinsicElements)['span'] = { class: ("todo__title"), };
(__VLS_ctx.todo.title);
// @ts-ignore
[todo,];
}
{
({} as JSX.IntrinsicElements).button;
({} as JSX.IntrinsicElements).button;
(__VLS_x as JSX.IntrinsicElements)['button'] = { class: ("todo__remove"), };
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("modal overlay"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("modal-background has-background-white-ter"), };
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("loader"), };
}
}
}
}
{
({} as JSX.IntrinsicElements).footer;
({} as JSX.IntrinsicElements).footer;
(__VLS_x as JSX.IntrinsicElements)['footer'] = { class: ("todoapp__footer"), };
{
({} as JSX.IntrinsicElements).span;
({} as JSX.IntrinsicElements).span;
(__VLS_x as JSX.IntrinsicElements)['span'] = { class: ("todo-count"), };
}
{
({} as JSX.IntrinsicElements).nav;
({} as JSX.IntrinsicElements).nav;
(__VLS_x as JSX.IntrinsicElements)['nav'] = { class: ("filter"), };
{
({} as JSX.IntrinsicElements).a;
({} as JSX.IntrinsicElements).a;
(__VLS_x as JSX.IntrinsicElements)['a'] = { href: ("#/"), class: ("filter__link selected"), };
}
{
({} as JSX.IntrinsicElements).a;
({} as JSX.IntrinsicElements).a;
(__VLS_x as JSX.IntrinsicElements)['a'] = { href: ("#/active"), class: ("filter__link"), };
}
{
({} as JSX.IntrinsicElements).a;
({} as JSX.IntrinsicElements).a;
(__VLS_x as JSX.IntrinsicElements)['a'] = { href: ("#/completed"), class: ("filter__link"), };
}
}
{
({} as JSX.IntrinsicElements).button;
({} as JSX.IntrinsicElements).button;
(__VLS_x as JSX.IntrinsicElements)['button'] = { class: ("todoapp__clear-completed"), };
}
}
}
{
({} as JSX.IntrinsicElements).article;
({} as JSX.IntrinsicElements).article;
(__VLS_x as JSX.IntrinsicElements)['article'] = { class: ("message is-danger message--hidden"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("message-header"), };
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = {};
}
{
({} as JSX.IntrinsicElements).button;
({} as JSX.IntrinsicElements).button;
(__VLS_x as JSX.IntrinsicElements)['button'] = { class: ("delete"), };
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("message-body"), };
}
}
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
declare var __VLS_slots: {};
return __VLS_slots;
}
