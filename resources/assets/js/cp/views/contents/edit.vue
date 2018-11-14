<template>
    <div class="main w-100 px-2">
        <!--<breadcrumb v-bind:paths="paths"></breadcrumb>-->
        <div class="col-md-10 col-12 row form-group d-flex">
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

        <div class="col-md-10 col-12 row form-group d-flex mb-3">
            <div class="col-md-3 col-5 d-flex align-items-center">
                <label class="fw mb-0">Content id:</label>
            </div>
            <div class="col-md-6 col-7">
                <input type="text" class="myform-control" value="R2H-1234-1234" disabled>
            </div>
        </div>
        <div v-if="movie">
            <div class="col-md-10 col-12 form-group">
                <label class="fw">Title Name <span class="col-red">*</span></label>
                <input type="text" class="myform-control">
            </div>

            <div class="my-2 col-md-9 col-12 form-group d-flex flex-wrap">
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

            <div class="col-md-10 col-12 form-group">
                <label class="fw">Overviews <span class="col-red">*</span></label>
                <textarea class="py-2 pr-5 bor-strong myform-control" style="height: 160px;"></textarea>
            </div>

            <div class="my-2 form-group row col-md-10 col-12 d-flex flex-wrap">
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

            <div class="my-2 row col-md-10 col-12 form-group  d-sm-flex flex-sm-wrap">
                <div class="col-6">
                    <label class="fw">Run Time</label>
                    <input class="myform-control">
                </div>
                <div class="col-6">
                    <label class="fw">Rating Systems</label>
                    <input class="myform-control">
                </div>
            </div>

            <div class="col-md-10 col-12 form-group">
                <label class="fw">Director's Name</label>
                <input class="myform-control" type="text" name="dirname">
            </div>

            <div class="d-flex col-md-10 col-12 row form-group">
                <div class="form-group col-12" id="castMenu">
                    <div class="d-flex">
                        <label class="fw col-9 ml-0 pl-0">Casts <span class="col-red">*</span></label>
                        <label class="fw col-3">Cast Images</label>
                    </div>
                    <div class="form-group d-flex">
                        <input class="myform-control col-9" type="text">
                        <button type="button" class="ml-3 col-3 strong-border btn btn-light">+</button>
                    </div>
                    <div class="form-group d-flex">
                        <input class="myform-control col-9" type="text">
                        <button type="button" class="ml-3 col-3 strong-border btn btn-light">+</button>
                    </div>
                    <div class="form-group d-flex">
                        <input class="myform-control  col-9" type="text">
                        <button type="button" class="ml-3 col-3 strong-border btn btn-light">+</button>
                    </div>
                    <div class="form-group d-flex">
                        <input class="myform-control col-9" type="text">
                        <button type="button" class=" ml-3 col-3 strong-border btn btn-light">+</button>
                    </div>
                </div>
                <div class="col-12">
                    <button type="button" class="px-5 col-6 strong-border btn btn-light my-1 py-1" @click="addCastElements">+</button>
                </div>
            </div>
        </div>

        <div v-if="tv">
            <div class="form-group col-12 col-md-10 row form-group d-flex">
                <div class="col-md-3 col-5 d-flex align-items-center">
                    <label for="channelName" class="fw mb-0">Channel Name <span class="col-red">*</span></label>
                </div>
                <div class="col-md-6 col-7">
                    <input type="text" name="channelName" class="myform-control" id="channelName">
                </div>
            </div>
            <div class="form-group col-12 col-md-10">
                <label for="artwork" class="text-uppercase mb-0 d-block fw">Artwork - channel logo <span class="col-red">*</span></label>
                <small>image size = 500px x 400px</small>
                <input type="file" style="display: none">
                <button class="w-100  d-flex justify-content-center py-4" style="outline: none; cursor: pointer; border: solid 1.5px #CCCCCC; background-color: #ffffff;">
                    <i class="fa fa-plus" style="color: #CCCCCC"></i>
                </button>
            </div>
            <div class="form-group col-12 col-md-10">
                <label class="fw">Genres<span class="col-red">*</span></label>
                <div class="d-flex flex-wrap">
                    <span class="px-2 mb-2">
                        <input type="checkbox"> &nbsp;Animated
                    </span>
                    <span class="px-2 mb-2">
                        <input type="checkbox"> &nbsp;Cooking
                    </span>
                    <span class="px-2 mb-2">
                        <input type="checkbox"> &nbsp;Children
                    </span>
                    <span class="px-2 mb-2">
                        <input type="checkbox"> &nbsp;DIY
                    </span>
                    <span class="px-2 mb-2">
                        <input type="checkbox"> &nbsp;Educational
                    </span>
                    <span class="px-2 mb-2">
                        <input type="checkbox"> &nbsp;Lifestyle
                    </span>
                    <span class="px-2 mb-2">
                        <input type="checkbox"> &nbsp;Movies
                    </span>
                    <span class="px-2 mb-2">
                        <input type="checkbox"> &nbsp;Music
                    </span>
                    <span class="px-2 mb-2">
                        <input type="checkbox"> &nbsp;News
                    </span>
                    <span class="px-2 mb-2">
                        <input type="checkbox"> &nbsp;Reality
                    </span>
                    <span class="px-2 mb-2">
                        <input type="checkbox"> &nbsp;Religious
                    </span>
                    <span class="px-2 mb-2">
                        <input type="checkbox"> &nbsp;Science
                    </span>
                    <span class="px-2 mb-2">
                        <input type="checkbox"> &nbsp;Shopping
                    </span>
                    <span class="px-2 mb-2">
                        <input type="checkbox"> &nbsp;Sports
                    </span>
                </div>
            </div>
            <div class="form-group col-12 col-md-10">
                <label for="overview" class="d-block fw">
                    Overviews<span class="col-red">*</span>
                </label>
                <textarea name="overview" class="myform-control" style="height: 160px" id=overview></textarea>
            </div>
            <div class="form-group col-12 col-md-10">
                <label for="director" class="text-capitalize fw">Channel editor/program director</label>
                <input type="text" id="director" class="myform-control">
            </div>
        </div>

        <div class="col-md-10 col-12 form-group">
            <label for="facebook" class="fw">Facebook Page</label>
            <input type="text" id="facebook" class="myform-control">
        </div>

        <div class="col-md-10 col-12 form-group">
            <input type="checkbox"> <sup class="col-red fw">*</sup><span class="small">I agreed to the <span class="col-blue">terms &
              conditions</span> for submitting the content to R2H Live.</span>
        </div>

        <div class="col-12">
            <button class="btn btn-secondary text-white my-3 px-3">Submit</button>
        </div>
     </div>
</template>

<script>
    import breadcrumb from '../layout/breadcrumb';
    export default {
        name: "edit",
        components: {
            breadcrumb,
        },
        data(){
            return{
                movie: true,
                tv: false,
                paths: location.pathname.substring(1).split("/"),
            }
        },
        methods: {
            addCastElements (){
                let cont = document.createElement('div');
                cont.classList = "form-group d-flex";
                let nameInp = document.createElement('input');
                nameInp.type = "text";
                nameInp.classList = "myform-control col-9";
                cont.appendChild(nameInp);
                let butt = document.createElement('button');
                butt.classList = "ml-3 col-3 strong-border btn btn-light";
                butt.innerText = "+";
                cont.appendChild(butt);

                document.querySelector('#castMenu').appendChild(cont);
            },
            changeForm(){
                this.movie = !this.movie;
                this.tv = !this.tv;
            },
        },
    }
</script>