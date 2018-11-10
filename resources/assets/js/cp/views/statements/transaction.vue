<template>
    <div class="main">
        <table class="w-100 px-2 my-3">
            <tr>
                <th>Date</th>
                <th>Txn Id</th>
                <th>Reference</th>
                <th>Amount</th>
                <th>Status</th>
            </tr>
            <tr>
                <td>7 Sep 18</td>
                <td>207756466</td>
                <td>Sep - 2018</td>
                <td>&#8377;43,589.00 </td>
                <td>Success</td>
            </tr>
            <tr>
                <td>7 Oct 18</td>
                <td>207789982</td>
                <td>Oct - 2018</td>
                <td>&#8377;26,577.00 </td>
                <td>Success</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "transaction"
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
</style>