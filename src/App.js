import React,{useState} from 'react'
import './App.css'

import Close from './components/close'

//imgs
import img1 from './img/img1.jpg'
import img2 from './img/img2.jpg'
import img3 from './img/img3.jpg'
import img4 from './img/img4.jpg'
import img5 from './img/img5.jpg'
import img6 from './img/img6.jpg'

function App() {

  let data =[
    {
      id:1,
      imgSrc:img1,
    },
    {
      id:2,
      imgSrc:img2,
    },
    {
      id:3,
      imgSrc:img3,
    },
    {
      id:4,
      imgSrc:img4,
    },
    {
      id:5,
      imgSrc:img5,
    },
    {
      id:6,
      imgSrc:img6,
    },
    {
      id:7,
      imgSrc:img2,
    },
    {
      id:9,
      imgSrc:img5,
    },
    {
      id:10,
      imgSrc:img2,
    },
  ]

  const [model, setModel] = useState(false)
  const [tempimgSrc, setTempImgSrc] = useState('')

  const getImg = (imgSrc) =>{
    setTempImgSrc(imgSrc);
    setModel(true)
  }

  return (
    <div className="App">

      <div className={model? "model open" : "model"}>
        <img src={tempimgSrc} />
        <button className="x" onClick={() => setModel(false)}>X</button>
      </div>

      <div className='title'>
        <h1>Galeria de fotos</h1>
        <h3>Fique a vontade para apreciar as fotos!</h3>
      </div>

      <div className='gallery'>
        {data.map((item, index) => {
          return(
            <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
              <img src={item.imgSrc} />
            </div>
          )
        })}
      </div>

      <div className='footer'>
        <h2>Desenvolvido por:</h2>
        <h1>Marcelo Junior</h1>
      </div>
    </div>
  );
}

export default App;
