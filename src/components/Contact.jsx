
const Contact = () => {
  return (
    <div id="contactme" className="p-4 md:px-[200px] lg:px-[120px] bg-light-black  ">
        <div className="border-b-white border-b-2 md:border-b-0 pb-[100px] pt-11 lg:grid  lg:grid-cols-2">
            <h3 className="text-4xl lg:text-5xl lg:pt-5 md:text-6xl font-bold text-center  lg:text-left">Contact</h3>
            <p className="text-lg lg:text-md md:text-center lg:mt-[-100px] lg:row-start-2 lg:text-left py-5 lg:pr-[100px] lg:py-0">I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.
            </p>
            <form className="lg:row-span-2" action="">
                <input className=" focus:outline-none w-full p-4 border-b-white border-b-2 mb-4 bg-light-black" name="name" type="text" placeholder="NAME" />
                <input className=" focus:outline-none w-full p-4 border-b-white border-b-2 mb-4 bg-light-black" type="email" name="email" placeholder="EMAIL" />
                <textarea rows={4} className=" focus:outline-none w-full p-4 border-b-white border-b-2 mb-4 bg-light-black" placeholder="MESSAGE" name="message" id="message"></textarea>
                <div className="w-full flex justify-end">
                    <button className='text-center font-medium tracking-widest text-lg py-2 border-b-green border-b-2' type="submit">SEND MESSAGE</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact
