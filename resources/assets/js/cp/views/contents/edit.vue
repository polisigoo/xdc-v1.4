<template>
    <div class="main w-100 px-2">
        <div class="col-md-8 col-10 form-group">
            <label class="fw">R2H Id :</label>
            <input type="text" class="myform-control" value="1810003">
        </div>

        <div class="col-md-8 col-10 form-group">
            <label class="fw">Content Type <span class="col-red">*</span></label>
            <input type="text" class="myform-control" value="MOVIE">
        </div>

        <div class="col-md-8 col-10 form-group">
            <label class="fw">Title Name <span class="col-red">*</span></label>
            <input type="text" class="myform-control">
        </div>

        <div class="my-2 col-md-8 col-10 form-group d-flex flex-wrap">
            <label class="fw">Genres <span class="col-red">*</span></label>
            <div class="d-flex flex-wrap">
                <span class="px-2 mb-2"><input type="checkbox" name="action"> Action</span>
                <span class="px-2 mb-2"><input type="checkbox" name="adventure"> Adventure</span>
                <span class="px-2 mb-2"><input type="checkbox" name="animation"> Animation</span>
                <span class="px-2 mb-2"><input type="checkbox" name="Biography"> Biography</span>
                <span class="px-2 mb-2"><input type="checkbox" name="comedy"> Comedy</span>
                <span class="px-2 mb-2"><input type="checkbox" name="crime"> Crime</span>
                <span class="px-2 mb-2"><input type="checkbox" name="documentary"> Documentary</span>
                <span class="px-2 mb-2"><input type="checkbox" name="drama"> Drama</span>
                <span class="px-2 mb-2"><input type="checkbox" name="family"> Family</span>
                <span class="px-2 mb-2"><input type="checkbox" name="fantasy"> Fantasy</span>
                <span class="px-2 mb-2"><input type="checkbox" name="film Noir"> Film Noir</span>
                <span class="px-2 mb-2"><input type="checkbox" name="history"> History</span>
                <span class="px-2 mb-2"><input type="checkbox" name="horror"> Horror</span>
                <span class="px-2 mb-2"><input type="checkbox" name="music"> Music</span>
                <span class="px-2 mb-2"><input type="checkbox" name="musical"> Musical</span>
                <span class="px-2 mb-2"><input type="checkbox" name="mystery"> Mystery</span>
                <span class="px-2 mb-2"><input type="checkbox" name="romance"> Romance</span>
                <span class="px-2 mb-2"><input type="checkbox" name="sci-Fi"> Sci-Fi</span>
                <span class="px-2 mb-2"><input type="checkbox" name="short"> Short</span>
                <span class="px-2 mb-2"><input type="checkbox" name="action"> Sport</span>
                <span class="px-2 mb-2"><input type="checkbox" name="action"> Musical</span>
                <span class="px-2 mb-2"><input type="checkbox" name="superhero"> Superhero</span>
                <span class="px-2 mb-2"><input type="checkbox" name="thriller"> Thriller</span>
                <span class="px-2 mb-2"><input type="checkbox" name="war"> War</span>
                <span class="px-2 mb-2"><input type="checkbox" name="western"> Western</span>
            </div>

        </div>

        <div class="col-md-5 col-7 form-group">
            <label class="fw">Overviews <span class="col-red">*</span></label>
            <textarea class="py-2 pr-5 bor myform-control"></textarea>
        </div>

        <div class="my-2 form-group row col-md-8 col-10 d-flex flex-wrap">
            <div class="col-4">
                <label class="fw">Released Type <span class="col-red">*</span></label>
                <input type="text"  class="myform-control">
            </div>
            <div class="col-4">
                <label class="fw">Released Date</label>
                <input type="date" class="myform-control">
            </div>
            <div class="col-4">
                <label class="fw">Released Year <span class="col-red">*</span></label>
                <input type="text" class="myform-control">
            </div>
        </div>

        <div class="my-2 row col-md-8 col-10 form-group  d-sm-flex flex-sm-wrap">
            <div class="col-6">
                <label class="fw">Run Time</label>
                <input class="myform-control">
            </div>
            <div class="col-6">
                <label class="fw">Rating Systems</label>
                <input class="myform-control">
            </div>
        </div>

        <div class="col-md-8 col-10 form-group">
            <label class="fw">Director's Name</label>
            <input class="myform-control" type="text" name="dirname">
        </div>

        <div class="d-flex col-md-8 col-10 row form-group">
            <div class="col-6">
                <label class="fw">Casts <span class="col-red">*</span></label>
                <div>
                    <input class="myform-control mb-2" type="text">
                    <input class="myform-control mb-2" type="text">
                    <input class="myform-control mb-2" type="text">
                    <input class="myform-control mb-2" type="text">
                </div>
                <button class="px-5 w-100 bor btn btn-light my-1 py-1">+</button>
            </div>
            <div class="col-4">
                <label class="fw">Cast Images</label>
                <button class="px-5 w-100 bor btn btn-light mb-2">+</button>
                <button class="px-5 w-100 bor btn btn-light mb-2">+</button>
                <button class="px-5 w-100 bor btn btn-light mb-2">+</button>
                <button class="px-5 w-100 bor btn btn-light mb-2">+</button>
            </div>
        </div>

        <div class="col-md-8 col-10 form-group">
            <label class="fw">Facebook Page</label>
            <input type="text" class="myform-control">
        </div>


        <div class="col-md-8 col-10 form-group">
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