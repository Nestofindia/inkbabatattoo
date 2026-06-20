'use client';

import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, X, XCircle } from 'lucide-react';

export type ToastVariant = 'success' | 'error';

export interface ToastProps {
  message: string;
  visible: boolean;
  variant?: ToastVariant;
  onClose: () => void;
  durationMs?: number;
}

const Toast: React.FC<ToastProps> = ({
  message,
  visible,
  variant = 'success',
  onClose,
  durationMs = 5000,
}) => {
  useEffect(() => {
    if (!visible) return;
    const timer = window.setTimeout(onClose, durationMs);
    return () => window.clearTimeout(timer);
  }, [visible, durationMs, onClose]);

  const isSuccess = variant === 'success';

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="status"
          aria-live="polite"
          className="fixed bottom-24 left-1/2 z-[100] w-[min(calc(100vw-2rem),24rem)] -translate-x-1/2 sm:bottom-8"
          initial={{ opacity: 0, y: 16, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.96 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className={`flex items-start gap-3 rounded-xl border px-4 py-3 shadow-lg backdrop-blur-md ${
              isSuccess
                ? 'border-accent-300 bg-white/95 text-traditional-900'
                : 'border-red-200 bg-white/95 text-traditional-900'
            }`}
          >
            {isSuccess ? (
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" aria-hidden />
            ) : (
              <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" aria-hidden />
            )}
            <p className="flex-1 text-sm font-body leading-snug sm:text-base">{message}</p>
            <button
              type="button"
              onClick={onClose}
              className="shrink-0 rounded-full p-1 text-traditional-500 transition-colors hover:bg-traditional-100 hover:text-traditional-800"
              aria-label="Dismiss notification"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
