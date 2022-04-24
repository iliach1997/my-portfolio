import './intro.css'
import 'animate.css'
import Me from '../../img/my.jpg'

const Intro=()=>{
    return (
        
       <div className="i">
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className='i-intro animate__animated animate__backInLeft'>Hello, My name is</h2>
                <h1 className="i-name animate__animated animate__backInRight">Ilia Chapidze</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                      <div className="i-title-item"><i class="fa-brands fa-html5"></i>HTML 5</div>
                      <div className="i-title-item"><i class="fa-brands fa-css3-alt"></i>CSS 3</div>
                      <div className="i-title-item"><i class="fa-brands fa-react"></i>REACT.JS</div>
                      <div className="i-title-item"><i class="fa-brands fa-js"></i> JAVSCRIPT</div>
                      <div className="i-title-item">WEB DEVELOPER</div>
                    </div>
                    </div>  
                <p className="i-desc animate__animated animate__zoomIn">
                    
                გამარჯობა როგორც უკვე იცით მე მქვია ილია დავიბადე 1997
                 წელის 2 მარტს დავამთავრე ხობის რაიონი სოფელი ჭალადიდის სკოლა ჩავაბარე თბილისის სახელმწიფო უნივერსიტეტის ფიზიკის ფაკულტეტზე ვმუშაობ მენეჯერის პოზიციაზე სასტუმრო აბასადორი გოდერძიზე
                    
                    </p>    
                
             </div>
              <svg>

             </svg>
        </div>
        <div className="i-right">
            <div className="i-bg animate__animated animate__backInRight"></div>
            <img src={Me} alt="" className="i-img" />
             </div>
       </div> 
    )
}

export default Intro;