/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')
  
  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          navy: colors.purple,
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
]
const footerNavigation = {
  solutions: [
  ],
  support: [
  ],
  company: [
  ],
  legal: [
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
  ],
}

export default function Example() {
  return (
    <div className="bg-white">
      <Popover as="header" className="relative z-10">
        <div className="bg-gray-50">
          <nav
            className="relative max-w-7xl mx-auto flex items-center justify-between pt-8 px-6 xl:px-8 pb-5"
            aria-label="Global"
          >
            <div className="flex items-center justify-between w-full lg:w-auto">
              <a href="#">
                <span className="sr-only">Ben Hyder Architectural Modeling & Rendering</span>
                <img
                  className="h-8 w-auto sm:h-14"
                  src="./img/logo.svg"
                  alt="logo"
                />
              </a>
              <p className="pl-5">Ben Hyder Architectural Modeling & Rendering</p>
              <div className="-mr-2 flex items-center lg:hidden">
                <Popover.Button className="bg-navy-50 rounded-md p-2 inline-flex items-center justify-center text-navy-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-navy-500">
                  <span className="sr-only">Open main menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="hidden lg:flex lg:items-center lg:space-x-6">
              <a
                href="#contactUs"
                className="py-2 px-6 bg-white border border-transparent rounded-md shadow-md text-base font-medium text-navy-600 hover:bg-gray-50">
                Contact
              </a>
            </div>
            <div className="hidden space-x-10 lg:flex lg:ml-10">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-base font-medium text-navy-500 hover:text-navy-600">
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top lg:hidden">
            <div className="rounded-lg shadow-lg bg-white ring-1 ring-navy ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-fr-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-navy-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="pt-5 pb-6">
                <div className="px-2 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="mt-6 px-5">
                  <a
                    href="#contactUs"
                    className="block text-center w-full py-2 px-4 border border-transparent rounded-md shadow bg-gray-500 text-navy font-medium hover:bg-frgray-600"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

      <main>
        {/* Contact Section */}
        <div id='contactUs' className="relative bg-gray">
          <div className="lg:absolute lg:inset-0">
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <img
                className="w-full object-cover"
                src="/img/Pedro Perez House_Vray.png"
                alt=""
              />
            </div>
          </div>
          <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-14 lg:grid lg:grid-cols-2">
            <div className="lg:pr-8">
              <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Let's work together</h2>
                <p className="mt-4 text-lg text-gray-500 sm:mt-3">
                  I'd love to hear from you! Send me a message using the form below, or contact me directly via email (<a href="mailto:bhyder@bhamr.com"><strong>bhyder@bhamr.com</strong></a>) or phone (<a href="tel:+14239875150"><strong>423-987-5150</strong></a>)
                </p>
                <form action="" method="POST" className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                      First name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full shadow-sm sm:text-sm focus:ring-navy-500 focus:border-navy-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                      Last name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full shadow-sm sm:text-sm focus:ring-navy-500 focus:border-navy-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full shadow-sm sm:text-sm focus:ring-navy-500 focus:border-navy-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                      Company
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="company"
                        id="company"
                        autoComplete="organization"
                        className="block w-full shadow-sm sm:text-sm focus:ring-navy-500 focus:border-navy-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone
                      </label>
                      <span id="phone-description" className="text-sm text-gray-500">
                        Optional
                      </span>
                    </div>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        aria-describedby="phone-description"
                        className="block w-full shadow-sm sm:text-sm focus:ring-navy-500 focus:border-navy-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label htmlFor="how-can-we-help" className="block text-sm font-medium text-gray-700">
                        How can we help you?
                      </label>
                      <span id="how-can-we-help-description" className="text-sm text-gray-500">
                        Max. 500 characters
                      </span>
                    </div>
                    <div className="mt-1">
                      <textarea
                        id="how-can-we-help"
                        name="how-can-we-help"
                        aria-describedby="how-can-we-help-description"
                        rows={4}
                        className="block w-full shadow-sm sm:text-sm focus:ring-navy-500 focus:border-navy-500 border border-gray-300 rounded-md"
                        defaultValue={''}
                      />
                    </div>
                  </div>
                  <fieldset className="sm:col-span-2">
                    <legend className="block text-sm font-medium text-gray-700">Inquiry Type</legend>
                    <div className="mt-4 grid grid-cols-1 gap-y-4">
                      <div className="flex items-center">
                        <input
                          id="budget-under-25k"
                          name="budget"
                          defaultValue="under_25k"
                          type="radio"
                          className="focus:ring-navy-500 h-4 w-4 text-navy-600 border-gray-300"
                        />
                        <label htmlFor="budget-under-25k" className="ml-3">
                          <span className="block text-sm text-gray-700">Architectural Modeling</span>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="budget-25k-50k"
                          name="budget"
                          defaultValue="25k-50k"
                          type="radio"
                          className="focus:ring-navy-500 h-4 w-4 text-navy-600 border-gray-300"
                        />
                        <label htmlFor="budget-25k-50k" className="ml-3">
                          <span className="block text-sm text-gray-700">3D Rendering</span>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="budget-50k-100k"
                          name="budget"
                          defaultValue="50k-100k"
                          type="radio"
                          className="focus:ring-navy-500 h-4 w-4 text-navy-600 border-gray-300"
                        />
                        <label htmlFor="budget-50k-100k" className="ml-3">
                          <span className="block text-sm text-gray-700">Consulting</span>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="budget-over-100k"
                          name="budget"
                          defaultValue="over_100k"
                          type="radio"
                          className="focus:ring-navy-500 h-4 w-4 text-navy-600 border-gray-300"
                        />
                        <label htmlFor="budget-over-100k" className="ml-3">
                          <span className="block text-sm text-gray-700">Other</span>
                        </label>
                      </div>
                    </div>
                  </fieldset>
                  <div className="sm:col-span-2">
                    <label htmlFor="how-did-you-hear-about-us" className="block text-sm font-medium text-gray-700">
                      How did you hear about us?
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="how-did-you-hear-about-us"
                        id="how-did-you-hear-about-us"
                        className="shadow-sm focus:ring-navy-500 focus:border-navy-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="text-right sm:col-span-2">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-navy hover:bg-frgray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-frgray-500"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

      </main>
      <footer className="bg-gray-900" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="max-w-md mx-auto py-12 px-4 sm:max-w-lg sm:pt-16 sm:px-6 lg:max-w-7xl lg:pt-24 lg:pb-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-2">
              <img
                className="h-14"
                src="./img/logo.svg"
                alt="BHAMR"
              />
              <p className="text-gray-400 text-base">
                Making the world a better place - by design
              </p>
              <div className="flex space-x-6">
                {footerNavigation.social.map((item) => (
                  <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300">
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
            
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8">
            <p className="text-base text-gray-400 xl:text-center">&copy; 2022 Ben Hyder Architectural Modeling & Rendering, All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
