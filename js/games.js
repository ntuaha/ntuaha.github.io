const {
    createApp,
    ref
} = Vue;

const games_data = {
    lists:[
        {
            "year":2022,
            "games":[
                {
                    "date":"202204",
                    "platform":"switch",
                    "title":"Triangle Strategy",
                    "description": "一款根據自己表達道德觀戰棋遊戲在遊戲中會看見不同的人、事，除了標準的之外，遊戲中會因為你的選擇決定你的下一個遇見的故事與結局。遊戲本身不難，但對於容易投入在遊戲中的人來說，反而是這些選擇增加遊戲的魅力與深度。"
                },
                {
                    "date":"202203",
                    "platfrom":"switch",
                    "title":"ys9",
                    "description":"一個冒險家繼續來到不同的地區的ARPG故事，故事本身偏向對於一件事情不同解決方案的衝突，但因為這個矛盾點有太多可以解決的替代方案，因此變成遊戲本身的遊戲性會大過於故事性，但對於故事中抽絲剝繭的了解全貌是有趣的，但核心思想並並非像伊蘇８一樣的深入。"
                },                
            ]
        },
        {
            "year":2020,
            "games":[
                
            ]
        }
    ]            
}




const games = createApp({    
    data(){
        return games_data;
    }
})



document.addEventListener('DOMContentLoaded', () => {
    games.mount("#games");
});