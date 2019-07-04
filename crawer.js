const fetchHtml=require('./libs/fetch-html');
const zlib=require('zlib');

function fetch(options){
  return new Promise((resolve, reject)=>{
    fetchHtml(options).then(result=>{
      let {buffer, headers}=result;

      if(headers['content-length'] && headers['content-length']!=buffer.length){
        reject();
      }else{
        if(headers['content-encoding'] && headers['content-encoding'].split('; ').includes('gzip')){
          zlib.gunzip(buffer, (err, data)=>{
            if(err){
              reject(err);
            }else{
              resolve(data);
            }
          });
        }else{
          resolve(buffer);
        }
      }
    }, err=>{
      reject(err);
    });
  });
}

(async ()=>{
  try {
      let url=`https://h5.ele.me/restapi/shopping/v2/banners?consumer=1&type=1&latitude=23.117715&longitude=113.405029`;

      let buffer=await fetch({
          url,
          headers:{

          }
      });

      let json=JSON.parse(buffer.toString());

      console.log(json);
  }catch (e) {
      console.log(e)
  }
})()




/*fetch({
  //url: 'https://h5.ele.me/restapi/shopping/v3/restaurants?latitude=30.74501&longitude=120.755501&offset=0&limit=8',
  url: 'https://h5.ele.me/restapi/shopping/v2/menu?restaurant_id=2356152',
  headers: {
    referer: 'https://h5.ele.me/shop/',
    'x-shard': 'shopid=2356152;loc=120.755501,30.74501'
  }
}).then(buffer=>{
  console.log(buffer.toString());
}, err=>{
  console.log('错了');
});*/


























/*
fetch('https://www.baidu.com/').then(result=>{
  let {buffer, headers}=result;

  console.log(buffer);
  console.log(headers);
}, err=>{
  console.log('有错', err);
});
*/
/*fetch({
  url: 'https://www.baidu.com/',
  headers: {}
});*/
