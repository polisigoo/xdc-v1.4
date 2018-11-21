webpackJsonp([2],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/cp/views/activation.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "activation"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/cp/views/app.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layout_sidebar__ = __webpack_require__("./resources/assets/js/cp/views/layout/sidebar.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layout_sidebar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__layout_sidebar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_breadcrumb__ = __webpack_require__("./resources/assets/js/cp/views/layout/breadcrumb.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_breadcrumb___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__layout_breadcrumb__);
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    name: "app",
    components: {
        sidebar: __WEBPACK_IMPORTED_MODULE_0__layout_sidebar___default.a,
        breadcrumb: __WEBPACK_IMPORTED_MODULE_1__layout_breadcrumb___default.a
    },
    data: function data() {
        return {
            paths: this.removeEmpty(this.$route.path.substring(1).split("/"))
        };
    },
    beforeCreate: function beforeCreate() {
        axios.get('/getAuth').then(function (res) {
            localStorage.setItem('user', JSON.stringify(res.data.user));
        }).catch(function (err) {});
    },

    watch: {
        $route: function $route() {
            this.paths = this.removeEmpty(this.$route.path.substring(1).split("/"));
        }
    },
    created: function created() {
        console.log(this.paths);
    },

    methods: {
        removeEmpty: function removeEmpty(arr) {
            var newArray = [];
            arr.forEach(function (a) {
                if (a.length > 0) {
                    newArray.push(a);
                }
            });
            return newArray;
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/cp/views/contents/edit.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layout_breadcrumb__ = __webpack_require__("./resources/assets/js/cp/views/layout/breadcrumb.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layout_breadcrumb___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__layout_breadcrumb__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    name: "edit",
    components: {
        breadcrumb: __WEBPACK_IMPORTED_MODULE_0__layout_breadcrumb___default.a
    },
    data: function data() {
        return {
            movie: true,
            tv: false,
            csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            paths: location.pathname.substring(1).split("/")
        };
    },

    methods: {
        addCastElements: function addCastElements() {
            var cont = document.createElement('div');
            cont.classList = "form-group d-flex";
            var nameInp = document.createElement('input');
            nameInp.type = "text";
            nameInp.classList = "myform-control col-9";
            cont.appendChild(nameInp);
            var butt = document.createElement('button');
            butt.classList = "ml-3 col-3 strong-border btn btn-light";
            butt.innerText = "+";
            cont.appendChild(butt);

            document.querySelector('#castMenu').appendChild(cont);
        },
        changeForm: function changeForm() {
            this.movie = !this.movie;
            this.tv = !this.tv;
        },
        sendReq: function sendReq() {}
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/cp/views/contents/show.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "show"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/cp/views/dashboard.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "dashboard"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/cp/views/layout/breadcrumb.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "breadcrumb",
    props: ['paths']

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/cp/views/layout/sidebar.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "sidebar",
    data: function data() {
        return {};
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/cp/views/settings.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "settings",
    data: function data() {
        return {
            user: JSON.parse(localStorage.user),
            name: "",
            nameDisplay: true,
            emailDisplay: true,
            phoneDisplay: true,
            passwordDisplay: true,
            email: "",
            phone: "",
            password: "",
            csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        };
    },
    created: function created() {
        var _this = this;

        if (!localStorage.user) {
            axios.get("/getAuth").then(function (res) {
                _this.user = res.data.user;
                localStorage.setItem('user', JSON.stringify(res.data.user));
            });
        }
        this.name = this.user.first_name + " " + this.user.last_name;
        this.email = this.user.email;
        this.phone = this.user.mobile_number;
    },

    methods: {
        makeEditable: function makeEditable(id) {
            var input = document.querySelector("#" + id);
            this.toggleLastP(input.parentElement);
            this.toggleInputDisplay(input);
            if (id === "nameForm") {
                this.nameDisplay = false;
            }
            if (id === "emailForm") {
                this.emailDisplay = false;
            }
            if (id === "phoneForm") {
                this.phoneDisplay = false;
            }
            if (id === "passwordForm") {
                this.passwordDisplay = false;
            }
        },
        toggleInputDisplay: function toggleInputDisplay(inp) {
            inp.style.display === "none" ? inp.style.display = "block" : inp.style.display = "none";
        },
        toggleLastP: function toggleLastP(parent) {
            if (parent.querySelector('p:last-of-type').style.display === "none") {
                parent.querySelector('p:last-of-type').style.display = "block";
            } else {
                parent.querySelector('p:last-of-type').style.display = "none";
            }
        },
        save: function save(id) {
            var _this2 = this;

            var formData = new FormData();
            var input = document.querySelector("#" + id);
            var parent = input.parentElement;
            formData.set('csrf_token', this.csrf);
            if (id === "nameForm") {
                formData.set('name', this.name);
                this.nameDisplay = true;
            }
            if (id === "emailForm") {
                formData.set('email', this.email);
                this.emailDisplay = true;
            }
            if (id === "phoneForm") {
                formData.set('mobile', this.phone);
                this.phoneDisplay = true;
            }
            if (id === "passwordForm") {
                formData.set('password', this.password);
                this.passwordDisplay = true;
            }
            this.toggleInputDisplay(input);
            this.toggleLastP(parent);

            axios.post("/settings/update", formData).then(function (res) {
                swal("Successful", res.data.message, "success");

                axios.get("/getAuth").then(function (res) {
                    _this2.user = res.data.user;
                    localStorage.setItem('user', JSON.stringify(res.data.user));
                });
            }).catch(function (err) {
                swal("Oops", err.response.data.message, "error");
                console.log(err);
            });
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/cp/views/statements/app.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "app"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/cp/views/statements/collection.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "collection"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/cp/views/statements/transaction.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "transaction"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/cp/views/uploads/edit.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "edit"
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-176d3e02\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/cp/views/statements/transaction.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nth[data-v-176d3e02]{\n    background-color: #ccc;\n}\nth[data-v-176d3e02], td[data-v-176d3e02]{\n    border: 1px solid #111;\n    text-align: center;\n    padding: 8px;\n}\n.b[data-v-176d3e02]{\n    border: 1px solid #818181;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-204e11d3\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/cp/views/contents/show.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2992692a\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/cp/views/statements/collection.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nth[data-v-2992692a]{\n    background-color: #ccc;\n}\nth[data-v-2992692a], td[data-v-2992692a]{\n    border: 1px solid #111;\n    text-align: center;\n    padding: 8px;\n}\n.b[data-v-2992692a]{\n    border: 1px solid #818181;\n}\n.long[data-v-2992692a]{\n    max-width: 195px;\n    text-align: center;\n    padding: 0px;\n    margin: 0px;\n    position: relative;\n    z-index: 3;\n    display: block;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2d198032\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/cp/views/settings.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.mar-top[data-v-2d198032]{\n    margin-top: 20px;\n    margin-bottom: 20px;\n}\n.fw[data-v-2d198032]{\n    font-weight: 600;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-55a74189\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/cp/views/layout/breadcrumb.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5e8e5076\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/cp/views/statements/app.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-730cb715\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/cp/views/dashboard.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.icons[data-v-730cb715]{\n    width: 50%;\n    height: 50%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-779605f6\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/cp/views/uploads/edit.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.h[data-v-779605f6]{\n    height: 150px;\n}\n.col-blue[data-v-779605f6]{\n    color: blue;\n}\n.bor[data-v-779605f6]{\n    border: 1px solid #888888;\n}\n.bor-dash[data-v-779605f6]{\n    border: 1px dashed #888888;\n}\n.small[data-v-779605f6]{\n    font: 14px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a7569c36\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/cp/views/activation.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.span[data-v-a7569c36]{\n    height: 10px;\n    width: 30px;\n    border-radius: 20px;\n}\n.head-content[data-v-a7569c36]{\n    background-color: #52ace0;\n}\n.fs-11[data-v-a7569c36]{\n    font-size: 11px;\n}\n.fs-12[data-v-a7569c36]{\n    font-size: 12px;\n}\n.fs-18[data-v-a7569c36]{\n    font-size: 18px;\n}\n.fs-24[data-v-a7569c36]{\n    font-size: 24px;\n    font-weight: 600;\n}\n.dgrey[data-v-a7569c36]{\n    color: #949494;\n}\n.bg-1[data-v-a7569c36]{\n    background-color: #e7ebf6;\n}\n.bg-2[data-v-a7569c36]{\n    background-color: #74bce7;\n}\n.fw[data-v-a7569c36]{\n    font-weight: 600;\n}\n.col-red[data-v-a7569c36]{\n    color: red;\n    font-weight: 600;\n}\n.document input[data-v-a7569c36]{\n    display: none;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ca99c374\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/cp/views/layout/sidebar.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/sweetalert/dist/sweetalert.min.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.swal=e():t.swal=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=8)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o="swal-button";e.CLASS_NAMES={MODAL:"swal-modal",OVERLAY:"swal-overlay",SHOW_MODAL:"swal-overlay--show-modal",MODAL_TITLE:"swal-title",MODAL_TEXT:"swal-text",ICON:"swal-icon",ICON_CUSTOM:"swal-icon--custom",CONTENT:"swal-content",FOOTER:"swal-footer",BUTTON_CONTAINER:"swal-button-container",BUTTON:o,CONFIRM_BUTTON:o+"--confirm",CANCEL_BUTTON:o+"--cancel",DANGER_BUTTON:o+"--danger",BUTTON_LOADING:o+"--loading",BUTTON_LOADER:o+"__loader"},e.default=e.CLASS_NAMES},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getNode=function(t){var e="."+t;return document.querySelector(e)},e.stringToNode=function(t){var e=document.createElement("div");return e.innerHTML=t.trim(),e.firstChild},e.insertAfter=function(t,e){var n=e.nextSibling;e.parentNode.insertBefore(t,n)},e.removeNode=function(t){t.parentElement.removeChild(t)},e.throwErr=function(t){throw t=t.replace(/ +(?= )/g,""),"SweetAlert: "+(t=t.trim())},e.isPlainObject=function(t){if("[object Object]"!==Object.prototype.toString.call(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype},e.ordinalSuffixOf=function(t){var e=t%10,n=t%100;return 1===e&&11!==n?t+"st":2===e&&12!==n?t+"nd":3===e&&13!==n?t+"rd":t+"th"}},function(t,e,n){"use strict";function o(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}Object.defineProperty(e,"__esModule",{value:!0}),o(n(25));var r=n(26);e.overlayMarkup=r.default,o(n(27)),o(n(28)),o(n(29));var i=n(0),a=i.default.MODAL_TITLE,s=i.default.MODAL_TEXT,c=i.default.ICON,l=i.default.FOOTER;e.iconMarkup='\n  <div class="'+c+'"></div>',e.titleMarkup='\n  <div class="'+a+'"></div>\n',e.textMarkup='\n  <div class="'+s+'"></div>',e.footerMarkup='\n  <div class="'+l+'"></div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1);e.CONFIRM_KEY="confirm",e.CANCEL_KEY="cancel";var r={visible:!0,text:null,value:null,className:"",closeModal:!0},i=Object.assign({},r,{visible:!1,text:"Cancel",value:null}),a=Object.assign({},r,{text:"OK",value:!0});e.defaultButtonList={cancel:i,confirm:a};var s=function(t){switch(t){case e.CONFIRM_KEY:return a;case e.CANCEL_KEY:return i;default:var n=t.charAt(0).toUpperCase()+t.slice(1);return Object.assign({},r,{text:n,value:t})}},c=function(t,e){var n=s(t);return!0===e?Object.assign({},n,{visible:!0}):"string"==typeof e?Object.assign({},n,{visible:!0,text:e}):o.isPlainObject(e)?Object.assign({visible:!0},n,e):Object.assign({},n,{visible:!1})},l=function(t){for(var e={},n=0,o=Object.keys(t);n<o.length;n++){var r=o[n],a=t[r],s=c(r,a);e[r]=s}return e.cancel||(e.cancel=i),e},u=function(t){var n={};switch(t.length){case 1:n[e.CANCEL_KEY]=Object.assign({},i,{visible:!1});break;case 2:n[e.CANCEL_KEY]=c(e.CANCEL_KEY,t[0]),n[e.CONFIRM_KEY]=c(e.CONFIRM_KEY,t[1]);break;default:o.throwErr("Invalid number of 'buttons' in array ("+t.length+").\n      If you want more than 2 buttons, you need to use an object!")}return n};e.getButtonListOpts=function(t){var n=e.defaultButtonList;return"string"==typeof t?n[e.CONFIRM_KEY]=c(e.CONFIRM_KEY,t):Array.isArray(t)?n=u(t):o.isPlainObject(t)?n=l(t):!0===t?n=u([!0,!0]):!1===t?n=u([!1,!1]):void 0===t&&(n=e.defaultButtonList),n}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(2),i=n(0),a=i.default.MODAL,s=i.default.OVERLAY,c=n(30),l=n(31),u=n(32),f=n(33);e.injectElIntoModal=function(t){var e=o.getNode(a),n=o.stringToNode(t);return e.appendChild(n),n};var d=function(t){t.className=a,t.textContent=""},p=function(t,e){d(t);var n=e.className;n&&t.classList.add(n)};e.initModalContent=function(t){var e=o.getNode(a);p(e,t),c.default(t.icon),l.initTitle(t.title),l.initText(t.text),f.default(t.content),u.default(t.buttons,t.dangerMode)};var m=function(){var t=o.getNode(s),e=o.stringToNode(r.modalMarkup);t.appendChild(e)};e.default=m},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),r={isOpen:!1,promise:null,actions:{},timer:null},i=Object.assign({},r);e.resetState=function(){i=Object.assign({},r)},e.setActionValue=function(t){if("string"==typeof t)return a(o.CONFIRM_KEY,t);for(var e in t)a(e,t[e])};var a=function(t,e){i.actions[t]||(i.actions[t]={}),Object.assign(i.actions[t],{value:e})};e.setActionOptionsFor=function(t,e){var n=(void 0===e?{}:e).closeModal,o=void 0===n||n;Object.assign(i.actions[t],{closeModal:o})},e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(3),i=n(0),a=i.default.OVERLAY,s=i.default.SHOW_MODAL,c=i.default.BUTTON,l=i.default.BUTTON_LOADING,u=n(5);e.openModal=function(){o.getNode(a).classList.add(s),u.default.isOpen=!0};var f=function(){o.getNode(a).classList.remove(s),u.default.isOpen=!1};e.onAction=function(t){void 0===t&&(t=r.CANCEL_KEY);var e=u.default.actions[t],n=e.value;if(!1===e.closeModal){var i=c+"--"+t;o.getNode(i).classList.add(l)}else f();u.default.promise.resolve(n)},e.getState=function(){var t=Object.assign({},u.default);return delete t.promise,delete t.timer,t},e.stopLoading=function(){for(var t=document.querySelectorAll("."+c),e=0;e<t.length;e++){t[e].classList.remove(l)}}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){(function(e){t.exports=e.sweetAlert=n(9)}).call(e,n(7))},function(t,e,n){(function(e){t.exports=e.swal=n(10)}).call(e,n(7))},function(t,e,n){"undefined"!=typeof window&&n(11),n(16);var o=n(23).default;t.exports=o},function(t,e,n){var o=n(12);"string"==typeof o&&(o=[[t.i,o,""]]);var r={insertAt:"top"};r.transform=void 0;n(14)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){e=t.exports=n(13)(void 0),e.push([t.i,'.swal-icon--error{border-color:#f27474;-webkit-animation:animateErrorIcon .5s;animation:animateErrorIcon .5s}.swal-icon--error__x-mark{position:relative;display:block;-webkit-animation:animateXMark .5s;animation:animateXMark .5s}.swal-icon--error__line{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal-icon--error__line--left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.swal-icon--error__line--right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}@-webkit-keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@-webkit-keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}@keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}.swal-icon--warning{border-color:#f8bb86;-webkit-animation:pulseWarning .75s infinite alternate;animation:pulseWarning .75s infinite alternate}.swal-icon--warning__body{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}.swal-icon--warning__body,.swal-icon--warning__dot{position:absolute;left:50%;background-color:#f8bb86}.swal-icon--warning__dot{width:7px;height:7px;border-radius:50%;margin-left:-4px;bottom:-11px}@-webkit-keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}@keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.swal-icon--success{border-color:#a5dc86}.swal-icon--success:after,.swal-icon--success:before{content:"";border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal-icon--success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.swal-icon--success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px;-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}.swal-icon--success__ring{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal-icon--success__hide-corners{width:5px;height:90px;background-color:#fff;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal-icon--success__line{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal-icon--success__line--tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation:animateSuccessTip .75s;animation:animateSuccessTip .75s}.swal-icon--success__line--long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:animateSuccessLong .75s;animation:animateSuccessLong .75s}@-webkit-keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@-webkit-keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}.swal-icon--info{border-color:#c9dae1}.swal-icon--info:before{width:5px;height:29px;bottom:17px;border-radius:2px;margin-left:-2px}.swal-icon--info:after,.swal-icon--info:before{content:"";position:absolute;left:50%;background-color:#c9dae1}.swal-icon--info:after{width:7px;height:7px;border-radius:50%;margin-left:-3px;top:19px}.swal-icon{width:80px;height:80px;border-width:4px;border-style:solid;border-radius:50%;padding:0;position:relative;box-sizing:content-box;margin:20px auto}.swal-icon:first-child{margin-top:32px}.swal-icon--custom{width:auto;height:auto;max-width:100%;border:none;border-radius:0}.swal-icon img{max-width:100%;max-height:100%}.swal-title{color:rgba(0,0,0,.65);font-weight:600;text-transform:none;position:relative;display:block;padding:13px 16px;font-size:27px;line-height:normal;text-align:center;margin-bottom:0}.swal-title:first-child{margin-top:26px}.swal-title:not(:first-child){padding-bottom:0}.swal-title:not(:last-child){margin-bottom:13px}.swal-text{font-size:16px;position:relative;float:none;line-height:normal;vertical-align:top;text-align:left;display:inline-block;margin:0;padding:0 10px;font-weight:400;color:rgba(0,0,0,.64);max-width:calc(100% - 20px);overflow-wrap:break-word;box-sizing:border-box}.swal-text:first-child{margin-top:45px}.swal-text:last-child{margin-bottom:45px}.swal-footer{text-align:right;padding-top:13px;margin-top:13px;padding:13px 16px;border-radius:inherit;border-top-left-radius:0;border-top-right-radius:0}.swal-button-container{margin:5px;display:inline-block;position:relative}.swal-button{background-color:#7cd1f9;color:#fff;border:none;box-shadow:none;border-radius:5px;font-weight:600;font-size:14px;padding:10px 24px;margin:0;cursor:pointer}.swal-button[not:disabled]:hover{background-color:#78cbf2}.swal-button:active{background-color:#70bce0}.swal-button:focus{outline:none;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(43,114,165,.29)}.swal-button[disabled]{opacity:.5;cursor:default}.swal-button::-moz-focus-inner{border:0}.swal-button--cancel{color:#555;background-color:#efefef}.swal-button--cancel[not:disabled]:hover{background-color:#e8e8e8}.swal-button--cancel:active{background-color:#d7d7d7}.swal-button--cancel:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(116,136,150,.29)}.swal-button--danger{background-color:#e64942}.swal-button--danger[not:disabled]:hover{background-color:#df4740}.swal-button--danger:active{background-color:#cf423b}.swal-button--danger:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(165,43,43,.29)}.swal-content{padding:0 20px;margin-top:20px;font-size:medium}.swal-content:last-child{margin-bottom:20px}.swal-content__input,.swal-content__textarea{-webkit-appearance:none;background-color:#fff;border:none;font-size:14px;display:block;box-sizing:border-box;width:100%;border:1px solid rgba(0,0,0,.14);padding:10px 13px;border-radius:2px;transition:border-color .2s}.swal-content__input:focus,.swal-content__textarea:focus{outline:none;border-color:#6db8ff}.swal-content__textarea{resize:vertical}.swal-button--loading{color:transparent}.swal-button--loading~.swal-button__loader{opacity:1}.swal-button__loader{position:absolute;height:auto;width:43px;z-index:2;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);text-align:center;pointer-events:none;opacity:0}.swal-button__loader div{display:inline-block;float:none;vertical-align:baseline;width:9px;height:9px;padding:0;border:none;margin:2px;opacity:.4;border-radius:7px;background-color:hsla(0,0%,100%,.9);transition:background .2s;-webkit-animation:swal-loading-anim 1s infinite;animation:swal-loading-anim 1s infinite}.swal-button__loader div:nth-child(3n+2){-webkit-animation-delay:.15s;animation-delay:.15s}.swal-button__loader div:nth-child(3n+3){-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}@keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}.swal-overlay{position:fixed;top:0;bottom:0;left:0;right:0;text-align:center;font-size:0;overflow-y:scroll;background-color:rgba(0,0,0,.4);z-index:10000;pointer-events:none;opacity:0;transition:opacity .3s}.swal-overlay:before{content:" ";display:inline-block;vertical-align:middle;height:100%}.swal-overlay--show-modal{opacity:1;pointer-events:auto}.swal-overlay--show-modal .swal-modal{opacity:1;pointer-events:auto;box-sizing:border-box;-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s;will-change:transform}.swal-modal{width:478px;opacity:0;pointer-events:none;background-color:#fff;text-align:center;border-radius:5px;position:static;margin:20px auto;display:inline-block;vertical-align:middle;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;z-index:10001;transition:opacity .2s,-webkit-transform .3s;transition:transform .3s,opacity .2s;transition:transform .3s,opacity .2s,-webkit-transform .3s}@media (max-width:500px){.swal-modal{width:calc(100% - 20px)}}@-webkit-keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}',""])},function(t,e){function n(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=o(r);return[n].concat(r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"})).concat([i]).join("\n")}return[n].join("\n")}function o(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var o=n(e,t);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){function o(t,e){for(var n=0;n<t.length;n++){var o=t[n],r=m[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(u(o.parts[i],e))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(u(o.parts[i],e));m[o.id]={id:o.id,refs:1,parts:a}}}}function r(t,e){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],a=e.base?i[0]+e.base:i[0],s=i[1],c=i[2],l=i[3],u={css:s,media:c,sourceMap:l};o[a]?o[a].parts.push(u):n.push(o[a]={id:a,parts:[u]})}return n}function i(t,e){var n=v(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=w[w.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),w.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function a(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=w.indexOf(t);e>=0&&w.splice(e,1)}function s(t){var e=document.createElement("style");return t.attrs.type="text/css",l(e,t.attrs),i(t,e),e}function c(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",l(e,t.attrs),i(t,e),e}function l(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function u(t,e){var n,o,r,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var l=h++;n=g||(g=s(e)),o=f.bind(null,n,l,!1),r=f.bind(null,n,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(e),o=p.bind(null,n,e),r=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(e),o=d.bind(null,n),r=function(){a(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}function f(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=x(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function d(t,e){var n=e.css,o=e.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function p(t,e,n){var o=n.css,r=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=y(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var m={},b=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),v=function(t){var e={};return function(n){return void 0===e[n]&&(e[n]=t.call(this,n)),e[n]}}(function(t){return document.querySelector(t)}),g=null,h=0,w=[],y=n(15);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=b()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=r(t,e);return o(n,e),function(t){for(var i=[],a=0;a<n.length;a++){var s=n[a],c=m[s.id];c.refs--,i.push(c)}if(t){o(r(t,e),e)}for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete m[c.id]}}}};var x=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r))return t;var i;return i=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},function(t,e,n){var o=n(17);"undefined"==typeof window||window.Promise||(window.Promise=o),n(21),String.prototype.includes||(String.prototype.includes=function(t,e){"use strict";return"number"!=typeof e&&(e=0),!(e+t.length>this.length)&&-1!==this.indexOf(t,e)}),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(t,e){if(null==this)throw new TypeError('"this" is null or not defined');var n=Object(this),o=n.length>>>0;if(0===o)return!1;for(var r=0|e,i=Math.max(r>=0?r:o-Math.abs(r),0);i<o;){if(function(t,e){return t===e||"number"==typeof t&&"number"==typeof e&&isNaN(t)&&isNaN(e)}(n[i],t))return!0;i++}return!1}}),"undefined"!=typeof window&&function(t){t.forEach(function(t){t.hasOwnProperty("remove")||Object.defineProperty(t,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){this.parentNode.removeChild(this)}})})}([Element.prototype,CharacterData.prototype,DocumentType.prototype])},function(t,e,n){(function(e){!function(n){function o(){}function r(t,e){return function(){t.apply(e,arguments)}}function i(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],f(t,this)}function a(t,e){for(;3===t._state;)t=t._value;if(0===t._state)return void t._deferreds.push(e);t._handled=!0,i._immediateFn(function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null===n)return void(1===t._state?s:c)(e.promise,t._value);var o;try{o=n(t._value)}catch(t){return void c(e.promise,t)}s(e.promise,o)})}function s(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof i)return t._state=3,t._value=e,void l(t);if("function"==typeof n)return void f(r(n,e),t)}t._state=1,t._value=e,l(t)}catch(e){c(t,e)}}function c(t,e){t._state=2,t._value=e,l(t)}function l(t){2===t._state&&0===t._deferreds.length&&i._immediateFn(function(){t._handled||i._unhandledRejectionFn(t._value)});for(var e=0,n=t._deferreds.length;e<n;e++)a(t,t._deferreds[e]);t._deferreds=null}function u(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}function f(t,e){var n=!1;try{t(function(t){n||(n=!0,s(e,t))},function(t){n||(n=!0,c(e,t))})}catch(t){if(n)return;n=!0,c(e,t)}}var d=setTimeout;i.prototype.catch=function(t){return this.then(null,t)},i.prototype.then=function(t,e){var n=new this.constructor(o);return a(this,new u(t,e,n)),n},i.all=function(t){var e=Array.prototype.slice.call(t);return new i(function(t,n){function o(i,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,function(t){o(i,t)},n)}e[i]=a,0==--r&&t(e)}catch(t){n(t)}}if(0===e.length)return t([]);for(var r=e.length,i=0;i<e.length;i++)o(i,e[i])})},i.resolve=function(t){return t&&"object"==typeof t&&t.constructor===i?t:new i(function(e){e(t)})},i.reject=function(t){return new i(function(e,n){n(t)})},i.race=function(t){return new i(function(e,n){for(var o=0,r=t.length;o<r;o++)t[o].then(e,n)})},i._immediateFn="function"==typeof e&&function(t){e(t)}||function(t){d(t,0)},i._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)},i._setImmediateFn=function(t){i._immediateFn=t},i._setUnhandledRejectionFn=function(t){i._unhandledRejectionFn=t},void 0!==t&&t.exports?t.exports=i:n.Promise||(n.Promise=i)}(this)}).call(e,n(18).setImmediate)},function(t,e,n){function o(t,e){this._id=t,this._clearFn=e}var r=Function.prototype.apply;e.setTimeout=function(){return new o(r.call(setTimeout,window,arguments),clearTimeout)},e.setInterval=function(){return new o(r.call(setInterval,window,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(window,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},n(19),e.setImmediate=setImmediate,e.clearImmediate=clearImmediate},function(t,e,n){(function(t,e){!function(t,n){"use strict";function o(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var o={callback:t,args:e};return l[c]=o,s(c),c++}function r(t){delete l[t]}function i(t){var e=t.callback,o=t.args;switch(o.length){case 0:e();break;case 1:e(o[0]);break;case 2:e(o[0],o[1]);break;case 3:e(o[0],o[1],o[2]);break;default:e.apply(n,o)}}function a(t){if(u)setTimeout(a,0,t);else{var e=l[t];if(e){u=!0;try{i(e)}finally{r(t),u=!1}}}}if(!t.setImmediate){var s,c=1,l={},u=!1,f=t.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(t);d=d&&d.setTimeout?d:t,"[object process]"==={}.toString.call(t.process)?function(){s=function(t){e.nextTick(function(){a(t)})}}():function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?function(){var e="setImmediate$"+Math.random()+"$",n=function(n){n.source===t&&"string"==typeof n.data&&0===n.data.indexOf(e)&&a(+n.data.slice(e.length))};t.addEventListener?t.addEventListener("message",n,!1):t.attachEvent("onmessage",n),s=function(n){t.postMessage(e+n,"*")}}():t.MessageChannel?function(){var t=new MessageChannel;t.port1.onmessage=function(t){a(t.data)},s=function(e){t.port2.postMessage(e)}}():f&&"onreadystatechange"in f.createElement("script")?function(){var t=f.documentElement;s=function(e){var n=f.createElement("script");n.onreadystatechange=function(){a(e),n.onreadystatechange=null,t.removeChild(n),n=null},t.appendChild(n)}}():function(){s=function(t){setTimeout(a,0,t)}}(),d.setImmediate=o,d.clearImmediate=r}}("undefined"==typeof self?void 0===t?this:t:self)}).call(e,n(7),n(20))},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(t){if(u===setTimeout)return setTimeout(t,0);if((u===n||!u)&&setTimeout)return u=setTimeout,setTimeout(t,0);try{return u(t,0)}catch(e){try{return u.call(null,t,0)}catch(e){return u.call(this,t,0)}}}function i(t){if(f===clearTimeout)return clearTimeout(t);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{return f(t)}catch(e){try{return f.call(null,t)}catch(e){return f.call(this,t)}}}function a(){b&&p&&(b=!1,p.length?m=p.concat(m):v=-1,m.length&&s())}function s(){if(!b){var t=r(a);b=!0;for(var e=m.length;e;){for(p=m,m=[];++v<e;)p&&p[v].run();v=-1,e=m.length}p=null,b=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function l(){}var u,f,d=t.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:n}catch(t){u=n}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(t){f=o}}();var p,m=[],b=!1,v=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];m.push(new c(t,e)),1!==m.length||b||r(s)},c.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=l,d.addListener=l,d.once=l,d.off=l,d.removeListener=l,d.removeAllListeners=l,d.emit=l,d.prependListener=l,d.prependOnceListener=l,d.listeners=function(t){return[]},d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(t,e,n){"use strict";n(22).polyfill()},function(t,e,n){"use strict";function o(t,e){if(void 0===t||null===t)throw new TypeError("Cannot convert first argument to object");for(var n=Object(t),o=1;o<arguments.length;o++){var r=arguments[o];if(void 0!==r&&null!==r)for(var i=Object.keys(Object(r)),a=0,s=i.length;a<s;a++){var c=i[a],l=Object.getOwnPropertyDescriptor(r,c);void 0!==l&&l.enumerable&&(n[c]=r[c])}}return n}function r(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:o})}t.exports={assign:o,polyfill:r}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(24),r=n(6),i=n(5),a=n(36),s=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if("undefined"!=typeof window){var n=a.getOpts.apply(void 0,t);return new Promise(function(t,e){i.default.promise={resolve:t,reject:e},o.default(n),setTimeout(function(){r.openModal()})})}};s.close=r.onAction,s.getState=r.getState,s.setActionValue=i.setActionValue,s.stopLoading=r.stopLoading,s.setDefaults=a.setDefaults,e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(0),i=r.default.MODAL,a=n(4),s=n(34),c=n(35),l=n(1);e.init=function(t){o.getNode(i)||(document.body||l.throwErr("You can only use SweetAlert AFTER the DOM has loaded!"),s.default(),a.default()),a.initModalContent(t),c.default(t)},e.default=e.init},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.MODAL;e.modalMarkup='\n  <div class="'+r+'"></div>',e.default=e.modalMarkup},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.OVERLAY,i='<div \n    class="'+r+'"\n    tabIndex="-1">\n  </div>';e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.ICON;e.errorIconMarkup=function(){var t=r+"--error",e=t+"__line";return'\n    <div class="'+t+'__x-mark">\n      <span class="'+e+" "+e+'--left"></span>\n      <span class="'+e+" "+e+'--right"></span>\n    </div>\n  '},e.warningIconMarkup=function(){var t=r+"--warning";return'\n    <span class="'+t+'__body">\n      <span class="'+t+'__dot"></span>\n    </span>\n  '},e.successIconMarkup=function(){var t=r+"--success";return'\n    <span class="'+t+"__line "+t+'__line--long"></span>\n    <span class="'+t+"__line "+t+'__line--tip"></span>\n\n    <div class="'+t+'__ring"></div>\n    <div class="'+t+'__hide-corners"></div>\n  '}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.CONTENT;e.contentMarkup='\n  <div class="'+r+'">\n\n  </div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.BUTTON_CONTAINER,i=o.default.BUTTON,a=o.default.BUTTON_LOADER;e.buttonMarkup='\n  <div class="'+r+'">\n\n    <button\n      class="'+i+'"\n    ></button>\n\n    <div class="'+a+'">\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n\n  </div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(4),r=n(2),i=n(0),a=i.default.ICON,s=i.default.ICON_CUSTOM,c=["error","warning","success","info"],l={error:r.errorIconMarkup(),warning:r.warningIconMarkup(),success:r.successIconMarkup()},u=function(t,e){var n=a+"--"+t;e.classList.add(n);var o=l[t];o&&(e.innerHTML=o)},f=function(t,e){e.classList.add(s);var n=document.createElement("img");n.src=t,e.appendChild(n)},d=function(t){if(t){var e=o.injectElIntoModal(r.iconMarkup);c.includes(t)?u(t,e):f(t,e)}};e.default=d},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),r=n(4),i=function(t){navigator.userAgent.includes("AppleWebKit")&&(t.style.display="none",t.offsetHeight,t.style.display="")};e.initTitle=function(t){if(t){var e=r.injectElIntoModal(o.titleMarkup);e.textContent=t,i(e)}},e.initText=function(t){if(t){var e=r.injectElIntoModal(o.textMarkup);e.textContent=t,i(e)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(4),i=n(0),a=i.default.BUTTON,s=i.default.DANGER_BUTTON,c=n(3),l=n(2),u=n(6),f=n(5),d=function(t,e,n){var r=e.text,i=e.value,d=e.className,p=e.closeModal,m=o.stringToNode(l.buttonMarkup),b=m.querySelector("."+a),v=a+"--"+t;b.classList.add(v),d&&b.classList.add(d),n&&t===c.CONFIRM_KEY&&b.classList.add(s),b.textContent=r;var g={};return g[t]=i,f.setActionValue(g),f.setActionOptionsFor(t,{closeModal:p}),b.addEventListener("click",function(){return u.onAction(t)}),m},p=function(t,e){var n=r.injectElIntoModal(l.footerMarkup);for(var o in t){var i=t[o],a=d(o,i,e);i.visible&&n.appendChild(a)}0===n.children.length&&n.remove()};e.default=p},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),r=n(4),i=n(2),a=n(5),s=n(6),c=n(0),l=c.default.CONTENT,u=function(t){t.addEventListener("input",function(t){var e=t.target,n=e.value;a.setActionValue(n)}),t.addEventListener("keyup",function(t){if("Enter"===t.key)return s.onAction(o.CONFIRM_KEY)}),setTimeout(function(){t.focus(),a.setActionValue("")},0)},f=function(t,e,n){var o=document.createElement(e),r=l+"__"+e;o.classList.add(r);for(var i in n){var a=n[i];o[i]=a}"input"===e&&u(o),t.appendChild(o)},d=function(t){if(t){var e=r.injectElIntoModal(i.contentMarkup),n=t.element,o=t.attributes;"string"==typeof n?f(e,n,o):e.appendChild(n)}};e.default=d},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(2),i=function(){var t=o.stringToNode(r.overlayMarkup);document.body.appendChild(t)};e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(5),r=n(6),i=n(1),a=n(3),s=n(0),c=s.default.MODAL,l=s.default.BUTTON,u=s.default.OVERLAY,f=function(t){t.preventDefault(),v()},d=function(t){t.preventDefault(),g()},p=function(t){if(o.default.isOpen)switch(t.key){case"Escape":return r.onAction(a.CANCEL_KEY)}},m=function(t){if(o.default.isOpen)switch(t.key){case"Tab":return f(t)}},b=function(t){if(o.default.isOpen)return"Tab"===t.key&&t.shiftKey?d(t):void 0},v=function(){var t=i.getNode(l);t&&(t.tabIndex=0,t.focus())},g=function(){var t=i.getNode(c),e=t.querySelectorAll("."+l),n=e.length-1,o=e[n];o&&o.focus()},h=function(t){t[t.length-1].addEventListener("keydown",m)},w=function(t){t[0].addEventListener("keydown",b)},y=function(){var t=i.getNode(c),e=t.querySelectorAll("."+l);e.length&&(h(e),w(e))},x=function(t){if(i.getNode(u)===t.target)return r.onAction(a.CANCEL_KEY)},_=function(t){var e=i.getNode(u);e.removeEventListener("click",x),t&&e.addEventListener("click",x)},k=function(t){o.default.timer&&clearTimeout(o.default.timer),t&&(o.default.timer=window.setTimeout(function(){return r.onAction(a.CANCEL_KEY)},t))},O=function(t){t.closeOnEsc?document.addEventListener("keyup",p):document.removeEventListener("keyup",p),t.dangerMode?v():g(),y(),_(t.closeOnClickOutside),k(t.timer)};e.default=O},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(3),i=n(37),a=n(38),s={title:null,text:null,icon:null,buttons:r.defaultButtonList,content:null,className:null,closeOnClickOutside:!0,closeOnEsc:!0,dangerMode:!1,timer:null},c=Object.assign({},s);e.setDefaults=function(t){c=Object.assign({},s,t)};var l=function(t){var e=t&&t.button,n=t&&t.buttons;return void 0!==e&&void 0!==n&&o.throwErr("Cannot set both 'button' and 'buttons' options!"),void 0!==e?{confirm:e}:n},u=function(t){return o.ordinalSuffixOf(t+1)},f=function(t,e){o.throwErr(u(e)+" argument ('"+t+"') is invalid")},d=function(t,e){var n=t+1,r=e[n];o.isPlainObject(r)||void 0===r||o.throwErr("Expected "+u(n)+" argument ('"+r+"') to be a plain object")},p=function(t,e){var n=t+1,r=e[n];void 0!==r&&o.throwErr("Unexpected "+u(n)+" argument ("+r+")")},m=function(t,e,n,r){var i=typeof e,a="string"===i,s=e instanceof Element;if(a){if(0===n)return{text:e};if(1===n)return{text:e,title:r[0]};if(2===n)return d(n,r),{icon:e};f(e,n)}else{if(s&&0===n)return d(n,r),{content:e};if(o.isPlainObject(e))return p(n,r),e;f(e,n)}};e.getOpts=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n={};t.forEach(function(e,o){var r=m(0,e,o,t);Object.assign(n,r)});var o=l(n);n.buttons=r.getButtonListOpts(o),delete n.button,n.content=i.getContentOpts(n.content);var u=Object.assign({},s,c,n);return Object.keys(u).forEach(function(t){a.DEPRECATED_OPTS[t]&&a.logDeprecation(t)}),u}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r={element:"input",attributes:{placeholder:""}};e.getContentOpts=function(t){var e={};return o.isPlainObject(t)?Object.assign(e,t):t instanceof Element?{element:t}:"input"===t?r:null}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.logDeprecation=function(t){var n=e.DEPRECATED_OPTS[t],o=n.onlyRename,r=n.replacement,i=n.subOption,a=n.link,s=o?"renamed":"deprecated",c='SweetAlert warning: "'+t+'" option has been '+s+".";if(r){c+=" Please use"+(i?' "'+i+'" in ':" ")+'"'+r+'" instead.'}var l="https://sweetalert.js.org";c+=a?" More details: "+l+a:" More details: "+l+"/guides/#upgrading-from-1x",console.warn(c)},e.DEPRECATED_OPTS={type:{replacement:"icon",link:"/docs/#icon"},imageUrl:{replacement:"icon",link:"/docs/#icon"},customClass:{replacement:"className",onlyRename:!0,link:"/docs/#classname"},imageSize:{},showCancelButton:{replacement:"buttons",link:"/docs/#buttons"},showConfirmButton:{replacement:"button",link:"/docs/#button"},confirmButtonText:{replacement:"button",link:"/docs/#button"},confirmButtonColor:{},cancelButtonText:{replacement:"buttons",link:"/docs/#buttons"},closeOnConfirm:{replacement:"button",subOption:"closeModal",link:"/docs/#button"},closeOnCancel:{replacement:"buttons",subOption:"closeModal",link:"/docs/#buttons"},showLoaderOnConfirm:{replacement:"buttons"},animation:{},inputType:{replacement:"content",link:"/docs/#content"},inputValue:{replacement:"content",link:"/docs/#content"},inputPlaceholder:{replacement:"content",link:"/docs/#content"},html:{replacement:"content",link:"/docs/#content"},allowEscapeKey:{replacement:"closeOnEsc",onlyRename:!0,link:"/docs/#closeonesc"},allowClickOutside:{replacement:"closeOnClickOutside",onlyRename:!0,link:"/docs/#closeonclickoutside"}}}])});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/timers-browserify/main.js").setImmediate, __webpack_require__("./node_modules/timers-browserify/main.js").clearImmediate))

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-176d3e02\",\"hasScoped\":true}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/cp/views/statements/transaction.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0, false, false)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main"
  }, [_c('table', {
    staticClass: "w-100 px-2 my-3"
  }, [_c('tr', [_c('th', [_vm._v("Date")]), _vm._v(" "), _c('th', [_vm._v("Txn Id")]), _vm._v(" "), _c('th', [_vm._v("Reference")]), _vm._v(" "), _c('th', [_vm._v("Amount")]), _vm._v(" "), _c('th', [_vm._v("Status")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("7 Sep 18")]), _vm._v(" "), _c('td', [_vm._v("207756466")]), _vm._v(" "), _c('td', [_vm._v("Sep - 2018")]), _vm._v(" "), _c('td', [_vm._v("₹43,589.00 ")]), _vm._v(" "), _c('td', [_vm._v("Success")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("7 Oct 18")]), _vm._v(" "), _c('td', [_vm._v("207789982")]), _vm._v(" "), _c('td', [_vm._v("Oct - 2018")]), _vm._v(" "), _c('td', [_vm._v("₹26,577.00 ")]), _vm._v(" "), _c('td', [_vm._v("Success")])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-176d3e02", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-204e11d3\",\"hasScoped\":true}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/cp/views/contents/show.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c("div")
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-204e11d3", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2992692a\",\"hasScoped\":true}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/cp/views/statements/collection.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0, false, false)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main"
  }, [_c('div', {
    staticClass: "my-3"
  }, [_vm._v("Statement Month : "), _c('input', {
    attrs: {
      "type": "month"
    }
  })]), _vm._v(" "), _c('table', {
    staticClass: "w-100 px-2 my-3"
  }, [_c('tr', [_c('th', [_vm._v("R2H id")]), _vm._v(" "), _c('th', [_vm._v("Title")]), _vm._v(" "), _c('th', [_vm._v("Views")]), _vm._v(" "), _c('th', [_vm._v("CPV")]), _vm._v(" "), _c('th', [_vm._v("Total Revenue")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("1810003")]), _vm._v(" "), _c('td', [_vm._v("Kuch Khoyi Khoyi Baatein")]), _vm._v(" "), _c('td', [_vm._v("12,546")]), _vm._v(" "), _c('td', [_vm._v("₹19.00")]), _vm._v(" "), _c('td', [_vm._v("₹238,374.00")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("1810354")]), _vm._v(" "), _c('td', [_vm._v("Ramdhanu - the rainbow")]), _vm._v(" "), _c('td', [_vm._v("8,754")]), _vm._v(" "), _c('td', [_vm._v("₹17.87")]), _vm._v(" "), _c('td', [_vm._v("₹156,433.98")])]), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "border-0"
  }), _vm._v(" "), _c('td', {
    staticClass: "border-0"
  }), _vm._v(" "), _c('td', {
    staticClass: "border-0"
  }), _vm._v(" "), _c('td', {
    staticClass: "border-0 long py-2"
  }, [_vm._v(" Total Collection =")]), _vm._v(" "), _c('td', [_vm._v("₹394,807.98")])]), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "border-0"
  }), _vm._v(" "), _c('td', {
    staticClass: "border-0"
  }), _vm._v(" "), _c('td', {
    staticClass: "border-0"
  }), _vm._v(" "), _c('td', {
    staticClass: "border-0 long py-2"
  }, [_vm._v(" Less 18% GST =")]), _vm._v(" "), _c('td', [_vm._v("₹71,065.44")])]), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "border-0"
  }), _vm._v(" "), _c('td', {
    staticClass: "border-0"
  }), _vm._v(" "), _c('td', {
    staticClass: "border-0"
  }), _vm._v(" "), _c('td', {
    staticClass: "border-0 long py-2"
  }, [_vm._v(" Total anticipated revenue =")]), _vm._v(" "), _c('td', [_vm._v("₹323,742.54")])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2992692a", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2d198032\",\"hasScoped\":true}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/cp/views/settings.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main"
  }, [_c('div', {
    staticClass: "d-flex justify-content-center"
  }, [_c('strong', [_vm._v("User ID: " + _vm._s(_vm.user.id))])]), _vm._v(" "), _c('form', {
    staticClass: "sub-main2",
    attrs: {
      "action": "#"
    }
  }, [_c('div', {
    staticClass: "d-flex py-2 border mar-top pr-1"
  }, [_c('div', {
    staticClass: "col-10"
  }, [_c('p', {
    staticClass: "fw m-0"
  }, [_vm._v("Name :")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.name),
      expression: "name"
    }],
    staticClass: "mt-2 myform-control col-md-8 col-10",
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "type": "text",
      "id": "nameForm"
    },
    domProps: {
      "value": (_vm.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.name = $event.target.value
      }
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "py-1 m-0"
  }, [_vm._v(_vm._s(_vm.user.first_name) + " " + _vm._s(_vm.user.last_name))])]), _vm._v(" "), _c('div', {
    staticClass: "col-2 d-flex justify-content-center align-items-center"
  }, [(_vm.nameDisplay) ? _c('button', {
    staticClass: "btn btn-outline-secondary btn-sm px-2 px-md-3 ",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.makeEditable('nameForm')
      }
    }
  }, [_vm._v("Edit")]) : _vm._e(), _vm._v(" "), (!_vm.nameDisplay) ? _c('button', {
    staticClass: "btn btn-outline-primary btn-sm px-2 px-md-3 ",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.save('nameForm')
      }
    }
  }, [_vm._v("Save")]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "d-flex py-2 border mar-top pr-1"
  }, [_c('div', {
    staticClass: "col-10"
  }, [_c('p', {
    staticClass: "fw m-0"
  }, [_vm._v("Email :")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.email),
      expression: "email"
    }],
    staticClass: "mt-2 myform-control col-md-8 col-10",
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "type": "email",
      "id": "emailForm"
    },
    domProps: {
      "value": (_vm.email)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.email = $event.target.value
      }
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "py-1 m-0"
  }, [_vm._v(_vm._s(_vm.user.email))])]), _vm._v(" "), _c('div', {
    staticClass: "col-2 d-flex justify-content-center align-items-center"
  }, [(_vm.emailDisplay) ? _c('button', {
    staticClass: "btn btn-outline-secondary btn-sm px-2 px-md-3 ",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.makeEditable('emailForm')
      }
    }
  }, [_vm._v("Edit")]) : _vm._e(), _vm._v(" "), (!_vm.emailDisplay) ? _c('button', {
    staticClass: "btn btn-outline-primary btn-sm px-2 px-md-3 ",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.save('emailForm')
      }
    }
  }, [_vm._v("Save")]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "d-flex py-2 border mar-top pr-1"
  }, [_c('div', {
    staticClass: "col-10"
  }, [_c('p', {
    staticClass: "fw m-0"
  }, [_vm._v("Mobile Phone :")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.phone),
      expression: "phone"
    }],
    staticClass: "mt-2 myform-control col-md-8 col-10",
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "type": "email",
      "id": "phoneForm"
    },
    domProps: {
      "value": (_vm.phone)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.phone = $event.target.value
      }
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "py-1 m-0"
  }, [_vm._v(_vm._s(_vm.user.mobile_number))])]), _vm._v(" "), _c('div', {
    staticClass: "col-2 d-flex justify-content-center align-items-center"
  }, [(_vm.phoneDisplay) ? _c('button', {
    staticClass: "btn btn-outline-secondary btn-sm px-2 px-md-3 ",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.makeEditable('phoneForm')
      }
    }
  }, [_vm._v("Edit")]) : _vm._e(), _vm._v(" "), (!_vm.phoneDisplay) ? _c('button', {
    staticClass: "btn btn-outline-primary btn-sm px-2 px-md-3 ",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.save('phoneForm')
      }
    }
  }, [_vm._v("Saves")]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "d-flex py-2 border mar-top pr-1"
  }, [_c('div', {
    staticClass: "col-10"
  }, [_c('p', {
    staticClass: "fw m-0"
  }, [_vm._v("Password :")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.password),
      expression: "password"
    }],
    staticClass: "mt-2 myform-control col-md-8 col-10",
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "type": "password",
      "id": "passwordForm"
    },
    domProps: {
      "value": (_vm.password)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.password = $event.target.value
      }
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "py-1 m-0"
  }, [_vm._v("********")])]), _vm._v(" "), _c('div', {
    staticClass: "col-2 d-flex justify-content-center align-items-center"
  }, [(_vm.passwordDisplay) ? _c('button', {
    staticClass: "btn btn-outline-secondary btn-sm px-2 px-md-3 ",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.makeEditable('passwordForm')
      }
    }
  }, [_vm._v("Edit")]) : _vm._e(), _vm._v(" "), (!_vm.passwordDisplay) ? _c('button', {
    staticClass: "btn btn-outline-primary btn-sm px-2 px-md-3 ",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        _vm.save('passwordForm')
      }
    }
  }, [_vm._v("Save")]) : _vm._e()])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2d198032", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2e23ca3c\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/cp/views/app.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "d-flex"
  }, [_c('sidebar'), _vm._v(" "), _c('div', {
    staticClass: "main-content pt-md-4 pt-2 ml-2 ml-md-4 px-2 px-md-1",
    staticStyle: {
      "width": "80%"
    }
  }, [_c('breadcrumb', {
    attrs: {
      "paths": _vm.paths
    }
  }), _vm._v(" "), _c('router-view')], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2e23ca3c", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-55a74189\",\"hasScoped\":true}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/cp/views/layout/breadcrumb.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "d-flex"
  }, [_c('p', {
    staticClass: "pr-2 pl-2 mygrey"
  }, [_vm._v("Your Account")]), _vm._v(" "), _vm._l((_vm.paths), function(path) {
    return _c('span', [_c('i', {
      staticClass: "fa fa-angle-right mygrey px-1"
    }), _vm._v(" "), _c('a', {
      staticClass: "pr-2 pl-2 mygrey text-capitalize",
      attrs: {
        "href": "#"
      }
    }, [_vm._v(_vm._s(path))])])
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-55a74189", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5e8e5076\",\"hasScoped\":true}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/cp/views/statements/app.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "sub-main1 d-flex my-4"
  }, [_c('router-link', {
    staticClass: "col-4 mx-auto btn btn-default b",
    attrs: {
      "to": {
        name: 'collection'
      }
    }
  }, [_vm._v("Collections")]), _vm._v(" "), _c('router-link', {
    staticClass: "col-4 mx-auto btn btn-light b",
    attrs: {
      "to": {
        name: 'transaction'
      }
    }
  }, [_vm._v("Transactions")])], 1), _vm._v(" "), _c('router-view')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5e8e5076", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-730cb715\",\"hasScoped\":true}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/cp/views/dashboard.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0, false, false)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "d-flex col-11"
  }, [_c('div', {
    staticClass: "col-3 box mr-3 pb-3 "
  }, [_c('div', {
    staticClass: "d-flex w-100 justify-content-center"
  }, [_c('img', {
    staticClass: "icons",
    attrs: {
      "src": "/themes/default/img/admin/movie.svg",
      "alt": "report",
      "width": "60px"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "text-center"
  }, [_vm._v("20")]), _vm._v(" "), _c('div', {
    staticClass: "text-center"
  }, [_vm._v("Movies")])]), _vm._v(" "), _c('div', {
    staticClass: "col-3 box mr-3"
  }, [_c('div', {
    staticClass: "d-flex w-100 justify-content-center"
  }, [_c('img', {
    staticClass: "icons",
    attrs: {
      "src": "/themes/default/img/admin/series.svg",
      "alt": "series",
      "width": "60px"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "text-center"
  }, [_vm._v("20")]), _vm._v(" "), _c('div', {
    staticClass: "text-center"
  }, [_vm._v("Series")])]), _vm._v(" "), _c('div', {
    staticClass: "col-3 mr-3 box "
  }, [_c('div', {
    staticClass: "d-flex w-100 justify-content-center"
  }, [_c('img', {
    staticClass: "icons",
    attrs: {
      "src": "/themes/default/img/admin/tv.svg",
      "alt": "tv",
      "width": "60px"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "text-center"
  }, [_vm._v("20")]), _vm._v(" "), _c('div', {
    staticClass: "text-center"
  }, [_vm._v("Live Streaming")])]), _vm._v(" "), _c('div', {
    staticClass: "col-3 box mr-3"
  }, [_c('div', {
    staticClass: "d-flex w-100 justify-content-center"
  }, [_c('img', {
    staticClass: "icons",
    attrs: {
      "src": "/themes/default/img/admin/users.svg",
      "alt": "tv",
      "width": "60px"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "text-center"
  }, [_vm._v("20")]), _vm._v(" "), _c('div', {
    staticClass: "text-center text-muted"
  }, [_vm._v("Users")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-730cb715", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-779605f6\",\"hasScoped\":true}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/cp/views/uploads/edit.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main w-100 px-3"
  }, [_vm._m(0, false, false), _vm._v(" "), _c('div', {
    staticClass: "w-75 form-group d-flex"
  }, [_vm._m(1, false, false), _vm._v(" "), _c('div', {
    staticClass: "col-md-6 col-7"
  }, [_c('select', {
    staticClass: "myform-control",
    attrs: {
      "name": "type"
    },
    on: {
      "change": _vm.changeForm
    }
  }, [_c('option', {
    attrs: {
      "value": "movie"
    }
  }, [_vm._v("Movie")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "tv"
    }
  }, [_vm._v("Live Streaming")])])])]), _vm._v(" "), _vm._m(2, false, false), _vm._v(" "), _vm._m(3, false, false), _vm._v(" "), _vm._m(4, false, false), _vm._v(" "), _vm._m(5, false, false), _vm._v(" "), _vm._m(6, false, false), _vm._v(" "), _c('button', {
    staticClass: "btn btn-secondary text-white my-3 px-4"
  }, [_vm._v("SAVE")])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "d-flex w-75 form-group"
  }, [_c('div', {
    staticClass: "col-md-3 col-5 d-flex align-items-center"
  }, [_c('label', {
    staticClass: "fw mb-0"
  }, [_vm._v("R2H id:")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6 col-7"
  }, [_c('input', {
    staticClass: "myform-control",
    attrs: {
      "type": "text",
      "value": "R2H-1234-1234",
      "disabled": ""
    }
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-md-3 col-5 d-flex align-items-center"
  }, [_c('label', {
    staticClass: "fw mb-0"
  }, [_vm._v("Content Type:")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "my-3"
  }, [_c('label', [_vm._v("1. ARTWORK - POSTERS "), _c('br'), _c('small', {
    staticClass: "px-3"
  }, [_vm._v("Image size = 500 x 750px [ Width x Height]")])]), _vm._v(" "), _c('div', {
    staticClass: "d-flex w-75"
  }, [_c('button', {
    staticClass: "bor mx-2 py-3 px-5 col-4 bg-light"
  }, [_vm._v("+")]), _vm._v(" "), _c('button', {
    staticClass: "bor mx-2 py-3 px-5 col-4 bg-light"
  }, [_vm._v("+")]), _vm._v(" "), _c('button', {
    staticClass: "bor mx-2 py-3 px-5 col-4 bg-light"
  }, [_vm._v("+")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "my-3"
  }, [_c('label', [_vm._v("2. ARTWORK - BACKDROPS "), _c('br'), _vm._v(" "), _c('small', {
    staticClass: "px-3"
  }, [_vm._v("Image size = 1280 x 750px [ Width x Height]")])]), _vm._v(" "), _c('div', {
    staticClass: "d-flex w-75"
  }, [_c('button', {
    staticClass: "bor mx-2 py-3 px-5 col-4 bg-light"
  }, [_vm._v("+")]), _vm._v(" "), _c('button', {
    staticClass: "bor mx-2 py-3 px-5 col-4 bg-light"
  }, [_vm._v("+")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "my-3"
  }, [_c('label', [_vm._v("\n            3. CENSOR CERTIFICATES\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "d-flex w-75"
  }, [_c('button', {
    staticClass: "bor mx-2 py-3 px-5 col-4 bg-light "
  }, [_vm._v("+")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "w-75 my-3"
  }, [_c('span', [_vm._v("4. CONTENT CLIPS")]), _vm._v(" "), _c('div', {
    staticClass: "bor-dash h d-flex justify-content-center align-items-center my-3"
  }, [_vm._v("+")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('input', {
    attrs: {
      "type": "checkbox"
    }
  }), _vm._v(" "), _c('sup', {
    staticClass: "fw"
  }, [_vm._v("*")]), _c('span', {
    staticClass: "small"
  }, [_vm._v("I agreed to the "), _c('span', {
    staticClass: "col-blue"
  }, [_vm._v("terms & conditions")]), _vm._v(" for submitting the content to R2H Live.")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-779605f6", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-a7569c36\",\"hasScoped\":true}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/cp/views/activation.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0, false, false)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main py-2 px-2 col-md-12"
  }, [_c('section', [_c('div', {
    staticClass: "head-content py-2 px-2"
  }, [_c('div', {
    staticClass: "fs-24 text-white"
  }, [_vm._v("Getting Started with R2H Live")]), _vm._v(" "), _c('div', {
    staticClass: "span px-5 bg-2 my-2"
  }), _vm._v(" "), _c('div', {
    staticClass: "text-white my-2"
  }, [_vm._v("\n                You are currently in test mode. Feel free to explore the dashboard or do the following:\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-7 col-md-4 d-flex bg-1 px-0"
  }, [_c('div', {
    staticClass: "col-2 px-0 d-flex align-items-center justify-content-center"
  }, [_c('i', {
    staticClass: "fa fa-book text-danger fs-24"
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-9 px-0 py-2"
  }, [_c('div', {
    staticClass: "fs-12"
  }, [_vm._v("Activate your account "), _c('span', {
    staticClass: "dgrey pl-1"
  }, [_vm._v("74%")])]), _vm._v(" "), _c('div', {
    staticClass: "fs-11 dgrey"
  }, [_vm._v("Complete the Activation form to activate the account")])]), _vm._v(" "), _c('div', {
    staticClass: "col-1 px-2 d-flex align-items-center"
  }, [_c('i', {
    staticClass: "fa fa-angle-right mygrey px-1"
  })])])])]), _vm._v(" "), _c('section', [_c('form', {
    staticClass: "mt-4"
  }, [_c('div', {
    staticClass: "fw fs-18 px-3 my-3"
  }, [_vm._v("CONTACT INFO")]), _vm._v(" "), _c('div', {
    staticClass: "d-flex"
  }, [_c('div', {
    staticClass: "form-group col-6"
  }, [_c('label', {
    attrs: {
      "for": "fname"
    }
  }, [_vm._v("First Name")]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "fname",
      "name": "fname"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group pl-3 col-6"
  }, [_c('label', {
    attrs: {
      "for": "lname"
    }
  }, [_vm._v("Last Name")]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "lname",
      "name": "lname"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-10"
  }, [_c('label', {
    attrs: {
      "for": "email"
    }
  }, [_vm._v("Email")]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "email",
      "id": "email",
      "name": "email"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group pl-3 col-10"
  }, [_c('label', {
    attrs: {
      "for": "company-name"
    }
  }, [_vm._v("Company / Production Name")]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "company-name",
      "name": "company-name"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "d-flex"
  }, [_c('div', {
    staticClass: "form-group col-6"
  }, [_c('label', {
    attrs: {
      "for": "number"
    }
  }, [_vm._v("Mobile / Contact Number")]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "number",
      "name": "number"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group pl-3 col-6"
  }, [_c('label', {
    attrs: {
      "for": "number2"
    }
  }, [_vm._v("Alternative Number")]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "number2",
      "name": "number2"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group pl-3"
  }, [_c('input', {
    staticClass: "form-control my-2",
    attrs: {
      "type": "text",
      "id": "address2",
      "name": "address2"
    }
  }), _vm._v(" "), _c('input', {
    staticClass: "form-control my-2",
    attrs: {
      "type": "text",
      "id": "address3",
      "name": "address3"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "d-flex row"
  }, [_c('div', {
    staticClass: "d-flex flex-column col-6"
  }, [_c('input', {
    staticClass: "form-control mb-2",
    attrs: {
      "type": "text",
      "name": "states",
      "id": "states",
      "placeholder": "States"
    }
  }), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "location",
      "id": "location",
      "placeholder": "Location : City/Town/District"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "d-flex flex-column col-6"
  }, [_c('input', {
    staticClass: "form-control mb-2",
    attrs: {
      "type": "number",
      "name": "pin",
      "id": "pin",
      "placeholder": "Pin Code"
    }
  }), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "country",
      "id": "country",
      "placeholder": "Country : Country Name"
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "px-3 col-12 col-md-8"
  }, [_c('div', {
    staticClass: "fw fs-18 my-3"
  }, [_vm._v("BANK ACCOUNT")]), _vm._v(" "), _c('div', {
    staticClass: "form-group d-flex"
  }, [_c('label', {
    staticClass: "w-75 text-right mr-4",
    attrs: {
      "for": "IFSC"
    }
  }, [_vm._v("Branch IFSC Code "), _c('span', {
    staticClass: "col-red"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "IFSC",
      "id": "IFSC"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group d-flex"
  }, [_c('label', {
    staticClass: "w-75 text-right mr-4",
    attrs: {
      "for": "account-number"
    }
  }, [_vm._v("Account Number "), _c('span', {
    staticClass: "col-red"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "number",
      "id": "account-number"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group d-flex"
  }, [_c('label', {
    staticClass: "w-75 mr-4 text-right",
    attrs: {
      "for": "account-number2"
    }
  }, [_vm._v("Re-Enter Account Number "), _c('span', {
    staticClass: "col-red"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "number",
      "id": "account-number2"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group d-flex"
  }, [_c('label', {
    staticClass: "w-75 text-right mr-4",
    attrs: {
      "for": "beneficiary-name"
    }
  }, [_vm._v("Beneficiary Name "), _c('span', {
    staticClass: "col-red"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "beneficiary-name"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "document px-3 col-12 col-md-8"
  }, [_c('div', {
    staticClass: "fw fs-18 my-3"
  }, [_vm._v("BANK ACCOUNT")]), _vm._v(" "), _c('div', {
    staticClass: "form-group d-flex"
  }, [_c('label', {
    staticClass: "w-25 text-left ml-4"
  }, [_vm._v("Identity Proof")]), _vm._v(" "), _c('div', {
    staticClass: "w-50"
  }, [_c('button', {
    staticClass: "form-control w-100",
    attrs: {
      "type": "button"
    }
  }, [_c('i', {
    staticClass: "fa fa-plus",
    attrs: {
      "aria-hidden": "true"
    }
  })]), _vm._v(" "), _c('input', {
    attrs: {
      "type": "file",
      "name": ""
    }
  }), _vm._v(" "), _c('small', {
    staticClass: "dgrey"
  }, [_vm._v("Upload the scan copy of Govt identity - Driving License / Aadhar / Passport / Voter ID / Other Registration")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group d-flex"
  }, [_c('label', {
    staticClass: "w-25 text-left ml-4",
    attrs: {
      "for": "pan-card"
    }
  }, [_vm._v("PAN Card")]), _vm._v(" "), _c('button', {
    staticClass: "form-control w-50",
    attrs: {
      "type": "button",
      "id": "pan-card"
    }
  }, [_c('i', {
    staticClass: "fa fa-plus",
    attrs: {
      "aria-hidden": "true"
    }
  })]), _vm._v(" "), _c('input', {
    attrs: {
      "type": "file",
      "name": "pan-card"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group d-flex"
  }, [_c('label', {
    staticClass: "w-25 text-left ml-4",
    attrs: {
      "for": "passport"
    }
  }, [_vm._v("Passport Photo")]), _vm._v(" "), _c('button', {
    staticClass: "form-control w-50",
    attrs: {
      "type": "button",
      "id": "passport"
    }
  }, [_c('i', {
    staticClass: "fa fa-plus",
    attrs: {
      "aria-hidden": "true"
    }
  })]), _vm._v(" "), _c('input', {
    attrs: {
      "type": "file",
      "name": "passport"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group d-flex"
  }, [_c('label', {
    staticClass: "w-25 text-left ml-4",
    attrs: {
      "for": "cancelled-cheque"
    }
  }, [_vm._v("Cancelled Cheque")]), _vm._v(" "), _c('button', {
    staticClass: "form-control w-50",
    attrs: {
      "type": "button",
      "id": "cancelled-cheque"
    }
  }, [_c('i', {
    staticClass: "fa fa-plus",
    attrs: {
      "aria-hidden": "true"
    }
  })]), _vm._v(" "), _c('input', {
    attrs: {
      "type": "file",
      "name": "cancelled-cheque"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group d-flex"
  }, [_c('label', {
    staticClass: "w-25 text-left ml-4"
  }, [_vm._v("Other Documents")]), _vm._v(" "), _c('div', {
    staticClass: "w-50"
  }, [_c('button', {
    staticClass: "form-control w-100",
    attrs: {
      "type": "button"
    }
  }, [_c('i', {
    staticClass: "fa fa-plus",
    attrs: {
      "aria-hidden": "true"
    }
  })]), _vm._v(" "), _c('input', {
    attrs: {
      "type": "file",
      "name": ""
    }
  }), _vm._v(" "), _c('small', {
    staticClass: "dgrey"
  }, [_vm._v("Upload the scan copy of any other documents if any like Certificates / Awards / Other Private Registration / Accreditations\n                            Registration")])])])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a7569c36", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-ca99c374\",\"hasScoped\":true}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/cp/views/layout/sidebar.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('nav', {
    staticClass: "d-flex flex-column mynav pt-4 "
  }, [_c('h6', {}, [_c('router-link', {
    staticClass: "d-block nav-link   mygrey px-3",
    attrs: {
      "to": {
        name: 'dashboard'
      }
    }
  }, [_vm._v("Dashboard")])], 1), _vm._v(" "), _c('h6', {}, [_c('router-link', {
    staticClass: "d-block nav-link  mygrey px-3",
    attrs: {
      "to": {
        name: 'activation'
      }
    }
  }, [_vm._v("Account Activation")])], 1), _vm._v(" "), _c('h6', {}, [_c('router-link', {
    staticClass: "d-block nav-link  mygrey px-3",
    attrs: {
      "to": {
        name: 'contentEdit'
      }
    }
  }, [_vm._v("Content")])], 1), _vm._v(" "), _c('h6', {}, [_c('router-link', {
    staticClass: "d-block nav-link  mygrey px-3",
    attrs: {
      "to": {
        name: 'upload'
      }
    }
  }, [_vm._v("Uploads")])], 1), _vm._v(" "), _c('h6', {}, [_c('router-link', {
    staticClass: "d-block nav-link  mygrey px-3",
    attrs: {
      "to": {}
    }
  }, [_vm._v("Report")])], 1), _vm._v(" "), _c('h6', {}, [_c('router-link', {
    staticClass: "d-block nav-link  mygrey px-3",
    attrs: {
      "to": {
        name: 'collection'
      }
    }
  }, [_vm._v("Statement")])], 1), _vm._v(" "), _c('h6', {}, [_c('router-link', {
    staticClass: "d-block nav-link  mygrey px-3",
    attrs: {
      "to": {}
    }
  }, [_vm._v("FAQs")])], 1), _vm._v(" "), _c('h6', {}, [_c('router-link', {
    staticClass: "d-block nav-link  mygrey px-3",
    attrs: {
      "to": {}
    }
  }, [_vm._v("Legals")])], 1), _vm._v(" "), _c('h6', {}, [_c('router-link', {
    staticClass: "d-block nav-link  mygrey px-3",
    attrs: {
      "to": {}
    }
  }, [_vm._v("Support Tickets")])], 1), _vm._v(" "), _c('h6', {}, [_c('router-link', {
    staticClass: "d-block nav-link  mygrey px-3",
    attrs: {
      "to": {
        name: 'settings'
      }
    }
  }, [_vm._v("Settings")])], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ca99c374", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-d8055340\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/cp/views/contents/edit.vue":
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main w-100 px-2"
  }, [_c('form', {
    attrs: {
      "action": "/content/create",
      "enctype": "multipart/form-data",
      "method": "post",
      "id": "reqForm"
    },
    on: {
      "submit": _vm.sendReq
    }
  }, [_c('input', {
    attrs: {
      "type": "hidden",
      "name": "_token"
    },
    domProps: {
      "value": _vm.csrf
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "col-md-10 col-12 row form-group d-flex"
  }, [_vm._m(0, false, false), _vm._v(" "), _c('div', {
    staticClass: "col-md-6 col-7"
  }, [_c('select', {
    staticClass: "myform-control",
    attrs: {
      "name": "type"
    },
    on: {
      "change": _vm.changeForm
    }
  }, [_c('option', {
    attrs: {
      "value": "movie"
    }
  }, [_vm._v("Movie")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "tv"
    }
  }, [_vm._v("Live Streaming")])])])]), _vm._v(" "), _vm._m(1, false, false), _vm._v(" "), (_vm.movie) ? _c('div', [_vm._m(2, false, false), _vm._v(" "), _vm._m(3, false, false), _vm._v(" "), _vm._m(4, false, false), _vm._v(" "), _vm._m(5, false, false), _vm._v(" "), _vm._m(6, false, false), _vm._v(" "), _vm._m(7, false, false), _vm._v(" "), _c('div', {
    staticClass: "d-flex col-md-10 col-12 row form-group"
  }, [_vm._m(8, false, false), _vm._v(" "), _c('div', {
    staticClass: "col-12"
  }, [_c('button', {
    staticClass: "px-5 col-6 strong-border btn btn-light my-1 py-1",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.addCastElements
    }
  }, [_vm._v("+")])])])]) : _vm._e(), _vm._v(" "), (_vm.tv) ? _c('div', [_vm._m(9, false, false), _vm._v(" "), _vm._m(10, false, false), _vm._v(" "), _vm._m(11, false, false), _vm._v(" "), _vm._m(12, false, false), _vm._v(" "), _vm._m(13, false, false)]) : _vm._e(), _vm._v(" "), _vm._m(14, false, false), _vm._v(" "), _vm._m(15, false, false), _vm._v(" "), _vm._m(16, false, false)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-md-3 col-5 d-flex align-items-center"
  }, [_c('label', {
    staticClass: "fw mb-0"
  }, [_vm._v("Content Type:")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-md-10 col-12 row form-group d-flex mb-3"
  }, [_c('div', {
    staticClass: "col-md-3 col-5 d-flex align-items-center"
  }, [_c('label', {
    staticClass: "fw mb-0"
  }, [_vm._v("Content id:")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6 col-7"
  }, [_c('input', {
    staticClass: "myform-control",
    attrs: {
      "type": "text",
      "value": "R2H-1234-1234",
      "disabled": ""
    }
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-md-10 col-12 form-group"
  }, [_c('label', {
    staticClass: "fw"
  }, [_vm._v("Title Name "), _c('span', {
    staticClass: "col-red"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    staticClass: "myform-control",
    attrs: {
      "type": "text",
      "name": "name",
      "required": ""
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "my-2 col-md-9 col-12 form-group d-flex flex-wrap"
  }, [_c('label', {
    staticClass: "fw"
  }, [_vm._v("Genres "), _c('span', {
    staticClass: "col-red"
  }, [_vm._v("*")])]), _vm._v(" "), _c('div', {
    staticClass: "d-flex flex-wrap"
  }, [_c('span', {
    staticClass: "px-2 mb-2"
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "name": "genres[]"
    }
  }), _vm._v(" Action")]), _vm._v(" "), _c('span', {
    staticClass: "px-2 mb-2"
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "name": "genres[]"
    }
  }), _vm._v(" Adventure")]), _vm._v(" "), _c('span', {
    staticClass: "px-2 mb-2"
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "name": "genres[]"
    }
  }), _vm._v(" Animation")]), _vm._v(" "), _c('span', {
    staticClass: "px-2 mb-2"
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "name": "genres[]"
    }
  }), _vm._v(" Biography")]), _vm._v(" "), _c('span', {
    staticClass: "px-2 mb-2"
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "name": "genres[]"
    }
  }), _vm._v(" Comedy")]), _vm._v(" "), _c('span', {
    staticClass: "px-2 mb-2"
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "name": "genres[]"
    }
  }), _vm._v(" Crime")]), _vm._v(" "), _c('span', {
    staticClass: "px-2 mb-2"
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "name": "genres[]"
    }
  }), _vm._v(" Documentary")]), _vm._v(" "), _c('span', {
    staticClass: "px-2 mb-2"
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "name": "genres[]"
    }
  }), _vm._v(" Drama")]), _vm._v(" "), _c('span', {
    staticClass: "px-2 mb-2"
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "name": "genres[]"
    }
  }), _vm._v(" Family")]), _vm._v(" "), _c('span', {
    staticClass: "px-2 mb-2"
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "name": "genres[]"
    }
  }), _vm._v(" Fantasy")]), _vm._v(" "), _c('span', {
    staticClass: "px-2 mb-2"
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "name": "genres[]"
    }
  }), _vm._v(" Film Noir")]), _vm._v(" "), _c('span', {
    staticClass: "px-2 mb-2"
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "name": "genres[]"
    }
  }), _vm._v(" History")]), _vm._v(" "), _c('span', {
    staticClass: "px-2 mb-2"
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "name": "genres[]"
    }
  }), _vm._v(" Horror")]), _vm._v(" "), _c('span', {
    staticClass: "px-2 mb-2"
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "name": "genres[]"
    }
  }), _vm._v(" Music")]), _vm._v(" "), _c('span', {
    staticClass: "px-2 mb-2"
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "name": "genres[]"
    }
  }), _vm._v(" Musical")]), _vm._v(" "), _c('span', {
    staticClass: "px-2 mb-2"
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "name": "genres[]"
    }
  }), _vm._v(" Mystery")]), _vm._v(" "), _c('span', {
    staticClass: "px-2 mb-2"
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "name": "genres[]"
    }
  }), _vm._v(" Romance")]), _vm._v(" "), _c('span', {
    staticClass: "px-2 mb-2"
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "name": "genres[]"
    }
  }), _vm._v(" Sci-Fi")]), _vm._v(" "), _c('span', {
    staticClass: "px-2 mb-2"
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "name": "genres[]"
    }
  }), _vm._v(" Short")]), _vm._v(" "), _c('span', {
    staticClass: "px-2 mb-2"
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "name": "genres[]"
    }
  }), _vm._v(" Sport")]), _vm._v(" "), _c('span', {
    staticClass: "px-2 mb-2"
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "name": "genres[]"
    }
  }), _vm._v(" Musical")]), _vm._v(" "), _c('span', {
    staticClass: "px-2 mb-2"
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "name": "genres[]"
    }
  }), _vm._v(" Superhero")]), _vm._v(" "), _c('span', {
    staticClass: "px-2 mb-2"
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "name": "genres[]"
    }
  }), _vm._v(" Thriller")]), _vm._v(" "), _c('span', {
    staticClass: "px-2 mb-2"
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "name": "genres[]"
    }
  }), _vm._v(" War")]), _vm._v(" "), _c('span', {
    staticClass: "px-2 mb-2"
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "name": "genres[]"
    }
  }), _vm._v(" Western")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-md-10 col-12 form-group"
  }, [_c('label', {
    staticClass: "fw"
  }, [_vm._v("Overviews "), _c('span', {
    staticClass: "col-red"
  }, [_vm._v("*")])]), _vm._v(" "), _c('textarea', {
    staticClass: "py-2 pr-5 bor-strong myform-control",
    staticStyle: {
      "height": "160px"
    },
    attrs: {
      "required": ""
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "my-2 form-group row col-md-10 col-12 d-flex flex-wrap"
  }, [_c('div', {
    staticClass: "col-4"
  }, [_c('label', {
    staticClass: "fw"
  }, [_vm._v("Released Type "), _c('span', {
    staticClass: "col-red"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    staticClass: "myform-control",
    attrs: {
      "type": "text",
      "name": "released_type",
      "required": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-4"
  }, [_c('label', {
    staticClass: "fw"
  }, [_vm._v("Released Date")]), _vm._v(" "), _c('input', {
    staticClass: "myform-control",
    attrs: {
      "type": "date",
      "name": "release_date",
      "required": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-4"
  }, [_c('label', {
    staticClass: "fw"
  }, [_vm._v("Released Year "), _c('span', {
    staticClass: "col-red"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    staticClass: "myform-control",
    attrs: {
      "type": "text",
      "required": ""
    }
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "my-2 row col-md-10 col-12 form-group  d-sm-flex flex-sm-wrap"
  }, [_c('div', {
    staticClass: "col-6"
  }, [_c('label', {
    staticClass: "fw"
  }, [_vm._v("Run Time")]), _vm._v(" "), _c('input', {
    staticClass: "myform-control"
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-6"
  }, [_c('label', {
    staticClass: "fw"
  }, [_vm._v("Rating Systems")]), _vm._v(" "), _c('input', {
    staticClass: "myform-control"
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-md-10 col-12 form-group"
  }, [_c('label', {
    staticClass: "fw"
  }, [_vm._v("Director's Name")]), _vm._v(" "), _c('input', {
    staticClass: "myform-control",
    attrs: {
      "type": "text",
      "name": "director",
      "required": ""
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "form-group col-12",
    attrs: {
      "id": "castMenu"
    }
  }, [_c('div', {
    staticClass: "d-flex"
  }, [_c('label', {
    staticClass: "fw col-9 ml-0 pl-0"
  }, [_vm._v("Casts "), _c('span', {
    staticClass: "col-red"
  }, [_vm._v("*")])]), _vm._v(" "), _c('label', {
    staticClass: "fw col-3"
  }, [_vm._v("Cast Images")])]), _vm._v(" "), _c('div', {
    staticClass: "form-group d-flex"
  }, [_c('input', {
    staticClass: "myform-control col-9",
    attrs: {
      "type": "text"
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "ml-3 col-3 strong-border btn btn-light",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("+")])]), _vm._v(" "), _c('div', {
    staticClass: "form-group d-flex"
  }, [_c('input', {
    staticClass: "myform-control col-9",
    attrs: {
      "type": "text"
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "ml-3 col-3 strong-border btn btn-light",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("+")])]), _vm._v(" "), _c('div', {
    staticClass: "form-group d-flex"
  }, [_c('input', {
    staticClass: "myform-control  col-9",
    attrs: {
      "type": "text"
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "ml-3 col-3 strong-border btn btn-light",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("+")])]), _vm._v(" "), _c('div', {
    staticClass: "form-group d-flex"
  }, [_c('input', {
    staticClass: "myform-control col-9",
    attrs: {
      "type": "text"
    }
  }), _vm._v(" "), _c('button', {
    staticClass: " ml-3 col-3 strong-border btn btn-light",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("+")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "form-group col-12 col-md-10 row form-group d-flex"
  }, [_c('div', {
    staticClass: "col-md-3 col-5 d-flex align-items-center"
  }, [_c('label', {
    staticClass: "fw mb-0",
    attrs: {
      "for": "channelName"
    }
  }, [_vm._v("Channel Name "), _c('span', {
    staticClass: "col-red"
  }, [_vm._v("*")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6 col-7"
  }, [_c('input', {
    staticClass: "myform-control",
    attrs: {
      "type": "text",
      "name": "channelName",
      "required": "",
      "id": "channelName"
    }
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "form-group col-12 col-md-10"
  }, [_c('label', {
    staticClass: "text-uppercase mb-0 d-block fw",
    attrs: {
      "for": "artwork"
    }
  }, [_vm._v("Artwork - channel logo "), _c('span', {
    staticClass: "col-red"
  }, [_vm._v("*")])]), _vm._v(" "), _c('small', [_vm._v("image size = 500px x 400px")]), _vm._v(" "), _c('input', {
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "name": "logo",
      "type": "file"
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "w-100  d-flex justify-content-center py-4",
    staticStyle: {
      "outline": "none",
      "cursor": "pointer",
      "border": "solid 1.5px #CCCCCC",
      "background-color": "#ffffff"
    },
    attrs: {
      "type": "button"
    }
  }, [_c('i', {
    staticClass: "fa fa-plus",
    staticStyle: {
      "color": "#CCCCCC"
    }
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "form-group col-12 col-md-10"
  }, [_c('label', {
    staticClass: "fw"
  }, [_vm._v("Genres"), _c('span', {
    staticClass: "col-red"
  }, [_vm._v("*")])]), _vm._v(" "), _c('div', {
    staticClass: "d-flex flex-wrap"
  }, [_c('span', {
    staticClass: "px-2 mb-2"
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "name": "genres[]"
    }
  }), _vm._v("  Animated\n                ")]), _vm._v(" "), _c('span', {
    staticClass: "px-2 mb-2"
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "name": "genres[]"
    }
  }), _vm._v("  Cooking\n                ")]), _vm._v(" "), _c('span', {
    staticClass: "px-2 mb-2"
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "name": "genres[]"
    }
  }), _vm._v("  Children\n                ")]), _vm._v(" "), _c('span', {
    staticClass: "px-2 mb-2"
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "name": "genres[]"
    }
  }), _vm._v("  DIY\n                ")]), _vm._v(" "), _c('span', {
    staticClass: "px-2 mb-2"
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "name": "genres[]"
    }
  }), _vm._v("  Educational\n                ")]), _vm._v(" "), _c('span', {
    staticClass: "px-2 mb-2"
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "name": "genres[]"
    }
  }), _vm._v("  Lifestyle\n                ")]), _vm._v(" "), _c('span', {
    staticClass: "px-2 mb-2"
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "name": "genres[]"
    }
  }), _vm._v("  Movies\n                ")]), _vm._v(" "), _c('span', {
    staticClass: "px-2 mb-2"
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "name": "genres[]"
    }
  }), _vm._v("  Music\n                ")]), _vm._v(" "), _c('span', {
    staticClass: "px-2 mb-2"
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "name": "genres[]"
    }
  }), _vm._v("  News\n                ")]), _vm._v(" "), _c('span', {
    staticClass: "px-2 mb-2"
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "name": "genres[]"
    }
  }), _vm._v("  Reality\n                ")]), _vm._v(" "), _c('span', {
    staticClass: "px-2 mb-2"
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "name": "genres[]"
    }
  }), _vm._v("  Religious\n                ")]), _vm._v(" "), _c('span', {
    staticClass: "px-2 mb-2"
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "name": "genres[]"
    }
  }), _vm._v("  Science\n                ")]), _vm._v(" "), _c('span', {
    staticClass: "px-2 mb-2"
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "name": "genres[]"
    }
  }), _vm._v("  Shopping\n                ")]), _vm._v(" "), _c('span', {
    staticClass: "px-2 mb-2"
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "name": "genres[]"
    }
  }), _vm._v("  Sports\n                ")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "form-group col-12 col-md-10"
  }, [_c('label', {
    staticClass: "d-block fw",
    attrs: {
      "for": "overview"
    }
  }, [_vm._v("\n                    Overviews"), _c('span', {
    staticClass: "col-red"
  }, [_vm._v("*")])]), _vm._v(" "), _c('textarea', {
    staticClass: "myform-control",
    staticStyle: {
      "height": "160px"
    },
    attrs: {
      "name": "overview",
      "id": "overview",
      "required": ""
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "form-group col-12 col-md-10"
  }, [_c('label', {
    staticClass: "text-capitalize fw",
    attrs: {
      "for": "director"
    }
  }, [_vm._v("Channel editor/program director")]), _vm._v(" "), _c('input', {
    staticClass: "myform-control",
    attrs: {
      "type": "text",
      "id": "director",
      "name": "director",
      "required": ""
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-md-10 col-12 form-group"
  }, [_c('label', {
    staticClass: "fw",
    attrs: {
      "for": "facebook"
    }
  }, [_vm._v("Facebook Page")]), _vm._v(" "), _c('input', {
    staticClass: "myform-control",
    attrs: {
      "type": "text",
      "id": "facebook"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-md-10 col-12 form-group"
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "name": "agree"
    }
  }), _vm._v(" "), _c('sup', {
    staticClass: "col-red fw"
  }, [_vm._v("*")]), _c('span', {
    staticClass: "small"
  }, [_vm._v("I agreed to the "), _c('span', {
    staticClass: "col-blue"
  }, [_vm._v("terms &\n          conditions")]), _vm._v(" for submitting the content to R2H Live.")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-12"
  }, [_c('button', {
    staticClass: "btn btn-secondary text-white my-3 px-3",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("Submit")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-d8055340", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-176d3e02\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/cp/views/statements/transaction.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-176d3e02\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/cp/views/statements/transaction.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("a3acdf06", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-176d3e02\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./transaction.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-176d3e02\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./transaction.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-204e11d3\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/cp/views/contents/show.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-204e11d3\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/cp/views/contents/show.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("316c700d", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-204e11d3\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./show.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-204e11d3\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./show.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2992692a\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/cp/views/statements/collection.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2992692a\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/cp/views/statements/collection.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("aa6ec5d2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2992692a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./collection.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2992692a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./collection.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2d198032\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/cp/views/settings.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2d198032\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/cp/views/settings.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("c0a597d6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2d198032\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./settings.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2d198032\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./settings.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-55a74189\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/cp/views/layout/breadcrumb.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-55a74189\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/cp/views/layout/breadcrumb.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("48d2421a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-55a74189\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./breadcrumb.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-55a74189\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./breadcrumb.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5e8e5076\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/cp/views/statements/app.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5e8e5076\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/cp/views/statements/app.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("f7bb94dc", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5e8e5076\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5e8e5076\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-730cb715\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/cp/views/dashboard.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-730cb715\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/cp/views/dashboard.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("374629a2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-730cb715\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./dashboard.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-730cb715\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./dashboard.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-779605f6\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/cp/views/uploads/edit.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-779605f6\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/cp/views/uploads/edit.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("c8a652e2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-779605f6\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./edit.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-779605f6\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./edit.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a7569c36\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/cp/views/activation.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a7569c36\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/cp/views/activation.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("6050ad0e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a7569c36\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./activation.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a7569c36\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./activation.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ca99c374\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/cp/views/layout/sidebar.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ca99c374\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/cp/views/layout/sidebar.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("e248c03c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ca99c374\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./sidebar.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ca99c374\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./sidebar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/assets/js/bootstrap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery, __webpack_provided_window_dot_$) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__("./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vee_validate__ = __webpack_require__("./node_modules/vee-validate/dist/vee-validate.esm.js");




try {
    __webpack_provided_window_dot_$ = __webpack_provided_window_dot_jQuery = __webpack_require__("./node_modules/jquery/dist/jquery.js");
    __webpack_require__("./node_modules/bootstrap/dist/js/bootstrap.js");
} catch (e) {}

window.axios = __webpack_require__("./node_modules/axios/index.js");

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2_vee_validate__["default"]);

var token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/jquery/dist/jquery.js"), __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/assets/js/cp/app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_app_vue__ = __webpack_require__("./resources/assets/js/cp/views/app.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_app_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__views_app_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__("./resources/assets/js/cp/routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vee_validate__ = __webpack_require__("./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert__ = __webpack_require__("./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert__);
__webpack_require__("./resources/assets/js/bootstrap.js");







new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
    el: '#cpdash',
    router: __WEBPACK_IMPORTED_MODULE_2__routes__["a" /* default */],
    swal: __WEBPACK_IMPORTED_MODULE_4_sweetalert___default.a,
    render: function render(h) {
        return h(__WEBPACK_IMPORTED_MODULE_1__views_app_vue___default.a);
    }
});

/***/ }),

/***/ "./resources/assets/js/cp/routes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_router__ = __webpack_require__("./node_modules/vue-router/dist/vue-router.esm.js");


var routes = [{
    name: 'dashboard',
    path: '/',
    component: __webpack_require__("./resources/assets/js/cp/views/dashboard.vue")
}, {
    name: 'settings',
    path: '/settings',
    component: __webpack_require__("./resources/assets/js/cp/views/settings.vue")
}, {
    path: '/finance',
    component: __webpack_require__("./resources/assets/js/cp/views/statements/app.vue"),
    children: [{
        name: 'collection',
        path: 'collection',
        component: __webpack_require__("./resources/assets/js/cp/views/statements/collection.vue")
    }, {
        name: 'transaction',
        path: 'transaction',
        component: __webpack_require__("./resources/assets/js/cp/views/statements/transaction.vue")
    }]
}, {
    name: 'contentEdit',
    path: '/contents/edit',
    component: __webpack_require__("./resources/assets/js/cp/views/contents/edit.vue")
}, {
    name: 'contentShow',
    path: 'contents/show',
    component: __webpack_require__("./resources/assets/js/cp/views/contents/show.vue")
}, {
    name: 'upload',
    path: '/upload',
    component: __webpack_require__("./resources/assets/js/cp/views/uploads/edit.vue")
}, {
    name: 'activation',
    path: '/activation',
    component: __webpack_require__("./resources/assets/js/cp/views/activation.vue")
}];
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_vue_router__["default"]({
    mode: 'history',
    routes: routes
}));

/***/ }),

/***/ "./resources/assets/js/cp/views/activation.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a7569c36\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/cp/views/activation.vue")
}
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/cp/views/activation.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-a7569c36\",\"hasScoped\":true}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/cp/views/activation.vue"),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-a7569c36",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "G:\\laragon\\www\\R2h-live\\resources\\assets\\js\\cp\\views\\activation.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] activation.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a7569c36", Component.options)
  } else {
    hotAPI.reload("data-v-a7569c36", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/cp/views/app.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/cp/views/app.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2e23ca3c\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/cp/views/app.vue"),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "G:\\laragon\\www\\R2h-live\\resources\\assets\\js\\cp\\views\\app.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] app.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2e23ca3c", Component.options)
  } else {
    hotAPI.reload("data-v-2e23ca3c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/cp/views/contents/edit.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/cp/views/contents/edit.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-d8055340\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/cp/views/contents/edit.vue"),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "G:\\laragon\\www\\R2h-live\\resources\\assets\\js\\cp\\views\\contents\\edit.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] edit.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d8055340", Component.options)
  } else {
    hotAPI.reload("data-v-d8055340", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/cp/views/contents/show.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-204e11d3\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/cp/views/contents/show.vue")
}
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/cp/views/contents/show.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-204e11d3\",\"hasScoped\":true}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/cp/views/contents/show.vue"),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-204e11d3",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "G:\\laragon\\www\\R2h-live\\resources\\assets\\js\\cp\\views\\contents\\show.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] show.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-204e11d3", Component.options)
  } else {
    hotAPI.reload("data-v-204e11d3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/cp/views/dashboard.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-730cb715\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/cp/views/dashboard.vue")
}
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/cp/views/dashboard.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-730cb715\",\"hasScoped\":true}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/cp/views/dashboard.vue"),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-730cb715",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "G:\\laragon\\www\\R2h-live\\resources\\assets\\js\\cp\\views\\dashboard.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] dashboard.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-730cb715", Component.options)
  } else {
    hotAPI.reload("data-v-730cb715", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/cp/views/layout/breadcrumb.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-55a74189\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/cp/views/layout/breadcrumb.vue")
}
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/cp/views/layout/breadcrumb.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-55a74189\",\"hasScoped\":true}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/cp/views/layout/breadcrumb.vue"),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-55a74189",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "G:\\laragon\\www\\R2h-live\\resources\\assets\\js\\cp\\views\\layout\\breadcrumb.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] breadcrumb.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-55a74189", Component.options)
  } else {
    hotAPI.reload("data-v-55a74189", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/cp/views/layout/sidebar.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ca99c374\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/cp/views/layout/sidebar.vue")
}
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/cp/views/layout/sidebar.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-ca99c374\",\"hasScoped\":true}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/cp/views/layout/sidebar.vue"),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-ca99c374",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "G:\\laragon\\www\\R2h-live\\resources\\assets\\js\\cp\\views\\layout\\sidebar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] sidebar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ca99c374", Component.options)
  } else {
    hotAPI.reload("data-v-ca99c374", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/cp/views/settings.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2d198032\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/cp/views/settings.vue")
}
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/cp/views/settings.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2d198032\",\"hasScoped\":true}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/cp/views/settings.vue"),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-2d198032",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "G:\\laragon\\www\\R2h-live\\resources\\assets\\js\\cp\\views\\settings.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] settings.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2d198032", Component.options)
  } else {
    hotAPI.reload("data-v-2d198032", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/cp/views/statements/app.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5e8e5076\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/cp/views/statements/app.vue")
}
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/cp/views/statements/app.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5e8e5076\",\"hasScoped\":true}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/cp/views/statements/app.vue"),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-5e8e5076",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "G:\\laragon\\www\\R2h-live\\resources\\assets\\js\\cp\\views\\statements\\app.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] app.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5e8e5076", Component.options)
  } else {
    hotAPI.reload("data-v-5e8e5076", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/cp/views/statements/collection.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2992692a\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/cp/views/statements/collection.vue")
}
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/cp/views/statements/collection.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2992692a\",\"hasScoped\":true}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/cp/views/statements/collection.vue"),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-2992692a",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "G:\\laragon\\www\\R2h-live\\resources\\assets\\js\\cp\\views\\statements\\collection.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] collection.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2992692a", Component.options)
  } else {
    hotAPI.reload("data-v-2992692a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/cp/views/statements/transaction.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-176d3e02\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/cp/views/statements/transaction.vue")
}
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/cp/views/statements/transaction.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-176d3e02\",\"hasScoped\":true}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/cp/views/statements/transaction.vue"),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-176d3e02",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "G:\\laragon\\www\\R2h-live\\resources\\assets\\js\\cp\\views\\statements\\transaction.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] transaction.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-176d3e02", Component.options)
  } else {
    hotAPI.reload("data-v-176d3e02", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/cp/views/uploads/edit.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-779605f6\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/cp/views/uploads/edit.vue")
}
var Component = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")(
  /* script */
  __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/cp/views/uploads/edit.vue"),
  /* template */
  __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-779605f6\",\"hasScoped\":true}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/cp/views/uploads/edit.vue"),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-779605f6",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "G:\\laragon\\www\\R2h-live\\resources\\assets\\js\\cp\\views\\uploads\\edit.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] edit.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-779605f6", Component.options)
  } else {
    hotAPI.reload("data-v-779605f6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./resources/assets/js/cp/app.js");


/***/ })

},[2]);