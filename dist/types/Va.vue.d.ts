import type { LinkComponentBaseProps } from "@inertiajs/core";
interface IAAttribute {
    href?: string | undefined;
    rel?: string | undefined;
    target?: string | undefined;
}
interface VaLinkComponentBaseProps extends LinkComponentBaseProps, Omit<IAAttribute, 'href'> {
    external?: boolean;
}
declare var __VLS_1: {}, __VLS_10: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
} & {
    default?: (props: typeof __VLS_10) => any;
};
declare const __VLS_base: import("vue").DefineComponent<VaLinkComponentBaseProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<VaLinkComponentBaseProps> & Readonly<{}>, {
    external: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
