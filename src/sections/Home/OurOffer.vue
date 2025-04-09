<script setup lang="ts">
import TranslateRenderer from '@/components/translate/TranslateRenderer.vue';
import graphPicto from "@/assets/media/picto/graph.png"
import rocketPicto from "@/assets/media/picto/rocket.png"
import validationPicto from "@/assets/media/picto/validation.png"

</script>

<template>
    <section class="container">
        <header>
            <h1 id="our-offer">
                <TranslateRenderer :translate-key="'ouroffer.title'" />
            </h1>
            <h2>
                <TranslateRenderer :translate-key="'ouroffer.subtitle'" />
            </h2>
        </header>
        <table>
            <tbody>
                <tr>
                    <th class="category">
                        <TranslateRenderer :translate-key="'ouroffer.table.bootstrap.title'" />
                    </th>
                    <td class="items">
                        <TranslateRenderer :translate-key="'ouroffer.table.bootstrap.items'" />
                    </td>
                    <td class="description">
                        <TranslateRenderer :translate-key="'ouroffer.table.bootstrap.description'" />
                    </td>
                </tr>
                <tr>
                    <th class="category">
                        <TranslateRenderer :translate-key="'ouroffer.table.scoping.title'" />
                        <img :src=graphPicto />
                    </th>
                    <td class="items">
                        <TranslateRenderer :translate-key="'ouroffer.table.scoping.items'" />
                    </td>
                    <td class="description">
                        <TranslateRenderer :translate-key="'ouroffer.table.scoping.description'" />
                    </td>
                </tr>
                <tr>
                    <th class="category">
                        <TranslateRenderer :translate-key="'ouroffer.table.execute.title'" />
                        <img :src=rocketPicto />
                    </th>
                    <td class="items">
                        <TranslateRenderer :translate-key="'ouroffer.table.execute.items'" />
                    </td>
                    <td class="description">
                        <TranslateRenderer :translate-key="'ouroffer.table.execute.description'" />
                    </td>
                </tr>
                <tr>
                    <th rowspan="3" class="category">
                        <TranslateRenderer :translate-key="'ouroffer.table.guarantees.title'" />
                        <img :src=validationPicto />
                    </th>
                    <td class="items">
                        <TranslateRenderer :translate-key="'ouroffer.table.guarantees.items1'" />
                    </td>
                    <td class="description">
                        <TranslateRenderer :translate-key="'ouroffer.table.guarantees.description1'" />
                    </td>
                </tr>
                <tr>
                    <td class="items">
                        <TranslateRenderer :translate-key="'ouroffer.table.guarantees.items2'" />
                    </td>
                    <td class="description">
                        <TranslateRenderer :translate-key="'ouroffer.table.guarantees.description2'" />
                    </td>
                </tr>
                <tr>
                    <td class="items">
                        <TranslateRenderer :translate-key="'ouroffer.table.guarantees.items3'" />
                    </td>
                    <td class="description">
                        <TranslateRenderer :translate-key="'ouroffer.table.guarantees.description3'" />
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<style scoped lang="scss">
section {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding-top: 75px;

    header {
        display: flex;
        flex-direction: column;
        gap: 1em;
        align-items: center;
        justify-content: center;
        margin-bottom: 2em;

        h1 {
            text-align: center;
        }

        h2 {
            font-family: $font-family-roboto;
            font-size: 16pt;
            font-weight: normal;
        }
    }

    table {
        border-collapse: collapse;
        line-height: 1.5;

        td,
        th {
            text-align: center;
            vertical-align: middle;
            border: 1px solid black;
            padding: 0.4em 2em;

            img {
                margin-top: 0.4em;
                width: 4em;
            }
        }

        .category {
            font-weight: normal;
            font-size: 15pt;
            font-family: $font-family-roboto;
        }

        .items {
            font-size: 13pt;
            font-family: $font-family-roboto;
            font-weight: 600;
        }

        .description {
            font-size: 13pt;
            font-weight: 400;
            font-family: $font-family-roboto;
        }
    }
}
</style>