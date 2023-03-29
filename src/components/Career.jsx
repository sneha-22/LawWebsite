import React from 'react'
import { AiOutlineMinus } from "react-icons/ai"
const Career = () => {
    return (
        <div>

            <div className='pt-20'>
                <div
                    className='uppercase text-5xl bg-yellow-5G00 bg-opacity-80 text-white text-left font-black font-[sans-serif]  pt-10 pl-20 mx-10 pb-0 mb-32 h-52'
                    style={{
                        background: "url('https://jayantbhatt.in/wp-content/uploads/2019/01/header_bg-copyright.png') no-repeat center center fixed",
                        backgroundBlendMode: "multiply",
                        backgroundColor: "rgba(232, 150, 19, 0.5)",
                        minHeight: "100%",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                        backgroundAttachment: "local",
                    }}>
                    <h1 className='pt-5 pb-0'>CAREER ASSOCIATE</h1>
                    <AiOutlineMinus size={150} pt-0 />
                </div>
                <div className="flex justify-center">
                    <div className="w-full md:w-1/2 p-4">
                        <h2 className="text-lg font-bold mb-2">Join as an Intern</h2>
                        <br></br>
                        <p>Are you a law student or a recent law graduate looking for hands-on experience in a dynamic and challenging legal environment? Our law firm/litigation chamber offers internship opportunities for individuals who are passionate about the law and are looking to gain practical experience in the field of litigation.

                            As an intern, you will have the opportunity to work alongside experienced lawyers and assist them in various aspects of their work, including legal research, drafting legal documents, and attending court hearings. You will also have the chance to observe court proceedings and better understand how the legal system operates.</p>
                        <br></br>
                        <iframe
                            title="Intern Application Form"
                            src="https://forms.gle/swJGZxcLbkodLa529"
                            width="100%"
                            height="1000"
                            frameborder="0"
                            marginheight="0"
                            marginwidth="0"
                        >
                            Loading...
                        </iframe>
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                        <h2 className="text-lg font-bold mb-2">Join as an Advocate</h2>
                        <br></br>
                        <p>If you're an advocate looking for job opportunities, we encourage you to apply and potentially join our team. We value individuals who possess strong legal acumen and are dedicated to making a positive impact in their work. As such, we are eager to hear from candidates who share our vision and can bring their expertise to help us achieve our goals.</p>
                        <br></br>
                        <iframe
                            title="Job Application Form"
                            src="https://docs.google.com/forms/d/e/1FAIpQLScbD2B3S2tv0NqGvAiohHN90_hts9BUhovGD4IH8NzKrrCZpA/viewform"
                            width="100%"
                            height="1000"
                            frameborder="0"
                            marginheight="0"
                            marginwidth="0"
                        >
                            Loading...
                        </iframe>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Career