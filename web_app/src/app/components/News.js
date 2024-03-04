import React from 'react';
import Link from 'next/link';

const news = [
  {
    title: 'Gear Rental',
    description: 'Renting ropes, quickdraws, harnesses..',
    link: 'https://instagram.com/pipo_loha'
  },
  {
    title: 'Juan Palitos',
    description: 'Hostel and food',
    link: 'https://instagram.com/hostaljuanpalitos'
  }
]

function News() {
  const currentNews = news.concat(news).concat(news).concat(news);
  return (
    <div className="news">
      {currentNews.map((item, index) =>
        <div className="news_item" key={item.index}>
          <div>{item.title}</div>
          <div>{item.description}</div>
          <div>
            <Link href={item.link}>{item.link}</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default News;
