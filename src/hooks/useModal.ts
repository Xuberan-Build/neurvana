'use client';

import { useState, useCallback } from 'react';
import { ModalType } from '@/types';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState<ModalType>(null);
  const [modalData, setModalData] = useState<any>(null);

  const openModal = useCallback((type: ModalType, data?: any) => {
    setModalType(type);
    setModalData(data);
    setIsOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setModalType(null);
    setModalData(null);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  }, []);

  return {
    isOpen,
    modalType,
    modalData,
    openModal,
    closeModal
  };
};
