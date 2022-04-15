<script setup lang="ts">
import { ref } from "vue";
import { API, IMeta, IQuote } from "./tools/api";
import { Locale } from "./tools/locale";
import { Utils } from "./tools/utils";

import Loader from "./components/Loader.vue";
import Quote, { ICurrentQuote } from "./components/Quote.vue";

const ready = ref(false);
const meta = ref<IMeta | null>(null);

const getMeta = async () => {
    meta.value = await API.getMeta();
};

let _qParamsIndex: number | null = parseInt(
    new URL(location.href).searchParams.get(Locale.QParamsIndex) ?? ""
);
const currentQuote = ref<ICurrentQuote | null>(null);

const getQuote = async () => {
    if (!meta.value) {
        throw new Error(Locale.MetadataWasNotFetched);
    }

    const index =
        typeof _qParamsIndex === "number" &&
        !isNaN(_qParamsIndex) &&
        _qParamsIndex < meta.value.size
            ? _qParamsIndex
            : Utils.random(meta.value.size, currentQuote.value?.index ?? -1);

    const quote = await API.getQuoteJson(index);
    const json = API.getQuoteJsonURL(index);
    const image = API.getQuoteImageURL(index);

    currentQuote.value = {
        index,
        quote,
        json,
        image,
    };

    history.replaceState(undefined, "", `?${Locale.QParamsIndex}=${index}`);
    _qParamsIndex = null;
};

(async () => {
    const startedAt = Date.now();
    await getMeta();
    await getQuote();

    const timeout = Date.now() - startedAt;
    const requiredInterval = 750;
    await Utils.sleep(
        timeout < requiredInterval ? requiredInterval - timeout : 0
    );

    ready.value = true;
})();
</script>

<template>
    <div id="app-container">
        <Transition
            id="app-container-t"
            name="app-container-fade"
            mode="out-in"
        >
            <Loader v-if="!ready" />
            <Quote
                :key="currentQuote.index"
                :currentQuote="currentQuote"
                :refreshQuote="getQuote"
                v-else-if="ready && currentQuote"
            />
        </Transition>
    </div>
</template>
