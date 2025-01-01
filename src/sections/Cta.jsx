import ctaImg from '../assets/cta-img.webp';

export default function Cta() {
  return (
    <section>
        <div className="wrapper" >
          <div className="bg-accent flex items-center flex-col md:flex-row-reverse">
            <div className="md:w-1/2 p-8 md:py-0 flex lg:px-14 flex-col gap-6 items-start">
            <h2>預約您的時間</h2>
            <p>無論您是在這裡做美甲還是享受我們的其他療程，您都可以期待卓越的服務和個性化的關注。我們相信您在這裡的體驗會是愉快的，結果會是令人驚豔的。我們期待有機會為您提供最佳的美麗和護理。</p>
            <a href="tel:+886-981-606-455" className="btn btn-primary" data-testid="cta-main-btn">預約時間</a>
            </div>
            <div className='aspect-square w-full md:w-1/2 md:h-[500px]'>
            <img className='object-cover' src={ctaImg}/>
            </div>
        </div>
        </div>
    </section>
  )
}