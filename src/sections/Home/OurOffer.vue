<script setup lang="ts">
</script>

<template>
    <section class="container">
        <header>
            <h1>Notre offre</h1>
            <h2>Découvrez notre offre pour vous accompagner dans votre projet d'affichage environnemental du début
                jusqu'à la fin.</h2>
        </header>
        <table>
            <tbody>
                <tr>
                    <th class="category">Bootstrap</th>
                    <td class="items">Kick-off & Setup</td>
                    <td class="description">Configuration standard de CloudAssess<br />Réponse à vos questions</td>
                </tr>
                <tr>
                    <th class="category">Scoping</th>
                    <td class="items">
                        Vision & Roadmap<br />
                        Communication & Risques<br />
                        Rôles & Responsabilités<br />
                        Architecture & Data
                    </td>
                    <td class="description">Cadrer le projet d'affichage de l'empreinte<br />
                        Pour intégrer et exécuter dans les meilleures conditions</td>
                </tr>
                <tr>
                    <th class="category">Exécution</th>
                    <td class="items">
                        Pipeline automatisée<br />
                        Modèles ACV custom
                    </td>
                    <td class="description">Intégration à votre infrastructure spécifique<br />
                        Développement de modèles spécifiques</td>
                </tr>
                <tr>
                    <th rowspan="3" class="category">Garanties</th>
                    <td class="items">Support</td>
                    <td class="description">Réponse à vos questions (expertise ACV, fonctionnalités de l'outil
                        CloudAssess)</td>
                </tr>
                <tr>
                    <td class="items">Resilio Database</td>
                    <td class="description">Données à introduire dans le modèle</td>
                </tr>
                <tr>
                    <td class="items">Certification</td>
                    <td class="description">Vérification de leur conformité aux normes et standards</td>
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
            font-size: 40px;
            font-family: $font-family-roboto;
        }

        h2 {
            font-size: 22px;
            font-weight: normal;
        }
    }

    table {
        border-collapse: collapse;
        font-family: $font-family-lexend;
        line-height: 1.5;

        td,
        th {
            text-align: center;
            vertical-align: middle;
            border: 1px solid black;
            padding: 0.4em 2em;
        }

        .category {
            font-weight: bolder;
            font-size: large;
            font-family: $font-family-roboto;
        }

        .items {
            font-size: large;
        }
    }
}
</style>