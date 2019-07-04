# Node-Crawer
Node 简易版爬虫
- 用原生Node做了简单的封装
- 直接跑 node crawer.js 即可运行
```
  // 要爬取的地址
  let url=`https://h5.ele.me/restapi/shopping/v2/banners?consumer=1&type=1&latitude=23.117715&longitude=113.405029`;

  let buffer=await fetch({
      url,
      headers:{
        // 这里配置请求头信息
      }
  });
```
