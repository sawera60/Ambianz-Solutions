import React from 'react'

const GetQuote = () => {
  return (
    
    <div className='min-h-screen bg-white'>

            {/* Hero Banner */}
            <div className='relative bg-green-900 py-16 px-10 text-center overflow-hidden'>
                <div className='absolute top-0 left-0 w-[300px] h-[300px] rounded-full
                                bg-yellow-600/10 blur-[100px] pointer-events-none' />
                <div className='absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full
                                bg-yellow-600/10 blur-[100px] pointer-events-none' />

                <div className='flex items-center justify-center gap-3 mb-4'>
                    <div className='h-[1px] w-[60px] bg-gradient-to-r from-transparent to-[#d1c400]' />
                    <span className='font-raleway text-[11px] text-[#d1c400] tracking-[4px] uppercase'>
                        Free Consultation
                    </span>
                    <div className='h-[1px] w-[60px] bg-gradient-to-l from-transparent to-[#d1c400]' />
                </div>

                <h1 className='font-cinzel text-[42px] font-bold text-white leading-tight'>
                    Let's Create Something
                    <span className='block bg-gradient-to-r from-[#3c5a25] via-[#d1c400] to-[#3c5a25]
                                     bg-clip-text text-transparent'>
                        Beautiful Together
                    </span>
                </h1>
                <p className='font-raleway text-[14px] text-white/50 mt-4 max-w-[500px] mx-auto'>
                    Fill in the form below and our expert designers will get back
                    to you within 24 hours with a free 3D preview.
                </p>
            </div>

            {/* Steps Progress Bar */}
            <div className='flex items-center justify-center gap-0 py-10 px-10
                            border-b border-gray-100'>
                {[
                    { number: "01", label: "Choose Service" },
                    { number: "02", label: "Your Details" },
                    { number: "03", label: "Project Details" },
                    { number: "04", label: "Submit" },
                ].map((step, index) => (
                    <div key={index} className='flex items-center'>
                        <div className='flex flex-col items-center gap-2'>
                            <div className={`w-[44px] h-[44px] flex items-center justify-center
                                            border-2 font-cinzel text-[13px] font-bold
                                            ${index === 0
                                                ? 'border-[#d1c400] text-[#d1c400] bg-[#d1c400]/10'
                                                : 'border-gray-200 text-gray-300'
                                            }`}>
                                {step.number}
                            </div>
                            <span className={`font-raleway text-[11px] tracking-widest uppercase
                                             ${index === 0 ? 'text-[#d1c400]' : 'text-gray-300'}`}>
                                {step.label}
                            </span>
                        </div>
                        {index < 3 && (
                            <div className='w-[100px] h-[1px] bg-gray-200 mb-6 mx-2' />
                        )}
                    </div>
                ))}
            </div>

            {/* Form Area */}
            <div className='max-w-[750px] mx-auto py-14 px-6'>

                {/* Step 1 — Choose Service */}
                <div className='mb-12'>
                    <div className='flex items-center gap-3 mb-6'>
                        <span className='font-cinzel text-[32px] font-bold text-gray-100'>01</span>
                        <div>
                            <h3 className='font-cinzel text-[20px] font-bold text-green-900'>
                                Which Service Are You Interested In?
                            </h3>
                            <p className='font-raleway text-[13px] text-gray-400'>
                                Select one or more services
                            </p>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-4'>
                        {[
                            { icon: "🍳", label: "Bespoke Kitchen", desc: "Modern kitchen design & installation" },
                            { icon: "🚪", label: "Designer Doors", desc: "Custom doors for every entrance" },
                            { icon: "🪞", label: "Bespoke Wardrobe", desc: "Tailored storage solutions" },
                            { icon: "📺", label: "Media Wall", desc: "Stunning entertainment focal points" },
                        ].map((service, index) => (
                            <div key={index}
                                 className='flex items-center gap-4 p-5 border-2 border-gray-100
                                            hover:border-[#d1c400] cursor-pointer
                                            transition-all duration-300 group'>
                                <span className='text-[28px]'>{service.icon}</span>
                                <div>
                                    <h4 className='font-cinzel text-[14px] font-semibold text-gray-800
                                                   group-hover:text-[#d1c400] transition-all duration-300'>
                                        {service.label}
                                    </h4>
                                    <p className='font-raleway text-[12px] text-gray-400'>
                                        {service.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className='h-[1px] bg-gray-100 mb-12' />

                {/* Step 2 — Your Details */}
                <div className='mb-12'>
                    <div className='flex items-center gap-3 mb-6'>
                        <span className='font-cinzel text-[32px] font-bold text-gray-100'>02</span>
                        <div>
                            <h3 className='font-cinzel text-[20px] font-bold text-green-900'>
                                Your Details
                            </h3>
                            <p className='font-raleway text-[13px] text-gray-400'>
                                How can we reach you?
                            </p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-4'>
                            <div className='flex flex-col gap-2 w-full'>
                                <label className='font-raleway text-[12px] text-gray-400
                                                  tracking-widest uppercase'>
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    placeholder='John Doe'
                                    className='font-raleway text-[14px] text-gray-700
                                               border-2 border-gray-100 px-4 py-3 outline-none
                                               focus:border-[#d1c400] transition-all duration-300
                                               placeholder:text-gray-300'
                                />
                            </div>
                            <div className='flex flex-col gap-2 w-full'>
                                <label className='font-raleway text-[12px] text-gray-400
                                                  tracking-widest uppercase'>
                                    Phone Number *
                                </label>
                                <input
                                    type="text"
                                    placeholder='+92 300 0000000'
                                    className='font-raleway text-[14px] text-gray-700
                                               border-2 border-gray-100 px-4 py-3 outline-none
                                               focus:border-[#d1c400] transition-all duration-300
                                               placeholder:text-gray-300'
                                />
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='font-raleway text-[12px] text-gray-400
                                              tracking-widest uppercase'>
                                Email Address *
                            </label>
                            <input
                                type="email"
                                placeholder='john@example.com'
                                className='font-raleway text-[14px] text-gray-700
                                           border-2 border-gray-100 px-4 py-3 outline-none
                                           focus:border-[#d1c400] transition-all duration-300
                                           placeholder:text-gray-300'
                            />
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className='h-[1px] bg-gray-100 mb-12' />

                {/* Step 3 — Project Details */}
                <div className='mb-12'>
                    <div className='flex items-center gap-3 mb-6'>
                        <span className='font-cinzel text-[32px] font-bold text-gray-100'>03</span>
                        <div>
                            <h3 className='font-cinzel text-[20px] font-bold text-green-900'>
                                Project Details
                            </h3>
                            <p className='font-raleway text-[13px] text-gray-400'>
                                Tell us more about your project
                            </p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-4'>

                            {/* Budget */}
                            <div className='flex flex-col gap-2 w-full'>
                                <label className='font-raleway text-[12px] text-gray-400
                                                  tracking-widest uppercase'>
                                    Budget Range *
                                </label>
                                <select className='font-raleway text-[14px] text-gray-400
                                                   border-2 border-gray-100 px-4 py-3 outline-none
                                                   focus:border-[#d1c400] transition-all duration-300
                                                   bg-white cursor-pointer'>
                                    <option value="">Select budget</option>
                                    <option>Rs. 50,000 - 1,00,000</option>
                                    <option>Rs. 1,00,000 - 3,00,000</option>
                                    <option>Rs. 3,00,000 - 5,00,000</option>
                                    <option>Rs. 5,00,000 - 10,00,000</option>
                                    <option>Rs. 10,00,000+</option>
                                </select>
                            </div>

                            {/* Timeline */}
                            <div className='flex flex-col gap-2 w-full'>
                                <label className='font-raleway text-[12px] text-gray-400
                                                  tracking-widest uppercase'>
                                    Timeline *
                                </label>
                                <select className='font-raleway text-[14px] text-gray-400
                                                   border-2 border-gray-100 px-4 py-3 outline-none
                                                   focus:border-[#d1c400] transition-all duration-300
                                                   bg-white cursor-pointer'>
                                    <option value="">Select timeline</option>
                                    <option>As soon as possible</option>
                                    <option>Within 1 month</option>
                                    <option>1 - 3 months</option>
                                    <option>3 - 6 months</option>
                                    <option>Just exploring</option>
                                </select>
                            </div>
                        </div>

                        {/* Location */}
                        <div className='flex flex-col gap-2'>
                            <label className='font-raleway text-[12px] text-gray-400
                                              tracking-widest uppercase'>
                                Your Location *
                            </label>
                            <input
                                type="text"
                                placeholder='e.g. Lahore, Karachi, Islamabad...'
                                className='font-raleway text-[14px] text-gray-700
                                           border-2 border-gray-100 px-4 py-3 outline-none
                                           focus:border-[#d1c400] transition-all duration-300
                                           placeholder:text-gray-300'
                            />
                        </div>

                        {/* Message */}
                        <div className='flex flex-col gap-2'>
                            <label className='font-raleway text-[12px] text-gray-400
                                              tracking-widest uppercase'>
                                Additional Notes
                            </label>
                            <textarea
                                rows={4}
                                placeholder='Tell us anything else about your project...'
                                className='font-raleway text-[14px] text-gray-700
                                           border-2 border-gray-100 px-4 py-3 outline-none
                                           focus:border-[#d1c400] transition-all duration-300
                                           placeholder:text-gray-300 resize-none'
                            />
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className='h-[1px] bg-gray-100 mb-12' />

                {/* Step 4 — Submit */}
                <div className='flex flex-col items-center gap-4 text-center'>
                    <span className='font-cinzel text-[32px] font-bold text-gray-100'>04</span>
                    <h3 className='font-cinzel text-[20px] font-bold text-green-900'>
                        Ready to Transform Your Space?
                    </h3>
                    <p className='font-raleway text-[13px] text-gray-400 max-w-[400px]'>
                        We'll review your request and get back to you within
                        <span className='text-[#d1c400] font-semibold'> 24 hours </span>
                        with a free 3D preview proposal.
                    </p>

                    <button className='font-cinzel mt-4 px-14 py-4 bg-green-800 text-white
                                       text-[14px] tracking-widest uppercase border-2 border-green-800
                                       hover:bg-transparent hover:text-[#d1c400] hover:border-[#d1c400]
                                       transition-all duration-300 cursor-pointer relative group
                                       overflow-hidden'>
                        <span className='absolute inset-0 translate-x-[-100%]
                                         group-hover:translate-x-[100%]
                                         bg-gradient-to-r from-transparent via-white/10 to-transparent
                                         transition-all duration-500' />
                        Submit Request
                    </button>

                    <p className='font-raleway text-[11px] text-gray-300 tracking-widest'>
                        FREE CONSULTATION · NO COMMITMENT · 3D PREVIEW INCLUDED
                    </p>
                </div>

            </div>
        </div>
  )
}

export default GetQuote