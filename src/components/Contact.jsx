
const Contact = () => {
  return (
    <div className="p-4 bg-light-black  ">
        <div className="border-b-white border-b-2 pb-[100px] pt-11">
            <h3 className="text-4xl font-bold text-center">Contact</h3>
            <p className="text-lg py-5">I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.
            </p>
            <form action="">
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
