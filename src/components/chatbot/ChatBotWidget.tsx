'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, MessageCircle, X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import {
  CHATBOT_FAQ,
  CHATBOT_WELCOME,
  CHATBOT_WHATSAPP_CTA,
} from '@/data/chatbot';
import { WHATSAPP_URL } from '@/config/links';

interface ChatMessage {
  id: string;
  role: 'bot' | 'user';
  text: string;
}

const TYPING_DELAY_MS = 650;

const ChatBotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [askedIds, setAskedIds] = useState<Set<string>>(new Set());
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    requestAnimationFrame(() => {
      scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
    });
  }, []);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: 'welcome',
          role: 'bot',
          text: CHATBOT_WELCOME,
        },
      ]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  const replyWithAnswer = useCallback(
    (faqId: string, question: string, answer: string) => {
      setMessages((prev) => [
        ...prev,
        { id: `user-${faqId}-${Date.now()}`, role: 'user', text: question },
      ]);
      setAskedIds((prev) => new Set(prev).add(faqId));
      setIsTyping(true);

      window.setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          { id: `bot-${faqId}-${Date.now()}`, role: 'bot', text: answer },
        ]);
      }, TYPING_DELAY_MS);
    },
    []
  );

  const unanswered = CHATBOT_FAQ.filter((item) => !askedIds.has(item.id));

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.22 }}
            className="absolute bottom-full left-0 mb-3 w-[min(340px,calc(100vw-1.5rem))] rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.18)] border border-traditional-200 bg-white flex flex-col max-h-[min(70vh,480px)]"
            role="dialog"
            aria-label="Ink Baba chat assistant"
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-3 px-4 py-3 bg-gradient-to-r from-traditional-800 to-traditional-900 text-white shrink-0">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="p-1.5 rounded-full bg-accent-500 shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="font-heading font-bold text-base leading-tight truncate tracking-wide">
                    Ink Baba Assistant
                  </p>
                  <p className="text-[11px] text-traditional-300">Quick answers · Arambol, Goa</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-white/10 transition-colors shrink-0"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-3 py-3 space-y-3 bg-gradient-to-b from-warm-50 to-white min-h-[200px]">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed font-body ${
                      msg.role === 'user'
                        ? 'bg-accent-500 text-white rounded-br-md'
                        : 'bg-white text-traditional-800 border border-traditional-200 shadow-sm rounded-bl-md'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-traditional-200 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-traditional-400 animate-bounce [animation-delay:0ms]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-traditional-400 animate-bounce [animation-delay:150ms]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-traditional-400 animate-bounce [animation-delay:300ms]" />
                  </div>
                </div>
              )}
            </div>

            {/* Quick questions */}
            <div className="shrink-0 border-t border-traditional-100 bg-white px-3 py-3 space-y-2">
              {unanswered.length > 0 ? (
                <>
                  <p className="text-[11px] font-semibold text-traditional-500 uppercase tracking-wide px-0.5">
                    Quick questions
                  </p>
                  <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto">
                    {unanswered.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        disabled={isTyping}
                        onClick={() => replyWithAnswer(item.id, item.question, item.answer)}
                        className="text-left text-xs px-2.5 py-1.5 rounded-full border border-accent-200 bg-accent-50 text-traditional-800 hover:bg-accent-100 hover:border-accent-300 transition-colors disabled:opacity-50 font-body"
                      >
                        {item.question}
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <p className="text-xs text-traditional-500 font-body px-0.5">{CHATBOT_WHATSAPP_CTA}</p>
              )}

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-green-500 hover:bg-green-600 text-white text-sm font-medium transition-colors"
              >
                <FaWhatsapp className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className={`relative p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 ${
          isOpen
            ? 'bg-traditional-800 text-white hover:bg-traditional-900'
            : 'bg-accent-500 text-white hover:bg-accent-600'
        }`}
        aria-label={isOpen ? 'Close Ink Baba assistant' : 'Open Ink Baba assistant'}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-6 h-6 sm:w-7 sm:h-7" /> : <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />}
        {!isOpen && (
          <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-400 border-2 border-white" />
        )}
      </button>
    </>
  );
};

export default ChatBotWidget;
