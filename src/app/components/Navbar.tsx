'use client'
import { motion } from 'framer-motion'

export function Navbar() {
  return (
    <motion.nav
      className="fixed right-0 flex h-full items-center mr-[15px] z-[90]
            max-sm:block max-sm:h-0 max-sm:w-full max-sm:bottom-[34px] max-sm:mr-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: [30, 0] }}
      transition={{
        duration: 0.5,
        delay: 0.5,
      }}
    >
      <ul
        className="old py-11 px-2 rounded-full flex flex-col space-y-8 min-mt-90
                max-sm:rounded-none max-sm:flex-row max-sm:py-2 max-sm:justify-center max-sm:px-0 max-sm:space-y-0 max-sm:space-x-10"
      >
        <a href="/" className="group items-center flex">
          <p className="absolute right-[54px] bgb py-1 px-2 rounded-md text-lg italic hidden sm:group-hover:flex z-10 group:">
            Início
          </p>
          <i className="w-5 h-5 bgb rotate-45 rounded-md absolute right-[50px] hidden sm:group-hover:flex" />
          <svg
            className="hover:ld  "
            xmlns="http://www.w3.org/2000/svg"
            width="3rem"
            height="3.1rem"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 19v-8.5a1 1 0 0 0-.4-.8l-7-5.25a1 1 0 0 0-1.2 0l-7 5.25a1 1 0 0 0-.4.8V19a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1z"
            />
          </svg>
        </a>

        <a href="./About" className="group items-center flex">
          <p className="absolute right-[54px] bgb py-1 px-2 rounded-md text-lg italic hidden sm:group-hover:flex z-10 group:">
            Sobre
          </p>
          <i className="w-5 h-5 bgb rotate-45 rounded-md absolute right-[50px] hidden sm:group-hover:flex" />
          <svg
            className="hover:ld"
            xmlns="http://www.w3.org/2000/svg"
            width="3rem"
            height="3.1rem"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M17.755 14a2.249 2.249 0 0 1 2.248 2.25v.575c0 .894-.32 1.759-.9 2.438c-1.57 1.833-3.957 2.738-7.103 2.738s-5.532-.905-7.098-2.74a3.75 3.75 0 0 1-.898-2.434v-.578A2.249 2.249 0 0 1 6.253 14h11.502Zm0 1.5H6.252a.749.749 0 0 0-.75.75v.577c0 .535.192 1.053.54 1.46c1.253 1.469 3.22 2.214 5.957 2.214c2.739 0 4.706-.745 5.963-2.213a2.25 2.25 0 0 0 .54-1.463v-.576a.749.749 0 0 0-.748-.749ZM12 2.005a5 5 0 1 1 0 10a5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7Z"
            />
          </svg>
        </a>

        <a href="./Work" className="group items-center flex">
          <p className="absolute right-[54px] bgb py-1 px-2 rounded-md text-lg italic hidden sm:group-hover:flex z-10 group:">
            Trabalho
          </p>
          <i className="w-5 h-5 bgb rotate-45 rounded-md absolute right-[50px] hidden sm:group-hover:flex" />
          <svg
            className="hover:ld"
            xmlns="http://www.w3.org/2000/svg"
            width="3rem"
            height="3.1rem"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M17 7a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3h-1Zm-3-1h-4a1 1 0 0 0-1 1h6a1 1 0 0 0-1-1ZM6 9h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1Z"
              clip-rule="evenodd"
            />
          </svg>
        </a>

        <a href="./Gallery" className="group items-center flex">
          <p className="absolute right-[54px] bgb py-1 px-2 rounded-md text-lg italic hidden sm:group-hover:flex z-10 group:">
            Galeria
          </p>
          <i className="w-5 h-5 bgb rotate-45 rounded-md absolute right-[50px] hidden sm:group-hover:flex" />
          <svg
            className="hover:ld"
            xmlns="http://www.w3.org/2000/svg"
            width="3rem"
            height="3.1rem"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <rect width="18" height="14" x="3" y="3" rx="2" />
              <path d="M4 21h1m4 0h1m4 0h1m4 0h1" />
            </g>
          </svg>
        </a>

        {/* <a href="./Feedback" className="group items-center flex" >           
                    <p className="absolute right-[54px] bgb py-1 px-2 rounded-md text-lg italic hidden sm:group-hover:flex z-10 group:">Comentário</p>
                    <i className="w-5 h-5 bgb rotate-45 rounded-md absolute right-[50px] hidden sm:group-hover:flex" /> 
                        <svg className="hover:ld"
                        xmlns="http://www.w3.org/2000/svg" width="3rem" height="3.1rem" viewBox="0 0 24 24"><path fill="currentColor" d="M9 22c-.6 0-1-.4-1-1v-3H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2h-6.1l-3.7 3.7c-.2.2-.4.3-.7.3H9m1-6v3.1l3.1-3.1H20V4H4v12h6m6.3-10l-1.4 3H17v4h-4V8.8L14.3 6h2m-6 0L8.9 9H11v4H7V8.8L8.3 6h2Z"/></svg></a> */}

        <a href="./Contact" className="group items-center flex">
          <p className="absolute right-[54px] bgb py-1 px-2 rounded-md text-lg italic hidden sm:group-hover:flex z-10 group:">
            Contato
          </p>
          <i className="w-5 h-5 bgb rotate-45 rounded-md absolute right-[50px] hidden sm:group-hover:flex" />
          <svg
            className="hover:ld"
            xmlns="http://www.w3.org/2000/svg"
            width="3rem"
            height="3.1rem"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5l-8-5h16zm0 12H4V8l8 5l8-5v10z"
            />
          </svg>
        </a>
      </ul>
    </motion.nav>
  )
}
