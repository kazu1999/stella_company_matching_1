import React from 'react';

const Chat: React.FC = () => {
  return (
    <div className="flex flex-row h-full overflow-hidden flex-1">
      {/* Thread List */}
      <div className="w-full max-w-sm flex flex-col border-r border-border-light dark:border-gray-800 bg-white dark:bg-background-dark h-full">
        <div className="p-4 border-b border-border-light dark:border-gray-800">
          <h2 className="text-lg font-semibold text-text-light dark:text-white mb-3 px-1">Offer Threads</h2>
          <div className="relative">
             <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-subtext-light dark:text-subtext-dark">
                <span className="material-symbols-outlined text-lg">search</span>
             </span>
             <input className="w-full pl-10 pr-4 py-2 rounded-lg bg-background-light dark:bg-gray-800 border-none text-sm placeholder:text-subtext-light dark:text-white focus:ring-1 focus:ring-primary" placeholder="Search by company" />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
           {/* Active Thread */}
           <div className="flex gap-4 bg-primary/5 dark:bg-primary/10 px-4 py-3 border-r-2 border-primary cursor-pointer">
              <img className="size-12 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADpc6gNapbe-GOouFbHLRcEDb7qz3JKbDNcREZRvknjxuqZyW4B1exFWqVRTieSWM-7xhhBNMfV_AO1MA2N6sn6aQvmS45vwe4YLjpaSnIXypH3cuDP53vWhsc4Qm4Z1KxQ6EYN8HidJEzcZKz7IvuvjaDCPtBF83wYq_mogQnTLbx2GQxoAD0clUcoEWLgvfnfpuSbXdlmGnBXQVH_B2zTcl1YsLzbLxp2NDhD4tRlo4R9mZryPKLdzPnXfVhKaKEKUnw8Ab8X-A" alt="NextGen" />
              <div className="flex-1 min-w-0">
                 <div className="flex justify-between items-center mb-1">
                    <p className="font-medium text-text-light dark:text-white truncate">NextGen Solutions</p>
                    <span className="text-xs text-subtext-light dark:text-subtext-dark">10:45 AM</span>
                 </div>
                 <p className="text-sm text-subtext-light dark:text-subtext-dark truncate">That sounds great! We're looking...</p>
                 <span className="mt-1 inline-block px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 text-xs font-medium">Pending</span>
              </div>
           </div>
           {/* Other Threads */}
           <div className="flex gap-4 px-4 py-3 border-b border-border-light dark:border-gray-800 cursor-pointer hover:bg-gray-50 dark:hover:bg-white/5">
               <img className="size-12 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFYRkMsN4JqZy-KS0CoFNDZL_VE_-hdP7MSuvOeL10wmmRwbvFtgvh-ELV-9wLe9sZBTcC8aIpuzsnFEHf-OAt_yEsJQ2YmD1Q736wfOLnMdbZ8DDIuy3APPsFjjX7SVf9WsdTQ9LEFqfk7VSkV7bXiu-ZBtmENpBj-4xF1AD44Bh9D32C2Rben1wF8vd9hNjpzJUkazijX9buGf8Qx7nYkC-kEe-PrI1XiiJfRnS0BqneVBUvXyVGGcf_tpkjDz_hff1cU_UFSCk" alt="Innovate" />
              <div className="flex-1 min-w-0">
                 <div className="flex justify-between items-center mb-1">
                    <p className="font-medium text-text-light dark:text-white truncate">Innovate Corp.</p>
                    <span className="text-xs text-subtext-light dark:text-subtext-dark">Yesterday</span>
                 </div>
                 <p className="text-sm text-subtext-light dark:text-subtext-dark truncate">Please find the attached contract.</p>
                 <span className="mt-1 inline-block px-2 py-0.5 rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 text-xs font-medium">Accepted</span>
              </div>
           </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col h-full bg-background-light dark:bg-gray-900">
         <header className="flex items-center justify-between p-4 border-b border-border-light dark:border-gray-800 bg-white dark:bg-background-dark">
            <div className="flex items-center gap-3">
               <img className="size-10 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQqGngMggKMvqkbQo4K8PjWTjhu8Q074R7NfPGIQhmkHSWLrxwPbIHxz7G65jzaBSzvBwIc-aavO8P7w5NPl7Uu4HZfiGdLUaJoKZfuxBRUqTC5_LHw9lyj0NGJGMxIySeubj9Hom4K8BsG0a7MzkH2MgcFKYTKlhN00S4wDM9pHXjOjluiX-Ixh66VGDGJwsmvd_UyCZEeQafY2PctKs1KVh0obJ9YbdgjG3YUPVYFONCgYm61CZMVf7aUSRNWiddyyyyoCTVStM" alt="NextGen" />
               <h2 className="text-lg font-semibold text-text-light dark:text-white">NextGen Solutions Inc.</h2>
            </div>
            <div className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-lg">
               <span className="material-symbols-outlined text-lg">auto_awesome</span>
               <span className="text-sm font-semibold">Matching Score: 92%</span>
            </div>
         </header>
         
         <div className="flex-1 overflow-y-auto p-6 space-y-6">
            <div className="flex items-start gap-3 max-w-lg">
                <img className="size-8 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtW5ZFn7YmSPvh6w13ib1lZkMIpcpS7Rn1wzWNqA6d43rtzJlNg4z15RZfZpKP8nrgJUJVQ_cV3N7izBeB20Ym5CLD-8HE6ftKCQFUoTv-kQXq-2FJZrmxBtAuEr8bZyulMjn_Tj-BU8Im8VKe35HCRkiHkVqP7gSrim5Qpg1x1vqZwInajEyoWtMcjgFlcQ2uX6Wh79HaoizWOYYiWwLQR672ujnz-CCvcJHwHxmyndCKiFsKmXZS4DCWrWliTWr_ItgN3j9HUE0" alt="Avatar" />
                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl rounded-tl-none shadow-sm">
                   <p className="text-sm text-text-light dark:text-gray-200">Hello! Thank you for reaching out. We've reviewed your proposal and are very interested in moving forward.</p>
                   <p className="text-xs text-subtext-light dark:text-subtext-dark mt-2 text-right">10:42 AM</p>
                </div>
            </div>
            
             <div className="flex items-start gap-3 max-w-lg ml-auto justify-end">
                <div className="bg-primary text-white p-4 rounded-xl rounded-tr-none shadow-sm">
                   <p className="text-sm">That sounds great! We're looking forward to discussing the next steps. When would be a good time for a quick call?</p>
                   <div className="flex items-center justify-end gap-1 mt-2">
                       <p className="text-xs text-blue-200">10:45 AM</p>
                       <span className="material-symbols-outlined text-sm text-blue-200">done_all</span>
                   </div>
                </div>
                 <img className="size-8 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC42wiFrxf0lOsJfkeqazEwf6kSarROrT-9pv9VRqtWnV9PGje_GSUUjwbV33ANhKD4vXGraj0wN6F_A3LQ4_oMrQ72AKlLCPp72aj9h87ShZhj40SLUef2ec3RW9H9NLqJ73dVEpoU8FZAOvM54PXv5p1kSMVAAfCpEHs4JpUaNmIAREfp3kn1eAd5wE-jQ-UqjDNe6ARCQR7ByBdWXSjtzc09UX7XLiKkJmntIszjoUC4ag-5dcppiA3B1EHyrr6DQag4CfGhRvI" alt="My Avatar" />
            </div>
         </div>
         
         <div className="p-4 bg-white dark:bg-background-dark border-t border-border-light dark:border-gray-800">
             {/* Offer Form Panel */}
             <div className="border border-border-light dark:border-gray-700 rounded-xl p-4 mb-4 bg-gray-50 dark:bg-gray-800/50">
                <h3 className="font-semibold text-text-light dark:text-white mb-4">Send Offer</h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="text-xs font-medium text-subtext-light dark:text-subtext-dark mb-1 block">Type</label>
                        <select className="form-select w-full rounded-md border-border-light dark:border-gray-600 bg-white dark:bg-gray-700 text-sm dark:text-white">
                            <option>Business Alliance</option>
                            <option>Information Exchange</option>
                        </select>
                    </div>
                    <div>
                         <label className="text-xs font-medium text-subtext-light dark:text-subtext-dark mb-1 block">Deadline</label>
                        <input type="date" className="form-input w-full rounded-md border-border-light dark:border-gray-600 bg-white dark:bg-gray-700 text-sm dark:text-white" />
                    </div>
                </div>
                <div className="mb-4">
                     <label className="text-xs font-medium text-subtext-light dark:text-subtext-dark mb-1 block">Related Issue</label>
                     <input type="text" readOnly value="New Customer Acquisition (AI)" className="form-input w-full rounded-md border-border-light dark:border-gray-600 bg-gray-100 dark:bg-gray-600 text-sm dark:text-gray-300" />
                </div>
                 <div>
                     <label className="text-xs font-medium text-subtext-light dark:text-subtext-dark mb-1 block">Proposal</label>
                     <textarea rows={2} placeholder="Enter proposal details..." className="form-textarea w-full rounded-md border-border-light dark:border-gray-600 bg-white dark:bg-gray-700 text-sm dark:text-white"></textarea>
                </div>
             </div>
             
             {/* Message Input */}
             <div className="flex items-center gap-2 bg-background-light dark:bg-gray-800 rounded-xl p-2">
                 <input type="text" placeholder="Type your message..." className="flex-1 bg-transparent border-none focus:ring-0 text-sm text-text-light dark:text-white placeholder:text-subtext-light" />
                 <button className="p-2 text-subtext-light hover:text-primary dark:text-gray-400 dark:hover:text-primary rounded-full"><span className="material-symbols-outlined">sentiment_satisfied</span></button>
                 <button className="p-2 text-subtext-light hover:text-primary dark:text-gray-400 dark:hover:text-primary rounded-full"><span className="material-symbols-outlined">attach_file</span></button>
                 <button className="p-2 bg-primary text-white rounded-lg hover:bg-primary/90"><span className="material-symbols-outlined">send</span></button>
             </div>
         </div>
      </div>
    </div>
  );
};

export default Chat;