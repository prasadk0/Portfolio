export default function ContactUs() {
    return <>
        <div className="flex items-center w-full justify-center min-h-screen">
           <div>
            <img src="/TW_Contact_Us.png" className="rounded-l-lg" alt="Contact Us" />
           </div>
           <div className="bg-white p-8 rounded-lg shadow-lg w-full ">
                <h2 className="text-2xl font-bold text-gray-800 text-left mb-6">Contact Us</h2>
                <form action="#" method="POST" className="space-y-6">
                    <div className="flex w-full flex-row justify-between flex-wrap">
                        <div className="flex-1 w-1/2 ">
                            <label for="name" className="block flex-1 text-sm  text-left  font-medium text-gray-700">Full Name</label>
                            <input type="text" id="name"  name="name"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                placeholder="Your name" required />
                        </div>

                        <div className="flex-1 w-1/2 mx-2">
                            <label for="email" className="block text-sm flex-1 text-left  font-medium text-gray-700">Email</label>
                            <input type="email" id="email" name="email"
                                className="mt-1 block  px-4  w-full  py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                placeholder="you@example.com" required />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label for="message" className="block text-sm text-left font-medium text-gray-700">Message</label>
                            <textarea id="message" name="message" rows="3"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                placeholder="Type your message here..." required></textarea>
                        </div>
                        <button type="submit"
                            className="w-full my-2 bg-[rgb(74,119,155)] text-white font-bold py-2 px-4 rounded-lg hover:bg-[rgb(236,239,241)] hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </>
}