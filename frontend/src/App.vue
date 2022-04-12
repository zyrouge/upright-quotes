<script setup lang="ts">
import { ref } from "vue";
import { API, IMeta, IQuote } from "./tools/api";
import { ExternalURLs } from "./tools/constants";
import { Locale } from "./tools/locale";
import { Utils } from "./tools/utils";

const meta = ref<IMeta | null>(null);

const getMeta = async () => {
    meta.value = await API.getMeta();
};

let _qParamsIndex: number | null = parseInt(
    new URL(location.href).searchParams.get(Locale.QParamsIndex) ?? ""
);
const currentQuote = ref<{
    index: number;
    quote: IQuote;
    json: string;
    image: string;
} | null>(null);

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
    await getMeta();
    await getQuote();
})();
</script>

<template>
    <div
        class="px-10"
        v-if="currentQuote"
        :style="{
            color: currentQuote.quote.color.contrast,
            backgroundColor: currentQuote.quote.color.primary,
        }"
    >
        <div id="header" class="u-flex-center !justify-around">
            <p class="font-bold" :title="Locale.RefreshQuote">
                <button class="u-link" @click="getQuote">
                    {{ Locale.UprightQuotes }}
                </button>
            </p>

            <div class="u-flex-center gap-6">
                <a class="u-link" :href="ExternalURLs.github" target="_blank">
                    {{ Locale.GitHub }}
                </a>
                <a class="u-link" :href="ExternalURLs.apiDocs" target="_blank">
                    {{ Locale.API }}
                </a>
            </div>
        </div>

        <div id="content-container" class="u-flex-center">
            <div id="content">
                <p class="text-4xl md:text-6xl font-bold">
                    {{ currentQuote.quote.quote }}
                </p>
                <p class="mt-4 text-lg">~ {{ currentQuote.quote.author }}</p>

                <div class="u-flex-center !justify-start gap-5 mt-4 text-xl">
                    <button
                        class="u-link"
                        @click="getQuote"
                        :title="Locale.RefreshQuote"
                    >
                        <Icon icon="arrow-rotate-right" />
                    </button>

                    <a
                        class="u-link"
                        :href="currentQuote.json"
                        :title="Locale.ViewAsJSON"
                        target="_blank"
                    >
                        <Icon icon="code" />
                    </a>

                    <a
                        class="u-link"
                        :href="currentQuote.image"
                        :title="Locale.DownloadAsImage"
                        target="_blank"
                    >
                        <Icon icon="image" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
