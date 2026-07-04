import { MessageCircle } from 'lucide-react';
import { socialLinks } from '@/lib/mockData';

export default function WhatsAppFloat() {
  return (
    <a
      href={socialLinks.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 transition-transform hover:scale-110"
    >
      <MessageCircle size={26} />
    </a>
  );
}
