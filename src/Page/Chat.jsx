import { useState } from "react";
import { IoCameraOutline } from "react-icons/io5";
import { MdMic } from "react-icons/md";
import { RiChatNewLine, RiRobot2Line } from "react-icons/ri";
import { TbLocation } from "react-icons/tb";


const Chat = () => {

    const [inputValue, setInputValue] = useState('');
    const [chatHistory, setChatHistory] = useState([
        {
            question: 'What is the average temperature on Mars?',
            answer: 'The average temperature on Mars is around -80°F (-60°C). However, temperatures can vary widely, ranging from about -195°F during winter at the poles to 70°F in the summer near the equator.',
        },
    ]);

    const handleInputChange = (e) => setInputValue(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newQuestion = {
            question: inputValue,
            answer: 'This is a placeholder answer.', // Replace with actual logic
        };
        setChatHistory([...chatHistory, newQuestion]);
        setInputValue('');
    };

    return (
        <div className="min-h-screen flex flex-col bg-blue-50">
            {/* Main Content */}
            <div className="flex flex-1">
                {/* Sidebar */}
                <div className="bg-blue-100 w-1/4 p-6">
                    <div className="my-3 flex justify-end">
                        <h1 className="text-[#4C67D5] hover:text-[#3a5be1]"><RiChatNewLine className="text-2xl" /></h1>
                    </div>
                    <ul className="space-y-4">
                        <li className="hover:bg-blue-200 p-2 rounded cursor-pointer">What is the average temperature on Mars?</li>
                        <li className="hover:bg-blue-200 p-2 rounded cursor-pointer">How long is a day on Mars?</li>
                        <li className="hover:bg-blue-200 p-2 rounded cursor-pointer">What gases make up the atmosphere?</li>
                        <li className="hover:bg-blue-200 p-2 rounded cursor-pointer">How many moons does Mars have?</li>
                        <li className="hover:bg-blue-200 p-2 rounded cursor-pointer">What is the name of the largest volcano?</li>
                        <li className="hover:bg-blue-200 p-2 rounded cursor-pointer">How does gravity on Mars compare to Earth?</li>
                    </ul>
                </div>

                {/* Chat Section */}
                <div className="flex-1 p-6 flex flex-col relative">
                    <div className="rounded-full p-6 bg-[#93C5FD] w-44 h-44 mx-auto mb-4">
                        <h1><RiRobot2Line  className="text-9xl text-[#BFDBFE]"/></h1>
                    </div>
                    <h1 className="text-[#93C5FD] w-3/12 text-center text-2xl mx-auto mb-4">How can I help you today?</h1>
                    {/* Chat Bubbles */}
                    <div className="space-y-4 flex-grow">
                        {chatHistory.map((chat, index) => (
                            <div key={index} className="bg-blue-100 p-4 rounded-lg shadow w-10/12 ml-auto">
                                <p className="font-semibold text-lg">{chat.question}</p>
                            </div>
                        ))}
                        {chatHistory.map((chat, index) => (
                            <div key={index} className="bg-[#93C5FD] p-4 rounded-lg shadow w-10/12">
                                <p className="mt-2">{chat.answer}</p>
                            </div>
                        ))}
                    </div>

                    {/* Input Section */}
                    <form onSubmit={handleSubmit} className="absolute bottom-8 left-8 right-8 flex items-center space-x-4">
                        <button type="button" className="bg-blue-200 p-2 rounded-full">
                            <IoCameraOutline className="text-2xl" />
                        </button>
                        <div className="relative w-full">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={handleInputChange}
                                placeholder="Ask"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                            <button><MdMic className="absolute right-4 top-3 text-2xl text-[#4C67D5]" /></button>
                        </div>
                        <button type="submit" className="text-[#4C67D5] text-3xl"><TbLocation /></button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Chat;