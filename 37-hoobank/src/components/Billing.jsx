
const Billing = () => {
    return (
        <section id="product" className="flex md:flex-row flex-col-reverse sm:py-16 p-6">
            <div className="flex-1 flex justify-center items-center  md:mr-10 mr-0 md:mt-0 mt-10 relative">
                <img src="/bill.png" alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

                <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
                <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />

            </div>

            <div className="flex-1 flex justify-center items-start flex-col">
                <h2 className="font-semibold xs:text-[48px] text-[40px] text-white sx:leading-[76px] leading-[66px] w-full">Easily control your <br className="sm:block hidden" /> billing &invoicing</h2>
                <p className="font-normal text-dimWhite text-[18px] leading-[30.8px] mt-5 max-w-[470px]">
                    Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
                    aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
                    placerat.
                </p>

                <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
                    <img src="/apple.svg" alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
                    <img src="/google.svg" alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
                </div>
            </div>
        </section>
    )
}

export default Billing