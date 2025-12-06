import React, { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'me' | 'company';
  timestamp: string;
  read: boolean;
}

interface Thread {
  id: string;
  companyName: string;
  companyLogo: string;
  matchScore: number;
  status: 'Pending' | 'Accepted' | 'Rejected';
  lastMessage: string;
  lastMessageTime: string;
  messages: Message[];
  relatedIssue: string;
}

const Chat: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeThreadId, setActiveThreadId] = useState<string>('nextgen');
  const [messageInput, setMessageInput] = useState('');
  const [offerForm, setOfferForm] = useState({
    type: 'Business Alliance',
    deadline: '',
    proposal: '',
  });
  const [showOfferForm, setShowOfferForm] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // モックデータ
  const [threads, setThreads] = useState<Thread[]>([
    {
      id: 'nextgen',
      companyName: 'NextGen Solutions',
      companyLogo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADpc6gNapbe-GOouFbHLRcEDb7qz3JKbDNcREZRvknjxuqZyW4B1exFWqVRTieSWM-7xhhBNMfV_AO1MA2N6sn6aQvmS45vwe4YLjpaSnIXypH3cuDP53vWhsc4Qm4Z1KxQ6EYN8HidJEzcZKz7IvuvjaDCPtBF83wYq_mogQnTLbx2GQxoAD0clUcoEWLgvfnfpuSbXdlmGnBXQVH_B2zTcl1YsLzbLxp2NDhD4tRlo4R9mZryPKLdzPnXfVhKaKEKUnw8Ab8X-A',
      matchScore: 92,
      status: 'Pending',
      lastMessage: "That sounds great! We're looking...",
      lastMessageTime: '10:45 AM',
      relatedIssue: 'New Customer Acquisition (AI)',
      messages: [
        {
          id: '1',
          text: "Hello! Thank you for reaching out. We've reviewed your proposal and are very interested in moving forward.",
          sender: 'company',
          timestamp: '10:42 AM',
          read: true,
        },
        {
          id: '2',
          text: "That sounds great! We're looking forward to discussing the next steps. When would be a good time for a quick call?",
          sender: 'me',
          timestamp: '10:45 AM',
          read: true,
        },
      ],
    },
    {
      id: 'innovate',
      companyName: 'Innovate Corp.',
      companyLogo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFYRkMsN4JqZy-KS0CoFNDZL_VE_-hdP7MSuvOeL10wmmRwbvFtgvh-ELV-9wLe9sZBTcC8aIpuzsnFEHf-OAt_yEsJQ2YmD1Q736wfOLnMdbZ8DDIuy3APPsFjjX7SVf9WsdTQ9LEFqfk7VSkV7bXiu-ZBtmENpBj-4xF1AD44Bh9D32C2Rben1wF8vd9hNjpzJUkazijX9buGf8Qx7nYkC-kEe-PrI1XiiJfRnS0BqneVBUvXyVGGcf_tpkjDz_hff1cU_UFSCk',
      matchScore: 88,
      status: 'Accepted',
      lastMessage: 'Please find the attached contract.',
      lastMessageTime: 'Yesterday',
      relatedIssue: 'Global Expansion',
      messages: [
        {
          id: '1',
          text: 'Thank you for your interest. We would like to proceed with the partnership.',
          sender: 'company',
          timestamp: 'Yesterday 3:20 PM',
          read: true,
        },
        {
          id: '2',
          text: 'Please find the attached contract.',
          sender: 'company',
          timestamp: 'Yesterday 4:15 PM',
          read: true,
        },
      ],
    },
    {
      id: 'quantum',
      companyName: 'QuantumLeap Co.',
      companyLogo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDC1IhKMbiEbpXwfTCVd7kKuSGyv0k7WTvtA678-XoMV7-c2JkkNxY66XDk8yuxMfa03TlFvXEZudcZEycnfK1tZ5wu5UoTAEgHEM_a5w0n8D65PdktX1wMvbSDPPx3KqKjtZ4ToFMgbmIPFwm6CpRm-Wq7tF_g3uFu01pN8tddAuAgIOFQqTLwN5lOosHDh3EhmgJM0d6CIU5ZEG_SMjmN9fpwVtdlTBVg87MscWMZJUpGyLHFxPpQdNOuvwyyrNbHzTKDU6OyCXk',
      matchScore: 85,
      status: 'Pending',
      lastMessage: 'We are reviewing your proposal...',
      lastMessageTime: '2 days ago',
      relatedIssue: 'AI Integration',
      messages: [
        {
          id: '1',
          text: 'We received your proposal and are currently reviewing it. We will get back to you soon.',
          sender: 'company',
          timestamp: '2 days ago 11:30 AM',
          read: true,
        },
      ],
    },
  ]);

  const activeThread = threads.find(t => t.id === activeThreadId) || threads[0];

  // メッセージ送信
  const handleSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!messageInput.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: messageInput,
      sender: 'me',
      timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      read: false,
    };

    setThreads(prevThreads =>
      prevThreads.map(thread =>
        thread.id === activeThreadId
          ? {
              ...thread,
              messages: [...thread.messages, newMessage],
              lastMessage: messageInput,
              lastMessageTime: newMessage.timestamp,
            }
          : thread
      )
    );

    setMessageInput('');

    // 自動返信（シミュレーション）
    setTimeout(() => {
      const autoReply: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Thank you for your message. We will review it and get back to you soon.',
        sender: 'company',
        timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        read: false,
      };

      setThreads(prevThreads =>
        prevThreads.map(thread =>
          thread.id === activeThreadId
            ? {
                ...thread,
                messages: [...thread.messages, autoReply],
                lastMessage: autoReply.text,
                lastMessageTime: autoReply.timestamp,
              }
            : thread
        )
      );
    }, 2000);
  };

  // オファー送信
  const handleSendOffer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!offerForm.proposal.trim()) {
      alert('Please enter a proposal');
      return;
    }

    const offerMessage: Message = {
      id: Date.now().toString(),
      text: `[OFFER] Type: ${offerForm.type} | Deadline: ${offerForm.deadline || 'Not specified'} | Proposal: ${offerForm.proposal}`,
      sender: 'me',
      timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      read: false,
    };

    setThreads(prevThreads =>
      prevThreads.map(thread =>
        thread.id === activeThreadId
          ? {
              ...thread,
              messages: [...thread.messages, offerMessage],
              lastMessage: `[OFFER] ${offerForm.proposal.substring(0, 30)}...`,
              lastMessageTime: offerMessage.timestamp,
              status: 'Pending',
            }
          : thread
      )
    );

    setOfferForm({ type: 'Business Alliance', deadline: '', proposal: '' });
    setShowOfferForm(false);
    alert('Offer sent successfully!');
  };

  // メッセージエリアの自動スクロール
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [activeThread.messages]);

  // フィルタリング
  const filteredThreads = threads.filter(thread =>
    thread.companyName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatTime = (time: string) => {
    return time;
  };

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
            <input
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-background-light dark:bg-gray-800 border-none text-sm placeholder:text-subtext-light dark:text-white focus:ring-1 focus:ring-primary"
              placeholder="Search by company"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {filteredThreads.map((thread) => (
            <div
              key={thread.id}
              onClick={() => setActiveThreadId(thread.id)}
              className={`flex gap-4 px-4 py-3 border-b border-border-light dark:border-gray-800 cursor-pointer transition-colors ${
                activeThreadId === thread.id
                  ? 'bg-primary/5 dark:bg-primary/10 border-r-2 border-primary'
                  : 'hover:bg-gray-50 dark:hover:bg-white/5'
              }`}
            >
              <img className="size-12 rounded-full" src={thread.companyLogo} alt={thread.companyName} />
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-1">
                  <p className="font-medium text-text-light dark:text-white truncate">{thread.companyName}</p>
                  <span className="text-xs text-subtext-light dark:text-subtext-dark">{thread.lastMessageTime}</span>
                </div>
                <p className="text-sm text-subtext-light dark:text-subtext-dark truncate">{thread.lastMessage}</p>
                <span
                  className={`mt-1 inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
                    thread.status === 'Accepted'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                      : thread.status === 'Rejected'
                      ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                  }`}
                >
                  {thread.status}
                </span>
              </div>
            </div>
          ))}
          {filteredThreads.length === 0 && (
            <div className="p-4 text-center text-subtext-light dark:text-subtext-dark text-sm">
              No threads found
            </div>
          )}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col h-full bg-background-light dark:bg-gray-900">
        <header className="flex items-center justify-between p-4 border-b border-border-light dark:border-gray-800 bg-white dark:bg-background-dark">
          <div className="flex items-center gap-3">
            <img className="size-10 rounded-full" src={activeThread.companyLogo} alt={activeThread.companyName} />
            <h2 className="text-lg font-semibold text-text-light dark:text-white">{activeThread.companyName}</h2>
          </div>
          <div className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-lg">
            <span className="material-symbols-outlined text-lg">auto_awesome</span>
            <span className="text-sm font-semibold">Matching Score: {activeThread.matchScore}%</span>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {activeThread.messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start gap-3 max-w-lg ${message.sender === 'me' ? 'ml-auto justify-end flex-row-reverse' : ''}`}
            >
              <img
                className="size-8 rounded-full"
                src={
                  message.sender === 'me'
                    ? 'https://lh3.googleusercontent.com/aida-public/AB6AXuC42wiFrxf0lOsJfkeqazEwf6kSarROrT-9pv9VRqtWnV9PGje_GSUUjwbV33ANhKD4vXGraj0wN6F_A3LQ4_oMrQ72AKlLCPp72aj9h87ShZhj40SLUef2ec3RW9H9NLqJ73dVEpoU8FZAOvM54PXv5p1kSMVAAfCpEHs4JpUaNmIAREfp3kn1eAd5wE-jQ-UqjDNe6ARCQR7ByBdWXSjtzc09UX7XLiKkJmntIszjoUC4ag-5dcppiA3B1EHyrr6DQag4CfGhRvI'
                    : activeThread.companyLogo
                }
                alt={message.sender === 'me' ? 'Me' : activeThread.companyName}
              />
              <div
                className={`p-4 rounded-xl shadow-sm ${
                  message.sender === 'me'
                    ? 'bg-primary text-white rounded-tr-none'
                    : 'bg-white dark:bg-gray-800 text-text-light dark:text-gray-200 rounded-tl-none'
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                <div className={`flex items-center gap-1 mt-2 ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                  <p className={`text-xs ${message.sender === 'me' ? 'text-blue-200' : 'text-subtext-light dark:text-subtext-dark'}`}>
                    {formatTime(message.timestamp)}
                  </p>
                  {message.sender === 'me' && (
                    <span className={`material-symbols-outlined text-sm ${message.read ? 'text-blue-200' : 'text-blue-300'}`}>
                      {message.read ? 'done_all' : 'done'}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 bg-white dark:bg-background-dark border-t border-border-light dark:border-gray-800">
          {/* Offer Form Panel */}
          {showOfferForm && (
            <div className="border border-border-light dark:border-gray-700 rounded-xl p-4 mb-4 bg-gray-50 dark:bg-gray-800/50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-text-light dark:text-white">Send Offer</h3>
                <button
                  onClick={() => setShowOfferForm(false)}
                  className="text-subtext-light dark:text-subtext-dark hover:text-text-light dark:hover:text-white"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
              <form onSubmit={handleSendOffer}>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-xs font-medium text-subtext-light dark:text-subtext-dark mb-1 block">Type</label>
                    <select
                      className="form-select w-full rounded-md border-border-light dark:border-gray-600 bg-white dark:bg-gray-700 text-sm dark:text-white"
                      value={offerForm.type}
                      onChange={(e) => setOfferForm({ ...offerForm, type: e.target.value })}
                    >
                      <option>Business Alliance</option>
                      <option>Information Exchange</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-subtext-light dark:text-subtext-dark mb-1 block">Deadline</label>
                    <input
                      type="date"
                      className="form-input w-full rounded-md border-border-light dark:border-gray-600 bg-white dark:bg-gray-700 text-sm dark:text-white"
                      value={offerForm.deadline}
                      onChange={(e) => setOfferForm({ ...offerForm, deadline: e.target.value })}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="text-xs font-medium text-subtext-light dark:text-subtext-dark mb-1 block">Related Issue</label>
                  <input
                    type="text"
                    readOnly
                    value={activeThread.relatedIssue}
                    className="form-input w-full rounded-md border-border-light dark:border-gray-600 bg-gray-100 dark:bg-gray-600 text-sm dark:text-gray-300"
                  />
                </div>
                <div className="mb-4">
                  <label className="text-xs font-medium text-subtext-light dark:text-subtext-dark mb-1 block">Proposal</label>
                  <textarea
                    rows={2}
                    placeholder="Enter proposal details..."
                    className="form-textarea w-full rounded-md border-border-light dark:border-gray-600 bg-white dark:bg-gray-700 text-sm dark:text-white"
                    value={offerForm.proposal}
                    onChange={(e) => setOfferForm({ ...offerForm, proposal: e.target.value })}
                    required
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowOfferForm(false)}
                    className="px-4 py-2 rounded-lg border border-border-light dark:border-gray-600 text-sm font-medium text-text-light dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary/90"
                  >
                    Send Offer
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Message Input */}
          <div className="flex items-center gap-2">
            {!showOfferForm && (
              <button
                onClick={() => setShowOfferForm(true)}
                className="px-3 py-2 rounded-lg border border-border-light dark:border-gray-600 text-sm font-medium text-text-light dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="material-symbols-outlined text-base mr-1">send</span>
                Send Offer
              </button>
            )}
            <form onSubmit={handleSendMessage} className="flex-1 flex items-center gap-2 bg-background-light dark:bg-gray-800 rounded-xl p-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 bg-transparent border-none focus:ring-0 text-sm text-text-light dark:text-white placeholder:text-subtext-light"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
              />
              <button
                type="button"
                className="p-2 text-subtext-light hover:text-primary dark:text-gray-400 dark:hover:text-primary rounded-full"
                title="Emoji"
              >
                <span className="material-symbols-outlined">sentiment_satisfied</span>
              </button>
              <button
                type="button"
                className="p-2 text-subtext-light hover:text-primary dark:text-gray-400 dark:hover:text-primary rounded-full"
                title="Attach file"
              >
                <span className="material-symbols-outlined">attach_file</span>
              </button>
              <button
                type="submit"
                disabled={!messageInput.trim()}
                className="p-2 bg-primary text-white rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="material-symbols-outlined">send</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
