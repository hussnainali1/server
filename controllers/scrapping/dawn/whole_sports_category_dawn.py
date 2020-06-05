import pandas as pd
import requests
from bs4 import BeautifulSoup

   #              <<<<<<<-----------dawn news/sports-------------->>>>>>>>

i=1
social_link = 'https://www.dawn.com/news/1514598/maulanas-pragmatism'

response = requests.get("https://www.dawn.com/sport")
data = response.text

soup = BeautifulSoup(data, 'html.parser')
maintag="clearfix"
body_tag = soup.find('body')
tags_place1 = body_tag.find('div',{'class': "container-fluid clearfix"})
# print("here i M ")
dic1={}
counter=1
#print(tags_place1)
tags_place2 = tags_place1.find('main')
tags_place3 = tags_place2.find('div',{'class': "flex"})
tags_place4 = tags_place3.find('div',{'class': "flex__item w-full"})
tags_place5 = tags_place4.find_all('div',{'class': "mb-4 sm-border-b sm-border-b-solid sm-border-b-grey-default"})

for inner_news in tags_place5:
    tags_place6 = inner_news.find('div', {'class': "flex"})
    tags_place7 = tags_place6.find_all('div', {'class': "flex__item sm-w-1/4 w-full"})
    # print(len(tags_place5))
    temp= ""
    for art in tags_place7:
        article_tag = art.find("article")
        if not art.find("article"):
            # print("not found")
            continue
        else:
            h2_tag = article_tag.find("h2")
            link_tag = h2_tag.find("a")
            sports_link= link_tag.get('href')
            heading = link_tag.text

            #<<<=======================>>>>
            response = requests.get(sports_link)
            data_des = response.text
            soup_des = BeautifulSoup(data_des, 'html.parser')
            main_article = soup_des.find('article', {'class': 'story'})
            if not soup_des.find('article', {'class': 'story'}):
                continue

            print('<<<<<<<===1===>>>>>>')
            upper_div = main_article.find('div', {'class': 'template__main'})
            if not main_article.find('div', {'class': 'template__main'}):
                print("not found")
                continue
            # print(upper_div.text)
            #print('<<<<<<<===2===>>>>>>')
            #print('<<<<<<<===now divide to a single p tag===>>>>>>')
            div_des = upper_div.find('div', {'class': 'story__content'})
            p_article = div_des.find_all('p')

            print("----",i,"-----")
            i+=1
            for p_data in p_article:
                temp1 = p_data.text
                temp=temp+"\n"+temp1
            new_dic2 = {
                "tilte": heading,
                "link": sports_link,
                "discription": temp
            }
            dic1[counter]=new_dic2
            counter= counter+1
                # print(p_data.text)
                #print('<<<<<<<======>>>>>>')
print(dic1)
dataframe = pd.DataFrame.from_dict(dic1)
dataframe.to_json('D:/fypnew react/project/NewsBuzz/server/dataFiles/newdata/dawnSportsnews.json')

            # <<<=======================>>>>



