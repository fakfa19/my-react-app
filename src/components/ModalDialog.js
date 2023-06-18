import { useEffect, useRef } from 'react';

export default function ModalDialog({ isOpen, children }) {
  const ref = useRef();

  // useEffect(setup, dependencies?)
  // setup: [function]
  useEffect(() => {
    // Mounting and Updating
    console.log(`🚀 ~ Mounting and Updating`);
    if (!isOpen) {
      return;
    }
    const dialog = ref.current;
    dialog.showModal();

    // Unmounting
    return () => {
      console.log(`🚀 ~ Unmounting`);
      dialog.close();
    };
  }, [isOpen]);

  return <dialog ref={ref}>{children}</dialog>;
}