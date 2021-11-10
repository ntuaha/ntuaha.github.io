const {
    createApp,
    ref
} = Vue;

const talks_data = {
    lists:[
        {
            "year":2021,
            "talks":[
                {
                    "date":"20210906",
                    "place":"玉山",
                    "title":"AI & RPA 交流"
                },
                {
                    "date":"20210901",
                    "place":"玉山",
                    "title":"AI & RPA 交流"
                },
                {
                    "date":"20210314",
                    "place":"央行",
                    "title":"AI如何成就金融科技"
                },
            ]
        },
        {
            "year":2020,
            "talks":[
                {
                    "date":"20201211",
                    "place":"高雄大學",
                    "title":"我的數學之旅",
                    "talk_link":"https://www.dropbox.com/s/3bblom2ws8c67fg/%E5%80%8B%E4%BA%BA%E6%BC%94%E8%AC%9B_20201211.pptx?dl=0"
                },
                {
                    "date":"20201120",
                    "place":"台大社課",
                    "title":"科技賦能 智慧領航"
                },
                {
                    "date":"20200603",
                    "place":"央行",
                    "title":"數位轉型在玉山 -AI Inside, Human Outside"
                },
                {
                    "date":"20200515",
                    "place":"國發會",
                    "title":"政府資料標準專家學者座談會"
                }
            ]
        },
        {
            "year":2019,
            "talks":[
                {
                    "date":"20190111",
                    "place":"清華大學",
                    "title":"資料科學與 AI @玉山",
                    "talk_link":"https://www.dropbox.com/s/ushy3i9l6el6k2c/%E6%B8%85%E5%A4%A7%E6%BC%94%E8%AC%9B_20190111.pptx?dl=0",
                    "description":"本次將分享玉山今年度三個透過資料協助金融業務上的案例：支票識別、信用卡交易、警示帳戶。我會先簡介目前金融科技主要面對的業務領域，並帶出為何需要數據與AI解決金融業務的重要性。在本次分享中，將各自分享這些業務中用用數據解決業務問題的難處，在支票識別中，將說明為何這個題目的重要與深度學習是如何成功改善這個作業流程．在於警示帳戶專案中，我們如何透過機器學習與業務單位一起合作打造新的辨識系統．在信用卡交易專案中，介紹機器學習是如何成功的一舉提升數十年的監控成效。最後，也會分享在玉山內的工作環境與正在進行的資料科學工程，這不僅只是一項純粹為了吸引人才的項目，更是為了提升玉山甚至台灣金融業在資料科學發展的工作。"
                },
                {
                    "date":"20190611",
                    "place":"台灣大學",
                    "title":"智能金融在玉山- AI Inside, Human outside",
                    "talk_link":"https://management.ntu.edu.tw/IM/news/detail/sn/993",
                }
            ]
        },
        {
            "year":2018,
            "talks":[
                {
                    "date":"20181128",
                    "place":"交通大學",
                    "title":"資料科學與 AI @玉山",
                    "talk_link":"https://www.cs.nycu.edu.tw/storage/upload/%E6%95%B8%E7%A7%91%E6%89%80/2018.11.28.pdf"
                },
                {
                    "date":"20181110",
                    "place":"嘉義大學",
                    "title":"數字告訴你的政治",
                    "talk_link":"https://www.dropbox.com/s/l1rixg2ou9k401m/%E6%94%BF%E6%B2%BB%E8%88%87%E6%95%B8%E6%93%9A.pptx?dl=0",
                },
                {
                    "date":"20180117",
                    "place":"台灣大學",
                    "title":"Data and AI @ 玉山",
                    "talk_link":"https://www.dropbox.com/s/0oaofwf44vx2uzb/%E5%8F%B0%E5%A4%A7%E5%88%86%E4%BA%AB.pptx?dl=0",
                },
                {
                    "date":"20180109",
                    "place":"金管會",
                    "title":"107年資料開放規範及政府資料開放平臺調整建議",
                    "talk_link":"https://www.dropbox.com/s/p6m74s2eit4ot3b/%E9%87%91%E7%AE%A1%E6%9C%83%E7%B0%A1%E5%A0%B1.pptx?dl=0",
                }
            ]
        },
        {
            "year":2017,
            "talks":[
                {
                    "date":"20171111",
                    "place":"台灣資料科學愛好者年會 2017",
                    "title":"Data and AI @ E.SUN bank",
                    "talk_link":"https://docs.google.com/presentation/d/1WVS4z-A8IopHLnUDeLYSqZIH8Hdh8XQZ/edit?usp=sharing&ouid=101904618895993667546&rtpof=true&sd=true",
                    "place_link":"https://datasci.tw/speakers/?conf=AI#aha",
                    "description":"根據玉山資料處理流程與業務應用經驗，分享實務故事與未來玉山 AI 發展應用的可能方向。"
                },
                {
                    "date":"20171020",
                    "place":"交通大學",
                    "title":"數位金融 FinTech 浪潮",
                    "talk_link":"https://www.dropbox.com/s/1wrd1jwbmfp4n5y/%E6%95%B8%E4%BD%8D%E9%87%91%E8%9E%8D%20for%20%E4%BA%A4%E5%A4%A7%E8%B3%87%E5%B7%A5%20v1.1.pptx?dl=0",
                },
                {
                    "date":"20170610",
                    "place":"Pycon.TW",
                    "title":"Chatbot @ E.Sun Bank – 玉山小i 隨身金融顧問的兩三事",
                    "talk_link":"https://drive.google.com/file/d/0B8hlay_yY5e7QTE0U3JDUXloeXM/view?usp=sharing&resourcekey=0-tQM2BSxBd_QTpWjQsavULQ",
                    "description":"在這個演講中，將介紹在銀行之中，如何將一個全新概念，透過 Python 開門引路，最後成為企業內新服務、新通路的系統，這段企業內創新之路的介紹，相信對於許多想要透過 Python 開創自己的產品或企業內創新的同好，會是一個很好的故事。"
                }
            ]
        },
        {
            "year":2016,
            "talks":[
                {
                    "date":"20160425",
                    "title":"數據與生活",
                    "talk_link":"https://www.dropbox.com/s/8vpiiemy1ps2wr6/20160425_%E8%B3%87%E6%96%99%E7%A7%91%E5%AD%B8_%E9%89%A6%E8%82%B2.pptx?dl=0",
                }                
            ]
        },
        {
            "year":2015,
            "talks":[
                {
                    "date":"20150820",
                    "place":"台灣資料科學愛好者年會 2015",
                    "title":"R 資料前處理"
                }                
            ]
        },
        {
            "year":2014,
            "talks":[
                {
                    "date":"20140728",
                    "place":"MLDM Monday",
                    "title":"R ETL part 3 by Aha&嘉葳",
                    "talk_link":"https://www.youtube.com/watch?v=4lUpYrxx6uQ",
                },
                {
                    "date":"20140725",
                    "place":"UDN",
                    "title":"資訊圖表結業作業指導"                    
                },
                {
                    "date":"20140217",
                    "place":"MLDM Monday",
                    "talk_link":"https://www.youtube.com/watch?v=h6bGezvduHA",
                    "title":"pen data 的 ETL 流程與 Visualization 的例子"                    
                }                 
            ]
        },
        {
            "year":2012,
            "talks":[
                {
                    "date":"20121119",
                    "place":"MLDM Monday",
                    "title":"alk 1-1 (Kriging Interpolation 的原理及應用)",
                    "talk_link":"https://www.youtube.com/watch?v=H8LTMH8yAiQ",
                },
                {
                    "date":"20120412",
                    "place":"台北市政府",
                    "title":"PLASH"                    ,
                    "talk_link":"https://www.dropbox.com/s/0itfkttz6xj8ny9/PLASH-review-LJ.ppt?dl=0"
                }             
            ]
        }

    ]            
}




const talks = createApp({    
    data(){
        return talks_data;
    }
})



document.addEventListener('DOMContentLoaded', () => {
    talks.mount("#talks");
});