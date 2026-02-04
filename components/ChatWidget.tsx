'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, FileText, User, Camera } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
}

export default function ChatWidget() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hola! Soy el asistente virtual de Oculus. ¿En qué puedo ayudarte? (Precios, Instalación, Garantía)',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showWhatsAppInput, setShowWhatsAppInput] = useState(false);
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickActions = [
    { id: 'quote', text: 'Solicitar Presupuesto', icon: FileText },
    { id: 'technician', text: 'Hablar con Técnico', icon: User },
    { id: 'examples', text: 'Ver Ejemplos', icon: Camera },
  ];

  const handleQuickAction = (actionId: string) => {
    let response = '';
    
    switch (actionId) {
      case 'quote':
        response = 'Para solicitar un presupuesto personalizado, por favor deja tu número de WhatsApp y un técnico se pondrá en contacto contigo.';
        break;
      case 'technician':
        response = 'Un técnico especializado analizará tu consulta. Por favor, comparte tu número de WhatsApp para que pueda contactarte directamente.';
        break;
      case 'examples':
        response = 'Puedes ver ejemplos de nuestras instalaciones en la galería de la página. También puedes solicitar una visita para ver trabajos en persona.';
        break;
      default:
        response = 'Gracias por tu interés. Un ingeniero analizará tu consulta. Por favor, deja tu WhatsApp para responderte.';
    }

    addBotMessage(response);
    
    if (actionId === 'quote' || actionId === 'technician') {
      setShowWhatsAppInput(true);
    }
  };

  const addBotMessage = (text: string) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          text,
          sender: 'bot',
          timestamp: new Date(),
        },
      ]);
    }, 1500);
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot response
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      addBotMessage(
        'Un ingeniero analizará tu consulta. Por favor, deja tu WhatsApp para responderte.'
      );
      setShowWhatsAppInput(true);
    }, 2000);
  };

  const handleWhatsAppSubmit = async () => {
    if (!whatsappNumber.trim()) return;

    try {
      const response = await fetch('/api/telegram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Chat Widget User',
          phone: whatsappNumber,
          message: `Consulta desde chat widget:\n${messages
            .filter((m) => m.sender === 'user')
            .map((m) => m.text)
            .join('\n')}`,
          location: 'Chat Widget',
          type: 'Chat Widget Inquiry',
        }),
      });

      if (response.ok) {
        addBotMessage(
          `¡Perfecto! He recibido tu número (${whatsappNumber}). Un técnico se pondrá en contacto contigo pronto vía WhatsApp.`
        );
        setWhatsappNumber('');
        setShowWhatsAppInput(false);
      } else {
        addBotMessage(
          'Hubo un error al procesar tu solicitud. Por favor, intenta contactarnos directamente por WhatsApp usando el botón de contacto.'
        );
      }
    } catch (error) {
      console.error('Error sending WhatsApp request:', error);
      addBotMessage(
        'Hubo un error. Por favor, contacta directamente usando el botón de WhatsApp en la página.'
      );
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-amber-500 hover:bg-amber-400 rounded-full shadow-lg shadow-amber-500/50 flex items-center justify-center text-slate-950 transition-all"
        aria-label="Open chat"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-8rem)] bg-background/90 backdrop-blur-md border border-slate-800 rounded-lg shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-amber-500/10 border-b border-slate-800 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-slate-200">
                  Oculus AI Assistant
                </span>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      message.sender === 'user'
                        ? 'bg-amber-500 text-slate-950'
                        : 'bg-slate-800 text-slate-200'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-slate-800 rounded-lg px-4 py-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
                      <div
                        className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                        style={{ animationDelay: '0.1s' }}
                      />
                      <div
                        className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                        style={{ animationDelay: '0.2s' }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Quick Actions */}
              {messages.length === 1 && (
                <div className="space-y-2">
                  {quickActions.map((action) => {
                    const Icon = action.icon;
                    return (
                      <button
                        key={action.id}
                        onClick={() => handleQuickAction(action.id)}
                        className="w-full flex items-center gap-3 px-4 py-3 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 rounded-lg text-left transition-colors"
                      >
                        <Icon className="w-5 h-5 text-amber-500 flex-shrink-0" />
                        <span className="text-sm text-slate-200">{action.text}</span>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* WhatsApp Input */}
              {showWhatsAppInput && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 space-y-3"
                >
                  <p className="text-sm text-slate-200">
                    Deja tu número de WhatsApp:
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="tel"
                      value={whatsappNumber}
                      onChange={(e) => setWhatsappNumber(e.target.value)}
                      placeholder="+34 600 000 000"
                      className="flex-1 px-3 py-2 bg-background border border-slate-700 rounded-lg text-slate-200 text-sm focus:outline-none focus:border-amber-500"
                    />
                    <button
                      onClick={handleWhatsAppSubmit}
                      className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg transition-colors"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-slate-800 p-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Escribe tu pregunta..."
                  className="flex-1 px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-200 text-sm focus:outline-none focus:border-amber-500"
                />
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim()}
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-400 disabled:bg-slate-700 disabled:cursor-not-allowed text-slate-950 rounded-lg transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
