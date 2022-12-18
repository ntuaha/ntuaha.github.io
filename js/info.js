const {
    createApp,
    ref
} = Vue;

// https://book.vue.tw/CH2/2-1-components.html
const aha_app = Vue.createApp({
    data() {
        return {}
    },
    methods: {}
});


aha_app.component('aha-nav', {
    template: `  <nav>
            <div class="nav-wrapper">
                <div class='container'>
                    <div class="row">
                        <div class='col s12'>
                            <a href="#" class="brand-logo">aha</a>
                            <ul id="nav-mobile" class="right hide-on-med-and-down">
                                <li><a href="https://ntuaha.github.io/">作者</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>            
        </nav>`
});

aha_app.component('aha-main', {
    template: `
    <!--
    <div class="parallax-container">
        <div class="parallax"><img src="https://scontent.ftpe8-4.fna.fbcdn.net/v/t31.18172-8/13403391_1332998726716286_4476836145610055521_o.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_ohc=602ttzcnoTcAX9v2xnH&tn=uaUxlj8YD9Y8SDzv&_nc_ht=scontent.ftpe8-4.fna&oh=00_AT9GkAeWWsTnGLaR84uVH_sI-Z1IDYqwvmFneMtjIyQ3eA&oe=6366CF28"></div>
    </div>
    -->
    <div class="section row">
        <div class='container'>
            <div class="row">
                <div class='col s6'>
                    <h5>林鉦育</h5>
                    <p>保留一些故事資訊</p>
                </div>
            </div>

            <ul id="tabs-swipe-demo" class="tabs">
                <li class="tab col s3"><a class='active' href="#test-swipe-1">Test 1</a></li>
                <li class="tab col s3"><a href="#test-swipe-2">Test 2</a></li>
                <li class="tab col s3"><a href="#test-swipe-3">Test 3</a></li>
            </ul>
            <aha-tab-1></aha-tab-1>
            <aha-tab-2></aha-tab-2>
            <aha-tab-3></aha-tab-3>
        </div>
    </div>
    
  `
});

aha_app.component('aha-tab-1', {
    template: `
    <div id="test-swipe-1" class="col s12">
        <h2 class='header'>文章</h2>
        <p> 這是我這段時間寫的文章 </p>
    </div>    
  `
});

aha_app.component('aha-tab-2', {
    template: `
    <div id="test-swipe-2" class="col s12">bbbbbbb</div>    
  `
});

aha_app.component('aha-tab-3', {
    template: `
    <div id="test-swipe-3" class="col s12">aaaaaa</div>    
  `
});




aha_app.use(viewStore);

document.addEventListener('DOMContentLoaded', () => {
    aha_app.mount("#app");
    M.Parallax.init(document.querySelectorAll('.parallax'), {});
    M.Tabs.init(document.querySelectorAll('.tabs'), {});
});