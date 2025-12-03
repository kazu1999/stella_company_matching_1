import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="flex-1 p-8 overflow-y-auto h-full">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <header className="flex flex-wrap justify-between gap-3">
          <div className="flex min-w-72 flex-col gap-2">
            <h1 className="text-text-light dark:text-text-dark text-4xl font-black leading-tight tracking-[-0.033em]">
              Dashboard
            </h1>
            <p className="text-subtext-light dark:text-subtext-dark text-base font-normal leading-normal">
              Welcome back, Tanaka-san
            </p>
          </div>
        </header>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col gap-2 rounded-xl p-6 border border-border-light dark:border-border-dark bg-white dark:bg-gray-800/50">
            <p className="text-subtext-light dark:text-subtext-dark text-base font-medium leading-normal">
              Matches
            </p>
            <p className="text-text-light dark:text-text-dark tracking-tight text-3xl font-bold leading-tight">
              128
            </p>
            <p className="text-green-600 dark:text-green-400 text-sm font-medium leading-normal">
              +5% vs last month
            </p>
          </div>
          <div className="flex flex-col gap-2 rounded-xl p-6 border border-border-light dark:border-border-dark bg-white dark:bg-gray-800/50">
            <p className="text-subtext-light dark:text-subtext-dark text-base font-medium leading-normal">
              Offers
            </p>
            <p className="text-text-light dark:text-text-dark tracking-tight text-3xl font-bold leading-tight">
              16
            </p>
            <p className="text-green-600 dark:text-green-400 text-sm font-medium leading-normal">
              +2% vs last month
            </p>
          </div>
          <div className="flex flex-col gap-2 rounded-xl p-6 border border-border-light dark:border-border-dark bg-white dark:bg-gray-800/50">
            <p className="text-subtext-light dark:text-subtext-dark text-base font-medium leading-normal">
              Articles Posted
            </p>
            <p className="text-text-light dark:text-text-dark tracking-tight text-3xl font-bold leading-tight">
              5
            </p>
            <p className="text-red-500 dark:text-red-400 text-sm font-medium leading-normal">
              -1% vs last month
            </p>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 flex flex-col gap-4 rounded-xl border border-border-light dark:border-border-dark p-6 bg-white dark:bg-gray-800/50">
            <h2 className="text-text-light dark:text-text-dark text-lg font-semibold leading-normal">
              Notifications
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-background-light dark:bg-gray-800">
                <span className="material-symbols-outlined text-primary mt-1">
                  campaign
                </span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-text-light dark:text-text-dark">
                    [Important] System Maintenance Notice
                  </p>
                  <p className="text-xs text-subtext-light dark:text-subtext-dark mt-1">
                    October 26, 2023
                  </p>
                  <p className="text-sm text-subtext-light dark:text-subtext-dark mt-2">
                    System maintenance will be performed on the following dates. Service will be unavailable during this time.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-lg bg-background-light dark:bg-gray-800">
                <span className="material-symbols-outlined text-primary mt-1">
                  celebration
                </span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-text-light dark:text-text-dark">
                    New Feature "AI Recommendation" Released
                  </p>
                  <p className="text-xs text-subtext-light dark:text-subtext-dark mt-1">
                    October 15, 2023
                  </p>
                  <p className="text-sm text-subtext-light dark:text-subtext-dark mt-2">
                    We have released a new feature where AI proposes optimal matching candidates based on your profile and activity history.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-xl border border-border-light dark:border-border-dark p-6 bg-white dark:bg-gray-800/50">
            <h2 className="text-text-light dark:text-text-dark text-lg font-semibold leading-normal">
              Contact Support
            </h2>
            <p className="text-sm text-subtext-light dark:text-subtext-dark">
              Send us your feedback, requests, or bug reports here.
            </p>
            <div className="flex flex-col gap-4 mt-2">
              <textarea
                className="w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-gray-700 text-sm placeholder:text-subtext-light dark:placeholder:text-subtext-dark focus:ring-primary focus:border-primary p-3"
                placeholder="Enter your message..."
                rows={5}
              ></textarea>
              <button className="flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90">
                <span className="material-symbols-outlined text-base">
                  send
                </span>
                <span>Send</span>
              </button>
            </div>
          </div>
        </section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <section className="flex flex-col gap-4 rounded-xl border border-border-light dark:border-border-dark p-6 bg-white dark:bg-gray-800/50">
            <div className="flex justify-between items-center">
              <h2 className="text-text-light dark:text-text-dark text-lg font-semibold leading-tight tracking-[-0.015em]">
                Recent Offers
              </h2>
              <a
                className="text-sm font-medium text-primary hover:underline"
                href="#"
              >
                View All
              </a>
            </div>
            <div className="flex flex-col">
              <table className="w-full text-left">
                <thead className="border-b border-border-light dark:border-border-dark">
                  <tr>
                    <th className="py-2 px-2 text-sm font-medium text-subtext-light dark:text-subtext-dark">
                      Company
                    </th>
                    <th className="py-2 px-2 text-sm font-medium text-subtext-light dark:text-subtext-dark">
                      Position
                    </th>
                    <th className="py-2 px-2 text-sm font-medium text-subtext-light dark:text-subtext-dark">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border-light dark:border-border-dark hover:bg-gray-50 dark:hover:bg-white/5">
                    <td className="py-3 px-2 flex items-center gap-3">
                      <img
                        className="size-8 rounded-full border border-border-light dark:border-border-dark"
                        alt="Stripe company logo"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0oH0AIaWHkxE3NGB0mA3r_HnD6SBRxoYLiqKDPqR1d06QlBN_gu27fvzerFJ2HxsI4toHMPRvq-vaubclHJAMS9crIAFZqcImuGP0F5Q-jxgeIKiuCESnxAI30w8sQcS0PsMe4P2jH8oM2v_m3DJ5GW9sCBfMTWODktiFk5i8-Ppa-XzWBgW6XTFsHd4cPQbwD70eNz261_rSpEbCwpNU31fmZ9pzUdlWmLGKML1XjMfXSs01CtABsVWN8V-SflLFwQ5sgROZ_BY"
                      />
                      <span className="text-sm font-medium text-text-light dark:text-text-dark">
                        Stripe
                      </span>
                    </td>
                    <td className="py-3 px-2 text-sm text-subtext-light dark:text-subtext-dark">
                      Backend Engineer
                    </td>
                    <td className="py-3 px-2">
                      <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-yellow-800 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-300 rounded-full">
                        Pending
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-border-light dark:border-border-dark hover:bg-gray-50 dark:hover:bg-white/5">
                    <td className="py-3 px-2 flex items-center gap-3">
                      <img
                        className="size-8 rounded-full border border-border-light dark:border-border-dark"
                        alt="Notion company logo"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIEfiPT5NiQmDIoJXAGqGrDIU1h5HvyUYXxNnZgg-vN9lfEjmkiHyb0_0OJQVhG_kPE3LXafQU91g1mAVYrgE32Qy4hIU4aPF_fsu2iy2fZVQsqqPyMjNPuK6RCpsvIZR9G4srOZAt_s39ahykYNbX29K01OY7xdaW0w4yFrdWFBaIiIG7E0jqRkbnYF6x9L6URFD5bwSqSPsk6bReY330ykGzgmfxQG2l9Urpet5lzzkIbOU5SipYUcQYtsJHbYjgqJeFH0uQnAQ"
                      />
                      <span className="text-sm font-medium text-text-light dark:text-text-dark">
                        Notion
                      </span>
                    </td>
                    <td className="py-3 px-2 text-sm text-subtext-light dark:text-subtext-dark">
                      Product Designer
                    </td>
                    <td className="py-3 px-2">
                      <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-green-800 bg-green-100 dark:bg-green-900 dark:text-green-300 rounded-full">
                        Accepted
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section className="flex flex-col gap-4 rounded-xl border border-border-light dark:border-border-dark p-6 bg-white dark:bg-gray-800/50">
            <div className="flex items-center gap-2">
              <h2 className="text-text-light dark:text-text-dark text-lg font-semibold leading-tight tracking-[-0.015em]">
                Recommended (AI)
              </h2>
              <span className="material-symbols-outlined text-primary text-xl">
                auto_awesome
              </span>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { name: 'Salesforce', desc: 'CRM Platform Leader', match: '92%', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMTif1Y_lAvpMQD5YSJpkcD-GZu1us8G2NvpM-AYSZBAFpKCAlZ0Cyqx6Yu8j6MVgBWFoa3MqHp4Jm0XsRuoCcr20BrApbbo1Am0S4vPZYyjWZwdsxQMrULZhJWKlQJRVe7icztkHGl83QNFIPC3W68OrdgOIVN881cqd08wa9Q2A-nO6ZP11D66Ur4sjndxyJdr98ni0gx--z8QED3r6ooCmZzz7sj0RMVjI8tQYa8m7nGu7QcM2ue0x5Nz7TPDczzzqCiKOZFo0' },
                { name: 'Google', desc: 'AI & Search Tech', match: '88%', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEAsH5I4fMSwt7Tgwce_cVI11UENp5TvrPeZn91ISJTGKuP06TTZqkWd69KGKfBCQ2onsoBzRpmnyZwveej_8qlPPOkKlRa-UmuPJfXz60d7zmW1jBjCiiaWhqG6FJRPxjfpOYg9s62OINlPKQmIsdSCQE6qifAa4jMaT-bPxS1b9o6QUdtJWlHTTXBUfu4DNsHv0yeI-0XPvBn0ZqrRG8UgDvNV2qj7T482D-4W-8CgL-if4vkG-olqSLaMmWX9VrOGkgxscP9pA' },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-4 rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer">
                  <img
                    className="size-10 rounded-lg border border-border-light dark:border-border-dark"
                    alt={`${c.name} logo`}
                    src={c.logo}
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-text-light dark:text-text-dark">{c.name}</p>
                    <p className="text-sm text-subtext-light dark:text-subtext-dark">{c.desc}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary">{c.match}</p>
                    <p className="text-xs text-subtext-light dark:text-subtext-dark">Match</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;