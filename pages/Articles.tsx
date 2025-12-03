import React from 'react';

const Articles: React.FC = () => {
  const articles = [
    { title: "Future of SaaS with Next-Gen AI", category: "DX Promotion", date: "2023/10/27", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4--DkATB9s9_wEOLB0QL7ebBLIHIYYnLl7u4SYwoL1Nr7KiOBCZPLrgW_JiID--rZmyqekh0nM40qB01TMNT6TQyYb6Jtxrh8w3KAY8v9s_WPWJBNbff2h12MehrAw0KUP-TptTCcuG81Iqp84ZaE3yiaa11Dgjn6arAo0IxH-8-ZQljPXsHUECMdPm9sbaBxWBVJggzEsM6pPWReUAgLqu5MXLoFDcto4BHDZGkAhqNItZ5LuUii6UVQWFZBxQ_aVr8wyKL1-yw" },
    { title: "Fundraising Guide for Startups", category: "New Business", date: "2023/10/26", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnpO0YYdJPphgUVn3sZ3RuV2vZbWqW9ihvr1vvvR2gThTjkALwiSi2ZGpv9MQ0YC5g-AN8jp_D356WLCr-dxVl_llUibEKwR5ma_p0u1cyorgaqlECDvRxOjfBloMzlqa23QwOMdtYWzmnMkZdhya8NqBIE4tSCoWw8mAPPX38Z-Lu_HeoBULn56HNjo_iU72650Uyp_HNSuWHt2dHmaU-qMMi3Ac3QCrKtE2QrfPuqgEYuhYRrbMCZcJuf70aAMqwa7H4YM_q2L4" },
    { title: "5 Steps to Successful Content Marketing", category: "Marketing", date: "2023/10/25", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3Eavc63Pup2JuvbzS5S6l9RcLPPUV89asW1PpUheaiQhcXMLQfZ86Kv466vjBBkTPsdW8pTLvNS_TikbR8y2PwlYyFTNsvjP6Yi50fw66KNju5cy8FgAcEBMmvyJPAd_V5Lofnx3r1NlwSUk4eUbnl7wnhi9XDSKZ638y_y_-TeKrXXfQdqtXK1YG1LEq2WJyYhUT8WfG2_GVFeiogDWMuzWSByguFLUEWxO8XgeH0WwOvA9aQmcONblGwg9485xSBJcs4uv3Q3I" },
    { title: "Data-Driven Business Improvement", category: "DX Promotion", date: "2023/10/24", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBTr17tayx9K7DzuPknrr8NC1T8aLdDCtXyuvx4KgI-IJRWjQ7SA5x-lu_0-U8ppQIIKVPumRUpGYaH_YzK_UwKxuzGMaQ-jyM-ibW6DFXvDAIqLIWdeCzTCA1PToEMNUpZmI70rthWWUj5hNGjhejhcdQuRND11BuC3_8pBvjO_Pmp7-5rfBonV_osyTF8QDytFqEFq50LJCR1W9muyfkfKvhHhPor-NNDFBtzsuVEH2OlfOKFGh3VoVKY7ckMw9hGJHEm78yHFc" },
    { title: "Latest Trends in BtoB Matching Platforms", category: "New Business", date: "2023/10/23", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkLPdRx5C4GCS4u64zxb0jL7ErG325aKi-t5xJSXocWZL7FKtLPykf2UBMWkcjlNz0JbSRl1skywkvo1P1T3HqkXrDweT3yxMi-DyMWgpp-5kB3kpN_iWuDt3THaleDBdzvbxv8dkW7cMrWV0m8s1K24CRPbbnsCk14hYr2bDY9mozbrB7mf3pUvsQPAip0OrlTLfB5ur6yiYoUPZkndUMHy8Jwj6VZfPTzrKTjWfTCW8VYO-ibkAvLnUEFVwbdiSk7DoKIFjWTeM" },
    { title: "Building an Inside Sales Team", category: "Marketing", date: "2023/10/22", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzbk0iz-xlWNZn6isxDdwMNLRnfEFe6y4ibCxbULxeeqWU7MZD6quii6S8IE6gWFTIrhVBI1NAN4IWVvUeQBkFlX0-68trXsauCfdZRzJxf_1RcBvwmsraDHFcpHabItVsF1idq69zdEwt9_DDH-cv6fJsQbKkCsAn3wsI3mUacU63Gjq01l8XfSU9RKRQMDKhMAdC9e-LbBkgCfIuLD3RO-WfPBND4WraScgIajUBAMhtjNeaZ-sFFJmEjgIhUTxfA0ZEXpW18iY" }
  ];

  return (
    <div className="flex-1 p-8 overflow-y-auto h-full">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-wrap justify-between items-center gap-4 mb-6">
          <h1 className="text-4xl font-black text-text-light dark:text-white">Article Content</h1>
          <button className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-primary/90">
             <span className="material-symbols-outlined">auto_awesome</span> Generate with AI
          </button>
        </header>

        <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
           <div className="flex gap-2 flex-wrap">
              <button className="px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm">All</button>
              <button className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-subtext-light dark:text-gray-400 font-medium text-sm hover:bg-gray-200 dark:hover:bg-gray-700">DX Promotion</button>
              <button className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-subtext-light dark:text-gray-400 font-medium text-sm hover:bg-gray-200 dark:hover:bg-gray-700">New Business</button>
              <button className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-subtext-light dark:text-gray-400 font-medium text-sm hover:bg-gray-200 dark:hover:bg-gray-700">Marketing</button>
           </div>
           <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
              <button className="px-4 py-1.5 bg-white dark:bg-background-dark shadow-sm rounded-md text-sm font-medium text-text-light dark:text-white">Newest</button>
              <button className="px-4 py-1.5 text-sm font-medium text-subtext-light dark:text-gray-400">Popular</button>
           </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
           {articles.map((article, i) => (
             <div key={i} className="flex flex-col gap-3 group cursor-pointer">
                <div className="w-full aspect-video bg-cover bg-center rounded-lg overflow-hidden relative">
                   <div className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105" style={{ backgroundImage: `url("${article.img}")` }}></div>
                </div>
                <div className="flex flex-col gap-1">
                   <p className="text-primary text-xs font-bold uppercase tracking-wider">{article.category}</p>
                   <h3 className="text-base font-semibold text-text-light dark:text-white leading-normal group-hover:text-primary transition-colors">{article.title}</h3>
                   <p className="text-sm text-subtext-light dark:text-subtext-dark">{article.date}</p>
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;