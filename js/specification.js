const {
    createApp,
    ref
} = Vue;

const specification_data = {
    lists:[
        {
            "domain":"Chatbot and Conversational AI",
            "records":[
                {
                    "date":"20150120",
                    "record_link":"https://docs.google.com/presentation/d/1k0cdzyZjJJvgwj2E5kkS6oMuFtyr6k6pMbjWGVodZZo/edit?usp=sharing",
                    "title":"AI is better than UI"
                },
                {
                    "date":"20141231",
                    "record_link":"https://docs.google.com/presentation/d/0BxEplIEPKoHfamZ0YU9yOFNvRThrNGR6MWdESnVZcTdVUm5F/edit?usp=sharing&ouid=101904618895993667546&resourcekey=0-n3A7fNoZkqnrrP5AvNmtWQ&rtpof=true&sd=true",
                    "title":"簡易的架構圖"
                }
            ]
        }
    ]            
}




const specification = createApp({    
    data(){
        return specification_data;
    }
})



document.addEventListener('DOMContentLoaded', () => {
    specification.mount("#specification");
});