'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

interface DemoTileProps {
  title: string;
  badge: string;
  placeholderNote: string;
  /** Screencast liefert Holger, siehe TODO-assets.md im Repo-Root. */
  videoSrc?: string;
  imageSrc?: string;
}

export default function DemoTile({ title, badge, placeholderNote, videoSrc, imageSrc }: DemoTileProps) {
  const [open, setOpen] = useState(false);
  const hasAsset = Boolean(videoSrc || imageSrc);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative flex flex-col text-left w-full rounded-2xl border border-gray-200 bg-white overflow-hidden hover:border-[#f90093]/30 hover:shadow-lg transition-all duration-300"
      >
        <div className="relative aspect-video w-full bg-[#071013] flex items-center justify-center overflow-hidden">
          {imageSrc ? (
            <Image src={imageSrc} alt={title} fill className="object-cover" />
          ) : (
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />
          )}
          <div className="relative z-10 w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#f90093]/80 transition-colors duration-300">
            <Play className="w-6 h-6 text-white ml-0.5" fill="currentColor" />
          </div>
          <span className="absolute bottom-3 right-3 px-2 py-1 rounded-md bg-black/60 text-white text-xs font-inter">
            {badge}
          </span>
        </div>
        <div className="p-4">
          <p className="font-heading font-semibold text-[#071013] text-sm leading-snug">{title}</p>
        </div>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{placeholderNote}</DialogDescription>
          </DialogHeader>
          {videoSrc ? (
            <video src={videoSrc} controls className="w-full rounded-lg" />
          ) : imageSrc ? (
            <div className="relative w-full aspect-video rounded-lg overflow-hidden">
              <Image src={imageSrc} alt={title} fill className="object-cover" />
            </div>
          ) : (
            !hasAsset && (
              <div className="rounded-lg border border-dashed border-white/30 p-8 text-center text-gray-400 font-inter text-sm">
                Video folgt. Im Erstgespräch zeige ich Ihnen dieses System live, an echten Daten.
              </div>
            )
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
