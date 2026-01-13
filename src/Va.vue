<script setup lang="ts">

import { Link } from "@inertiajs/vue3";
import type { LinkComponentBaseProps } from "@inertiajs/core";
import { useAttrs, computed } from 'vue';
import { isBrowser } from "./env";

interface VaLinkComponentBaseProps extends LinkComponentBaseProps
{
    external?: boolean  // 外部リンクとして扱うかどうか
}

const props = withDefaults( defineProps<VaLinkComponentBaseProps>(), {
    external: false,
} );

const attrs = useAttrs();
const isBlank = computed( () => attrs.target === '_blank' );

const url = computed<string | undefined>( () => {
    const href = props.href;
    if ( !href )
    {
        return undefined;
    }
    return typeof href === "string" ? href : href.url;
} );

const isSpecialScheme = ( url: string ) => {
    return /^(mailto|tel|sms|data|javascript):/i.test( url );
};


const isExternal = computed( () => {
    if ( !isBrowser() || props.external || !url.value || isBlank.value || isSpecialScheme( url.value ) )
    {
        return true;
    }
    try
    {
        const u = new URL( url.value, location.origin )
        return u.origin !== location.origin
    }
    catch
    {
        return false
    }
} );

// slot指定無しの場合のデフォルトテキスト
// 基本は href をそのまま表示するが、一部調整する
const defaultTextContent = computed<string>( () => {
    if ( !url.value )
    {
        return "";
    }
    if ( isSpecialScheme( url.value ) )
    {
        // mailto: とかの文字を消す
        return url.value.replace( /^[^:]+:(.+)$/, '$1' );
    }
    return url.value;
} );

const passthrough = computed( () => {
   if ( isExternal.value )
   {
       // aタグの方
       const { href, rel, ...rest } = attrs;
       return rest;
   }
   else
   {
       // Linkの方
       const { external, ...linkProps } = props;
       return {
           ...attrs,
           ...linkProps
       };
   }
});

</script>

<template>
    <template v-if="isExternal">
        <a :href="url"
           :rel="(isBlank && !attrs.rel) ? 'noopener noreferrer' : <string | undefined>attrs.rel"
           v-bind="passthrough">
            <slot>{{ defaultTextContent }}</slot>
        </a>
    </template>
    <template v-else>
        <Link v-bind="passthrough">
            <slot>{{ defaultTextContent }}</slot>
        </Link>
    </template>
</template>

<style scoped lang="scss">

</style>
