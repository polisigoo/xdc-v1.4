<template>
    <div class="d-flex col-11">
        <div class="col-3 box mr-3 pb-3 ">
            <div class="d-flex w-100 justify-content-center">
                <img src="/themes/default/img/admin/movie.svg" class="icons" alt="report" width="60px">
            </div>
            <div class="text-center">20</div>
            <div class="text-center">Movies</div>
        </div>
        <div class="col-3 box mr-3">
            <div class="d-flex w-100 justify-content-center">
                <img src="/themes/default/img/admin/series.svg" class="icons"  alt="series" width="60px">
            </div>
            <div class="text-center">20</div>
            <div class="text-center">Series</div>
        </div>
        <div class="col-3 mr-3 box ">
            <div class="d-flex w-100 justify-content-center">
                <img src="/themes/default/img/admin/tv.svg" class="icons" alt="tv" width="60px">
            </div>
            <div class="text-center">20</div>
            <div class="text-center">Live Streaming</div>
        </div>
        <div class="col-3 box mr-3">
            <div class="d-flex w-100 justify-content-center">
                <img src="/themes/default/img/admin/users.svg" class="icons" alt="tv" width="60px">
            </div>
            <div class="text-center">20</div>
            <div class="text-center text-muted">Users</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "dashboard"
    }
</script>

<style scoped>
    .icons{
        width: 50%;
        height: 50%;
    }
</style>