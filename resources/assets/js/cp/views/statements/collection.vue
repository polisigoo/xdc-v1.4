<template>
    <div class="main">
        <div class="my-3">Statement Month : <input type="month"></div>

        <table class="w-100 px-2 my-3">
            <tr>
                <th>R2H id</th>
                <th>Title</th>
                <th>Views</th>
                <th>CPV</th>
                <th>Total Revenue</th>
            </tr>
            <tr>
                <td>1810003</td>
                <td>Kuch Khoyi Khoyi Baatein</td>
                <td>12,546</td>
                <td>&#8377;19.00</td>
                <td>&#8377;238,374.00</td>
            </tr>
            <tr>
                <td>1810354</td>
                <td>Ramdhanu - the rainbow</td>
                <td>8,754</td>
                <td>&#8377;17.87</td>
                <td>&#8377;156,433.98</td>
            </tr>
            <tr>
                <td class="border-0"></td>
                <td class="border-0"></td>
                <td class="border-0"></td>
                <td class="border-0 long py-2"> Total Collection =</td>
                <td>&#8377;394,807.98</td>
            </tr>
            <tr>
                <td class="border-0"></td>
                <td class="border-0"></td>
                <td class="border-0"></td>
                <td class="border-0 long py-2"> Less 18% GST =</td>
                <td>&#8377;71,065.44</td>
            </tr>
            <tr>
                <td class="border-0"></td>
                <td class="border-0"></td>
                <td class="border-0"></td>
                <td class="border-0 long py-2"> Total anticipated revenue =</td>
                <td>&#8377;323,742.54</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "collection"
    }
</script>

<style scoped>
    th{
        background-color: #ccc;
    }
    th, td{
        border: 1px solid #111;
        text-align: center;
        padding: 8px;
    }
    .b{
        border: 1px solid #818181;
    }
    .long{
        max-width: 195px;
        text-align: center;
        padding: 0px;
        margin: 0px;
        position: relative;
        z-index: 3;
        display: block;
    }
</style>