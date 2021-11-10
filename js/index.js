const {
    createApp,
    ref
} = Vue;

const aha_img = createApp({
    template: `<img :src="user_img" class="rounded mx-auto d-block" />`,
    data(){
        return {
            user_img: "https://scontent.ftpe8-2.fna.fbcdn.net/v/t1.6435-1/p200x200/53551226_2581654768517336_3318850207487098880_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_ohc=DR6J0sdemd0AX8fmjAM&_nc_ht=scontent.ftpe8-2.fna&oh=f2823c80c8d5c6ab1f731d62347c6883&oe=61903B96"
        }
    }
})


document.addEventListener('DOMContentLoaded', () => {
    aha_img.mount("#aha_img");
});