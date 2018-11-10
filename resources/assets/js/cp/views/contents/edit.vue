<template>
    <div class="main w-100 px-2">
        <div class="col-md-8 col-10 form-group">
            <span class="fw">R2H Id :</span>
            <input type="text" class="myform-control" value="1810003">
        </div>

        <div class="col-md-8 col-10 form-group">
            <div class="fw">Content Type <span class="col-red">*</span></div>
            <input type="text" value="MOVIE">
        </div>

        <div class="col-md-8 col-10 form-group">
            <div class="fw">Title Name <span class="col-red">*</span></div>
            <input type="text">
        </div>

        <div class="my-2 col-md-8 col-10 games d-flex flex-wrap">
            <span class="fw">Genres <span class="col-red">*</span></span>
            <div class="d-flex flex-wrap">
                <span class="px-2"><input type="checkbox" name="action"> Action</span>
                <span class="px-2"><input type="checkbox" name="adventure"> Adventure</span>
                <span class="px-2"><input type="checkbox" name="animation"> Animation</span>
                <span class="px-2"><input type="checkbox" name="Biography"> Biography</span>
                <span class="px-2"><input type="checkbox" name="comedy"> Comedy</span>
                <span class="px-2"><input type="checkbox" name="crime"> Crime</span>
                <span class="px-2"><input type="checkbox" name="documentary"> Documentary</span>
                <span class="px-2"><input type="checkbox" name="drama"> Drama</span>
                <span class="px-2"><input type="checkbox" name="family"> Family</span>
                <span class="px-2"><input type="checkbox" name="fantasy"> Fantasy</span>
                <span class="px-2"><input type="checkbox" name="film Noir"> Film Noir</span>
                <span class="px-2"><input type="checkbox" name="history"> History</span>
                <span class="px-2"><input type="checkbox" name="horror"> Horror</span>
                <span class="px-2"><input type="checkbox" name="music"> Music</span>
                <span class="px-2"><input type="checkbox" name="musical"> Musical</span>
                <span class="px-2"><input type="checkbox" name="mystery"> Mystery</span>
                <span class="px-2"><input type="checkbox" name="romance"> Romance</span>
                <span class="px-2"><input type="checkbox" name="sci-Fi"> Sci-Fi</span>
                <span class="px-2"><input type="checkbox" name="short"> Short</span>
                <span class="px-2"><input type="checkbox" name="action"> Sport</span>
                <span class="px-2"><input type="checkbox" name="action"> Musical</span>
                <span class="px-2"><input type="checkbox" name="superhero"> Superhero</span>
                <span class="px-2"><input type="checkbox" name="thriller"> Thriller</span>
                <span class="px-2"><input type="checkbox" name="war"> War</span>
                <span class="px-2"><input type="checkbox" name="western"> Western</span>
            </div>

        </div>

        <div class="col-md-8 col-10 form-group">
            <div class="fw">Overviews <span class="col-red">*</span></div>
            <textarea class="py-2 pr-5 bor w-50"></textarea>
        </div>

        <div class="my-2 d-sm-flex flex-sm-wrap">
            <div class="my-2 mx-1 p-0">
                <div class="fw">Released Type <span class="col-red">*</span></div>
                <input class="py-2 pr-5 bor">
            </div>
            <div class="my-2 mx-1 p-0">
                <div class="fw">Released Date</div>
                <input class="py-2 pr-5 bor">
            </div>
            <div class="my-2 mx-1 p-0">
                <div class="fw">Released Year <span class="col-red">*</span></div>
                <input class="py-2 pr-5 bor">
            </div>
        </div>

        <div class="my-2 d-sm-flex flex-sm-wrap">
            <div class="my-2  mx-1 p-0 mx-2">
                <div class="fw">Run Time</div>
                <input class="py-2 pr-5 bor">
            </div>
            <div class="my-2  mx-1 p-0 mx-2">
                <div class="fw">Rating Systems</div>
                <input class="py-2 pr-5 bor">
            </div>
        </div>

        <div class="my-2">
            <div class="fw">Director's Name</div>
            <input class="w-50" type="text" name="dirname">
        </div>

        <div class="d-flex my-2">
            <div class="w-50">
                <span class="fw">Casts <span class="col-red">*</span></span>
                <div>
                    <input class="w-100 my-1" type="text">
                    <input class="w-100 my-1" type="text">
                    <input class="w-100 my-1" type="text">
                    <input class="w-100 my-1" type="text">
                    <input class="w-100 my-1" type="text">
                </div>
                <button class="px-5 w-100 bor btn btn-light my-1 py-1">+</button>
            </div>
            <div class="w-25 px-1">
                <span class="fw">Cast Images</span>
                <button class="px-5 w-100 bor btn btn-light">+</button>
                <button class="px-5 w-100 bor btn btn-light">+</button>
                <button class="px-5 w-100 bor btn btn-light">+</button>
                <button class="px-5 w-100 bor btn btn-light">+</button>
            </div>
        </div>

        <div class="my-2">
            <div class="fw">Facebook Page</div>
            <input type="text" class="w-75">
        </div>


        <div class="mt-3">
            <input type="checkbox"> <sup class="col-red fw">*</sup><span class="small">I agreed to the <span class="col-blue">terms &
              conditions</span> for submitting the content to R2H Live.</span>
        </div>

        <button class="btn btn-secondary text-white my-3 px-3">Submit</button>
    </div>
</template>

<script>
    export default {
        name: "edit"
    }
</script>

<style scoped>
    .bor{
        border: 1px solid #888888;
    }
    .col-red{
        color: rgb(216, 0, 0);
    }
    .col-blue{
        color: blue;
    }
    .fw{
        font-weight: 700;
    }
    .h{
        height: 10px;
    }
</style>