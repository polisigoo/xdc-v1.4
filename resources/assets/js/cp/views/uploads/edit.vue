<template xmlns="http://www.w3.org/1999/html">
    <div class="main w-100 px-3">
        <div class="d-flex w-75 form-group">
            <div class="col-md-3 col-5 d-flex align-items-center">
                <label class="fw mb-0">R2H id:</label>
            </div>
            <div class="col-md-6 col-7">
                <input type="text" class="myform-control" value="R2H-1234-1234" disabled>
            </div>
        </div>

        <div class="w-75 form-group d-flex">
            <div class="col-md-3 col-5 d-flex align-items-center">
                <label class="fw mb-0">Content Type:</label>
            </div>
            <div class="col-md-6 col-7">
                <select name="type" v-on:change="changeForm" class="myform-control">
                    <option value="movie">Movie</option>
                    <option value="tv">Live Streaming</option>
                </select>
            </div>
        </div>

        <div class="my-3">
            <label>1. ARTWORK - POSTERS <br><small class="px-3">Image size = 500 x 750px [ Width x Height]</small></label>

            <div class="d-flex w-75">
                <button class="bor mx-2 py-3 px-5 col-4 bg-light">+</button>
                <button class="bor mx-2 py-3 px-5 col-4 bg-light">+</button>
                <button class="bor mx-2 py-3 px-5 col-4 bg-light">+</button>
            </div>
        </div>
        <div class="my-3">
            <label>2. ARTWORK - BACKDROPS <br> <small class="px-3">Image size = 1280 x 750px [ Width x Height]</small></label>

            <div class="d-flex w-75">
                <button class="bor mx-2 py-3 px-5 col-4 bg-light">+</button>
                <button class="bor mx-2 py-3 px-5 col-4 bg-light">+</button>
            </div>
        </div>
        <div class="my-3">
            <label>
                3. CENSOR CERTIFICATES
            </label>

            <div class="d-flex w-75">
                <button class="bor mx-2 py-3 px-5 col-4 bg-light ">+</button>
            </div>
        </div>

        <div class="w-75 my-3">
            <span>4. CONTENT CLIPS</span>
            <div class="bor-dash h d-flex justify-content-center align-items-center my-3">+</div>
        </div>
        <div>
            <input type="checkbox" > <sup class="fw">*</sup><span class="small">I agreed to the <span class="col-blue">terms & conditions</span> for submitting the content to R2H Live.</span>
        </div>
        <button class="btn btn-secondary text-white my-3 px-4">SAVE</button>
    </div>
</template>

<script>
    export default {
        name: "edit"
    }
</script>

<style scoped>
    .h{
        height: 150px;
    }
    .col-blue{
        color: blue;
    }
    .bor{
        border: 1px solid #888888;
    }
    .bor-dash{
        border: 1px dashed #888888;
    }
    .small{
        font: 14px;
    }
</style>