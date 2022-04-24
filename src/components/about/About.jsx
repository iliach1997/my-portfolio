import './about.css'
import Me from '../../img/my.jpg'
import Aca from '../../img/javascript 108+ (1).jpg'
export const About=()=>{
    return(
        <div className='a'>
        <div className="a-left">
       <div className="a-card bg"></div>
       <div className="a-card">
         <img src={Me} alt="my-foto" className='a-img'/>
       </div>
       </div>
        <div className="a-right">
            <h1 className='a-title'>About Me</h1>
            <p className='a-sub'>
                It is a estable dsdsfd sd sd s ds d sd sd sd s ds ds d sd s ds ds d sd 
                dsdsds ds ds d sd s ds d sd sd  d
            </p>
            <p className='a-desc animate__animated animate__zoomIn'>
                  გამარჯობა როგორც უკვე იცით მე მქვია ილია დავიბადე 1997
                 წელის 2 მარტს დავამთავრე ხობის რაიონი სოფელი 
                 ჭალადიდის სკოლა ჩავაბარე თბილისის სახელმწიფო
                 უნივერსიტეტის ფიზიკის ფაკულტეტზე ვმუშაობ 
                 მენეჯერის პოზიციაზე სასტუმრო აბასადორი გოდერძიზე
            </p>
            <div className="a-aca">
                <img src={Aca} alt="" className='a-aca-img ' />
            </div>
        </div>
       </div>
    )
}