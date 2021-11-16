import React, {useState} from 'react';

const TEST_DATA = [
  {
    title: "İngiltere' deki patlamanın görüntüleri ortaya çıktı",
    type: "video",
    img: "https://trthaberstatic.cdn.wp.trt.com.tr/resimler/1698000/liverpool-reu-1698053_3.jpg",
    url: "https://www.trthaber.com/haber/dunya/liverpooldaki-patlamanin-teror-olayi-oldugu-aciklandi-626373.html"
},
{
    title: "Cennet Cehennem Obruklarına yoğun ilgi",
    type: "img",
    img: "https://trthaberstatic.cdn.wp.trt.com.tr/resimler/1698000/silifke-cennete-cehennem-obruklari-trt-haber-1698222_3.jpg",
    url: "https://trthaberstatic.cdn.wp.trt.com.tr/resimler/1698000/silifke-cennete-cehennem-obruklari-trt-haber-1698222_3.jpg"
},
{
    title: "60 yaş üzerinde vefat arttı Hatırlatma dozu önemli",
    type: "standart",
    img: "https://trthaberstatic.cdn.wp.trt.com.tr/resimler/1540000/koronavirus-asisi-asi-odasi-aa-1541475_3.jpg",
    url: "https://www.trthaber.com/haber/dunya/liverpooldaki-patlamanin-teror-olayi-oldugu-aciklandi-626373.html"
}
]



function App() {
  const [data, setData] = useState(TEST_DATA);
  
  return (
    <div className="App">
      {data.map((item) => {
        return <div style={{backgroundImage: "url('" + item.img + "')"}}>{item.title}</div>;
      })}
    </div>
  );
}

export default App;


