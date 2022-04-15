<script setup lang="ts">
import { IQuote } from "../tools/api";
import { ExternalURLs } from "../tools/constants";
import { Locale } from "../tools/locale";

export interface ICurrentQuote {
    index: number;
    quote: IQuote;
    json: string;
    image: string;
}

export type IRefreshQuote = () => Promise<void>;

const { currentQuote, refreshQuote } = defineProps<{
    currentQuote: ICurrentQuote;
    refreshQuote: IRefreshQuote;
}>();
</script>

<template>
    <div>
        <div
            id="content-container"
            :style="{
                color: currentQuote.quote.color.contrast,
                backgroundColor: currentQuote.quote.color.primary,
            }"
        >
            <div
                class="u-flex-center !justify-around w-full"
                id="content-header"
            >
                <p class="font-bold" :title="Locale.RefreshQuote">
                    <button class="u-link" @click="refreshQuote">
                        {{ Locale.UprightQuotes }}
                    </button>
                </p>

                <div class="u-flex-center gap-6">
                    <a
                        class="u-link"
                        :href="ExternalURLs.github"
                        target="_blank"
                    >
                        {{ Locale.GitHub }}
                    </a>
                    <a
                        class="u-link"
                        :href="ExternalURLs.apiDocs"
                        target="_blank"
                    >
                        {{ Locale.API }}
                    </a>
                </div>
            </div>

            <div class="u-flex-center" id="content-parent">
                <div id="content">
                    <p class="text-3xl md:text-5xl font-bold">
                        {{ currentQuote.quote.quote }}
                    </p>
                    <p class="mt-4 text-lg">
                        ~ {{ currentQuote.quote.author }}
                    </p>

                    <div
                        class="u-flex-center !justify-start gap-5 mt-4 text-xl"
                    >
                        <button
                            class="u-link"
                            @click="refreshQuote"
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
    </div>
</template>
